using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BackBeTrip.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page2";

            return View();
        }

        public ActionResult API() 
        {
            ViewBag.Title = "API Page2";

            return View();
        }


    }
}
