using hotel_api.Model;
using hotel_api.Repository;
using System.Runtime.CompilerServices;

namespace hotel_api.Endpoint
{
    public static class CustomerApi
    {
        public static void ConfigureCustomerApi(this WebApplication app)
        {
            app.MapGet("/customers", GetCustomers);
            app.MapPost("/customers", InsertCustomer);
            app.MapPut("/customers", UpdateCustomer);
            app.MapDelete("/customers/{id}", DeleteCustomer);
        }

        private static async Task<IResult> GetCustomers(IHotelRepository repo)
        {
            try
            {
                var customers = repo.GetCustomers();
                return customers != null ? Results.Ok(customers) : Results.NoContent();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> InsertCustomer(Customer customer, IHotelRepository repo)
        {
            try
            {
                var addedCustomer = repo.AddCustomer(customer);
                return addedCustomer != null ? Results.Created("https://localhost:7122/customers", addedCustomer) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> UpdateCustomer(Customer customer, IHotelRepository repo)
        {
            try
            {
                var UpdatedCustomer = repo.UpdateCustomer(customer);
                return UpdatedCustomer != null ? Results.Ok(UpdatedCustomer) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> DeleteCustomer(int id, IHotelRepository repo)
        {
            try
            {
                var DeletedCustomer = repo.DeleteCustomer(id);
                return DeletedCustomer != null ? Results.Ok(DeletedCustomer) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }
    }
}
