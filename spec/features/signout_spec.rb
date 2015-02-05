require 'rails_helper'

feature 'signing out' do
  scenario 'user can sign out' do
    User.create!(
      email: "testsignout@test",
      password: "test",
    )

    Animal.create!(
      spca_id: "123",
      name: "test animal",
      gender: "female",
      age: "4",
      weight: "5",
      image_url: "http://placekitten.com/200/300",
      story: "story",
    )

    visit root_path
    click_on "signin"
    fill_in :email, with: "testsignout@test"
    fill_in :password, with: "test"
    click_on "signin-button"

    expect(page).to have_content("Sign Out")
  end

end
