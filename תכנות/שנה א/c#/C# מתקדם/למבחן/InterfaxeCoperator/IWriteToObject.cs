using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaxeCoperator
{
    internal interface IWriteToObject
    {
        //ממשק מכיל כותרות של פונקציות ללא הרשאות גישה 
        //בממשק אין זיכרון
        //יש אפשרות לכתוב תוכן פונקציה על מנת למנוע קוד כפול 
        public void WriteToFile(string path = "")
        {//מיקום ברירת מחדל התיקיה בו נמצא קובץ ההרצה 
            StreamWriter writer = new StreamWriter(path + @"/" + Name + "." + EndFile);
            writer.WriteLine(this.ToString());
            writer.Close();
        }
        //2 השורות הבאות הם לא תאי זיכרון הם הכרזה שכל מחלקה שממשת את הפממשק תהיה חיבת ליצור משתנים אלו 
        public string Name  { get; set; }
        public string EndFile { get; set; }
    }
}
