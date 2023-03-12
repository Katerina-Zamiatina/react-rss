import React, { Component } from 'react';
import { ProductT } from '../../services/api-service';

type ProductProp = {
  product: ProductT;
};

class CardItem extends Component<ProductProp> {
  render() {
    const { product } = this.props;

    return (
      <li className="item">
        <img src={product.image} alt={product.title} />
      </li>
    );
  }
}


export default CardItem;


// const CardItem: FC<ProductProp> = ({ product }) => {
//   return (
//     <li className="item">
//       <img src={product.image} alt={product.title} />
//     </li>
//   );
// };
