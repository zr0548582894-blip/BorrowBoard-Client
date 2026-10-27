using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class Library
    {
        Book[] books;
        int[] copyArr;
        int current;

        public Library()
        {
            this.books = new Book[2000];
            this.copyArr = new int[2000];
            this.current = 0;
        }
        public int BookPosition(Book b)
        {
            for(int i = 0; i < current; i++)
            {
                if (books[i].IsSameBook(b))
                    return i;
            }
            return -1;
        }
        public void AddBook(Book b)
        {
            int index;
            index = BookPosition(b);
            if (index>0)
            {
                copyArr[index]++; 
            }
            else
            {
                if (current < books.Length)
                {
                    books[current] = b;
                    copyArr[current++]++;
                }
            }

        }
    }

}
