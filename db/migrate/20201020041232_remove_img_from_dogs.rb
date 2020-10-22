class RemoveImgFromDogs < ActiveRecord::Migration[6.0]
  def change
    remove_column :dogs, :img, :binary
  end
end
