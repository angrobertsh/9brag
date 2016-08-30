class Tag < ActiveRecord::Base
  validates :tag_id, :meme_id, :body, presence: true

  belongs_to :meme

  belongs_to :tagname,

end
