function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (response) {
            $("#text").text(response.quoteText);
            $("#author").text(response.quoteAuthor);
            $("#tweet-quote").attr("href", "twitter.com/intent/tweet" + response.quoteText +
                ' (' + response.quoteAuthor + ')');
        }
    });
}

$(function () {
    randomQuote();
});

$("button").click(function () {
    randomQuote();
});