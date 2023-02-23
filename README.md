# proxy-chain-cli
Command line interface of proxy-chain.

## Installation

```bash
npm install -g proxy-chain-cli
proxy-chain-cli --help
```

## Usage

### Start a Chain Server

```bash
proxy-chain-cli chain_server start --help
```

For example, 

```bash
proxy-chain-cli chain-server start -p 3000 --upstream http://localhost:3128
```

Will start a server listen on port 3000 and forward request to specified upstream server.

TODO: More features to come in the future.
