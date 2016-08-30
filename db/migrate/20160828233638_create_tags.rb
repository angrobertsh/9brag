class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :meme_id, null: false
      t.integer :tagname_id, null: false

      t.timestamps null: false
    end
    add_index :tags, [:meme_id, :tagname_id], unique: true
  end
end
