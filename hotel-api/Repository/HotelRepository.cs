using hotel_api.Data;
using hotel_api.Model;

namespace hotel_api.Repository
{
    public class HotelRepository : IHotelRepository
    {
        public Customer AddCustomer(Customer customer)
        {
            using ( var db = new HotelContext())
            {
                db.Customers.Add(customer);
                db.SaveChanges();
                return customer;
            }
        }

        public Room AddRoom(Room room)
        {
            using ( var db = new HotelContext())
            {
                db.Rooms.Add(room);
                db.SaveChanges();
                return room;
            }
        }

        public Customer DeleteCustomer(int id)
        {
            using (var db = new HotelContext())
            {
                var customer = db.Customers.SingleOrDefault(x => x.Id == id);
                db.Customers.Remove(customer);
                db.SaveChanges() ;
                return customer;
            }
        }

        public Room DeleteRoom(int id)
        {
            using (var db =new HotelContext())
            {
                var room = db.Rooms.SingleOrDefault(x =>x.Id == id);
                db.Rooms.Remove(room);
                db.SaveChanges() ;
                return room;
            }
        }

        public IEnumerable<Customer> GetCustomers()
        {
            using (var db = new HotelContext())
            {
                return db.Customers.ToList();
            }
        }

        public IEnumerable<Room> GetRooms()
        {
            using (var db= new HotelContext())
            {
                return db.Rooms.ToList();
            }
        }

        public Customer UpdateCustomer(Customer customer)
        {
            using ( var db = new HotelContext())
            {
                var targetCustomer = db.Customers.FirstOrDefault(i =>  i.Id == customer.Id);
                if (targetCustomer != null)
                {
                    targetCustomer.Phone = string.IsNullOrEmpty(customer.Phone) ? targetCustomer.Phone : customer.Phone;
                    targetCustomer.Name = string.IsNullOrEmpty(customer.Name) ? targetCustomer.Name : customer.Name;
                    targetCustomer.Email = string.IsNullOrEmpty(customer.Email) ? targetCustomer.Email : customer.Email;
                    targetCustomer.Password = string.IsNullOrEmpty(customer.Password) ? targetCustomer.Password : customer.Password;
                }
                db.Customers.Update(targetCustomer);
                db.SaveChanges();
                return targetCustomer;
            }
        }

        public Room UpdateRoom(Room room)
        {
            using ( var db = new HotelContext())
            {
                var targetRoom = db.Rooms.FirstOrDefault(i => i.Id == room.Id);
                if (targetRoom != null)
                {
                    targetRoom.AmountOfPersons = room.AmountOfPersons == 0 ? targetRoom.AmountOfPersons : room.AmountOfPersons;
                    targetRoom.DoorNumber = room.DoorNumber == 0 ? targetRoom.DoorNumber : room.DoorNumber;
                }

                db.SaveChanges();
                return targetRoom;
            }
        }
    }
}
