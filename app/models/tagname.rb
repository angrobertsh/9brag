class Tagname < ActiveRecord::Base
  validates :tagname, presence: true

  has_many :tags

end
