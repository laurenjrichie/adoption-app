require 'rails_helper'

feature 'signing up' do
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

    visit root_path
    click_on "signup"
  end

  scenario 'user can register' do
    fill_in :user_email, with: "testsignup@test"
    fill_in :user_password, with: "test"
    fill_in :user_password_confirmation, with: "test"
    click_on "signup-button"

    expect(page).to have_content("Sign Out")
  end

  scenario 'user receives error message when email is already taken' do
    User.create!(
      email: "test_error@email_taken",
      password: "test",
    )

    fill_in :user_email, with: "test_error@email_taken"
    fill_in :user_password, with: "test"
    fill_in :user_password_confirmation, with: "test"
    click_on "signup-button"

    expect(page).to have_content("Email has already been taken")
  end

  scenario 'user receives error message when email is left blank' do
    fill_in :user_password, with: "test"
    fill_in :user_password_confirmation, with: "test"
    click_on "signup-button"

    expect(page).to have_content("Email can't be blank")
  end

  scenario 'user receives error message when password is left blank' do
    fill_in :user_email, with: "test_error@password_blank"
    fill_in :user_password_confirmation, with: "test"
    click_on "signup-button"

    expect(page).to have_content("Password can't be blank")
  end

  scenario 'user receives error message when password confirmation is invalid' do
    fill_in :user_email, with: "test_error@password_blank"
    fill_in :user_password, with: "test"
    click_on "signup-button"

    expect(page).to have_content("Password confirmation doesn't match Password")
  end
end
