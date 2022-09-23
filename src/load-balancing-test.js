var argument = process.argv.splice(2)
var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer({})

var address = [
	{
		host: 'localhost',
		port: 3000
	}
]
var i = 0
var server = http.createServer(function (req, res) {
	proxy.web(req, res, {
		target: address[i],
		function(err) {
			console.log(err)
		}
	})
	i = (i + 1) % address.length()
})
server.listen(argument[0] || 8000)
console.log('Proxy Server Started on 8000')
