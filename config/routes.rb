Rails.application.routes.draw do
  resources :users
  resources :exchanges, only: [:index, :create]
  resources :holders, only: [:index, :show, :create]
  resources :stocks
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  get '/authorized_user', to: 'users#show'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#login'
  post '/signup', to: 'sessions#signup'

  delete '/logout', to: 'sessions#logout'
end