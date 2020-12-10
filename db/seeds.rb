# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artists = Artist.create([
    {
        name: "Punch Brothers",
        image_url: "https://bookingagentinfo.com/wp-content/uploads/2019/09/Punch-Brothers-Contact-Information.jpg"
    },
    {
        name: "Cheer-Accident",
        image_url: "https://www.cheer-accident.com/wp-content/uploads/2014/03/CHEER-ACCIDENT-QUARTET.jpg"
    },
    {        
        name: "Radiohead",
        image_url: "https://media.npr.org/assets/img/2019/06/11/gettyimages-80530629-f148b8e014c67ed40c18fa8d2f50aa5ee7d87d67-s800-c85.jpg"
    }
])

reviews = Review.create([
    {
        title: 'Great band',
        description: 'I had a lovely time.',
        score: 5,
        artist: artists.first
    },
    {
        title: 'Lousy!',
        description: 'Weird band, made me uncomfortable.',
        score: 1,
        artist: artists.last       
    }
])

performances = Performance.create([
    {
        title: 'Punch Brothers at Madison Square Garden',
        description: 'I had a lovely time.',
        date: '2019-03-27 22:00:00',
        artist: artists.first
    },
    {
        title: 'Radiohead at Madison Square Garden',
        description: 'Weird band, made me uncomfortable.',
        date: '2014-05-11 22:00:00',
        artist: artists.last       
    }
])
