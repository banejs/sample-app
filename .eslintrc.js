module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "jest",
        "react",
        //"flowtype"
    ],
    "settings": {
        //"flowtype": {
        //    "onlyFilesWithFlowAnnotation": true
        //}
    },
    "rules": {
        "no-async-promise-executor": [
            "error"
        ],
        "no-await-in-loop": [
            "error"
        ],
        "no-template-curly-in-string": [
            "error"
        ],
        "valid-jsdoc": [
            "error",
            {
                "prefer": { "returns": "return" },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "object": "Object",
                    "array": "Array",
                    "function": "Function",
                    "String": "string",
                    "symbol": "Symbol"
                },
                "requireReturn": false,
                "requireParamDescription": false,
                "requireReturnDescription": false
            }
        ],
        "array-callback-return": [
            "error"
        ],
        "block-scoped-var": [
            "error"
        ],
        "curly": [
            "error",
            "all"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": [
            "error"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": [
            "error"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-alert": [
            "error"
        ],
        "no-caller": [
            "error"
        ],
        "no-div-regex": [
            "error"
        ],
        "no-else-return": [
            "error",
            { "allowElseIf": false }
        ],
        "no-eval": [
            "error"
        ],
        "no-extend-native": [
            "error"
        ],
        "no-extra-bind": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-implicit-coercion": [
            "error"
        ],
        "no-implied-eval": [
            "error"
        ],
        "no-invalid-this": [
            "error"
        ],
        "no-iterator": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "no-multi-str": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-proto": [
            "error"
        ],
        "no-redeclare": [
            "error",
            { "builtinGlobals": true }
        ],
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-return-await": [
            "error"
        ],
        "no-script-url": [
            "error"
        ],
        "no-self-assign": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-throw-literal": [
            "error"
        ],
        "no-unmodified-loop-condition": [
            "error"
        ],
        "no-unused-expressions": [
            "error"
        ],
        "no-useless-call": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "no-with": [
            "error"
        ],
        "radix": [
            "error",
            "always"
        ],
        "require-await": [
            "error"
        ],
        "wrap-iife": [
            "error",
            "inside"
        ],
        "yoda": [
            "error"
        ],
        "no-label-var": [
            "error"
        ],
        "no-shadow": [
            "error",
            { "hoist": "all" }
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-use-before-define": [
            "error",
            { "variables": true, "functions": false, "classes": true }
        ],
        "no-path-concat": [
            "error"
        ],

        /* Stylistic */
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-spacing": [
            "error"
        ],
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            { "before": false, "after": true }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "function-paren-newline": [
            "error",
            "multiline"
        ],
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "indent": [
            "error",
            4
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": [
            "error",
            { "beforeColon": false, "afterColon": true, "mode": "strict" }
        ],
        "keyword-spacing": [
            "error",
            { "before": true, "after": true }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-between-class-members": [
            "error",
            "always",
            { "exceptAfterSingleLine": true }
        ],
        "new-cap": [
            "error",
            { "newIsCap": true, "capIsNew": true, "properties": true }
        ],
        "new-parens": [
            "error"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-bitwise": [
            "error"
        ],
        "no-mixed-operators": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error",
            { "max": 2, "maxEOF": 1, "maxBOF": 0 }
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-unneeded-ternary": [
            "error",
            { "defaultAssignment": false }
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "object-curly-newline": [
            "error",
            { "consistent": true }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "block-like", "next": "*" },
            { "blankLine": "always", "prev": "*", "next": "block-like" },
            { "blankLine": "always", "prev": "*", "next": "case" },
            { "blankLine": "always", "prev": "*", "next": "default" },
            { "blankLine": "always", "prev": "function", "next": "*" },
            { "blankLine": "always", "prev": "*", "next": "function" },
            { "blankLine": "always", "prev": "export", "next": "*" },
            { "blankLine": "any", "prev": "*", "next": "export" },
            { "blankLine": "always", "prev": "import", "next": "*" },
            { "blankLine": "any", "prev": "import", "next": "import" },
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            { "before": false, "after": true }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "space-before-blocks": [
            "error"
        ],
        "space-before-function-paren": [
            "error",
            { "anonymous": "always", "named": "never", "asyncArrow": "always" }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ],
        "spaced-comment": [
            "error"
        ],
        "switch-colon-spacing": [
            "error",
            { "after": true, "before": false }
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error"
        ],

        /* ECMAScript 6 */
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            { "before": true, "after": true }
        ],
        "generator-star-spacing": [
            "error",
            { "before": true, "after": false }
        ],
        "no-duplicate-imports": [
            "error",
            { "includeExports": true }
        ],
        "no-useless-computed-key": [
            "error"
        ],
        "no-useless-rename": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "object-shorthand": [
            "error",
            "always"
        ],
        "prefer-const": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "prefer-template": [
            "error"
        ],
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "template-curly-spacing": [
            "error"
        ],
        "yield-star-spacing": [
            "error",
            { "before": true, "after": false }
        ],

        /* Jest */
        "jest/consistent-test-it": [
            "error",
            { "fn": "test" }
        ],
        //"jest/expect-expect": [
        //    "error"
        //],
        "jest/no-disabled-tests": [
            "error"
        ],
        "jest/no-focused-tests": [
            "error"
        ],
        "jest/no-identical-title": [
            "error"
        ],
        "jest/no-jasmine-globals": [
            "error"
        ],
        "jest/no-jest-import": [
            "error"
        ],
        "jest/no-test-prefixes": [
            "error"
        ],
        //"jest/no-test-return-statement": [
        //    "error"
        //],
        "jest/prefer-to-be-null": [
            "error"
        ],
        "jest/prefer-to-be-undefined": [
            "error"
        ],
        "jest/prefer-to-have-length": [
            "error"
        ],
        "jest/valid-describe": [
            "error"
        ],
        "jest/valid-expect-in-promise": [
            "error"
        ],
        "jest/valid-expect": [
            "error"
        ],

        /* Flow */
        /*"flowtype/array-style-complex-type": [
            "error",
            "verbose"
        ],
        "flowtype/array-style-simple-type": [
            "error",
            "verbose"
        ],
        "flowtype/boolean-style": [
            "error",
            "boolean"
        ],
        "flowtype/define-flow-type": [
            "error"
        ],
        //"flowtype/delimiter-dangle": [
        //    "error",
        //    "never"
        //],
        "flowtype/generic-spacing": [
            "error",
            "never"
        ],
        "flowtype/newline-after-flow-annotation": [
            "error",
            "always"
        ],
        "flowtype/no-dupe-keys": [
            "error"
        ],
        "flowtype/no-primitive-constructor-types": [
            "error"
        ],
        "flowtype/no-types-missing-file-annotation": [
            "error"
        ],
        "flowtype/no-unused-expressions": [
            "error"
        ],
        //"flowtype/object-type-delimiter": [
        //    "error",
        //    "comma"
        //],
        "flowtype/require-parameter-type": [
            "error",
            { "excludeArrowFunctions": false }
        ],
        "flowtype/require-return-type": [
            "error",
            "always",
            { "annotateUndefined": "always", "excludeArrowFunctions": false }
        ],
        "flowtype/require-types-at-top": [
            "error",
            "always"
        ],
        "flowtype/require-valid-file-annotation": [
            "error",
            "always",
            { "annotationStyle": "line" }
        ],
        "flowtype/require-variable-type": [
            "error"
        ],
        "flowtype/semi": [
            "error",
            "always"
        ],
        "flowtype/space-after-type-colon": [
            "error",
            "always",
            { "allowLineBreak": true }
        ],
        "flowtype/space-before-generic-bracket": [
            "error",
            "never"
        ],
        "flowtype/space-before-type-colon": [
            "error",
            "never"
        ],
        "flowtype/type-id-match": [
            "error",
            "^([A-Z][a-z0-9]*)+Type$"
        ],
        "flowtype/type-import-style": [
            "error",
            "declaration"
        ],
        "flowtype/union-intersection-spacing": [
            "error",
            "always"
        ],
        "flowtype/use-flow-type": [
            "error"
        ],*/

        /* React */
        "react/button-has-type": [
            "error"
        ],
        "react/default-props-match-prop-types": [
            "error"
        ],
        "react/no-children-prop": [
            "error"
        ],
        "react/no-danger-with-children": [
            "error"
        ],
        "react/no-deprecated": [
            "error"
        ],
        "react/no-direct-mutation-state": [
            "error"
        ],
        "react/no-find-dom-node": [
            "error"
        ],
        "react/no-redundant-should-component-update": [
            "error"
        ],
        "react/no-render-return-value": [
            "error"
        ],
        "react/no-typos": [
            "error"
        ],
        "react/no-string-refs": [
            "error"
        ],
        "react/no-this-in-sfc": [
            "error"
        ],
        "react/no-unsafe": [
            "error"
        ],
        "react/no-unused-state": [
            "error"
        ],
        "react/no-will-update-set-state": [
            "error",
            "disallow-in-func"
        ],
        "react/prefer-es6-class": [
            "error",
            "always"
        ],
        "react/prop-types": [
            "error"
        ],
        "react/react-in-jsx-scope": [
            "error"
        ],
        "react/require-render-return": [
            "error"
        ],
        "react/self-closing-comp": [
            "error",
            { "component": true, "html": true }
        ],
        "react/sort-comp": [
            "error",
            {
                "order": [
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "/^on.+$/",
                    "/^handle.+$/",
                    "everything-else",
                    "render"
                ]
            }
        ],
        "react/style-prop-object": [
            "error"
        ],
        "react/void-dom-elements-no-children": [
            "error"
        ],
        "react/jsx-boolean-value": [
            "error",
            "never"
        ],
        "react/jsx-closing-bracket-location": [
            "error",
            "line-aligned"
        ],
        "react/jsx-closing-tag-location": [
            "error"
        ],
        "react/jsx-curly-spacing": [
            "error",
            { "when": "never" }
        ],
        "react/jsx-equals-spacing": [
            "error",
            "never"
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline"
        ],
        "react/jsx-key": [
            "error"
        ],
        "react/jsx-no-bind": [
            "error"
        ],
        "react/jsx-no-duplicate-props": [
            "error"
        ],
        "react/jsx-pascal-case": [
            "error"
        ],
        "react/jsx-uses-react": [
            "error"
        ],
        "react/jsx-uses-vars": [
            "error"
        ],
        "react/jsx-curly-brace-presence": [
            "error",
            { "props": "never", "children": "never" }
        ],
        "react/jsx-tag-spacing": [
            "error",
            {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ]
    }
};