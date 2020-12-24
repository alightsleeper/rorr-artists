require 'rails_helper'

RSpec.describe Review, :type => :model do

    it "is not valid without an artist, venue or performance" do
        expect(Review.new(score: 2)).to_not be_valid
    end

    it "is not valid without a score" do
        expect(Review.new(artist_id: 1)).to_not be_valid
    end

    it "is not valid if score is not between 0 and 5" do
        expect(Review.new(artist_id: 1, score: -3)).to_not be_valid
        expect(Review.new(venue_id: 1, score: 7)).to_not be_valid
    end

    it "is valid with valid attributes" do
        expect(Review.new(artist_id: 1, score: 3)).to be_valid
        expect(Review.new(venue_id: 1, score: 2)).to be_valid
        expect(Review.new(performance_id: 1, score: 0)).to be_valid
    end

end
