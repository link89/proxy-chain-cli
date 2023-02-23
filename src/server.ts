import * as ProxyChain from 'proxy-chain';


export function startChainServer(config: {
    port: number;
    upstream: string;
    verbose: boolean;
}) {
    const server = new ProxyChain.Server({
        port: config.port,
        verbose: config.verbose,
        prepareRequestFunction: ({ request, username, password, hostname, port, isHttp, connectionId }) => {
            return {
                requestAuthentication: false,
                upstreamProxyUrl: config.upstream,
            };
        },
    });

    server.listen(() => {
        console.log(`Proxy server is listening on port ${server.port}`);
    });

    // Emitted when HTTP connection is closed
    server.on('connectionClosed', ({ connectionId, stats }) => {
        console.log(`Connection ${connectionId} closed`);
        console.dir(stats);
    });

    // Emitted when HTTP request fails
    server.on('requestFailed', ({ request, error }) => {
        console.log(`Request ${request.url} failed`);
        console.error(error);
    });
}