# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.destroy_all
Client.destroy_all
User.destroy_all

@user = User.create!(username: 'dragonflies', email: 'dragonflies@gmail.com', password: '123456')
puts "#{User.count} users created"

Dog.create!(dog_name: 'Finn', breed: 'mixed', img: , washes: 3)
Dog.create!(dog_name: 'Kali', breed: 'havapoo', img: , washes: 5)
Dog.create!(dog_name: 'Hazel', breed: 'havanese', img: , washes: 2)
Dog.create!(dog_name: 'Kona', breed: 'havanese', img: , washes: 1)
puts "#{Food.count} foods created"

Client.create!(user_id: 'bobby', name: 'robert', email: 'bobby@email.com', phone: '8083459874', dog_name: 'Finn' )
Client.create!(user_id: 'rich', name: 'richard', email: 'rich@email.com', phone: '8089228874', dog_name: 'Kali' )
Client.create!(user_id: 'zhu', name: 'zhulieta', email: 'zhuzhu@email.com', phone: '4152277104', dog_name: 'Hazel' )
Client.create!(user_id: 'eve', name: 'everest', email: 'himalaya@email.com', phone: '3102276893', dog_name: 'Kona' )
puts "#{Client.count} clients created"