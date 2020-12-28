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
    aName = artist ? artist.name : 'TBD' 
    vName = venue ? venue.name : 'TBD'
    aName + ' at ' + vName
  end
end
