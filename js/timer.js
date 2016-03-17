var counter;
   $('#submit').on('click', function(event) {
       event.preventDefault();
       clearInterval(counter);
       var sec = $('.setSecValue').val(); //59
       var min = $('.setMinValue').val(); //59
       var hour = $('.setHourValue').val(); //23
       var day = $('.setDayValue').val(); //
       counter = setInterval(timer, 1000);

       function timer() {
           sec -= 1;
           if (sec === -1 || sec > 59) {
               min -= 1;
               sec = 59;
               if (min === -1 || min > 59) {
                   hour -= 1;
                   min = 59;
                   if (hour === -1 || hour > 23) {
                       day -= 1;
                       hour = 23;
                   }
                   if (day === -1) {
                       clearInterval(counter);
                       $('.timer').html('FINAL !!!');
                   }
               }
           }
           $('.secContainer').html(sec);
           $('.minContainer').html(min);
           $('.hourContainer').html(hour);
           $('.dayContainer').html(day);
       }
   });