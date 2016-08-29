class CreateTagnames < ActiveRecord::Migration
  def change
    create_table :tagnames do |t|
      t.string :tagname, null: false

      t.timestamps null: false
    end
  end
end
