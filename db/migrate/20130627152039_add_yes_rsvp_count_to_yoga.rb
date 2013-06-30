class AddYesRsvpCountToYoga < ActiveRecord::Migration
  def change
    add_column :yogas, :yes_rsvp_count, :integer
  end
end
