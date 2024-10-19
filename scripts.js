
/*
! NEGAÇÃO (NOT)
&& CONJUNÇAO (AND)
|| DISJUNÇÃO (OR)0
? IF TRUE
: ELSE
EX: NOTA>=70?APROVADO:REPROVADO*/
//var nome = window.prompt("Qual o seu nome?")
    //nome == "luiz"?document.body.h1.write(`Seja muito bem vindo ${nome}`):document.write(`Seja muito mal vindo ${nome}`)
//alert(`Olá, ${nome}`);
//document.write(`Seja muito bem vindo ${nome}`)
//var per = Document.prompt("Qual teu nome?")

//var a = document.getElementById('butt').value;
//a.innerText = "CARREGANDO..."
/*palavra = vetor [0]
palavra.uppercase() 
tamanho = palavra.leght()

let selectedWord = words[Math.floor(Math.random() * words.length)];
*/
const palavras = ['Azulejo',

    'Azulejo',

    'Bombacha',

    'Blitz',

    'Catarro',

    'Coçar',

    'Crespo',

    'Cripta',

    'Duplex',

    'Durex',

    'Girar',

    'Gnomo',

    'Haicai',

    'Hera',

    'Hidrofobico',

    'Hifen',

    'Intacto',

    'Indigno',

    'Intrigante',

    'Jazz',

    'Lapis',

    'Marfim',

    'onix',

    'Orquidia',

    'Psiquico',

    'Quartzo',

    'Quiz',

    'Queijo',

    'Tonto',

    'Tarantula',

    'Tatu',

    'Valsa',

    'Vaporizar',

    'Vertiginoso',

    'Vitoria',

    'Vortice', 'Xilofone', 'Zepelin'];


    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavra = palavra.toUpperCase()
    tentativa = [];
    palavraCerta = [];
    display = [];
    falha = [];
    sucesso = [];
    

    tamanho = palavra.length

    for (let i = 0; i < tamanho; i++) {
        display = ["_", ...display];
        let aux = palavra[i]
        palavraCerta = [...palavraCerta, aux];
    }
    console.log(palavra)

function clicar(){
    testeFalha = false
    let pal = document.getElementById("word")
    pal.textContent = display
    let letra = document.getElementById("letra").value;
    letra = letra.toUpperCase()
    for (let i = 0; i < tamanho; i++) {
        if (palavraCerta[i] == letra) {
            display[i] = palavraCerta[i]
            pal.textContent = display
            testeFalha = true
            sucesso++
        }
        }
        
    if (!testeFalha){
        falha++
        let msgFalha = document.getElementById("falha")
        let nmrfalha = (6-falha) 
        msgFalha.textContent = "VOCÊ ERROU AINDA TEM " + nmrfalha + " TENTATIVA(S)"
        let imagem = document.getElementById("forca");
        if (falha == 1){
            imagem.src = "img/forca - Copia (2).png";            
        } else if (falha == 2){
            imagem.src = "img/forca - Copia (3).png";
        } else if (falha == 3){
            imagem.src = "img/forca - Copia (4).png";
        } else if (falha == 4){
            imagem.src = "img/forca - Copia (5).png";
        } else if (falha == 5){
            imagem.src = "img/forca - Copia (6).png";
        } 
        console.log(falha)
        if (falha >= 6){
            imagem.src = "img/forca.png"
            alert("VOCÊ PERDEU!!!")
            location.reload()
        }
    
    }
    console.log(display)
    console.log(palavraCerta)
    if (sucesso == tamanho){
        alert("VOCÊ GANHOU!!!")
        let container = document.getElementById("containerImagens");

        let novaImagem = document.createElement("img");
        novaImagem.src = "img/beijo.jfif"; 
        novaImagem.alt = "Imagem Adicionada";
        novaImagem.width = 300; 

        container.appendChild(novaImagem);
        let beijo = document.getElementById("parabens");
        beijo.textContent = "PARABENS MEU AMORRR!!!"
    }
}
   


