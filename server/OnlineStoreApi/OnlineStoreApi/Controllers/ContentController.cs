
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineStoreApi.Context;

namespace OnlineStoreApi.Controllers
{

    [Route("api/[controller]")]
    public class ContentController : ControllerBase
    {
        private readonly ApplicationContext _context;



        public ContentController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet("/api/get")]

        public async Task<List<Content>> GetAllAsync()
        {
            return await _context.Contents.ToListAsync();
        }

        [HttpPost("/add")]

        public async Task<Content> AddContentAsync(Content content)
        {
            await _context.Contents.AddAsync(content);
            await _context.SaveChangesAsync();
            return content;
        }

  
    }
}
