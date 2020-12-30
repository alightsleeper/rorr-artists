require 'rails_helper'

RSpec.describe Performance, :type => :model do

    it "cannot be created without a valid artist, venue, and date" do
        Artist.new(id: 1, name: "Bob").save
        Venue.new(id: 1, name: "Bob's Burgers").save
        expect(Performance.new(artist_id: 1, venue_id: 1, date: Date.yesterday)).to_not be_valid
        expect(Performance.new(artist_id: 1, date: "2020-12-28 19:00:00")).to_not be_valid      
        expect(Performance.new(artist_id: 99, venue_id: 1, date: "2020-12-28 19:00:00")).to_not be_valid 
        expect(Performance.new(artist_id: 1, venue_id: 1, date: 4.days.from_now)).to be_valid           
    end

    it "can be updated to remove or artist or venue, but not both" do
        Artist.new(id: 1, name: "Bob").save
        Venue.new(id: 1, name: "Bob's Burgers").save
        p = Performance.new(artist_id: 1, venue_id: 1, date: 4.days.from_now)
        expect(p.save).to be_truthy
        expect(p.update(artist_id: nil, venue_id: nil)).to_not be_truthy
        expect(p.update(artist_id: 1, venue_id: nil)).to be_truthy
    end
end