/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

export default {
    arrowParens: 'avoid',
    singleQuote: true,
    printWidth: 90,
    semi: false,
    trailingComma: 'none',
    plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.4.5',
};