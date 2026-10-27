using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_page_95
{
    enum Frequently {Year,Day,Week }
    internal class Flower_Greenhouse:Flower
    {
        public string Name { get; set; }
        public int Line { get; set; }
        public int Num { get; set; }
        public Frequently frequently { get; set; }
        public Flower_Greenhouse()
        {

        }
        public Flower_Greenhouse(int id, string name, int quantity, DateTime timePlant, bool dishun, Season season, Color color, string Name, int line, int num, Frequently frequently) : base(id, name, quantity, timePlant, dishun, season, color)
        {
            this.Name = name;
            this.Line = line;
            this.Num = num;
            this.frequently = frequently;
        }

        public override string details()
        {
            return $"name green house={Name}, line={Line}, num={Num}, frequently={frequently}, "+base.details();
        }
    }
}
