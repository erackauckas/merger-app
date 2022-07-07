# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_06_192030) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "holders", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stock_holders", force: :cascade do |t|
    t.integer "stock_id"
    t.integer "holder_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stocks", force: :cascade do |t|
    t.date "date_announced"
    t.string "ticker"
    t.string "company_name"
    t.integer "current_price"
    t.string "acquiring_company"
    t.string "acquiring_company_ticker"
    t.integer "offer_price"
    t.date "expected_close_date"
    t.integer "days_until_closing"
    t.integer "flat_profit"
    t.integer "percent_profit"
    t.integer "annualized_profit_percent"
    t.string "deal_type"
    t.boolean "progress"
    t.boolean "add_to_watchlist", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.boolean "admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
