using hotel_api.Model;
using hotel_api.Repository;

namespace hotel_api.Endpoint
{
    public static class RoomApi
    {
        public static void ConfigureRoomApi(this WebApplication app)
        {
            app.MapGet("/rooms", GetRooms);
            app.MapPost("/rooms", InsertRoom);
            app.MapPut("/rooms", UpdateRoom);
            app.MapDelete("/rooms/{id}", DeleteRoom);

        }

        private static async Task<IResult> GetRooms(IHotelRepository repo)
        {
            try
            {
                var rooms = repo.GetRooms();
                return rooms != null ? Results.Ok(rooms) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
            

        }


        private static async Task<IResult> InsertRoom(Room room, IHotelRepository repo)
        {
            try
            {
                var addedRoom = repo.AddRoom(room);
                return addedRoom != null ? Results.Created("https://localhost:7122/rooms", addedRoom) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> UpdateRoom(Room room, IHotelRepository repo)
        {
            try
            {
                var UpdatedRoom = repo.UpdateRoom(room);
                return UpdatedRoom != null ? Results.Ok(UpdatedRoom) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }

        private static async Task<IResult> DeleteRoom(int id, IHotelRepository repo)
        {
            try
            {
                var DeletedRoom = repo.DeleteRoom(id);
                return DeletedRoom != null ? Results.Ok(DeletedRoom) : Results.NotFound();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }

        }
    }
}
