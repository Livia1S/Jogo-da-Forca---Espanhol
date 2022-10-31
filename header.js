const letras = document.querySelectorAll("[data-letra]");
const iniciar = document.querySelector("#iniciar");
//const busca = document.querySelector(".livro");
const mensagem = document.querySelector(".frase");
const p = document.querySelector(".sugestao-titulo");
const sessao = document.querySelector(".palavras");

//const dialog = document.querySelector("dialog");
//console.log(dialog);
//const cancelButton = document.querySelector("#teste_inicio");

function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('')
	elemento.innerHTML = ''
	textoArray.forEach((letra, i) => {
		setTimeout(function() {
			elemento.innerHTML += letra
		}, 75 * i)
	})
}
const mejores = document.querySelector('h2')
typeWriter(mejores)


let verf = "";

const clickDisable = document.querySelector(".botoes");

const canvas = document.getElementById("stick");
const ctx = canvas.getContext("2d");

const alfabeto = "aãáâbcçdeéêfghiíjklmnñoõóôpqrstuúvwxyz ";

const palavraSecreta = [
  (plv001 = {
    livro: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
  }),

  (plv002 = {
    livro: "El Señor de los Anillos",
    autor: "J. R. R. Tolkien",
  }),

  (plv003 = {
    livro: "Un Mundo Feliz",
    autor: "Aldous Huxley",
  }),

  (plv004 = {
    livro: "Orgullo y Prejuicio",
    autor: "Jane Austen",
  }),

  (plv005 = {
    livro: "Crimen y Castigo",
    autor: "Fiódor Dostoyevski",
  }),

  (plv006 = {
    livro: "Lolita",
    autor: "Vladimir Nabokov",
  }),

  (plv007 = {
    livro: "Ulises",
    autor: "James Joyce",
  }),

  (plv008 = {
    livro: "Madame Bovary",
    autor: "Gustave Flaubert",
  }),

  (plv009 = {
    livro: "En Busca del Tiempo Perdido",
    autor: "Marcel Proust",
  }),

  (plv010 = {
    livro: "Don Quijote de La Mancha",
    autor: "Miguel de Cervantes",
  }),

  (plv011 = {
    livro: "El Retrato de Dorian Gray",
    autor: "Oscar Wilde",
  }),

  (plv012 = {
    livro: "Anna Karenina",
    autor: "Lev Tolstói",
  }),

  (plv013 = {
    livro: "El Principito",
    autor: "Antoine de Saint-Exupéry",
  }),

  (plv014 = {
    livro: "El Proceso",
    autor: "Franz Kafka",
  }),

  (plv015 = {
    livro: "El Ruido y la Furia",
    autor: "William Faulkner",
  }),

  (plv016 = {
    livro: "Hamlet",
    autor: "William Shakespeare",
  }),

  (plv017 = {
    livro: "Lo que el Viento se Llevó",
    autor: "Margaret Mitchell",
  }),

  (plv018 = {
    livro: "La Odisea",
    autor: "Homero",
  }),

  (plv019 = {
    livro: "Las Uvas de la Ira",
    autor: "John Steinbeck",
  }),

  (plv020 = {
    livro: "El Guardián Entre el Centeno",
    autor: "J. D. Salinger",
  }),

  (plv021 = {
    livro: "Cumbres Borrascosas",
    autor: "Emily Bronte",
  }),

  (plv022 = {
    livro: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
  }),

  (plv023 = {
    livro: "Mil Soles Espléndidos",
    autor: "Khaled Hosseini",
  }),

  (plv024 = {
    livro: "Alicia en el País de las Maravillas",
    autor: "Lewis Carroll",
  }),

  (plv025 = {
    livro: "Rebelión en la Granja",
    autor: "George Orwell",
  }),

  (plv026 = {
    livro: "Los Pilares de la Tierra",
    autor: "Ken Follett",
  }),

  (plv027 = {
    livro: "Guerra y Paz",
    autor: "Lev Tolstói",
  }),

  (plv028 = {
    livro: "Memorias de Una Geisha",
    autor: "Arthur Golden",
  }),

  (plv029 = {
    livro: "Frankenstein",
    autor: "Mary Shelley",
  }),

  (plv030 = {
    livro: "Los Viajes de Gulliver",
    autor: "Jonathan Swift",
  }),

  (plv031 = {
    livro: "La Ladrona de Libros",
    autor: "Markus Zusak",
  }),

  (plv032 = {
    livro: "Matar a un Ruiseñor",
    autor: "Harper Lee",
  }),

  (plv033 = {
    livro: "El Conde de Montecristo",
    autor: "Alejandro Dumas",
  }),

  (plv034 = {
    livro: "Los Juegos del Hambre",
    autor: "Suzanne Collins",
  }),

  (plv035 = {
    livro: "Harry Potter",
    autor: "J. K. Rowling",
  }),

  (plv036 = {
    livro: "El Señor de las Moscas",
    autor: "William Golding",
  }),

  (plv037 = {
    livro: "Moby Dick",
    autor: "Herman Melville",
  }),

  (plv038 = {
    livro: "Los Miserables",
    autor: "Victor Hugo",
  }),

  (plv039 = {
    livro: "Las Aventuras de Huckleberry Finn",
    autor: "Mark Twain",
  }),

  (plv040 = {
    livro: "Tristram Shandy",
    autor: "Laurence Sterne",
  }),

  (plv041 = {
    livro: "Drácula",
    autor: "Bram Stoker",
  }),

  (plv042 = {
    livro: "El Nombre de la Rosa",
    autor: "Umberto Eco",
  }),

  (plv043 = {
    livro: "El Extranjero",
    autor: "Albert Camus",
  }),

  (plv044 = {
    livro: "Los Hermanos Karamazov",
    autor: "Fiódor Dostoyevski",
  }),

  (plv045 = {
    livro: "El Amor en los Tiempos del Cólera",
    autor: "Gabriel García Márquez",
  }),

  (plv046 = {
    livro: "Ensayo Sobre la Ceguera",
    autor: "José Saramago",
  }),

  (plv047 = {
    livro: "Las Crónicas de Narnia",
    autor: "C. S. Lewis",
  }),

  (plv048 = {
    livro: "Los Renglones Torcidos de Dios",
    autor: "Torcuato Luca de Tena",
  }),

  (plv049 = {
    livro: "Abaddón o Exterminador",
    autor: "Ernesto Sabato",
  }),

  (plv050 = {
    livro: "La Sombra del Viento",
    autor: "Carlos Ruiz Zafón",
  }),

  (plv051 = {
    livro: "Viaje al Fin de la Noche",
    autor: "Louis-Ferdinand Céline",
  }),

  (plv052 = {
    livro: "El Juego de Ender",
    autor: "Orson Scott Card",
  }),

  (plv053 = {
    livro: "La Montaña Mágica",
    autor: "Thomas Mann",
  }),

  (plv054 = {
    livro: "El Psicoanalista",
    autor: "John Katzenbach",
  }),

  (plv055 = {
    livro: "Por Quién Doblan las Campanas",
    autor: "Ernest Hemingway",
  }),

  (plv056 = {
    livro: "El Extraño Caso del Dr Jekyll y Mr Hyde",
    autor: "Robert Louis Stevenson",
  }),

  (plv057 = {
    livro: "La Metamorfosis",
    autor: "Franz Kafka",
  }),

  (plv058 = {
    livro: "La Telaraña de Carlota",
    autor: "E. B. White",
  }),

  (plv059 = {
    livro: "La Divina Comedia",
    autor: "Dante Alighieri",
  }),

  (plv060 = {
    livro: "La Señora Dalloway",
    autor: "Virginia Woolf",
  }),

  (plv061 = {
    livro: "En el Camino",
    autor: "Jack kerouac",
  }),

  (plv062 = {
    livro: "La Ilíada",
    autor: "Homero",
  }),

  (plv063 = {
    livro: "Jane Eyre",
    autor: "Charlotte Bronte",
  }),

  (plv064 = {
    livro: "El Diario de Ana Frank",
    autor: "Ana Frank",
  }),

  (plv065 = {
    livro: "La Insoportable Levedad del Ser",
    autor: "Milan Kundera",
  }),

  (plv066 = {
    livro: "El Perfume",
    autor: "Patrick Suskind",
  }),

  (plv067 = {
    livro: "Crónica de una Muerte Anunciada",
    autor: "Gabriel García Márquez",
  }),

  (plv068 = {
    livro: "La Casa de los Espíritus",
    autor: "Isabel Allende",
  }),

  (plv069 = {
    livro: "Mientras Agonizo",
    autor: "William Faulkner",
  }),

  (plv070 = {
    livro: "La Isla del Tesoro",
    autor: "Robert Louis Stevenson",
  }),

  (plv071 = {
    livro: "Todo se Desmorona",
    autor: "Chinua Achebe",
  }),

  (plv072 = {
    livro: "Emma",
    autor: "Jane Austen",
  }),

  (plv073 = {
    livro: "Pasaje a la India",
    autor: "E. M. Forster",
  }),

  (plv074 = {
    livro: "Ficciones",
    autor: "Jorge Luis Borges",
  }),

  (plv075 = {
    livro: "A Sangre Fría",
    autor: "Truman Capote",
  }),

  (plv076 = {
    livro: "El Corazón es un Cazador Solitario",
    autor: "Carson McCullers",
  }),

  (plv077 = {
    livro: "El Rey Lear",
    autor: "William Shakespeare",
  }),

  (plv078 = {
    livro: "Tormenta de Espada",
    autor: "George R. R. Martin",
  }),

  (plv079 = {
    livro: "La Catedral del Mar",
    autor: "Ildefonso Falcones",
  }),

  (plv080 = {
    livro: "El Progreso del Peregrino",
    autor: "John Bunyan",
  }),

  (plv081 = {
    livro: "El Corazón de las Tinieblas",
    autor: "Joseph Conrad",
  }),

  (plv082 = {
    livro: "Robinson Crusoe",
    autor: "Daniel Defoe",
  }),

  (plv083 = {
    livro: "David Copperfield",
    autor: "Charles Dickens",
  }),

  (plv084 = {
    livro: "Grandes Esperanzas",
    autor: "Charles Dickens",
  }),

  (plv085 = {
    livro: "El Idiota",
    autor: "Fiódor Dostoyevski",
  }),

  (plv086 = {
    livro: "Los Endemoniados",
    autor: "Fiódor Dostoyevski",
  }),

  (plv087 = {
    livro: "El Hombre Invisible",
    autor: "H. G. Wells",
  }),

  (plv088 = {
    livro: "Medea",
    autor: "Eurípides",
  }),

  (plv089 = {
    livro: "La Educación Sentimental",
    autor: "Gustave Flaubert",
  }),

  (plv090 = {
    livro: "Romancero Gitano",
    autor: "Federico García Lorca",
  }),

  (plv091 = {
    livro: "Fausto",
    autor: "Goethe",
  }),

  (plv092 = {
    livro: "Las Almas Muertas",
    autor: "Nikolái Gógol",
  }),

  (plv093 = {
    livro: "El Tambor de Hojalata",
    autor: "Gunter Grass",
  }),

  (plv094 = {
    livro: "Gran Sertón Veredas",
    autor: "Guimarães Rosa",
  }),

  (plv095 = {
    livro: "Hambre",
    autor: "Knut Hamsun",
  }),

  (plv096 = {
    livro: "El Viejo y el Mar",
    autor: "Ernest Hemingway",
  }),

  (plv097 = {
    livro: "Casa de Muñecas",
    autor: "Henrik Ibsen",
  }),

  (plv098 = {
    livro: "Catedral",
    autor: "Raymond Carver",
  }),

  (plv099 = {
    livro: "El Castillo",
    autor: "Franz Kafka",
  }),

  (plv100 = {
    livro: "El Rumor de la Montaña",
    autor: "Yasunari Kawabata",
  }),

  (plv101 = {
    livro: "Zorba el Griego",
    autor: "Nikos Kazantzakis",
  }),

  (plv102 = {
    livro: "Hijos y Amantes",
    autor: "D. H. Lawrence",
  }),

  (plv103 = {
    livro: "Gente Independiente",
    autor: "Halldór Laxness",
  }),

  (plv104 = {
    livro: "El Cuaderno Dorado",
    autor: "Doris Lessing",
  }),

  (plv105 = {
    livro: "Diario de un Loco",
    autor: "Nikolái Gógol",
  }),

  (plv106 = {
    livro: "Hijos de Nuestro Barrio",
    autor: "Naguib Mahfuz",
  }),

  (plv107 = {
    livro: "Los Buddenbrook",
    autor: "Thomas Mann",
  }),

  (plv108 = {
    livro: "Intérprete de emociones",
    autor: "Jhumpa Lahiri",
  }),

  (plv109 = {
    livro: "Beloved",
    autor: "Toni Morrison",
  }),

  (plv110 = {
    livro: "La Novela de Genji",
    autor: "Murasaki Shikibu",
  }),

  (plv111 = {
    livro: "El Hombre Sin Atributos",
    autor: "Robert Musil",
  }),

  (plv112 = {
    livro: "Libro del Desasosiego",
    autor: "Fernando Pessoa",
  }),

  (plv113 = {
    livro: "Cuentos Completos",
    autor: "Jorge Luis Borges",
  }),

  (plv114 = {
    livro: "Pedro Páramo",
    autor: "Juan Rulfo",
  }),

  (plv115 = {
    livro: "Hijos de la Medianoche",
    autor: "Salman Rushdie",
  }),

  (plv116 = {
    livro: "Rojo y Negro",
    autor: "Stendhal",
  }),

  (plv117 = {
    livro: "La Conciencia de Zeno",
    autor: "Italo Svevo",
  }),

  (plv118 = {
    livro: "La Muerte de Iván Ilich",
    autor: "Lev Tolstói",
  }),

  (plv119 = {
    livro: "La Eneida",
    autor: "Virgilio",
  }),

  (plv120 = {
    livro: "Hojas de Hierba",
    autor: "Walt Whitman",
  }),

  (plv121 = {
    livro: "Al Faro",
    autor: "Virginia Woolf",
  }),

  (plv122 = {
    livro: "Memorias de Adriano",
    autor: "Marguerite Yourcenar",
  }),

  (plv123 = {
    livro: "El Lazarillo de Tormes",
    autor: "Anónimo",
  }),

  (plv124 = {
    livro: "Vía Revolucionaria",
    autor: "Richard Yates",
  }),

  (plv125 = {
    livro: "Dune",
    autor: "Frank Herbert",
  }),

  (plv126 = {
    livro: "Alguien Voló Sobre el Nido del Cuco",
    autor: "Ken Kesey",
  }),

  (plv127 = {
    livro: "Romeo y Julieta",
    autor: "William Shakespeare",
  }),

  (plv128 = {
    livro: "Volverás a Región",
    autor: "Juan Benet",
  }),

  (plv129 = {
    livro: "Americanah",
    autor: "Chiamamanda Adichie",
  }),

  (plv130 = {
    livro: "Casa Tomada",
    autor: "Julio Cortázar",
  }),

  (plv131 = {
    livro: "Asesinato en el Orient Express",
    autor: "Agatha Christie",
  }),

  (plv132 = {
    livro: "La Campana de Cristal",
    autor: "Sylvia Plath",
  }),

  (plv133 = {
    livro: "Cinco Horas con Mario",
    autor: "Miguel Delibes",
  }),

  (plv134 = {
    livro: "El Cuento de la Criada",
    autor: "Margaret Atwood",
  }),

  (plv135 = {
    livro: "Cuento de Navidad",
    autor: "Charles Dickens",
  }),

  (plv136 = {
    livro: "Desayuno en Tiffanys",
    autor: "Truman Capote",
  }),

  (plv137 = {
    livro: "Nada",
    autor: "Carmen Laforet",
  }),

  (plv138 = {
    livro: "Mujercitas",
    autor: "Louisa May Alcott",
  }),

  (plv139 = {
    livro: "Niebla",
    autor: "Miguel de Unamuno",
  }),

  (plv140 = {
    livro: "Rayuela",
    autor: "Julio Cortázar",
  }),

  (plv141 = {
    livro: "La Realidad y el Deseo",
    autor: "Luis Cernuda",
  }),

  (plv142 = {
    livro: "Rebeca",
    autor: "Daphne Du Maurier",
  }),

  (plv143 = {
    livro: "La Tregua",
    autor: "Mario Benedetti",
  }),

  (plv144 = {
    livro: "Viento del Pueblo",
    autor: "Miguel Hernández",
  }),

  (plv145 = {
    livro: "La Vida de las Mujeres",
    autor: "Alice Munro",
  }),

  (plv146 = {
    livro: "La Casa de Bernarda Alba",
    autor: "Federico García Lorca",
  }),

  (plv147 = {
    livro: "Los Santos Inocentes",
    autor: "Miguel Delibes",
  }),

  (plv148 = {
    livro: "Una Habitación Propia",
    autor: "Virginia Woolf",
  }),

  (plv149 = {
    livro: "Los Pazos de Ulloa",
    autor: "Emilia Pardo Bazán",
  }),

  (plv150 = {
    livro: "Las Mil y una Noches",
    autor: "Anónimo",
  }),

  (plv151 = {
    livro: "Limónov",
    autor: "Emmanuel Carrère",
  }),

  (plv152 = {
    livro: "El Fantasma de la Ópera",
    autor: "Gastón Leroux",
  }),

  (plv153 = {
    livro: "Relatos de lo Inesperado",
    autor: "Roald Dahl",
  }),

  (plv154 = {
    livro: "La Senda del Perdedor",
    autor: "Charles Bukowski",
  }),

  (plv155 = {
    livro: "Persépolis",
    autor: "Marjane Satrapi",
  }),

  (plv156 = {
    livro: "El Libro de los Abrazos",
    autor: "Eduardo Galeano",
  }),

  (plv157 = {
    livro: "La Sonrisa Etrusca",
    autor: "José Luis Sampedro",
  }),

  (plv158 = {
    livro: "Manual para Mujeres de la Limpieza",
    autor: "Lucia Berlin",
  }),

  (plv159 = {
    livro: "El Segundo Sexo",
    autor: "Simone de Beauvoir",
  }),

  (plv160 = {
    livro: "La Familia de Pascual Duarte",
    autor: "Camilo José Cela",
  }),

  (plv161 = {
    livro: "El Resplandor",
    autor: "Stephen King",
  }),

  (plv162 = {
    livro: "Maus",
    autor: "Art Spiegelman",
  }),

  (plv163 = {
    livro: "Fortunata y Jacinta",
    autor: "Benito Pérez Galdós",
  }),

  (plv164 = {
    livro: "Martín Fierro",
    autor: "José Hernández",
  }),

  (plv165 = {
    livro: "Plata Quemada",
    autor: "Ricardo Piglia",
  }),

  (plv166 = {
    livro: "Facundo",
    autor: "Domingo F. Sarmiento",
  }),

  (plv167 = {
    livro: "Don Segundo Sombra",
    autor: "Ricardo Guiraldes",
  }),

  (plv168 = {
    livro: "Los Siete Locos",
    autor: "Roberto Arlt",
  }),

  (plv169 = {
    livro: "La Invención de Morel",
    autor: "Adolfo Bioy Casares",
  }),

  (plv170 = {
    livro: "Adán Buenosayres",
    autor: "Leopoldo Marechal",
  }),

  (plv171 = {
    livro: "El Túnel",
    autor: "Ernesto Sabato",
  }),

  (plv172 = {
    livro: "El Aleph",
    autor: "Jorge Luis Borges",
  }),

  (plv173 = {
    livro: "El Sueño de los Héroes",
    autor: "Adolfo Bioy Casares",
  }),

  (plv174 = {
    livro: "Rosaura a las Diez",
    autor: "Marco Denevi",
  }),

  (plv175 = {
    livro: "Las Armas Secretas",
    autor: "Julio Cortázar",
  }),

  (plv176 = {
    livro: "Sobre Héroes y Tumbas",
    autor: "Ernesto Sabato",
  }),

  (plv177 = {
    livro: "Boquitas Pintadas",
    autor: "Manuel Puig",
  }),

  (plv178 = {
    livro: "El Beso de la Mujer Araña",
    autor: "Manuel Puig",
  }),

  (plv179 = {
    livro: "Bomarzo",
    autor: "Manuel Mujica-Lainez",
  }),

  (plv180 = {
    livro: "Respiración Artificial",
    autor: "Ricardo Piglia",
  }),

  (plv181 = {
    livro: "El Entenado",
    autor: "Juan José Saer",
  }),

  (plv182 = {
    livro: "Santa Evita",
    autor: "Tomás Eloy Martínez",
  }),

  (plv183 = {
    livro: "Cicatrices",
    autor: "Juan José Saer",
  }),

  (plv184 = {
    livro: "Cuentos de Amor de Locura y de Muerte",
    autor: "Horacio Quiroga",
  }),

  (plv185 = {
    livro: "Pájaros en la Boca",
    autor: "Samanta Schweblin",
  }),

  (plv186 = {
    livro: "El Sexto",
    autor: "José María Arguedas",
  }),

  (plv187 = {
    livro: "Conversación en la Catedral",
    autor: "Mario Vargas Llosa",
  }),

  (plv188 = {
    livro: "La Ciudad y los Perros",
    autor: "Mario Vargas Llosa",
  }),

  (plv189 = {
    livro: "Los Heraldos Negros",
    autor: "César Vallejo",
  }),

  (plv190 = {
    livro: "Un Mundo para Julius",
    autor: "Alfredo Bryce Echenique",
  }),

  (plv191 = {
    livro: "La Palabra del Mudo",
    autor: "Julio Ramón Ribeyro",
  }),

  (plv192 = {
    livro: "La Distancia que nos Separa",
    autor: "Renato Cisneros",
  }),

  (plv193 = {
    livro: "La Fiesta del Chivo",
    autor: "Mario Vargas Llosa",
  }),

  (plv194 = {
    livro: "Abril Rojo",
    autor: "Santiago Roncagliolo",
  }),

  (plv195 = {
    livro: "El Hombre de la Azotea",
    autor: "Abelardo Sánchez León",
  }),

  (plv196 = {
    livro: "Otras Tardes",
    autor: "Luis Loayza",
  }),

  (plv197 = {
    livro: "Los Ríos Profundos",
    autor: "José María Arguedas",
  }),

  (plv198 = {
    livro: "Delirio",
    autor: "Laura Restrepo",
  }),

  (plv199 = {
    livro: "La Tejedora de Coronas",
    autor: "Germán Espinosa",
  }),

  (plv200 = {
    livro: "La Casa Grande",
    autor: "Álvaro Cepeda Samudio",
  }),

  (plv201 = {
    livro: "Las Estrellas son Negras",
    autor: "Arnoldo Palacios",
  }),

  (plv202 = {
    livro: "Objetos Frágiles",
    autor: "Neil Gaiman",
  }),

  (plv203 = {
    livro: "La Vida Breve",
    autor: "Juan Carlos Onetti",
  }),

  (plv204 = {
    livro: "El Pozo",
    autor: "Juan Carlos Onetti",
  }),

  (plv205 = {
    livro: "Las Cartas que no Llegaron",
    autor: "Mauricio Rosencof",
  }),

  (plv206 = {
    livro: "Las Venas Abiertas de América Latina",
    autor: "Eduardo Galeano",
  }),

  (plv207 = {
    livro: "Gracias por el Fuego",
    autor: "Mario Benedetti",
  }),

  (plv208 = {
    livro: "El Reino de Este Mundo",
    autor: "Alejo Carpentier",
  }),

  (plv209 = {
    livro: "La Maravillosa Vida Breve de Óscar Wao",
    autor: "Junot Díaz",
  }),

  (plv210 = {
    livro: "Doña Bárbara",
    autor: "Rómulo Gallegos",
  }),

  (plv211 = {
    livro: "María",
    autor: "Jorge Isaacs",
  }),

  (plv212 = {
    livro: "El Laberinto de la Soledad",
    autor: "Octavio Paz",
  }),

  (plv213 = {
    livro: "Aura",
    autor: "Carlos Fuentes",
  }),

  (plv214 = {
    livro: "El Llano en Llamas",
    autor: "Juan Rulfo",
  }),

  (plv215 = {
    livro: "Los Pasos Perdidos",
    autor: "Alejo Carpentier",
  }),

  (plv216 = {
    livro: "Historias de Cronopios y de Famas",
    autor: "Julio Cortázar",
  }),

  (plv217 = {
    livro: "El Murmullo de las Abejas",
    autor: "Sofía Segovia",
  }),

  (plv218 = {
    livro: "El País de la Canela",
    autor: "William Ospina",
  }),

  (plv219 = {
    livro: "Los de Abajo",
    autor: "Mariano Azuela",
  }),

  (plv220 = {
    livro: "Las Tierras Flacas",
    autor: "Agustín Yáñez",
  }),

  (plv221 = {
    livro: "El Salvaje",
    autor: "Guillermo Arriaga",
  }),

  (plv222 = {
    livro: "El Señor Presidente",
    autor: "Miguel Ángel Asturias",
  }),

  (plv223 = {
    livro: "Una Novela Criminal",
    autor: "Jorge Volpi",
  }),

  (plv224 = {
    livro: "La Región más Transparente",
    autor: "Carlos Fuentes",
  }),

  (plv225 = {
    livro: "Un Beso de Dick",
    autor: "Fernando Molano Vargas",
  }),

  (plv226 = {
    livro: "Los Adioses",
    autor: "Juan Carlos Onetti",
  }),

  (plv227 = {
    livro: "Los Años con Laura Díaz",
    autor: "Carlos Fuentes",
  }),

  (plv228 = {
    livro: "El Hombre que Amaba a los Perros",
    autor: "Leonardo Padura",
  }),

  (plv229 = {
    livro: "Así es Como la Pierdes",
    autor: "Junot Díaz",
  }),

  (plv230 = {
    livro: "La Casa Verde",
    autor: "Mario Vargas Llosa",
  }),

  (plv231 = {
    livro: "Trilogía Sucia de la Habana",
    autor: "Pedro Juan Gutiérrez",
  }),

  (plv232 = {
    livro: "Deshoras",
    autor: "Julio Cortázar",
  }),

  (plv233 = {
    livro: "Diario de un Hombre Superfluo",
    autor: "Iván Turguénev",
  }),

  (plv234 = {
    livro: "Distancia de Rescate",
    autor: "Samanta Schweblin",
  }),

  (plv235 = {
    livro: "El Corazón Helado",
    autor: "Almudena Grandes",
  }),

  (plv236 = {
    livro: "El Elegido",
    autor: "Thomas Mann",
  }),

  (plv237 = {
    livro: "El Vientre de la Ballena",
    autor: "Javier Cercas",
  }),

  (plv238 = {
    livro: "Hijo de Ladrón",
    autor: "Manuel Rojas",
  }),

  (plv239 = {
    livro: "La Vida es Sueño",
    autor: "Pedro Calderón de La Barca",
  }),

  (plv240 = {
    livro: "La Vida Exagerada de Martín Romaña",
    autor: "Alfredo Bryce Echenique",
  }),

  (plv241 = {
    livro: "Los Lanzallamas",
    autor: "Roberto Arlt",
  }),

  (plv242 = {
    livro: "Los Mares del Sur",
    autor: "Manuel Vázquez Montalbán",
  }),

  (plv243 = {
    livro: "Una Historia Ridícula",
    autor: "Luis Landero",
  }),

  (plv244 = {
    livro: "Ceniza en la Boca",
    autor: "Brenda Navarro",
  }),

  (plv245 = {
    livro: "El Coronel no Tiene Quien le Escriba",
    autor: "Gabriel García Márquez",
  }),

  (plv246 = {
    livro: "La Ratonera",
    autor: "Agatha Christie",
  }),

  (plv247 = {
    livro: "Una Casa Llena de Gente",
    autor: "Mariana Sández",
  }),

  (plv248 = {
    livro: "La de Bringas",
    autor: "Benito Pérez Galdós",
  }),

  (plv249 = {
    livro: "Seda",
    autor: "Alessandro Baricco",
  }),

  (plv250 = {
    livro: "El Decamerón",
    autor: "Giovanni Boccaccio",
  }),

  (plv251 = {
    livro: "Molloy",
    autor: "Samuel Beckett",
  }),

  (plv252 = {
    livro: "Nostromo",
    autor: "Joseph Conrad",
  }),

  (plv253 = {
    livro: "La Hija del Caníbal",
    autor: "Rosa Montero",
  }),

  (plv254 = {
    livro: "El Sentido de un Final",
    autor: "Julian Barnes",
  }),

  (plv255 = {
    livro: "Confesiones de una Máscara",
    autor: "Yukio Mishima",
  }),

  (plv256 = {
    livro: "Crónicas Marcianas",
    autor: "Ray Bradbury",
  }),

  (plv257 = {
    livro: "Los Novios",
    autor: "Alessandro Manzoni",
  }),

  (plv258 = {
    livro: "El Evangelio Según Jesucristo",
    autor: "José Saramago",
  }),

  (plv259 = {
    livro: "El Maestro y Margarita",
    autor: "Mijaíl Bulgákov",
  }),

  (plv260 = {
    livro: "La Noche de los Tiempos",
    autor: "Antonio Munoz Molina",
  }),

  (plv261 = {
    livro: "La Ridícula Idea de no Volver a Verte",
    autor: "Rosa Montero",
  }),

  (plv262 = {
    livro: "Hotel Savoy",
    autor: "Joseph Roth",
  }),

  (plv263 = {
    livro: "El Tiempo Entre Costuras",
    autor: "María Dueñas",
  }),

  (plv264 = {
    livro: "Bajo la Red",
    autor: "Iris Murdoch",
  }),

  (plv265 = {
    livro: "Como Agua para Chocolate",
    autor: "Laura Esquivel",
  }),

  (plv266 = {
    livro: "Todos Quieren a Daisy Jones",
    autor: "Taylor Jenkins Reid",
  }),

  (plv267 = {
    livro: "Veinte Mil Leguas de Viaje Submarino",
    autor: "Julio Verne",
  }),

  (plv268 = {
    livro: "La Amiga Estupenda",
    autor: "Elena Ferrante",
  }),

  (plv269 = {
    livro: "El Infinito en un Junco",
    autor: "Irene Vallejo",
  }),

  (plv270 = {
    livro: "El Jilguero",
    autor: "Donna Tartt",
  }),

  (plv271 = {
    livro: "Caballería Roja",
    autor: "Isaak Babel",
  }),

  (plv272 = {
    livro: "Vida y Destino",
    autor: "Vasili Grossman",
  }),

  (plv273 = {
    livro: "El Club de la Lucha",
    autor: "Chuck Palahniuk",
  }),

  (plv274 = {
    livro: "Todas las Almas",
    autor: "Javier Marías",
  }),

  (plv275 = {
    livro: "Trilogía de Copenhague",
    autor: "Tove Ditlevsen",
  }),

  (plv276 = {
    livro: "Siempre Hemos Vivido en el Castillo",
    autor: "Shirley Jackson",
  }),

  (plv277 = {
    livro: "La Virgen de los Sicarios",
    autor: "Fernando Vallejo",
  }),

  (plv278 = {
    livro: "Lo Raro es Vivir",
    autor: "Carmen Martín Gaite",
  }),

  (plv279 = {
    livro: "El Adversario",
    autor: "Emmanuel Carrère",
  }),

  (plv280 = {
    livro: "El Mapa y el Territorio",
    autor: "Michel Houellebecq",
  }),

  (plv281 = {
    livro: "Matadero Cinco",
    autor: "Kurt Vonnegut",
  }),

  (plv282 = {
    livro: "Cartero",
    autor: "Charles Bukowski",
  }),

  (plv283 = {
    livro: "Meditaciones",
    autor: "Marco Aurelio",
  }),

  (plv284 = {
    livro: "Los Detectives Salvajes",
    autor: "Roberto Bolaño",
  }),

  (plv285 = {
    livro: "Guerra Mundial Z",
    autor: "Max Brooks",
  }),

  (plv286 = {
    livro: "Mi Tío Oswald",
    autor: "Roald Dahl",
  }),

  (plv287 = {
    livro: "El Embrujo de Shanghai",
    autor: "Juan Marsé",
  }),

  (plv288 = {
    livro: "Un Mundo Común",
    autor: "Marina Garcés",
  }),

  (plv289 = {
    livro: "La Muerte en Venecia",
    autor: "Thomas Mann",
  }),

  (plv290 = {
    livro: "El Mal de Montano",
    autor: "Enrique Vila-Matas",
  }),

  (plv291 = {
    livro: "Luces de Bohemia",
    autor: "Ramón del Valle-Inclán",
  }),

  (plv292 = {
    livro: "Historia de dos Ciudades",
    autor: "Charles Dickens",
  }),

  (plv293 = {
    livro: "Las Ciudades Invisibles",
    autor: "Italo Calvino",
  }),

  (plv294 = {
    livro: "El Árbol de la Ciencia",
    autor: "Pío Baroja",
  }),

  (plv295 = {
    livro: "Espejos",
    autor: "Eduardo Galeano",
  }),

  (plv296 = {
    livro: "Las Partículas Elementales",
    autor: "Michel Houellebecq",
  }),

  (plv297 = {
    livro: "La Edad de la Inocencia",
    autor: "Edith Wharton",
  }),

  (plv298 = {
    livro: "La Brecha",
    autor: "Mercedes Valdivieso",
  }),

  (plv299 = {
    livro: "El Origen de las Especies",
    autor: "Charles Darwin",
  }),

  (plv300 = {
    livro: "Soy Leyenda",
    autor: "Richard Matheson",
  }),

  (plv301 = {
    livro: "El Horla",
    autor: "Guy de Maupassant",
  }),

  (plv302 = {
    livro: "Llamadas Telefónicas",
    autor: "Roberto Bolaño",
  }),

  (plv303 = {
    livro: "La Broma Infinita",
    autor: "David Foster Wallace",
  }),

  (plv304 = {
    livro: "La Peste",
    autor: "Albert Camus",
  }),

  (plv305 = {
    livro: "El Mundo de Ayer",
    autor: "Stefan Zweig",
  }),

  (plv306 = {
    livro: "La Llamada de lo Salvaje",
    autor: "Jack London",
  }),

  (plv307 = {
    livro: "Novela de Ajedrez",
    autor: "Stefan Zweig",
  }),

  (plv308 = {
    livro: "Madre Noche",
    autor: "Kurt Vonnegut",
  }),

  (plv309 = {
    livro: "Relato de un Náufrago",
    autor: "Gabriel García Márquez",
  }),

  (plv310 = {
    livro: "La Casa Lúgubre",
    autor: "Charles Dickens",
  }),

  (plv311 = {
    livro: "La Canción del Verdugo",
    autor: "Norman Mailer",
  }),

  (plv312 = {
    livro: "La Regenta",
    autor: "Leopoldo Alas Clarín",
  }),

  (plv313 = {
    livro: "Tu Rostro Mañana",
    autor: "Javier Marías",
  }),

  (plv314 = {
    livro: "Un Monstruo Viene a Verme",
    autor: "Patrick Ness",
  }),

  (plv315 = {
    livro: "Una Tragedia Americana",
    autor: "Theodore Dreiser",
  }),

  (plv316 = {
    livro: "El Bigote",
    autor: "Emmanuel Carrère",
  }),

  (plv317 = {
    livro: "El Brazo Marchito y Otros Relatos",
    autor: "Thomas Hardy",
  }),

  (plv318 = {
    livro: "La Dependienta",
    autor: "Sayaka Murata",
  }),

  (plv319 = {
    livro: "Los Peligros de Fumar en la Cama",
    autor: "Mariana Enriquez",
  }),

  (plv320 = {
    livro: "El Baile",
    autor: "Irène Némirovsky",
  }),

  (plv321 = {
    livro: "Yo Robot",
    autor: "Isaac Asimov",
  }),

  (plv322 = {
    livro: "Bartleby el Escribiente",
    autor: "Herman Melville",
  }),

  (plv323 = {
    livro: "La Perla",
    autor: "John Steinbeck",
  }),

  (plv324 = {
    livro: "Noches Blancas",
    autor: "Fiódor Dostoyevski",
  }),

  (plv325 = {
    livro: "La Caída de la Casa Usher",
    autor: "Edgar Allan Poe",
  }),

  (plv326 = {
    livro: "El Amante",
    autor: "Marguerite Duras",
  }),

  (plv327 = {
    livro: "La Casa de las Bellas Durmientes",
    autor: "Yasunari Kawabata",
  }),

  (plv328 = {
    livro: "Días Tranquilos en Clichy",
    autor: "Henry Miller",
  }),

  (plv329 = {
    livro: "Las Batallas En El Desierto",
    autor: "José Emilio Pacheco",
  }),

  (plv330 = {
    livro: "La Máquina del Tiempo",
    autor: "H. G. Wells",
  }),

  (plv331 = {
    livro: "Bajo la Misma Estrella",
    autor: "John Green",
  }),

  (plv332 = {
    livro: "Trilogía de Fundación",
    autor: "Isaac Asimov",
  }),

  (plv333 = {
    livro: "El Problema de los Tres Cuerpos",
    autor: "Cixin Liu",
  }),

  (plv334 = {
    livro: "Neuromante",
    autor: "William Gibson",
  }),

  (plv335 = {
    livro: "Yo Claudio",
    autor: "Robert Graves",
  }),

  (plv336 = {
    livro: "El Capitán Alatriste",
    autor: "Arturo Pérez-Reverte",
  }),

  (plv337 = {
    livro: "El Hereje",
    autor: "Miguel Delibes",
  }),

  (plv338 = {
    livro: "La Naranja Mecánica",
    autor: "Anthony Burgess",
  }),

  (plv339 = {
    livro: "Corre Conejo",
    autor: "John Updike",
  }),

  (plv340 = {
    livro: "El Color Púrpura",
    autor: "Alice Walker",
  }),
];

