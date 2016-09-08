# Returning self.title, self.url, self.attribution
# associations: self.user.name, self.tagnames, self.votes.length
# self.comments.user.name, self.comments.body

json.set! "#{meme.id}" do
 json.extract! meme, :title, :url, :attribution, :id, :created_at
 json.user meme.user.name
 json.user_id meme.user.id
 json.tagnames meme.tagnames, :tagname
 json.votecount meme.votes, :vote_val
 json.comments meme.comments do |comment|
   json.body comment.body
   json.name comment.user.name
   json.time "#{comment.created_at.time.hour}:#{comment.created_at.time.min}, #{comment.created_at.to_date}"
   json.user_url comment.user.url
   json.comment_user_id comment.user.id
   json.id comment.id
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
