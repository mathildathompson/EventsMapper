class AddEventUrlToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :event_url, :string
  end
end
