using Methods;

Products[]ar=new Products[4];

for(int i = 0; i <4 ; i++)
{
    ar[i].date.printColorDate();
    if (ar[i] is ElectricGames)
    {
        ar[i].DrawElectric()
    }
}

public static class MyExtensions
{
    public static void printColorDate(this DateTime date)
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.Write(date.Day);
        Console.ForegroundColor = ConsoleColor.White;
        Console.Write("-");
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.Write(date.Month);
        Console.ForegroundColor = ConsoleColor.White;
        Console.Write("-");
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write(date.Year);
        Console.ForegroundColor = ConsoleColor.White;
    }
    public static void DrawElectric(this Ielectric ielectric,int numBatari )
    {
        for (int i = 0; i < numBatari; i++)
        {
            Console.Write("*");
        }
    }
}
