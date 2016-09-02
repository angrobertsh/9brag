class Tagname < ActiveRecord::Base
  validates :tagname, presence: true

  has_many :tags, inverse_of: :tagname

  has_many :memes,
    through: :tags,
    source: :meme

end
