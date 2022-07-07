class StockSerializer < ActiveModel::Serializer
  attributes :id, :date_announced, :ticker, :company_name, :current_price, :acquiring_company, :acquiring_company_ticker, :offer_price, :expected_close_date, :days_until_closing, :deal_type, :add_to_watchlist, :progress 
end

