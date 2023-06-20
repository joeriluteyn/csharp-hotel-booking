using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace hotel_api.Model
{
    public class Customer
    {
        
        public int Id { get; set; }
        [DefaultValue("")]
        public string Name { get; set; }
        [DefaultValue("")]
        public string Email { get; set; }
        [DefaultValue("")]
        public string Phone { get; set; }
        [DefaultValue("")]
        public string Password { get; set; }



    }
}
