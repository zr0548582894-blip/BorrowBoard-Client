using maat_test;
#region 2021-secondResit
#region Part_1
#region exe 1
//static void PrintSumDigit(int num)
//{
//    int sum = 0;
//    while(num > 0)
//    {
//        sum += num % 10;
//        num /= 10;
//    }
//    Console.WriteLine(sum);
//}
//Random rand = new Random();
//    int num,avg=0;
//for(int i = 0; i < 10; i++)
//{
//    num=rand.Next(100,1000);
//    if(num%2==0)
//        PrintSumDigit(num);
//    avg += num;
//}
//Console.WriteLine(avg/39);
#endregion
#region exe 2
static int GoodSnacks(Snack[]arrs )
{
    int count=0;
    for(int i=0;i<arrs.Length;i++)
    {
        if(arrs[i] != null)
        {
            if (arrs[i].IsHealthy() && arrs[i].GetCost()<10)
                count++;
        }
    }
    return count;
}
#endregion
#region exe 3
//מחלקות
#endregion
#region exe 4
//string pasword;
//Console.WriteLine("enter a pasword");
//pasword=Console.ReadLine();
//int count = 0;
//while(!(IsValid(pasword)))
//{
//    Console.WriteLine("enter a pasword");
//    pasword = Console.ReadLine();
//    count++;
//}
////Console.WriteLine(count);
//static bool IsValid(string pasword)
//{
//    if(pasword.Length<8)
//        return false;
//    if (!(char.IsUpper(pasword[0])))
//        return false;
//    if(!(char.IsDigit(pasword[pasword.Length-1])))
//        return false;
//    for(int i=0;i<pasword.Length-1;i++)
//    {
//        if (pasword[i] == pasword[i + 1])
//            return false;
//    }
//    return true;
//}
#endregion
#region exe 5
//int num = int.Parse(Console.ReadLine());
//HighSet(num);
//static void HighSet(int num)
//{
//    Random rand = new Random();
//    int count, prv = 9;
//    for(int i=0;i<num;i++)
//    {
//        int current = rand.Next(prv + 1, 100 - num + i+1);
//        Console.WriteLine(current);
//        prv = current;
//
//    }
//}
#endregion
#region exe 6
//מעקב
#endregion
#endregion
#region Part_2
#region exe 7
static void PrintChangeStatus(CoubtryStatus cs1,CoubtryStatus cs2)
{
    string[] res1 = cs1.SameColor("red");
    string[] res2 = cs2.SameColor("red");
    bool flag=true;
    for(int i = 0; i < res1.Length && res1[i]!=null;i++)
    {
        for(int j = 0; j < res2.Length && res2[j]!=null;j++)
        {
            if (res1[i] == res2[j])
                flag=false;
        }
        if(flag)
            Console.WriteLine(res1[i]);
        flag = true;
    }
}
#endregion
#region exe 9
static int CountBlocks(int[]arr,int num)
{
    int count = 0,countRes=0;
    for(int i=0;i<arr.Length-1;i++)
    {
        if (arr[i] == arr[i + 1])
            count++;
        else
        {
            if (count >= num)
                countRes++;
            count = 0;
        }
    }
    if (count >= num)
        countRes++;
    return countRes;
}
#endregion
#endregion
#region Part_3
#region exe 10
static int Weight(int num)
{
    num = Math.Abs(num);
    int sum = 0;
    while(num > 0)
    {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}
static bool IsAgain(int[]arr)
{
    int[] count = new int[90];
    for(int i=0;i<arr.Length;i++)
    {
        if (count[Weight(arr[i])]++ == 1)
            return false;

    }
    return true;
}
static bool IsSame(int[] arr1, int[]arr2)
{
    if (arr1.Length != arr2.Length)
        return false;
    if (!(IsAgain(arr2) || IsAgain(arr1)))
        return false;
    int[] weight1 = new int[arr1.Length];
    int[] weight2 = new int[arr1.Length];
    for(int i=0;i<arr1.Length;i++)
    {
        weight1[i] = Weight(arr1[i]);
        weight2[i] = Weight(arr2[i]);
    }
    bool flag;
    for(int i=0;i<arr1.Length;i++)
    {
        flag = false;
        for(int j=0;j<arr2.Length;j++)
        {
            if(weight1[i] == weight2[j])
                flag = true;
        }
        if (!flag)
            return flag;
    }
    return true;
}
//int[] arr1 = { 1, 2, 12 };
//int[] arr2 = { 1, 13, 3 };
//Console.WriteLine(IsSame(arr1, arr2));
#endregion
#region exe 11

#endregion
#endregion
#endregion
#region exe 14
int[,] mat = { { 10,312,1220,31},{625,-1,1342,13 },{70,15,-21,305 },{ 1003,-601,-200,-203} };
//Console.WriteLine(IsTidy(mat));
static bool IsTidy(int[,]mat)
{
    if(mat.GetLength(0) != mat.GetLength(1)) 
        return false;
    for(int i=0;i<mat.GetLength(0);i++)
    {
        for(int j=0;j<mat.GetLength(0);j++)
        {
            if (mat[i, j] < 0)
                return false;
            if (!IsExist(mat[i,j],j))
                return false;
            
        }    
    }
    return true;
}
static bool IsExist(int num,int digit)
{
    while(num>0)
    {
        if (num % 10 == digit)
            return true;
        num /= 10;
    }
    return false;
}

#endregion
#region exe 8
static bool IsVeriety(int num)
{
    int[]arr=new int[10];
    while(num>0)
    {
        arr[num%10]++;
        if (arr[num % 10] > 1)
            return false;
        num /= 10;
    }
    return true;
}
int[] arr = {12,6,55,28,13 };
Console.WriteLine(IsDiverseArray(arr));
Console.WriteLine(IsVeriety(8582));
static  bool IsDiverseArray(int[]arr)
{
    for(int i=0;i<arr.Length;i++)
    {
        if (!IsVeriety(arr[i]))
            return false;
        for (int j=i+1;j<arr.Length;j++)
        {
            if (arr[i] == arr[j])
                return false;
          
        }
    }
    return true;

}
#endregion
for(int i=0;i<100;i++)
{
    if(i%3==0&&i%5==0)
        Console.Write(i+ "-FizzBuzz  ");
    else if(i%3==0)
        Console.Write(i+ "- Fizz  ");
    else if(i%5==0)
        Console.Write(i+ "- Buzz  ");
    else Console.Write(i+" ");
}
int[] arr5 = { 1, 2, 3, 4 };
int s = 0, e =arr.Length-1;
int tmp;

while(s<=e)
{
    tmp = arr5[s];
    arr5[s] = arr5[e];
    arr5[e] = tmp;
    s++;
    e--;
}