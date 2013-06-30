class AddDescriptionToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :description, :text
  end
end
