require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create!(name:'guest', password:'password') }
# with factorygirl
# let!(:user) { create(:user) }

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_uniqueness_of(:name) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:memes) }
    it { should have_many(:votes) }
    it { should have_many(:comments) }
  end


end
