import {
  FaAccusoft,
  FaAcquisitionsIncorporated,
  FaAlipay,
  FaAlgolia,
  FaAppStore,
  FaAudible,
  FaAviato,
  FaBimobject,
} from "react-icons/fa";

const iconsStyle = { fontSize: "6rem", color: "white" };

export const languages = [
  {
    id: 1,
    name: "javascript",
    img: <FaAccusoft style={iconsStyle} />,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
  {
    id: 2,
    name: "html",
    img: <FaAcquisitionsIncorporated style={iconsStyle} />,
    options: ["Website Development", "1993", "Tim Berners Lee"],
  },
  {
    id: 3,
    name: "css",
    img: <FaAlipay style={iconsStyle} />,
    options: ["Website Design", "1994", "Hakon Wium Lie"],
  },
  {
    id: 4,
    name: "pyhton",
    img: <FaAlgolia style={iconsStyle} />,
    options: ["AI", "1980", "Guido Van Rossum"],
  },
  {
    id: 5,
    name: "java",
    img: <FaAppStore style={iconsStyle} />,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
  {
    id: 6,
    name: "go",
    img: <FaAudible style={iconsStyle} />,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
  {
    id: 7,
    name: "c++",
    img: <FaAviato style={iconsStyle} />,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
  {
    id: 8,
    name: "php",
    img: <FaBimobject style={iconsStyle} />,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
];
