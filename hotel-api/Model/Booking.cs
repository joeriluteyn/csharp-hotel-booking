using System.ComponentModel;

namespace hotel_api.Model
{
    public class Booking
    {
        public int Id { get; set; }
        [DefaultValue("")]
        public string StartDate { get; set; }
        [DefaultValue("")]
        public string EndDate { get; set; }
        
        public int RoomId { get; set; }
        public int CustomerId { get; set; }
        public int AmountOfPeople { get; set; }


    }
}
