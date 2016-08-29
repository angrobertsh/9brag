class Removensfw < ActiveRecord::Migration
  def change
    remove_columns :memes, :nsfw
  end
end
