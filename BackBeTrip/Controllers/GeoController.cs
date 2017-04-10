using BackBeTrip.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackBeTrip.Controllers
{
    //Operations with coordinates
    public class GeoController
    {

        private static double EarthRad = 6378.1;

        private static double ToDegrees(double angle)
        {
            return angle * (180.0 / Math.PI);
        }

        private static double  ToRadians(double angle)
        {
            return Math.PI * angle / 180.0;
        }

        public static WayPoint GetDestByBearing(WayPoint from, double angle, double distance)
        {
            double brng = ToRadians(angle);
            double lat1 = ToRadians(from.Lat);
            double lon1 = ToRadians(from.Long);
            double lat2 = Math.Asin(Math.Sin(lat1) * Math.Cos(distance / EarthRad) + Math.Cos(lat1) * Math.Sin(distance / EarthRad) * Math.Cos(brng));
            double lon2 = lon1 + Math.Atan2(Math.Sin(brng) * Math.Sin(distance / EarthRad) * Math.Cos(lat1), Math.Cos(distance / EarthRad) - Math.Sin(lat1) * Math.Sin(lat2));

            return new WayPoint(ToDegrees(lat2), ToDegrees(lon2));
        }

        public static double GetBearing(WayPoint first, WayPoint second)
        {
            double y = second.Long - first.Long;
            double x = Math.Log(Math.Tan(second.Lat / 2.0 + Math.PI / 4.0) / Math.Tan(first.Lat / 2.0 + Math.PI / 4.0));
            if (Math.Abs(y) > Math.PI)
            {
                if (y > 0.0)
                {
                    y = -(2.0 * Math.PI - y);
                }
                else
                {
                    y = (2.0 * Math.PI + y);
                }
            }
            double brng = Math.Atan2(y, x);
            brng = ToDegrees(brng);
            brng = (brng + 360) % 360;
            return brng;
        }

        public static WayPoint GetOffsetDist(WayPoint first, WayPoint second, double distance)
        {
            return GetDestByBearing(first, GetBearing(first, second), distance);
        }

    }
}