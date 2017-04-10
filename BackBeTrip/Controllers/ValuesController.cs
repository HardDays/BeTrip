using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.IO;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using System.Web.Http.Results;

using System.Web.Mvc;
using Newtonsoft.Json;
using BackBeTrip.Models;

namespace BackBeTrip.Controllers
{

    //Example of API usage
    public class ValuesController : ApiController
    {


        // GET api/values
        public HttpResponseMessage Get()
        {          
            List<WayPoint> waypoints = new List<WayPoint>();
       
            WayPoint t1 = new WayPoint(56.3758, 47.5345);

            waypoints.Add(t1);

            var resp = new HttpResponseMessage()
            {
                Content = new StringContent(JsonConvert.SerializeObject(waypoints))
            };
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return resp;
              
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
