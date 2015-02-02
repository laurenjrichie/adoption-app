class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
  end

  def show
    @animal = Animal.find(params[:id])

    respond_to do |format|
      format.html
      format.json {render :json => @animal}
    end
  end

end
