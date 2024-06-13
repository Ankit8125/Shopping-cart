'use client'

import { useDispatch, useSelector } from "react-redux"
import { Button } from "../ui/button"
import { addToCart, removeFromCart } from "@/store/slices/cart-slice"

function AddToCartButton({productItem}){

    // useSelector = hook from React-Redux to extract data from the Redux store. 
    const {cart} = useSelector((state) => state)
    // console.log(state); // output = Object->cart {since that is our reducer name} ->cartItems[] {shows initialState, go to cart-slice.js for better view }
    // (state) => state: This is a function that takes the entire Redux store state as an argument and returns a portion of it. In this case, it returns the entire state.
    // const { cart }: This is destructuring assignment in JavaScript. It extracts the cart property from the state object returned by useSelector.

    //In Redux, the state is a single JavaScript object that holds the entire state of your app. It is managed by the Redux store.
    
    console.log(cart?.cartItems);

    const dispatch = useDispatch() // this will basically dispatch an action and based on that we want to do certain operations

    function handleAddToCart(){ // this will do the logic of 'Add to cart'
        dispatch(addToCart(productItem)) // declared as a reducer of 'cartSlice'. Go to cart-slice.js
    }

    function handleRemoveFromCart(){ // this will do the logic of 'remove from cart'
        dispatch(removeFromCart(productItem?.id))
    }

    return (
        <div className="mt-8 max-w-md">
            <Button
            type="button"
            onClick={cart?.cartItems.some(item => item.id === productItem.id) ? 
                handleRemoveFromCart : handleAddToCart
            }
            >
                {
                    cart?.cartItems.some(item => item.id === productItem.id) ? "Remove from cart" : "Add to cart"
                    // .some(item => item.id === productItem.id) is a function that is called for each item in the cartItems array. It checks if the id of the current item (item.id) is '=' to productItem.id.
                }
            </Button>
        </div>
    )
}

export default AddToCartButton