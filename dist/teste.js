"use strict";

//Array de objetos com nome e nota dos alunos.

var alunos = [{
  nome: 'Pedro',
  nota: 7.5
}, {
  nome: 'Ana',
  nota: 5.5
}, {
  nome: 'Julia',
  nota: 6.0
}];

//Função para filtrar alunos com nota maior ou igual a 6.

function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

//Chamada da função e exebicão do resultado.

var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);