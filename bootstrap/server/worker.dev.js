require('@babel/register')({
    extensions: ['.ts', '.tsx', '.jsx', '.js']
});

const { default: initApplication } = require('bootstrap/server/app.tsx');

initApplication();
