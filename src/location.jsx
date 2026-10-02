
import { locations } from "./assets/locations"

function Location() {
    return (
        <>
            <select name="" id="" class="menu-select">
                {locations.map(location => <option>{location.name}</option>)}
            </select>
        </>
    )
}

export default Location