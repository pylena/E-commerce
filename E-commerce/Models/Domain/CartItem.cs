namespace E_commerce.Models.Domain
{
    public class CartItem
    {
        public int Id { get; set; }  
        public int ProductId { get; set; }  // Reference to item
        public string ProductName { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
    }
}
