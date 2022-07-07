class CreateStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.date :date_announced
      t.string :ticker
      t.string :company_name
      t.integer :current_price
      t.string :acquiring_company
      t.string :acquiring_company_ticker
      t.integer :offer_price
      t.date :expected_close_date
      t.integer :days_until_closing
      t.integer :flat_profit
      t.integer :percent_profit
      t.integer :annualized_profit_percent
      t.string :deal_type
      t.boolean :progress
      t.boolean :add_to_watchlist, default: false 
      t.timestamps
    end
  end
end
