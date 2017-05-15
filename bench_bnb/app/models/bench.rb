class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where("lat <= #{bounds['northWest']}")
        .where("lat >= #{bounds['southEast']}")
        .where("lng <= #{bounds['northWest']}")
        .where("lng >= #{bounds['southEast']}")
  end
end
