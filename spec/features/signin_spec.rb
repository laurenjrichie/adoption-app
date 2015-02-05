require 'rails_helper'

feature 'user can sign in' do
  before :each do
    Animal.create!(
      spca_id: "123",
      name: "test animal",
      gender: "female",
      age: "4",
      weight: "5",
      image_url: "http://placekitten.com/200/300",
      story: "story",
    )

    User.create!(
      email: "testsignin@test",
      password: "test",
    )

    visit root_path
    click_on "signin"
  end

  scenario 'user signs in' do
    fill_in :email, with: "testsignin@test"
    fill_in :password, with: "test"
    click_on "signin-button"

    expect(page).to have_content("Available pets from the SPCA") # is this good enough?
  end

  scenario 'user receives error message when email blank' do
    fill_in :password, with: "test"
    click_on "signin-button"

    expect(page).to have_content("Email / password combination is invalid")
  end

  scenario 'user receives error message when password blank' do
    fill_in :email, with: "testsignin@test"
    click_on "signin-button"

    expect(page).to have_content("Email / password combination is invalid")
  end
end
