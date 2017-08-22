var el = document.getElementById('search-icon');
var other_el = document.getElementsByTagName('label');

el.addEventListener('focus', function (){
	
	other_el[0].classList.add('active');
});
	
el.addEventListener('blur', function(){
	var valuee = el.value;
	if(valuee.length == 0)
	var other_el = document.getElementsByTagName('label');
	other_el[0].classList.remove('active');
});


var menuBurger = document.getElementById('burger');
var otherBurger = document.getElementsByTagName('ul');

menuBurger.addEventListener('click', function (){
	if(otherBurger[0].classList.contains('hidden')===true)
		{ otherBurger[0].classList.remove('hidden');
		}
	
	else
	{otherBurger[0].classList.add('hidden');}
});