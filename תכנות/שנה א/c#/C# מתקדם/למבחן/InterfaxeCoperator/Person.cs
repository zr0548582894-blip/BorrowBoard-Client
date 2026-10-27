using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal class Person : IComparable<Person>,IComparer<Person>, ICloneable, IWriteToObject
    {
        Person p;
        public int Id { get; set; }
        public string Name { get; set; }
        public double Mark { get; set; }
        public string EndFile { get; set; } = "html";

        public int CompareTo(object? obj)
        {
            return this.Name.CompareTo((obj as Person)?.Name);
        }
        public int Compare(Person? x, Person? y)
        {
            return x.Id.CompareTo(y.Id);
        }
        public int CompareTo(Person? other)
        {
            return this.Name.CompareTo(other?.Name);
        }
        public override string ToString()
        {
            return "name: " + Name + " id: " + Id + " mark: " + Mark;
        }

        public Object Clone()
        {
            //החזרת העתק אוביקט 
            if(p==null)
                return p= new Person();//העתקה עמוקה 
            //בהעתקה ענוקה רצוי לעשות בנאי העתקה להעתקת נתונים 
            return this;
        }
    }

    internal class ComperByMark : IComparer<Person>
    {
        public int Compare(Person? x, Person? y)
        {
            return x.Mark.CompareTo(y.Mark);
        }
    }

}
