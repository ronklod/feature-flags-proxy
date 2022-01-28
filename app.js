const port = 3333;

const { createApp } = require('@unleash/proxy');

const app = createApp({
    unleashUrl: 'http://localhost:4242/api/',
    unleashApiToken: '*:default.f741b301a8a09519e8311b62c0423d7cdc3c9483d172e2f2e4f1ef11',
    clientKeys: ['my-secret', 'another-proxy-secret', 's1'],
    refreshInterval: 1000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);

//toekn for production *:production.f8b1101504468d29fec17d870a80273d0ac190c7488608ba3344523c