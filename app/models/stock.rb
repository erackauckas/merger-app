class Stock < ApplicationRecord  
    has_many :stock_holders
    has_many :holders, through: :stock_holders
    validates :ticker, presence: true
end
