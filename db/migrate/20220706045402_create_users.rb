class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :admin, default: false
      t.timestamps
      t.string :password_digest
    end
  end
end
