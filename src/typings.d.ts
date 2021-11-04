interface PackageJson {
  version: string;
}

declare interface Window {
  ColorGenerate: (primaryColor: string) => string[];
}

declare module '*.json' {
  const value: PackageJson;
  export default value;
}
