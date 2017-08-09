class Api::UsersController < ApplicationController

  def show
    @user = User.find_by_id(params[:id].to_i)
    render "api/users/return_user_object"
  end

  def create
    @user = User.new(users_params)
    if @user.save!
      login(@user)
      render "api/users/show"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  def updatephoto
    @user = current_user
    if @user.update!(users_params)
      render "api/users/return_user_object"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  private

  def users_params
    params.require(:user).permit(:name, :password, :url)
  end

end
