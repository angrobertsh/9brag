class Meme < ActiveRecord::Base
  validates :url, :title, presence: true

  include Votable

  belongs_to :user

  has_many :comments
  has_many :tags
  has_many :votes, :as => :votable

  has_many :tagnames,
    through: :tags,
    source: :tagname

end
