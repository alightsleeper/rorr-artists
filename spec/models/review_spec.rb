require 'rails_helper'

RSpec.describe Review, :type => :model do

    it "is not valid without a valid artist, venue or performance" do
        Artist.new(id: 1, name: "Bob").save
        expect(Review.new(score: 2)).to_not be_valid
        expect(Review.new(artist_id: 99, score: 3)).to_not be_valid
    end

    it "is not valid without a score" do
        expect(Review.new(artist_id: 1)).to_not be_valid
    end

    it "is not valid if score is not between 0 and 5" do
        expect(Review.new(artist_id: 1, score: -3)).to_not be_valid
        expect(Review.new(venue_id: 1, score: 7)).to_not be_valid
    end

    it "is valid with valid attributes" do
        Artist.new(id: 1, name: "Bob").save
        Venue.new(id: 1, name: "Bob's Burgers").save
        expect(Review.new(artist_id: 1, score: 3)).to be_valid
        expect(Review.new(venue_id: 1, score: 2)).to be_valid
    end

end
