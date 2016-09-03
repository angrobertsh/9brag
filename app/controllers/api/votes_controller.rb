class Api::VotesController < ApplicationController

  def create

  end

  def update

  end

  private

  def vote_params
    params.require(:vote).permit(:vote_val)
  end

end
