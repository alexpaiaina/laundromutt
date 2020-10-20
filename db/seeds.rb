# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.destroy_all

Dog.create!(dog_name: Finn, breed: mixed, img: , washes: 3)
Dog.create!(dog_name: Kali, breed: havapoo, img: , washes: 5)
Dog.create!(dog_name: Hazel, breed: havanese, img: , washes: 2)
Dog.create!(dog_name: Kona, breed: havanese, img: , washes: 1)
