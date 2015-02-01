class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.string :fullname
      t.string :address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :phone_number
      t.string :email

      t.string :housing
      t.boolean :landlord_approval
      t.string :landlord_name
      t.integer :landlord_phone

      t.string :habits
      t.string :pet_history
      t.string :current_vet
      t.integer :expected_costs
      t.string :indoor_outdoor
      t.string :how_learn

      t.string :animal_name
      t.integer :spca_id

      t.string :electronic_signature
      t.date :date

      t.timestamps
    end
  end
end
