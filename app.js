$(document).ready(function(){
    $('.house').click(function(){
      $(this).find('.button').css('display', 'block')
    })

    $('.button').click(function(){
      $(this).parent().find('.pool').fadeOut('fast')
      $(this).fadeOut('slow')
    })


    $('.okHouse').click(function(){
    	var height = $('.height').val();
    	var width = $('.width').val();
    	var resH = height + 'px'
    	var resW = width + 'px'

    	$('.house').css('height', resH);
    	$('.house').css('width', resW);
    })

    $('.okPool').click(function(){
    	var height = $('.formPool .height').val();
    	var width = $('.formPool .width').val();
    	var resH = height + 'px'
    	var resW = width + 'px'

    	$('.pool').css('height', resH);
    	$('.pool').css('width', resW);
    })


});
