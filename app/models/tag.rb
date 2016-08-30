class Tag < ActiveRecord::Base
  validates :tagname_id, :meme_id, presence: true

  belongs_to :meme
  belongs_to :tagname

end
