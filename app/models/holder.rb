class Holder < ApplicationRecord
    has_many :stock_holders
    has_many :stocks, through: :stock_holders
    validates :name, presence: true

end
