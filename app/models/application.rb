class Application < ActiveRecord::Base
  belongs_to :user
  belongs_to :animal

  validates :fullname, presence: true
end
