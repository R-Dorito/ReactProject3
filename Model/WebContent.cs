using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace FermiParadox.Model
{
    public class WebContent
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Title { get; set; }
        public string Content { get; set; }

    }
}
