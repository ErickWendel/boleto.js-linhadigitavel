const boleto = require('./lib/boleto')
const Hapi = require('hapi')
const Path = require('path')
const Vision = require('vision')
const Inert = require('inert')
const Joi = require('joi')
const server = new Hapi.Server({})
const port = 8081
server.connection({
    port,
    routes: {
        cors: true
    }
})

server.register([Vision, Inert], () => {
    server.views({
        engines: {
            ejs: require('ejs')
        },
        relativeTo: __dirname,
        path: 'assets'
    })

    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './assets',
                listing: false,
                index: true
            }
        }
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, reply) => {
            return reply.view('layout.ejs', boleto.renderTest())
        }
    })

    server.route({
        method: 'POST',
        path: '/emitirBoleto',
        config: {
            handler: async(req, reply) => {
                const options = req.payload
                return reply.view('layout.ejs', boleto.renderOptions(options))
            },
            validate: {
                payload: {
                    cpf: Joi.string().required(),
                    linhaDigitavel: Joi.string().required(),
                    dataEmissao: Joi.date().required(),
                    dataVencimento: Joi.date().required(),
                    valor: Joi.number().required(),
                    nossoNumero: Joi.string().required(),
                    numeroDocumento: Joi.string().required(),
                    cedente: Joi.string().required(),
                    cedenteCnpj: Joi.string().required(),
                    agencia: Joi.string().required(),
                    codigoCedente: Joi.string().required(),
                    carteira: Joi.string().required(),
                    pagador: Joi.string().required(),
                    logoURL: Joi.string(),
                }
            }
        }
    })

    server.start((e) => {
        console.log(`runnning at ${port}`)
    })
})