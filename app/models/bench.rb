class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
      # bounds in the following format:
     # {
     #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
     #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
     # }

     # return self.lat.between?(bounds[southWest[lat]], bounds[northEast][lat])

  end

end
