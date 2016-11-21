class Api::MemesController < ApplicationController

  def index

    @lastMeme = params[:lastMeme]
    if @lastMeme == ""
      @lastMeme = 0
    else
      @lastMeme = @lastMeme.to_i
    end

    if params[:sort] == "/hot"
      # if I wanted to keep it truly hot I'd do a time limit here to, so, where(created_at > some date)
      @allmemes = Meme.all
      @karmas = []
      # number of votes and number of comments. somehow this has to not be done for all of them all the time but i don't know how
      @allmemes.each do |meme|
        @karmas.push({(meme.comments.length + meme.votes.length) => meme})
      end
      @karmas.sort!{|karma1, karma2| karma2.keys[0] <=> karma1.keys[0]}
      @sortedmemes = @karmas.map{|meme| meme.values[0]}

      if @lastMeme == 0
        @start = 0
      else
        @start = @sortedmemes.index{|meme| meme.id == @lastMeme} + 1
        if @start > (@sortedmemes.length - 1)
          @start -= 1
        end
      end

      @stop = @start + 6
      if @stop > (@sortedmemes.length - 1)
        @stop = @sortedmemes.length
      end

      @memes = @sortedmemes[@start...@stop]
    elsif params[:sort] == "/fresh"
      # @memes = Meme.order(created_at: :desc)
      @start = @lastMeme
      if @lastMeme == 0
        @start = (Meme.last.id + 1)
      end
      @memes = Meme.where("id < ?", @start).order(id: :desc).limit(6)
    else
      # @memes = Meme.all
      @start = @lastMeme
      @memes = Meme.where("id > ?", @start).limit(6)
    end
  end

  def getTaggedMemes

    @lastMeme = params[:lastMeme]
    if @lastMeme == ""
      @lastMeme = 0
    end

    @start = @lastMeme
    @tagname = Tagname.where(tagname: params[:tag])[0]
    @memes = @tagname.memes.where("memes.id > ?", @start).limit(6)
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
