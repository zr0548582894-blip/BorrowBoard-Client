using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_page_95
{
    public enum Color { White, Black,Red,Pink,Yello }
    internal class Flower:Plant
    {
        public Color Color { get; set; }
        public Flower()
        {
        }
        public Flower(int id, string name, int quantity, DateTime timePlant, bool dishun, Season season,Color color) : base(id, name, quantity, timePlant, dishun, season)
        {
            this.Color = color;
        }
        public override string details()
        {
            return $"color={Color}, "+base.details();
        }
    }
}
