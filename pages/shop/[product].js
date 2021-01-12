import PropTypes from 'prop-types';
import { getProductById } from '../../utils'
import { ProductDetails } from '../../components/product-details';
const CACHE_MAX_AGE = 43200;
const ProductDetail = ({ productJSON }) => {
    return <ProductDetails productJSON={productJSON} />;
};

export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', `max-age=${CACHE_MAX_AGE}`);
    const {
        params: { product },
    } = context;

    const productJSON = await getProductById(product)

    return { props: { productJSON } };
}

export default ProductDetail;

ProductDetail.propTypes = {
    productJSON: PropTypes.object,
};

ProductDetail.defaultProps = {
    productJSON: {},
};
