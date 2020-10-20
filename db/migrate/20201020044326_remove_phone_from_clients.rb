class RemovePhoneFromClients < ActiveRecord::Migration[6.0]
  def change
    remove_column :clients, :phone, :integer
  end
end
