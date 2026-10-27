

//                              ========== יום שני ד' אב התשפ"ה ===============
//                                    ========== תרגול מבחן ===========

#region MyRegion עמוד 60 תרגיל 20

//int num = 0, tmp, count = 0, numdigit, newNum = 0, tmpCount = 0, digit = -1, count2 = 0, allcount = 0;
//Console.WriteLine("enter a num with maximum five digit");
//num = int.Parse(Console.ReadLine());

//while (num > 0)
//{
//    tmp = num;
//    while (tmp > 0)
//    {
//        count++;
//        tmp /= 10;
//    }
//    tmpCount = count - 1;


//    //לולאה שעוברת על המספר לפי כמות הספרות שבמספר

//    for (int i = 0; i < count; i++)
//    {
//        digit = num / (int)Math.Pow(10, tmpCount);
//        newNum += digit;
//        newNum *= 10;
//        num %= (int)Math.Pow(10, tmpCount);
//        tmpCount--;
//    }


//    Console.WriteLine("enter a num with maximum five digit");
//    num = int.Parse(Console.ReadLine());
//    tmp = num;
//    count = 0;
//}
//Console.WriteLine(newNum / 10);
//tmp = newNum / 10;
//newNum /= 10;

//while (tmp > 0)//6887143
//{

//    count2++;
//    if (count2 == 3)
//    {
//        allcount++;//2
//        count2 = 0;
//    }
//    tmp /= 10;
//}
//if (count2 != 0)
//{
//    Console.Write(newNum / (int)Math.Pow(10, allcount * 3) + ",");
//}
//newNum = newNum % (int)Math.Pow(10, allcount * 3);
//for (int i = allcount - 1; i > 0; i--)
//{
//    Console.Write(newNum / (int)Math.Pow(10, i * 3) + ",");
//    newNum = newNum % (int)Math.Pow(10, i * 3);
//}
//Console.WriteLine(newNum);



#endregion

#region MyRegion עמוד 61 תרגיל 25

//int num, tmp, count = 0, newNum = 0;
//bool isFirst = true;

//Console.WriteLine("enter a num"); //1234
//num = int.Parse(Console.ReadLine());
//tmp = num;

//while (tmp > 0)
//{
//    count++;
//    tmp /= 10;

//}
//Console.WriteLine(count);       // count=4
//newNum = num;
//for (int j = 0; j < count; j++)
//{
//    for (int i = 2; i <= newNum / 2; i++)        //   הלולאה פועלת עד 1234/2
//    {
//        if (newNum % i == 0)
//            isFirst = false;
//    }
//    newNum = newNum % ((int)Math.Pow(10, count - 1));     //אני רוצה שהמספר במקום הזה יהיה שווה ל243
//    count--;
//}
//if (isFirst == true)
//    Console.WriteLine("first");
//else
//    Console.WriteLine("not first");


#endregion

#region MyRegion  חוברת שאלה 1

//int num, sum1 = 0, count = 0, tmp = 0;
//Console.WriteLine("enter a num");
//num = int.Parse(Console.ReadLine()); //6986

//while (num > 0)                    //כן
//{
//    sum1 = sum1 + num % 10;         //6+8+9+6=29
//    num /= 10;
//}
//count++;                          // count=1
//num = sum1;                       // num=29


//while (sum1 > 10)                // i dont know how to enter the loop
//{
//    sum1 = 0;

//    while (num > 0)               //yes-29
//    {
//        sum1 = sum1 + num % 10;
//        num /= 10;
//    }
//    count++;
//    num = sum1;

//}
//Console.WriteLine($"thr sum of all the num is:{sum1}");
//Console.WriteLine($"it takes {count} time");


#endregion

#region MyRegion שאלה 2

////==========תוכנית עבודה============
////  למצוא את כמות המחלקים של כל מספר מ 1-1000   
////ואם הכמות אי זוגית זה אומר שהמנורה נשארת דלוקה



//int count = 1, countUp = 0;



//for (int i = 1; i <= 1000; i++)               //לולאה שעוברת על כל המספרים מ 1-1000
//{

//    for (int j = 2; j <= i; j++)         //לולאה שבודקת על כל מספר את כמות המחלקים שלו
//    {
//        if (i % j == 0)
//        {
//            count++;
//        }
//    }
//    if (count % 2 != 0)             //בדיקה האם כמות המחלקים זוגית או אי זוגית
//    {
//        Console.Write(i + " ");
//        countUp++;
//    }

