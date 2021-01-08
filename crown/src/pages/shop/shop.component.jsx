import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      // console.log(snapshot)
      // const da = snapshot.docs;
      // da.map(d => {
      //   console.log(d.data())
      // })
      const convertedCollection = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(convertedCollection)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props;
    const { loading } =  this.state
    return(
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props)=> <CollectionOverviewWithSpinner isLoading={ loading } {...props} />}
        />  
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props)=> <CollectionWithSpinner isLoading={ loading } {...props} />}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
})

export default connect(null, mapDispatchToProps)(ShopPage);