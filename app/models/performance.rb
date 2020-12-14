class Performance < ApplicationRecord
  has_many :reviews
  references :artist
  references :venue
end
