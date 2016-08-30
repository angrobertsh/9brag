class Api::SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username_and_password(params[:user][:name], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
#      redirect_to memes_url
    else
      render(
        json: @user.errors.full_messages,
        status: 401
      )
    end
  end

  def destroy
    if current_user
      logout
      render "api/users/logged_out"
#      Fix this to redirect_to memes_url
    else
      render(
        json: ["Nobody is logged in"],
        status: 404
      )
    end
  end


end
