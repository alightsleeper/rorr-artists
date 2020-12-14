class Review < ApplicationRecord
  belongs_to :artist
  belongs_to :venue
  belongs_to :performance
end
