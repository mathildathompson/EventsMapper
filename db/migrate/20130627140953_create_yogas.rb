class CreateYogas < ActiveRecord::Migration
  def change
    create_table :yogas do |t|
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
