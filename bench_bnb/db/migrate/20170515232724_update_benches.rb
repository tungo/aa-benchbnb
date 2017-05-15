class UpdateBenches < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer, null: false, default: 0
  end
end
