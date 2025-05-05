// listar Alunos
listarAlunos();
// listar Cursos


async function listarAlunos() {
    const url = "http://localhost:3000/alunos";


    let resposta = await fetch(url);
    console.log(resposta);

    let alunosJS = await resposta.json();
    // apenas para testar
    //console.log(alunosJS);
    //console.log(alunosJS[3].nome);

    //identificar a lista que quero preencher
    const listaalunos = document.getElementById("listaalunos");
    //limpar a lista
    listaalunos.innerHTML = "";

    for (aluno of alunosJS) {
        let novoli = document.createElement("li");
        let novotexto = document.createElement("span");
        novotexto.innerHTML = aluno.nome + " " + aluno.apelido + " " + aluno.cursoid;
        // colocar botao em cada aluno
        
        // criar botao
        let novobotao = document.createElement("button");
        novobotao.setAttribute("data-alunoid", aluno.id);
        novobotao.innerHTML = "Remover Aluno";

        novobotao.addEventListener("click", apagarAlunos);

        novoli.appendChild(novotexto);
        novoli.appendChild(novobotao);

        listaalunos.appendChild(novoli);

    }
}

async function apagarAlunos(evento) {
    const botaoclicado = evento.target;
    const idAlunoRemover = botaoclicado.dataset.alunoid;

    //console.log(botaoclicado.dataset.alunoid);
    const url = "http://localhost:3000/alunos/" + idAlunoRemover;

    let resposta = await fetch(url, { method: "DELETE" });
    listarAlunos();

}


