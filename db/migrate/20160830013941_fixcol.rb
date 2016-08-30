class Fixcol < ActiveRecord::Migration
  def change
    remove_column :votes, :meme_id
    add_column :votes, :vote_val, :integer
  end
end
