﻿using System;

namespace Alboraq.MobileApp.Core.Entities
{
    public class Appointment
    {
        public int ID { get; set; }
        public string CustomerName { get; set; }
        public string PlateNo { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public string MobileNo { get; set; }
        public string Email { get; set; }
        public bool IsConfirmed { get; set; }
        public DateTime? DateConfirmed { get; set; }
        public string ConfirmedBy { get; set; }
    }
}
