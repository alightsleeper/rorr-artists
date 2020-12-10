class SerializablePerformance < JSONAPI::Serializable::Resource
    type 'performances'
  
    attributes :title, :description, :date, :artist_id

end
