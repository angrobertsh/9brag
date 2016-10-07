json.set! "#{vote.votable_id}" do
  json.extract! vote, :votable_id, :vote_val, :user_id
end
