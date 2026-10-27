
#region ציפי רוט

//=========ע"מ 212============

#region תרגיל 5
//int[] Show = new int[5];
//int numShow, numCard, maxShow = int.MinValue, Ishow = 0;


//do
//{
//    Console.WriteLine("enter the num of show");
//    numShow = int.Parse(Console.ReadLine());//מספר הצגה
//    Console.WriteLine("enter the num cards");
//    numCard = int.Parse(Console.ReadLine());//מספר כרטיסים
//    Show[numShow] += numCard;//סכום כרטיסים להצגה עד

//}

//while (numShow != 0) ;

//    for (int i = 1; i < Show.Length; i++)//1,5,1,5
//{
//     if (Show[i] >= maxShow)
//    {
//        maxShow = Show[i];
//        Ishow = i;
//    }

//    Console.WriteLine($"show {i} have {Show[i]} tickets");
//}
//Console.WriteLine();

//Console.WriteLine("the most requerd shows were:");

//for ( int i = 1; i <= Show.Length; i++)//1,5,1,5
//{
//    if (Show[i] == maxShow)
//    {

//        Console.Write($"{i}, ");
//    }

//}

#endregion

#region תרגיל 6


//int[] Mark = new int[101];
//int[] Range = new int[11];
//int mark, maxRange = int.MinValue, range = 0;

//for (int i = 0; i < 100; i++)
//{
//    Console.WriteLine("enter your mark");
//    mark = int.Parse(Console.ReadLine());
//    Mark[mark]++;//סכום הבנות שקיבלו את הציון שכרגע נכנס

//    Range[mark / 10]++;
//}
//for (int i = 0; i < 10; i++)
//{
//    if (Range[i] > maxRange)
//    {
//        maxRange = Range[i];
//        range = i;//8=80-90
//    }
//}


//for (int i = 10; i > 0; i--)
//{ Console.WriteLine($"the num of girls who get {i} is: {Mark[i]}"); }


//Console.WriteLine($"the most range is between {range * 10} to {(range + 1) * 10 - 1}");


#endregion

#region תרגיל 7
/*
int num, worker, maxChose = int.MinValue, ICandidate = 0, avg = 0, UpAvg = 0, opinion;


Console.WriteLine("enter the  number of Candidate ");//קליטת מס' המועמדים
num = int.Parse(Console.ReadLine());


int[] sumCandidate = new int[num + 1];//הוספתי 1 על מספר המועמדים ולא אשתמש במקום 0 כדי 


Console.WriteLine("enter num of worker");//קליטת מס' העובד המצביע--->1
worker = int.Parse(Console.ReadLine());

while (worker != -999)
{


    for (int i = 1; i <= num; i++)//לולאה שבה אפשר להקיש 0/1 אם אתה בעד הבחירה בעובד או לא
    {
        Console.WriteLine($"enter your opinion about worker {i}");
        opinion = int.Parse(Console.ReadLine());
        if (opinion == 1)
        {
            sumCandidate[i]++;//צובר למועמד בעל האינדקס הנוכחי
            avg++;//צובר בלי קשר למספר המועמדים-במטרה לדעת כמה דעות חיוביות יש
        }

    }
    Console.WriteLine("enter num of worker");//קליטת מס' העובד המצביע--->1
    worker = int.Parse(Console.ReadLine());
}



for (int i = 1; i <= num; i++)//כמה עברו את הממוצע
{
    if (sumCandidate[i] > avg / num)
        UpAvg++;
}

for (int i = 1; i <= num; i++)//מי קיבל הכי הרבה הצבעות
{
    if (sumCandidate[i] > maxChose)
    {
        maxChose = sumCandidate[i];
        ICandidate = i;
    }

}

Console.WriteLine($"the Candidate with the most votes is: {ICandidate}");
Console.WriteLine($"the num of worker who have vote more than the avg is:{UpAvg}");
Console.WriteLine($"the num of worker who get less then the avg is:{num - UpAvg}");
*/
#endregion

#endregion
