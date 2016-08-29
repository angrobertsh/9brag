class CreateUpvotes < ActiveRecord::Migration
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :meme_id, null: false

      t.timestamps null: false
    end
    add_index :upvotes, [:meme_id, :user_id], unique: true
  end
end
