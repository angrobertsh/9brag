class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :name, :password_digest, presence: true, uniqueness: true

  has_many :votes
  has_many :comments
  has_many :memes

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_username_and_password(username, password)
    maybe = User.find_by(name: username)
    if maybe.nil?
      return nil
    end
    if maybe.is_password?(password)
      return maybe
    end
    return nil
  end


end
