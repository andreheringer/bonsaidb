use bonsaidb_core::connection::StorageConnection;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
pub enum Command {
    User(UserCommand),
}

#[derive(StructOpt, Debug)]
pub enum UserCommand {
    List,
    Create { username: String },
    Delete { username: String },
}

impl Command {
    pub async fn execute<SC: StorageConnection>(self, server: SC) -> anyhow::Result<()> {
        match self {
            Command::User(user) => match user {
                UserCommand::Create { username } => {
                    server.create_user(&username).await?;
                    println!("User {} created", username);
                    Ok(())
                }
                UserCommand::List | UserCommand::Delete { .. } => {
                    todo!()
                }
            },
        }
    }
}
