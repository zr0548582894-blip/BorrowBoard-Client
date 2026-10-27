using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class CityK
    {
        string name;
        int numOfReidents;
        int numOfPatients;

        public CityK(string name, int numOfReidents, int numOfPatients)
        {
            this.name = name;
            this.numOfReidents = numOfReidents;
            this.numOfPatients = numOfPatients;
        }

        public string GetName() { return name; }
        public int GetNumberOfReidents() { return numOfReidents; }
        public int GetNumberOfPatients() { return numOfPatients; }
        public void SetName(string name) { this.name = name; }  
        public void SetNumberOfReidents(int numberOfReidents) { this.numOfReidents = numberOfReidents; }
        public void SetNumberOfPatients(int numberOfPatients) { this.numOfPatients = numberOfPatients; }

        public bool IsSame(CityK other)
        {
           return numOfPatients == other.numOfPatients;
        }
        public string GetCityColor()
        {
            if ((0.05 * numOfReidents) > numOfPatients)
                return "green";

            if ((0.15 * numOfReidents) > numOfPatients)
                return "orange";

                return "red";
        }
    }
}
