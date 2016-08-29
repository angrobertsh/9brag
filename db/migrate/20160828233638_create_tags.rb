class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :meme_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end
    add_index :tags, [:meme_id, :tag_id], unique: true
  end
end
