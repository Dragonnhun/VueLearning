using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace VueLearning.ServiceModel
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonElement("UserName")]
        public string UserName { get; set; } = null!;

        [BsonElement("UserEmail")]
        public string UserEmail { get; set; } = null!;

        [BsonElement("UserPassword")]
        public string UserPassword { get; set; } = null!;
    }
}
