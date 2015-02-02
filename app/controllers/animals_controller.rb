class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    @animal = Animal.find_by_id(27)
  end

  def show
    @animal = Animal.find(params[:id])

    respond_to do |format|
      format.html
      format.json {render :json => @animal}
    end
  end

end
