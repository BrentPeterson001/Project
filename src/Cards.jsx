import { useState, useEffect } from "react"
import items from "./assets/cards";

function Cards() {
    const [filter, setFilter] = useState(() => {
        return localStorage.getItem(('category') || 'all')
    });
    
    const visible = filter === 'all' ? items : items.filter(p => p.category === filter);
    
    useEffect(() => {
        localStorage.setItem('category', filter)
    }, [filter]);

    return (
        <>
            <div class='card-filter'>
                <button class={filter === 'all' ? 'active' : 'card-off'} onClick={() => setFilter('all')}>All Coffee</button>
                <button class={filter === 'mocha' ? 'active' : 'card-off'} onClick={() => setFilter('mocha')}>Mocha</button>
                <button class={filter === 'espresso' ? 'active' : 'card-off'} onClick={() => setFilter('espresso')}>Espresso</button>
                <button class={filter === 'americano' ? 'active' : 'card-off'} onClick={() => setFilter('americano')}>Americano</button>
                <button class={filter === 'cappuccino' ? 'active' : 'card-off'} onClick={() => setFilter('cappuccino')}>Cappuccino</button>
                <button class={filter === 'latte' ? 'active' : 'card-off'} onClick={() => setFilter('latte')}>Latte</button>
            </div>
            <div class='menu-cards'>
                {visible.map((item) =>
                <a class='link-card' href={item.page}>
                    <div class='card' key={visible.id}>
                        <img src={item.img} alt="" />
                        <h1>{item.desc}</h1>
                        <p>{item.name}</p>
                        <h1>{item.price}</h1>
                        <button>+</button>
                    </div>
                </a>                            
                    )}
            </div>
            
        </>
        
    )
}
export default Cards

// useEffect(() => {
//         localStorage.setItem('coffeeFilter', filter);
//     }, [filter]);    