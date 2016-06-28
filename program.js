$(document).ready(function(){
  console.log("ready!");
})

var extrovert_score = 0
var design_score = 0
var data_score = 0
var qa_score = 0

$("#clientquestion").submit(function(event){
  event.preventDefault();
  if(document.getElementById('yes').checked){
      $("#clientquestion").toggle(display= false);
      $("#designquestion").toggle(display= true);
      extrovert_score +=2
      console.log(extrovert_score)
  }else if(document.getElementById('no').checked){
    $("#clientquestion").toggle(display= false);
    $("#designquestion").toggle(display= true);
    console.log(extrovert_score)
  } else {
    $("#clientquestion").toggle(display= false);
    $("#designquestion").toggle(display= true);
    extrovert_score +=1
    console.log(extrovert_score)
  }
});

$("#designquestion").submit(function(event){
  event.preventDefault();
  if(document.getElementById('yes').checked){
      $("#designquestion").toggle(display= false);
      $("#editquestion").toggle(display= true);
      design_score +=2
      console.log(extrovert_score)
  }else if(document.getElementById('no').checked){
    $("#designquestion").toggle(display= false);
    $("#editquestion").toggle(display= true);
    console.log(extrovert_score)
  } else {
    $("#designquestion").toggle(display= false);
    $("#editquestion").toggle(display= true);
    design_score +=1
    console.log(extrovert_score)
  }
});
