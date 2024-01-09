const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    if (req.url === '/') {
        res.write('<h1>Node and Nginx on Docker is Working</h1>');
        res.end();
    } else if (req.url === '/hello') { // Menggunakan 'else if' untuk pengecekan URL
        res.write('<h1>Hello World</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' }); // Handle jika URL tidak ditemukan
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(process.env.PORT || 3000, () => console.log(`server running on ${server.address().port}`));
