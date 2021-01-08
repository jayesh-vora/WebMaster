import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: [
        {
          id: '001',
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'hats',
        },
        {
          id: '002',
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'jackets',
        },
        {
          id: '003',
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'sneakers',
        },
        {
          id: '004',
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: 'womens',
        },
        {
          id: '005',
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          linkUrl: 'mens',
        }
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.categories.map(({id, ...otherParams}) => {
            return (
              <MenuItem key={id} {...otherParams}/>
            )
          })
        }
      </div>
    )
  }
}

export default Directory;
