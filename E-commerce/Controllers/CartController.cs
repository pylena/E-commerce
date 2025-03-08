using E_commerce.Models.Domain;
using E_commerce.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_commerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly CartService _cartService;

    
    public CartController(CartService cartService)
    {
        _cartService = cartService;
    }

    [HttpGet]
    public ActionResult<List<CartItem>> GetCart()
    {
        return Ok(_cartService.GetCartItems());
    }

    [HttpPost("add")]
    public IActionResult AddToCart([FromBody] CartItem item)
    {
        _cartService.AddToCart(item);
        return Ok(new { message = "Item added to cart successfully." });
    }

    [HttpPut("update/{productId}")]
    public IActionResult UpdateCartItem(int productId, [FromBody] int quantity)
    {
        _cartService.UpdateCartItem(productId, quantity);
        return Ok(new { message = "Cart item updated successfully." });
    }

    [HttpDelete("remove/{productId}")]
    public IActionResult RemoveFromCart(int productId)
    {
        _cartService.RemoveFromCart(productId);
        return Ok(new { message = "Item removed from cart successfully." });
    }

    [HttpDelete("clear")]
    public IActionResult ClearCart()
    {
        _cartService.ClearCart();
        return Ok(new { message = "Cart cleared successfully." });
    }
}
}
