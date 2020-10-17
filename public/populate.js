$(document).ready(function () {

    let results = [];
    let eastCountry = [];
    let westCountry = [];
    var queryURL = "https://restcountries.eu/rest/v2/all";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            results.push(response[i].name);
        }
        $("#eastBtn").click(function (event) {
            event.preventDefault();
            //console.log(($('#dropdown-two option').find(select => select.selected)));
            console.log($("#dropdown option").filter(":selected"));
            var list = [];
            $("#dropdown option").filter(":selected").each(function(east){
                list.push($(this).val());
            });
            console.log(list);
            $.post("/addeast", {'NameList': list})
                .then(function(){
                    console.log("Added country");
                });
          
        });

        $("#westBtn").click(function (event) {
            // console.log([...$('#dropdown option')].find(select => select.selected).value.replace('_', " "))
            event.preventDefault();
            //console.log(($('#dropdown-two option').find(select => select.selected)));
            console.log($("#dropdown-two option").filter(":selected"));
            var list = [];
            $("#dropdown-two option").filter(":selected").each(function(west){
                list.push($(this).val());
            });

            // var selected = ([...$('#dropdown-two option')].find(select => select.selected).value.replace('_', " "));
            // var list = $("#westtList").val();
            console.log(list);
            
            $.post("/addwest", {'NameList': list})
                .then(function(){
                    console.log("Added country");
                });
        });
        // console.log(results);
        // Putting place holder text in the drop-down menu
        // const placeHolder = '<option value="" selected disabled hidden>Choose Your Country</option>';
        // $('#dropdown select').append(placeHolder);
        // $('#dropdown-two select').append(placeHolder)
        for (var i = 0; i < results.length; i++) {
            $('#dropdown select').append('<option value=' + results[i].replace(' ', '_') + ' name=' + results[i].replace(' ', '_') + '>' + results[i] + '</option>');
            $('#dropdown-two select').append('<option value=' + results[i].replace(' ', '_') + ' name=' + results[i].replace(' ', '_') + '>' + results[i] + '</option>')
        }
    });
});