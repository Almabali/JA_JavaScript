
jQuery(document).ready(function () {
    jQuery("button").click(function(){
        jQuery.getJSON("input.json", function(result){

            console.log(JSON.stringify(result));

            console.log(result.employees);

        });
    });
});


