
//-----------------------------------ע"מ 196--------------------------------

#region תרגיל 3

//int left, right, MinDiff = int.MaxValue, maxDiff = int.MinValue, prevNum=0,
//maxNum1= int.MinValue, maxNum2= int.MinValue, minNum1 = int.MaxValue, minNum2 = int.MaxValue;
//Console.WriteLine("enter two numbers");
//left = int.Parse(Console.ReadLine());
//right = int.Parse(Console.ReadLine());

//for (int i = left; i < right; i++)

//{

//    if (IsFirst(i) == true)//בדיקה אם הוא מספר ראשוני
//    {
//        Console.Write(i + " ");//הדפסת המספריים הראשוניים

//        if (i - prevNum < MinDiff)//בדיקה אם ההפרש שלו לעומת הראשוני הקודם
//        {
//            MinDiff = i - prevNum;
//            minNum1 = i;
//            minNum2 = prevNum;
//        }
//        else if (i - prevNum > maxDiff)
//        {
//            maxDiff = i - prevNum;
//            maxNum1 = i;
//            maxNum2 = prevNum;
//        }
//        prevNum = i;
//    }


//}

//Console.WriteLine();
//Console.WriteLine($"the maxDiff is betwin thes numbers:{maxNum2},{maxNum1}");
//Console.WriteLine($"the minDiff is betwin thes numbers:{minNum2},{minNum1}");



////static int minDiff(int num, int prevNum)

////{
////    int minDiff = int.MaxValue;


////    if (num - prevNum < minDiff)
////    {
////        minDiff = num - prevNum;

////        return num - prevNum;
////    }
////    return 0;
////}


//static bool IsFirst(int num)
//{
//    for (int j = 2; j <= num / 2; j++)
//    {
//        if (num % j == 0)
//            return false;
//    }

//    return true;

//}


#endregion

#region MyRegion תרגיל 4 

//int num,primeNum=0,Diff,num1;

//Console.WriteLine(  "enter a num");
//num=int.Parse(Console.ReadLine());




//    for (int i = num; i > 0 && primeNum==0 ; i--)
//    {
//        if (Prime(i) == true)
//            primeNum = i;

//    }


//Diff = num - primeNum;
//num1= primeNum;

//for (int j = num; j < num+Diff&&primeNum==num1; j++)
//{
//    if (Prime(j) == true)
//        primeNum = j;

//}


//Console.WriteLine(primeNum);



//static bool Prime(int num)
//{
//    for(int i=2;i<num/2;i++)
//    {
//        if (num % i == 0)
//            return false;
//    }
//    return true;
//}




#endregion

#region MyRegion תרגיל 5


//int n, sum = 0, count = 0;

//Console.WriteLine("enter a num");
//n = int.Parse(Console.ReadLine());

//for (int i = 1; i < n; i++)
//{
//    sum += i;
//    count++;
//    if (sum == n)
//    {
//        func(count, i, n);
//        sum = 0;
//        count = 0;
//        Console.WriteLine();
//    }

//    if (sum > n)
//    {
//        i -= count - 1;
//        sum = 0;
//        count = 0;
//    }
//}

//static void func(int count, int i, int n)
//{
//    while (count > 1)
//    {
//        Console.Write($"{i - (count - 1)}+");
//        count--;
//    }
//    Console.WriteLine($"{i - (count - 1)}={n}");
//}


#endregion

#region MyRegion תרגיל 6


//for (int i = 1; i < 100000; i++)
//{
//    if (IsZero(i) == true)
//    {
//        if (func(i) * 9 == i)
//            Console.WriteLine(i);
//    }
      
//}


//static bool IsZero(int num)//בדיקה האם יש במספר 0
//{
//    int tmp = num;
//    while (tmp > 0)
//    {
//        if (tmp %10== 0)
//        {
//            return true;
//        }
           
//        tmp /= 10;
//    }

//    return false;
//}





//static int func(int num)//לולאה  שמרכיבה את המספר ללא 0
//{
//    int count = 0;
//    int tmp = num;
//    while(tmp>0)
//    {
//        count++;

//        if (tmp % 10 == 0)
//        {

//            return num = num /(int) Math.Pow(10, count) *(int) Math.Pow(10, (count - 1)) + num %
//                (int)Math.Pow(10, (count - 1));



//        }
//        tmp /= 10;
//    }

//    return 0;

//}



#endregion

int[] arr1 = { 6, 74, 5852, 221, 457, 62 };
int[] newArr = new int[arr1.Length];



for (int i = 0; i < arr1.Length; i++)
{
    
    Console.WriteLine(Even(arr1(i)));
}


static int Even(int num)//פונקציה שמביאה את רמת זוגיות של מספר
{
    int SumEven = 0, SumNotEven = 0;
    while (num > 0)
    {
        if (num % 10 % 2 == 0)
            SumEven += num % 10;
        else
            SumNotEven += num % 10;
        num /= 10;
    }

    return SumEven - SumNotEven;
}
