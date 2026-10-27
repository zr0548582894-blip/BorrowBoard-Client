using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods
{
    internal class Products
    {
        int kod {  get; set; }
        string name {  get; set; }
        DateTime date { get; set; }
        double price { get; set; }
        public Products(int kod,string name,DateTime date, double price) 
        {
            this.kod = kod;
            this.name = name;
            this.date = date;
            this.price = price;
        }
    }
}
