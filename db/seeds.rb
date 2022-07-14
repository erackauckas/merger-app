# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Clearing database..."
# Exchange.destroy_all
# Stock.destroy_all
# Holder.destroy_all

# puts "Seeding Exchanges..."
# e1 = Exchange.create(name: "NYSE")
# e2 = Exchange.create(name: "NASDAQ")
# e3 = Exchange.create(name: "AMEX")



# puts "Seeding Holders..."
# h1 = Holder.create(name: "Vanguard")
# h2 = Holder.create(name: "Renaissance")
# h3 = Holder.create(name: "Bridgewater")
# h4 = Holder.create(name: "ESL Investments")
Stock.create!(ticker: "CNVY", company_name: "Convey Health Solutions", acquiring_company: "TPG Capital", acquiring_company_ticker: NIL,  expected_close_date:DateTime.new(2022,12,31), deal_type: "Cash", status: "Open", cash_comp: 10.50, stock_comp: 0)
Stock.create!(ticker: "USWS", company_name: "U.S. Well Services", acquiring_company: "ProFrac Holding", acquiring_company_ticker: "PFHC",  expected_close_date: DateTime.new(2022,12,31), deal_type: "Stock", status: "Open", cash_comp: 0, stock_comp: 0.0561)
Stock.create!(ticker: "OBCI", company_name: "Ocean Bio-Chem", acquiring_company: "OneWater Marine", acquiring_company_ticker: "ONEW",  expected_close_date: DateTime.new(2022,9,30), deal_type: "Cash", status: "Open", cash_comp: 13.08, stock_comp: 0)
Stock.create!(ticker: "FSTX", company_name: "F-star Therapeutics", acquiring_company: "invoX Pharma", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,12,31), deal_type: "Cash", status: "Open", cash_comp: 7.12, stock_comp: 0)
Stock.create!(ticker: "RDUS", company_name: "Radius Health", acquiring_company: "Gurnet Point Capital", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,9,30), deal_type: "Special", status: "Open", cash_comp: 10.00, stock_comp: 0)
Stock.create!(ticker: "USAK", company_name: "USA Truck", acquiring_company: "DB Schenker", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,12,31), deal_type: "Cash", status: "Open", cash_comp: 31.72, stock_comp: 0)
Stock.create!(ticker: "ZEN", company_name: "Zendesk", acquiring_company: "Permira and Hellman & Friedman", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,12,31), deal_type: "Cash", status: "Open", cash_comp: 77.5, stock_comp: 0)
Stock.create!(ticker: "STCN", company_name: "Steel Connect", acquiring_company: "Steel Partner Holdings", acquiring_company_ticker: "SPLP",  expected_close_date: DateTime.new(2022,12,31), deal_type: "Special", status: "Open", cash_comp: 1.35, stock_comp: 0)
Stock.create!(ticker: "DRE", company_name: "Duke Realty  Corporation", acquiring_company: "Prologis", acquiring_company_ticker: "PLD",  expected_close_date: DateTime.new(2022,12,31), deal_type: "Stock", status: "Open", cash_comp: 0, stock_comp: 0.475)
Stock.create!(ticker: "TXMD", company_name: "TherapeuticsMD", acquiring_company: "EW Healthcare Partners", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,7,13), deal_type: "Cash", status: "Open", cash_comp: 10.00, stock_comp: 0)
Stock.create!(ticker: "CTT", company_name: "CatchMark Timber Trust", acquiring_company: "PotlatchDeltic Corporation", acquiring_company_ticker: "PCH",  expected_close_date: DateTime.new(2022,12,31), deal_type: "Stock", status: "Open", cash_comp: 0, stock_comp: 0.23)
Stock.create!(ticker: "AUY", company_name: "Yamana Gold", acquiring_company: "Gold Fields Limited", acquiring_company_ticker: "GFI",  expected_close_date: DateTime.new(2022,12,31), deal_type: "Stock", status: "Open", cash_comp: 0, stock_comp: 0.6)
Stock.create!(ticker: "SRLP", company_name: "Sprague Resources", acquiring_company: "Hartree Partners", acquiring_company_ticker: NIL,  expected_close_date: DateTime.new(2022,9,30), deal_type: "Cash", status: "Open", cash_comp: 19.00, stock_comp: 0)
Stock.create!(ticker: "TPTX", company_name: "Turning Point Therapeutics", acquiring_company: "Bristol Myers Squibb", acquiring_company_ticker: "BMY",  expected_close_date: DateTime.new(2022,9,30), deal_type: "Cash", status: "Open", cash_comp: 76.00, stock_comp: 0)


puts "Seeding Users..."
u1 = User.create(name: 'Eric', admin: true, password: "password")
# puts "Seeding Stocks..."

# Stock.create(ticker: "ABC", exchange_id: e1.id, holder_id: h1.id)
# Stock.create(ticker: "XYHZ", exchange_id: e2.id, holder_id: h3.id)


puts "Seeding complete!"
