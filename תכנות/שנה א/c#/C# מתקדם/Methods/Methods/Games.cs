using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Methods
{
    internal class Games : Products
    {
        int num { get; set; }


        public Games(int num, int kod, string name, DateTime date, double price): base( kod,  name,  date,  price)
        {
            this.num = num;
        }
    }
}
