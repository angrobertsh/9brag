class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :votable_type, null: false
      t.integer :votable_id, null: false
      t.integer :meme_id, null: false
      t.integer :user_id, null: false
      t.references :votable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
