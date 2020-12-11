class Review < ApplicationRecord
  references :artist
  references :venue
  references :performance
end
