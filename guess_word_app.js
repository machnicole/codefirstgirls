function trueFunction (){
    $(".img-fluid").css( "border", "10px solid green" );
    $("#next-button").show();
};

function wrongFunction (){
    $(".img-fluid").css( "border", "10px solid red" );
};

function nextFunction (){
    window.open("index2.html", "_self");
};