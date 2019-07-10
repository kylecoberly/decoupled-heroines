Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :heroines, only: [:index, :show, :create]
  resources :powers, only: [:index, :show]
end
