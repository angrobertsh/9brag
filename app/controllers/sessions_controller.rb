class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_username_and_password(params[:user][:nickname], params[:user][:password])
    if @user
      login(@user)
      redirect_to memes_url
    else
      flash[:errors] = "Invalid name or password"
      redirect_to memes_url
    end
  end

  def destroy
    logout
    redirect_to memes_url
  end


end
