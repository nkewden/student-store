import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css";

export default function ProductView(props) {
  const { productId } = props;
  // const { quantity } = props;
  const { handleAddItemToCart } = props;
  const { handleRemoveItemFromCart } = props;

  return (
    <div className="product-view">
      <h1 className="product-id">Product # {productId}</h1>
      <ProductCard
        className="product-card"
        showDescription={true}
        product={props.product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
}
