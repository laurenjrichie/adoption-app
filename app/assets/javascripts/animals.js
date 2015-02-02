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
  $("div.ui.segment.right-side").on("click", "div.ui.teal.button", function(event) {
    $("div.ui.segment.left-side").empty().append(formHTML);
    backToAnimals();
  });
}

function backToAnimals() {
  $(".ui.segment.left-side").on("click", "#back-to-animals", function() {
    window.location = "";
  });
}

function formHTML() {
  return '\
  <div class="ui large breadcrumb">\
    <a class="section" id="back-to-animals"><i class="long arrow left icon"></i>Back to animals list</a>\
  </div>\
  <h2 class="ui center aligned header">Adopt me!</h2>\
  <form class="ui form">\
    <h4 class="ui dividing header">Personal Information</h4>\
    <div class="two fields">\
      <div class="field">\
        <label>Full name</label>\
        <div class="field">\
          <input type="text" name="fullname" placeholder="Name">\
        </div>\
      </div>\
      <div class="field">\
        <label>Email</label>\
        <div class="field">\
          <input type="email" name="email" placeholder="Email">\
        </div>\
      </div>\
    </div>\
    <div class="field">\
      <label>Phone</label>\
      <div class="field">\
        <input type="text" name="phone" placeholder="Phone number">\
      </div>\
    </div>\
    <label>Address</label>\
    <div class="four fields">\
      <div class="field">\
        <div class="field">\
          <input type="text" name="address" placeholder="Street">\
        </div>\
      </div>\
      <div class="field">\
        <div class="field">\
          <input type="text" name="city" placeholder="City">\
        </div>\
      </div>\
      <div class="field">\
        <div class="field">\
          <input type="text" name="state" placeholder="State">\
        </div>\
      </div>\
      <div class="field">\
        <div class="field">\
          <input type="text" name="zip" placeholder="Zipcode">\
        </div>\
      </div>\
    </div>\
    <h4 class="ui dividing header">Home Information</h4>\
    <div class="two fields">\
      <div class="field">\
        <label>Do you own or rent?</label>\
        <div class="field">\
          <input type="text" name="housing">\
        </div>\
      </div>\
      <div class="field">\
        <label>If you rent, do you have your landlord\'s approval?</label>\
        <div class="field">\
          <input type="text" name="landlord_approval">\
        </div>\
      </div>\
    </div>\
    <div class="two fields">\
      <div class="field">\
        <label>Landlord\'s name:</label>\
        <div class="field">\
          <input type="text" name="landlord_name">\
        </div>\
      </div>\
      <div class="field">\
        <label>Landlord\'s phone:</label>\
        <div class="field">\
          <input type="text" name="landlord_phone">\
        </div>\
      </div>\
    </div>\
    <h4 class="ui dividing header">Other</h4>\
    <div class="field">\
      <label>What are your daily habits? Are you out all day, out part of the day, home all day?</label>\
      <textarea></textarea>\
    </div>\
    <div class="field">\
      <label>Please describe your pet history - type of animal, how long you had them, etc.</label>\
      <textarea></textarea>\
    </div>\
    <div class="field">\
      <label>Who is your current vet?</label>\
      <input type="text" name="current_vet">\
    </div>\
    <div class="two fields">\
      <div class="field">\
        <label>How much per year do you expect to spend on your new pet?</label>\
        <div class="field">\
          <input type="text" name="expected_costs">\
        </div>\
      </div>\
      <div class="field">\
        <label>Do you plan to keep your new pet indoors, outdoors, both?</label>\
        <div class="field">\
          <input type="text" name="indoor_outdoor">\
        </div>\
      </div>\
    </div>\
    <div class="field">\
      <label>How did you learn about us?</label>\
      <div class="field">\
        <input type="text" name="how_learn">\
      </div>\
    </div>\
    <h4 class="ui dividing header">Pet information</h4>\
    <div class="two fields">\
      <div class="field">\
        <label>Name of animal you wish to adopt:</label>\
        <div class="field">\
          <input type="text" name="animal_name">\
        </div>\
      </div>\
      <div class="field">\
        <label>SPCA ID:</label>\
        <div class="field">\
          <input type="text" name="spca_id">\
        </div>\
      </div>\
    </div>\
    <h4 class="ui dividing header">Signature</h4>\
    <div class="field">\
      <div class="ui checkbox">\
        <input type="checkbox" name="hot-deals">\
        <label>I agree to the <a href="#">Terms of Service</a>.</label>\
      </div>\
    </div>\
    <div class="two fields">\
      <div class="field">\
        <label>Electronic signature:</label>\
        <div class="field">\
          <input type="text" name="electronic_signature">\
        </div>\
      </div>\
      <div class="field">\
        <label>Today\'s date:</label>\
        <div class="field">\
          <input type="text" name="date">\
        </div>\
      </div>\
    </div>\
    <div class="ui submit button">Register</div>\
  </form>'
}