//    count = 1;

//}

//Console.WriteLine($"the num of up lemp is: {countUp}");

#endregion

#region MyRegion שאלה 3

//int num1, num2,newNum1=0,newNum2=0;

//Console.WriteLine("enter two numbers");
//num1=int.Parse(Console.ReadLine());    //220
//num2=int.Parse(Console.ReadLine());

//for(int i=1; i<=num1/2; i++)          // the loop is till 220/2=110
//{
//    if (num1 % i == 0)
//        newNum1 += i;
//}
//if(newNum1==num2)
//{
//    for (int i = 1; i <= num2 / 2; i++)          // the loop is till 220/2=110
//    {
//        if (num2 % i == 0)
//            newNum2 += i;
//    }
//}



//else
//    Console.WriteLine("not friends");
//if (newNum2 == num1)
//    Console.WriteLine("friends");














#endregion

#region MyRegion שאלה 5

//long num1, num2, newNum = 0, digit1, digit2,endNum=0;

//Console.WriteLine("enter two numbers");
//num1 = long.Parse(Console.ReadLine());
//num2 = long.Parse(Console.ReadLine());

//while (num1 > 0 && num2 > 0)
//{
//    digit1 = num1 % 10;
//    digit2 = num2 % 10;

//    if (digit1 > digit2)
//        newNum = newNum * 10 + digit1;
//    else
//        newNum = newNum * 10 + digit2;
//    num1 /= 10;
//    num2 /= 10;

//} 
//if(num1 > 0)
//{
//    while(num1>0)
//    {
//        newNum = newNum * 10 + num1%10;
//        num1 /= 10;
//    }
//}
//else if(num2 > 0)
//{
//    while(num2 > 0)
//    {
//        newNum = newNum * 10 + num2%10;
//        num2/=10;
//    }
//}

//// i have to change the num!

//while (newNum > 0)
//{
//    endNum=endNum * 10 + newNum%10;


//    newNum /= 10;
//}

//Console.WriteLine($"the end num is: {endNum}");

#endregion

#region MyRegion שאלה 6

//int n, tmp = 0, count = 0;

//Console.WriteLine("enter a num");   //n*n--> גודל הלולאה
//n = int.Parse(Console.ReadLine());
//tmp = n;
//for (int j = 0; j < n; j++)                //n=לולאה עבור שורות אורך
//{
//    count++;
//    for (int i = 0; i < n; i++)     //n=לולאה עבור שורות רוחב //    {
//        Console.Write(tmp + " ");
//    tmp--;

//}
//Console.WriteLine();
//tmp = n - count;



#endregion

#region MyRegion שאלה 7  
//int num1,num2,maxDivided=int.MinValue,minD=int.MaxValue, count=1,imax=0,imin=0;
//Console.WriteLine();
//num1 = int.Parse(Console.ReadLine());
//num2 = int.Parse(Console.ReadLine());
//if (num1 == num2)
//    Console.WriteLine("the range is 0");
//if(num1>num2)
//{
//    for (int i = num2+1; i < num1; i++)
//    {
//        for (int j = 1;  j <=i/2 ; j++)
//        {
//            if (i % j == 0)
//                count++;
//        }
//        if(count>maxDivided)
//            maxDivided = count;
//        if(count<minD)
//            minD = count;
//        count = 1;
//    }
//}
//else
//{
//    for (int i = num1 + 1; i < num2; i++)
//    {
//        for (int j = 1; j <= i / 2; j++)
//        {
//            if (i % j == 0)
//                count++;
//        }
//        if (count > maxDivided)
//        {
//            maxDivided = count;
//            imax = i;
//        }
//        if (count < minD)
//        {
//            minD = count;
//            imin = i;
//        }
//        count = 1;
//    }
//}
//Console.WriteLine("the max:"+imax+"min:."+imin);


#endregion

#region MyRegion שאלה 8



//int num, maxDigit = int.MinValue, tmp, newNum = 0, count = 0;

//Console.WriteLine("enter a num");
//num = int.Parse(Console.ReadLine());



//while (num > 0)//116
//{


//    while (num > 0)//187
//    {
//        if (num % 10 > maxDigit)//1
//            maxDigit = num % 10;//6
//        num /= 10;
//    }
//    tmp = newNum;//86
//    while (tmp > 0)//
//    {
//        if (tmp % 10 < maxDigit)
//        {
//            count++;
//        }
//        tmp /= 10;
//    }


