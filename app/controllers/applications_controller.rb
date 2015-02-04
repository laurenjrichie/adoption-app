class ApplicationsController < ApplicationController
  def create
    @application = current_user.applications.new(application_params)

    # respond_to do |format|
      if @application.save
        # format.html # { redirect_to root_path, notice: "Thank you! Your application has been received." }
        # format.json
      else
        # format.html # { render :new }
        # format.json { render json: @application.errors, status: :unprocessable_entity }
        render json: @application.errors, status: :unprocessable_entity
      end
    # end
  end

  private
  def application_params
    params.require(:application).permit(
      :fullname,
      :address,
      :city,
      :state,
      :zipcode,
      :phone_number,
      :email,
      :housing,
      :landlord_approval,
      :landlord_name,
      :landlord_phone,
      :habits,
      :pet_history,
      :current_vet,
      :expected_costs,
      :indoor_outdoor,
      :how_learn,
      :animal_name,
      :spca_id,
      :electronic_signature,
      :date,
    )
  end
end
