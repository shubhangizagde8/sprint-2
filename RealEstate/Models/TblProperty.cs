using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class TblProperty
    {
        public int Id { get; set; }
        public string PropertyName { get; set; }
        public string PropertyDescription { get; set; }
        public string PropertyImage { get; set; }
        public string SellRent { get; set; }
        public string PropertyAdress { get; set; }
        public int? PropertyPrice { get; set; }
    }
}
