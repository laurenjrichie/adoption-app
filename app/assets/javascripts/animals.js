$(document).ready(function(){
  cardsDimmer();
  dropDown();
  detailPanel();
  applyForm();
  submitForm();
});

function cardsDimmer() {
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
}

function dropDown() {
  $('.dropdown').dropdown({
      transition: 'drop'
  });
}

function detailPanel() {
  var cards = $("div.ui.special.cards")

  cards.on('click', '.ui.inverted.button', function(event) {
    var id = $(this).parent().parent().parent().parent().parent().data('id');
    $.ajax('/animals/' + id, {dataType: "json"}).done(function(data){
      var detailCardTemplate = Handlebars.compile($("#detail-card-template").html());
      var data = {
        image_url: data.image_url,
        name: data.name,
        gender: data.gender,
        age: data.age,
        weight: data.weight,
        story: data.story,
        spcaid: data.spca_id,
      };
      $("div.ui.segment.right-side").empty().append(detailCardTemplate(data));
    }).fail(function(){

    });
  });
}

function applyForm() {
  $("div.ui.segment.right-side").on("click", "div.ui.teal.button", function(event) {
    var animal_name_to_adopt = $("h5.header").text();
    var spca_id_to_adopt = $("span.right.floated.created").text().trim();
    var data = {
      animal: animal_name_to_adopt,
      spca_id: spca_id_to_adopt,
    };
    var formTemplate = Handlebars.compile($("#adoption-form-template").html());
    $("div.ui.segment.left-side").empty().append(formTemplate(data));
    $("body").scrollTop(0);
    backToAnimals();
  });
}

function submitForm() {
  $("div.ui.segment.left-side").on("click", "input.ui.submit.button", function(event) {

    // var formData = new FormData(this)

    var new_fullname = $("#application_fullname").val(); // talk to Rory for how to clean up
    var new_email = $("#application_email").val();
    var animal_name_to_adopt = $("h5.header").text();
    var spca_id_to_adopt = $("span.right.floated.created").text().trim();
    var current_user_id = parseInt($("#user-id").text());

    event.preventDefault();
    $.ajax('/applications', {
      type: 'post',
      data: { // formData (name= thing needed). console.log first. name = user[email]. cache, contenttype, process data false.
        application: {
          fullname: new_fullname,
          email: new_email,
          animal_name: animal_name_to_adopt,
          spca_id: spca_id_to_adopt,
          user_id: current_user_id,
        }
      }
    }).done(function(data) {
      $(".ui.message").empty().removeClass('negtive').addClass('success').show().append(
        "<ul>Thank you! Your application has been submitted.</ul>"
      );
      $("body").scrollTop(0);
      $("form").remove();
    }).fail(function(data) {
      $(".ui.message").show().addClass('negative');
      var data = {errors: data.responseJSON};
      var errorTemplate = Handlebars.compile($("#error-message-template").html());
      $(".ui.message").append(errorTemplate(data));
      $("body").scrollTop(0);
    });
  });
}

function backToAnimals() { // put this in html???
  $(".ui.segment.left-side").on("click", "#back-to-animals", function() {
    window.location = "";
  });
}
