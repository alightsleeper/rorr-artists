require 'rails_helper'

RSpec.describe Venue, :type => :model do
    
    it "is not valid without a name" do
        expect(Venue.new).to_not be_valid
    end

    it "is not valid if name already exists" do
        Venue.new(name: "Sir Digby Chicken Caesar").save

        expect(Venue.new(
            name: "Sir Digby Chicken Caesar", 
        )).to_not be_valid

        expect(Venue.new(
            name: "sir digby chicken caesar", 
        )).to_not be_valid
    end

    it "is valid with valid attributes" do
        expect(Venue.new(
            name: "Sir Digby Chicken Caesar", 
        )).to be_valid
    end
end
