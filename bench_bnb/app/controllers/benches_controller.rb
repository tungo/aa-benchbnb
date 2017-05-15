class BenchesController < ApplicationController
  def index

  end

  def create

  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
