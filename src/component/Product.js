import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from './../modules/Body/Body.module.css';
import axios from 'axios';
import VariantCard from './Product/VariantCard';
import ProductBanner from './Product/ProductBanner';

export default function Product() {
  const params = useParams();
  const { productId } = params;

  const [productDetail, setproductDetail] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://staging-agents.thrillophilia.com/apis/v1/products/${productId}`,
        {
          headers: {
            'x-client-id': 'AGT5WhZ4iuFQP',
            'x-client-secret':
              'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBR1Q1V2haNGl1RlFQIiwiZXhwIjoxNjQ4ODIyNjQwfQ.D6zlsOg1xAhzLMc9e8CWKzsmIPpuO_8HE0RpT8vTDK4',
          },
        }
      )
      .then((response) => {
        setproductDetail(response.data);
        setloading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={Style.wrapper}>
      {
        //<VariantContainer data={productDetail} />
      }
      <ProductBanner data={productDetail} />
      <VariantCard data={productDetail} />
    </div>
  );
}
