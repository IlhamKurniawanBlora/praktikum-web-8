// contoh penggunaan express js

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ pesan: 'Halo dari API Express!' });
});
app.get('/about', (req, res) => {
    res.json({ pesan: 'Halo ini hasil dari /about' });
});
app.get('/contact', (req, res) => {
    res.json({ pesan: 'Halo ini hasil dari /contact' });
});


app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
