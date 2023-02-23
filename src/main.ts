import yargs from 'yargs';

import { startChainServer } from './server';

yargs
    .command('chain-server start', 'Start a chain server connecting to a upstream proxy.', (yargs) => {
        const config = yargs
            .option('port', {
                describe: 'Port to listen on',
                alias: 'p',
                type: 'number',
                default: 3927,
            })
            .option('upstream', {
                describe: 'URL to upstream proxy server',
                type: 'string',
                demandOption: true,
            })
            .option('verbose', {
                describe: 'Turn on verbose log for debug',
                alias: 'v',
                type: 'boolean',
                default: false,
            }).parseSync();
        
        startChainServer(config);

    })
    .demandCommand()
    .help()
    .parse();