using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class FoodItem
    {
        string name;
        int quantity;
        Date productionDate;
        int minTemperature;
        Date expiryDate;
        int maxTemperature;
        double price;

        public FoodItem(string name, int quantity, Date productionDate, int minTemperature, Date expiryDate, int maxTemperature, double price)
        {
            this.name = name;
            this.quantity = quantity;
            this.productionDate = productionDate;
            this.minTemperature = minTemperature;
            this.expiryDate = expiryDate;
            this.maxTemperature = maxTemperature;
            this.price = price;
        }
        #region get/set

        public string GetName() { return name; }
        public int GetQuantity() { return quantity; }
        public Date GetProductionDate() { return productionDate; }
        public int GetMinTemperature() { return minTemperature; }
        public Date GetExpiryDate() { return expiryDate; }
        public int GetMaxTemperature() { return maxTemperature; }
        public double GetPrice() { return price; }
        public void SetPrice(double price) { this.price = price; }
        public void SetName(string name) { this.name = name; }
        public void SetQuantity(int quantity) { this.quantity = quantity; }
        public void SetProductionDate(Date productionDate) { this.productionDate = productionDate; }
        public void SetMinTempreture(int minTemperature) { this.minTemperature = minTemperature; }
        public void SetExpiryDate(Date expiryDate) { this.expiryDate = expiryDate; }
        public void SetMaxTemperature(int maxTemperature) { this.maxTemperature = maxTemperature; }
        #endregion
        public override string ToString()
        {
            return "";
        }
        public bool IsFresh(Date d)
        {
            return (productionDate.Before(d) && d.Before(expiryDate));
        }
        public int HowManyItems(int money )
        {

            if ((int)(money / price) <= quantity)
                return (int)(money / price);
            else return quantity;
        }


    }
}
