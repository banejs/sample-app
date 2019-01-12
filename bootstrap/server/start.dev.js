const path = require('path');
const cluster = require('cluster');

const chokidar = require('chokidar');

const { default: LoggerColorConsole } = require('@banejs/logger/LoggerColorConsole');

const logger = new LoggerColorConsole();
const workersCount = 1;

cluster.setupMaster({
    exec: path.join(__dirname, 'worker.dev.js'),
    silent: false
});

cluster.on('online', (worker) => {
    logger.debug('Worker {{pid}} is online', { pid: worker.process.pid });
});

cluster.on('exit', (worker, code, signal) => {
    logger.debug('Worker {{pid}} died with code {{code}} and signal {{signal}}, starting a new worker', { pid: worker.process.pid, code, signal });

    cluster.fork();
});

const watcher = chokidar.watch([path.join(__dirname)], {
    ignored: /bootstrap\/server\/start\.dev\.js$/,
    usePolling: true,
    interval: 300
});

watcher.on('change', (filepath) => {
    Object.values(cluster.workers).forEach((worker) => {
        logger.debug('File {{filepath}} has been changed, going to disconnect worker {{pid}}', { filepath, pid: worker.process.pid });

        if (worker && worker.process.connected) {
            worker.disconnect()
        }
    });
});

logger.debug('Master worker {{pid}} is running', { pid: process.pid });

for (let i = 0; i < workersCount; i++) {
    cluster.fork();
}