//    maxDigit *= (int)Math.Pow(10, count);//2
//    maxDigit += newNum % (int)Math.Pow(10, count);//0+2
//    newNum = newNum / (int)Math.Pow(10, count);//9864
//    newNum *= (int)Math.Pow(10, count + 1);//98640
//    newNum += maxDigit;//98642


//    count = 0;
//    maxDigit = 0;
//    Console.WriteLine("enter a nun");
//    num = int.Parse(Console.ReadLine());
//}

//Console.WriteLine(newNum);

#endregion

#region MyRegion שאלה 9

//long num,countDigits=0,icount=0,newNum=0,tmp;

//Console.WriteLine("enter a num");
//num=long.Parse(Console.ReadLine());

//while(num>0)
//{
//    tmp = num;
//    icount++;// כמה מספרים הוכנסו


//    while(tmp>0)
//    {
//        countDigits++;//כמה ספרות מכיל המספר הנוכחי
//       tmp /= 10;
//    }
//    if(countDigits<icount)
//    {
//        newNum*=(int)Math.Pow(10,countDigits);
//        newNum += num;
//    }
//    else
//    {
//        newNum = newNum * (int)Math.Pow(10, icount);//הרכבת המספר החדש

//        newNum += num / (int)Math.Pow(10, countDigits - icount);


//    }
//    countDigits = 0;
//    Console.WriteLine("enter a num");
//    num = long.Parse(Console.ReadLine());


//}
//Console.WriteLine(newNum);



#endregion


//============== עמוד 3 ===============

#region MyRegion שאלה 1

//int num, digit,a=0,b=0,c = 0,tmp = 0;

//Console.WriteLine("enter a num with 3 digits");
//num=int.Parse(Console.ReadLine());
//Console.WriteLine("enter a digit");
//digit=int.Parse(Console.ReadLine());

//tmp = num;
//while(tmp>0)
//{
//    if (digit !=tmp % 10)
//        a += tmp % 10;
//    tmp /= 10;

//}
//Console.WriteLine($"the sum of all the digits which dissimilar is:{a}");
//tmp = num;
//while(tmp>0)
//{
//    if (digit == tmp % 10)
//        b += digit;
//    tmp /= 10;
//}
//Console.WriteLine($"the sum of numbers which equal to the digit is:{b}");
//tmp = num;   
//while(tmp>0)
//{
//    if (tmp % 10 % 2 == 0)
//        c += tmp % 10;
//    tmp /= 10;
//}

//Console.WriteLine($"the sum of even digits is:{c}");




#endregion

//============= עמוד 4 =================

#region MyRegion שאלה 2
//int num,numChek,minDiff=int.MaxValue,iMin=0,minNum=int.MaxValue;
//Console.WriteLine("enter a num");
//numChek=int.Parse(Console.ReadLine());

//for(int i=1; i<=6; i++)
//{
//    Console.WriteLine("enter a num");
//    num=int.Parse(Console.ReadLine());
//    if(num>numChek)
//    {
//        if(num-numChek<minDiff)
//        {
//            minDiff = num - numChek;
//            iMin = i;
//            minNum = num;
//        }

//    } 
//    else if(num<numChek)
//    {
//        if(numChek-num<minDiff)
//        {
//            minDiff = numChek - num;
//            iMin=i;
//            minNum = num;
//        }
//    }
//}
//Console.WriteLine($"the closet num is:{minNum} in place:{iMin}");









#endregion

#region MyRegion שאלה 3 אני באמצע

//int class1, maslul, sister,countH=0, countT5=0,countT6=0,a,b,c,prevSister=-9
//    ,cntAvgSum=0,avgPayment=0;

//Console.WriteLine("enter the patment for each maslul");
//a=int.Parse(Console.ReadLine());
//b=int.Parse(Console.ReadLine());
//c=int.Parse(Console.ReadLine());

//for (int i = 1; i <= 2; i++)
//{

//    Console.WriteLine("enter your class for 5 press 1,for 6 press 2");
//    class1 = int.Parse(Console.ReadLine());
//    Console.WriteLine("enter your maslul:h-1,g-2,t-3");
//    maslul = int.Parse(Console.ReadLine());
//    Console.WriteLine("if the next girel is you sister press 1 else 0");
//    sister = int.Parse(Console.ReadLine());

