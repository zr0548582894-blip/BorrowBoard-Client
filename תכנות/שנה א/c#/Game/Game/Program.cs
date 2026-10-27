
#region משחק
int[,] mat = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 0 }, };
int Izero = 3, Jzero = 3;
Console.WriteLine(IsTidy(mat));
borad(mat);
Console.WriteLine();
mix(mat, Izero, Jzero);

//יצירת הלוח
static void borad(int[,] mat)
{

    Console.ForegroundColor = ConsoleColor.Gray;
    for (int i = 0; i < mat.GetLength(0); i++)
    {
        for (int j = 0; j < mat.GetLength(1); j++)
        {
            Console.BackgroundColor = mat[i, j] == 0 ? ConsoleColor.Yellow : ConsoleColor.Red;

            Console.Write(mat[i, j] == 0 ? "     " : mat[i, j] <= 9 ? "  " + mat[i, j] + "  " : " " + mat[i, j] + "  ");

            Console.BackgroundColor = ConsoleColor.Black;
            Console.Write("   ");

        }
        Console.WriteLine();
        Console.WriteLine();
    }
}
//לולאה שמגרילה כיוון ויוצרת החלפה
static void mix(int[,] mat,int i,int j)
{
    int tmp = 0, direction, zero = mat[i, j], level;
    Random r = new Random();
    Console.WriteLine("enter your level");
    level = int.Parse(Console.ReadLine());
    for (int k = 0; k < level*11; k++)//שיבלגן 20 פעמים
    {
        direction = r.Next(1, 5);
        
        switch (direction)
        {
            case 1://ימין
                {
                    if (IsOkDirection(1, mat,i,j))
                    {
                        tmp = mat[i, j + 1];
                        mat[i, j+1]=0;
                        mat[i,j] = tmp;
                        j++;
                    }

                }
                break;
            case 2://שמאל
                {
                    if (IsOkDirection(2, mat,i,j))
                    {

                        tmp = mat[i, j -1];
                        mat[i, j - 1] = zero;
                        mat[i,j]= tmp;
                        j--;
                    }

                }
                break;
            case 3://למעלה 
                {
                    if (IsOkDirection(3, mat,i,j))
                    {

                        tmp = mat[i-1, j ];
                        mat[i-1, j ] = zero;
                        mat[i,j] = tmp;
                        i--;
                    }

                }
                break;
            case 4://למטה
                {
                    if (IsOkDirection(4, mat,i,j))
                    {

                        tmp = mat[i+1, j];
                        mat[i+1, j] = zero;
                        mat[i,j] = tmp;
                        i++;
                    }
                    

                }
                break;
            default: break;

        }
       
    }
    borad(mat); Console.WriteLine();
    player(mat, i, j);

}
//בדיקת תקינות ההחלפה
static bool IsOkDirection(int num, int[,] mat,int i,int j)
{
   
    switch (num)
    {

        case 1:
            if (j< 3) return true; break;
        case 2:
            if (j > 0) return true; break;
        case 3: 
            if (i > 0) return true; break;
        case 4:
            if (i<3)return true; break;
        default: break;

    }
    return false;

}
//הוזזת המשחק ע"פ לחיצת המשחק
static void player(int[,] mat,int i,int j)
{
    int direction,tmp=0;
    while(IsTidy(mat)==false)
    {
        Console.WriteLine("enter direction");
        direction=int.Parse(Console.ReadLine());
        switch (direction)
        {
            case 1://ימין
                {
                    if (IsOkDirection(1, mat, i, j))
                    {
                        tmp = mat[i, j + 1];
                        mat[i, j + 1] = 0;
                        mat[i, j] = tmp;
                        j++;
                    }

                }
                break;
            case 2://שמאל
                {
                    if (IsOkDirection(2, mat, i, j))
                    {

                        tmp = mat[i, j - 1];
                        mat[i, j - 1] =0;
                        mat[i, j] = tmp;
                        j--;
                    }

                }
                break;
            case 3://למעלה 
                {
                    if (IsOkDirection(3, mat, i, j))
                    {

                        tmp = mat[i - 1, j];
                        mat[i - 1, j] = 0;
                        mat[i, j] = tmp;
                        i--;
                    }

                }
                break;
            case 4://למטה
                {
                    if (IsOkDirection(4, mat, i, j))
                    {

                        tmp = mat[i + 1, j];
                        mat[i + 1, j] =0;
                        mat[i, j] = tmp;
                        i++;
                    }

                }
                break;
            default: break;

        }
        borad(mat); Console.WriteLine();
    }
    Console.WriteLine("you win!!!");
    Console.WriteLine( "well done");
}
//בדיקה אם הוא מסודר
static bool IsTidy(int[,] mat)
{
    int num = 1;
    for(int i = 0; i < mat.GetLength(0); i++)
        for(int j = 0; j < mat.GetLength(1); j++)
        {
            if(mat[i, j] == 0)
            {
                if(i==3&&j==3)
                    return true;
            }
            if (mat[i,j] != num++) return false;
        }
    return true;
}

#endregion
