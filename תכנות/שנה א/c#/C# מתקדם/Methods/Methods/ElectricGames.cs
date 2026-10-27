using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods
{
    internal class ElectricGames:Games,Ielectric
    {
        public ElectricGames(int kod, string name, DateTime date, double price, int num):base(num,kod,name,date,price)
        {

        }
    }
}
