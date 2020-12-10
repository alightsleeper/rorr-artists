class Performance < ApplicationRecord
  references :artist
  references :venue
end
