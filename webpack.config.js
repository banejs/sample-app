const path = require('path');

const { ReactLoadablePlugin } = require('react-loadable/webpack');

const env = process.env.NODE_ENV;
const isDev = env === 'development';

const browsers = [
    'Chrome 70'
];

module.exports = {
    entry: {
        app: path.join(__dirname, 'bootstrap', 'client', 'app.tsx')
    },
    output: {
        publicPath: '/assets/',
        path: path.join(__dirname, 'static', 'assets'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js'
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            // Use faster and smaller ES6 build
            mobx: path.join(__dirname, 'node_modules', 'mobx', 'lib', 'mobx.es6.js')
        }
    },
    mode: isDev ? 'development' : 'production',
    watch: false, // TODO
    bail: false,
    profile: true,
    devtool: isDev ? 'cheap-source-map' : 'source-map',
    stats: {
        // Remove asset Information
        assets: false,
        // Remove build date and time information
        builtAt: false,
        // Remove children information
        children: false,
        // Remove chunk information (setting this to `false` allows for a less verbose output)
        chunks: false,
        // Do not show the entry points with the corresponding bundles
        entrypoints: false,
        // Add errors
        errors: true,
        // Add details to errors (like resolving log)
        errorDetails: true,
        // Remove the hash of the compilation
        hash: false,
        // Remove built modules information
        modules: false,
        // Add timing information
        timings: true,
        // Remove webpack version information
        version: false,
        // Add warnings
        warnings: true
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: [
                    /static/
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
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
                                        targets: { browsers },
                                        modules: false,
                                        useBuiltIns: 'usage'
                                    }
                                ]
                            ],
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-proposal-object-rest-spread',
                                '@babel/plugin-proposal-class-properties',
                                'react-loadable/babel'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ReactLoadablePlugin({
            filename: path.join('static', 'build', 'react-loadable.json')
        })
    ],
    optimization: {
        occurrenceOrder: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
                common: {
                    name: 'common',
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
};
