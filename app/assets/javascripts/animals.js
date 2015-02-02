$(document).ready(function(){
  cardsDimmer();
  detailPanel();
  applyForm();
});

function cardsDimmer() {
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
}

function detailPanel() {
  var cards = $("div.ui.special.cards")

  cards.on('click', '.ui.inverted.button', function(event) {
    var id = $(this).parent().parent().parent().parent().parent().data('id');
    $.ajax('/animals/' + id, {dataType: "json"}).done(function(data){
      $("div.ui.segment.right-side").empty().append('\
        <div class="ui fluid card">\
          <div class="image">\
            <img src="' + data.image_url + '">\
          </div>\
          <div class="content">\
            <a class="right floated created">\
              <div class="ui teal button">ADOPT ME!</div>\
            </a>\
            <a class="header">' + data.name + '</a>\
            <div class="meta">\
              <p class="group">' + data.gender + '</p>\
              <p class="group">AGE: ' + data.age + '</p>\
            </div>\
            <div class="description">\
              ' + data.story + '\
            </div>\
          </div>\
          <div class="extra content">\
            <a class="right floated created">\
              SPCA ID: ' + data.spca_id + '\
            </a>\
            <a class="friends">\
              ' + data.weight + '\
            </a>\
          </div>\
        </div>\
      ');

    }).fail(function(){

    });
  });
}

function applyForm() {
  $("div.ui.segment.right-side").on("click", "div.ui.teal.button", function(data) {
    $("div.ui.segment.left-side").empty().append("\
      <h2 class='ui center aligned header'>Submit Adoption Form</h2>\
    ");
  });
}
