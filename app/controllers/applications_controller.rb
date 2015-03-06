class ApplicationsController < ApplicationController
  def create
    @application = current_user.applications.new(application_params)
    if @application.save

      # RestClient.post "https://api:key-5e24817ee2790fa197e3fa04de5af416"\
      #   "@api.mailgun.net/v2/sandboxf5c333696ad6412aa85ef57465590f46.mailgun.org/messages",
      #   :from => "petfinderSF@pets.com",
      #   :to => "laurenjrichie@gmail.com",
      #   :subject => "Hello Lauren",
      #   :text => "test",

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
