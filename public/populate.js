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
        console.log(([...$('#dropdown option')].find(select => select.selected).value.replace('_', " ")));
       eastCountry.push([...$('#dropdown option')].find(select => select.selected).value.replace('_', " "));
        // db.connect(function(err,connection){
        //     app.post('/addEast',function(req,res){
        //     console.log(req.body);
        
        //      var eastCountry={name:req.body.name,location:req.body.location}
        
        //     db.query('INSERT into eastCountry SET ?',eastCountry,function(err,res){
        //     if(err){
        //         throw err;
        //     }
        //         else{
        //         console.log(res);
        
        //     }
        
        
        //         })
        //    res.send(JSON.stringify(req.body));
        // })
        // })
        
        // $.ajax({
        //     url: '',
        //     method: 'POST',
        //     data: { countryData: event.target.value},
        //     success: function(repsonse){ alert("Good")},
        //     erorr: function(err) {console.log(err)} 
        // })
    });

    console.log(eastCountry);

    $("#westBtn").click(function () {
        // console.log([...$('#dropdown option')].find(select => select.selected).value.replace('_', " "))
        westCountry.push([...$('#dropdown-two option')].find(select => select.selected).value.replace('_', " "))
    });
    console.log(westCountry);
    // console.log(results);
    // Putting place holder text in the drop-down menu
    const placeHolder = '<option value="" selected disabled hidden>Choose Your Country</option>';
    $('#dropdown select').append(placeHolder);
    $('#dropdown-two select').append(placeHolder)
    for (var i = 0; i < results.length; i++) {
        $('#dropdown select').append('<option value=' + results[i].replace(' ', '_') + ' name=' + results[i].replace(' ', '_')  + '>' + results[i] + '</option>');
        $('#dropdown-two select').append('<option value=' + results[i].replace(' ', '_') + ' name=' + results[i].replace(' ', '_')  + '>' + results[i] + '</option>')
    }
    
    })
})