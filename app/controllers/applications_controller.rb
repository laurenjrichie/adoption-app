class ApplicationsController < ApplicationController
  def create
    @application = current_user.applications.new(application_params)
    if @application.save
      render json: @application
    else
      render json: @application.errors.full_messages, status: :unprocessable_entity
    end
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
