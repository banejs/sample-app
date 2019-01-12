import Koa from 'koa';
import UAParser from 'ua-parser-js';

export default async function useragentMiddleware(context: Koa.Context, next: () => Promise<void>): Promise<void> {
    const userAgentParser: any = new UAParser(context.headers['user-agent']);

    context.state.deviceInfo = userAgentParser.getDevice();

    await next();
}
