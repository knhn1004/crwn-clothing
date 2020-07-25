import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cartDropdown.scss'
import CartItem from '../cart-item/CartItem'
import { useSelector } from 'react-redux'

const CartDropdown = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
