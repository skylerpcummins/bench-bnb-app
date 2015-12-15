class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # bounds in the following format:
     # {
     #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
     #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
     # }

     benches_in_bounds = []

     self.all.each do |bench|
       benches_in_bounds << bench if bench.lat.between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f) &&
                                     bench.lng.between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f)
     end

     benches_in_bounds
  end

end
