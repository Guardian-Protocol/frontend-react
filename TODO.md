```ts
type Config = Record<string, GearTarget>

interface GearTarget {
    network: String,
    fungible_token: SmartContract,
    liquid_stake: SmartContract,
}

interface SmartContract {
    address: String,
    metadata: FilePath,
    gas_limit?: integer
}
```
