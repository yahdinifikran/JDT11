import { Button } from 'antd';
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../service/api';


const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate = async (id) => {

  const fetchProducts = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = {...response.data.data.product}; //masuk kedalam data dan ke cittles
      console.log(payload);
      setProduct(payload)
    } catch(error) {
      alert(error);
    }
  };

    useEffect(() => {
      if (param.id) {
        fetchProducts(param.id);
      }
    }, [param.id]);
  
  return (
    //tanpa menggunakan array
    <> <div
       <div classnName="text-center">Detail Product</div>
       <p>Nama Produk: {product.name}</p>
       <p>Harga: {product.price}</p>
       <p>Penjual: {product.ownerId?.name}</p>
       <p>Kategori: {product.categoryId?.name}</p>
      <Button onClick={()=> navigate(-1)}>Pulang</Button>
     </>
    );
  };

export default DetailProduct;