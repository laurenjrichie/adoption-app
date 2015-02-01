# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150201181336) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: true do |t|
    t.integer  "spca_id"
    t.string   "name"
    t.string   "gender"
    t.string   "age"
    t.string   "weight"
    t.string   "image_url"
    t.string   "story"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "applications", force: true do |t|
    t.string   "fullname"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zipcode"
    t.integer  "phone_number"
    t.string   "email"
    t.string   "housing"
    t.boolean  "landlord_approval"
    t.string   "landlord_name"
    t.integer  "landlord_phone"
    t.string   "habits"
    t.string   "pet_history"
    t.string   "current_vet"
    t.integer  "expected_costs"
    t.string   "indoor_outdoor"
    t.string   "how_learn"
    t.string   "animal_name"
    t.integer  "spca_id"
    t.string   "electronic_signature"
    t.date     "date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.boolean  "admin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
