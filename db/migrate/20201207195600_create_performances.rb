class CreatePerformances < ActiveRecord::Migration[6.0]
  def change
    create_table :performances do |t|
      t.timestamp :date
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
