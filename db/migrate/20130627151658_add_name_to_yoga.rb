class AddNameToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :name, :string
  end
end
