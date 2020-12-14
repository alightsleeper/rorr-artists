class Performance < ApplicationRecord
  has_many :reviews
  belongs_to :artist #TODO: this should be has_and_belongs_to_many
  belongs_to :venue
end
