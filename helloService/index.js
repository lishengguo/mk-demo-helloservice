const { config, start } = require("mk-server")
const serverConfig = require("./config")

const firstService = require("./services/firstService/index.js")

const services = { 
    firstService,
}

config(serverConfig({ services }))

start()