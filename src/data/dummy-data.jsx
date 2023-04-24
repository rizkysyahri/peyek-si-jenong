
import peyek1 from "../assets/peyek 1.jpg";
import peyek2 from "../assets/peyek 2.jpeg";
import peyek3 from "../assets/peyek 3.png";
import peyek4 from "../assets/peyek 4.jpeg";
import peyekSiJenong from "../assets/peyek si jenong.png";

export const navigationData = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Store",
    url: "/",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const storeData = {
    image: peyekSiJenong
}

export const homeData = {
  span: `Say Hi`,
  title: `To This Product`,
  text: `PEYEK SI JENONG`,
  subtitle: `
    Peyek si jenong telah berdiri sejak tahun 2020 semenjak pandemi covid-19, usaha ini adalah usaha yg di miliki oleh seorang ibu yg baik, ramah, dan juga cantik yaitu Ibu Dwi Untari`,
  image: peyekSiJenong,
};

export const aboutData = {
  title: `Mengapa Peyek Kita Lebih Enak Dari Orang Lain`,
  subtitle: `Review Peyek`,

  list: [
    {
      image: peyek1,
      title: `Peyek Keramat`,
      subtitle: `Peyek ini dinamakan keramat karena peyek ini memiliki aroma yg khas seperti katsuri pakistan dan memiliki cita rasa yg amat sangat keramat`,
    },
    {
      image: peyek2,
      title: `Peyek Bandel`,
      subtitle: ` Peyek ini dinamakan Bandel karena peyek ini memiliki teksture yg

                 khas, ketika kita memakanya pasti ada suara yg sangat ribut atau
                   berisik`,
    },
    {
      image: peyek3,
      title: `Peyek Spicy`,
      subtitle: `Peyek ini dinamakan keramat karena peyek ini memiliki aroma yg khas seperti katsuri pakistan dan memiliki cita rasa yg amat sangat keramat`,
    },
    {
      image: peyek4,
      title: `Peyek Bule`,
      subtitle: `Peyek ini dinamakan keramat karena peyek ini memiliki aroma yg khas seperti katsuri pakistan dan memiliki cita rasa yg amat sangat keramat`,
    },
  ],
};

export const productList   = {
  title: "Product",
  items: [
    {
      id: "98c28",
      image: peyek2,
      title: ` Peyek Keramat`,
      subtitle: `MAU INI? Pesan saja`,
      price: "15.500",
    },
    {
      id: "09xu7",
      image: peyek2,
      title: ` Peyek Bandel`,
      subtitle: `MAU INI? Pesan saja`,
      price: "15.500",
    },
    {
      id: "19xu2",
      image: peyek2,
      title: ` Peyek Spicy`,
      subtitle: `MAU INI? Pesan saja`,
      price: "15.500",
    },
    {
      id: "09xp0",
      image: peyek2,
      title: ` Peyek Bule`,
      subtitle: `MAU INI? Pesan saja`,
      price: "15.500",
    },
  ],
};

export const navbarOrders = {
  image: peyekSiJenong,
};
