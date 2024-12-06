// contoh penggunaan node js native

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ pesan: 'Halo dari API Node.js Native!' }));
    } else if (req.url === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => (body += chunk));
        req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ pesan: `Hai ${data.nama}, umur kamu ${data.umur}` }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ pesan: 'Tidak ditemukan' }));
    }
});

server.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
