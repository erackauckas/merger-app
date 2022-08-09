class CreateStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :company_name      
      t.string :acquiring_company
      t.string :acquiring_company_ticker      
      t.datetime :expected_close_date
      t.string :deal_type
      t.float :stock_comp
      t.float :cash_comp
      t.string :status
      t.boolean :add_to_watchlist, default: false 
      t.timestamps
    end
  end
end
