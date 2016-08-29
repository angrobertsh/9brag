class Api::SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username_and_password(params[:user][:nickname], params[:user][:password])
    if @user
      login(@user)
#      render "api/users/show"
#      redirect_to memes_url
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    logout
    redirect_to memes_url
  end


end
