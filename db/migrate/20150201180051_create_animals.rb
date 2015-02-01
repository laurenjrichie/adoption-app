class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.integer :spca_id
      t.string :name
      t.string :gender
      t.string :age
      t.string :weight
      t.string :image_url
      t.string :story

      t.timestamps
    end
  end
end
