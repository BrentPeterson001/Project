import mocha from "./assets/Caffe-Mocha.jpg"
import white from "./assets/Flat-White.jpg"
import americano from "./assets/Americano.jpg"
import cappuccino from "./assets/Cappuccino.jpg"
import latte from "./assets/Latte.jpg"
import { useState } from "react"

const items = [
        {id: 1, desc: "Caffe Mocha", name: "Deep Foam", price: "$ 4.53", img: mocha, category:"mocha"},
        {id: 2, desc: "Flat White", name: "Espresso", price: "$ 3.53", img: white, category: "espresso"},
        {id: 3, desc: "Americano", name: "Espresso with water", price: "$ 2.53", img: americano, category: "americano"},
        {id: 4, desc: "Cappuccino", name: "Espresso with milk", price: "$ 4.53", img: cappuccino, category: "cappuccino"},
        {id: 5, desc: "Latte", name: "Espresso with milk", price: "$ 4.53", img: latte, category: "latte"},
    ];

function Cards() {
    const [filter, setFilter] = useState('all');
    
    const visible = filter === 'all' ? items : items.filter(p => p.category === filter)

    return (
        <>
            <div class='card-filter'>
                <button class={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Coffee</button>
                <button class={filter === 'mocha' ? 'active' : ''} onClick={() => setFilter('mocha')}>Mocha</button>
                <button class={filter === 'espresso' ? 'active' : ''} onClick={() => setFilter('espresso')}>Espresso</button>
                <button class={filter === 'americano' ? 'active' : ''} onClick={() => setFilter('americano')}>Americano</button>
                <button class={filter === 'cappuccino' ? 'active' : ''} onClick={() => setFilter('cappuccino')}>Cappuccino</button>
                <button class={filter === 'latte' ? 'active' : ''} onClick={() => setFilter('latte')}>Late</button>
            </div>
            <div class='menu-cards'>
                {visible.map((item) =>
                <div class='card' key={visible.id}>
                    <img src={item.img} alt="mocha" />
                    <h1>{item.desc}</h1>
                    <p>{item.name}</p>
                    <h1>{item.price}</h1>
                    <button>+</button>
                </div>                               
                )}
            </div>
        </>
        
    )
}
export default Cards