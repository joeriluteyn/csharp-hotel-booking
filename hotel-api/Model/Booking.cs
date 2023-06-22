using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace hotel_api.Model
{
    public class Booking
    {
        public int Id { get; set; }
        [DefaultValue("")]
        public string StartDate { get; set; }
        [DefaultValue("")]
        public string EndDate { get; set; }
        public int AmountOfPeople { get; set; }


        
        public int Room { get; set; }
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }

       

    }
}
