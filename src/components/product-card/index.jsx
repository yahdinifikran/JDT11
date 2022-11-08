import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({
  random,
  productName,
  productPrice,
  ProductCategory,
  onClick,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className="product-card"
      hoverable
      cover={
        <img alt="example" src={`https://picsum.photos/200?random=${random}`} />
      }
    >
      <Meta
        title={productName}
        description={
          <div>
            <div className="ant-card-meta-category">{ProductCategory}</div>
            <div className="ant-card-meta-price">Rp. {productPrice}</div>
          </div>
        }
      />
      <Button type="danger" onClick={() => navigate(`/detail-product/${onClick}`)}>klik gw</Button>
    </Card>
  );
};

export default ProductCard;
