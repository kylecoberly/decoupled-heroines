class HeroinesController < ApplicationController
  def index
    @heroines = Heroine.all
    if (params[:filter])
      @heroines = @heroines.select do |heroine|
        heroine.power.name.include? params[:filter]
      end
    end
    render json: @heroines, include: [:power]
  end

  def show
    @heroine = Heroine.find(params[:id])
    render json: @heroine, include: [:power]
  end

  def create
    @heroine = Heroine.create({
      name: params[:name],
      super_name: params[:super_name],
      power_id: params[:power_id]
    })
    render json: @heroine, include: [:power]
  end
end
