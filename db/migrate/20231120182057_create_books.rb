class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :genre
      t.string :isbn
      t.string :img
      t.integer :published_year

      t.timestamps
    end
  end
end
