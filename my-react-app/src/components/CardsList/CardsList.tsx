import React, { Component } from 'react';
import { ProductT, getProducts } from '../../services/api-service';
import CardItem from '../CardItem';

class CardsList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const data = await getProducts();
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="gallery">
        <ul>
          {products?.map((product: ProductT) => (
            <CardItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CardsList;

// const CardsList = () => {
//   const [products, setProducts] = useState<ProductT[]>();

//   const getAllProducts = async () => {
//     const data = await getProducts();
//     setProducts(data);
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//     return <div className="gallery">
//         <ul>{products?.map(product=><CardItem key={product.id} product={product}/>)}</ul>
//     </div>;
// };
