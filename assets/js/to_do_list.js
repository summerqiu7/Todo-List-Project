// check off the items
$("ul").on("click","li", function(){
$(this).toggleClass("complete");
});
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     } 
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });
// click on X to delete items
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
});
    event.stopPropagation();
});

// create new todos
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
      var newItem = $(this).val();
      $(this).val("");
      $("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span>" + newItem + "</li>")
    };
});

$(".fa-plus").click(function(){
$("input[type = 'text']").fadeToggle();
})