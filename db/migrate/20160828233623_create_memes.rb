class CreateMemes < ActiveRecord::Migration
  def change
    create_table :memes do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.string :attribution
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :memes, :user_id
  end
end
