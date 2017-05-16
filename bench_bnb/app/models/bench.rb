class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where("lat <= #{bounds[:northEast][:lat]}")
        .where("lat >= #{bounds[:southWest][:lat]}")
        .where("lng <= #{bounds[:northEast][:lng]}")
        .where("lng >= #{bounds[:southWest][:lng]}")
  end

  def self.in_seatings(min_seating, max_seating)
    self.where("seating >= #{min_seating}")
        .where("seating <= #{max_seating}")
  end
end
