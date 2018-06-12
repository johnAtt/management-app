
$("#btnGetUser").click(function() {
    $("#userBox").empty()
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://localhost:7000/api/getUsers",

        success: function (response) {
        for (var i = 0; i < response.length; i++) {
               var newDiv=$("<div>")
               newDiv.addClass("nameBox")
               newDiv.text(response[i])
               $("#userBox").append(newDiv)
            }
            console.log(response)
        },
        error: function (msg) {
            console.log("error");
        },
        complete: function (response, status) {
            console.log("complete");
        }
    });
})

$("#btnAddUsers").click(function() {
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "http://localhost:7000/api/addUsers",
        data: {"msg":$("#userInput").val()},

        success: function (response) {
            console.log(response)
            $("#text").text(response);
        },
        error: function (msg) {
            console.log(msg);
            $("#text").text(msg.responseText);
        },
        complete: function (response, status) {
            $("#userInput").val(" ")
            console.log("complete");
        }
    });
})

$("#btnDelUsers").click(function() {
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "http://localhost:7000/api/delUsers",
        data: {"msg":$("#userInput").val()},

        success: function (response) {
            console.log(response)
            $("#text").text(response);
        },
        error: function (msg) {
            $("#text").text(msg.responseText);
        },
        complete: function (response, status) {
            $("#userInput").val(" ")
            console.log("complete");
        }
    });
})