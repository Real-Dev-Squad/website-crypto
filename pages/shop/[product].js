import { useRouter } from 'next/router';
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

export default ProductDetail;
