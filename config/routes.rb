Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/dogs/:dog_name/clients/:id', to: 'clients#add_dog'
  resources :users, only: :create

  resources :dogs
  resources :clients

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
