import { useRouter } from 'next/router';
import { ProductDetails } from '../../components/product-details';

const ProductDetail = () => {
  const router = useRouter();
  const { product } = router.query;
  return <ProductDetails productName={product} />;
};

export default ProductDetail;
