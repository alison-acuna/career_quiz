$(document).ready(function(){
  console.log("ready!");
})

var extrovert_score = 0
var code_score = 0
var design_score = 0
var qa_score = 0
var data_score = 0
var devops_score = 0

$("#clientquestion").submit(function(event){
  event.preventDefault();
  $("#clientquestion").toggle(display= false);
  if(document.getElementById('clientyes').checked){
    $("#designquestion").toggle(display= true);
    extrovert_score +=2;
  }else if(document.getElementById('clientno').checked){
    $("#designquestion").toggle(display= true);
  } else {
    $("#designquestion").toggle(display= true);
    extrovert_score +=1;
  }
});

$("#designquestion").submit(function(event){
  event.preventDefault();
  $("#designquestion").toggle(display= false);
  if(document.getElementById('designyes').checked){
    design_score += 2;
    $("#editquestion").toggle(display= true);
  }else if(document.getElementById('designno').checked){
    $("#editquestion").toggle(display= true);
    design_score = 0;
  } else {
    $("#editquestion").toggle(display= true);
    design_score +=1;
  }
});

$("#editquestion").submit(function(event){
  event.preventDefault();
  $("#editquestion").toggle(display= false);
  if(document.getElementById('edityes').checked){
    $("#databasequestion").toggle(display= true);
    qa_score +=2
  }else if(document.getElementById('editno').checked){
    $("#databasequestion").toggle(display= true);
  } else {
    $("#databasequestion").toggle(display= true);
    qa_score +=1
  }
});

$("#databasequestion").submit(function(event){
  event.preventDefault();
  $("#databasequestion").toggle(display= false);
  if(document.getElementById('databaseyes').checked){
    $("#backquestion").toggle(display= true);
    data_score +=2
  }else if(document.getElementById('databasena').checked){
    $("#backquestion").toggle(display= true);
    data_score +=1
  } else if(document.getElementById('databaseidk').checked){
    $("#backquestion").toggle(display= true);
    // display resources
  } else {
    $("#backquestion").toggle(display= true);
  }
});

$("#backquestion").submit(function(event){
  event.preventDefault();
  $("#backquestion").toggle(display= false);
  if(document.getElementById('backyes').checked){
    $("#collaborationquestion").toggle(display= true);
    code_score +=2
  }else if(document.getElementById('backno').checked){
    $("#collaborationquestion").toggle(display= true);
  } else {
    $("#collaborationquestion").toggle(display= true);
    code_score +=1
  }
});

$("#collaborationquestion").submit(function(event){
  event.preventDefault();
  $("#collaborationquestion").toggle(display= false);
  if(document.getElementById('collaborationyes').checked){
    $("#frontquestion").toggle(display= true);
    devops_score +=2
  }else if(document.getElementById('collaborationno').checked){
    $("#frontquestion").toggle(display= true);
  } else {
    $("#frontquestion").toggle(display= true);
    devops_score +=1
  }
});

$("#frontquestion").submit(function(event){
  event.preventDefault();
  $("#frontquestion").toggle(display= false);
  if(document.getElementById('frontyes').checked){
    code_score +=2
  }else if(document.getElementById('frontno').checked){
  } else {
    code_score +=1
  }
});

$("#finaltally").submit(function(event){
  event.preventDefault();
  var designer = design_score + 2
  var front_end = design_score + code_score
  var back_end = qa_score + code_score
  var tech_support = extrovert_score + code_score
  var database = data_score + 2
  var qa = qa_score + 2

  console.log(designer)
  if (designer >= qa &&
      designer >= database &&
      designer >= front_end &&
      designer >= back_end &&
      designer >= tech_support){
    document.getElementById('results').innerHTML = "You should consider a career as a web designer!"
  } else if (qa >= designer &&
      qa >= database &&
      qa >= front_end &&
      qa >= back_end &&
      qa >= tech_support){
    document.getElementById('results').innerHTML = "You should consider a career in QA!"
  } else if (database >= designer &&
      database >=  qa &&
      database >= front_end &&
      database >= back_end &&
      database >= tech_support){
    document.getElementById('results').innerHTML = "You should consider a career as a database engineer!"
  } else if (front_end >= designer &&
      front_end >=  qa &&
      front_end >= database &&
      front_end >= back_end &&
      front_end >= tech_support){
    document.getElementById('results').innerHTML = "You should consider a career as a Front End Developer!"
  } else if (back_end >= designer &&
      back_end >=  qa &&
      back_end >= database &&
      back_end >= front_end &&
      back_end >= tech_support){
    document.getElementById('results').innerHTML = "You should consider a career as a Full Stack Developer!"
  } else if (tech_support >= designer &&
      tech_support >=  qa &&
      tech_support >= database &&
      tech_support >= front_end &&
      tech_support >= back_end){
    document.getElementById('results').innerHTML = "You should consider a career in Tech Support!"
  } else {
    console.log("test functioned")
  }
  document.getElementById('deepresults').innerHTML = "Here are your scores.  If you have some other high scoring options, consider exploring those as well!"
  document.getElementById('design').innerHTML = " Design Score: " + designer
  document.getElementById('qa').innerHTML = " QA Score: " + qa
  document.getElementById('db').innerHTML = " Data Score: " + database
  document.getElementById('frontend').innerHTML = " Front End Score: " + front_end
});


// NS:  Rearrange/add more questions + develop front end
// Refactor:  Suggest multiple career paths.
