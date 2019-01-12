module.exports = function (api) {
    //var isProd = api.cache.invalidate(() => process.env.NODE_ENV !== 'development');
    api.cache(false);

    return {
        ignore: [
            'node_modules/**/*'
        ],
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-typescript',
                {
                    isTSX: true,
                    allExtensions: true
                }
            ],
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current'
                    },
                    useBuiltIns: 'usage'
                }
            ]
        ],
        plugins: [
            'babel-plugin-dynamic-import-node',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            'react-loadable/babel'
        ]
    };
};
