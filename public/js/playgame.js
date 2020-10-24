function getrandscore(){
  return Math.floor(Math.random() * 100) + 1;
}

$(document).ready(() => {
    eastcountries = [];
    westcountries = [];

    eastplaces = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"]
    westplaces = ["ninth", "tenth", "eleventh", "twelevth", "thirteenth", "fourteenth", "fifteenth", "sixteenth"]

    $("#startBtn").click(function(event){
        event.preventDefault();
        ajaxGet();

    });

    function ajaxGet(){
        $.ajax({
            type: "GET",
            url:"/api/alleast",
            success: function(result){
                $.each(result, function(_i, country){
                    eastcountries.push(country.countryName)
                    for (let i = 0; i < eastcountries.length; i++) {
                        var selector = '#' + eastplaces[i] + ' .country';
                        $(selector).text(eastcountries[i]);
                    }
                });
                
                console.log(eastcountries);
            }
        })
        $.ajax({
            type: "GET",
            url:"/api/allwest",
            success: function(result){
                console.log(result);
                $.each(result, function(_i, country){
                    westcountries.push(country.countryName)
                    for (let i = 0; i < westcountries.length; i++) {
                        var selector = '#' + westplaces[i] + ' .country';
                        $(selector).text(westcountries[i]);
                    }
                });
                console.log(westcountries);
            }
        })
    }

    $("#playBtn").click(() => {
        for (let i = 0; i < 8; i++) {
            var selector = '#' + eastplaces[i] + ' .score';
            $(selector).text(getrandscore());
        }
        for (let i = 0; i < 8; i++) {
            var selector = '#' + westplaces[i] + ' .score';
            $(selector).text(getrandscore());
        }
    });

    $("#firstround").click(function(){        
        var firstscore = parseInt($("#first .score").text());
        var secondscore = parseInt($("#second .score").text());
        var thirdscore = parseInt($("#third .score").text());
        var fourthscore = parseInt($("#fourth .score").text());
        var fifthscore = parseInt($("#fifth .score").text());
        var sixthscore = parseInt($("#sixth .score").text());
        var sevenththscore = parseInt($("#seventh .score").text());
        var eighthscore = parseInt($("#eighth .score").text());
   
        if (firstscore > secondscore){
            $("#efrw1 .country").text($("#first .country").text());

        }else{
            $("#efrw1 .country").text($("#second .country").text());
        }
        if (thirdscore > fourthscore){
            $("#efrw2 .country").text($("#third .country").text());
        }else{
            $("#efrw2 .country").text($("#fourth .country").text());
        }
        if (fifthscore > sixthscore){
            $("#efrw3 .country").text($("#fifth .country").text());
        }else{
            $("#efrw3 .country").text($("#sixth .country").text());
        }
        if (sevenththscore > eighthscore){
            $("#efrw4 .country").text($("#seventh .country").text());
        }else{
            $("#efrw4 .country").text($("#eighth .country").text());
        }
        for (let i = 1; i <= 4; i++) {
            var selector = '#efrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
        var firstscore = parseInt($("#ninth .score").text());
        var secondscore = parseInt($("#tenth .score").text());
        var thirdscore = parseInt($("#eleventh .score").text());
        var fourthscore = parseInt($("#twelevth .score").text());
        var fifthscore = parseInt($("#thirteenth .score").text());
        var sixthscore = parseInt($("#fourteenth .score").text());
        var sevenththscore = parseInt($("#fifteenth .score").text());
        var eighthscore = parseInt($("#sixteenth .score").text());
   
        if (firstscore > secondscore){
            $("#wfrw1 .country").text($("#ninth .country").text());

        }else{
            $("#wfrw1 .country").text($("#tenth .country").text());
        }
        if (thirdscore > fourthscore){
            $("#wfrw2 .country").text($("#eleventh .country").text());
        }else{
            $("#wfrw2 .country").text($("#twelevth .country").text());
        }
        if (fifthscore > sixthscore){
            $("#wfrw3 .country").text($("#thirteenth .country").text());
        }else{
            $("#wfrw3 .country").text($("#fourteenth .country").text());
        }
        if (sevenththscore > eighthscore){
            $("#wfrw4 .country").text($("#fifteenth .country").text());
        }else{
            $("#wfrw4 .country").text($("#sixteenth .country").text());
        }
        for (let i = 1; i <= 4; i++) {
            var selector = '#wfrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
    });

    $("#secondround").click(function(){        
        var firstscore = parseInt($("#efrw1 .score").text());
        var secondscore = parseInt($("#efrw2 .score").text());
        var thirdscore = parseInt($("#efrw3 .score").text());
        var fourthscore = parseInt($("#efrw4 .score").text());
        if (firstscore > secondscore){
            $("#esrw1 .country").text($("#efrw1 .country").text());

        }else{
            $("#esrw1 .country").text($("#efrw2 .country").text());
        }
        if (thirdscore > fourthscore){
            $("#esrw2 .country").text($("#efrw3 .country").text());
        }else{
            $("#esrw2 .country").text($("#efrw4 .country").text());
        }
        for (let i = 1; i <= 4; i++) {
            var selector = '#esrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
        var firstscore = parseInt($("#wfrw1 .score").text());
        var secondscore = parseInt($("#wfrw2 .score").text());
        var thirdscore = parseInt($("#wfrw3 .score").text());
        var fourthscore = parseInt($("#wfrw4 .score").text());
        if (firstscore > secondscore){
            $("#wsrw1 .country").text($("#wfrw1 .country").text());

        }else{
            $("#wsrw1 .country").text($("#wfrw2 .country").text());
        }
        if (thirdscore > fourthscore){
            $("#wsrw2 .country").text($("#wfrw3 .country").text());
        }else{
            $("#wsrw2 .country").text($("#wfrw4 .country").text());
        }
        for (let i = 1; i <= 4; i++) {
            var selector = '#wsrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
    });
    $("#thirdround").click(function(){        
        var firstscore = parseInt($("#esrw1 .score").text());
        var secondscore = parseInt($("#esrw2 .score").text());
        if (firstscore > secondscore){
            $("#etrw1 .country").text($("#esrw1 .country").text());

        }else{
            $("#etrw1 .country").text($("#esrw2 .country").text());
        }
        for (let i = 1; i <= 1; i++) {
            var selector = '#etrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
        var firstscore = parseInt($("#wsrw1 .score").text());
        var secondscore = parseInt($("#wsrw2 .score").text());
        if (firstscore > secondscore){
            $("#wtrw1 .country").text($("#wsrw1 .country").text());

        }else{
            $("#wtrw1 .country").text($("#wsrw2 .country").text());
        }
        for (let i = 1; i <= 1; i++) {
            var selector = '#wtrw' + i + ' .score';
            $(selector).text(getrandscore());
        }
    });
    $(".finalscore").click(() => {  
        var firstscore = parseInt($("#etrw1 .score").text());
        var secondscore = parseInt($("#wtrw1 .score").text());
        console.log(firstscore);
        console.log(secondscore);
        if (firstscore > secondscore){
            $(".modal-body").text($("#etrw1 .country").text());

        }else{
            $(".modal-body").text($("#wtrw1 .country").text());
        }
        
        
    });
});