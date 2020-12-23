require 'rails_helper'

RSpec.describe Artist, :type => :model do
    it "is valid with valid attributes" do
        expect(Artist.new(
            name: "Sir Digby Chicken Caesar", 
        )).to be_valid
    end

    it "is not valid without a name" do
        expect(Artist.new).to_not be_valid
    end

    it "is not valid if name already exists" do
        Artist.new(name: "Sir Digby Chicken Caesar").save

        expect(Artist.new(
            name: "Sir Digby Chicken Caesar", 
        )).to_not be_valid

        expect(Artist.new(
            name: "sir digby chicken caesar", 
        )).to_not be_valid
    end
end
