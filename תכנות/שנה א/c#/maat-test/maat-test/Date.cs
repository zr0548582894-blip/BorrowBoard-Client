using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maat_test
{
    internal class Date
    {
        int day;
        int month;
        int year;

        public Date(int day, int month, int year)
        {
            this.day = day;
            this.month = month;
            this.year = year;
        }
        public int GetDay() { return day; }
        public int GetMonth() { return month; }
        public int GetYear() { return year; }
        public void SetDay(int day) { this.day = day; }
        public void SetMonth(int month) { this.month = month; }
        public void SetYear(int year) { this.year = year; }
        public override string ToString()
        {
            return $"{day}:{month}:{year}";
        }
        public bool Equals(Date other)
        {
            if(other.day!=day) return false;
            if(other.month!=month) return false;
            if(other.year!=year) return false;
            return true;
        }
        public bool Before(Date other)
        {
           if(year>other.year) return false;
           if (year < other.year) return true;
           if(month>other.month) return false;
           if(month<other.month) return true;
           if(day>other.day) return false;
           if(day<other.day) return true;
           return true;
        }

    }

}
