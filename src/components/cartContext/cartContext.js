import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const getTotal = () => {  
        let total = 0
        cart.forEach(prod => {
            total = total + (prod.price * prod.quantity)
        })
        console.log(total)
        return total
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getTotal, isInCart, clearCart, removeItem}}>{children}</CartContext.Provider>
    )
}

export default CartContext;