// $( document ).ready(function() {
//     $('#Hit').click();
// });
console.log("I am linked");

var cards = ['PNG-cards-1.3/ace_of_clubs.png',
'PNG-cards-1.3/ace_of_diamonds.png',
'PNG-cards-1.3/ace_of_hearts.png',
'PNG-cards-1.3/ace_of_spades.png',
'PNG-cards-1.3/2_of_clubs.png',
'PNG-cards-1.3/2_of_diamonds.png',
'PNG-cards-1.3/2_of_hearts.png',
'PNG-cards-1.3/2_of_spades.png',
'PNG-cards-1.3/3_of_clubs.png',
'PNG-cards-1.3/3_of_diamonds.png',
'PNG-cards-1.3/3_of_hearts.png',
'PNG-cards-1.3/3_of_spades.png',
'PNG-cards-1.3/4_of_clubs.png',
'PNG-cards-1.3/4_of_diamonds.png',
'PNG-cards-1.3/4_of_hearts.png',
'PNG-cards-1.3/4_of_spades.png',
'PNG-cards-1.3/5_of_clubs.png',
'PNG-cards-1.3/5_of_diamonds.png',
'PNG-cards-1.3/5_of_hearts.png',
'PNG-cards-1.3/5_of_spades.png',
'PNG-cards-1.3/6_of_clubs.png',
'PNG-cards-1.3/6_of_diamonds.png',
'PNG-cards-1.3/6_of_hearts.png',
'PNG-cards-1.3/6_of_spades.png',
'PNG-cards-1.3/7_of_clubs.png',
'PNG-cards-1.3/7_of_diamonds.png',
'PNG-cards-1.3/7_of_hearts.png',
'PNG-cards-1.3/7_of_spades.png',
'PNG-cards-1.3/8_of_clubs.png',
'PNG-cards-1.3/8_of_diamonds.png',
'PNG-cards-1.3/8_of_hearts.png',
'PNG-cards-1.3/8_of_spades.png',
'PNG-cards-1.3/9_of_clubs.png',
'PNG-cards-1.3/9_of_diamonds.png',
'PNG-cards-1.3/9_of_hearts.png',
'PNG-cards-1.3/9_of_spades.png',
'PNG-cards-1.3/10_of_clubs.png',
'PNG-cards-1.3/10_of_diamonds.png',
'PNG-cards-1.3/10_of_hearts.png',
'PNG-cards-1.3/10_of_spades.png',
'PNG-cards-1.3/jack_of_clubs.png',
'PNG-cards-1.3/jack_of_diamonds.png',
'PNG-cards-1.3/jack_of_hearts2.png',
'PNG-cards-1.3/jack_of_spades.png',
'PNG-cards-1.3/queen_of_clubs.png',
'PNG-cards-1.3/queen_of_diamonds.png',
'PNG-cards-1.3/queen_of_hearts.png',
'PNG-cards-1.3/queen_of_spades.png',
'PNG-cards-1.3/king_of_clubs.png',
'PNG-cards-1.3/king_of_diamonds.png',
'PNG-cards-1.3/king_of_hearts.png',
'PNG-cards-1.3/king_of_spades.png'];

