// $(document).ready(function () {
// 	// jQueryプログラムの内容
//     $('body').html('<h1>Hello jQuery!!</h1>');
// });


 // $(function(){
 //        $('.box1').slideDown(function() {
 //            $('.box1').css({
 //                'background-color': '#0000FF',
 //                'width': '200px',
 //                'height': '100px'
 //            }).slideUp();
 //        });
 //    });

// $(function(){
//     $('.box1').mouseover(function(){
//         $('.box1').css({'background-color': '#0000FF'});
//     });

//      $('.box1').mouseout(function(){
//         $('.box1').css({'background-color': '#FF0000'});
//     });
// });


// 以下6章のイベント関係
// $(function(){
//     $('.box1').mouseover(function(){
//         $('.box1').addClass('box1-ext');
//     });
 
//     $('.box1').mouseout(function(){
//         $('.box1').removeClass('box1-ext');
//     });
// });

// $(function(){
//     $('.box1').on('click', function(){
//         $('.box1').addClass('box1-ext');
//     });
 
//     $('.box1').mouseout(function(){
//         $('.box1').removeClass('box1-ext');
//     });
 
// });

// 以下は7章のthis children関係
// $(function(){
//     $('.box1').on('click', function(){
//         $(this).slideUp();
//     });
// });

$(function(){
    $('button').on('click', function(){
        $('ul').children().css('color','red');
    });
});