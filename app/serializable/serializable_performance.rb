class SerializablePerformance < JSONAPI::Serializable::Resource
    type 'performances'
  
    attributes :title, :description, :date, :reviews

    attribute :artist do
        Artist.find(@object.artist_id) if @object.artist_id
    end

    attribute :venue do
        Venue.find(@object.venue_id) if @object.venue_id
    end

end
