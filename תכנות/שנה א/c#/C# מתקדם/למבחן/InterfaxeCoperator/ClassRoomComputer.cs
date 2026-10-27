using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal class ClassRoomComputer : IEnumerable, IEnumerator
    {
        int id = 1;
        public string Name { get; set; }
        public List<Person> Students { get; set; }
        public List<Computer> Computers { get; set; }

        public object Current => Students[index].Name+" "+Computers[index++].NameComputer;

        public ClassRoomComputer(string name)
        {
            Name = name;
        }

        public ClassRoomComputer(string name, List<Person> students, List<Computer> computers) : this(name)
        {
            Students = students;
            Computers = computers;
            for (int i = 0; i < computers.Count; i++)
            {
                computers[i].NameComputer = Name + id++;
            }
        }

        //מחזיר מה האוסף עליו רצה הלולאה אוביקט שמכיל םונקציות של move current 
        public IEnumerator GetEnumerator()
        {
            return this;
        }
        int index = 0;//מונה הלולאה 
        public bool MoveNext()//בודק באם יש עדין איברים באוסף שיצרתי 
        {
            return index < Computers.Count && index < Students.Count;
        }

        public void Reset()
        {
            index = 0;
        }
    }
}