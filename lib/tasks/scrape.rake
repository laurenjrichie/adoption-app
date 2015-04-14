def get_links(url)
  page_response = RestClient.get url
  page_doc = Nokogiri::HTML(page_response)
  links = page_doc.css('div.field-name-title h2 a')
end

def create_animal(links)
  links.each do |link|
    url = "https://www.sfspca.org" + link.attr('href')
    response = RestClient.get(url).body
    doc = Nokogiri::HTML(response)

    name = doc.css('div.field-name-title h1').children[0].content
    spca_id = doc.css('div.field-name-field-animal-id div.field-item').children[0].content.strip
    gender = doc.css('div.field-name-field-gender div.field-item').children[0].content.strip
    age = doc.css('div.field-name-field-animal-age div.field-item').children[0].content.strip
    weight = doc.css('div.field-name-field-animal-weight div.field-item').children[0].content.strip
    image_url = doc.css('ul.slides').children[0].children[1].attributes["src"].value
    story = doc.css('div.body.field p').children[0].content

    Animal.create(
      name: name,
      spca_id: spca_id,
      gender: gender,
      age: age,
      weight: weight,
      image_url: image_url,
      story: story,
    )

  end
end

namespace :shelter do

  desc "Clear animals table and reseed with scraped data"
  task scrape: :environment do
    Animal.delete_all

    page1_cat_links = get_links("https://www.sfspca.org/adoptions/cats")
    page2_cat_links = get_links("https://www.sfspca.org/adoptions/cats?page=1")
    page3_cat_links = get_links("https://www.sfspca.org/adoptions/cats?page=2")
    # page1_dog_links = get_links("https://www.sfspca.org/adoptions/dogs")
    # page2_dog_links = get_links("https://www.sfspca.org/adoptions/dogs?page=1")
    # page3_dog_links = get_links("https://www.sfspca.org/adoptions/dogs?page=2")

    create_animal(page1_cat_links)
    create_animal(page2_cat_links)
    create_animal(page3_cat_links)
    # create_animal(page1_dog_links)
    # create_animal(page2_dog_links)
    # create_animal(page3_dog_links)

  end
end
