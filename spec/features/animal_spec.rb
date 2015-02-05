require "rails_helper"

feature 'displaying animals' do
  scenario 'display list of animals' do
    Animal.create!(
      spca_id: "123",
      name: "test animal",
      gender: "female",
      age: "4",
      weight: "5",
      image_url: "http://placekitten.com/200/300",
      story: "story of animal",
    )

    visit root_path

    expect(page).to have_content("123")
    expect(page).to have_content("test animal")
    expect(page).to have_content("female")
    expect(page).to have_content("4")
    expect(page).to have_content("5")
    expect(page).to have_selector("img[src$='http://placekitten.com/200/300']")
    expect(page).to have_content("story of animal")
  end

end
