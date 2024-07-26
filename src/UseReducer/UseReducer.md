# UseReducer

- State yang Kompleks:

Ketika state terdiri dari beberapa sub-values atau membutuhkan logika kompleks untuk memperbarui nilai state.

- State yang Bergantung pada State Lain:

Jika perubahan satu bagian dari state mempengaruhi bagian lain dari state tersebut, useReducer dapat membantu menjaga logika pembaruan tetap teratur.

- Pembaharuan State yang Terkoordinasi:

Ketika beberapa tindakan berbeda menghasilkan pembaruan state yang berbeda, menggunakan useReducer dapat membantu menjaga logika pembaruan tetap konsisten.

- State Management yang Terpusat:

Ketika ingin memisahkan logika state management dari komponen, misalnya dengan mendefinisikan reducer function di luar komponen.


## Kapan Menggunakan useReducer?

- Form Handling yang Kompleks:

Ketika menangani form dengan banyak input dan state yang saling bergantung.

- Mengelola State yang Tidak Linear:

Ketika state management melibatkan berbagai aksi yang memodifikasi state dengan cara yang berbeda.

- Pemisahan Logika:

Ketika ingin memisahkan logika bisnis dari komponen, sehingga lebih mudah diuji dan dikelola.