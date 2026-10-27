using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods
{
    public interface Ielectric
    {
        int NumMinut (int numBatari,int electricity)
        {
            return (numBatari*200)/electricity;
        }
    }
}
