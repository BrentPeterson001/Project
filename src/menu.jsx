import Cards from "./Cards"
import items from "./assets/cards"
import "./menu.css"
import Location from "./location"

function Menu() {
    return (
        <>
            <div class='header'>
                <p>Location</p>
                <Location></Location>
            </div>

            <div class='main'>
                <Cards value={items}></Cards>
            </div>
            
        </>
    )
}

export default Menu