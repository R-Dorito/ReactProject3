using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FermiParadox.Model
{
    public enum Gender
    {
         Female,
         Male,
         Other,
    }
    

    public class Person
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public Gender Gender { get; set; }
    }
}
