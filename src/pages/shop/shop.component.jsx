import React from 'react'
import collections from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.jsx'

const ShopPage = () => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
}

export default ShopPage
