# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artists = Artist.create([
    {
        name: "Tortoise",
        image_url: "https://maroon-prod.s3.amazonaws.com/media/CACHE/images/photos/2017/01/16/tortoise/efdd7a9acd386b01d84915ac0561900a.jpeg"
    },
    {
        name: "Cheer-Accident",
        image_url: "https://www.cheer-accident.com/wp-content/uploads/2014/03/CHEER-ACCIDENT-QUARTET.jpg"
    },
    {        
        name: "Shellac",
        image_url: "https://www.wmse.org/wp-content/uploads/2020/02/600x360-Shellac-2020.png"
    }
])

venues = Venue.create([
    {
        name: "Hungry Brain",
        image_url: "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/12764738_10153572230519164_7275033678571519826_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=aA9Nic-7qgQAX88kKir&_nc_ht=scontent-ort2-1.xx&oh=05b5d1a92df7ca3d7deab7be5ff804d2&oe=5FFA162D"
    },
    {        
        name: "Cafe Mustache",
        image_url: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/540307_402209006456728_452039113_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=dvgQZylUKoYAX_JilZF&_nc_ht=scontent-ort2-1.xx&oh=564e1695b1580e94d582ab5dbacac998&oe=5FF793AF"
    }
])

reviews = Review.create([
    {
        title: 'Great band',
        description: 'I had a lovely time.',
        score: 5,
        artist_id: artists.first.id
    },
    {
        title: 'Lousy!',
        description: 'Weird band, made me uncomfortable.',
        score: 1,
        artist_id: artists.last.id     
    },
    {
        title: 'Cool little spot',
        description: 'Weird bands, a nice venue.',
        score: 1,
        venue_id: venues.last.id      
    }
])

performances = Performance.create([
    {
        date: '2019-03-27 22:00:00',
        description: 'One night only!',
        artist_id: artists.first.id,
        venue_id: venues.first.id
    },
    {
        date: '2014-05-11 22:00:00',
        description: 'One night only!',
        artist_id: artists.last.id,
        venue_id: venues.last.id       
    }
])
