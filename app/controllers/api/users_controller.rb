class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(users_params)
    if @user.save
      login(@user)
#      render "api/users/show"
#      redirect_to memes_url
    else
      @user = User.new
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def users_params
    params.require(:user).permit(:name, :password)
  end

end
