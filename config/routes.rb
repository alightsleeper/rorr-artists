Rails.application.routes.draw do

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :artists
      resources :venues
      resources :reviews
      resources :performances
    end
  end

  get '*path', to: 'pages#index'
  root 'pages#index'
end
