using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class Snack
    {
        string name;
        int weight;
        double cost;
        int cal;
        public Snack(string name, int weight, double cost, int cal)
        {
            this.name = name;
            this.weight = weight;
            this.cost = cost;
            this.cal = cal;
        }
        #region get/set
        public string GetName() { return name; }
        public int GetWeight() { return weight; }
        public double GetCost() { return cost; }
        public int GetCal() { return cal; }
        public void   SetName(string name) { this.name = name; }
        public void SetWeight(int weight) { this.weight = weight; } 
        public void SetCost(double cost) { this.cost = cost; }
        public void SetCal(int cal) { this.cal = cal; }
        #endregion
        public bool IsHealthy()
        {
            return (cal / (weight / 100) < 120);
        }

    }
}
