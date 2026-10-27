using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toys
{
    internal class Dall:Toy
    {
        public List<string> Items;
        public Dall(int kod, string name, double price,params string[]items) : base(kod, name, price)
        {
            Items=items.ToList();
        }
        public override double finalPrice()
        {
            return Price+(3*Items.Count);
        }
        public override string ToString()
        {
            string itm = string.Join(",", Items);
            return base.ToString() + "items:" + itm;
        }
        public override bool Equals(object obj)
        {
            Dall dall = obj as Dall;
            if (dall == null) return false;
            if (Items.Count != dall.Items.Count)
                return false;
            for(int i=0;i<Items.Count;i++)
            {
                bool flag = false ;
                for(int j=0;j<Items.Count;j++)
                {
                     if (Items[i].Equals(dall.Items[j]))
                        flag = true ;

                }
                if(!flag) return false;
            }
            return true;
        }
    }
}
