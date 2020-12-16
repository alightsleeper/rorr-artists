class Review < ApplicationRecord
  # references :artist
  # references :venue
  # references :performance

  def artist
    Artist.find_by(id: [artist_id])
  end

  def venue
    Venue.find_by(id: [venue_id])
  end

  def performance
    Performance.find_by(id: [performance_id])
  end
end
