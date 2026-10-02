import mocha from "./Caffe-Mocha.jpg"
import "./item-card.css"

function Mocha() {

    return (
        <>
            <div class="card-header">
                    <h2>Detail</h2>
                    <div class="photo">
                        <div class="photo-border">
                            <img src={mocha}></img>
                        </div>
                    </div>
                    <div class="photo-text">
                        <h1>Caffee Mocha</h1>
                        <p>Ice/Hot</p>
                        <div class="photo-rate">
                            <h4>4.8</h4>
                            <p>(230)</p>
                        </div>
                        
                    </div>
            </div>
            <div class='card-main'>
                <h3>Description</h3>
                <p>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam.</p>
            </div>
        </>
    )
}
export default Mocha