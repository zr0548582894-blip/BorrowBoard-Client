using Toys;
List<Toy> lst = new List<Toy>();
lst.Add(new Toy(101, "Wooden Train", 45.0));
lst.Add(new Bear(201, "Teddy Classic", 100.0, Bear.Size.Large));
lst.Add(new Bear(202, "Polar Bear", 80.0, Bear.Size.Small));
lst.Add(new Bear(203, "Panda Bear", 90.0, Bear.Size.Medium));
lst.Add(new Dall(301, "American dall", 120.0, "Dress", "Shoes", "Crown"));
lst.Add(new Dall(302, "small dall", 120.0, "Dress", "Shoes", "Crown")); 
lst.Add(new Dall(303, "dall", 150.0, "Purse", "Hat", "Necklace", "Glasses", "Boots")); 
lst.Add(new Dall(304, "dally", 130.0, "Blue Dress", "Glass Slipper"));
lst.Add(new BearElectric(401, "Robo-Bear", 250.0, Bear.Size.Medium, 15, "Happy Birthday"));
lst.Add(new BearElectric(402, "Dance-Bear", 220.0, Bear.Size.Small, 8, "Shalom Aleichem")); 
lst.Add(new BearElectric(403, "Shabbat Bear", 300.0, Bear.Size.Large, 45, "Modeh Ani"));     
for (int i = 0; i < lst.Count; i++)
{
    Console.WriteLine(lst[i].ToString());
}
foreach(Toy toy in lst)
{
    Console.WriteLine($"{toy.Name}: {toy.finalPrice()}");
}
Console.WriteLine("enter a price");
double price = double.Parse(Console.ReadLine());
foreach(Toy toy in lst)
{
    if(toy.finalPrice()>price)
        Console.WriteLine(toy.Name+": "+toy.finalPrice());
}
int count =0;
foreach(Toy toy in lst)
{
    if (toy.GetType()==typeof(Bear))
        count++;
}
Console.WriteLine("the num of bears is:"+count);
count = 0;
foreach(Toy toy in lst)
{
      if ((toy as BearElectric)?.jumpsPerMinute >= 10)
           count++;
}
Console.WriteLine( "the num of electric bears that jump more then ten jumps per minute is: "+count);
count = 0;
foreach (Toy toy in lst)
{
    if ((toy as Dall)?.Items.Count >= 5)
        Console.WriteLine(toy.Name.ToString());
}
for (int i = 0; i < lst.Count; i++)
 {
     for(int j=i+1;j<lst.Count; j++)
     {
        if ((lst[i] as Dall)?.Equals(lst[j])==true)
            count++;
     }
 }
Console.WriteLine("the num of same dalls is: "+count);
lst.Sort();