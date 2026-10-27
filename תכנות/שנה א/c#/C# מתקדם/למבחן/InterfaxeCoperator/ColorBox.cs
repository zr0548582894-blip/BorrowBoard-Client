using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal class ColorBox:IEnumerable,IEnumerator
    {
        string red, yellow, pink, blue, black,green,orange;
        int index = -1;
        public object Current
        {
            get
            {
                switch (index)
                {
                    case 0:return "my color : red";
                    case 1:return "my color : yellow";
                    case 2:return "my color : pink";
                    case 3:return "my color : blue";
                    case 4:return "my color : black";
                    case 5:return "my color : green";
                    case 6:return "my color : orange";
                    default:return "";
                        
                }
            }
        }

        public IEnumerator GetEnumerator()
        {
            return this;
        }

        public bool MoveNext()
        {
            return index++ < 7; 
        }

        public void Reset()
        {
            index = 0;
        }
    }
}
