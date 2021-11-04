interface PackageJson {
  version: string;
}

declare interface Window {
  ColorsGenerate: (primaryColor: string) => string[];
}

declare module '*.json' {
  const value: PackageJson;
  export default value;
}
