use std::{
    borrow::Cow,
    fmt::{Debug, Display},
};

use serde::{Deserialize, Serialize};

use crate::schema::Schematic;

/// A unique collection id. Choose collection names that aren't likely to
/// conflict with others, so that if someone mixes collections from multiple
/// authors in a single database.
#[derive(Debug, Clone, Serialize, Deserialize, Hash, Eq, PartialEq)]
#[serde(transparent)]
pub struct Id(pub(crate) Cow<'static, str>);

impl From<&'static str> for Id {
    fn from(str: &'static str) -> Self {
        Self(Cow::from(str))
    }
}

impl From<String> for Id {
    fn from(str: String) -> Self {
        Self(Cow::from(str))
    }
}

impl Display for Id {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.0, f)
    }
}

impl AsRef<str> for Id {
    fn as_ref(&self) -> &str {
        self.0.as_ref()
    }
}

/// A namespaced collection of `Document<Self>` items and views.
pub trait Collection: Debug + Send + Sync {
    /// The `Id` of this collection.
    fn collection_id() -> Id;

    /// Defines all `View`s in this collection in `schema`.
    fn define_views(schema: &mut Schematic);
}

#[test]
fn test_id_conversions() {
    assert_eq!(Id::from("a").to_string(), "a");
    assert_eq!(Id::from(String::from("a")).to_string(), "a");
}
