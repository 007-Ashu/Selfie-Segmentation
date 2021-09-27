using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ProcessStartInfo processStartInfo = new ProcessStartInfo();
            return View();
        }

        public ActionResult Python()
        {
            return View();
        }

        public ActionResult MediaPipe()
        {
            return View();
        }

        public ActionResult Test()
        {
            return View();
        }
    }
}