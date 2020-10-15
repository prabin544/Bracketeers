$(document).ready(function(){

    countries = ["Nepal", "Britain", "India", "USA", "Australia", "Japan", "China", "Italy"];
    places = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"]

    $("#startBtn").click(function(){
        for (let i = 0; i < countries.length; i++) {
            var selector = '#' + places[i] + ' .country';
            $(selector).text(countries[i]);
        }

    });

    $("#playBtn").click(function(){
        var randnum = Math.floor(Math.random() * 100);
        $("#first .score").text(randnum);
        $("#second .score").text("58");
        $("#third .score").text("2");
        $("#fourth .score").text("4");
        $("#fifth .score").text("22");
        $("#sixth .score").text("40");
        $("#seventh .score").text("5");
        $("#eighth .score").text("7");

    });

    $("#firstround").click(function(){
        var firstscore = parseInt($("#first .score").text());
        var secondscore = parseInt($("#second .score").text());
        var thirdscore = parseInt($("#third .score").text());
        var fourthscore = parseInt($("#fourth .score").text());
        var fifthscore = parseInt($("#fourth .score").text());
        var sixthscore = parseInt($("#fourth .score").text());
        var sevenththscore = parseInt($("#fourth .score").text());
        var eighthscore = parseInt($("#fourth .score").text());
        
        if (firstscore > secondscore){
            $("#frw1").text($("#first .country").text());
        }else{
            $("#frw1").text($("#second .country").text());
        }
        if (thirdscore > fourthscore){
            $("#frw2").text($("#third .country").text());
        }else{
            $("#frw2").text($("#fourth .country").text());
        }
        if (fifthscore > sixthscore){
            $("#frw3").text($("#fifth .country").text());
        }else{
            $("#frw3").text($("#sixth .country").text());
        }
        if (sevenththscore > eighthscore){
            $("#frw4").text($("#seventh .country").text());
        }else{
            $("#frw4").text($("#eighth .country").text());
        }

    });
});