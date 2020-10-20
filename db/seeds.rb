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

Dog.create!(dog_name: 'Finn', breed: 'mixed', washes: 3, photo:"https://cdn.petcarerx.com/LPPE/images/articlethumbs/why-mixed-breed-dogs-Large.jpg")
Dog.create!(dog_name: 'Kali', breed: 'havapoo', washes: 5, photo:"https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2019/11/Brie-f1-2-600x600.jpg")
Dog.create!(dog_name: 'Hazel', breed: 'havanese', washes: 2, photo:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/19160330/Havanese-puppy.jpg")
Dog.create!(dog_name: 'Kona', breed: 'havanese', washes: 1, photo:"https://cdn.orvis.com/images/DBS_Havanese_1280.jpg")
puts "#{Dog.count} dogs created"

Client.create!(user_id: 'bobby', name: 'robert', email: 'bobby@email.com', phone: '8083459874', dog_name: 'Finn' )
Client.create!(user_id: 'rich', name: 'richard', email: 'rich@email.com', phone: '8089228874', dog_name: 'Kali' )
Client.create!(user_id: 'zhu', name: 'zhulieta', email: 'zhuzhu@email.com', phone: '4152277104', dog_name: 'Hazel' )
Client.create!(user_id: 'eve', name: 'everest', email: 'himalaya@email.com', phone: '3102276893', dog_name: 'Kona' )
puts "#{Client.count} clients created"