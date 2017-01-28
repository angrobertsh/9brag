class Meme < ActiveRecord::Base
  validates :url, :title, presence: true

  include Votable

  belongs_to :user

  has_many :comments
  has_many :tags, inverse_of: :meme
  has_many :votes, :as => :votable

  has_many :tagnames,
    through: :tags,
    source: :tagname

  def ourTags=(tags)
    @tags = tags
  end

  def karma
    self.comments.length + self.votes.length
  end

end
