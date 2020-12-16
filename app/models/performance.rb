class Performance < ApplicationRecord
  has_many :reviews
  references :artist
  references :venue

  def title
    a = Artist.find([artist_id]).first
    v = Venue.find([venue_id]).first
    a.name + ' at ' + v.name
  end
end
