import React, { useEffect, useState } from 'react'
import './Product.css'

function Products() {

    const [items, setItems] = useState([])
    useEffect(() => {
        getItems()
    }, [])
    async function getItems() {
        const data = await fetch("https://fakestoreapi.com/products")
        const variable = await data.json()
        setItems(variable)
    }
    return (
        <div className='out'>
            {
                items.map((lis => (
                    <div className='content'>
                        <img src={lis.image} alt="" width="100px" height="100px"/>
                        <h1>{lis.title}</h1>
                        
                    </div>
                )))
            }
        </div>
    )
}

export default Products