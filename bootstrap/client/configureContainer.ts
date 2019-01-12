import ContainerInterface from '@banejs/container/ContainerInterface';
import LoggerInterface from '@banejs/logger/LoggerInterface';
import EnvInterface from '@banejs/framework/Env/EnvInterface';
import ConfigInterface from '@banejs/framework/Config/ConfigInterface';

import Container from '@banejs/container/Container';
import Env from '@banejs/framework/Env/Env';
import Config from '@banejs/framework/Config/Config';

import LoggerBrowserConsole from 'app/lib/LoggerBrowserConsole';

/**
 * Composition root.
 *
 * @return {ContainerInterface}
 */
export default function configureContainer(): ContainerInterface {
    const container: ContainerInterface = new Container();

    container.singleton('Env', (): EnvInterface => (
        Reflect.construct(Env, [])
    ));

    container.singleton('Config', (): ConfigInterface => (
        Reflect.construct(Config, [])
    ));

    container.singleton('Logger', (): LoggerInterface => (
        Reflect.construct(LoggerBrowserConsole, [])
    ));

    return container;
}
