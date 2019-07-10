# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Heroine.destroy_all
Power.destroy_all

stretchy = Power.create({
  name: "Stretchy",
  description: "Stretch real far"
})
strong = Power.create({
  name: "Strong",
  description: "Lift lots"
})

Heroine.create({
  name: "Elyse",
  super_name: "Elastigurl",
  power: stretchy
})
