$(document).ready(function() {


    function clock() {
        var newDate = new Date();
        var day = new Array(7);
        day[0] = "Sunday";
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";
        var weekDay = day[newDate.getDay()];



        var ap = (newDate.getHours()) >= 12 ? 'PM' : 'AM';

        var hours = newDate.getHours();
        var finalHours = hours > 12 ? hours - 12 : hours;

        var minutes = newDate.getMinutes();
        var finalMinutes = minutes < 10 ? '0' + minutes : minutes;

        var seconds = newDate.getSeconds();
        var finalSeconds = seconds < 10 ? '0' + seconds : seconds;

        var time = finalHours + ":" + finalMinutes + ":" + finalSeconds + ap + '.';
        var dayTime = 'Today is' + ' ' + weekDay + '. ' + 'The current time is' + ' ' + time;
        document.getElementById("clock").innerHTML = dayTime;
        setTimeout(clock, 1000);
    };
    clock();
    /***********************

    end clock

    ***********************/

    scrolling("animation");

    function scrolling(id) {

        var originStr = document.getElementById(id);
        var originIndex = originStr.childNodes[0];
        var anima = originIndex.data;

        setInterval(function() {
            anima = anima.substring(1, anima.length) + anima[anima.length - 26];
            originIndex.data = anima;
        }, 100);
    };
    /***********************

    end scroll animation

    ***********************/

    function bubble(a, b) {
        return b - a;
    }

    var inputArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    inputArray.sort(bubble);
    var outputArray = inputArray.join(",");
    console.log(outputArray);
    /*********************

    end bubble sort

    *********************/
    $('p').each(function() {
        var toBold = $(this);
        toBold.html(toBold.text().replace(/(^\w+)/, '<b>$1</b>'));
    });
    /*********************

    end bolding first word function

    *********************/
    $("#click").click(singleEvent);


    $("#click").dblclick(doubleEvent);

    function singleEvent() {

        var text = 'this is a click event';
        $("#clickOutput").text(text);
    }



    function doubleEvent() {

        var text = 'this is a double-click event';
        $("#clickOutput").text(text);
    }
    /*********************

    end click events 

    *********************/
    $('button').click(colorChange);

    function colorChange() {
        $("#colorBox").css("background-color", "blue");

    }
});
