using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal class A
    {
        int x = 5;
        public virtual  void f1()=>Console.WriteLine("a.f1");
    }
    internal class B:A
    {
        int x = 5;
        public override  void f1() => Console.WriteLine("b.f1");
        public void f()
        {
            f1();
            Console.WriteLine("b.f");
        }
    }
    internal class C : B
    {
        int x = 5;
        public new void   f1() {
            base.f();
        Console.WriteLine("c.f1");}
    }


}
