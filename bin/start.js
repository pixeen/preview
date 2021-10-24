#!/usr/bin/env node

// requirements for vite
// index.html
// index.tsx

const fs = require('fs')

// Userland Path
const userPath = process.cwd()

// Package Path
const packagePath = __dirname

const userPackagePath = `${userPath}/package.json`

// Check if there is a package.json in Userland path
try {
    if (!fs.existsSync(userPackagePath)) {
        console.error('ERROR: Requires project.json file in the root folder...')
        // return;
    }
} catch (err) {
    console.dir(err)
}

// 3. make sure it has a index.html
// ...

const {createServer} = require('vite')

const port = 3000

;(async () => {
    const server = await createServer({
        server: {
            port
        }
    })
    await server.listen()
    console.log(`http://localhost:${port}`)
})()