let tentativas = 0;
let palavraSorteada = "";

function palavraAleatoria(array) {
  let indice = Math.random() * array.length;
  return Math.floor(indice);
}

function validaCliqueDoBotao() {
  for (let i = 0; i < letras.length; i++) {
    letras[i].addEventListener("click", (e) => {
      verificaBotao(e.target.value, palavraSorteada.livro);
    });
  }

  window.addEventListener("keydown", function (event) {
    let tecla = event.key;

    const chave = alfabeto.includes(tecla);
    if (!chave) {
      return;
    }

    verificaBotao(tecla, palavraSorteada.livro);
  });
}

function verificaBotao(botao, palavra) {
  let resultado = palavraSorteada;
  palavra = palavra.toLowerCase();
  console.log(palavra);

  if (tentativas < 7) {
    if (palavra.includes(botao)) {
      document.querySelector(`button[value="${botao}"]`).style.background =
        "#774f38";
      document.querySelector(`button[value="${botao}"]`).style.color = "white";

      document
        .querySelector(`button[value="${botao}"]`)
        .classList.add("disable");

      mostraPalavra(palavra, botao);
    } else {
      montaForca(tentativas);
      document.querySelector(`button[value="${botao}"]`).style.background =
        "#2b222c";
      document.querySelector(`button[value="${botao}"]`).style.color = "white";
      document
        .querySelector(`button[value="${botao}"]`)
        .classList.add("disable");

      tentativas++;
    }
  } else {
    document.querySelector(
      ".palavras"
    ).innerHTML = `<h2 id='fm'>¡Perdiste!</h2>`;
    cabeca2();
    clickDisable.classList.add("disable");
  }

  revisar();
}

