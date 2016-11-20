class Api::MemesController < ApplicationController

  def index
    # right now params[:lastMeme] == ""
    if params[:sort] == "/hot"
      # if I wanted to keep it truly hot I'd do a time limit here to, so, where(created_at > some date)
      @allmemes = Meme.all
      @karmas = []
      # number of votes and number of comments. somehow this has to not be done for all of them all the time but i don't know how
      @allmemes.each do |meme|
        @karmas.push({(meme.comments.length + meme.votes.length) => meme})
      end
      @karmas.sort!{|a, b| b.keys[0] <=> a.keys[0]}
      @memes = @karmas.map{|a| a.values[0]}
      # There will be a limit here, to make it so the frontend knows what's up
    elsif params[:sort] == "/fresh"
      @memes = Meme.order(created_at: :desc).limit(6)
    else
      @memes = Meme.all.limit(6)
    end
  end

  def getTaggedMemes
    # right now params[:lastMeme] == ""
    @tagname = Tagname.where(tagname: params[:tag])[0]
    @memes = @tagname.memes
    # there will be a limit(6) clause after memes
    render "api/memes/index"
  end

  def getUserMemes
    @user = User.where(id: params[:id])[0]
    @memes = @user.memes
    # there will be a limit(6) clause after memes
    render "api/memes/index"
  end

  def show
    @meme = Meme.find_by_id(params[:id])
  end

  def create
    new_params = meme_params
    new_params[:user_id] = current_user.id
    @meme = Meme.new(new_params)
    if @meme.save
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
      @errors = @meme.errors.full_messages
      render(
          "api/shared/error",
          status: 422
        )
    end
  end

  private

  def meme_params
    params.require(:meme).permit(:url, :title, :attribution, :ourTags)
  end

end
