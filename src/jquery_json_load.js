jQuery(document).ready(function () {

  // jQuery("#outerSelect").chosen();
  var employeesObj;
  var animalsObj;

  jQuery.getJSON("input.json", function (result) {
    console.log(result.employees);
    employeesObj = result.employees;
    animalsObj = result.animals;
  });


  jQuery("#outerSelect").change(function () {
    console.log("Changed selector 1")
    console.log(jQuery("#outerSelect").val());
    var returnString = "<option value='-1'>Select something</option>";
    if (jQuery("#outerSelect").val() == 1) {
      for (var i = 0; i < employeesObj.length; i++) {
        console.log(employeesObj[i]);
        console.log(employeesObj[i].firstName);
        console.log(employeesObj[i].lastName);
        returnString += "<option value='" + i + "'>" + employeesObj[i].firstName + ", " + employeesObj[i].lastName + "</option>";
      }
      jQuery("#dropdown1").css("display", "block");
    }
    else if (jQuery("#outerSelect").val() == 2) {
      for (var i = 0; i < animalsObj.length; i++) {
        returnString += "<option value='" + i + "'>" + animalsObj[i].firstName + ", " + animalsObj[i].lastName + "</option>";
      }
      jQuery("#dropdown1").css("display", "block");
    }else{
      jQuery("#dropdown1").css("display", "none");
      jQuery("#text").css("display", "none");
    }
    jQuery("#dropdown1").html(returnString);
  });
  jQuery("#dropdown1").change(function () {
    if(jQuery("#dropdown1").val()!=-1){
    console.log(jQuery("#dropdown1").val());
    console.log(jQuery("#dropdown1 option:selected").text());
    jQuery("#text").val(jQuery("#dropdown1 option:selected").text());
      jQuery("#text").css("display", "block");
    }
    else{
      jQuery("#text").css("display", "none");
    }

  });


})
;


