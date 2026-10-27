#region ציפי רוט
#region תרגיל 19
//int[,] mat = new int[40, 50];

//for(int i = 0; i < mat.GetLength(0); i++)
//    for(int j = 0; j < mat.GetLength(1); j++)
//    {
//        Console.WriteLine("enter a num");
//        int num=int.Parse(Console.ReadLine());
//        mat[i, j] = num;
//    }

//PrintMat(mat);


//int[] arr1 = new int[mat.GetLength(0)];
//int[] arr2 = new int[mat.GetLength(1)];
//for (int i = 0; i < mat.GetLength(0); i++)
//{
//    for (int j = 0; j < mat.GetLength(1); j++)
//    {
//        arr1[i] += mat[i, j];
//    }
//}
//for (int i = 0; i < mat.GetLength(0); i++)
//{
//    for (int j = 0; j < mat.GetLength(1); j++)
//    {
//        arr2[j] += mat[i, j];
//    }
//}
//for (int j = 0; j < arr1.Length; j++)
//{
//    Console.WriteLine($"the sum of line {j}:{arr1[j]}");
//}
//Console.WriteLine();
//for (int j = 0; j < arr2.Length; j++)
//{
//    Console.WriteLine($"the sum of coulmn {j}:{arr2[j]}");
//}


static void PrintMat(int[,] mat)
{
    for (int i = 0; i < mat.GetLength(0); i++)
    {
        for (int j = 0; j < mat.GetLength(1); j++)
            Console.Write("{0,5}", mat[i, j]);
        Console.WriteLine();
    }
}

#endregion

#region תרגיל 30
//int SumUnder = 0, SumUp = 0, sum = 0, k = 0;
//int[,] mat ={
//    {1,2,3,4,5 },
//    {6,7,8,9,10 },
//    {11,12,13,14,15},
//    {16,17,18,19,20},
//    {21,22,23,24,25},
//};
//for (int i = 0; i < mat.GetLength(0) - 1; i++)
//{
//    for (int j = i + 1; j < mat.GetLength(1); j++)
//    {
//        SumUnder += mat[j, i];
//        SumUp += mat[i, j];
//    }
//}
//sum = SumUnder;
//int r = 0;
//for (int i=mat.GetLength(0)-1;i>0;i--)
//{

//    if (k < mat.GetLength(0) / 2&&i> mat.GetLength(1) / 2)
//    {
//        k++;

//        for (int j = 0; j < k; j++)
//        {
//            sum -= mat[i, j];

//        }
//    }
//    else
//    {
//        k--;

//        for (int j = 0; j <= k; j++)
//        {
//            sum -= mat[i, j];


//        }
//    }

//}

//Console.WriteLine(SumUp);
//Console.WriteLine(SumUnder);
//Console.WriteLine(sum);
//PrintMat(mat);

#endregion

#region תרגיל 36

//int[,] mat =
//{
//    {1, 3, 4 , 5 ,6},
//    {6, 7, 8,  9,10},
//    {11,12,15,14,15},
//    {16,17,18,19,20},
//    {21,22,23,24,25},
//    {26,27,28,29,30},
//};

//static bool IsSortCol(int[,]mat)
//{
//   for(int i=0; i<mat.GetLength(1)-1; i++)
//   {
//        for(int j=0; j<mat.GetLength(0)-1; j++)
//        {
//            if (mat[j,i] > mat[j+1,i])
//                return false;

//        }
//   }
//   return true;
//}

//static bool IsSortLine(int[,] mat)
//{
//    for (int i = 0; i < mat.GetLength(0) - 1; i++)
//    {
//        for (int j = 0; j < mat.GetLength(1) - 1; j++)
//        {
//            if (mat[i,j] > mat[i,j+1])
//                return false;

//        }
//    }
//    return true;
//}
//if (IsSortCol(mat))
//{
//    if (IsSortLine(mat))
//        Console.WriteLine("the mat is sort");
//    else Console.WriteLine("the coulmn is sort");
//}
//else if (IsSortLine(mat))
//    Console.WriteLine("the lines is sort");
//else Console.WriteLine("no");

#endregion

#region תרגיל 37
//int[,] mat =
//{
//    {1, 3, 4 , 5 ,6},
//    {6, 7, 8,  9,10},
//    {11,12,15,14,15},
//    {16,17,18,19,100},
//    {21,22,23,24,25},
//    {26,27,28,29,30},
//};
//Console.WriteLine(IsMedorag(mat));
//static bool IsMedorag(int[,]mat)
//{
//    int count = 0, prv = 0;
//    for(int i = 0; i < mat.GetLength(0); i++)
//    {
//        for(int j = 0; j < mat.GetLength(1); j++)
//        {
//            count+=mat[i,j];
         
//        }
//        if (prv > count)
//            return false;
//        prv = count;
//        count = 0;

//    }
    
//    return true;
//}
   
#endregion
#endregion

