class Api::MemesController < ApplicationController

  def index
    @memes = Meme.all
    render "api/memes/index"
  end

  def show
    @meme = Meme.find_by_id(params[:id])
    render "api/memes/show"
  end

  def create
    @meme = Meme.new(meme_params)
    if @meme.save!
      render "api/memes/show"
    else
      render (
        json: @meme.errors.full_messages,
        status: 422
      )
    end
  end

  private

  def meme_params
    params.require(:meme).permit(:url, :title, :tags)
  end

end
