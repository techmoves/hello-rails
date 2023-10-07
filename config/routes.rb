Rails.application.routes.draw do
 namespace :api do
  get '/greetings/random', to: 'greetings#random_greeting'
end

end
