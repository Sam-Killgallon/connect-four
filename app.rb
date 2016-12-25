require 'sinatra/base'

class Connect4 < Sinatra::Base
  get '/' do
    slim :index
  end
end

Connect4.run!
