class Review < ApplicationRecord
  # references :artist
  # references :venue
  # references :performance
  validates :score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validate :has_subject

  def artist
    Artist.find_by(id: [artist_id])
  end

  def venue
    Venue.find_by(id: [venue_id])
  end

  def performance
    Performance.find_by(id: [performance_id])
  end

  def has_subject
    unless [artist_id, venue_id, performance_id].any?{|subject| subject.present?}
      errors.add(:base, :blank)
    end
  end
  
end
