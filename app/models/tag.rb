class Tag < ActiveRecord::Base
  validates :tag_id, :meme_id, :body, presence: true

  belongs_to :meme

  belongs_to :tagname,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tagname

end
