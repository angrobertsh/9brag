class Addcolumn < ActiveRecord::Migration
  def change
    remove_column :tags, :tag_id
    add_column :tags, :tagname_id, :integer
  end
end
