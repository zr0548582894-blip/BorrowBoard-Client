using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace collection
{
   public enum Category { 
        history,biography,komiks
    }

    internal class Book
    {
        public string Name { get; set; }
        public int kod { get; init; }
        public string Author { get; set; }
        public Category Category { get; set; } 
        public double Price { get; set; }
        public DateTime date { get; set; }
        public bool IsLend { get; set; }
        public Queue<Member>queue=new Queue<Member>();

        public Book(string name, int kod, string author, Category category, double price, DateTime date, bool isLend)
        {
            Name = name;
            this.kod = kod;
            Author = author;
            Category = category;
            Price = price;
            this.date = date;
            IsLend = isLend;
        }

        public bool lend()
        {

           return IsLend?!IsLend:IsLend=true;
        }
        public override string ToString()
        {
            return $"name: {Name} kod: {kod} auther: {Author} category: {Category}\n price: {Price} year: {date}  isborrowed: {IsLend}";
        }
        
       
    }
}
