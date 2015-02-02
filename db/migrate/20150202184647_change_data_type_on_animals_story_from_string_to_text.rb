class ChangeDataTypeOnAnimalsStoryFromStringToText < ActiveRecord::Migration
  def change
    change_column :animals, :story, :text
  end
end
