#!/usr/bin/env node

const {createServer} = require('vite')

const port = 3000

;(async () => {
    const server = await createServer({
        server: {port}
    })
    await server.listen()
    console.log(`http://localhost:${port}`)
})()
