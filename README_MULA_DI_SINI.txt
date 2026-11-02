ONTRACK LAUNCHER — JABATAN FARMASI HOSPITAL KEMAMAN

TUJUAN
Halaman pelancar PWA yang mempunyai ikon rasmi OnTrack apabila dipasang melalui Chrome Android. Ia BUKAN dashboard itu sendiri: klik Buka Dashboard OnTrack untuk pergi ke Apps Script sedia ada.

LANGKAH PENTADBIR
1. Buka config.js dalam Notepad.
2. Tukar https://script.google.com/macros/s/AKfycbzA4tq7bnuTfTEJuG446VxJ9n9GxfVu3bHWtjqRW0ykvfLv5LF9SbyDXZ5iqQI7jaBX/exec kepada URL deployment OnTrack sebenar, contohnya pautan https://script.google.com/macros/s/.../exec (gunakan pautan sebenar, jangan gunakan contoh).
3. Simpan. Muat naik SEMUA fail dalam folder ini ke hosting statik HTTPS dengan struktur folder asal. Contoh: GitHub Pages atau hosting organisasi yang diluluskan IT. Jangan upload data staf/pesakit ke hosting awam.
4. Buka URL laman pelancar yang dihoskan; tekan Buka Dashboard OnTrack untuk uji pautan dan Google login.
5. Pada Samsung Chrome, buka URL laman pelancar, tekan ⋮ > Add to Home screen / Install app.
6. Semak logo OnTrack muncul. Kongsi URL laman pelancar yang sama kepada semua staf.

PENTING
- Membuka aplikasi melalui ikon akan memaparkan halaman pelancar dahulu. Menekan butang akan membuka dashboard GAS melalui browser — bukan menukar GAS menjadi PWA secara automatik.
- Untuk benar-benar membuka dashboard terus dalam PWA tanpa halaman perantaraan, perlu hosting/integrasi yang lebih kompleks dan semakan IT/security.
- Jangan hosting maklumat dalaman atau rahsia dalam fail statik.
- Izin akses Google Apps Script sedia ada masih terpakai.
- Jika Chrome tidak menunjukkan Install, semak HTTPS, manifest dan icon, atau cuba Add to Home screen.
- Apabila URL deploy Apps Script berubah, kemas kini config.js di hosting. Jika pengguna nampak URL lama, refresh pelancar.
