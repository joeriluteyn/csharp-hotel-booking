using System.ComponentModel;

namespace hotel_api.Model
{
    public class Room
    {
        public int Id { get; set; }
        [DefaultValue("")]
        public int AmountOfPersons { get; set; }
        [DefaultValue("")]
        public int DoorNumber { get; set; }

    }
}
