class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :company_name, :acquiring_company, :acquiring_company_ticker, :expected_close_date, :stock_comp, :cash_comp, :deal_type, :add_to_watchlist, :status 
end

