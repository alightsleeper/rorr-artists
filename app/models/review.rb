class Review < ApplicationRecord
  references :artist
  references :venue
end
