class SerializableReview < JSONAPI::Serializable::Resource
    type 'reviews'
    attributes :title, :description, :score, :artist, :venue, :performance
end
