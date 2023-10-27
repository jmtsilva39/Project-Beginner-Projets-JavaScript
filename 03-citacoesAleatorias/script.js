function generate(){

    var quotes = {
        "- George Orwell": '“War is peace, Freedom is slavery.Ignorance is strength.”',
        "― Pierce Brown, Red Rising": '"Man cannot be freed by the same injustice that enslaved it.”',
        "― Aaron Lauritsen": '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "- Falcão": "Homem é homem, menino é menino, macaco é macaco e viado é viado",
        "Enéias Carneiro": '“A bomba atômica é fundamental. Não para jogar em ninguém, mas para sermos respeitados. É o que em geopolítica se chama dissuasão estratégica. Isto quer dizer: deixem-nos em paz. Quando se tem a bomba atômica senta-se para conversar em condições de igualdade. O mesmo acontece com as Forças Armadas. Se eleito, irei triplicar o seu efetivo. Elas são o braço armado do povo.”',
        "Olavo de Carvalho": '"Ser odiado por multidões de ignorante é o preço de não ser um deles"',
        "Olavo de Carvalho": '"Moderação na defesa da verdade é serviço prestado à mentira."',
        "Olavo de Carvalho": '"O homem medíocre não acredita no que vê, mas no que aprende a dizer."',
        "Olavo de Carvalho": '"Conservadorismo significa fidelidade, constância, firmeza. Não é coisa para homens de geleia."',
        "Olavo de Carvalho": '"Os fortes não têm medo de encarar o pior: os fracos fogem dele porque sua mera visão os esmaga."',
        "Olavo de Carvalho": '"Se cometi tantos erros, se tão rico e variado é o repertório dos meus pecados, para que inventar mais um, acusando-me logo daquilo que não fiz?"',
        "Desconhecido": '"O mundo é redondo, mas está ficando cada vez mais quadrado"',
        "Desconhecido": '"O dinheiro não traz felicidade, mas pelo menos ajuda a pagar as contas da terapia."',
        "Desconhecido": '"Casamento é como um sapato novo: machuca no começo, mas se for bem cuidado, dura para sempre."',
        "Tom Jobim": '"O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades"',
        "Jô Soares": '"Era tão azarado que, se quisesse achar uma agulha no palheiro, era só sentar-se nele"',
        "Monica Araujo": '"Quer Passar na prova toma atroveram, tomou passa!"',
        "Socrates": '"O ideal no casamento é que a mulher seja cega e o homem surdo"',
        "Socrates": '"Sábio é aquele que conhece os limites da própria ignorância"',
        "Desconhecido": '"O único exercício físico que eu faço é correr atrás de dinheiro"',
        "Desconhecido": 'Quando uma pessoa diz - "Vamos dar um tempo" - Olha só a tradução: "Vou procurar alguém melhor que você, se eu não encontrar a gente volta" ',
        "Desconhecido": '"Não leve as redes sociais tão a sério, a maioria das opniões são de pessoas que estão sentadas no vaso cagando"',
        "CS Lewis": 'I was not born to be free --- I was born to adore and obey'
    }

    var authors = Object.keys(quotes);
    var authors = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[authors];
    
    
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = authors;

}

