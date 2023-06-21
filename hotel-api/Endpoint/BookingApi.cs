using hotel_api.Model;
using hotel_api.Repository;
using System.Runtime.CompilerServices;

namespace hotel_api.Endpoint
{
    public static class BookingApi
    {
        public static void ConfigureBookingApi(this WebApplication app)
        {
            app.MapGet("/bookings", GetBookings);
            app.MapPost("/bookings", InsertBooking);
            app.MapPut("/bookings", UpdateBooking);
            app.MapDelete("/bookings/{id}", DeleteBooking);
        }

        private static async Task<IResult> GetBookings(IHotelRepository repo)
        {
            try
            {
                var bookings = repo.GetBookings();
                return bookings != null ? Results.Ok(bookings) : Results.NoContent();
            }
            catch(Exception ex)
            {
            return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> InsertBooking(Booking booking, IHotelRepository repo)
        {
            try
            {
                var addedBooking = repo.AddBooking(booking);
                return addedBooking != null ? Results.Created("https://localhost:7122/bookings", addedBooking) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> UpdateBooking(Booking booking, IHotelRepository repo)
        {
            try
            {
                var UpdatedBooking = repo.UpdateBooking(booking);
                return UpdatedBooking != null ? Results.Ok(UpdatedBooking) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> DeleteBooking(int id, IHotelRepository repo)
        {
            try
            {
                var DeletedBooking = repo.DeleteBooking(id);
                return DeletedBooking != null ? Results.Ok(DeletedBooking) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }
    }
}
