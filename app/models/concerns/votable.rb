module Votable
  extend ActiveSupport::Concern

  included do
    has_many :votes, as: :votable,
      class_name: "Vote",
      dependent: :destroy
  end

end
