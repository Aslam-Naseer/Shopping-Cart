import iPhone14ProMax from "./images/Apple/iPhone14ProMax.jpg";
import iPhone14Pro from "./images/Apple/iPhone14Pro.jpg";
import iPhone14Plus from "./images/Apple/iPhone14Plus.jpg";
import iPhone14 from "./images/Apple/iPhone14.jpg";
import iPhone13 from "./images/Apple/iPhone13.jpg";
import iPhone12 from "./images/Apple/iPhone12.jpg";
import iPhoneSE from "./images/Apple/iPhoneSE.jpg";

import galaxyS23Ultra from "./images/Samsung/GalaxyS23Ultra.jpg";
import galaxyS23Plus from "./images/Samsung/GalaxyS23+.jpg";
import galaxyS23 from "./images/Samsung/GalaxyS23.jpg";
import galaxyS22Plus from "./images/Samsung/GalaxyS22+.jpg";
import galaxyS21FE from "./images/Samsung/GalaxyS21FE.jpg";
import galaxyS20FE from "./images/Samsung/GalaxyS20FE.jpg";
import galaxyZFold4 from "./images/Samsung/galaxyZFold4.jpg";
import galaxyZFlip4 from "./images/Samsung/galaxyZFlip4.jpg";

import OP11 from "./images/Oneplus/11.jpg";
import OP11R from "./images/Oneplus/11R.jpg";
import NordCE3Lite from "./images/Oneplus/NordCE3Lite.jpg";
import Nord2T from "./images/Oneplus/Nord2T.jpg";

import pixel7Pro from "./images/Google/pixel7Pro.jpg";
import pixel7 from "./images/Google/pixel7.jpg";
import pixel7a from "./images/Google/pixel7a.jpg";
import pixel6a from "./images/Google/pixel6a.jpg";

import iqoo11 from "./images/Iqoo/115G.jpg";
import Z7S5G from "./images/Iqoo/Z7S5G.jpg";
import Neo7 from "./images/Iqoo/Neo7.jpg";
import Neo6 from "./images/Iqoo/Neo6.jpg";

const datas = {
  Apple: [
    { name: "iPhone 14 Pro Max", image: iPhone14ProMax, price: 139999 },
    { name: "iPhone 14 Pro", image: iPhone14Pro, price: 119999 },
    { name: "iPhone 14 Plus", image: iPhone14Plus, price: 76999 },
    { name: "iPhone 14", image: iPhone14, price: 68999 },
    { name: "iPhone 13", image: iPhone13, price: 61990 },
    { name: "iPhone 12", image: iPhone12, price: 53999 },
    { name: "iPhone SE", image: iPhoneSE, price: 49999 },
  ],
  Samsung: [
    { name: "Galaxy S23+", image: galaxyS23Plus, price: 94999 },
    { name: "Galaxy S23 Ultra", image: galaxyS23Ultra, price: 124999 },
    { name: "Galaxy S23", image: galaxyS23, price: 79999 },
    { name: "Galaxy S22+", image: galaxyS22Plus, price: 69999 },
    { name: "Galaxy S21 FE", image: galaxyS21FE, price: 34999 },
    { name: "Galaxy S20 FE", image: galaxyS20FE, price: 29999 },
    { name: "Galaxy Z Fold 4", image: galaxyZFold4, price: 154998 },
    { name: "Galaxy Z Flip 4", image: galaxyZFlip4, price: 94999 },
  ],
  Google: [
    { name: "Pixel 7 Pro", image: pixel7Pro, price: 80999 },
    { name: "Pixel 7", image: pixel7, price: 55999 },
    { name: "Pixel 7a", image: pixel7a, price: 43999 },
    { name: "Pixel 6a", image: pixel6a, price: 28999 },
  ],
  OnePlus: [
    { name: "11 ", image: OP11, price: 61999 },
    { name: "11R", image: OP11R, price: 44999 },
    { name: "Nord CE 3 Lite", image: NordCE3Lite, price: 19999 },
    { name: "Nord 2T", image: Nord2T, price: 28999 },
  ],
  Iqoo: [
    { name: "11 5G", image: iqoo11, price: 69999 },
    { name: "Neo 7", image: Neo7, price: 29999 },
    { name: "Neo 6", image: Neo6, price: 24999 },
    { name: "Z7s 5G", image: Z7S5G, price: 19999 },
  ],
};

const brands = ["Apple", "Samsung", "Google", "OnePlus", "Iqoo"];
brands.forEach((brand) => {
  datas[brand].forEach((phoneObj) => (phoneObj["brand"] = brand));
});

export default datas;