function mostraPalavra(palavras, str) {
  const letra = document.querySelectorAll("p");

  console.log(letra);

  palavras.split("").forEach((palavra, i, arrayPalavra) => {
    if (arrayPalavra[i] === str) {
      letra[i].innerHTML = arrayPalavra[i] = str;
    }
  });
}

function ocultaPalavra(livro) {
  const resultado = livro
    .split("")
    .map((palavra, i) => {
      return `<p>${palavra.replace(livro.charAt(i), (letra) => {
        const verificandoSeTemEspaco = /\s/g.test(letra);

        if (verificandoSeTemEspaco) {
          return " &nbsp ";
        } else {
          return " _ ";
        }
      })}</p>`;
    })
    .join("");
  sessao.innerHTML = `
      <div class="livro">
          ${resultado}
      </div>
  `;
}

iniciar.addEventListener("click", () => {
  //console.log(sessao.childNodes);
  //sessao.childNodes[1].remove();
  const existeH3 = sessao.querySelector("h3");

  if (existeH3 !== null) {
    sessao.querySelector("h3").remove();
  }

  clickDisable.classList.remove("disable");
  ctx.clearRect(0, 0, 400, 600);
  tentativas = 0;
  document.querySelector(".sugestao").value = "";
  //document.querySelector(".palavras").innerHTML = palavraSorteada.livro.toLowerCase();

  /*const existeH2 = sessao.querySelector("h2");

  if (existeH2 !== null) {
    sessao.querySelector("h2").innerHTML = "";
  }*/

  letras.forEach((elemento) => {
    elemento.style.backgroundColor = "#f9d9ac";
    elemento.style.color = "#000000";
    elemento.classList.remove("disable");
  });

  forca();

  let palavra = palavraAleatoria(palavraSecreta);
  palavraSorteada = palavraSecreta[palavra];
  console.log(palavraSorteada.livro);
  ocultaPalavra(palavraSorteada.livro);
});

