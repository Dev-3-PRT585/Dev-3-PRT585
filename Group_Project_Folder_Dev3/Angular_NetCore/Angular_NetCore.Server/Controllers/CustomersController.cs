using Angular_NetCore.Server.Data;
using Angular_NetCore.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Angular_NetCore.Server.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly DBEntitiesContext _dBEntitiesContext;

        public CustomersController(DBEntitiesContext dBEntitiesContext)
        {
            _dBEntitiesContext = dBEntitiesContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCustomers()
        {
            var customers = await _dBEntitiesContext.Customers.ToListAsync();

            return Ok(customers);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] Customer customerRequest)
        {

            customerRequest.Id = Guid.NewGuid();

            await _dBEntitiesContext.Customers.AddAsync(customerRequest);

            await _dBEntitiesContext.SaveChangesAsync();

            return Ok(customerRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCustomer([FromRoute] Guid id)
        {
            var customer = await _dBEntitiesContext.Customers.FirstOrDefaultAsync(x => x.Id == id);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateCustomer([FromRoute] Guid id, Customer updateCustomerRequest)
        {
            var customer = await _dBEntitiesContext.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            customer.Name = updateCustomerRequest.Name;
            customer.Email = updateCustomerRequest.Email;
            customer.Phone = updateCustomerRequest.Phone;
            customer.Level = updateCustomerRequest.Level;
            customer.Note = updateCustomerRequest.Note;

            await _dBEntitiesContext.SaveChangesAsync();

            return Ok(customer);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteCustomer([FromRoute] Guid id) {
            var customer = await _dBEntitiesContext.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            _dBEntitiesContext.Customers.Remove(customer);
            await _dBEntitiesContext.SaveChangesAsync();

            return Ok(customer);
        }
    }
}
