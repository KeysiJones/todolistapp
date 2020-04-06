/***********************VARIÁVEIS****************************/


	//MEU INPUT
	let tarefa = document.getElementById('input');
	//MEU BOTÃO
	let botao = document.getElementById('btn');
	//MINHA LISTA
	let lista = document.getElementById('lista');
	let feitos = document.getElementById('feitos')

/***********************FUNÇÕES****************************/

let adicionarTarefa = function () {

	//VALOR DIGITADO
	let valor = tarefa.value;
	console.log(valor);

	//NUMERA A POSIÇÃO DE CADA ITEM DA LISTA
	for (var i = 0; i <= lista.children.length; i++){
	}

	let valorAtualizado = `${i} - ${tarefa.value} `;

	if (tarefa.value != "") {

	//CRIAMOS O ELEMENTO LISTA
	let novaTarefa = document.createElement('li');
	//CRIAMOS UM ELEMENTO A
	let link = document.createElement('a')
	//CRIAMOS UM NOVO BOTÃO
	let btnRemover = document.createElement('button')
	//CRIAMOS UM TEXTO COM O VALOR DIGITADO
	let texto = document.createTextNode(valorAtualizado);
	//CRIAMOS UM TEXTO PARA O NOSSO BOTÃO REMOVER
	let btnText = document.createTextNode('Feito!'); 
	//COLOCAMOS ESTE TEXTO DENTRO DA NOSSA <a>
	link.appendChild(texto);
	//coloco o meu link como filho da minha <li>
	novaTarefa.appendChild(link);
	//COLOCAMOS O BOTÃO REMOVER DENTRO DA NOSSA LISTA
	novaTarefa.appendChild(btnRemover);
	//COLOCAMOS O TEXTO DENTRO DO NOSSO BOTÃO
	btnRemover.appendChild(btnText);
	//COLOCAMOS A NOSSA <a> DENTRO DA <li>
	
	lista.appendChild(novaTarefa);
	//DEPOIS DE ADICIONAR A NOVA TAREFA ELE LIMPA O INPUT	
	tarefa.value = '';

	// Adiciona o evento de eliminar tarefa para cada novo item 

		novaTarefa.children[1].addEventListener('click', removerTarefa);
		console.log(i);


	}



};

let removerTarefa = function(){
	//REMOVE O ELEMENTO PAI E CONSEQUENTEMENTE SE REMOVE
		this.parentElement.remove();
		//CRIO UM ELEMENTO <li>
		let listaFeitos = document.createElement('li');
		//CRIO O TEXTO QUE CONTÉM O VALOR DO ELEMENTO PAI(LI NA POSIÇÃO 0 OU SEJA,ELEMENTO <a>)
		let tarefaFeita = document.createTextNode(this.parentElement.children[0].innerText);
		//COLOCO O MEU TEXTO DENTRO DO MEU <li>
		listaFeitos.appendChild(tarefaFeita);
		//ADICIONO O MEU LI AO UL DE TAREFAS FEITAS
		feitos.appendChild(listaFeitos);
		//ADICIONO O ATRIBUTO TEXTO RISCADO AOS ELEMENTOS <li> QUE CRIEI
		listaFeitos.setAttribute('style','text-decoration:line-through');


};

/***********************EVENTOS****************************/



	//EVENTO DE CLICK QUE ACIONA A FUNÇÃO ADICIONAR TAREFA
	botao.addEventListener('click', adicionarTarefa);

	//EVENTO DE DIGITAÇÃO QUE QUANDO PRESSIONAMOS ENTER 
	//CLICA NO NOSSO BOTAO, ADICIONA A TAREFA E LIMPA O INPUT

	tarefa.addEventListener('keyup', function(e){
		if(e.which === 13){
			botao.click();
		}

	});

 // ACIONA A FUNÇÃO REMOVER TAREFA PARA AS TAREFAS QUE JÁ TINHAMOS 
	for ( var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener('click', removerTarefa);
		console.log(i);
	}
