class HoldersController < ApplicationController

    def index
        render json: Holder.all
    end
    
    def show
        render json: Holder.find(params[:id])
    end

    def create
        holder = Holder.create!(holder_params)
        render json: holder, status: :created
    end

    private

def holder_params
    params.permit(:name)
end

end
