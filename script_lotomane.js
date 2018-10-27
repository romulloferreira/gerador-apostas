var form = document.querySelector('form');
var tbn_gerar = document.getElementById('submit');



form.onsubmit = function(e) {
         
         document.getElementById('resultado').innerHTML = jogos;
         e.preventDefault();

}

 javascript:(function(maxNum, numPorJogo, numJogos){
	var jogos = [];
	
	while(jogos.length < numJogos){
		var res = [];
		
		while(res.length < numPorJogo){
			num = Math.floor((Math.random() * 100) + 1);
			if(res.indexOf(num)==-1) res.push(num);
		}
		
		jogos.push(res);
	}
	
	document.getElementById('resultado').innerHTML = ("Boa sorte!", jogos.map(function(a){ return a.sort(function(a,b){return a-b;}).join(' '); }).join('\n'));
})((100), (50), (1))
	       