var values = [11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 
 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

 var $totalMoney = 100;
var $bet;
var $input = $('#bet');
var $arrayOfDeck = [];

$('#Submit').click(function(){   
var $placeBet = $input.val();
$('#bet-number').text($placeBet);
// $('#bet').val("");
});


var CreateDeck = function CreateDeck(cards,values,id) {
	this.cards = cards;
	this.values = values;
	this.id = id;

	

}


var deck = function deck() {
	for(var i = 0; i < cards.length; i++) {
	var oldDeck = new CreateDeck(cards[i], values[i], i);
    $arrayOfDeck.push(oldDeck);
  }
}; 

deck();





var move = function move() {
 function shuffle(array) {
	var currentIndex = array.length
	, temporaryValue
	, randomIndex;
	

while(0 !== currentIndex) {
	randomIndex =  Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
}
return array;
}
shuffle($arrayOfDeck);
		


};


var $dealerHand = [];
var $userHand = [];
var $userTotal;
var $userWinnings = $('#Money').text();
var $betNumber = $('#bet').val();


var addCards = function addCards() { 
var j = 2;
var y = 4;
  
  move();

  if ($userHand.length === 0)   { 
    $dealerHand.push($arrayOfDeck[0]);
	$dealerHand.push($arrayOfDeck[2]);
	$userHand.push($arrayOfDeck[1]);
	$userHand.push($arrayOfDeck[3]);


 	$('<div>').addClass('dealer')
	          .appendTo('body');
	$('<img>').attr('src', $dealerHand[0].cards)
	         .appendTo('.dealer');
	$('<img>').attr('src', $dealerHand[1].cards)
	         .appendTo('.dealer')
	$('<div>').addClass('user')
	         .appendTo('body');
	$('<img>').attr('src', $userHand[0].cards)
	         .appendTo('.user');
	$('<img>').attr('src', $userHand[1].cards)
	         .appendTo('.user')

	var $total = $userHand[0].values + $userHand[1].values;
	$userTotal = $total;
      if ($userTotal > 21) {

 	   	alert('You lost!');
 	   	$('#Money').text(parseInt($('#Money').text()) - parseInt($('#bet').val()));
	    $('#Hit').off('click');
	    $('#Stay').off('click');

 	   } else if ($userTotal === 21) {
 	   	alert('You got a perfect score!');
 	   	$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
        $('#Hit').off('click');
        $('#Stay').off('click');
 	   }

 }  else if ($userHand.length >= 2 &&  $userTotal < 21){
 	$userHand.push($arrayOfDeck[y]);

 	$('<img>').attr('src', $userHand[j].cards)
 	        .appendTo('.user');

 	$total = $userTotal + $userHand[j].values;
 	$userTotal = $total;
 	y++;
 	j++;
 	   if ($userTotal > 21) {

 	   	alert('You lost!');
 	   	$('#Money').text(parseInt($('#Money').text()) - parseInt($('#bet').val()));
	    $('#Hit').off('click');
	    $('#Stay').off('click');
 	   } else if ($userTotal === 21) {
 	   	alert('You got a perfect score!');
 	   	$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
        $('#Hit').off('click');
        $('#Stay').off('click');
 	   }

  } else if ($userTotal === 21) {
     alert('You got a perfect score!');
     $('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
     $('#Hit').off('click');
     $('#Stay').off('click');
    
} else if ($userHand > 21) {

	alert('You lost!');
	$('#Money').text(parseInt($('#Money').text()) - parseInt($('#bet').val()));
	$('#Hit').off('click');
	$('#Stay').off('click');
    }
}

$('#Hit').click(addCards) 

var $dealerTotal;


 var stand = function stand() {   
var i = 2;
var x = 5;
	if ($dealerHand.length === 2 && ($dealerHand[0].values + $dealerHand[1].values) <= 17) {
        $dealerHand.push($arrayOfDeck[x]);
 	    $('<img>').attr('src', $dealerHand[i].cards)
 	         .appendTo('.dealer');
	var $fullTotal = $dealerHand[0].values + $dealerHand[1].values + $dealerHand[i].values;
    $dealerTotal = $fullTotal;
 		x++;
 		i++;
    } else if ($dealerHand.length === 2 && ($dealerHand[0].values + $dealerHand[1].values) >= 17 &&
     ($dealerHand[0].values + $dealerHand[1].values) <= 21) {
     	$dealerTotal = $dealerHand[0].values + $dealerHand[1].values;
    	if ($userTotal > $dealerTotal) {
    		alert('You won!');
    		$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
    		$('#Stay').off('click');
    		$('#Hit').off('click');
    	} else if ($dealerTotal > $userTotal) {
    		alert('Dealer won!');
    		$('#Money').text($('#Money').text() - $('#bet').val());
    		$('#Stay').off('click');
    		$('#Hit').off('click');
    	} else if ($userTotal === $dealerTotal) {
    		alert('You are tied!');
    		$('#Stay').off('click');
    		$('#Hit').off('click');
    	} else if ($dealerTotal === 21) {
    		alert('Dealer got a perfect score!');
    		$('#Money').text($('#Money').text() - $('#bet').val());
    		$('#Stay').off('click');
    		$('#Hit').off('click');
    	}
    } else if ($dealerHand.length === 2 && ($dealerHand[0].values + $dealerHand[1].values) === 21) {
    	alert('Dealer got a perfect score!');
    	$('#Money').text($('#Money').text() - $('#bet').val());
    	$('#Stay').off('click');
    	$('#Hit').off('click');
    } else if ($dealerHand.length === 2 && ($dealerHand[0].values + $dealerHand[1].values) > 21) {
    	alert('You won!');
    	$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
    	$('#Stay').off('click');
    	$('#Hit').off('click');
    }

 	while ($dealerHand.length > 2 && $dealerTotal < 17) {
      move();
      $dealerHand.push($arrayOfDeck[x]);

 	  $('<img>').attr('src', $dealerHand[i].cards)
 	         .appendTo('.dealer');
 	 var $fullTotal = $dealerTotal + $dealerHand[i].values;
 	 $dealerTotal = $fullTotal;
 	   x++;
 	   i++;
      } if ($dealerHand.length > 2 && $userTotal > $dealerTotal && $userTotal < 21) {
      	alert('You won!');
      	$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
      	$('#Stay').off('click');
      	$('#Hit').off('click');
      } else if ($dealerHand.length > 2 && 21 > $dealerTotal && $dealerTotal > $userTotal) {
      	alert('Dealer won!');
      	$('#Money').text($('#Money').text() - $('#bet').val());
      	$('#Stay').off('click');
      	$('#Hit').off('click');
      } else if ($dealerHand.length > 2 && $dealerTotal === $userTotal) {
      	alert('It\'s a tie!');
      	$('#Stay').off('click');
      	$('#Hit').off('click');
      } else if ($dealerTotal === 21) {
      	alert('The dealer got a perfect score!');
      	$('#Money').text($('#Money').text() - $('#bet').val());
      	$('#Stay').off('click');
      	$('#Hit').off('click');
      } else if ($dealerTotal > 21) {
 	  	alert('You won!');
 	  	$('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet').val()));
 	  	$('#Stay').off('click');
 	  	$('#Hit').off('click');
 	  }
 }; 
