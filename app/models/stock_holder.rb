class StockHolder < ApplicationRecord
    belongs_to :stock
    belongs_to :holder

end
