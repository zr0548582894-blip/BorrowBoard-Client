using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class Stock
    {
        FoodItem[] stock;
        int numOfItems;

        public Stock(FoodItem[] stock)
        {
            this.stock = new FoodItem[100];
        }
        public int HowMany(int temp)
        {
            int count = 0;
            for(int i = 0; i < numOfItems; i++)
            {
                if (stock[i]!=null)
                if (stock[i].GetMaxTemperature()>=temp&&stock[i].GetMinTemperature()<=temp)
                    count+=stock[i].GetQuantity();
            }
            return count;
        }
        public void RemoveAfterDate(Date d)
        {
          
            for(int i = 0; i < numOfItems; i++)
            {
                if (stock[i]!=null)
                {
                    if (stock[i].GetExpiryDate().Before(d))
                    {
                        stock[i] = null;
                        numOfItems--;
                    }
                }
            }
        }

    }
}
