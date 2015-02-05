class RemoveAnimalNameAndIdFromApplications < ActiveRecord::Migration
  def change
    remove_column :applications, :animal_id
    remove_column :applications, :animal_name
  end
end
