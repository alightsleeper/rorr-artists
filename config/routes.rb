Rails.application.routes.draw do

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :artists, param: :slug
      resources :venues, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :performances, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
