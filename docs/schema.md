```
create_table "comments", force: :cascade do |t|
  t.integer  "user_id",    null: false
  t.integer  "meme_id",    null: false
  t.string   "body",       null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

add_index "comments", ["meme_id"], name: "index_comments_on_meme_id", using: :btree

create_table "memes", force: :cascade do |t|
  t.string   "url",         null: false
  t.string   "title",       null: false
  t.string   "attribution"
  t.integer  "user_id",     null: false
  t.datetime "created_at",  null: false
  t.datetime "updated_at",  null: false
end

add_index "memes", ["user_id"], name: "index_memes_on_user_id", using: :btree

create_table "tagnames", force: :cascade do |t|
  t.string   "tagname",    null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

create_table "tags", force: :cascade do |t|
  t.integer  "meme_id",    null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.integer  "tagname_id"
end

create_table "users", force: :cascade do |t|
  t.string   "name",            null: false
  t.string   "password_digest", null: false
  t.string   "session_token",   null: false
  t.datetime "created_at",      null: false
  t.datetime "updated_at",      null: false
end

add_index "users", ["name"], name: "index_users_on_name", unique: true, using: :btree
add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

create_table "votes", force: :cascade do |t|
  t.string   "votable_type"
  t.integer  "votable_id"
  t.integer  "user_id",      null: false
  t.datetime "created_at",   null: false
  t.datetime "updated_at",   null: false
  t.integer  "vote_val"
end

add_index "votes", ["votable_type", "votable_id"], name: "index_votes_on_votable_type_and_votable_id", using: :btree

```
