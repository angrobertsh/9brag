Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  resources :memes, only: [:new, :create, :index, :show], defaults: {format: :json} do
    resources :comments, only: [:index, :create]
  end

  resources :tagname, only: [:show, :create], defaults: {format: :json}

  resources :tag, only: [:create], defaults: {format: :json}

  resources :vote, only: [:create, :destroy], defaults: {format: :json}

end
