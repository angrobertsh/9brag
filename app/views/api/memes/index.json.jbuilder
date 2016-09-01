
@memes.each do |meme|
  json.partial! "api/memes/meme", meme: meme
end
