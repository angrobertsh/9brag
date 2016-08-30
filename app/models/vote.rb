class Vote < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: [:votable_id, :votable_type] }

  belongs_to :votable, polymorphic: true
  belongs_to :user, inverse_of: :votes
end