/*cancelButton.addEventListener("click", function () {
  clickDisable.classList.remove("disable");
  ctx.clearRect(0, 0, 400, 600);
  tentativas = 0;
  letras.forEach((elemento) => {
    elemento.style.backgroundColor = "#AAAAAA";
    elemento.style.color = "#000000";
  });

  forca();

  let palavra = palavraAleatoria(palavraSecreta);
  palavraSorteada = palavraSecreta[palavra];
  console.log(palavraSorteada.livro);
  ocultaPalavra(palavraSorteada.livro);

  dialog.close();
});*/

function revisar() {
  palavra = palavraSorteada.livro.toLowerCase();
  palavra = palavra.replace(/\s+/g, "");
  const nSpan = document.querySelectorAll("p");

  let novaPalabraOculta = "";

  for (let i = 0; i < nSpan.length; i++) {
    let palavraAtual = nSpan[i].innerText;
    novaPalabraOculta += palavraAtual;
  }

  console.log(novaPalabraOculta);
  console.log(palavraSorteada);

  if (novaPalabraOculta.replace(/\s+/g, "") == palavra) {
    //alert("Ganaste!");

    setTimeout(() => {
      sessao.innerHTML = `<h2 id="prb"> ¡Ganaste!<\h2>`;
      document
        .querySelector(".sugestao-titulo")
        .querySelector("div .sugestao").value = palavraSorteada.autor;
    }, 1000);
    clickDisable.classList.add("disable");
  }

  verf = novaPalabraOculta;
}

