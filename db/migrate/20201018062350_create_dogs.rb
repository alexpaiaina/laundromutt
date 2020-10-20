class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :dog_name
      t.string :breed
      t.binary :img
      t.integer :washes

      t.timestamps
    end
  end
end
