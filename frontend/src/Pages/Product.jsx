import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Components/RelatedProject/RelatedProduct.jsx';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    // console.log('This is Product.category');
    // console.log(product.category);
  return (
    <div>
        <Breadcrum product={product}></Breadcrum>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}
export default Product