validaCliqueDoBotao();

function forca() {
  ctx.beginPath();
  ctx.moveTo(25, 560); //base
  ctx.lineTo(75, 560);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.moveTo(50, 10); //vertical
  ctx.lineTo(50, 560);
  ctx.stroke();

  ctx.moveTo(50, 10); //horizontal
  ctx.lineTo(295, 10);
  ctx.stroke();

  ctx.moveTo(295, 10); //forca
  ctx.lineTo(295, 25);
  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(295, 24);
  ctx.bezierCurveTo(315, 70, 330, 80, 295, 85);

  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(295, 24);
  ctx.bezierCurveTo(275, 70, 260, 80, 295, 85);

  ctx.stroke();
  ctx.closePath();
}

function cabeca() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let x = 200;
  let y = 100;
  let width = 180;
  let heigth = 180;
  let shoulder = 50;
  let radius = 50;

  ctx.beginPath();
  ctx.moveTo(x + shoulder, y);
  ctx.lineTo(x + width - shoulder, y);
  ctx.arcTo(x + width, y, x + width, y + shoulder, radius);
  ctx.lineTo(x + width, y + heigth - shoulder);
  ctx.arcTo(x + width, y + heigth, x + width - shoulder, y + heigth, radius);
  ctx.lineTo(x + shoulder, y + heigth);
  ctx.arcTo(x, y + heigth, x, y + heigth - shoulder, radius);
  ctx.lineTo(x, y + shoulder);
  ctx.arcTo(x, y, x + shoulder, y, radius);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill(); //cabeça

  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.fillStyle = "#000";
  ctx.fillRect(230, 190, 15, 15); //olho direito

  ctx.fillStyle = "#000";
  ctx.fillRect(340, 190, 15, 15); //olho esquerdo

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.moveTo(250, 180); //sobrancelha direita
  ctx.lineTo(230, 170);
  ctx.stroke();

  ctx.moveTo(335, 180); //sobrancelha esquerda
  ctx.lineTo(355, 170);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath(); //boca
  ctx.lineTo(238, 225); //ponto inicial
  ctx.quadraticCurveTo(293, 260, 348, 225); //ponto central e ponto final
  ctx.stroke();
  ctx.closePath();
}

