module.exports = {
	extends: ["eslint-config-codely/typescript"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
			rules: {
				quotes: ["error", "double"],
				semi: ["error", "always"],
				"comma-dangle": ["error", "only-multiline"],
				"space-before-function-paren": ["error", "never"],
				"no-console": "off",
			},
		},
	],
};
