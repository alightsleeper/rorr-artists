class SerializableArtist < JSONAPI::Serializable::Resource
    type 'artists'
  
    attributes :name, :image_url, :slug, :avg_score, :reviews, :performances

end
