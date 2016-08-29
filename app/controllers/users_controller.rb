class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(users_params)
    if @user.save
      login(@user)
      redirect_to todo_lists_url
    else
      flash[:errors] = @user.errors.full_messages
      @user = User.new
      render :new
    end
  end

  private

  def users_params
    params.require(:user).permit(:name, :password)
  end

end
