import Koa from 'koa';

export default async function storeUserMiddleware(context: Koa.Context, next: () => Promise<void>): Promise<void> {
    context.state.deviceInfo;

    await next();
}
