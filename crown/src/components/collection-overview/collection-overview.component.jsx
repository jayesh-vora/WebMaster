import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
// console.log(`Now Thiss: ${Object.keys(collections)}`)
  return (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);