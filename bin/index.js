#!/usr/bin/env node

// TODO
// 1. determine the path where the script is executed
// 2. make sure it has a package.jso file in the root folder
// ...

const {createServer} = require('vite')

const port = 3000

;(async () => {
    const server = await createServer({server: {port}})
    await server.listen()
    console.log(__dirname)
    console.log(`http://localhost:${port}`)
})()
