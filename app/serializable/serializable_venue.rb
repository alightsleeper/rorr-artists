class SerializableVenue < JSONAPI::Serializable::Resource
    type 'venues'
  
    attributes :name, :image_url, :slug, :avg_score, :reviews, :performances

end
