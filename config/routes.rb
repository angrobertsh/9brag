Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    get 'currentUserVotes' => "votes#currentUserVotes", as: "currentUserVotes"
    patch 'updatephoto' => "users#updatephoto", as: "updatephoto"
    # get 'getHotMemes' => "memes#getHotMemes", as: "getHotMemes"
    # get 'getFreshMemes' => "memes#getFreshMemes", as: "getFreshMemes"
    get 'getTaggedMemes/:tag' => "memes#getTaggedMemes", :as => :tag
    resource :session, only: [:create, :destroy]
    resources :memes, only: [:create, :index, :show] do
      resources :comments, only: [:create]
      resources :votes, only: [:create]
    end
  end

end
