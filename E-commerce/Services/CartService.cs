using E_commerce.Models.Domain;

namespace E_commerce.Services
{
    public class CartService
    {
        private readonly List<CartItem> _cartItems = new();
        public List<CartItem> GetCartItems() => _cartItems;

        public void AddToCart(CartItem item)
        {
            var existingItem = _cartItems.FirstOrDefault(ci => ci.ProductId == item.ProductId);
            if (existingItem != null)
            {
                existingItem.Quantity += item.Quantity;
            }
            else
            {
                _cartItems.Add(item);
            }
        }
        public void UpdateCartItem(int productId, int quantity)
        {
            var item = _cartItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (item != null)
            {
                item.Quantity = quantity;
            }
        }
        public void RemoveFromCart(int productId)
        {
            _cartItems.RemoveAll(ci => ci.ProductId == productId);
        }

        public void ClearCart()
        {
            _cartItems.Clear();
        }

    }
}
