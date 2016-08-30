class Meme < ActiveRecord::Base
  validates :url, :title, :nsfw, presence: true

  include Votable

  belongs_to :user

  has_many :comments
  has_many :tags

  has_many :tagnames,
    through: :tags,
    source: :tagname

end
