using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal class Computer:IWriteToObject
    {

        public int Id { get; set; }
        private string  nameC;
        public string NameComputer
        {
            get { return nameC; }
            set { nameC = value;
                Name = value;
            }
        }

        public string Name { get ; set ; }
        public string EndFile { get; set; } = "docx";
    }
}
