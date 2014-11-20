Rails.application.routes.draw do
  
  root to: 'root#root'
  resources :posts, 
            only: [:create, :update, :show, :index, :destroy], 
            defaults: { format: :json }
end
