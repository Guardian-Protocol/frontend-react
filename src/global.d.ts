// declaring .wasm, since TS doesn't support experimental modules
// source: https://github.com/microsoft/TypeScript/issues/31713

declare module '*.wasm' {
  const wasmValue: string
  export = wasmValue
}
