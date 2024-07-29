# Use Memo

- React.memo adalah higher-order component (HOC) yang digunakan untuk memoize seluruh komponen, sehingga komponen tersebut hanya akan dirender ulang jika props-nya berubah.

- Fleksibilitas
    Meminimalisir component yang tidak ada hubungannya (menghindari render ulang kepada component yang tidak berubah valuenya)