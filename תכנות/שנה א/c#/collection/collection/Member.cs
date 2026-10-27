using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace collection
{
    internal class Member
    {
       public string lname { get; set; }
       public string fname { get; set; }
       public string phone { get; set; }
       public DateTime date { get; init; }

        public Member(string lname, string fname, string phone, DateTime date)
        {
            this.lname = lname;
            this.fname = fname;
            this.phone = phone;
            this.date = date;
        }
    }
}
