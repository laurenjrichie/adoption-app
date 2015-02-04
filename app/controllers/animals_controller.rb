class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    @first_animal = Animal.first
    @application = Application.new
  end

  def show
    @animal = Animal.find(params[:id])

    respond_to do |format|
      format.html
      format.json {render :json => @animal}
    end
  end

end
