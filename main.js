/*Stwórz stronę zawierającą przycisk pt. "Pobierz dane"
Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:
https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php
Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".
Zadanie domowe zrób za pomocą GitHub Pages.

Podpowiedź przed wysłaniem zadania do sprawdzenia:
	- pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery*/


$(function() {
	$('button').click(function(){
		$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
			$('body').append('<div id="dane-programisty">Użytkownik: ' + data.imie +' '+ data.nazwisko + ', zawód: ' + data.zawod + ', firma: ' + data.firma +'</div>');
		})		
	})	
})