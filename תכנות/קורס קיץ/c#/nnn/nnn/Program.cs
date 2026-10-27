
#region MyRegion 16 תרגיל //לבדוק
//int num, sum = 0, maxSum = int.MinValue, iMax = -1, maxNum = int.MinValue, tmp = 0;
//for (int i = 1; i <= 100; i++)
//{
//    Console.WriteLine("enter a num");
//    num = int.Parse(Console.ReadLine());
//    tmp = num;
//    while (num > 0)
//    {
//        sum += num % 10;
//        num /= 10;
//    }
//    if (sum > maxSum)
//    {
//        maxSum = sum;
//        maxNum = tmp;
//        iMax = i;
//    }
//    sum = 0;
//}
//Console.WriteLine($"the num with the highest sum is:{maxNum} in place: {iMax}");
#endregion

#region MyRegion תרגיל 22
//int num = 0, minDigit = int.MaxValue, tmp = 0, tmp2 = 0, newNum = 0, newNum2 = 0;

//for (int i = 1; i < 2; i++)
//{
//    Console.WriteLine("enter a num");
//    num = int.Parse(Console.ReadLine());
//    if (num <= 0)//בדיקת תקינות הקלט
//    {
//        while (num <= 0)
//        {
//            Console.WriteLine("Eror! enter anouther number");
//            num = int.Parse(Console.ReadLine());
//        }
//    }
//    tmp = num;
//    while (tmp > 0)
//    {
//        if (tmp % 10 < minDigit) //מציאת הסיפרה המינימלי
//            minDigit = tmp % 10;
//        tmp /= 10;
//    }
//    Console.WriteLine(minDigit);
//    tmp2 = num;
//    while (tmp2 > 0)
//    {
//        if (tmp2 % 10 != minDigit)
//            newNum = newNum * 10 + tmp2 % 10;
//        tmp2 /= 10;
//    }

//    while (newNum > 0)
//    {
//        newNum2 = newNum2 * 10 + newNum % 10;
//        newNum /= 10;
//    }
//    Console.WriteLine(newNum2);
//}
#endregion

#region MyRegion תרגיל 23
//int numAccident = -1, numKilled = -1, pzuim = -1, sumKilled = 0, sumPzuim = 0,
//    prevSumKilled = 0, prevSumPzuim = 0, avgKilled = 0, avgPzuim = 0, maxKilled = int.MaxValue,
//    maxPzuim = int.MaxValue, iMaxkilled = 0, iMaxPzuim = 0;

//for (int i = 1; i <= 3; i++)
//{
//    Console.WriteLine($"enter the num of accident in road {i}");
//    numAccident = int.Parse(Console.ReadLine());
//    if (numAccident < 0)//בדיקת תקינות
//    {
//        while (numAccident < 0)
//        {
//            Console.WriteLine("Eror! enter anouther num of accident");
//            numAccident = int.Parse(Console.ReadLine());
//        }

//    }
//    for (int j = 1; j <= numAccident; j++)//בכל כביש כמה פצועים והרוגים
//    {
//        Console.WriteLine("enter the num of killed");
//        numKilled = int.Parse(Console.ReadLine());
//        sumKilled += numKilled;
//        if (sumKilled > maxKilled)
//        {
//            maxKilled = sumKilled;
//            iMaxkilled = i;
//        }
//        Console.WriteLine("enter the num of pzuim");
//        pzuim = int.Parse(Console.ReadLine());
//        sumPzuim += pzuim;
//        if (sumPzuim > maxPzuim)
//        {
//            maxPzuim = sumPzuim;
//            iMaxPzuim = i;
//        }

//    }
//    sumKilled= prevSumKilled ;
//    sumPzuim = prevSumPzuim;
//    sumKilled = 0;
//    sumPzuim = 0;
//    //סעיף א:כמה הרוגים וכמה פצועים בכל כביש
//    Console.WriteLine($"in road {i}:  the num of killed: {sumKilled} the num of pzuim: {sumPzuim} ");//v
//    Console.WriteLine();

//    avgKilled +=sumKilled;
//    avgPzuim += sumPzuim;
  
//}
////סעיף ב:ממוצע ההרוגים והפצועים בכל הכבישים
//Console.WriteLine($"the avg of killed and pzuim is:{(avgKilled + avgPzuim) /3 }");
//Console.WriteLine();
//Console.WriteLine($"the road with the most killed is:{iMaxkilled}");
//Console.WriteLine();
//Console.WriteLine($"the road with the most pzuim is:{iMaxPzuim}");
#endregion



for (int i = 1; i < 100000; i++)
{
    if (IsZero(i) == true)
    {
        if (func(i) * 9 == i)
            Console.WriteLine(i);
    }

}


static bool IsZero(int num)//בדיקה האם יש במספר 0
{
    int tmp = num;
    while (tmp > 0)
    {
        if (tmp % 10 == 0)
        {
            return true;
        }

        tmp /= 10;
    }

    return false;
}





static int func(int num)//לולאה  שמרכיבה את המספר ללא 0
{
    int count = 0;
    int tmp = num;
    while (tmp > 0)
    {
        count++;

        if (tmp % 10 == 0)
        {

            return num = num / (int)Math.Pow(10, count) * (int)Math.Pow(10, (count - 1)) + num %
                (int)Math.Pow(10, (count - 1));



        }
        tmp /= 10;
    }

    return 0;

}
