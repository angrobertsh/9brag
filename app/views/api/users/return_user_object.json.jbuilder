json.set! "#{@user.id}" do
  json.extract! @user, :id, :name, :url
  json.memes @user.memes.map{|meme| meme.id}
  json.karmatot @user.memes.map{|meme| meme.votes.map{|vote| vote.vote_val}.sum}.sum + @user.memes.length + @user.memes.map{|meme| meme.comments.length}.sum
  json.votekarma @user.memes.map{|meme| meme.votes.map{|vote| vote.vote_val}.sum}.sum
  json.interestkarma @user.memes.map{|meme| meme.comments.length}.sum
  json.contributekarma @user.memes.length
end

# karma is
# votes on your posts
# number of posted memes
# comments on your posts
# your comments @user.comments.length
