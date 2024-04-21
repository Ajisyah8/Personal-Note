const getInitialData = () => ([
    {
      id: 1,
      title: "Babel",
      note: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false
    },
    {
      id: 2,
      title: "Functional Component",
      note: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
      archived: false,
    },
    {
      id: 3,
      title: "Modularization",
      note: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
      archived: false,
    },
    {
      id: 4,
      title: "Lifecycle",
      note: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
      archived: false,
    },
    {
      id: 5,
      title: "ESM",
      note: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      archived: false,
    },
    {
      id: 6,
      title: "Module Bundler",
      note: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      archived: false,
    },
  ]);
  
  
  export { getInitialData };
  