//    if (maslul == 1)
//        countH++;
//    if(maslul==3)
//    {
//        if(class1 == 1)
//            countT5++;
//        else if(class1 == 2)
//            countT6++;

//    }

//    if(sister==0 && prevSister==0)
//    {
//        cntAvgSum++;
//        if (maslul == 1)
//            avgPayment += a;
//        if (maslul == 2)
//            avgPayment += b;
//        if (maslul == 3)
//            avgPayment += c;
//    }
//    prevSister = sister;

//}
//Console.WriteLine($"the num of girls in h is:{countH}");
//if(countT5 >countT6)
//{
//    if(countT5>=countT6+countT6/ 10)
//        Console.WriteLine("maslul t is in spread");
//}
//Console.WriteLine($"the avg payment that family with one girel pay is:{avgPayment/cntAvgSum}");










#endregion

//=============  עמוד אחרון ===========

#region MyRegion שאלה 1

//double powerC, powerC2, payment = 15, count = 0, max = int.MinValue, iMax = 0, avg = 0, avg2 = 0;

//for (int i = 1; i <= 3; i++)
//{
//    Console.WriteLine("enter your power consumption");
//    powerC = int.Parse(Console.ReadLine());
//    Console.WriteLine("enter your power consumption in this mounth last year");
//    powerC2 = int.Parse(Console.ReadLine());

//    payment = payment + powerC * 2;
//    if (powerC > max)
//    {
//        max = powerC;
//        iMax = i;
//    }



//    if (powerC >= 100)
//    {
//        if (powerC < powerC2)
//        {
//            if (powerC2 - powerC >= 10 && powerC2 - powerC < 20)    //להפחית את הסכום הסופי ב50 ש"ח
//            {
//                payment = payment - 50;
//                count++;
//            }

//            else if (powerC2 - powerC >= 20)                           //להפחית את הסכום הסופי ב 80 
//            {
//                payment = payment - 80;
//                count++;
//            }

//        }

//    }
//    Console.WriteLine($"the price is:{payment}");
//    Console.WriteLine();
//    avg += powerC;
//    avg2 += powerC2;
//    payment = 15;

//}
//Console.WriteLine($"the num of customers who got the discount is:{count}");
//Console.WriteLine($"the num of customer who use most in power is:{iMax}");
//Console.WriteLine($"the avg of all the customers is:{avg / 3}");
//if (avg2 > avg)
//    Console.WriteLine($"the diff is: {avg2 - avg}");
//else
//    Console.WriteLine($"the diff is: {avg - avg2}");









#endregion

#region MyRegion שאלה 2

//double age, sum, pay, stay;

//Console.WriteLine("enter your age");
//age = int.Parse(Console.ReadLine());
//Console.WriteLine("enter the sum in the RavKav");
//sum = int.Parse(Console.ReadLine());
//Console.WriteLine("enter how much money do you have to pay");
//pay = int.Parse(Console.ReadLine());

//if (age > 18 && age < 65)
//{ 
//    if (sum > pay)
//    {
//        sum -= pay;
//        stay = sum / pay;
//        Console.WriteLine($"you have {stay} ");
//    }
//    else
//        Console.WriteLine("ther is no money");
//}
//else
//{
//    pay /= 2;
//    if(sum>pay)
//    {
//        sum -= pay;
//        stay = sum / pay;
//        Console.WriteLine($"you have {stay}" );
//    }
//    else
//        Console.WriteLine("ther is no money");

//}








#endregion

#region MyRegion שאלה 3 

//int num,digit1,digit2,digit3,count=0;


//for(int i=100;i<1000;i++)
//{
//    digit1 = i % 10;
//    digit2 = i / 10%10;
//    digit3 = i / 100;
//    if((digit1*digit1*digit1)+(digit2*digit2*digit2)+(digit3*digit3*digit3)==i)
//    {
//        Console.Write(i + " ");
//        count++;
//    }

//}
//Console.WriteLine($"the num of meshulash numbers is: {count}");



#endregion

#region MyRegion שאלה 4

//long num,newNum=0;
//for(int i=0;i<5;i++)
//{
//    Console.WriteLine("enter a num");
//    num=int.Parse(Console.ReadLine());
//    if(num<10)
//    {
//        newNum = newNum * 10 + num;
//    }
//    if(num>10 && num<100)
//        newNum = newNum * 100 + num;

//}
//Console.WriteLine(newNum);
















