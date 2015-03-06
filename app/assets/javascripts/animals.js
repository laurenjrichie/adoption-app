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
      var source = $("#detail-card-template").html();
      var detailCardTemplate = Handlebars.compile(source);
      $("div.ui.segment.right-side").empty().append(detailCardTemplate(data));
    }).fail(function(){

    });
  });
}

function applyForm() {
  $("div.ui.segment.right-side").on("click", "#adopt-me-button", function(event) {
    if($("#user-id").length === 0) {
      var loginMessage = Handlebars.compile($("#login-message-template").html());
      $("div.ui.segment.left-side").empty().append(loginMessage);
      // $("div.ui.segment.left-side").empty().append(HandlebarsTemplates['animals/login_error']());
    } else {
      var animal_name_to_adopt = $("h5.header").text();
      var spca_id_to_adopt = $("span#spcaid").text();
      var data = {
        animal: animal_name_to_adopt,
        spca_id: spca_id_to_adopt,
      };
      var formTemplate = Handlebars.compile($("#adoption-form-template").html());
      $("div.ui.segment.left-side").empty().append(formTemplate(data));
      $("body").scrollTop(0);
    };
  });
}

function submitForm() {
  $("div.ui.segment.left-side").on("click", "input.ui.submit.button", function(event) {
    var formData = new FormData($("form")[0]);
    event.preventDefault();
    $.ajax('/applications', {
      type: 'post',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
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
      // $(".ui.message").append(HandlebarsTemplates['animals/error_messages'](data));
      $("body").scrollTop(0);
    });
  });
}
