Rails.application.routes.draw do


  # root 'welcome#index'
  root 'products#new'
  resources :products #, only: [:index]
  resources :properties #, only: [:index]
  resources :productproperties #, except: [:index] do

end
