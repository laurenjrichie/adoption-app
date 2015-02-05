class Application < ActiveRecord::Base
  belongs_to :user
  belongs_to :animal

  validates :fullname, presence: true
  validates :email, presence: true
  validates :housing, presence: true
  validates :electronic_signature, presence: true
  validates :date, presence: true
end
