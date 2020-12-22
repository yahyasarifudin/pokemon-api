import { cartItemsVar } from './cache';
// ... other imports

export function AddToCartButton({ productId }) {
  return (
    <div class="add-to-cart-button">
      <Button onClick={() => cartItemsVar([...cartItemsVar(), productId])}>        Add to Cart
      </Button>
    </div>
  );
}