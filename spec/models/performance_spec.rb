require 'rails_helper'

RSpec.describe Performance, :type => :model do
    it "is valid with valid attributes" do
        Artist.new(id: 1, name: "Bob").save
        Venue.new(id: 1, name: "Bob's Burgers").save
        expect(Performance.new(artist_id: 1, venue_id: 1, date: "2020-12-28 19:00:00")).to be_valid      
    end
end