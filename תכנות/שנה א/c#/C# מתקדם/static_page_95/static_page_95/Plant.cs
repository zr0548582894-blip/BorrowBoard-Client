using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_page_95
{
    [Flags]
    public enum Season { Year=1,Winter=2,Spring=4,Fall=8,Summer=16}
    internal class Plant
    {
        private readonly int id;
        public string Name { get; set; }
        private int Quantity
        {
            get { return quantity; }
            set { if (value > 0) quantity = value; }
        }
        public DateTime TimePlant
        {
            get { return TimePlant; }
            set { if( value.Year > 2000)  TimePlant = value; }
        }
        public bool Dishun { get; set; }
        public int PlantAge()
        {
            return DateTime.Now.Year-timePlant.Year;
        }
        public Season season { get; set; }
        public Plant()
        {

        }
        public Plant(int id,string name,int quantity,DateTime timePalnt,bool dishun,Season season)
        {
            this.id = id;
            this.Name = name;
            this.Quantity = quantity;
            this.TimePlant =timePalnt;
            this.Dishun = dishun;
            this.season = season;
        }
        public virtual string details()
        {
            return $"id={id}, name={Name}, quantity={Quantity}, " +
                $"time plant {TimePlant}, dishun={Dishun}, season={season}";
        }
    }
}