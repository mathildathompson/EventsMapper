class AddZipcodeToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :zipcode, :integer
  end
end
