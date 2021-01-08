import React from 'react';

import './collection-item.component.styles.scss';

const CollectionItem = ({name, price, imageUrl}) => (
  <div className="collection-item">
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className="background-image" />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>

  </div>
)
export default CollectionItem;