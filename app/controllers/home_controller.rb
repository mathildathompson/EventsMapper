class HomeController < ApplicationController
    def index
    end

    def new
    end

    def create
        searchterm = params[:searchterm]
        # binding.pry
        # latlng = Yoga.my_cool_geocoding_method(searchterm)
        # binding.pry
        # result = request.location
        # ipcity = result.data["city"]
        # binding.pry
        latlng = Geocoder.coordinates("#{searchterm}")
        # binding.pry
        # end

        @yogas = []

        latitude = latlng[0]
        longitude = latlng[1]
        # binding.pry

        @yogas << Yoga.get_event("yoga",latitude,longitude)
        # binding.pry
        @yogas.flatten!
        # binding.pry
        render :template => 'home/search', :content_type => 'text/javascript'
    end
end
