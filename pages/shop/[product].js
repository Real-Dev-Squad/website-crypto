import PropTypes from 'prop-types';
import productData from '../../mock/products.json';
import { ProductDetails } from '../../components/product-details';

const ProductDetail = ({ productJSON }) => {
  return <ProductDetails productJSON={productJSON} />;
};

export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 'max-age=43200');
  const {
    params: { product },
  } = context;

  const productJSON = productData[product];

  return { props: { productJSON } };
}

export default ProductDetail;

ProductDetail.propTypes = {
  productJSON: PropTypes.object,
};

ProductDetail.defaultProps = {
  productJSON: {},
};
