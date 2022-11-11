
//Exercicio 1

function exerc1() {
    var i = 1;

    while (i <= 100) {
        if (i%3==0 && i%5==0) {

            document.getElementById("exercicio1").innerHTML = document.getElementById("exercicio1").innerHTML + "<br>" + "FizzBuzz"
            console.log("FizzBuzz");
        }
        else if (i%3==0) {
            document.getElementById("exercicio1").innerHTML = document.getElementById("exercicio1").innerHTML + "<br>" + "Fizz"
            console.log("Fizz");
        }
        else if (i%5==0) {
            document.getElementById("exercicio1").innerHTML = document.getElementById("exercicio1").innerHTML + "<br>" + "Buzz"
            console.log("Buzz");
        }
        else{
            document.getElementById("exercicio1").innerHTML = document.getElementById("exercicio1").innerHTML + "<br>" + i
            console.log(i);
        }
        
        i++;
    }
}


//Exercicio 2


function exerc2(params) {
    setInterval(function () {
    
        var d = new Date();
    
        console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    
        document.getElementById("exercicio2").innerHTML = `<h2>${d.getHours()}:${d.getMinutes().toString().padStart(2,"0")}:${d.getSeconds().toString().padStart(2,"0")}</h2>`
    
    }, 1000);
}


//Exercicio 3

var arrayExer = [
	{ produto: "Geladeira", categoria: "eletrodomestico", valor: 1432.67 },
	{ produto: "Fogão", categoria: "eletrodomestico", valor: 852.11 },
	{ produto: "Microondas", categoria: "eletrodomestico", valor: 933.42 },
	{ produto: "Liquidificador", categoria: "eletrodomestico", valor: 187.24 },
	{ produto: "Xiaomi", categoria: "smartphone", valor: 1375.66 },
	{ produto: "Iphone", categoria: "smartphone", valor: 8432.92 },
	{ produto: "Samsung", categoria: "smartphone", valor: 4221.44 },
	{ produto: "Lg", categoria: "smartphone", valor: 1224.88 },
	{ produto: "Sofá", categoria: "moveis", valor: 3745.61 },
	{ produto: "Mesa", categoria: "moveis", valor: 3111.82 },
	{ produto: "Cadeira", categoria: "moveis", valor: 329.41 }
]

function ordenarPorCategoria(array) {
    
    var categoriasSeparadas = {
        listaCategorias:[],
        categorias: []
    }

    


    array.map(function(prod) {
        var categoria = {
            nomeCategoria: "",
            produtos: []
        }
        if (!categoriasSeparadas.listaCategorias.includes(prod.categoria)) {
            //console.log(prod.categoria)
            categoriasSeparadas.listaCategorias.push(prod.categoria)
            categoria.nomeCategoria = prod.categoria
            categoria.produtos.push(prod)
            categoriasSeparadas.categorias.push(categoria)
        }
        else{
            ;
            categoriasSeparadas.categorias[categoriasSeparadas.categorias.map(e => e.nomeCategoria).indexOf(prod.categoria)].produtos.push(prod)
        }
        

    });

    return categoriasSeparadas;

}

function exerc3() {
    var produtosOrdenadosPorCategorias = ordenarPorCategoria(arrayExer);


    produtosOrdenadosPorCategorias.categorias.map(function(cat) {
        
        var valorMaximo = Math.max(...cat.produtos.map(o=>o.valor));

        cat.produtos.map(function(prod) {

            if (prod.valor == valorMaximo) {
                console.log(prod.produto)

                document.getElementById("exercicio3").innerHTML = document.getElementById("exercicio3").innerHTML + "<h2><br>" + prod.produto + "</h2>"
            }
        });



    });
}


//Exercicio 4


var produtosOrdenadosPorCategorias = ordenarPorCategoria(arrayExer);

function mostrarDescontos(categoria) {
    produtosOrdenadosPorCategorias.categorias[produtosOrdenadosPorCategorias.categorias.map(e => e.nomeCategoria).indexOf(categoria)].produtos.map(function(prod) {
    
        if (prod.valor > 1000) {
            document.getElementById("exercicio4").innerHTML = document.getElementById("exercicio4").innerHTML + `Nome do produto: ${prod.produto} - valor com desconto de 10%: ${(prod.valor - prod.valor * 0.1).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}<br>`
        }
        else if (prod.valor > 500) {
            document.getElementById("exercicio4").innerHTML = document.getElementById("exercicio4").innerHTML + `Nome do produto: ${prod.produto} - valor com desconto de 7%: ${(prod.valor - prod.valor * 0.07).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}<br>`
        }
        else if (prod.valor < 500) {
            document.getElementById("exercicio4").innerHTML = document.getElementById("exercicio4").innerHTML + `Nome do produto: ${prod.produto} - valor com desconto de 5%: ${(prod.valor - prod.valor * 0.05).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}<br>`
        }
    
    });
}

function exerc4() {
    mostrarDescontos("eletrodomestico")
}



//Exercicio 5



function exerc5() {
    produtosOrdenadosPorCategorias.categorias.map(function(cat) {
        var valorTotal = 0
        cat.produtos.map(function(prod) {
        
            valorTotal = valorTotal + prod.valor
            
        });
    
        console.log(`Nome da categoria: ${cat.nomeCategoria} - valor médio dos produtos: ${valorTotal / cat.produtos.length}`)
        document.getElementById("exercicio5").innerHTML = document.getElementById("exercicio5").innerHTML + `Nome da categoria: ${cat.nomeCategoria} - valor médio dos produtos: ${(valorTotal / cat.produtos.length).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}<br>`
    
    
    });
}


//mostrarMediaPorCategoria()