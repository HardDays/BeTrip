using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackBeTrip.Models
{
    [JsonObject(MemberSerialization.OptIn)]
    public class WayPoint
    {
        [JsonProperty("lng")]
        public double Long { get; set; } // долгота 
        [JsonProperty("lat")]
        public double Lat { get; set; } // широта 

        public WayPoint(double Lat, double Long)
        {
            this.Lat = Lat;
            this.Long = Long;
        }
    }

}