﻿namespace Angular_NetCore.Server.Models
{
    public class Customer
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone { get; set; } // Phone { get; set; }

        public long Level { get; set; }

        public string Note { get; set; }



    }
}
