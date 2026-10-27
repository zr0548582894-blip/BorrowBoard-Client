
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class CoubtryStatus
    {
        string date;
        CityK[] cities;
        int numOfCities;

        public CoubtryStatus(string date)
        {
            this.date = date;
            this.cities = new CityK[100];
            this.numOfCities = 0;
        }
        public bool AddCity(string name,int numOfResident,int numPatient)
        {
            if(numOfCities>=100)
                return false;
            cities[numOfCities++] = new CityK(name,numOfResident,numPatient);
            return true;
        }
        public string[] SameColor(string color)
        {
            string[] colors =new string[100];
            int k = 0;
            for(int i=0;i<numOfCities;i++)
            {
                if (cities[i].GetCityColor()==color)
                    colors[k++] = cities[i].GetName();
            }
            return colors; 
        }

    }
}
