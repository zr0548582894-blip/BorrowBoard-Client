using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toys
{
    internal class BearElectric : Bear
    {
        public int jumpsPerMinute { get; set; }
        public string song { get; set; }
        public override double finalPrice()
        {
            return base.finalPrice()+20;
        }
        public override string ToString()
        {
            return base.ToString()+$"jumpsPerMinute {jumpsPerMinute} song {song}";
        }
        public BearElectric(int kod, string name, double price, Size size,int jumpsPerMinute,string song) : base(kod, name, price, size)
        {
            this.jumpsPerMinute = jumpsPerMinute;
            this.song = song;
        }
    }
}
