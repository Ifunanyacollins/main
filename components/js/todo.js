
//THIS IS TO CANCEL ANY TODOLIST THAT WE HAVE FINSHID
$("ul").on("click", "li",function(){
	$(this).toggleClass('completed');
})



//THIS IS TO REMOVE THE TODOLIST
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut('500', function() {
	 $(this).remove();	
	});
  event.stopPropagation();
})	
$("input[type='text']").keypress(function(event) {
	/* Act on the event */
	if(event.which === 13){
	var newTodo=$(this).val();
	$(this).val("")
	$("ul").append("<li class='collection-item'><span class='red-text'><i class='fa fa-trash'></i></span>"+ newTodo + " </li>")
	}
});
$(".fa-pencil").click(function(){
	$("input[type='text'],label").fadeToggle()
});


  $(document).ready(function(){
    $('.modal').modal();
  });
          