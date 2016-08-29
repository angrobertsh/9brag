class Tagname < ActiveRecord::Base
  validates :tagname presence: true

  has_many :tags,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tag

end
