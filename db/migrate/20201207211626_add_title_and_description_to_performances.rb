class AddTitleAndDescriptionToPerformances < ActiveRecord::Migration[6.0]
  def change
    add_column :performances, :title, :string
    add_column :performances, :description, :text
  end
end
