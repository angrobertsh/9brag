class Droptables < ActiveRecord::Migration
  def change
    drop_table :downvotes
    drop_table :upvotes
  end
end
