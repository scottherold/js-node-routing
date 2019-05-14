// Get the http module
var http = require('http');

// fs module allows us to read and write content for responses!!
var fs = require('fs');

// Create the server using http module:
var server = http.createServer(function (request, response) {
    // See what URL the client is requesting:
    console.log('client request URL: ', request.url);

    // Routes
    // Main
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'}) //send data about response
            response.write(contents); // send response body
            response.end(); // end
        })
    }
    // Ninjas
    else if(request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'}) //send data about response
            response.write(contents); // send response body
            response.end(); // end
        })
    }
    // Dojos
    else if(request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'}) //send data about response
            response.write(contents); // send response body
            response.end(); // end
        })
    }
    // request didn't match anything:
    else {
        response.writeHead(404); // error code
        response.end('URL requested not available!') // Info sent to browser to display
    }
});
// Tell your server which port to run on
server.listen(6789);
// print info in console
console.log("Running in localhost at port 6789");
