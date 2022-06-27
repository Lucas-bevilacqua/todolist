var tarefas = [ ] // Armazena as tarefas


// Monta a lista novamente, atualizada.
function atualizalista() {
    var listadetarefas = document.getElementById("lista-de-tarefas")
    var setiverul = document.getElementById("novaul")

    var removendoul = listadetarefas.removeChild(setiverul)
    var criarul = document.createElement('ul')
    listadetarefas.appendChild(criarul)
    criarul.id = "novaul"
    var nova_ul = document.getElementById("novaul")


    for (c = 0; c < tarefas.length; c++) {
        var novali = document.createElement('li')
        novali.innerHTML += `<input type="checkbox" onclick="tarefafeita(${c})" name="feito" id="feito">
        <span class="texto-da-tarefa${c}">${tarefas[c]}</span>
        <div>
            <button class="edit" id="edit""><i class="fa-solid fa-pen-to-square"></i></button>
            <button type="button" onclick="excluirtarefa(${c})" class="deletetarefa${c}" id="${c}" ><i class="fa-solid fa-trash-can"></i></button>
        </div>`

        nova_ul.appendChild(novali)

    }
}
 
// Adiciona uma tarefa nova
function criartarefa() {
    var novatarefa = document.getElementById("input-nova-tarefa")
    tarefas.push(novatarefa.value)
    atualizalista() ///// Chama a função para atualizar a lista com a terafa nova
    document.getElementById('input-nova-tarefa').value='';

    }


// Envia a tarefa nova quando for apertado o enter do telclado
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const btn = document.getElementById("btn-nova-tarefa")

        btn.click();
    }
})

// Exclui uma tarefa
function excluirtarefa(Num) {
    tarefas.splice(Num, 1)
    atualizalista() 
}

// Tarefa feita acionado quando apertado o select
function tarefafeita(Num) {
    var buscartarefa = tarefas[Num]
    var tarefacomstrike = buscartarefa.strike()
    tarefas[Num] = tarefacomstrike
    atualizalista() 

    console.log(buscartarefa)
}


const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
    
}

const btn = document.querySelector('.edit')
btn.addEventListener('click', switchModal))

window.onclick = function(event) {
        const modal = document.querySelector('.modal')
    if (event.target == modal) {
        switchModal()
    }
}

