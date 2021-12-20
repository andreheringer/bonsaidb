use std::{
    env::{current_dir, set_current_dir},
    io::{stdout, Write},
};

use khonsu_tools::{
    anyhow,
    audit::{self, Audit},
    code_coverage::{self, CodeCoverage},
    devx_cmd::{run, Cmd},
};
use serde::Serialize;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
pub enum Commands {
    GenerateCodeCoverageReport {
        #[structopt(long = "install-dependencies")]
        install_dependencies: bool,
    },
    TestMatrix,
    Test {
        #[structopt(long)]
        fail_on_warnings: bool,
    },
    Audit {
        command: Option<String>,
    },
    InstallPreCommitHook,
}

fn main() -> anyhow::Result<()> {
    if std::env::args().len() > 1 {
        let command = Commands::from_args();
        match command {
            Commands::GenerateCodeCoverageReport {
                install_dependencies,
            } => CodeCoverage::<CoverageConfig>::execute(install_dependencies),
            Commands::TestMatrix => generate_test_matrix_output(),
            Commands::Test { fail_on_warnings } => run_all_tests(fail_on_warnings),
            Commands::Audit { command } => Audit::<AuditConfig>::execute(command),
            Commands::InstallPreCommitHook => khonsu_tools::pre_commit::install(),
        }
    } else {
        run_all_tests(true)
    }
}

struct CoverageConfig;

impl code_coverage::Config for CoverageConfig {
    fn cargo_args() -> Vec<String> {
        vec![
            String::from("+nightly"),
            String::from("test"),
            String::from("--workspace"),
            String::from("--all-features"),
            String::from("--all-targets"),
        ]
    }
}

#[derive(Serialize)]
struct TestSuite {
    cargo_args: &'static str,
}

#[derive(Serialize)]
struct TestMatrix {
    include: &'static [TestSuite],
}

fn all_tests() -> &'static [TestSuite] {
    &[
        TestSuite {
            cargo_args: "--package bonsaidb-core --no-default-features",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-local --no-default-features",
        },
        TestSuite {
            cargo_args: "--all-features",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-local --no-default-features --features encryption",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-local --no-default-features --features multiuser",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-server --no-default-features",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-server --no-default-features --features encryption",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-server --no-default-features --features websockets",
        },
        TestSuite {
            cargo_args: "--package bonsaidb-server --no-default-features --features acme",
        },
        TestSuite {
            cargo_args: "--package bonsaidb --no-default-features --features server,client,test-util",
        },
        TestSuite {
            cargo_args: "--package bonsaidb --no-default-features --features server,client,test-util,websockets",
        },
        TestSuite {
            cargo_args: "--package bonsaidb --no-default-features --features server,client,test-util,server-acme",
        },
        TestSuite {
            cargo_args:
                "--package bonsaidb --no-default-features --features server,client,test-util,server-acme,websockets",
        },
    ]
}

fn generate_test_matrix_output() -> anyhow::Result<()> {
    let stdout = stdout();
    let mut stdout = stdout.lock();
    stdout.write_all(b"::set-output name=test-matrix::")?;
    stdout.write_all(&serde_json::to_vec(all_tests())?)?;
    stdout.write_all(b"\n")?;
    Ok(())
}

fn run_all_tests(fail_on_warnings: bool) -> anyhow::Result<()> {
    let executing_dir = current_dir()?;
    for test in all_tests() {
        println!("Running clippy for {}", test.cargo_args);
        let mut clippy = Cmd::new("cargo");
        let mut clippy = clippy.arg("clippy").arg("--all-targets");

        for arg in test.cargo_args.split(' ') {
            clippy = clippy.arg(arg);
        }

        if fail_on_warnings {
            clippy = clippy.arg("--").arg("-D").arg("warnings");
        }

        clippy.run()?;

        println!("Running tests for {}", test.cargo_args);
        let mut cargo = Cmd::new("cargo");
        let mut cargo = cargo.arg("test").arg("--all-targets");

        for arg in test.cargo_args.split(' ') {
            cargo = cargo.arg(arg);
        }
        cargo.run()?;
    }

    println!("Running clippy for wasm32 client");
    set_current_dir(executing_dir)?;
    let mut clippy = Cmd::new("cargo");
    let mut clippy = clippy.args([
        "clippy",
        "--target",
        "wasm32-unknown-unknown",
        "--target-dir",
        "target/wasm",
        "--package",
        "bonsaidb-client",
    ]);
    if fail_on_warnings {
        clippy = clippy.arg("--").arg("-D").arg("warnings");
    }

    clippy.run()?;

    println!("Generating docs");
    run!("cargo", "doc", "--all-features", "--no-deps")?;
    Ok(())
}

struct AuditConfig;

impl audit::Config for AuditConfig {
    fn args() -> Vec<String> {
        vec![
            String::from("--all-features"),
            String::from("--exclude=xtask"),
            // examples
            String::from("--exclude=axum"),
            String::from("--exclude=acme"),
            String::from("--exclude=basic-local"),
            String::from("--exclude=basic-server"),
            String::from("--exclude=view-histogram"),
        ]
    }
}
