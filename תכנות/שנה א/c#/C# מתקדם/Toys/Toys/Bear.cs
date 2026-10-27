using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toys
{
    internal class Bear : Toy
    {
        public enum Size { Small, Medium, Large }
        public Size SizeBear { get; set; }
        public Bear(int kod, string name, double price,Size size) :base(kod,name,price)
        { 
            SizeBear = size;
        }
        public override double finalPrice()
        {
            if (SizeBear == Size.Small)
                return 0.9 * Price;
            else if (SizeBear == Size.Large)
                return 1.1 * Price;
            return base.finalPrice();
        }
        public override string ToString()
        {
            return base.ToString()+$" size {SizeBear}";
        }
    }
}
