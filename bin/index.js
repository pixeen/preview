#!/usr/bin/env node

const { createServer } = require('vite')

;(async () => {
  const server = await createServer()
  await server.listen()
})()
