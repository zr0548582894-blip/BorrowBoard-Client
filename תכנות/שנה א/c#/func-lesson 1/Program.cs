
#region MyRegion ע"מ 188 תרגיל 1
//int num1, num2;
//Console.WriteLine("enter two numbers");
//num1 = int.Parse(Console.ReadLine());
//num2 = int.Parse(Console.ReadLine());

//if (func1(num1)>= func1(num2) )
//    Console.WriteLine(num1);
//Console.WriteLine(num2);

//static int func1(int x)
//{
//    int count = 0;
//    while (x > 0)
//    {
//        count += x % 10;
//        x /= 10;

//    }
//    return count;
//}
#endregion

#region MyRegion תרגיל 2

//int num, maxFirst = int.MinValue, count = 0;

//for (int i = 0; i < 5; i++)
//{
//    Console.WriteLine("enter a num");
//    num = int.Parse(Console.ReadLine());
//    if (IsFirst(num) == true) 
//    {
//        count++;
//        if (num > maxFirst)
//            maxFirst = num;
//    }

//}
//Console.WriteLine($"the num of first numbers is:{count} the bigest num is {maxFirst}");
//static bool IsFirst(int x)
//{
//    for (int i = 2; i <= x / 2; i++)
//    {
//        if (x % i == 0)
//            return false;

//    }
//    return true;
//}

#endregion

#region MyRegion תרגיל 3

//int digit, num, count = 0;

//for (int i = 0; i < 5; i++)
//{
//    Console.WriteLine("enter a digit and number");
//    digit = int.Parse(Console.ReadLine());
//    num = int.Parse(Console.ReadLine());
//    if (func(digit, num) > digit)
//        count++;

//}
//Console.WriteLine(count);

//static int func(int digit, int num, int count = 0)

//{

//    while (num > 0)
//    {
//        if (digit == num % 10)
//            count++;
//        num /= 10;

//    }
//    return count;
//}

#endregion

#region MyRegion תרגיל 4


//int x, y;

//Console.WriteLine("enter couple numbers");
//x = int.Parse(Console.ReadLine());
//y = int.Parse(Console.ReadLine());

//while (x != -999 || y != -999)
//{
//    Console.WriteLine("numbers bitween the numbers you have enter:");

//    for (int i = 0; i < 5; i++)
//    {
//        Console.Write(func(x, y) + " ");
//    }

//    Console.WriteLine();
//    Console.WriteLine("enter couple numbers");
//    x = int.Parse(Console.ReadLine());
//    y = int.Parse(Console.ReadLine());
//}




//static int func(int x, int y)
//{
//    Random r = new Random();
//    return r.Next(x, y);

//}



#endregion

#region MyRegion תרגיל 5

//int n, num, maxEven = int.MinValue;

//Console.WriteLine("enter a num");//כמה פעמים הלולאה תעבוד
//n = int.Parse(Console.ReadLine());

//for (int i = 0; i < n; i++)//n לולאה שדורשת הכנסת מספרים עד  
//{
//    Console.WriteLine("enter a num");
//    num = int.Parse(Console.ReadLine());
//    if (func(num) > maxEven)//בדיקה לפי הפונקציה האם מספר הספרות הזוגיות  גדול מהגדול הקודם
//        maxEven = num;
//}
//Console.WriteLine(maxEven);//הדפסת המספר בעל כמות הספרות הזוגיות הגדול ביותר

//static int func(int x, int count = 0)//הפונקציה
//{
//    while (x > 0)//x=num=532
//    {
//        if (x % 10 % 2 == 0)//532%10=2%2=0------>זוגי
//            count++;//count=1
//        x /= 10;//53
//    }
//    return count;
//}
#endregion

#region MyRegion תרגיל 6

//int girels,buses,tabels,boats;

//Console.WriteLine("enter the num of girls");
//girels=int.Parse(Console.ReadLine());
//Console.WriteLine("enter the num of buses");
//buses=int.Parse(Console.ReadLine());
//Console.WriteLine("enter the num of tabels");
//tabels=int.Parse(Console.ReadLine());
//Console.WriteLine("enter the num of boats");
//boats=int.Parse(Console.ReadLine());

//Console.WriteLine($"the num of buses is{func(buses,girels)} ");
//Console.WriteLine($"the num of tabels is{func(tabels,girels)} ");
//Console.WriteLine($"the num of boats is{func(boats,girels)} ");



//static int func(int x,int girels)
//{
//    if (girels%x  == 0)
//        return girels/x;
//    return girels/x + 1;

//}
#endregion

#region MyRegion תרגיל 8

//int diomand, talyon;

//Console.WriteLine("enter the price of diomand and talyon");
//diomand = int.Parse(Console.ReadLine());
//talyon = int.Parse(Console.ReadLine());

//Console.WriteLine($"the price of the talyon is: {func(talyon) * diomand}");

//static int func(int x, int y = 0)//פונקציה שמחזירה את מספר היהלומים שבהם השתמשתי

//{
//    y = x / 5;
//    if (x % 5 == 3)
//        return (y + 1) * (y + 1);
//    return y * y;
//}
#endregion

