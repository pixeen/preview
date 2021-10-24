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

const userPixeenConfigPath = `${userPath}/.pixeen`

try {
    if (!fs.existsSync(`${userPixeenConfigPath}/index.html`)) {
        console.error('Does not have an html template...')
        console.log('Creating ./.pixeen/preview/index.html')
        // @todo copy file from template
        // return;
    }
} catch (err) {
    console.dir(err)
}

try {
    if (!fs.existsSync(`${userPixeenConfigPath}/index.tsx`)) {
        console.error('Does not have component wrapper...')
        console.log('Creating ./.pixeen/preview/index.tsx')
        // @todo copy file from template
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
        root: `${userPath}/.pixeen/preview`,
        server: {
            port,
        }
    })
    await server.listen()
    console.log(`http://localhost:${port}`)
})()
