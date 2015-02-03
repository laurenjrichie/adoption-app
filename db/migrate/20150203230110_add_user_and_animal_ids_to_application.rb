class AddUserAndAnimalIdsToApplication < ActiveRecord::Migration
  def change
    add_column :applications, :user_id, :integer
    add_column :applications, :animal_id, :integer
  end
end