$('#Stay').click(stand)
 	
$('#newGame').click(function(){
	$('.dealer').remove();
	$('.user').remove();
	$dealerHand = [];
	$userHand = [];
	$userTotal = 0;
	$dealerTotal = 0;


	$('#Hit').on('click', addCards);
    $('#Stay').on('click', stand);

})

$('#restart').click(function(){
	location.reload();
})

$('#double').click(function(){
	$('#bet-number').text($('#bet').val() * 2);
	move();
	$userHand.push($arrayOfDeck[2]);

 	$('<img>').attr('src', $userHand[2].cards)
 	        .appendTo('.user');

 	$userTotal = $userHand[0].values + $userHand[1].values + $userHand[2].values;
 	        
 	 
 	$dealerTotal = $dealerHand[0].values + $dealerHand[1].values;

 	 if ($userTotal > 21) {
 	 	alert('You lose!');
        $('#Money').text(parseInt($('#Money').text()) - parseInt($('#bet-number').text()));
        $dealerHand.pop();
        $userHand.pop();
 	 } else if ($userTotal > $dealerTotal) {
 	 	alert('You won!');
        $('#Money').text(parseInt($('#Money').text()) + parseInt($('#bet-number').text()));
        $dealerHand.pop();
        $userHand.pop(); 	 
    } else if ($dealerTotal > $userTotal && $dealerTotal < 21) {
 	 	alert('Dealer won!')
 	 	$('#Money').text(parseInt($('#Money').text()) - parseInt($('#bet-number').text()));
 	 	$dealerHand.pop();
        $userHand.pop();
 	 } else if ($userTotal === $dealerTotal) {
 	 	alert('It\'s a tie!')
 	 	$dealerHand.pop();
        $userHand.pop();
 	 }
})




  







