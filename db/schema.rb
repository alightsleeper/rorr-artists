# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_11_172345) do

  create_table "artists", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "performances", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
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

  create_table "reviews", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "score"
    t.bigint "artist_id"
    t.bigint "venue_id"
    t.bigint "performance_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_reviews_on_artist_id"
    t.index ["performance_id"], name: "index_reviews_on_performance_id"
    t.index ["venue_id"], name: "index_reviews_on_venue_id"
  end

  create_table "venues", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
