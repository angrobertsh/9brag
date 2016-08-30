class Tagname < ActiveRecord::Base
  validates :tagname, presence: true

  has_many :tags
  
  has_many :memes,
    through: :tags,
    source: :meme

end
