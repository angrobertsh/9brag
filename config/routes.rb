Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  resources :memes, only: [:new, :create, :index, :show] do
    resources :comments, only: [:index, :create]
  end

  resources :tagname, only: [:show, :create]

  resources :tag, only: [:create]

  resources :vote, only: [:create, :destroy]

end
