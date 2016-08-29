class Downvote < ActiveRecord::Base
  validates :user_id, :meme_id, presence: true

  belongs_to :user
  belongs_to :meme

end
