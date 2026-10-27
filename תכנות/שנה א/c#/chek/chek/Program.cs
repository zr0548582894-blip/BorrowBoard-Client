//static int RollNumber(int n,int number)
//{
//    int newNum = 0, count = 0, RollNum = 0, lastNum = 0,nb;
//    while(number > 0)
//    {
//        count++;
//        newNum = newNum * 10 + number % 10;
//        number /= 10;
//    }
//    nb = newNum;
//    for(int i = 0; i < n; i++)
//    {
//        RollNum= newNum%10*(int)Math.Pow(10,count-1)+newNum/(int)Math.Pow(10,count-1);
//        nb /= 10;
//    }
//    while(RollNum>0)
//    {
//        lastNum=lastNum*10+RollNum%10;
//        RollNum/=10;
//    }
//    return lastNum;
//}
//Console.WriteLine(RollNumber(2,123456));