function chapeu() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  ctx.beginPath();
  ctx.fillStyle = "#f8ca00";
  ctx.arc(290, 110, 70, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.fill();
  ctx.closePath();
}

function barriga() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let p = 230;
  let l = 280;
  let larg = 120;
  let alt = 80;
  let omb = 25;
  let rad = 25;

  ctx.beginPath();
  ctx.moveTo(p + omb, l);
  ctx.lineTo(p + larg - omb, l);
  ctx.arcTo(p + larg, l, p + larg, l + omb, rad);
  ctx.lineTo(p + larg, l + alt - omb);
  ctx.arcTo(p + larg, l + alt, p + larg - omb, l + alt, rad);
  ctx.lineTo(p + omb, l + alt);
  ctx.arcTo(p, l + alt, p, l + alt - omb, rad);
  ctx.lineTo(p, l + omb);
  ctx.arcTo(p, l, p + omb, l, rad);

  ctx.closePath();
  /*ctx.fillStyle = "#452352";*/
  ctx.fillStyle = "#2b222c"
  ctx.fill();
}

function bracoDireito() {
  let b = 215;
  let d = 280;
  let tam = 30;
  let tur = 60;
  let bro = 15;
  let ral = 15;

  ctx.beginPath();
  ctx.moveTo(b + bro, d);
  ctx.lineTo(b + tam - bro, d);
  ctx.arcTo(b + tam, d, b + tam, d + bro, ral);
  ctx.lineTo(b + tam, d + tur - bro);
  ctx.arcTo(b + tam, d + tur, b + tam - bro, d + tur, ral);
  ctx.lineTo(b + bro, d + tur);
  ctx.arcTo(b, d + tur, b, d + tur - bro, ral);
  ctx.lineTo(b, d + bro);
  ctx.arcTo(b, d, b + bro, d, ral);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill();
}

