# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Clearing database..."
Exchange.destroy_all
Stock.destroy_all
Holder.destroy_all

puts "Seeding Exchanges..."
e1 = Exchange.create(name: "NYSE")
e2 = Exchange.create(name: "NASDAQ")
e3 = Exchange.create(name: "AMEX")



puts "Seeding Holders..."
h1 = Holder.create(name: "Vanguard")
h2 = Holder.create(name: "Renaissance")
h3 = Holder.create(name: "Bridgewater")
h4 = Holder.create(name: "ESL Investments")

# u1 = User.create(name: 'Eric', admin: true, password: "password")
puts "Seeding Stocks..."

Stock.create(ticker: "ABC", exchange_id: e1.id, holder_id: h1.id)
Stock.create(ticker: "XYHZ", exchange_id: e2.id, holder_id: h3.id)


puts "Seeding complete!"
