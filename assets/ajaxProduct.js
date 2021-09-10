
//Ajax Product Pagination

var products_on_page = $('.products-on-page');
var next_url = products_on_page.data('next-url');
var load_more_btn = $('.load_more');
var load_more_spiner = $('.load-more-spiner');

function loadmoreProduct() {
  $.ajax(
    {
      url: next_url,
      type: 'GET',
      dataType: 'html',
      beforeSend: function () {
        load_more_btn.hide();
        load_more_spiner.show();
      }
    }
  ).done(function (next_page) {
    load_more_spiner.hide();
    var new_products = $(next_page).find('.products-on-page');
    console.log(new_products.data);
    var new_url = new_products.data('next-url');
    if (new_url)
      load_more_btn.show();
    next_url = new_url;
    console.log(new_url);
    console.log(next_url);
    products_on_page.append(new_products.html());
  });
}


function loadmoreCollection() {
  $.ajax(
    {
      url: next_url,
      type: 'GET',
      dataType: 'html',
      beforeSend: function () {
        load_more_btn.hide();
        load_more_spiner.show();
      }
    }
  ).done(function (next_page) {
    load_more_spiner.hide();
    var new_products = $(next_page).find('.products-on-page');
    console.log(new_products.data);
    var new_url = new_products.data('next-url');
    if (new_url)
      load_more_btn.show();
    next_url = new_url;
    console.log(new_url);
    console.log(next_url);
    products_on_page.append(new_products.html());
  });
}


// Case insensitive search

$("#faqSearch").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("div#accordion_2 .card").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});