#endregion

//============= מהספר עמוד 52 ===============

#region MyRegion תרגיל 44
//int num, tmp, countDigits = 0,prevDigit=0, digit = 0, countLength = 0, maxCountLength = 0, iLength=0;

//Console.WriteLine("enter a num");
//num=int.Parse(Console.ReadLine());//7345187
//tmp = num;

//while(num>0)
//{
//    while(tmp>0)//כמה ספרות למספר
//    {
//        countDigits++;//7
//        tmp /= 10;
//    }

//    prevDigit=num/(int)Math.Pow(10,countDigits-1);//7
//    digit=num/ (int)Math.Pow(10, countDigits - 2)%10;//3
//    if(prevDigit-digit==-1)
//    {
//        countLength++;
//    }

//    if(countLength>=maxCountLength)
//    {
//        maxCountLength = countLength;
//        iLength = digit;
//    }
//    if(!(prevDigit - digit == -1))
//    {
//        countLength = 0;
//    }
//    tmp=num%(int)Math.Pow(10,countDigits-1);//345185
//    countLength = 0;

//}
//while(maxCountLength>0)
//{
//    Console.Write(iLength-(maxCountLength-1));
//    maxCountLength--;
//}

#endregion

//============= מהספר עמוד 58 ===============

#region MyRegion תרגיל א

//int num;
//Console.WriteLine("enter a num");
//num=int.Parse(Console.ReadLine());

//for (int i = 0; i <=num; i++)//לולאה עבור שורות אורך
//{
//    for (int j = i; j > 0; j--)//לולאה עבור שורות רוחב
//    {
//        Console.Write("$ ");
//    }
//    Console.WriteLine();
//}


#endregion

#region MyRegion תרגיל ב
//int num;
//Console.WriteLine("enter a num");
//num = int.Parse(Console.ReadLine());

//for (int i = num; i > 0; i--)
//{
//    for (int j = num; j > 0; j--)
//    {
//        Console.Write("$ ");
//    }
//    Console.WriteLine();
//    Console.WriteLine();
//    num--;
//}

#endregion

#region MyRegion תרגיל ג

//int num;
//Console.WriteLine("enter a num");
//num = int.Parse(Console.ReadLine());

//for (int i = 1; i <= num; i++)//1-5
//{
//    for (int j = 1; j <= i; j++)
//    {
//        Console.Write(j + " ");
//    }
//    Console.WriteLine();
//    Console.WriteLine();
//}



#endregion

#region תרגיל ד
//int num, space;
//num = int.Parse(Console.ReadLine());
//space = num * 2;

//for (int i = 1; i <= num; i++)
//{
//    space -= 2;
//    for (int k = 1; k <= space; k++)
//    {
//        Console.Write(" ");
//    }
//    for (int j = 1; j <= i; j++)
//    {
//        Console.Write(i + " ");
//    }
//    Console.WriteLine();
//    Console.WriteLine();
//}
#endregion

#region MyRegion תרגיל ה

//int n, space;
//Console.WriteLine("enter a num");
//n = int.Parse(Console.ReadLine());
//space = n * 2;

//for (int i = 1; i <= n; i++)
//{
//    space -= 2;
//    for (int j = 0; j < space; j++)
//    {
//        Console.Write(" ");
//    }
//    for (int k = 1; k <= i; k++)
//    {
//        Console.Write(k + " ");
//    }
//    Console.WriteLine();
//}

#endregion

//============= מהספר עמוד 63 ===============

#region MyRegion תרגיל 1  

//int count=9,sum=0,tmp=0, tmp2=0, tmp3 = 0;

//for(int i=10;i<100;i++)//דו ספרתיים 
//{
//    tmp = i / 10;
//    count++;
//    if (count == 100 || count == 200)
//        sum += tmp;

//    tmp2 = i % 10;
//    count++;
//    if (count == 100 || count == 200)
//        sum += tmp2;


//}

//for(int i=100;i<1000;i++)//תלת ספרתיים
//{
//    tmp3 = i / 100;

//    count++;
//    if ( count == 2700||count==2800 || count == 200)
//        sum += tmp3;


//    tmp2 = i / 10 % 10;
//    count++;
//    if ( count ==2700 || count ==2800 || count == 200)
//        sum += tmp2;

//    tmp = i % 10;
//    count++;

//    if (count == 2700 || count == 2800 || count == 200)
//        sum += tmp;


