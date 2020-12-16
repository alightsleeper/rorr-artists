class SerializablePerformance < JSONAPI::Serializable::Resource
    type 'performances' 
    attributes :title, :description, :date, :artist, :venue, :reviews
end
