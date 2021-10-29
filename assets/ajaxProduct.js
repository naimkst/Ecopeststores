
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


//Ajax Search Result
function ajaxSearch() {
  const search_result = $('.search-result');
  const query = document.querySelector('input').value;
  const searchSection = $('.search-section');
  var ajax_spiner = $('.search-loading');

  if (query != '') {
    $.ajax(
      {
        url: '/search/suggest.json?q=' + query + '&resources[type]=product',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
          ajax_spiner.show();
        }
      }
    ).done(function (data) {
      if (data.resources.results.products != null) {
        searchSection.hide();
        $('.search-result').empty();
        data.resources.results.products.forEach(function (product) {
          searchSection.show();
          var html = '<li>';
          html += '<a href="">';
          html += '<div class="thumbnail"><img src="' + product['image'] + '" alt="" width="80px"></div>';
          html += '<div class="title"> <h6>' + product['title'] + '</h6> <p>$' + product['price'] + '</p> </div> </a> </li>';
          ajax_spiner.hide();
          $('.search-result').append(html);
        });
      } else {
        searchSection.hide();
        $('.search-result').empty();
        $('.search-result').append("<li>No Data Found</li>");
      }
    });
  } else {
    searchSection.hide();
    $('.search-result').empty();
    $('.search-result').append("<li>No Data Found</li>");
  }
  $('.search-result').empty();
}


$(".right-menu-toggole").click(function () {
  $(".mega-menu2.know-more.mega-menu-show").toggle();
  $("#example").toggleClass('display-none');
});


