== San Francisco Pet Finder

[Visit live](https://still-dawn-7553.herokuapp.com/)

Rails app with some single-page functionality, showing pets available for adoption. 
Users can sign in, view pets, and apply to adopt an animal.

PostgreSQL database seeded from data scraped from the San Francisco SPCA's website.

Components of the app:
- Single-page functionality uses ajax calls to view all animals and view and submit the adoption form
- Animal, Application, & User models with validations and associations (users and animals have many applications; applications belong to users & animals)
- User authentication
- Custom rake task uses RestClient & Nokogiri to scrape data and create animals in the database
- Handlebars templating