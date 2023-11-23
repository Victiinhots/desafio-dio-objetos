let char = {
    "nome": "Alucard",
    "idade": 31,
    "tipo": "mago",
    }
    
    function atacar(tipo){
    var tiposAtaque;
    
        if (tipo === "mago"){
        tiposAtaque = "magia"
        } else if (tipo === "guerreiro"){
        tiposAtaque = "espada"
        } else if (tipo === "monge"){
        tiposAtaque = "artes marciais"
        } else if (tipo === "ninja"){
        tiposAtaque = "shuriken"
        } else {
        tiposAtaque = "Ataque Indefinido"
        }
        
        console.log("o "+ tipo +" atacou usando " + tiposAtaque)
    }
    
    atacar(char.tipo);
    
    char.tipo = "carro";
    
    atacar(char.tipo);