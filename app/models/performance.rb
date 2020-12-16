class Performance < ApplicationRecord
  # references :artist
  # references :venue
  has_many :reviews

  def artist
    Artist.find_by(id: [artist_id])
  end

  def venue
    Venue.find_by(id: [venue_id])
  end

  def title
    artist.name + ' at ' + venue.name
  end
end
