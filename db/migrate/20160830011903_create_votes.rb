class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :vote_val, null: false
      t.integer :user_id, null: false
      t.references :votable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
