import image420x260 from 'public/420x260.png'
import image421x261 from 'public/421x261.png'
import image422x262 from 'public/422x262.png'
import image423x263 from 'public/423x263.png'
import image424x264 from 'public/424x264.png'
import image425x265 from 'public/425x265.png'
import image427x267 from 'public/427x267.png'
import image428x268 from 'public/428x268.png'

export type ObjectCardProducts = {
  _id: number;
  image: any;
  titleCardProduct: string;
  descriptionCard: string;
  category: string;
  price: number;
  link: string;
};

export const dataPageProducts: ObjectCardProducts[] = [
  {
    _id: 1,
    image: {image420x260},
    titleCardProduct: "Disco sól_ido SSD1",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 2,
    image: {image421x261},
    titleCardProduct: "Disco sól_ido SSD2",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 3,
    image: {image422x262},
    titleCardProduct: "Disco sól_ido SSD3",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 4,
    image: {image423x263},
    titleCardProduct: "Disco sól_ido SSD4",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 5,
    image: {image424x264},
    titleCardProduct: "Disco sól_ido SSD5",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 6,
    image: {image425x265},
    titleCardProduct: "Disco sól_ido SSD6",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 7,
    image: {image427x267},
    titleCardProduct: "Disco sól_ido SS7",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
  {
    _id: 8,
    image: {image428x268},
    titleCardProduct: "Disco sól_ido SSD8",
    descriptionCard: "Esto es la descripcion del producto",
    category: "Hardware",
    price: 123456,
    link: "",
  },
];
