using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace collection
{
    internal class Library
    {
      public Dictionary<int,Book> books { get; set; }
     public  List<Member> bookList { get; set; } 
      public Stack<Book> bookStack { get; set; } 
        public Library()
        {
            books = new Dictionary<int,Book>();
            bookStack = new Stack<Book>();
            bookList = new List<Member>();
        }
        public void LendBook(int Id,Member member)
        {
            bool flag=false;
            
            if (books.ContainsKey(Id))
            {
               if(!books[Id].lend())
                {
                    books[Id].queue.Enqueue(member);
                    Console.WriteLine("the bood borowod alrady");
                    flag=true;
                }
               else
                flag = true;
            }
            else
            {
                Stack<Book> s = new Stack<Book>();
                while (bookStack.Count > 0)
                {
                    if (bookStack.Peek().kod != Id)
                        s.Push(bookStack.Pop());
                    else
                    {
                        books.Add(Id, bookStack.Pop());
                        books[Id].lend();
                        flag = true;
                    }
                }
                foreach(var item in s)
                    bookStack.Push(item);
                s.Clear();
                
            }
            if (!flag)
            {
                Console.WriteLine("the book is not in the stack or in the dictinory");

            }

        }
        public void OutBook(Book b)
        {
           if(books.ContainsKey(b.kod))
            {
                bookStack.Push(books[b.kod]);
                books[b.kod].queue.Clear();
                books.Remove(b.kod);
            }
        }
        public void AddMember(string fname,string lname,string phone,DateTime date)
        {
            Member member = new Member(fname, lname, phone, date);
            bookList.Add(member);
        }
        public void RemoveMember(string fname, string lname, string phone)
        {
            for(int i=0;i<bookList.Count;i++)
            {
                if (bookList[i].fname.Equals(fname))
                    if (bookList[i].lname.Equals(lname))
                        if (bookList[i].phone.Equals(phone))
                            bookList.Remove(bookList[i]);
            }
        }
        public Member NextMember(int Id)
        {
            foreach(var item in books)
            {
                if (item.Key == Id)
                    if(item.Value.queue.Count>0)
                    return item.Value.queue.Peek();
            }
            return null;
        }
    }

}
