SOP penggunaan aplikasi

1. Jalankan Perintah `npm i` untuk menginstalasi package dari node js

2. Setting Environment dan sesuaikan dengan kebutuhan

3. test dan jalankan aplikasi dengan perintah ` npm run dev `


# List Perintah

` npx sequelize-cli model:generate --name User --attributes index: string `

` npm run dev `

` npm run migrate `

` npm run migrate:fresh `

[Sequlize Query Interface Documentation](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-addConstraint)


Penjelasan Folder
`application/`
Berisi use cases (business logic) yang mengatur bagaimana data diproses. Contoh: service untuk membuat user, menghitung harga, dll.

`domain/`
Hanya berisi Entities (Entity Models) yang bersifat murni dan tidak bergantung pada framework atau teknologi tertentu. Contoh: User, Product.

`infrastructure/`
Berisi implementasi teknis yang mendukung aplikasi. Misalnya:

`database/` : Koneksi database, konfigurasi ORM, dll.

`repositories/`: Implementasi CRUD terhadap database.

`express/:` Konfigurasi Express, routing, middleware, dll.

`config/:` Pengaturan aplikasi (misalnya konfigurasi database, secret keys, dll.).

`interface/`
Berisi Controllers yang menjadi penghubung antara request dari pengguna dengan use case.

`controllers/`: Menerima HTTP request, memanggil use cases, dan mengembalikan HTTP response.

`validators/`: Validasi request.

`shared/`
Tempat untuk menyimpan utility functions, constants, atau helpers yang digunakan di seluruh aplikasi.

app.ts

index.js: Entry point aplikasi yang memulai server.

# Standarisasi

`naming` : menggunakan Pascal Case dengan format (service-dir)

`response` : menggunakan Handler Base Response Handler dan Error Handler