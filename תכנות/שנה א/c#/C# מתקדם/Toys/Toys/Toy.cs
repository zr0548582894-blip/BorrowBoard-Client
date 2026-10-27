using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toys
{
    internal class Toy : IComparable
    {
        public int Kod { get; init; }
        public string Name { get; set; }
        public double Price { get; set; }
        public Toy(int kod, string name, double price)
        {
            Kod = kod;
            Name = name;
            Price = price;
        }
        public override string ToString()
        {
            return $"kod {Kod} name {Name} price {finalPrice()}";
        }
        public virtual double finalPrice()
        {
            return Price;
        }

        public int CompareTo(object? obj)
        {
            Toy toy=obj as Toy;
            if (toy == null) return -1;
            return Price.CompareTo(toy.Price);
        }
    }
}
