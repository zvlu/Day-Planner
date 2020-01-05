let currentTimeDay = moment().format('MMMM Do YYYY, h:mm:ss a');

let rightNow24 = moment().format("H");
color(rightNow24, "#9am"); 
color(rightNow24, "#10am"); 
color(rightNow24, "#11am"); 
color(rightNow24, "#12pm"); 
color(rightNow24, "#1pm"); 
color(rightNow24, "#2pm"); 
color(rightNow24, "#3pm"); 
color(rightNow24, "#4pm"); 
color(rightNow24, "#5pm"); 



$( document ).ready(function() {

    $('#currentDay').text(currentTimeDay);
     
   

    $(".saveBtn").click(function () { 
        $('input[type="text"]').each(function () {
            
            const id = $(this).attr('id');
            const value = $(this).val();
            localStorage.setItem(id, value);
            
           
        });
    });

    $('input[type="text"]').each(function () {
        const setItem = $(this).attr('id');
        const setSave = localStorage.getItem(setItem);
        document.getElementById(setItem).value = setSave;
       
        
        
        
    });

 });
 

function color(time, Id) {
    if (currentTimeDay > time) {
        $(Id).addClass("past"); 
    }
     else if (currentTimeDay < time) { 
        $(Id).addClass("future"); 
    }
     else if (currentTimeDay == time) { 
        $(Id).addClass("present"); 
    };
};




