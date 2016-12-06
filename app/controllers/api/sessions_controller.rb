class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_username_and_password(params[:user][:name], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: ["Incorrect name or password"],
        status: 401
      )
    end
  end

  def destroy
    if current_user
      logout
      render "api/users/logged_out"
    else
      render(
        json: ["Nobody is logged in"],
        status: 404
      )
    end
  end


end
