$(function(){
    $.ajax({
url: "http://localhost:8000/book", data: {},
type: "GET",
dataType: "json"
})
        .done(function(result) {

            displayBooks(result);

        }).fail(function(xhr,status,err) {
            console.log(err);

    }).always(function(xhr,status) {
        console.log("Ja i tak się wyświetlę");
    });
});


body = document.getElementsByTagName("body");
ul = document.createElement("ul");
script = document.getElementsByTagName("script");
ul = body[0].insertBefore(ul, script[0]);
function displayBooks(res) {

    for (var i = 0; i < res.length; i++){
        li = document.createElement("li");
        li.innerText = res[i].author + " - " +res[i].title;
        ul.appendChild(li);
        div = document.createElement("div");
        li.appendChild(div);
        console.log(res[i]);
    }
}