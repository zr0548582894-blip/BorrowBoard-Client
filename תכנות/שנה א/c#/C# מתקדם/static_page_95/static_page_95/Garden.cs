using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_page_95
{
    internal class Garden
    {
        public Plant[] garden { get; init; }
        public int countPlants { get; set; }

        static int trees = 0;
        public Garden()
        {
            garden = new Plant[100];
            countPlants = 0;
        }
        public void addPlant(Plant plant)
        {
            if (plant is Tree )
            {
                if (trees >= 50)
                    Console.WriteLine("error! there are 50 trees alredy");
                else
                {
                    trees++;
                    if (countPlants > 99)
                        Console.WriteLine("the garden is full with plants");
                    else
                    {
                        garden[countPlants++] = plant;
                        Console.WriteLine("add secced");
                    }
                }
                if (countPlants > 99)
                    Console.WriteLine("the garden is full with plants");
                else
                {
                    garden[countPlants++] = plant;
                    Console.WriteLine("add secced");
                }
            }

             
        }
        public void deletePlant(Plant plant)
        {
            bool flag=true;
            for(int i=0;i<countPlants&&flag;i++)
            {
                if (garden[i] == plant)
                {
                    for(int j=i;j<countPlants;j++)
                    {
                        garden[j]=garden[j+1];
                    }
                    flag=false;
                }
            }
        }
    }
}
