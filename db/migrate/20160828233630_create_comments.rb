class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :meme_id, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
    add_index :comments, :meme_id
  end
end
