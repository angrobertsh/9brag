require 'byebug'

class Api::MemesController < ApplicationController

  def index
    @memes = Meme.all
  end

  def show
    @meme = Meme.find_by_id(params[:id])
  end

  def create
    @meme = Meme.new(meme_params)
    if @meme.save!
      @tags = meme_params[:ourTags].split(",").map(&:lstrip).map(&:downcase)
      @tags.each do |tagname|
        Tagname.create({tagname: tagname})
      end
      @tagArray = [];
      @tags.each do |tagname|
        @tagArray.push(Tagname.find_by(tagname: tagname).id)
      end
      @meme.tagname_ids = @tagArray
      render "api/memes/show"
    else
      render(
          json: @meme.errors.full_messages,
          status: 422
        )
    end
  end

  private

  def meme_params
    params.require(:meme).permit(:url, :title, :attribution, :ourTags, :user_id)
  end

end
