json.set! "#{@user.id}" do
  json.extract! @user, :id, :name, :url
  json.memes @user.memes.map{|meme| meme.id}
  json.karma @user.memes.map{|meme| meme.votes.map{|vote| vote.vote_val}.sum}.sum + @user.memes.length + @user.memes.map{|meme| meme.comments.length}.sum + @user.comments.length
end
