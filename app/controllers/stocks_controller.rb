class StocksController < ApplicationController

    def create
        stock = Stock.create(stock_params)
            render json: stock, status: :created
    end
    def index
        render json: Stock.all
    end
    
    def show
        render json: Stock.find(params[:id])
    end
    
    def update
        stock = Stock.find(params[:id])
        stock.update!(params.permit(:expected_close_date))
        render json: Stock.find(params[:id]), status: :created
    end
    
    def destroy
        stock = Stock.find(params[:id])
        stock.destroy
        head :no_content
    end
    
    private
    
    def stock_params
        params.permit(:ticker, :company_name, :current_price, :acquiring_company, :acquiring_company_ticker, :offer_price, :expected_close_date, :days_until_closing, :deal_type, :cash_comp, :stock_comp, :progress, :status, :holder)
    end
    
    end
