import { useState } from "react"

export default function ProductList() {
    return (
        <div className="container py-5">
            <ProductItem name="Samsung Galaxy 100" brand="Samsung" category="Phones" unitPrice={899} quantity={3}/>
            <ProductItem name="iphone 14" brand="Apple" category="Phones" unitPrice={949} quantity={2}/>
            <ProductItem name="HP Envoy 100" brand="HP" category="Computers" unitPrice={2299} quantity={1}/>
        </div>
    )
}

function ProductItem(props) {
    let [quantity, setQuantity] = useState(Number(props.quantity))
    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    function increment() {
        setQuantity(quantity + 1)
    }
    return (
        <div className="row border-bottom align-items-center">
            <div className="col-4">
                <h4>{props.name}</h4>
                <p>
                    Brand: {props.brand}<br />
                    Category: {props.category}<br />
                    Unit Price: {props.unitPrice}$
                </p>
            </div>
            <div className="col-2">
                <ControlledCounter decrement={decrement} increment={increment}>{quantity}</ControlledCounter>
            </div>
            <div className="col-2">
                <span>{props.unitPrice * quantity}$</span>
            </div>
            <div className="col-2">
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </div>

        </div>
    )
}

function ControlledCounter(props) {
    return (
        <div>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={props.decrement}>-</button>
            <span className="rounded-3 border p-1 m-2">{props.children}</span>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={props.increment}>+</button>
        </div>
    )
}

function Counter(props) {
    // let quantity = props.children
    let [quantity, setQuantity] = useState(Number(props.children))

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    function increment() {
        setQuantity(quantity + 1)
    }
    return (
        <div>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={decrement}>-</button>
            <span className="rounded-3 border p-1 m-2">{quantity}</span>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={increment}>+</button>
        </div>
    )
}