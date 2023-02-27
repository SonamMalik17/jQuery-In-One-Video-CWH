// we should make sure ki document load hone ke baad hi javascript chle so we use document.ready......

$(document).ready(function () {
    // Your jQuery code here
    // console.log($);
    // console.log(jQuery);
    console.log("I am in a new file now.");
    console.log("We are using jQuery");

    // There are three main types of selectors in jQuery
    // 1. element selector
    // 2. id selector
    // 3. class selector


    // $('selector').action()  // jQuery Syntax looks like this
    // $('#id').action();  // jQuery Syntax
    // $('.class').action();  // jQuery Syntax


    // 1. Element Selector : This is an example of element selector which clicks on all the p
    // $('p').click();  // click on p
    // $('p').click(function () {
    //     console.log("You clicked on p", this);
    //     // $('p').hide(); //all hide
    //     // $(this).hide(); //only that p gets hidden on which we clicked
    // });  // do this when we click on p


    // $('p').dblclick(function () {
    //     console.log("You double clicked on p", this);
    //     // $(this).hide();
    // });  // do this when we double click on p


    // $('p').mouseenter(function () {
    //     console.log("You entered : ", this);
    //     // $(this).hide();
    // });  // do this when we entered mouse in p


    // // hover = mouseenter + mouseleave 
    // // hover takes two parameters : function1- run on mouseenter , function2- run on mouseleave 
    // $('p').hover(function () {
    //     console.log("You hovered on : ", this);
    //     // $(this).hide();
    // },
    // function(){
    //     console.log("Thanks for coming ");
    // });  // do this when we hovered on p


    // 2. Id Selector : This is an example of id selector 
    // $('#second').click();


    // 3. Class Selector : This is an example of class selector 
    // $('.odd').click();


    // other selectors
    // $('*').click(); // click on all the elements
    // $('p.odd').click(); 
    // $('p:first').click();


    // Events in jQuery
    // Mouse Events : click, dblclick, mouseenter, mouseleave
    // Keyboard Events : keypress, keydown, MediaKeyStatusMap
    // Form Events : submit, change, focus, blur
    // Document/Window Events : load, resize, scroll, unload


    // demoing the on method
    // on method is used to attach multiple events to a selector 
    $('p').on(
        {
            click: function () {
                console.log("Thanks for clicking ", this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }
        }
    )


    // $('#wiki').hide(); // suddenly hide ho jayega
    // $('#wiki').hide(1000); // it will take 1000ms to hide
    // $('#wiki').hide(1000, function(){  
    // callback function which tells work is done (here) and it will be called when the action(after 1s when the div gets hidden completely) gets completed 
    // console.log("hidden");
    // });

    // $('#wiki').show(1000, function(){  
    // console.log("Show");
    // });


    $('#but1').click(function () {
        $('#wiki').toggle(1000);  // toggle=hide+show
    });

    // Fade methods
    $('#but2').click(function () {
        $('#wiki').fadeIn(3000);
    });
    $('#but3').click(function () {
        $('#wiki').fadeOut(3000);
    });
    $('#but4').click(function () {
        $('#wiki').fadeToggle(3000);
    });
    $('#but5').click(function () {
        $('#wiki').fadeTo(3000, 0.4);
    });


    // Slide methods - speed and callback parameters are both optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log("slideUp");
    // });
    // $('#wiki').slideDown(1000, function(){
    //     console.log("slideDown");
    // });
    // $('#wiki').slideToggle(1000, function(){
    //     console.log("slideToggle");
    // });

    // we can use - slow,fast in specifying speed (1000,2000 etc.)
    // Animate function in jQuery
    // $('#wiki').animate(
    //     {
    //         opacity: 0.3,
    //         height: '150px',
    //         width: '350px'
    //     }
    //     ,'fast'); 


    // Queuing
    // $('#wiki').animate({opacity:0.3},4000);
    // $('#wiki').animate({opacity:0.9},1000);
    // $('#wiki').animate({width: '350px'},12000);

    // animation stop krne ke liye
    // $('#wiki').stop();

    // similar to innertext and innerhtml
    // console.log($('#wiki').text());
    // $('#wiki').text('This is harry');
    // console.log($('body').html());
    // $('body').html('<h1>This is harry</h1>');
    // console.log($('#ta').val());
    // $('#ta').val('This is textarea');
    // $('#ta').html('This is textarea');
    // $('#ta').text('This is textarea');
    // $('#wiki').empty();
    // $('#wiki').text('you are good');
    // $('#wiki').remove();  // removed the element
    // $('#wiki').addClass("myClass");
    // $('#wiki').addClass("myClass2");
    // $('#wiki').removeClass("myClass2");
    // $('#wiki').toggleClass("myClass2");
    // $('#wiki').css("background-color",'red');
    // console.log($('#wiki').css("background-color"));


    // AJAX using jQuery
    // console.log($.get('https://code.jquery.com/jquery-3.6.3.js'));  // URL content print ho jayega console me 
    // $.get('https://code.jquery.com/jquery-3.6.3.js',function(data,status){
    //     alert(data);
    // });
    // $.get('https://code.jquery.com/jquery-3.6.3.js',function(data,status){
    //     alert(status);
    // });
    // $.post('https://code.jquery.com/jquery-3.6.3.js',{'name':'Sona','channel':'Code.....'},function(data,status){
    //     alert(status);});   // error
});





// shortcut for document.ready....
// $(function(){
    // Your jQuery code here
    // console.log($);
    // console.log(jQuery);
    // console.log("We are using jQuery");
    // $('p').click();  // click on p
    // $('p').click(function () {
        // console.log("You clicked on p");
        // $(this).hide();
    // });  // do this when we click on p
// });

