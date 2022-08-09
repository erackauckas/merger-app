class CreateStockHolders < ActiveRecord::Migration[7.0]
  def change
    create_table :stock_holders do |t|
      t.integer :stock_id
      t.integer :holder_id
      t.timestamps
    end
  end
end
