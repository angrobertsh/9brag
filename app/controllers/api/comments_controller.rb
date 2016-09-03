class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new({body: comment_params[:body], meme_id: comment_params[:meme_id], user_id: current_user.id})
    if @comment.save
      @meme = Meme.find_by_id(comment_params[:meme_id])
      render "api/memes/show"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :meme_id)
  end

end
