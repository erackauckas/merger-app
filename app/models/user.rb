class User < ApplicationRecord
    has_secure_password

    has_many :stocks
    

    validates :name, presence: true, uniqueness: true
end
