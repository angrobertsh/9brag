class Comment < ActiveRecord::Base
  validates :user_id, :meme_id, :body, presence: true

  belongs_to :user
  belongs_to :meme

end
