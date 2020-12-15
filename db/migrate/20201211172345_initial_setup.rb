class InitialSetup < ActiveRecord::Migration[6.0]
  def change
    create_table "artists", force: :cascade do |t|
      t.string "name"
      t.string "image_url"
      t.string "slug"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  
    create_table "venues", force: :cascade do |t|
      t.string "name"
      t.string "image_url"
      t.string "slug"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  
    create_table "performances", force: :cascade do |t|
      t.datetime "date", precision: 6
      t.string "title"
      t.text "description"
      t.bigint "artist_id"
      t.bigint "venue_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["artist_id"], name: "index_performances_on_artist_id"
      t.index ["venue_id"], name: "index_performances_on_venue_id"
    end
  
    create_table "reviews", force: :cascade do |t|
      t.string "title"
      t.string "description"
      t.integer "score"
      t.bigint "artist_id"
      t.bigint "venue_id"
      t.bigint "performance_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["artist_id"], name: "index_reviews_on_artist_id"
      t.index ["venue_id"], name: "index_reviews_on_venue_id"
      t.index ["performance_id"], name: "index_reviews_on_performance_id"
    end  
  end
end
