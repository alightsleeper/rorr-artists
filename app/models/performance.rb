class Performance < ApplicationRecord
  # references :artist
  # references :venue
  has_many :reviews
  validates :date, presence: true
  validates :artist, presence: true, on: :create
  validates :venue, presence: true, on: :create
  validate :has_artist_or_venue, on: :update
  validate :date_is_valid_and_available

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

  def has_artist_or_venue
    unless [artist_id, venue_id].any?{|subject| subject.present?}
      errors.add(:base, 'artist_id or venue_id is required')
    end

    if artist_id and !artist
      errors.add(:artist_id, :invalid)
    end 

    if venue_id and !venue
      errors.add(:venue_id, :invalid)
    end
  end

  def date_is_valid_and_available
      unless Date.parse(date.to_s).after?(Date.today)
        errors.add(:date, :invalid)
      end
  end
end
