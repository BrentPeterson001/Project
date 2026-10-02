import mocha from "./Caffe-Mocha.jpg"
import white from "./Flat-White.jpg"
import americano from "./Americano.jpg"
import cappuccino from "./Cappuccino.jpg"
import latte from "./Latte.jpg"

const items = [
        {id: 1, desc: "Caffe Mocha", name: "Deep Foam", price: "$ 4.53", img: mocha, category:"mocha", page: "mocha"},
        {id: 2, desc: "Flat White", name: "Espresso", price: "$ 3.53", img: white, category: "espresso", page: "espresso"},
        {id: 3, desc: "Americano", name: "Espresso with water", price: "$ 2.53", img: americano, category: "americano", page: "americano"},
        {id: 4, desc: "Cappuccino", name: "Espresso with milk", price: "$ 4.53", img: cappuccino, category: "cappuccino", page: "cappuccino"},
        {id: 5, desc: "Latte", name: "Espresso with milk", price: "$ 4.53", img: latte, category: "latte", page: "latte"}
    ];

export default items