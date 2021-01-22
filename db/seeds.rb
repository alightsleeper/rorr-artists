# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artists = 20.times {Artist.create(
    name: (0...10).map { ('a'..'z').to_a[rand(26)] }.join,
    image_url: "https://via.placeholder.com/150"
)}

venues = 20.times {Venue.create(
    name: (0...10).map { ('a'..'z').to_a[rand(26)] }.join,
    image_url: "https://via.placeholder.com/150"
)}

performances = 100.times {Performance.create(
    artist_id: rand(1..20), 
    venue_id: rand(1..20), 
    date: rand(1..365).days.from_now
)}