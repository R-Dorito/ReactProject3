using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FermiParadox.Model;
using MongoDB.Driver;

namespace FermiParadox.Services
{
    // this class is the middle man between the database and the API.
    public class WebContentService
    {
        // This is where the collection of data is stored.
        private readonly IMongoCollection<WebContent> _webContent;
        public WebContentService(IWebContentSettings settings) {
            // used for connection and collection of data
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _webContent = database.GetCollection<WebContent>(settings.CollectionName);
        }

        public List<WebContent> Get() {
            return _webContent.Find(x => true).ToList();
        }

        public WebContent Get(string id)
        {
            // gets the first item with this id
            return _webContent.Find<WebContent>(x => x.Id == id).FirstOrDefault();
        }

        public WebContent Create(WebContent webContent)
        {
            // inserts a single document
            _webContent.InsertOne(webContent);
            return webContent;
            // why does this return item?
        }

        public void Update(string id, WebContent webContent)
        {
            _webContent.ReplaceOne(x => x.Id == id, webContent);
        }

        public void Remove(WebContent webContent)
        {
            _webContent.DeleteOne(x => x.Id == webContent.Id);
        }

        public void Remove(string id)
        {
            _webContent.DeleteOne(x => x.Id == id);
        }
    }
}
