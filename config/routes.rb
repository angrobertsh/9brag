Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :memes, only: [:create, :index, :show] do
      resources :comments, only: [:create]
    end
    resources :votes, only: [:create, :update]
  end

end
