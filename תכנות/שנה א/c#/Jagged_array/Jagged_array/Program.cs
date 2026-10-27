#region תרגיל 7
//int[][] staff = new int[5][];
//int NumWorker,salary=2000,max=0,Imax=0,jmax=0,master=0,MaxStaff=0,Istaff=0,sum=0;
//bool isstaff=false, ismaster=false;
////בניית מערכים של צוותות
//for(int i=0;i<5;i++)
//{
//    Random rand=new Random();
//    NumWorker = rand.Next(10,21);//מספר העובדים לצוות
//    staff[i] = new int[NumWorker];
//    for (int j = 0; j < NumWorker; j++)
//    {
//        staff[i][j] = rand.Next(1000, 5000);
//    }
//}
////בדיקה מי הוא העובד המצטיין
//for(int i=0;i<5;i++)
//{
//    for(int j = 0; j < staff[i].Length;j++)
//    {
//        if(staff[i][j]>max)
//        {
//            max = staff[i][j];
//            Imax = i;
//            jmax = j;
//        }
//    }
//}
////בדיקה מי הוא הצוות המצטיין
//for(int i=0;i<5;i++)
//{
//    for(int j=0;j < staff[i].Length;j++)
//        sum+=staff[i][j];
//    if(sum>MaxStaff)
//    {
//        MaxStaff= sum;
//        Istaff= i;
//    }
//    sum = 0;
//}
////חישוב משכורת
//for(int i = 0; i < 5;i++)
//{
//    for(int j=0; j < staff[i].Length;j++)
//    {
//        if (i == Istaff)
//            isstaff = true;
//        if(i==Imax&&j==jmax)
//            ismaster = true;
//        Console.Write(WorkerSalary(isstaff, ismaster, staff[i][j])+" ");
//    }
//    Console.WriteLine();
//}


//static int WorkerSalary(bool IsStaff,bool IsMaster,int num)
//{
//   int salary = 2000;
//    salary += 90 *num  / 100;
//    if (IsStaff)
//        salary += 500;
//    if (IsMaster)
//        salary += 1000;
//    return salary;
//}
#endregion

#region תרגיל 8
//int student,profession,max=0,min=100;
//double avg=0;
//Console.WriteLine("enter the num of student");
//student = int.Parse(Console.ReadLine());
//int[][] studentMarks=new int [student][] ;
//for(int i=0; i<studentMarks.Length; i++)
//{
//    Console.WriteLine("enter the num of profession");
//    profession = int.Parse(Console.ReadLine());
//    studentMarks[i] = new int[profession];
//    for (int j = 0; j < profession; j++)
//    {
//        Console.WriteLine("enter your mark");
//        studentMarks[i][j] = int.Parse(Console.ReadLine());
//        while (studentMarks[i][j] < 0 && studentMarks[i][j]>100)
//        {
//            Console.WriteLine("enter another mark");
//            studentMarks[i][j] = int.Parse(Console.ReadLine());
//        }
//    }
//    //ממוצע
//    for(int j=0; j<profession; j++)
//    {
//        avg+=studentMarks[i][j];
//        if(studentMarks[i][j]>max)
//            max=studentMarks[i][j];
//        if (studentMarks[i][j]<min)
//            min=studentMarks[i][j];
//    }
//    avg /= profession;
//    //הדפסה
//    for(int j=0; j<profession; j++)
//    {
//        Console.WriteLine($"profession{j}:{studentMarks[i][j]}");
//    }
//    Console.WriteLine($"the avg is:{avg}");
//    Console.WriteLine($"the max mark is:{max}");
//    Console.WriteLine($"the min mark is:{min}");

//    avg = 0;max = 0;min = 100;  
//}
#endregion
Console.WriteLine((char)10);