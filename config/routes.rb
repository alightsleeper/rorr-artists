Rails.application.routes.draw do

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :artists, param: :slug
      resources :venues, param: :slug
      resources :reviews
      resources :performances
    end
  end

  get '*path', to: 'pages#index', via: :all
end
