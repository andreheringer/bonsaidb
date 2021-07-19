initSidebarItems({"enum":[["Error","Errors relating to encryption and/or secret storage."],["LocalVaultKeyStorageError","Errors from local vault key storage."]],"struct":[["LocalVaultKeyStorage","Stores vault key locally on disk. This is in general considered insecure, and shouldn’t be used without careful consideration."]],"trait":[["AnyVaultKeyStorage","A [`VaultKeyStorage`] trait that wraps the Error type before returning. This type is used to allow the Vault to operate without any generic parameters. This trait is auto-implemented for all [`VaultKeyStorage`] implementors."],["VaultKeyStorage","Stores encrypted keys for a vault."]]});