class SerializableReview < JSONAPI::Serializable::Resource
    type 'reviews'
  
    attributes :title, :description, :score

    attribute :artist do
        Artist.find(@object.artist_id) if @object.artist_id
    end

    attribute :venue do
        Venue.find(@object.venue_id) if @object.venue_id
    end

    attribute :performance do
        Performance.find(@object.performance_id) if @object.performance_id
    end
end
