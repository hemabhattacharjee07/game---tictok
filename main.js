$(document).ready(function(){
    let x = "x";
    let o = "o";
    let turns = 0; // to keep track of our turns.
    // spots on the board
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');
    // Click function for board list item.
    $('#board li').on('click', function(){
 //      alert($(this).attr('id'));
 // We will check
         // if(
         //     spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
         //     spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
         //     spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
         //     spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
         //     spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
         //     spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
         //     spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
         //     spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
         // ){
         //  alert("Winner is o");  
         //  $('#board li').text("+");
         //  $('#board li').removeClass('disable');
         //  $('#board li').removeClass('o');
         //  $('#board li').removeClass('x');
         // } else if(
         //     spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
         //     spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
         //     spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
         //     spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
         //     spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
         //     spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
         //     spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
         //     spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
         // ){
         //     alert("Winner is x");  
         //     $('#board li').text("+");
         //     $('#board li').removeClass('disable');
         //     $('#board li').removeClass('o');
         //     $('#board li').removeClass('x');
         // }else 
         if((turns == 9)){
             alert("Tie game"); 
             $('#board li').text("+");
             $('#board li').removeClass('disable');
             $('#board li').removeClass('o');
             $('#board li').removeClass('x');
             turns = 0;
         } else if($(this).hasClass('disable')){
             alert("This spot is already filled"); 
         }else if(turns%2 == 0){ // detecting even number of clicks
             turns++;
             $(this).text(o).addClass('disable o').css({'cursor':'not-allowed','user-select':'none'});
             if(
                 spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                 spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                 spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                 spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                 spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                 spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                 spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                 spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
             ){
                 alert("Winner is o");  
                 $('#board li').text("+");
                 $('#board li').removeClass('disable');
                 $('#board li').removeClass('o');
                 $('#board li').removeClass('x');
                 turns = 0;
             }
         }else{ // detecting odd number of clicks
             turns++;
             $(this).text(x).addClass('disable x').css({'cursor':'not-allowed','user-select':'none'});
             
             if(
                 spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
                 spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                 spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                 spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                 spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                 spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                 spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                 spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
             ){
                 alert("Winner is x");  
                 $('#board li').text("+");
                 $('#board li').removeClass('disable');
                 $('#board li').removeClass('o');
                 $('#board li').removeClass('x');
                 turns = 0;
 
 
             }  
         }
    });
    
    $('#reset').on('click',function(){
         $('#board li').text("+");
         $('#board li').removeClass('disable');
         $('#board li').removeClass('o');
         $('#board li').removeClass('x');
         turns = 0;
    });
    
 });
 
 