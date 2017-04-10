using BackBeTrip.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace BackBeTrip.Controllers
{
 
    public class GoogleController
    {
        private static string keyPlaces = "AIzaSyAc5uRZlE8iXemDa8OhBLoE0I7M-kI9ZKU";
        private static string keyDirections = "AIzaSyBUS26j6H336Tzz_lllTlOmuU2JHbmmgRk";
        private static string keyGeocoding = "AIzaSyDEcYIVNxT6bSakYG9NhS3NjxfejjE10_A";
        // string url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=" + key;

        List <WayPoint> GetRoute(WayPoint from, WayPoint to)
        {
            List<WayPoint> res = new List<WayPoint>();

            string url = "https://maps.googleapis.com/maps/api/directions/json?origin=Kazan&destination=Moscow&key=" + keyDirections;
            WebRequest request = WebRequest.Create(url);
            WebResponse response = request.GetResponse();
            Stream data = response.GetResponseStream();
            StreamReader reader = new StreamReader(data);
            string responseFromServer = reader.ReadToEnd();
            response.Close();

            dynamic obj = JsonConvert.DeserializeObject(responseFromServer);

            //TODO: End it
            //Route contains array of legs
            //Each leg contain array of steps
            //Each step contain start and end point
            //Look at google api

            //Example for one leg
            JArray rsp = obj.routes[0].legs[0].steps;

            List<WayPoint> waypoints = new List<WayPoint>();

            for (int i = 0; i < rsp.Count; i++)
            {
                dynamic t = rsp[i];
                WayPoint tmp = JsonConvert.DeserializeObject<WayPoint>(t.end_location.ToString());
                waypoints.Add(tmp);
            }

            return res;
        }
        

        // достопримечательности
        List <WayPoint> GetAttractions()
        {
            string url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=" + keyPlaces;
            List<WayPoint> res = new List<WayPoint>();
            return res;
        }
    }
}