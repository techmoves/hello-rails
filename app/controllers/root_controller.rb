class RootController < ApplicationController
  def index
    respond_to do |format|
      format.html # Render the HTML template
      format.json { render json: { message: 'JSON response' } }
    end
  end
end
