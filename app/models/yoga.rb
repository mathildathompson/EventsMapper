class Yoga < ActiveRecord::Base
  attr_accessible :latitude, :longitude, :name, :zipcode, :topic, :event_url, :description, :yes_rsvp_count
  geocoded_by :my_cool_geocoding_method

  def self.my_cool_geocoding_method(search)
    "#{search}"
  end

  def self.get_event(topic, latitude, longitude)
    @yogaresults = []
    # binding.pry
    RMeetup::Client.api_key = "63657a6163574978643a285d2a65762d"
    # binding.pry
    @results = RMeetup::Client.fetch(:events, {:topic => "#{topic}", :lat =>latitude, :lon =>longitude, :radius => 0.5})
    # binding.pry
    @results.each do |result|
      # binding.pry
      yoga = Yoga.new
      yoga.latitude = result.lat
      yoga.longitude = result.lon
      yoga.name = result.name
      yoga.yes_rsvp_count = result.rsvpcount
      yoga.event_url = result.event_url
      yoga.save
      # binding.pry
      @yogaresults << yoga

    end
    return @yogaresults
    # binding.pry
      
  end
end
