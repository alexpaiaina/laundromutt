class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :user_id
      t.string :name
      t.string :email
      t.integer :phone
      t.string :dog_name

      t.timestamps
    end
  end
end
