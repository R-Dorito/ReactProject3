using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FermiParadox.Model;
using FermiParadox.Services;
using Microsoft.AspNetCore.Mvc;

namespace FermiParadox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebContentController: ControllerBase
    {
        private readonly WebContentService _webContentServer;
        public WebContentController(WebContentService webContentServer)
        {
            _webContentServer = webContentServer;
        }

        //[HttpPost("test", Name = "GetWebContent2")]
       
        [HttpGet]
        public ActionResult<List<WebContent>> Get()
        {
            return _webContentServer.Get();
            // from the webcontentservice "return _webContent.Find(x => true).ToList();"
        }

        [HttpGet("{id:length(24)}", Name = "GetWebContent")]
        public ActionResult<WebContent> Get(string id)
        {
            // returns "return _webContent.Find<WebContent>(x => x.Id == id).FirstOrDefault();"
            var webContent = _webContentServer.Get(id);
            if (webContent == null)
                return NotFound(); // from controller base
            return webContent;
        }

        [HttpPost]
        public ActionResult<WebContent> Create(WebContent webContent)
        {
            _webContentServer.Create(webContent);
            return CreatedAtRoute("GetWebContent", new { id = webContent.Id.ToString() }, webContent);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, WebContent webContent)
        {
            var webCont = _webContentServer.Get(id);
            if (webCont == null)
                return NotFound(); // from controller base
            _webContentServer.Update(id, webContent);
            return NoContent(); // why return no content??
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var webCont = _webContentServer.Get(id);
            if (webCont == null)
                return NotFound(); // from controller base
            _webContentServer.Remove(webCont.Id);
            return NoContent(); // why return no content??
        }
    }
}
