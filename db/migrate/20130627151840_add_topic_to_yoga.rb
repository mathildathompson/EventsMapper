class AddTopicToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :topic, :string
  end
end
