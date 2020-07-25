import React from 'react'
import './collectionItem.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  const addNewItem = item => dispatch(addItem(item))

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addNewItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  )
}

export default CollectionItem
