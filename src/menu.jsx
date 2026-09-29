import { useState } from 'react'
import './menu.css'


function Menu() {
    const [item, setItem] = useState([]);
    const [value, setValue] = useState('');
    const [price, setPrice] = useState('');
    const [paragraph, setParagraph] = useState('');
    
    const newCard = (e) => {
        e.preventDefault();
        if(!value.trim()) return;

        const cards = {
            id: Date.now(),
            title: value,
            price: price,
            paragraph: paragraph
        }
        setItem([...item, cards]);
        setValue('');
        setPrice('');
        setParagraph('');
    }


    return (
        <>
            <section class='menu-section'>
                <div class='menu-header'>
                    <h1>Menu</h1>
                    <form onSubmit={newCard}>
                        <input type="text" placeholder="new card" value={value} onChange={(e) => setValue(e.target.value)}/>
                        <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <input type="text" placeholder="about" value={paragraph} onChange={(e) => setParagraph(e.target.value)}/>
                     <button type="submit">upload</button>
                    </form>
                    
                    <ul class='ul-card'>
                        {item.map((item) => ( 
                            <div class='menu-card'>
                                <h1>{item.title}</h1>
                                <p>{item.paragraph}</p>
                                <h1>$ {item.price}</h1>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Menu