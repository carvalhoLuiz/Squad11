module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],

    rules: {
        'no-unused-vars': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/state-in-constructor': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
    },
};
