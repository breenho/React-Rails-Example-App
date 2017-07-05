Rails.application.routes.draw do
  root to: 'records#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#Resource routes goes here  
  resources :records

#Namespace with Version routes goes here
  namespace :api do
    namespace :v1 do
      resources :items, :only => [:index,:create,:destroy,:update]
    end
  end

#Normal Namespace routes goes here
  ActiveAdmin.routes(self)
end
