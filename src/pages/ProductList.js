import React from 'react';

// Importing the useState hook from React to manage state in the component
import { useEffect, useState } from "react"
import { AddProductForm2 } from "../components/forms"

// Initial products array containing objects with name, brand, category, unit price, and quantity
let initialProducts = [
    {name:"Samsung Galaxy 100", brand:"Samsung", category:"Phones", unitPrice:899, quantity:3},
    {name:"iphone 14", brand:"Apple", category:"Phones", unitPrice:949, quantity:2},
    {name:"HP Envoy 100", brand:"HP", category:"Computers", unitPrice:2299, quantity:1}
]

// Defining the ProductList component
export default function ProductList() {
    
    // useState hook to set and manage products state initialized with the initialProducts array
    let [products, setProducts] = useState([])

    function initializeProductList() {
        let storedProducts = []
    let storedProductsStr = localStorage.getItem("productList")
    if (storedProductsStr) {
        storedProducts = JSON.parse(storedProductsStr)
    }
    console.log(Date())
    setProducts(storedProducts)
    }
    useEffect(() => initializeProductList(), [])

    // Function to delete a product from the products list based on the index
    function deleteProduct(index) {
        let newProducts = [...products]
        newProducts.splice(index, 1)
        setProducts(newProducts)
        localStorage.setItem("productList", JSON.stringify(newProducts))
    }
    function addProduct(product) {
        let newProducts = [...products, product]
        setProducts(newProducts)
        localStorage.setItem("productList", JSON.stringify(newProducts))
    }
    // JSX rendering a list of ProductItem components by mapping over the products array
    return (
        <div className="container py-5">
            <AddProductForm2 addProduct={addProduct}/>
            {
                products.map((product, idx) => {
                    return (
                        <ProductItem key={idx} name={product.name}
                            brand={product.brand} 
                            category={product.category}
                            unitPrice={product.unitPrice}
                            quantity={product.quantity}
                            index={idx}
                            deleteProduct={deleteProduct}/> 
                    )
                })
            }
        </div>
    )
}
// Defining the ProductItem component to display individual product details
function ProductItem(props) {
    // useState hook to set and manage the quantity of the product
    let [quantity, setQuantity] = useState(Number(props.quantity))

    // Function to decrease the quantity (but not below 1)
    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // Function to increase the quantity
    function increment() {
        setQuantity(quantity + 1)
    }
    // JSX rendering the product details and controls to adjust quantity or delete the product
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
                <button type="button" 
                className="btn btn-danger btn-sm"
                onClick={() => props.deleteProduct(props.index)}>Delete</button>
            </div>

        </div>
    )
}

// Defining the ControlledCounter component for managing product quantity
function ControlledCounter(props) {
    // JSX for decrement, current quantity, and increment buttons
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

// Defining an additional Counter component for handling quantity (alternative approach)
function Counter(props) {
    // let quantity = props.children
    // useState hook to set and manage the quantity
    let [quantity, setQuantity] = useState(Number(props.children))

    // Function to decrease quantity (but not below 1)
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    // Function to increase quantity
    function increment() {
        setQuantity(quantity + 1)
    }
    // JSX rendering the decrement, current quantity, and increment buttons
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