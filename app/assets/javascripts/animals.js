$(document).ready(function(){
  cardsDimmer();
  dropDown();
  detailPanel();
  applyForm();
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
    var formTemplate = Handlebars.compile($("#adoption-form-template").html());
    $("div.ui.segment.left-side").empty().append(formTemplate);
    // hijack refresh
    $("body").scrollTop(0);
    backToAnimals();
  });
}

function backToAnimals() {
  $(".ui.segment.left-side").on("click", "#back-to-animals", function() {
    window.location = "";
  });
}
