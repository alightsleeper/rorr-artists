class SerializableReview < JSONAPI::Serializable::Resource
    type 'reviews'
  
    attributes :title, :description, :score, :artist_id, :venue_id, :performance_id

end
