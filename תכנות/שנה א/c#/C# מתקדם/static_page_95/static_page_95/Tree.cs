using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_page_95
{
    public enum Kind { Srak,Fruit}
    public enum KindLeaf { Sharp,Wide }
    internal class Tree:Plant
    {
        public Kind Kind { get; set; }
        public KindLeaf KindLeaf { get; set; }
        public Tree()
        {

        }
        public Tree(int id,string name,int quantity,DateTime timePlant,bool dishun,Kind kind,KindLeaf kindLeaf,Season season):base(id, name,  quantity,  timePlant, dishun,season)
        {
            this.Kind = kind;
            this.KindLeaf = kindLeaf;
        }
        public override string details()
        {
            return $"kind={Kind}, kind leaf={KindLeaf}, " + base.details();
        }
    }

}
