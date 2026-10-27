using InterfaxeCoperator;
using System.Collections;
using System.Security.Cryptography.X509Certificates;

/*List<Person> persons = new List<Person>() {
new Person{Id=134, Name="Danni", Mark=100}, new Person{Id=352,Name="Avi" ,Mark=96}};
persons.Sort();
Console.WriteLine(string.Join("\n",persons));

//מיון לפי קוד
Console.WriteLine("------------byid---------");
persons.Sort(persons[0]);
Console.WriteLine(string.Join("\n", persons));
Console.WriteLine("-----------by mark-----------");
persons.Sort(new ComperByMark());
Console.WriteLine(string.Join("\n", persons));

Console.WriteLine(  "-------------------------------");
ColorBox mycolorBox=new ColorBox(); 
foreach(var item in mycolorBox)
    Console.WriteLine(item);

Console.WriteLine(  "---------------------------------------");

List<Computer> computers = new List<Computer>();
for (int i = 0; i < 10; i++)
    computers.Add(new Computer());
ClassRoomComputer Ananas=new ClassRoomComputer("Ananas",persons,computers);
foreach (var item in Ananas)
    Console.WriteLine(item);

foreach (var item in Ananas.Students)
{
    if (item is IWriteToObject k)
        k.WriteToFile("D//MyFiles");
}
//כנוי שם  בבדיקה 

*/

A a1=new A();
A b1=new B();
C c1=new C();
a1.f1();
b1.f1();
c1.f1();// שהכי קרובה להפעלה של הפונקציה הכלל הוא לא לפי המצביע אלא התוכנית תפעיל את הפונקציה לפי המחלקה בה היא מופעלת בחיפוש כלפי מעלה 