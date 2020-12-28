var deadline='2021-012-31 00:00:00';
$('.countdown').downCount({
	date: deadline,
},
function(){
   /* действие после завершения таймера */
   alert("Время истекло!");
});