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

  cards.on('click', 'img', function(event) {
    console.log("click");
    $("div.ui.segment.right-side").empty().append('\
      <div class="ui fluid card">\
        <div class="image">\
          <img src="kitten.jpg">\
        </div>\
        <div class="content">\
          <a class="right floated created">\
            <div class="ui teal button">ADOPT ME!</div>\
          </a>\
          <a class="header">Name</a>\
          <div class="meta">\
            <p class="group">Gender</p>\
            <p class="group">Weight</p>\
          </div>\
          <div class="description">\
            Story goes here.\
          </div>\
        </div>\
        <div class="extra content">\
          <a class="right floated created">\
            SPCA ID#\
          </a>\
          <a class="friends">\
            <i class="user icon"></i>\
            Age\
          </a>\
        </div>\
      </div>\
    ');
  });
}

function applyForm() {
  $("div.ui.segment.right-side").on("click", "div.ui.teal.button", function(data) {
    $("div.ui.segment.left-side").empty().append("\
      <h2 class='ui center aligned header'>Submit Adoption Form</h2>\
    ");
  });
}