//}
//Console.WriteLine(sum);
//Console.WriteLine(count);

#endregion

#region MyRegion תרגיל 3
//int left, right, count = 0, iMin = int.MaxValue, previMin = int.MaxValue, iMax = int.MinValue,
//    previMax = int.MinValue, maxDiff = int.MinValue, minDiff = int.MaxValue, prevI = 0;

//Console.WriteLine("enter two numbers");
//right = int.Parse(Console.ReadLine()); 
//left = int.Parse(Console.ReadLine());   

//if (right == left)                    
//{
//    Console.WriteLine("there is no range");
//}
//else if (right > left)                 
//{
//    for (int i = left; i < right; i++)   //לולאה שעוברת על כל המספרים שבטווח  
//    {
//        for (int j = 1; j <= i; j++)     //לולאה שבודקת כל מספר אם הוא ראשוני
//        {
//            if (i % j == 0)              
//                count++;

//        }
//        if (count == 2)
//        {


//            Console.Write(i + " ");     //  כותב את כל המספרים הראשוניים

//            if (i - prevI < minDiff)   
//            {
//                minDiff = i - prevI;
//                previMin = prevI;
//                iMin = i;
//            }

//            else if (i - prevI > maxDiff)
//            {
//                maxDiff = i - prevI;
//                previMax = prevI;
//                iMax = i;
//            }


//            prevI = i;



//        }
//        count = 0;
//    }
//}
//else
//{

//    for (int i = right; i < left; i++)   //לולאה שעוברת על כל המספרים שבטווח
//    {
//        for (int j = 1; j <= i; j++)   //לולאה שבודקת כל מספר אם הוא ראשוני
//        {
//            if (i % j == 0)
//                count++;

//        }
//        if (count == 2)
//        { 
//                Console.Write(i + " ");

//            if (i - prevI < minDiff)
//            {
//                minDiff = i - prevI;
//                previMin = prevI;
//                iMin = i;
//            }

//            else if (i - prevI > maxDiff)
//            {
//                maxDiff = i - prevI;
//                previMax = prevI;
//                iMax = i;
//            }

//            prevI = i;

//        }
//        count = 0;
//    }
//}
//Console.WriteLine();
//Console.WriteLine($"the min difference is:{minDiff} between numbers:{previMin},{iMin}");
//Console.WriteLine($"the max difference is:{maxDiff} between numbers:{previMax},{iMax}");

#endregion

#region MyRegion תרגיל 4

//int num, count = 0, prime = 0, diff = 0;
//bool isPrime = true;

//Console.WriteLine("enter a num");
//num = int.Parse(Console.ReadLine());//25

//// אם המספר שנכנס הוא מספר ראשוני

//for (int i = 1; i <= num; i++)
//{
//    if (num % i == 0)
//        count++;
//}
//if (count <= 2)
//{
//    Console.WriteLine(num); //אם המספר שהכניסו הוא מספר ראשוני תדפיס אותו
//    count = 0;
//}

//else
//{
//    for (int i = 1; i < num; i++)   //הלולאה פועלת מ 1-25
//    {
//        for (int j = 1; j <= i; j++)
//        {
//            if (i % j == 0)
//                count++;
//        }
//        if (count <= 2)
//            prime = i;//המספר הראשוני הקרוב ביותר לקלט מלפניו
//        count = 0;
//    }
//    diff = num - prime;
//    for (int k = num + 1; k < num + diff && isPrime; k++)
//    {

//        for (int l = 1; l <= k && isPrime; l++)
//        {
//            if (k % l == 0)
//                count++;

//            if (count <= 2)
//            {
//                prime = k;
//                isPrime = false;

//            }
//        }


//        count = 0;

//    }
//    Console.WriteLine(prime);
//}
#endregion

#region MyRegion תרגיל 5

int n, sum = 0, count = 0;

Console.WriteLine("enter a num");
n = int.Parse(Console.ReadLine());

for (int i = 1; i < n; i++)
{
    sum += i;
    count++;
    if (sum == n)
    {
        while (count > 1)
        {
            Console.Write($"{i - (count - 1)}+");
            count--;
        }
        Console.WriteLine($"{i - (count - 1)}={n}");
        sum = 0;
        count = 0;
        Console.WriteLine();
    }

    if (sum > n)
    {
        i -= count - 1;
        sum = 0;
        count = 0;
    }
}

#endregion

