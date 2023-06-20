using hotel_api.Model;

namespace hotel_api.Repository
{
    public interface IHotelRepository
    {
        IEnumerable<Customer> GetCustomers();
        Customer AddCustomer(Customer customer);
        Customer UpdateCustomer(Customer customer);
        Customer DeleteCustomer(int id);

        IEnumerable<Room> GetRooms();
        Room AddRoom(Room room);
        Room UpdateRoom(Room room);
        Room DeleteRoom(int id);   
    }
}
