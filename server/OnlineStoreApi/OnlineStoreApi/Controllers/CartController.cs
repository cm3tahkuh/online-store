using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineStoreApi.Context;
using OnlineStoreApi.Models;

namespace OnlineStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
   
        private readonly ApplicationContext _context;

        public CartController(ApplicationContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<List<Cart>> GetCart()
        {
            return await _context.Carts.Include(x => x.Product).ToListAsync();
        }


        [HttpPost]
        public async Task<ActionResult<Cart>> AddToCart([FromBody] CartRequest cartRequest)
        {
            var product = await _context.Products.FindAsync(cartRequest.ProductId);
            if (product == null)
            {
                return NotFound();
            }

           
            var cart = new Cart
            {
                ProductId = cartRequest.ProductId,
                Product = product,
                Quantity = cartRequest.Quantity
            };


            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();


            return cart;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCart(int id, Cart cart)
        {
            if (id != cart.Id)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> RemoveFromCart(int id)
        {

            var cartItem = await _context.Carts.FindAsync(id);

            _context.Carts.Remove(cartItem);

            await _context.SaveChangesAsync();

            return NoContent();


        }

    }
}
