declare function require(path: string): string;

declare module "*.html" {
    const content: string;
    export default content;
}