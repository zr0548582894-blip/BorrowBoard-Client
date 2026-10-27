using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class Book
    {
        string name;
        string author;
        int pages;
        public bool IsSameBook(Book b)
        {
            if(name == b.name && author==b.author)
                return true;
            return false;
        }
    }
}
