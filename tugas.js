const express = require('express');
const app = express();

app.use(express.json());

// Data sementara (simulasi database)
let barang = [
    { id: 1, nama: 'Barang 1', harga: 10000 },
    { id: 2, nama: 'Barang 2', harga: 20000 }
];
app.get('/', (req, res) => {
    res.json({ pesan: 'Daftar Barang', data: 'Selamat Datang di API Barang' });
});

// 1. CREATE (Menambah data baru)
app.post('/barang', (req, res) => {
    const { id, nama, harga } = req.body;
    barang.push({ id, nama, harga });
    res.json({ pesan: 'Barang berhasil ditambahkan', data: { id, nama, harga } });
});

// 2. READ (Menampilkan semua data)
app.get('/barang', (req, res) => {
    res.json({ pesan: 'Daftar Barang', data: barang });
});

// 3. READ BY ID (Menampilkan data berdasarkan ID)
app.get('/barang/:id', (req, res) => {
    const { id } = req.params;
    const item = barang.find(b => b.id === parseInt(id));
    if (item) {
        res.json({ pesan: 'Detail Barang', data: item });
    } else {
        res.status(404).json({ pesan: 'Barang tidak ditemukan' });
    }
});

// 4. UPDATE (Mengubah data berdasarkan ID)
app.put('/barang/:id', (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
    const index = barang.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        barang[index] = { id: parseInt(id), nama, harga };
        res.json({ pesan: 'Barang berhasil diperbarui', data: barang[index] });
    } else {
        res.status(404).json({ pesan: 'Barang tidak ditemukan' });
    }
});

// 5. DELETE (Menghapus data berdasarkan ID)
app.delete('/barang/:id', (req, res) => {
    const { id } = req.params;
    const index = barang.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        const deleted = barang.splice(index, 1);
        res.json({ pesan: 'Barang berhasil dihapus', data: deleted[0] });
    } else {
        res.status(404).json({ pesan: 'Barang tidak ditemukan' });
    }
});

// Menjalankan server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
