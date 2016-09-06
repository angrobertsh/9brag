class Api::VotesController < ApplicationController

  def create
    if(logged_in?)
      @meme = Meme.find_by_id(vote_params[:votable_id])
      @vote = Vote.find_by_votable_id_and_user_id(vote_params[:votable_id], current_user.id)
      if @vote.nil?
        Vote.create({vote_val: vote_params[:vote_val], votable_id: vote_params[:votable_id], user_id: current_user.id, votable_type: "Meme"})
      else
        if @vote.vote_val == vote_params[:vote_val].to_i
          @vote.update({vote_val: 0})
        else
          @vote.update({vote_val: vote_params[:vote_val]})
        end
      end
      render "api/memes/show"
    else
      render(
        json: "Not logged in.",
        status: 422
      )
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:vote_val, :votable_id)
  end

end
