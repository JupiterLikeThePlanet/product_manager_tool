Rails.application.routes.draw do


  # root 'welcome#index'
  # root 'products#index'
  Rails.application.routes.draw do
    root to: 'site#index'
    namespace :api do
      namespace :v1 do
        resources :products, only: [:index, :create, :destroy, :update]
        # resources :properties, only: [:index, :create, :destroy, :update]
        # resources :productproperties, only: [:index, :create, :destroy, :update] #, :controller => "ProductProperties"
      end
    end
  end
  # resources :products #, only: [:index]
  # resources :properties #, only: [:index]
  # resources :productproperties #, except: [:index] do

end
