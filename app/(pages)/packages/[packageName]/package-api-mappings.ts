const mappings = {
  ramadan: {
    "*": "http://bakhla.devdusija.com/data/get_all_ramzan_packages",
    static: "http://bakhla.devdusija.com/data/ramzan_umrah_description",
  },
  hajj: {
    "*": "http://127.0.0.1:5000/data/get_all_ramzan_packages",
    static: "http://127.0.0.1:5000/data/ramzan_umrah_description",
  },
  umrah: {
    "*": "http://127.0.0.1:5000/data/get_all_ramzan_packages",
    static: "http://127.0.0.1:5000/data/ramzan_umrah_description",
  },
};

export default mappings;