function bracoEsquerdo() {
  let t = 330;
  let u = 280;
  let tah = 30;
  let tus = 60;
  let bri = 15;
  let rak = 15;

  ctx.beginPath();
  ctx.moveTo(t + bri, u);
  ctx.lineTo(t + tah - bri, u);
  ctx.arcTo(t + tah, u, t + tah, u + bri, rak);
  ctx.lineTo(t + tah, u + tus - bri);
  ctx.arcTo(t + tah, u + tus, t + tah - bri, u + tus, rak);
  ctx.lineTo(t + bri, u + tus);
  ctx.arcTo(t, u + tus, t, u + tus - bri, rak);
  ctx.lineTo(t, u + bri);
  ctx.arcTo(t, u, t + bri, u, rak);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill();
  //ctx.globalCompositeOperation='destination-over';
}

function pernaDireita() {
  ctx.fillStyle = "#680148";
  ctx.fillRect(244, 358, 40, 50);
}

function pernaEsquerda() {
  ctx.fillStyle = "#680148";
  ctx.fillRect(296, 358, 40, 50);
}

function cabeca2() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let x = 200;
  let y = 100;
  let width = 180;
  let heigth = 180;
  let shoulder = 50;
  let radius = 50;

  ctx.beginPath();
  ctx.moveTo(x + shoulder, y);
  ctx.lineTo(x + width - shoulder, y);
  ctx.arcTo(x + width, y, x + width, y + shoulder, radius);
  ctx.lineTo(x + width, y + heigth - shoulder);
  ctx.arcTo(x + width, y + heigth, x + width - shoulder, y + heigth, radius);
  ctx.lineTo(x + shoulder, y + heigth);
  ctx.arcTo(x, y + heigth, x, y + heigth - shoulder, radius);
  ctx.lineTo(x, y + shoulder);
  ctx.arcTo(x, y, x + shoulder, y, radius);

  ctx.closePath();
  //ctx.stroke();
  ctx.fillStyle = "#B0A399";
  ctx.fill(); //cabeÃ§a

  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.fillStyle = "#000";
  ctx.fillRect(230, 190, 20, 2); //olho direito

  ctx.fillStyle = "#000";
  ctx.fillRect(340, 190, 20, 2); //olho esquerdo

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.moveTo(250, 170); //sobrancelha direita
  ctx.lineTo(230, 180);
  ctx.stroke();

  ctx.moveTo(335, 170); //sobrancelha esquerda
  ctx.lineTo(355, 180);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath(); //boca
  ctx.lineTo(238, 245); //ponto inicial
  //ctx.quadraticCurveTo(293, 260, 348, 225)//ponto central e ponto final
  ctx.quadraticCurveTo(293, 200, 348, 245); //ponto central e ponto final
  ctx.stroke();
  //ctx.strokeStyle = "black"
  ctx.closePath();

  //CHAPEU

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  ctx.beginPath();
  /*ctx.fillStyle = "#8E7AFF";*/
  ctx.fillStyle = "#f8ca00";
  ctx.arc(290, 110, 70, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.fill();
  ctx.closePath();
}

function montaForca(tentativas) {
  switch (tentativas) {
    case 0:
      cabeca();
      break;
    case 1:
      chapeu();
      break;
    case 2:
      barriga();
      break;
    case 3:
      bracoDireito();
      break;
    case 4:
      bracoEsquerdo();
      break;
    case 5:
      pernaDireita();
      break;
    case 6:
      pernaEsquerda();
  }
}
