Proyek Infinity Scroll
======================

Deskripsi:
-----------
Proyek ini adalah aplikasi web sederhana yang menampilkan daftar data (postingan) dari API publik menggunakan teknik infinite scroll. Infinite scroll memungkinkan data baru dimuat secara otomatis saat pengguna menggulir ke bagian bawah halaman, tanpa perlu menekan tombol apa pun.

Fitur Utama:
------------
- Mengambil data dari API https://jsonplaceholder.typicode.com/posts
- Menampilkan data secara bertahap (10 item per halaman)
- Saat pengguna scroll ke bawah, data berikutnya akan dimuat otomatis
- Tampilan sederhana dan responsif

Penjelasan File:
----------------
- `index.html`: Struktur halaman web dan elemen utama.
- `style.css`: Mengatur tampilan dan tata letak agar lebih menarik dan responsif.
- `script.js`: Logika utama untuk mengambil data dari API dan mengatur infinite scroll.
- `catatan.md`: Penjelasan dan dokumentasi proyek.

Cara Kerja Infinite Scroll:
--------------------------
1. Saat halaman dibuka, aplikasi mengambil 10 data pertama dari API dan menampilkannya.
2. Ketika pengguna menggulir ke bawah mendekati akhir halaman, aplikasi otomatis mengambil 10 data berikutnya.
3. Proses ini berulang hingga seluruh data dari API ditampilkan.

Manfaat:
--------
- Memudahkan pengguna melihat banyak data tanpa harus memuat ulang halaman atau menekan tombol "Load More".
- Cocok untuk aplikasi yang menampilkan feed, berita, atau daftar produk.

Catatan Tambahan:
----------------
- Pastikan koneksi internet aktif saat membuka aplikasi, karena data diambil secara langsung dari API.
- Aplikasi ini hanya contoh sederhana, masih banyak pengembangan dan penyempurnaan yang bisa dilakukan.
