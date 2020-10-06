const { Appsignal } = require("@appsignal/nodejs")

exports.appsignal = new Appsignal({
  active: true,
  name: "Node Example",
  apiKey: 'a1d7abab-dcbf-464b-a546-bb535e6ec73c',
  environment: "development"
})

