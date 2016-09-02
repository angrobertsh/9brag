class Tag < ActiveRecord::Base
  validates :tagname, :meme, presence: true
  validates :tagname_id, uniqueness: { scope: :meme_id }

  belongs_to :meme
  belongs_to :tagname

end
