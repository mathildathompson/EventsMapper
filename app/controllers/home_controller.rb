class HomeController < ApplicationController
    def index
    end

    def new
    end

    def create
        searchterm = params[:searchterm]
        result = request.location
        ipcity = result.data["city"]
        # binding.pry
        if ipcity == ""
        latlng = Geocoder.coordinates("#{searchterm}, London")
        binding.pry
        else
        latlng = Geocoder.coordinates("#{searchterm}, #{ipcity}")
        end

        @yogas = []

        latitude = latlng[0]
        longitude = latlng[1]
        binding.pry

        @yogas << Yoga.get_event("yoga",latitude,longitude)
        # binding.pry
        @yogas.flatten!
        # binding.pry
        render :template => 'home/search', :content_type => 'text/javascript'
    end
end
