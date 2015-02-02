class AnimalsController < ApplicationController
  def index


    response = RestClient.get "https://www.sfspca.org/adoptions/cats"
    # https://www.sfspca.org/adoptions/cats?page=2
    doc = Nokogiri::HTML(response)
    cat_links = doc.css('div.field-name-title h2 a')
    # p cat_links.length # only 18


    cat_links.each do |link|
      url = "https://www.sfspca.org" + link.attr('href')
      data = RestClient.get(url).body # this gives you one big string
      p result = JSON.parse(data) # get back an array of hashes. Only hitting first cat here???

      # result.each do |cat|
        # Animal.create(title: movie["title"], year: movie["year"], plot: movie["plot"], image_url: movie["image_url"])
      # end
    end

    # t.integer  "spca_id"
    # t.string   "name"
    # t.string   "gender"
    # t.string   "age"
    # t.string   "weight"
    # t.string   "image_url"
    # t.string   "story"



  end
end
