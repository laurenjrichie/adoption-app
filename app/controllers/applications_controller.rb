class ApplicationsController < ApplicationController
  def create
    application = current_user.applications.new(application_params)
    if application.save
      redirect_to root_path, notice: "Thank you! Your application has been received."
    else
      render :new
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
