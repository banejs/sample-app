import ContainerInterface from '@banejs/container/ContainerInterface';
import LoggerInterface from '@banejs/logger/LoggerInterface';
import EnvInterface from '@banejs/framework/Env/EnvInterface';
import ConfigInterface from '@banejs/framework/Config/ConfigInterface';
import RouterInterface from '@banejs/framework/Router/RouterInterface';
import ServerInterface from '@banejs/framework/Server/ServerInterface';

import Container from '@banejs/container/Container';
import LoggerColorConsole from '@banejs/logger/LoggerColorConsole';
import Env from '@banejs/framework/Env/Env';
import Config from '@banejs/framework/Config/Config';
import Router from '@banejs/framework/Router/Router';
import Server from '@banejs/framework/Server/Server';

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
        Reflect.construct(LoggerColorConsole, [])
    ));

    container.singleton('ServerRouter', (): RouterInterface => (
        Reflect.construct(Router, [])
    ));

    container.bind('Server', (context: ContainerInterface): ServerInterface => (
        Reflect.construct(Server, [context.get('Env'), context.get('Logger'), context.get('ServerRouter')])
    ));

    return container;
}
