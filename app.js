//console.dir(livros)
//console.log(livros[2])
//livros[3] = "religiosos"
//console.dir(livros)
//livros.push("fantasia")
//console.dir(livros)

let livrosCategoria = new Array()
livrosCategoria.push("aventura")
livrosCategoria.push("romance")
livrosCategoria.push("religioso")
livrosCategoria.push("ação")
livrosCategoria.push("aventura")
livrosCategoria.push("infantil")
console.dir(livrosCategoria)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[4] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[5] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>" 





