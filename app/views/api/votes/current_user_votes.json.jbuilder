@votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
