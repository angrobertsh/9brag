# json.partial! "api/memes/meme", meme: @meme

json.array! @meme do |meme|
  json.partial! "api/memes/meme", meme: meme
end
