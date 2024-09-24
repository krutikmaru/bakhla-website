const BASE_URL = "https://v4vll52b-5000.inc1.devtunnels.ms";
const mappings = {
  ramadan: {
    "*": `${BASE_URL}/data/get_all_ramzan_packages`,
    static: `${BASE_URL}/data/ramzan_umrah_description`,
    single: `${BASE_URL}/data/get_single_ramzan_package`,
  },
  hajj: {
    "*": `${BASE_URL}/data/get_all_hajj_packages`,
    static: `${BASE_URL}/data/hajj_settings`,
    single: `${BASE_URL}/data/get_single_hajj_package`,
  },
  umrah: {
    "*": `${BASE_URL}/data/get_all_ramzan_packages`,
    static: `${BASE_URL}/data/ramzan_umrah_description`,
    single: `${BASE_URL}/data/get_single_ramzan_package`,
  },
};

export default mappings;
