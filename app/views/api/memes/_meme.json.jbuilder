# Returning self.title, self.url, self.attribution
# associations: self.user.name, self.tagnames, self.votes.length
# self.comments.user.name, self.comments.body

json.set! "#{meme.id}" do
 json.extract! meme, :title, :url, :attribution
 json.user meme.user.name
 json.tagnames meme.tagnames, :tagname
 json.votecount meme.votes, :vote_val
 json.comments meme.comments do |comment|
   json.body comment.body
   json.name comment.user.name
   json.time comment.created_at
 end
end

# json.partial! "api/memes/comment", comments: meme.comments

#  json.array! meme.comments do |comment|
#    json.partial! "api/memes/comment", comment: comment
# #   json.comment comment.user.name
#  end

 # json.array! meme.comments do |comment|
 #    json.body :body
 #    json.user do
 #      json.name comment.user.name
 #    end
 #  end
