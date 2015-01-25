//= require_tree .

$(document).ready(function() {
  // Mobile banner toggling
  var menuToggle = $('#js-banner-mobile-menu').unbind();
  $('#js-banner-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-banner-menu').slideToggle(function(){
      if($('#js-banner-menu').is(':hidden')) {
        $('#js-banner-menu').removeAttr('style');
      }
    });
  });

  // Load recent news to the front page
  if ($.contains(document.body, $("#js-news")[0])) {
    $.get("news.html", function(data) {
      var vdom = $('<section></section>'),
          $dom_entry = $("#js-news"),
          max_articles = 5,
          num_articles,
          $articles;

      vdom.html(data);
      $articles = $(".news > article", vdom);
      num_articles = $articles.length;
      // console.log(num_articles);

      $articles.each(function(i) {
        if (i < max_articles) {
          var $date = $(".date", this),
              $title = $(".title", this),
              $output = $('<article class="news-articles"></article>');

          $title.wrap("<a href='news.html' class='js-news-links'></a>");
          $title = $(".js-news-links", this);
          $output.append($date).append($title);
          $dom_entry.append($output);
        }
      });

      // .append($(".news > article", vdom)[0]);
    });
  }

  // Enable table functionality on the publications page
  if ($.contains(document.body, $("#js-publications")[0])) {
    $(function () { $("#js-publications").footable({
        addRowToggle: false
      });
    });
  }
});
