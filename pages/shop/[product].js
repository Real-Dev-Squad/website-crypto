import PropTypes from 'prop-types';
import productData from '../../mock/products.json';
import { ProductDetails } from '../../components/product-details';
import { Footer } from '../../components/Footer'

const ProductDetail = () => {
  const router = useRouter();
  const { product } = router.query;
  return ( 
    <div>
      <ProductDetails productName={product} />
      <Footer />
  </div>
  )
};

export async function getServerSideProps(context) {
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
