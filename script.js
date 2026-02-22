/**
 * Hub de Jogos - MVC Architecture
 */

// --- Model ---
class GameModel {
    constructor() {
        this.games = [
            {
                id: 'nosso-codigo',
                title: 'ðŸ§© Nosso CÃ³digo',
                description: 'Decifre a mÃ­mica do parceiro! Apenas <span style="color: var(--accent-color); font-weight: bold;">VocÃªs</span> entendem.<br>(MÃ­micas/Blue)',
                type: 'mimic-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'eclipse-penumbra',
                title: 'ðŸ§Š Eclipse Penumbra',
                description: 'ConexÃ£o e profundidade. <br><span style="color: var(--accent-color); font-weight: bold;">(Leve/Blue)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'sintonia-fina',
                title: 'ðŸŽ» Sintonia Fina',
                description: 'SerÃ¡ que vocÃªs se conhecem mesmo? Responda e veja se o parceiro acerta! <br><span style="color: var(--accent-color); font-weight: bold;">(Casais/ConexÃ£o)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'leilao-intimidade',
                title: 'âš–ï¸ LeilÃ£o de Intimidade',
                description: 'Quem dÃ¡ mais por esse desejo? Use seu saldo com sabedoria! <br><span style="color: #FDCB6E; font-weight: bold;">(Casais/EstratÃ©gia)</span>',
                theme: 'yellow',
                category: ['couple']
            },
            {
                id: 'eu-nunca',
                title: 'ðŸº Eu Nunca Casal',
                description: 'O clÃ¡ssico, mas com intensidade progressiva. O jogo esquenta conforme as rodadas passam! <br><span style="color: #FDCB6E; font-weight: bold;">(Casal/Progressivo)</span>',
                type: 'card-game',
                theme: 'yellow',
                category: ['couple']
            },
            {
                id: 'esquenta',
                title: 'ðŸ”¥ Eclipse Total',
                description: 'Verdades e desafios intensos. <br><span style="color: var(--danger-color); font-weight: bold;">(Pesado/Red)</span>',
                type: 'card-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'desejos-binarios',
                title: 'ðŸŒŒ Desejos BinÃ¡rios',
                description: 'DÃª "Sim" ou "NÃ£o" para fantasias. Descubra onde vocÃªs combinam! <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Red)</span>',
                type: 'binary-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'roleta-temperatura',
                title: 'ðŸŽ¡ Roleta da Temperatura',
                description: 'Gire para descobrir o prÃ³ximo passo. A temperatura sobe com o tempo! <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Interativo)</span>',
                type: 'roulette-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'dados-prazer',
                title: 'ðŸŽ² Dados do Prazer',
                description: 'Lance os dados e descubra a combinaÃ§Ã£o: PosiÃ§Ã£o + Modificador. <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Criativo)</span>',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'termometro-prazer',
                title: 'ðŸŒ¡ï¸ TermÃ´metro do Prazer',
                description: 'Resista Ã  provocaÃ§Ã£o enquanto a temperatura sobe. O fundo muda de cor conforme a tensÃ£o aumenta! <br><span style="color: #7f1d1d; font-weight: bold;">(Casais/ResistÃªncia)</span>',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'eclipse-social',
                title: 'ðŸŽ‰ Eclipse Social',
                description: 'Verdades leves, desafios engraÃ§ados e bÃ´nus caÃ³ticos para jogar com amigos! <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/DiversÃ£o)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'quem-mais-provavel',
                title: 'â˜ï¸ Quem Ã© Mais ProvÃ¡vel?',
                description: 'Quem do grupo tem mais chance de...? Todos apontam na conta de 3! <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/Social)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'eu-nunca-festa',
                title: 'ðŸ¹ Eu Nunca Festa',
                description: 'A versÃ£o clÃ¡ssica para rir com os amigos de situaÃ§Ãµes engraÃ§adas. <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/Social)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'tabuleiro-seducao',
                title: 'ðŸŽ² Tabuleiro da SeduÃ§Ã£o',
                description: 'Um jogo de trilha onde cada casa Ã© um desafio. Trilha Azul para ele, Rosa para ela. <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Intenso)</span>',
                type: 'board-game',
                theme: 'marsala',
                category: ['couple']
            },
        ];




        // --- Deck LeilÃ£o de Intimidade (40 Itens) ---
        this.auctionDeck = [
            // Mimos e Vida a Dois (15)
            { category: 'Mimos', text: 'CafÃ© da manhÃ£ na cama amanhÃ£ (preparado/servido)' },
            { category: 'Mimos', text: 'Vale-Veto de LouÃ§a: 2 dias sem lavar nada' },
            { category: 'Mimos', text: 'Massagem nos pÃ©s de 15 minutos sem reclamar' },
            { category: 'Mimos', text: 'Escolha do filme hoje Ã  noite (sem veto)' },
            { category: 'Mimos', text: 'Jantar perdoado: o outro cozinha ou pede' },
            { category: 'Mimos', text: 'Vale-PreguiÃ§a: dia inteiro de pijama sem julgamentos' },
            { category: 'Mimos', text: 'Controle Remoto absoluto por uma noite' },
            { category: 'Mimos', text: 'CafunÃ© ilimitado enquanto assistimos TV' },
            { category: 'Mimos', text: 'Vale "VocÃª tem razÃ£o": venÃ§o uma discussÃ£o automaticamente' },
            { category: 'Mimos', text: 'Sobremesa favorita entregue em casa (paga pelo outro)' },
            { category: 'Mimos', text: 'Vale-Motorista: o outro dirige no prÃ³ximo passeio' },
            { category: 'Mimos', text: 'Playlist no carro Ã© minha por uma semana' },
            { category: 'Mimos', text: 'LiberaÃ§Ã£o de um compromisso social chato' },
            { category: 'Mimos', text: 'Banho preparado (sais, espuma ou apenas temperatura ideal)' },
            { category: 'Mimos', text: 'Direito a pedir um favor chato (ex: ligar p/ SAC)' },

            // Apimentar a Noite (15)
            { category: 'Apimentar', text: 'Escolha da primeira posiÃ§Ã£o hoje' },
            { category: 'Apimentar', text: 'Vale-Fantasia: Escolho o tema/cenÃ¡rio da prÃ³xima' },
            { category: 'Apimentar', text: 'Massagem especial com Ã³leo (20 min)' },
            { category: 'Apimentar', text: 'Striptease exclusivo para mim' },
            { category: 'Apimentar', text: 'Vale-Lingerie/Cueca: Escolho o que vocÃª usa hoje' },
            { category: 'Apimentar', text: 'Comando do ritmo: eu dito a velocidade hoje' },
            { category: 'Apimentar', text: 'Vendado(a): vocÃª perde a visÃ£o por 30 minutos' },
            { category: 'Apimentar', text: 'Amarrado(a): vocÃª fica imÃ³vel enquanto eu provoco' },
            { category: 'Apimentar', text: 'Sussurros proibidos: 5 min de dirty talk no ouvido' },
            { category: 'Apimentar', text: 'Vale-Oral: Foco total em mim atÃ© o fim' },
            { category: 'Apimentar', text: 'Local inusitado: Eu escolho onde faremos (dentro de casa)' },
            { category: 'Apimentar', text: 'Banho a dois com "algo a mais"' },
            { category: 'Apimentar', text: 'Brinquedo: Eu escolho qual usar e como' },
            { category: 'Apimentar', text: 'Vale-Foto: Uma foto picante sÃ³ para os meus olhos' },
            { category: 'Apimentar', text: 'Toque livre: Posso te tocar onde quiser em pÃºblico (discretamente)' },

            // Vales EstratÃ©gicos (10)
            { category: 'EstratÃ©gico', text: 'Vale-Desejo Livre (bom senso, vÃ¡lido por 24h)' },
            { category: 'EstratÃ©gico', text: 'Vale-PerfeiÃ§Ã£o: "Sim" para tudo por 1h' },
            { category: 'EstratÃ©gico', text: 'Anular DÃ­vida: Cancelo um item que perdi anteriormente' },
            { category: 'EstratÃ©gico', text: 'Roubo: Pego um item do seu inventÃ¡rio para mim' },
            { category: 'EstratÃ©gico', text: 'Veto: Cancelo seu lance nessa rodada (se eu ganhar essa carta)' },
            { category: 'EstratÃ©gico', text: 'Saldo Extra: Ganho +20 moedas agora (banco paga)', effect: 'add_credit', value: 20 },
            { category: 'EstratÃ©gico', text: 'TaxaÃ§Ã£o: VocÃª me paga 10 moedas agora', effect: 'tax', value: 10 },
            { category: 'EstratÃ©gico', text: 'Reembolso: Recupero 50% do que gastei na Ãºltima compra', effect: 'refund', value: 0.5 },
            { category: 'EstratÃ©gico', text: 'SilÃªncio: VocÃª nÃ£o pode falar por 30 minutos' },
            { category: 'EstratÃ©gico', text: 'Espelho: O que vocÃª mandar eu fazer, vocÃª faz tambÃ©m' }
        ];

        // --- Dados do Tabuleiro da SeduÃ§Ã£o ---
        this.seductionBoardData = {
            blue: [
                "Elogie a parte do corpo dela que vocÃª mais gosta.",
                "DÃª um beijo demorado no pescoÃ§o e na nuca dela.",
                "FaÃ§a uma massagem relaxante nos pÃ©s ou pernas dela.",
                "Tire os sapatos e as meias dela.",
                "Sussurre no ouvido dela com detalhes o que vocÃª quer fazer hoje.",
                { type: 'punishment', text: "PuniÃ§Ã£o: O clima esfriou. Volte 2 casas.", move: -2 },
                "DÃª beijos descendo do pescoÃ§o atÃ© a barriga dela.",
                "Tire la blusa ou o vestido dela lentamente.",
                { type: 'bonus', text: "BÃ´nus: Escolha uma mÃºsica sensual para tocar agora." },
                "FaÃ§a uma massagem nas costas dela apenas com as pontas dos dedos.",
                "Tire a sua prÃ³pria camisa.",
                "Ela Pede: Cumpra um desejo rÃ¡pido que ela escolher agora.",
                "Beije e provoque os seios dela por 1 minuto.",
                "Tire a calÃ§a, saia ou short dela.",
                "Tire a sua prÃ³pria calÃ§a.",
                "Tire a roupa Ã­ntima dela usando apenas a boca ou uma das mÃ£os.",
                "Provoque a intimidade dela com as mÃ£os.",
                { type: 'punishment', text: "PuniÃ§Ã£o: Calma apressadinho. Volte 1 casa para provocar mais.", move: -1 },
                "FaÃ§a sexo oral nela com dedicaÃ§Ã£o atÃ© ela pedir para vocÃª parar.",
                "Use uma venda nos olhos dela e provoque-a com algo gelado ou morno.",
                "Retire sua prÃ³pria roupa Ã­ntima agora mesmo.",
                "Descreva detalhadamente como vocÃª vai fazÃª-la chegar lÃ¡.",
                "Beije-a apaixonadamente enquanto as mÃ£os exploram cada curva.",
                { type: 'bonus', text: "BÃ´nus: Sua pegada Ã© incrÃ­vel! Avance 2 casas.", move: 2 },
                "Morda levemente a parte interna das coxas dela.",
                { type: 'punishment', text: "PuniÃ§Ã£o: Muito rÃ¡pido! Volte 2 casas para saborear cada detalhe.", move: -2 },
                "Use a lÃ­ngua para desenhar caminhos de prazer no corpo dela.",
                "Deixe-a no comando por 2 minutos, apenas recebendo o que ela quiser.",
                "Sussurre sua fantasia mais sombria no ouvido dela.",
                "Chegada: ÃŠxtase total na posiÃ§Ã£o que vocÃª mais gosta."
            ],
            pink: [
                "DÃª um beijo de cinema nele.",
                "FaÃ§a carinho na nuca e puxe levemente o cabelo dele.",
                "Conte no ouvido dele uma fantasia secreta sua.",
                "Tire a camisa dele com provocaÃ§Ã£o.",
                "Morda levemente a orelha e o pescoÃ§o dele.",
                { type: 'punishment', text: "PuniÃ§Ã£o: O clima esfriou. Volte 2 casas.", move: -2 },
                "Provoque-o passando as mÃ£os por dentro da roupa dele.",
                "Tire a sua prÃ³pria blusa.",
                { type: 'bonus', text: "BÃ´nus: Ganhe uma massagem de 2 minutos onde vocÃª quiser." },
                "Desabotoe a calÃ§a dele com muita calma, olhando nos olhos.",
                "Beije o caminho do peitoral atÃ© a marca da calÃ§a dele.",
                "Ele Pede: Cumpra um desejo rÃ¡pido que ele escolher agora.",
                "Tire a sua prÃ³pria calÃ§a ou saia.",
                "FaÃ§a uma massagem provocante nas coxas e na virilha dele.",
                "Fique apenas de roupa Ã­ntima.",
                "Tire a roupa Ã­ntima dele lentamente.",
                "Provoque-o com toques, beijos e respiraÃ§Ã£o na regiÃ£o Ã­ntima.",
                { type: 'punishment', text: "PuniÃ§Ã£o: Vamos prolongar o desejo. Volte 1 casa.", move: -1 },
                "FaÃ§a sexo oral nele, controlando o ritmo como vocÃª preferir.",
                "Sussurre uma fantasia que te deixa molhada sÃ³ de pensar.",
                "Retire a sua prÃ³pria roupa Ã­ntima com um olhar fatal.",
                "Use as mÃ£os para explorÃ¡-lo enquanto sussurra palavras de desejo.",
                "Provoque-o atÃ© que ele nÃ£o consiga mais ficar parado.",
                { type: 'bonus', text: "BÃ´nus: VocÃª estÃ¡ impossÃ­vel! Avance 3 casas.", move: 3 },
                "Escolha um lugar sensÃ­vel dele e use apenas a ponta da lÃ­ngua.",
                { type: 'punishment', text: "PuniÃ§Ã£o: Ele estÃ¡ perdendo o controle. Volte 2 casas para torturÃ¡-lo mais.", move: -2 },
                "Comande a situaÃ§Ã£o: coloque-o onde vocÃª quer e faÃ§a o que desejar.",
                "Use o seu corpo para envolvÃª-lo em uma danÃ§a privativa rÃ¡pida.",
                "Revele o que vocÃª quer que ele faÃ§a com vocÃª agora mesmo.",
                "Chegada: ÃŠxtase total na posiÃ§Ã£o que vocÃª sempre quis tentar."
            ]
        };

        this.seductionBoardState = {
            bluePos: 0,
            pinkPos: 0,
            currentPlayer: 'blue', // ComeÃ§a com o azul (homem) ou conforme a regra
            lastMove: 0,
            isFinished: false
        };

        // --- Deck MÃ­mica (40 Cartas) ---
        this.mimicDeck = [
            // Manias do Parceiro
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando estÃ¡ com preguiÃ§a de levantar da cama.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro mexe no cabelo quando estÃ¡ nervoso ou pensativo.' },
            { category: 'Manias do Parceiro', text: 'Imite a reaÃ§Ã£o do parceiro quando percebe que esqueceu algo importante em casa.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro come algo que ele gosta muito.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara que o parceiro faz quando estÃ¡ segurando o riso em um lugar sÃ©rio.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro reage ao receber um presente que nÃ£o gostou muito (tentando ser educado).' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro caminha quando estÃ¡ com pressa.' },
            { category: 'Manias do Parceiro', text: 'Imite a expressÃ£o do parceiro quando ouve um Ã¡udio muito longo no WhatsApp.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando tirar uma selfie perfeita.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando estÃ¡ concentrado jogando videogame ou trabalhando.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro espirra ou boceja (de forma exagerada).' },
            { category: 'Manias do Parceiro', text: 'Imite a reaÃ§Ã£o do parceiro ao ver o preÃ§o de algo muito caro.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando se arrumar rÃ¡pido para sair.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara do parceiro quando estÃ¡ com ciÃºmes, mas finge que nÃ£o estÃ¡.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro dirige ou se comporta no trÃ¢nsito.' },

            // SituaÃ§Ãµes de Casal
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite nÃ³s dois tentando decidir o que comer no sÃ¡bado Ã  noite.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como foi a nossa reaÃ§Ã£o ao assistir um filme de terror juntos.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite o nosso primeiro beijo (versÃ£o "expectativa vs realidade").' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite quando um de nÃ³s tenta acordar o outro de forma carinhosa (e falha).' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como ficamos quando estamos em uma festa e queremos ir embora sem ninguÃ©m perceber.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite a nossa "danÃ§a" oficial quando toca uma mÃºsica que ambos gostamos.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite um de nÃ³s tentando explicar uma fofoca complexa para o outro.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como ficamos quando estamos deitados no sofÃ¡ dividindo a mesma coberta.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite a nossa reaÃ§Ã£o quando a comida do delivery finalmente chega.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite um de nÃ³s tentando convencer o outro a fazer uma massagem.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como Ã© a nossa disputa pelo controle remoto ou pelo lado da cama.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite a nossa cara quando encontramos alguÃ©m que ambos nÃ£o gostamos na rua.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite o jeito que a gente se despede quando um de nÃ³s vai viajar.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como Ã© o nosso "abraÃ§o de urso" depois de um dia cansativo.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite um de nÃ³s tentando cantar uma mÃºsica em inglÃªs sem saber a letra.' },

            // Momentos EspecÃ­ficos
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro bÃªbado tentando parecer sÃ³brio.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite como o parceiro fica quando ganha uma discussÃ£o.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro tentando montar um mÃ³vel ou consertar algo em casa.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite a reaÃ§Ã£o do parceiro ao ganhar um carinho inesperado.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro falando com um animal de estimaÃ§Ã£o ou um bebÃª.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro quando estÃ¡ contando uma mentira muito Ã³bvia.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite como o parceiro fica quando estÃ¡ com febre ou levemente doente (o "drama").' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite a reaÃ§Ã£o do parceiro ao ganhar uma surpresa.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro tentando fazer um exercÃ­cio fÃ­sico difÃ­cil.' },
            { category: 'Momentos EspecÃ­ficos', text: 'Imite o parceiro reagindo a uma notÃ­cia muito boa.' }
        ];

        this.eclipseSocialDeck = [
            // VERDADES (50)
            { type: 'verdade', text: 'Qual foi a maior vergonha que vocÃª jÃ¡ passou na escola?' },
            { type: 'verdade', text: 'Qual mania estranha vocÃª tem escondida?' },
            { type: 'verdade', text: 'Qual foi sua pior apresentaÃ§Ã£o em pÃºblico?' },
            { type: 'verdade', text: 'JÃ¡ tropeÃ§ou feio na frente de muita gente?' },
            { type: 'verdade', text: 'Qual foi a desculpa mais ridÃ­cula que vocÃª jÃ¡ deu?' },
            { type: 'verdade', text: 'JÃ¡ falou algo achando que estava arrasando e ficou climÃ£o?' },
            { type: 'verdade', text: 'Qual foi o pior corte de cabelo da sua vida?' },
            { type: 'verdade', text: 'JÃ¡ mandou Ã¡udio errado em grupo?' },
            { type: 'verdade', text: 'Qual hÃ¡bito estranho vocÃª tem quando estÃ¡ sozinho?' },
            { type: 'verdade', text: 'JÃ¡ pagou mico tentando impressionar alguÃ©m?' },
            { type: 'verdade', text: 'Qual foi sua pior nota na escola?' },
            { type: 'verdade', text: 'JÃ¡ esqueceu o nome de alguÃ©m importante?' },
            { type: 'verdade', text: 'JÃ¡ caiu em fake news?' },
            { type: 'verdade', text: 'Qual comida vocÃª ama mas tem vergonha de admitir?' },
            { type: 'verdade', text: 'JÃ¡ riu em momento inapropriado?' },
            { type: 'verdade', text: 'JÃ¡ chamou professor pelo nome errado?' },
            { type: 'verdade', text: 'Qual modinha vocÃª seguiu e hoje se arrepende?' },
            { type: 'verdade', text: 'JÃ¡ saiu de casa com roupa do avesso?' },
            { type: 'verdade', text: 'Qual foi sua maior preguiÃ§a pÃºblica?' },
            { type: 'verdade', text: 'JÃ¡ confundiu alguÃ©m na rua?' },
            { type: 'verdade', text: 'Qual foi sua fase mais vergonhosa?' },
            { type: 'verdade', text: 'JÃ¡ tentou cantar e desafinou feio?' },
            { type: 'verdade', text: 'JÃ¡ fingiu que entendeu algo que nÃ£o entendeu?' },
            { type: 'verdade', text: 'Qual meme representa sua vida?' },
            { type: 'verdade', text: 'JÃ¡ esqueceu aniversÃ¡rio de alguÃ©m importante?' },
            { type: 'verdade', text: 'Qual foi sua maior gafe?' },
            { type: 'verdade', text: 'JÃ¡ tentou contar piada e ninguÃ©m riu?' },
            { type: 'verdade', text: 'JÃ¡ mandou mensagem no grupo errado?' },
            { type: 'verdade', text: 'Qual foi sua pior fase fashion?' },
            { type: 'verdade', text: 'JÃ¡ caiu na escada?' },
            { type: 'verdade', text: 'JÃ¡ ficou preso(a) em algum lugar?' },
            { type: 'verdade', text: 'Qual foi sua maior procrastinaÃ§Ã£o?' },
            { type: 'verdade', text: 'JÃ¡ fingiu estar ocupado?' },
            { type: 'verdade', text: 'Qual foi sua maior vergonha em viagem?' },
            { type: 'verdade', text: 'JÃ¡ falou mal de algo e depois descobriu que a pessoa gostava?' },
            { type: 'verdade', text: 'JÃ¡ entrou no banheiro errado?' },
            { type: 'verdade', text: 'JÃ¡ pagou mico no esporte?' },
            { type: 'verdade', text: 'Qual foi sua maior ilusÃ£o?' },
            { type: 'verdade', text: 'JÃ¡ esqueceu o que ia falar no meio da frase?' },
            { type: 'verdade', text: 'JÃ¡ caiu dormindo em aula?' },
            { type: 'verdade', text: 'Qual foi sua pior tentativa de cozinhar?' },
            { type: 'verdade', text: 'JÃ¡ tropeÃ§ou em pÃºblico e fingiu que nada aconteceu?' },
            { type: 'verdade', text: 'JÃ¡ usou filtro demais numa foto?' },
            { type: 'verdade', text: 'JÃ¡ errou a letra de mÃºsica cantando alto?' },
            { type: 'verdade', text: 'JÃ¡ foi o Ãºltimo escolhido em algo?' },
            { type: 'verdade', text: 'JÃ¡ fez drama desnecessÃ¡rio?' },
            { type: 'verdade', text: 'JÃ¡ teve medo bobo?' },
            { type: 'verdade', text: 'Qual talento inÃºtil vocÃª tem?' },
            { type: 'verdade', text: 'JÃ¡ derrubou comida na roupa antes de sair?' },
            { type: 'verdade', text: 'Qual foi seu maior â€œeu era feliz e nÃ£o sabiaâ€?' },

            // DESAFIOS (50)
            { type: 'desafio', text: 'Fale com sotaque diferente por 2 rodadas.' },
            { type: 'desafio', text: 'Dance como se estivesse sozinho no quarto.' },
            { type: 'desafio', text: 'FaÃ§a 30 segundos de passarela dramÃ¡tica.' },
            { type: 'desafio', text: 'Imite um animal escolhido pelo grupo.' },
            { type: 'desafio', text: 'FaÃ§a uma propaganda improvisada de uma cadeira.' },
            { type: 'desafio', text: 'Conte uma piada ruim.' },
            { type: 'desafio', text: 'Fique congelado por 1 rodada.' },
            { type: 'desafio', text: 'FaÃ§a um discurso motivacional exagerado.' },
            { type: 'desafio', text: 'Imite um narrador de futebol por 1 minuto.' },
            { type: 'desafio', text: 'Ande como modelo atÃ© a prÃ³xima rodada.' },
            { type: 'desafio', text: 'FaÃ§a caretas atÃ© alguÃ©m rir.' },
            { type: 'desafio', text: 'FaÃ§a 15 polichinelos gritando â€œECLIPSEâ€.' },
            { type: 'desafio', text: 'Fale cantando por 1 rodada.' },
            { type: 'desafio', text: 'Finja que Ã© um robÃ´.' },
            { type: 'desafio', text: 'FaÃ§a uma cena de novela dramÃ¡tica.' },
            { type: 'desafio', text: 'Recrie uma pose famosa de super-herÃ³i.' },
            { type: 'desafio', text: 'Equilibre algo na cabeÃ§a por 30 segundos.' },
            { type: 'desafio', text: 'FaÃ§a voz de desenho animado.' },
            { type: 'desafio', text: 'DÃª um giro e pose final.' },
            { type: 'desafio', text: 'Imite alguÃ©m da roda (sem ofender).' },
            { type: 'desafio', text: 'Fale o alfabeto ao contrÃ¡rio (ou tente).' },
            { type: 'desafio', text: 'Conte uma histÃ³ria como se fosse suspense.' },
            { type: 'desafio', text: 'FaÃ§a uma coreografia inventada.' },
            { type: 'desafio', text: 'Desfile como se tivesse vencido concurso.' },
            { type: 'desafio', text: 'Fique 1 rodada sem rir.' },
            { type: 'desafio', text: 'Fale apenas sussurrando por 1 rodada.' },
            { type: 'desafio', text: 'FaÃ§a 1 minuto de stand-up improvisado.' },
            { type: 'desafio', text: 'Ande como um vilÃ£o.' },
            { type: 'desafio', text: 'FaÃ§a uma entrevista fictÃ­cia com vocÃª mesmo.' },
            { type: 'desafio', text: 'Cante parabÃ©ns como Ã³pera.' },
            { type: 'desafio', text: 'Imite risada maligna.' },
            { type: 'desafio', text: 'FaÃ§a um comercial de shampoo imaginÃ¡rio.' },
            { type: 'desafio', text: 'Conte uma histÃ³ria exagerando tudo.' },
            { type: 'desafio', text: 'Fale como narrador de documentÃ¡rio.' },
            { type: 'desafio', text: 'FaÃ§a uma pose estÃ¡tua por 1 minuto.' },
            { type: 'desafio', text: 'Recrie cena de filme famoso.' },
            { type: 'desafio', text: 'Dance sem mexer os braÃ§os.' },
            { type: 'desafio', text: 'FaÃ§a um tutorial inÃºtil (ex: como sentar).' },
            { type: 'desafio', text: 'Fale sÃ³ em perguntas por 1 rodada.' },
            { type: 'desafio', text: 'Imite alguÃ©m acordando atrasado.' },
            { type: 'desafio', text: 'Finja que ganhou um prÃªmio.' },
            { type: 'desafio', text: 'FaÃ§a um rap improvisado.' },
            { type: 'desafio', text: 'FaÃ§a cara de vilÃ£o por 30 segundos.' },
            { type: 'desafio', text: 'Conte um segredo falso convincente.' },
            { type: 'desafio', text: 'FaÃ§a uma caminhada dramÃ¡tica.' },
            { type: 'desafio', text: 'Fale como se estivesse chorando.' },
            { type: 'desafio', text: 'FaÃ§a um som de efeito para tudo que alguÃ©m fizer por 1 rodada.' },
            { type: 'desafio', text: 'FaÃ§a pose de influencer.' },
            { type: 'desafio', text: 'Descreva alguÃ©m como se fosse personagem Ã©pico.' },
            { type: 'desafio', text: 'Escolha alguÃ©m para fazer desafio com vocÃª.' },

            // BÃ”NUS (50)
            { type: 'bonus', text: 'Pular um desafio.' },
            { type: 'bonus', text: 'Passar desafio para outro.' },
            { type: 'bonus', text: 'Duplicar desafio de alguÃ©m.' },
            { type: 'bonus', text: 'Criar mini regra por 2 rodadas.' },
            { type: 'bonus', text: 'Inverter ordem do jogo.' },
            { type: 'bonus', text: 'Trocar lugar com qualquer pessoa.' },
            { type: 'bonus', text: 'ForÃ§ar alguÃ©m a responder 2 verdades.' },
            { type: 'bonus', text: 'Escolher dupla obrigatÃ³ria.' },
            { type: 'bonus', text: 'Criar desafio coletivo.' },
            { type: 'bonus', text: 'Dar imunidade por 1 rodada.' },
            { type: 'bonus', text: 'Criar rodada sÃ³ de mÃ­mica.' },
            { type: 'bonus', text: 'Criar rodada sÃ³ de desafios.' },
            { type: 'bonus', text: 'Criar rodada relÃ¢mpago.' },
            { type: 'bonus', text: 'Trocar cartas com alguÃ©m.' },
            { type: 'bonus', text: 'Roubar vez.' },
            { type: 'bonus', text: 'Criar regra do silÃªncio.' },
            { type: 'bonus', text: 'Criar regra da risada proibida.' },
            { type: 'bonus', text: 'Escolher lÃ­der da rodada.' },
            { type: 'bonus', text: 'Mudar tema para â€œescolaâ€.' },
            { type: 'bonus', text: 'Mudar tema para â€œviagensâ€.' },
            { type: 'bonus', text: 'Obrigar alguÃ©m a falar rimando.' },
            { type: 'bonus', text: 'Criar puniÃ§Ã£o leve.' },
            { type: 'bonus', text: 'Escolher alguÃ©m para fazer discurso.' },
            { type: 'bonus', text: 'Fazer dois jogarem juntos.' },
            { type: 'bonus', text: 'Escolher prÃ³xima vÃ­tima.' },
            { type: 'bonus', text: 'Criar regra de voz engraÃ§ada.' },
            { type: 'bonus', text: 'Dar imunidade dupla.' },
            { type: 'bonus', text: 'Criar desafio em dupla.' },
            { type: 'bonus', text: 'Criar desafio em trio.' },
            { type: 'bonus', text: 'Escolher alguÃ©m para imitar outro.' },
            { type: 'bonus', text: 'Criar rodada temÃ¡tica.' },
            { type: 'bonus', text: 'Escolher alguÃ©m para contar histÃ³ria.' },
            { type: 'bonus', text: 'Mudar sentido (verdade vira desafio).' },
            { type: 'bonus', text: 'Criar mini competiÃ§Ã£o.' },
            { type: 'bonus', text: 'Fazer alguÃ©m elogiar todos.' },
            { type: 'bonus', text: 'Obrigar alguÃ©m a narrar a rodada.' },
            { type: 'bonus', text: 'Criar rodada dramÃ¡tica.' },
            { type: 'bonus', text: 'Criar rodada silenciosa.' },
            { type: 'bonus', text: 'Criar rodada sÃ³ de caretas.' },
            { type: 'bonus', text: 'Criar rodada rÃ¡pida (10s por pessoa).' },
            { type: 'bonus', text: 'Escolher alguÃ©m para fazer mÃ­mica.' },
            { type: 'bonus', text: 'Criar desafio fÃ­sico leve.' },
            { type: 'bonus', text: 'Criar desafio teatral.' },
            { type: 'bonus', text: 'Criar desafio musical.' },
            { type: 'bonus', text: 'Criar desafio criativo.' },
            { type: 'bonus', text: 'Escolher tema secreto.' },
            { type: 'bonus', text: 'Trocar cartas entre dois.' },
            { type: 'bonus', text: 'Cancelar Ãºltimo desafio.' },
            { type: 'bonus', text: 'Criar regra maluca temporÃ¡ria.' },
            { type: 'bonus', text: 'Ativar â€œEclipse Supremoâ€ (todos fazem desafio).' }
        ];

        this.usedEclipseSocialIndices = new Set();

        // --- Deck Quem Ã© Mais ProvÃ¡vel? (30 Cartas) ---
        this.quemMaisProvavelDeck = [
            { text: "Quem Ã© mais provÃ¡vel de esquecer onde estacionou o carro?" },
            { text: "Quem Ã© mais provÃ¡vel de gastar todo o salÃ¡rio em um dia?" },
            { text: "Quem Ã© mais provÃ¡vel de chorar assistindo um comercial de margarina?" },
            { text: "Quem Ã© mais provÃ¡vel de ser preso por engano?" },
            { text: "Quem Ã© mais provÃ¡vel de virar um meme na internet?" },
            { text: "Quem Ã© mais provÃ¡vel de sobreviver a um apocalipse zumbi?" },
            { text: "Quem Ã© mais provÃ¡vel de ganhar na loteria e nÃ£o contar para ninguÃ©m?" },
            { text: "Quem Ã© mais provÃ¡vel de viajar para o lugar errado?" },
            { text: "Quem Ã© mais provÃ¡vel de se tornar um eremita?" },
            { text: "Quem Ã© mais provÃ¡vel de dar PT em um open bar?" },
            { text: "Quem Ã© mais provÃ¡vel de casar com um completo estranho em Vegas?" },
            { text: "Quem Ã© mais provÃ¡vel de esquecer o prÃ³prio aniversÃ¡rio?" },
            { text: "Quem Ã© mais provÃ¡vel de adotar 10 gatos?" },
            { text: "Quem Ã© mais provÃ¡vel de ser a pessoa mais rica da roda?" },
            { text: "Quem Ã© mais provÃ¡vel de sumir e nunca mais dar notÃ­cias?" },
            { text: "Quem Ã© mais provÃ¡vel de enviar mensagem para o ex Ã s 3 da manhÃ£?" },
            { text: "Quem Ã© mais provÃ¡vel de tropeÃ§ar no prÃ³prio pÃ©?" },
            { text: "Quem Ã© mais provÃ¡vel de brigar com um estranho na rua?" },
            { text: "Quem Ã© mais provÃ¡vel de entrar na casa errada?" },
            { text: "Quem Ã© mais provÃ¡vel de se tornar um influencer famoso?" },
            { text: "Quem Ã© mais provÃ¡vel de contar um segredo sem querer?" },
            { text: "Quem Ã© mais provÃ¡vel de rir em um velÃ³rio?" },
            { text: "Quem Ã© mais provÃ¡vel de se perder dentro de um shopping?" },
            { text: "Quem Ã© mais provÃ¡vel de falar dormindo?" },
            { text: "Quem Ã© mais provÃ¡vel de ter uma queda por um personagem de desenho?" },
            { text: "Quem Ã© mais provÃ¡vel de ser a primeira pessoa a ser abduzida por aliens?" },
            { text: "Quem Ã© mais provÃ¡vel de fazer drama por causa de um resfriado?" },
            { text: "Quem Ã© mais provÃ¡vel de esquecer o nome de alguÃ©m logo apÃ³s ser apresentado?" },
            { text: "Quem Ã© mais provÃ¡vel de quebrar o celular no primeiro dia de uso?" },
            { text: "Quem Ã© mais provÃ¡vel de ficar famoso por algo estÃºpido?" }
        ];
        this.usedQuemMaisProvavelIndices = new Set();

        // --- Deck Eu Nunca Festa (30 Cartas) ---
        this.euNuncaGrupoDeck = [
            { text: "Eu nunca usei o cartÃ£o de outra pessoa escondido." },
            { text: "Eu nunca fingi que nÃ£o vi um conhecido na rua." },
            { text: "Eu nunca menti em uma entrevista de emprego." },
            { text: "Eu nunca saÃ­ de casa sem roupa de baixo." },
            { text: "Eu nunca peguei algo emprestado e nunca devolvi." },
            { text: "Eu nunca dei um nome falso para alguÃ©m em uma festa." },
            { text: "Eu nunca nadei pelado em pÃºblico." },
            { text: "Eu nunca vomitei em um tÃ¡xi ou transporte de aplicativo." },
            { text: "Eu nunca stalkeei um ex atÃ© as fotos de 2015." },
            { text: "Eu nunca usei a escova de dentes de outra pessoa." },
            { text: "Eu nunca fingi estar falando no celular para evitar alguÃ©m." },
            { text: "Eu nunca furei fila descaradamente." },
            { text: "Eu nunca fui expulso de uma festa ou bar." },
            { text: "Eu nunca beijei alguÃ©m da roda." },
            { text: "Eu nunca entrei em uma festa sem ser convidado." },
            { text: "Eu nunca menti para meus pais sobre onde estava." },
            { text: "Eu nunca comi algo que caiu no chÃ£o (3 segundos!)." },
            { text: "Eu nunca fiz xixi na piscina." },
            { text: "Eu nunca contei um segredo que jurei guardar." },
            { text: "Eu nunca fui parado em uma blitz." },
            { text: "Eu nunca menti sobre ter lido um livro ou visto um filme." },
            { text: "Eu nunca tive um crush no irmÃ£o/irmÃ£ de um amigo." },
            { text: "Eu nunca usei o Wi-Fi do vizinho sem permissÃ£o." },
            { text: "Eu nunca quebrei algo na casa de alguÃ©m e fingi que nÃ£o fomos nÃ³s." },
            { text: "Eu nunca dormi no cinema." },
            { text: "Eu nunca mandei um 'oi sumido' por carÃªncia." },
            { text: "Eu nunca usei uma roupa e devolvi para a loja depois." },
            { text: "Eu nunca pesquisei meu prÃ³prio nome no Google." },
            { text: "Eu nunca menti a idade para parecer mais velho/novo." },
            { text: "Eu nunca dei uma desculpa falsa para faltar ao trabalho/estudo." }
        ];
        this.usedEuNuncaGrupoIndices = new Set();

        // --- Deck Sintonia Fina (30 Cartas) ---
        this.sintoniaFinaDeck = [
            { text: "Qual Ã© a maior mania irritante do parceiro?" },
            { text: "Qual foi o lugar do primeiro encontro oficial?" },
            { text: "Quem gasta mais dinheiro no dia a dia?" },
            { text: "Qual Ã© o maior sonho de infÃ¢ncia do parceiro que ele ainda nÃ£o realizou?" },
            { text: "Quem Ã© mais provÃ¡vel de comeÃ§ar uma discussÃ£o?" },
            { text: "Qual Ã© a comida favorita do parceiro que ele pediria como Ãºltima refeiÃ§Ã£o?" },
            { text: "Quem demora mais para se arrumar para sair?" },
            { text: "Qual Ã© o maior medo bobo do parceiro?" },
            { text: "Para onde seria a viagem dos sonhos que vocÃªs fariam amanhÃ£?" },
            { text: "Quem disse 'eu te amo' primeiro?" },
            { text: "Qual Ã© a mÃºsica que define o relacionamento de vocÃªs?" },
            { text: "Quem Ã© mais organizado em casa?" },
            { text: "Qual Ã© a primeira coisa que o parceiro faz ao acordar?" },
            { text: "Qual Ã© o talento escondido do parceiro que pouca gente sabe?" },
            { text: "Quem Ã© o mais ciumento da relaÃ§Ã£o?" },
            { text: "Qual foi o presente mais marcante que um deu ao outro?" },
            { text: "Quem Ã© mais provÃ¡vel de esquecer uma data especial?" },
            { text: "Qual Ã© a cor favorita do parceiro?" },
            { text: "Quem Ã© mais explorador e gosta de aventuras?" },
            { text: "O que o parceiro mais gosta de fazer no tempo livre?" },
            { text: "Quem Ã© o mais engraÃ§ado/palhaÃ§o do casal?" },
            { text: "Qual Ã© o hÃ¡bito do parceiro que vocÃª acha mais fofo?" },
            { text: "Quem cozinha melhor?" },
            { text: "Qual Ã© a sÃ©rie ou filme favorito do parceiro?" },
            { text: "Quem Ã© mais viciado em celular?" },
            { text: "Qual Ã© a maior qualidade que o parceiro vÃª em vocÃª?" },
            { text: "Quem Ã© mais 'mÃ£o de vaca'?" },
            { text: "Qual Ã© o destino de viagem que o parceiro detestaria ir?" },
            { text: "Quem Ã© mais provÃ¡vel de se perder dirigindo?" },
            { text: "O que o parceiro faria se ganhasse na loteria hoje?" }
        ];
        this.usedSintoniaFinaIndices = new Set();

        this.mimicState = {
            gameActive: false,
            currentPlayer: 1,
            score: 0,
            skipsUsed: 0,
            maxSkips: 1,
            currentCard: null,
            timeRemaining: 20,
            timer: null,
            isTimerRunning: false,
            usedIndices: new Set()
        };

        this.nossoCodigoDeck = [
            // Categoria: Manias do Parceiro (15 Cartas)
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando estÃ¡ com preguiÃ§a de levantar da cama.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro mexe no cabelo quando estÃ¡ nervoso ou pensativo.' },
            { category: 'Manias do Parceiro', text: 'Imite a reaÃ§Ã£o do parceiro quando percebe que esqueceu algo importante em casa.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro come algo que ele gosta muito.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara que o parceiro faz quando estÃ¡ segurando o riso em um lugar sÃ©rio.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro reage ao receber um presente que nÃ£o gostou muito (tentando ser educado).' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro caminha quando estÃ¡ com pressa.' },
            { category: 'Manias do Parceiro', text: 'Imite a expressÃ£o do parceiro quando ouve um Ã¡udio muito longo no WhatsApp.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando tirar uma selfie perfeita.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando estÃ¡ concentrado jogando videogame ou trabalhando.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro espirra ou boceja (de forma exagerada).' },
            { category: 'Manias do Parceiro', text: 'Imite a reaÃ§Ã£o do parceiro ao ver o preÃ§o de algo muito caro.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando se arrumar rÃ¡pido para sair.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara do parceiro quando estÃ¡ com ciÃºmes, mas finge que nÃ£o estÃ¡.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro dirige ou se comporta no trÃ¢nsito.' },

            // Categoria: SituaÃ§Ãµes de Casal (15 Cartas)
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite nÃ³s dois tentando decidir o que comer no sÃ¡bado Ã  noite.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como foi a nossa reaÃ§Ã£o ao assistir um filme de terror juntos.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite o nosso primeiro beijo (versÃ£o "expectativa vs realidade").' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite quando um de nÃ³s tenta acordar o outro de forma carinhosa (e falha).' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como ficamos quando estamos em uma festa e queremos ir embora sem ninguÃ©m perceber.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite a nossa "danÃ§a" oficial quando toca uma mÃºsica que ambos gostamos.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite a nossa reaÃ§Ã£o quando a comida do delivery finalmente chega.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite um de nÃ³s tentando explicar uma fofoca complexa para o outro.' },
            { category: 'SituaÃ§Ãµes de Casal', text: 'Imite como ficamos quando estamos deitados no sofÃ¡ dividindo a mesma coberta.' }
        ];

        // --- Dados do Prazer (Arrays) ---
        this.dice1Options = [
            'MissionÃ¡rio (ClÃ¡ssico, foco no olhar)',
            'Doggy Style (De quatro)',
            'Cowgirl (Ela por cima)',
            'Cowgirl Invertida (Ela por cima, de costas)',
            'Conchinha (Deitados de lado)',
            'Tesoura (Pernas entrelaÃ§adas)',
            'Em pÃ© (Frente a frente)',
            'Sentados (Ele sentado, ela no colo)',
            'Carrinho de mÃ£o (Apoio nas mÃ£os)',
            'LÃ³tus (Sentados e abraÃ§ados)',
            'Ponte (Ela apoiada nos ombros)',
            '69 (Prazer mÃºtuo)',
            'PreguiÃ§a (Deitados, pernas cruzadas)',
            'Aranha (Sentados, braÃ§os para trÃ¡s)',
            'TriÃ¢ngulo (Elevando o quadril)',
            'Cadeira (Na beira de um mÃ³vel)',
            'AviÃ£o (EquilÃ­brio e profundidade)',
            'Escada (NÃ­veis diferentes)',
            'FusÃ£o (Corpos totalmente colados)',
            'X (Cruzados lateralmente)'
        ];

        this.dice2Options = [
            '...com o parceiro vendado.',
            '...em frente a um espelho.',
            '...na beira da cama.',
            '...usando um brinquedo.',
            '...em um cÃ´modo diferente da casa.',
            '...com movimentos bem lentos (slow motion).',
            '...com as mÃ£os presas ou para trÃ¡s.',
            '...com as pernas elevadas nos ombros dele.',
            '...enquanto ele sussurra o que vai fazer.',
            '...com foco total no beijo na boca.',
            '...alternando a velocidade (rÃ¡pido e devagar).',
            '...usando um travesseiro para elevar o quadril.',
            '...no banheiro (chuveiro ou pia).',
            '...no chÃ£o (com tapete ou almofadas).',
            '...mantendo contato visual o tempo todo.',
            '...com o parceiro provocando o pescoÃ§o/orelha.',
            '...apenas com as pontas dos pÃ©s tocando o chÃ£o.'
        ];

        // --- Dados do Prazer (Arrays) ---
        this.dice1Options = [
            { name: 'MissionÃ¡rio', description: 'O clÃ¡ssico frente a frente, um sobre o outro.', ref: 'Missionary Position' },
            { name: 'De Quatro', description: 'Um parceiro fica de joelhos e mÃ£os, o outro vem por trÃ¡s.', ref: 'Doggy Style' },
            { name: 'Cowgirl', description: 'Um parceiro deitado e o outro sentada por cima, de frente.', ref: 'Cowgirl Position' },
            { name: 'Cowgirl Invertida', description: 'Por cima, mas de costas para o parceiro deitado.', ref: 'Reverse Cowgirl' },
            { name: 'Conchinha', description: 'Ambos deitados de lado, um encaixado atrÃ¡s do outro.', ref: 'Spoony Position' },
            { name: '69', description: 'Deitados em direÃ§Ãµes opostas para prazer mÃºtuo.', ref: '69 Position' },
            { name: 'A Montanha', description: 'O parceiro deita e vocÃª senta por cima, pernas esticadas.', ref: 'Sitting Straddle Position' },
            { name: 'O LaÃ§o', description: 'Conchinha com as pernas da pessoa de trÃ¡s entrelaÃ§adas.', ref: 'Side-Lying Spooning' },
            { name: 'Profundidade', description: 'MissionÃ¡rio com os joelhos dobrados contra o prÃ³prio peito.', ref: 'Deep Missionary knees' },
            { name: 'O Trono', description: 'Um senta na beira da cama e o outro senta no colo, de frente.', ref: 'Lap Sitting Position' },
            { name: 'CÃ£o de CaÃ§a', description: 'De quatro, peito colado no colchÃ£o e quadril elevado.', ref: 'Modified Doggy Style Flat' },
            { name: 'X-Factor', description: 'Ambos deitados de lado, formando um "X" entrelaÃ§ado.', ref: 'Criss-Cross Position' },
            { name: 'O Degrau', description: 'Um parceiro em pÃ© e o outro deitado na borda da cama.', ref: 'Standing edge of bed' },
            { name: 'AbraÃ§o de LÃ³tus', description: 'Ambos sentados de frente, pernas e braÃ§os envolvidos.', ref: 'Lotus Position intimate' },
            { name: 'A Alavanca', description: 'Deitados, um parceiro eleva uma perna do outro ao ombro.', ref: 'Leg on shoulder position' },
            { name: 'A GarÃ§a', description: 'Em pÃ©, um parceiro apoiado na parede com uma perna elevada.', ref: 'Standing wall leg up' },
            { name: 'Em PÃ©', description: 'Ambos em pÃ©, frente a frente, com um deles suspenso ou apoiado.', ref: 'Standing intimate position' },
            { name: 'A Cadeira', description: 'O parceiro senta e o outro senta no colo de costas.', ref: 'Reverse Lap Sitting' },
            { name: 'Tesoura', description: 'Deitados de frente, com as pernas cruzadas como uma tesoura.', ref: 'Scissors position sex' },
            { name: 'O Arco', description: 'Um parceiro deitado de costas com o quadril elevado por um travesseiro.', ref: 'Arch position pillow' }
        ];

        this.dice2Options = [
            { name: 'Semi-vestidos', description: 'Realizar a posiÃ§Ã£o usando roupas (sem tirar tudo).' },
            { name: 'Sussurros', description: 'O parceiro ativo deve sussurrar o que estÃ¡ sentindo.' },
            { name: 'Sem EspaÃ§o', description: 'Manter os corpos totalmente colados durante o ato.' },
            { name: 'ProibiÃ§Ã£o de Beijo', description: 'Beijar na boca Ã© proibido neste turno; foque no corpo.' },
            { name: 'Ritmo Musical', description: 'Seguir o tempo da mÃºsica que estiver tocando.' },
            { name: 'MÃ£os Dadas', description: 'Manter as mÃ£os entrelaÃ§adas o tempo todo.' },
            { name: 'Pausa de Controle', description: 'Fazer pausas de 10 segundos a cada 1 minuto.' },
            { name: 'Venda Superior', description: 'Quem estiver por cima joga de olhos vendados.' },
            { name: 'Foco Facial', description: 'Prioridade para carÃ­cias e beijos no rosto.' },
            { name: 'Choque TÃ©rmico', description: 'Realizar no cÃ´modo mais frio da casa.' },
            { name: 'CÃ¢mera Lenta', description: 'Movimentos extremamente devagar e profundos.' },
            { name: 'Olhar Fixo', description: 'Manter contato visual ininterrupto.' },
            { name: 'MÃ£os Presas', description: 'Um dos parceiros deve ficar com as mÃ£os para trÃ¡s.' },
            { name: 'Frente ao Espelho', description: 'Realizar onde possam ver o reflexo do ato.' },
            { name: 'Uso de Gelo', description: 'Deslizar um gelo pelo corpo do parceiro durante a posiÃ§Ã£o.' },
            { name: 'Luzes Acesas', description: 'Manter a iluminaÃ§Ã£o mÃ¡xima do ambiente.' },
            { name: 'Sem Toque Manual', description: 'Proibido usar as mÃ£os para estimular o parceiro.' },
            { name: 'Mordidas Leves', description: 'O parceiro ativo deve morder suavemente ombros ou pescoÃ§o.' },
            { name: 'Troca de Comando', description: 'O parceiro que geralmente Ã© passivo dita o ritmo agora.' },
            { name: 'Som do Desejo', description: 'Proibido falar; apenas gemidos e respiraÃ§Ã£o sÃ£o permitidos.' }
        ];

        // --- Deck Eu Nunca (100 Cartas) ---
        this.euNuncaDeck = [
            // Leve (30)
            { level: 1, text: "Eu nunca tive um crush em um professor ou chefe." },
            { level: 1, text: "Eu nunca mandei um 'oi sumido(a)' com segundas intenÃ§Ãµes." },
            { level: 1, text: "Eu nunca fingi que nÃ£o vi uma mensagem sÃ³ para responder mais tarde." },
            { level: 1, text: "Eu nunca pesquisei o nome de alguÃ©m no Google antes de um primeiro encontro." },
            { level: 1, text: "Eu nunca beijei alguÃ©m e me arrependi cinco minutos depois." },
            { level: 1, text: "Eu nunca menti minha idade para alguÃ©m que eu queria conquistar." },
            { level: 1, text: "Eu nunca ensaiei o que ia dizer no espelho antes de um encontro." },
            { level: 1, text: "Eu nunca mandei uma mensagem picante para a pessoa errada." },
            { level: 1, text: "Eu nunca tive uma 'amizade colorida'." },
            { level: 1, text: "Eu nunca tentei seduzir alguÃ©m usando apenas o olhar em uma festa." },
            { level: 1, text: "Eu nunca usei uma peÃ§a de roupa especÃ­fica sÃ³ porque sabia que vocÃª gostava." },
            { level: 1, text: "Eu nunca stalkeei o ex da pessoa com quem eu estava saindo." },
            { level: 1, text: "Eu nunca imaginei como seria o nosso casamento nas primeiras semanas." },
            { level: 1, text: "Eu nunca fiz uma playlist para alguÃ©m que eu queria ficar." },
            { level: 1, text: "Eu nunca fingi que gostava de uma banda sÃ³ para impressionar." },
            { level: 1, text: "Eu nunca mandei uma indireta nos Stories esperando que apenas UMA pessoa visse." },
            { level: 1, text: "Eu nunca curti fotos antigas de alguÃ©m de propÃ³sito para chamar atenÃ§Ã£o." },
            { level: 1, text: "Eu nunca menti que estava chegando quando ainda estava no banho." },
            { level: 1, text: "Eu nunca tive um crush em um personagem de desenho animado." },
            { level: 1, text: "Eu nunca fingi que nÃ£o sabia de algo que descobri stalkeando." },
            { level: 1, text: "Eu nunca mandei um 'print' da conversa para a prÃ³pria pessoa por engano." },
            { level: 1, text: "Eu nunca ignorei uma pessoa sÃ³ para ver se ela vinha atrÃ¡s." },
            { level: 1, text: "Eu nunca dei um beijo para esquecer outro." },
            { level: 1, text: "Eu nunca tive um 'namorado(a) imaginÃ¡rio' na adolescÃªncia." },
            { level: 1, text: "Eu nunca usei um perfume especÃ­fico sÃ³ para ser lembrado(a) por ele." },
            { level: 1, text: "Eu nunca pedi para um amigo(a) me ligar para sair de um encontro ruim." },
            { level: 1, text: "Eu nunca menti sobre meus hobbies para parecer mais interessante." },
            { level: 1, text: "Eu nunca fiquei com alguÃ©m em um transporte pÃºblico." },
            { level: 1, text: "Eu nunca treinei um beijo no meu prÃ³prio braÃ§o ou no travesseiro." },
            { level: 1, text: "Eu nunca mandei flores para mim mesmo(a) para fazer ciÃºmes." },

            // MÃ©dio (40)
            { level: 2, text: "Eu nunca tirei a peÃ§a Ã­ntima por baixo da roupa em um lugar pÃºblico." },
            { level: 2, text: "Eu nunca fiz sexo em um carro." },
            { level: 2, text: "Eu nunca fui pego(a) no flagra por algum familiar." },
            { level: 2, text: "Eu nunca fiz um strip-tease para alguÃ©m." },
            { level: 2, text: "Eu nunca fiz sexo em uma praia ou piscina." },
            { level: 2, text: "Eu nunca usei algemas ou algum tipo de amarraÃ§Ã£o leve." },
            { level: 2, text: "Eu nunca transei em um cinema." },
            { level: 2, text: "Eu nunca tive um 'remember' com um ex por carÃªncia." },
            { level: 2, text: "Eu nunca usei comida durante o ato sexual." },
            { level: 2, text: "Eu nunca tive um orgasmo fingido." },
            { level: 2, text: "Eu nunca transei com as luzes acesas e um espelho na frente." },
            { level: 2, text: "Eu nunca fiz sexo matinal e cheguei atrasado(a) no trabalho." },
            { level: 2, text: "Eu nunca tive um 'one night stand' (ficar com alguÃ©m por uma noite)." },
            { level: 2, text: "Eu nunca beijei alguÃ©m do mesmo sexo." },
            { level: 2, text: "Eu nunca usei um vibrador enquanto estava com outra pessoa." },
            { level: 2, text: "Eu nunca transei em um lugar onde corria o risco de ser visto(a)." },
            { level: 2, text: "Eu nunca comprei algo em um sex shop." },
            { level: 2, text: "Eu nunca li contos erÃ³ticos para me inspirar." },
            { level: 2, text: "Eu nunca gravei apenas o Ã¡udio de uma transa para ouvir depois." },
            { level: 2, text: "Eu nunca fiz sexo em uma escada de prÃ©dio." },
            { level: 2, text: "Eu nunca transei em uma barraca de acampamento." },
            { level: 2, text: "Eu nunca fiz um 'topless' fora do meu quarto." },
            { level: 2, text: "Eu nunca usei gelo de forma estratÃ©gica nas preliminares." },
            { level: 2, text: "Eu nunca tive que inventar desculpa para esconder um chupÃ£o." },
            { level: 2, text: "Eu nunca flertei por texto durante um jantar de famÃ­lia." },
            { level: 2, text: "Eu nunca usei um brinquedo por controle remoto em pÃºblico." },
            { level: 2, text: "Eu nunca beijei alguÃ©m enquanto outra pessoa assistia." },
            { level: 2, text: "Eu nunca fiz sexo em um provador de loja." },
            { level: 2, text: "Eu nunca sonhei acordado(a) com algo que fizemos na noite anterior." },
            { level: 2, text: "Eu nunca mandei um nude que hoje eu me arrependo." },
            { level: 2, text: "Eu nunca usei fantasias (policial, enfermeira, etc)." },
            { level: 2, text: "Eu nunca tomei banho com alguÃ©m e fiz mais do que sÃ³ me lavar." },
            { level: 2, text: "Eu nunca fiz sexo em um banheiro de festa." },
            { level: 2, text: "Eu nunca usei lubrificantes que esquentam ou esfriam." },
            { level: 2, text: "Eu nunca tive um sonho erÃ³tico com alguÃ©m que estÃ¡ nesta sala." },
            { level: 2, text: "Eu nunca fiz sexo por vÃ­deo/chamada." },
            { level: 2, text: "Eu nunca dei um beijo triplo." },
            { level: 2, text: "Eu nunca recebi um nude indesejado." },
            { level: 2, text: "Eu nunca dei um beijo tÃ©cnico fingindo sentimento." },
            { level: 2, text: "Eu nunca me senti excitado(a) apenas com um sussurro." },

            // Pesado (30)
            { level: 3, text: "Eu nunca fiz sexo anal." },
            { level: 3, text: "Eu nunca participei de uma festa liberal ou swing." },
            { level: 3, text: "Eu nunca tive vontade de fazer um mÃ©nage." },
            { level: 3, text: "Eu nunca fiz sexo com mais de duas pessoas ao mesmo tempo." },
            { level: 3, text: "Eu nunca tive uma fantasia que ainda tenho vergonha de contar." },
            { level: 3, text: "Eu nunca pratiquei BDSM de forma mais sÃ©ria." },
            { level: 3, text: "Eu nunca transei no local de trabalho." },
            { level: 3, text: "Eu nunca fiz 'roleplay' de desconhecidos com meu parceiro." },
            { level: 3, text: "Eu nunca tive um orgasmo mÃºltiplo." },
            { level: 3, text: "Eu nunca deixei uma marca de propÃ³sito no outro." },
            { level: 3, text: "Eu nunca transei com outras pessoas no mesmo ambiente (mesmo sem ver)." },
            { level: 3, text: "Eu nunca usei plug anal." },
            { level: 3, text: "Eu nunca fiz um 'fio terra'." },
            { level: 3, text: "Eu nunca tive vontade de ser dominado(a) completamente." },
            { level: 3, text: "Eu nunca engoli (beba se vocÃª gosta/faz)." },
            { level: 3, text: "Eu nunca fiz sexo em um aviÃ£o ou Ã´nibus." },
            { level: 3, text: "Eu nunca pedi para alguÃ©m me bater ou xingar na cama." },
            { level: 3, text: "Eu nunca fiz 'squirt'." },
            { level: 3, text: "Eu nunca tive um fetiche por pÃ©s." },
            { level: 3, text: "Eu nunca transei assistindo a um filme pornÃ´." },
            { level: 3, text: "Eu nunca usei acessÃ³rios de couro ou lÃ¡tex." },
            { level: 3, text: "Eu nunca fiz sexo ouvindo a minha prÃ³pria voz." },
            { level: 3, text: "Eu nunca tive vontade de ser filmado(a) sem mostrar o rosto." },
            { level: 3, text: "Eu nunca pratiquei 'edging' (levar ao limite e parar)." },
            { level: 3, text: "Eu nunca fiz sexo em um local religioso ou perto de um." },
            { level: 3, text: "Eu nunca usei vendas e amarras ao mesmo tempo." },
            { level: 3, text: "Eu nunca transei em uma varanda ou sacada." },
            { level: 3, text: "Eu nunca pedi para o parceiro usar algo que ele nÃ£o queria muito." },
            { level: 3, text: "Eu nunca transei pensando em outra pessoa." },
            { level: 3, text: "Eu nunca fiz 'body painting' com chocolate ou caldas." }
        ];

        this.euNuncaState = {
            round: 0,
            usedIndices: new Set()
        };
        this.esquentaDeck = [
            { type: 'verdade', text: 'Em que lugar inusitado vocÃª morre de vontade de transar?', color: 'green' },
            { type: 'verdade', text: 'Qual foi o momento em que vocÃª mais sentiu tesÃ£o por mim em pÃºblico e nÃ£o pÃ´de fazer nada?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a sua lingerie ou cueca minha favorita?', color: 'green' },
            { type: 'verdade', text: 'Qual parte do meu corpo te deixa mais excitado(a) quando eu toco?', color: 'green' },
            { type: 'verdade', text: 'VocÃª prefere com a luz acesa, apagada ou meia-luz? Por quÃª?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a vez em que fizemos amor que vocÃª mais gostou atÃ© hoje?', color: 'green' },
            { type: 'verdade', text: 'Qual mensagem de texto mais quente vocÃª jÃ¡ quis me mandar, mas apagou antes?', color: 'green' },
            { type: 'verdade', text: 'VocÃª jÃ¡ teve algum sonho erÃ³tico comigo? Como foi?', color: 'green' },
            { type: 'verdade', text: 'O que eu faÃ§o na cama que te leva Ã  loucura?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o seu "guilty pleasure" (prazer culposo) quando o assunto Ã© sexo?', color: 'green' },
            { type: 'verdade', text: 'Se fÃ´ssemos usar um brinquedo novo hoje, qual vocÃª escolheria?', color: 'green' },
            { type: 'verdade', text: 'VocÃª gosta que eu fale besteiras no seu ouvido?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a sua posiÃ§Ã£o favorita e por que ela te dÃ¡ tanto prazer?', color: 'green' },
            { type: 'verdade', text: 'VocÃª prefere preliminares longas ou ir direto ao ponto de forma selvagem?', color: 'green' },
            { type: 'verdade', text: 'JÃ¡ se masturbou pensando em algo que fizemos na noite anterior?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª acha de gravarmos um vÃ­deo nosso?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a coisa mais ousada que vocÃª jÃ¡ fez por desejo?', color: 'green' },
            { type: 'verdade', text: 'VocÃª gosta quando eu tomo a iniciativa?', color: 'green' },
            { type: 'verdade', text: 'Qual roupa do meu dia a dia te deixa com mais vontade de me arrastar para a cama?', color: 'green' },
            { type: 'verdade', text: 'VocÃª jÃ¡ fingiu que estava dormindo sÃ³ para ver se eu te provocava?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª pudesse me vendar agora, o que faria comigo?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o seu tipo de beijo favorito?', color: 'green' },
            { type: 'verdade', text: 'VocÃª gosta de morder ou ser mordido(a)?', color: 'green' },
            { type: 'verdade', text: 'Se tivÃ©ssemos que transar em um cÃ´modo da casa que nÃ£o seja o quarto, qual seria?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a sua opiniÃ£o sobre usar gelo ou algo quente na hora H?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª faria se eu te acordasse no meio da madrugada com carÃ­cias?', color: 'green' },
            { type: 'verdade', text: 'Qual palavra ou frase te excita instantaneamente?', color: 'green' },
            { type: 'verdade', text: 'VocÃª jÃ¡ me imaginou com outra pessoa junto com a gente?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a provocaÃ§Ã£o que eu faÃ§o e que vocÃª nÃ£o consegue resistir?', color: 'green' },
            { type: 'verdade', text: 'Se o sexo de hoje tivesse um tema, qual seria?', color: 'green' },
            { type: 'verdade', text: 'VocÃª prefere dominar ou ser dominado(a)?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a sua primeira impressÃ£o sobre a nossa quÃ­mica sexual?', color: 'green' },
            { type: 'verdade', text: 'Tem alguma coisa que vocÃª tem vergonha de me pedir na cama?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª pudesse controlar meu corpo por 10 minutos, o que me faria fazer?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a zona erÃ³gena do seu corpo que eu menos exploro e deveria explorar mais?', color: 'green' },
            { type: 'verdade', text: 'VocÃª gosta de arranhÃµes ou prefere carÃ­cias suaves?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª acha de sexo matinal?', color: 'green' },
            { type: 'verdade', text: 'Qual filme ou cena de sÃ©rie te deixou com vontade de pular em cima de mim?', color: 'green' },
            { type: 'verdade', text: 'VocÃª prefere focar no seu prazer primeiro ou no meu?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o seu maior "turn-on" (aquilo que te excita de imediato)?', color: 'green' },
            { type: 'verdade', text: 'E o seu maior "turn-off" (aquilo que corta o clima)?', color: 'green' },
            { type: 'verdade', text: 'VocÃª jÃ¡ mandou ou quis mandar nudes para mim no meio do seu expediente?', color: 'green' },
            { type: 'verdade', text: 'Qual mÃºsica te deixa com vontade de tirar a roupa?', color: 'green' },
            { type: 'verdade', text: 'Se fÃ´ssemos a um motel hoje, qual suÃ­te escolheria (temÃ¡tica, com piscina, algemas)?', color: 'green' },
            { type: 'verdade', text: 'VocÃª gosta de contato visual durante o orgasmo?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª acha de roleplay (interpretar personagens)?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a coisa mais gostosa que eu sussurrei no seu ouvido?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª tivesse que descrever nossa vida sexual em uma palavra, qual seria?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a prÃ³xima coisa que vocÃª quer que eu faÃ§a com vocÃª depois que esse jogo acabar?', color: 'green' },

            // --- Desafio (50 cartas) ---
            { type: 'desafio', text: 'DÃª um beijo de cinema em mim, com direito a puxÃ£o de cabelo no final.', color: 'red' },
            { type: 'desafio', text: 'Tire uma peÃ§a da minha roupa usando apenas os dentes.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a uma massagem nas minhas costas por 2 minutos.', color: 'red' },
            { type: 'desafio', text: 'Vende os meus olhos e use algo para provocar meu pescoÃ§o.', color: 'red' },
            { type: 'desafio', text: 'Chupe o meu dedo de forma provocante enquanto mantÃ©m contato visual.', color: 'red' },
            { type: 'desafio', text: 'Sussurre a coisa mais suja que vier Ã  sua cabeÃ§a no meu ouvido.', color: 'red' },
            { type: 'desafio', text: 'Beije o meu pescoÃ§o atÃ© me arrepiar.', color: 'red' },
            { type: 'desafio', text: 'Finja que somos estranhos em um bar e me "cante".', color: 'red' },
            { type: 'desafio', text: 'Tire a sua blusa/camisa e jogue o resto do jogo assim.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a um striptease de 1 minuto ao som da mÃºsica que eu escolher.', color: 'red' },
            { type: 'desafio', text: 'Chupe uma pedra de gelo e depois beije meu corpo.', color: 'red' },
            { type: 'desafio', text: 'Deslize a mÃ£o por dentro da minha roupa por 30 segundos.', color: 'red' },
            { type: 'desafio', text: 'DÃª trÃªs chupÃµes ou mordidas leves na minha coxa.', color: 'red' },
            { type: 'desafio', text: 'Fique no meu colo atÃ© a sua prÃ³xima vez de jogar.', color: 'red' },
            { type: 'desafio', text: 'Beije cada centÃ­metro do meu rosto, terminando com um beijo molhado na boca.', color: 'red' },
            { type: 'desafio', text: 'Simule a sua posiÃ§Ã£o favorita em mim com as roupas que estamos usando.', color: 'red' },
            { type: 'desafio', text: 'Provoque minha orelha apenas com a respiraÃ§Ã£o e a ponta da lÃ­ngua.', color: 'red' },
            { type: 'desafio', text: 'Mande uma mensagem picante para mim agora, mesmo estando na minha frente.', color: 'red' },
            { type: 'desafio', text: 'Fique de olhos fechados na prÃ³xima rodada enquanto eu faÃ§o carinho em vocÃª.', color: 'red' },
            { type: 'desafio', text: 'Passe a lÃ­ngua nos meus lÃ¡bios sem me deixar te beijar.', color: 'red' },
            { type: 'desafio', text: 'Dance no meu colo por uma mÃºsica inteira.', color: 'red' },
            { type: 'desafio', text: 'Prove um pouco da bebida que estamos tomando direto da minha boca.', color: 'red' },
            { type: 'desafio', text: 'DÃª tapinhas de leve no meu bumbum.', color: 'red' },
            { type: 'desafio', text: 'Deite-se e deixe eu beijar a sua barriga.', color: 'red' },
            { type: 'desafio', text: 'Mostre como vocÃª geme quando estÃ¡ chegando lÃ¡.', color: 'red' },
            { type: 'desafio', text: 'Tire as minhas meias usando apenas as mÃ£os amarradas ou para trÃ¡s.', color: 'red' },
            { type: 'desafio', text: 'Beije a minha nuca e passe as mÃ£os pelo meu peito/seios.', color: 'red' },
            { type: 'desafio', text: 'Desabotoe ou abra o zÃ­per da minha calÃ§a/short.', color: 'red' },
            { type: 'desafio', text: 'Fique a 1 centÃ­metro da minha boca por 30 segundos sem encostar.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a carinho na minha virilha por cima da roupa.', color: 'red' },
            { type: 'desafio', text: 'Use a sua bebida para molhar meus lÃ¡bios e lamba depois.', color: 'red' },
            { type: 'desafio', text: 'Sente-se ao meu lado e deixe nossas pernas entrelaÃ§adas pelo resto do jogo.', color: 'red' },
            { type: 'desafio', text: 'Pegue a minha mÃ£o e coloque onde vocÃª mais quer que eu toque agora.', color: 'red' },
            { type: 'desafio', text: 'DÃª um beijo que comece no ombro e termine atrÃ¡s da orelha.', color: 'red' },
            { type: 'desafio', text: 'Provoque meu corpo usando apenas as pontas dos dedos por 1 minuto.', color: 'red' },
            { type: 'desafio', text: 'Tire a sua prÃ³pria roupa Ã­ntima discretamente e guarde no bolso.', color: 'red' },
            { type: 'desafio', text: 'Morda os lÃ¡bios sensualmente enquanto me encara de cima a baixo.', color: 'red' },
            { type: 'desafio', text: 'Deite sobre mim e sinta nossos coraÃ§Ãµes batendo juntos por 1 minuto.', color: 'red' },
            { type: 'desafio', text: 'Lamba uma gota de bebida do meu pescoÃ§o.', color: 'red' },
            { type: 'desafio', text: 'Acaricie meu cabelo enquanto diz o quanto me quer.', color: 'red' },
            { type: 'desafio', text: 'Levante a minha blusa e deixe um beijo demorado.', color: 'red' },
            { type: 'desafio', text: 'Tire os meus sapatos e massageie meus pÃ©s.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a uma trilha de beijos do meu umbigo atÃ© o limite da minha calÃ§a/calcinha.', color: 'red' },
            { type: 'desafio', text: 'Passe um pouco da sua bebida nos dedos e faÃ§a eu chupar.', color: 'red' },
            { type: 'desafio', text: 'Use o meu pescoÃ§o como travesseiro e respire fundo.', color: 'red' },
            { type: 'desafio', text: 'Tire a peÃ§a de roupa que mais estÃ¡ te atrapalhando agora.', color: 'red' },
            { type: 'desafio', text: 'Beije a palma da minha mÃ£o e cada um dos meus dedos.', color: 'red' },
            { type: 'desafio', text: 'Fale com um sotaque estrangeiro e tente me seduzir.', color: 'red' },
            { type: 'desafio', text: 'Abrace-me por trÃ¡s e aperte meu corpo contra o seu.', color: 'red' },
            { type: 'desafio', text: 'Escolha um lugar do meu corpo (abaixo do pescoÃ§o) e deixe uma marca de beijo.', color: 'red' },

            // --- BÃ´nus (50 cartas) ---
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ acordou no meio da noite com vontade de transar.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª estÃ¡ sem calcinha/cueca agora.', color: 'blue' },
            { type: 'bonus', text: 'Vale Imunidade: Use esta carta para pular um Desafio que nÃ£o queira fazer.', color: 'blue' },
            { type: 'bonus', text: 'Dose Dupla: Na prÃ³xima rodada, seu parceiro(a) tira duas cartas.', color: 'blue' },
            { type: 'bonus', text: 'InversÃ£o: Devolva a Ãºltima pergunta de Verdade para o seu parceiro(a) responder.', color: 'blue' },
            { type: 'bonus', text: 'Mestre do Gelo: Coloque um gelo na boca e passe para o parceiro(a) atÃ© derreter. Se cair, bebem.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Massagem: Guarde esta carta para cobrar uma massagem completa apÃ³s o jogo.', color: 'blue' },
            { type: 'bonus', text: 'O Chefe: Pelas prÃ³ximas 3 rodadas, vocÃª dita o ritmo (pode mandar o outro beber ou tirar roupa).', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ pensou em mim hoje no meio do trabalho.', color: 'blue' },
            { type: 'bonus', text: 'Roleta Russa: Bebam os dois uma dose; o Ãºltimo a virar o copo tira uma peÃ§a de roupa.', color: 'blue' },
            { type: 'bonus', text: 'ApagÃ£o: A prÃ³xima rodada inteira deve ser jogada no escuro ou de olhos fechados.', color: 'blue' },
            { type: 'bonus', text: 'Vale-PosiÃ§Ã£o: Guarde esta carta para escolher a primeira posiÃ§Ã£o de hoje mais tarde.', color: 'blue' },
            { type: 'bonus', text: 'Vire a Dose: Aquele que estiver com mais roupas no corpo vira a bebida.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ flertou comigo para conseguir algo.', color: 'blue' },
            { type: 'bonus', text: 'Troca de Roupas: Troque de blusa com seu parceiro(a).', color: 'blue' },
            { type: 'bonus', text: 'Verdade Ã  ForÃ§a: Use esta carta para obrigar o parceiro(a) a responder qualquer pergunta sua (sem opÃ§Ãµes do jogo).', color: 'blue' },
            { type: 'bonus', text: 'Sem MÃ£os: A partir de agora, o parceiro(a) que tirou a carta nÃ£o pode usar as mÃ£os atÃ© a prÃ³xima rodada.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Striptease: Entregue esta carta e o seu parceiro(a) deve tirar uma peÃ§a de roupa lentamente.', color: 'blue' },
            { type: 'bonus', text: 'Contato Fixo: VocÃªs devem manter uma parte do corpo encostada na do outro pelo resto do jogo.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ teve um orgasmo mÃºltiplo comigo.', color: 'blue' },
            { type: 'bonus', text: 'Voto de SilÃªncio: O parceiro(a) que tirou a carta nÃ£o pode falar atÃ© sua prÃ³xima vez. Se falar, bebe.', color: 'blue' },
            { type: 'bonus', text: 'Desafio Duplo: Os dois devem cumprir o mesmo desafio fÃ­sico da Ãºltima carta de Desafio.', color: 'blue' },
            { type: 'bonus', text: 'Brinde aos Amantes: FaÃ§am um brinde olhando nos olhos, entrelacem os braÃ§os e bebam.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Oral: Guarde esta carta para resgatar na hora H.', color: 'blue' },
            { type: 'bonus', text: 'Refresco: Beba duas doses e ganhe o direito de colocar a mÃ£o dentro da roupa do parceiro(a).', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª for o mais ciumento(a) da relaÃ§Ã£o.', color: 'blue' },
            { type: 'bonus', text: 'Troca-Troca: Troquem de lugares na mesa/sofÃ¡/cama. O Ãºltimo a sentar bebe.', color: 'blue' },
            { type: 'bonus', text: 'Vale "NÃ£o": Cancele qualquer carta de Verdade ou Desafio sua no futuro.', color: 'blue' },
            { type: 'bonus', text: 'Sem Piscar: O primeiro a piscar tira uma peÃ§a de roupa.', color: 'blue' },
            { type: 'bonus', text: 'Escravos de JÃ³: Passem um gole de bebida de boca em boca. Quem engolir primeiro perde e tira uma roupa.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ quis me agarrar no trÃ¢nsito.', color: 'blue' },
            { type: 'bonus', text: 'Direto do Corpo: Sirva um pouco de bebida no pescoÃ§o ou barriga do parceiro(a) e beba.', color: 'blue' },
            { type: 'bonus', text: 'Aposta: Joguem pedra, papel e tesoura. Quem perder bebe e ganha um chupÃ£o.', color: 'blue' },
            { type: 'bonus', text: 'O Som do Desejo: Coloque a playlist mais sexy que vocÃªs tÃªm para tocar agora.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª prefere transar de manhÃ£. O outro bebe se preferir Ã  noite.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Dominador: Guarde esta carta para amarrar/vendar o parceiro(a) mais tarde.', color: 'blue' },
            { type: 'bonus', text: 'Pausa para o Beijo: O jogo pausa por 2 minutos exclusivamente para vocÃªs se beijarem intensamente.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª mandaria uma foto provocante agora mesmo. E mande!', color: 'blue' },
            { type: 'bonus', text: 'Fogo no Parquinho: O parceiro escolhe qual peÃ§a de roupa sua vocÃª deve tirar agora.', color: 'blue' },
            { type: 'bonus', text: 'Tiro no Escuro: Feche os olhos, aponte para um lugar do corpo do parceiro e ele(a) deve te beijar ali.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª acha que temos a melhor quÃ­mica da sua vida.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Fantasia: O parceiro(a) que tirar essa carta escolhe uma fantasia para o outro realizar hoje.', color: 'blue' },
            { type: 'bonus', text: 'ConexÃ£o: Bebam de braÃ§os dados (estilo casamento) e finalizem com um selinho.', color: 'blue' },
            { type: 'bonus', text: 'Eu Nunca: FaÃ§a um "Eu nunca" picante. Se o parceiro jÃ¡ fez, ele bebe.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª Ã© o mais barulhento(a) na cama.', color: 'blue' },
            { type: 'bonus', text: 'CartÃ£o Vermelho: Pule a vez do seu parceiro(a) e faÃ§a ele(a) beber por vocÃª.', color: 'blue' },
            { type: 'bonus', text: 'Toque Cego: De olhos fechados, adivinhe qual parte do seu corpo o parceiro estÃ¡ tocando. Se errar, bebe.', color: 'blue' },
            { type: 'bonus', text: 'Revanche: FaÃ§a o parceiro(a) cumprir o desafio que ele te deu trÃªs rodadas atrÃ¡s.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ estÃ¡ levemente alterado(a) (e com muito calor).', color: 'blue' },
            { type: 'bonus', text: 'Game Over: O jogo acaba aqui. Peguem as bebidas e vÃ£o direto para o quarto (ou onde preferirem)!', color: 'blue' }
        ];

        this.eclipsePenumbraDeck = [
            // --- Verdade ---
            { type: 'verdade', text: 'Qual Ã© a liÃ§Ã£o mais valiosa que vocÃª aprendeu com um erro nosso no passado?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª pudesse mudar de carreira amanhÃ£, o que vocÃª faria e como eu poderia te apoiar?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o medo que vocÃª tem e que raramente confessa para alguÃ©m?', color: 'green' },
            { type: 'verdade', text: 'Existe algum lugar no mundo que vocÃª sente que "pertence", mesmo sem nunca ter ido lÃ¡?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª acha que Ã© a coisa mais difÃ­cil de se entender sobre a sua personalidade?', color: 'green' },
            { type: 'verdade', text: 'Qual foi o momento em que vocÃª sentiu mais orgulho de mim?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª pudesse fazer uma pergunta ao "eu" do futuro sobre nÃ³s, o que perguntaria?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a pequena coisa que eu faÃ§o que faz vocÃª se sentir em casa?', color: 'green' },
            { type: 'verdade', text: 'Qual hobby ou interesse meu vocÃª passou a gostar sÃ³ por causa da nossa convivÃªncia?', color: 'green' },
            { type: 'verdade', text: 'Se tivÃ©ssemos que viver em uma casa minÃºscula (tiny house) por um ano, o que vocÃª mais sentiria falta e o que mais gostaria?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a sua memÃ³ria favorita de uma viagem ou passeio simples que fizemos?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª gostaria que fizÃ©ssemos mais vezes juntos durante a semana?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a diferenÃ§a entre nÃ³s que vocÃª acha que mais equilibra a nossa relaÃ§Ã£o?', color: 'green' },
            { type: 'verdade', text: 'Se vocÃª pudesse escolher um "superpoder" para eu ter, qual seria e por quÃª?', color: 'green' },
            { type: 'verdade', text: 'Qual conselho sobre amor vocÃª daria para o seu eu de 15 anos atrÃ¡s?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o projeto de vida que vocÃª mais tem medo de nÃ£o realizar?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª mais valoriza na nossa amizade, alÃ©m do nosso romance?', color: 'green' },
            { type: 'verdade', text: 'Existe algum sonho recorrente ou pensamento que vocÃª tem quando acorda e me vÃª ao lado?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a mÃºsica que define a fase que estamos vivendo agora?', color: 'green' },
            { type: 'verdade', text: 'Se fÃ´ssemos abrir um negÃ³cio juntos, o que seria?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© o seu maior "oÃ¡sis" mental quando o mundo lÃ¡ fora estÃ¡ um caos?', color: 'green' },
            { type: 'verdade', text: 'O que vocÃª mais gosta na minha famÃ­lia ou no meu cÃ­rculo de amigos?', color: 'green' },
            { type: 'verdade', text: 'Como vocÃª descreveria a nossa conexÃ£o para um estranho em apenas uma frase?', color: 'green' },
            { type: 'verdade', text: 'Qual Ã© a pergunta que vocÃª gostaria que eu te fizesse com mais frequÃªncia?', color: 'green' },
            { type: 'verdade', text: 'Se pudÃ©ssemos parar o tempo por 24 horas para fazer qualquer coisa (sem cansaÃ§o), o que farÃ­amos?', color: 'green' },

            // --- Desafio ---
            { type: 'desafio', text: 'Feche os olhos e tente descrever exatamente a roupa que eu estou usando agora, nos mÃ­nimos detalhes.', color: 'red' },
            { type: 'desafio', text: 'Escolha um objeto na sala e conte uma histÃ³ria fictÃ­cia de como ele representa nossa uniÃ£o.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a uma lista de 3 mÃºsicas que vocÃª quer que toquem no nosso prÃ³ximo momento especial.', color: 'red' },
            { type: 'desafio', text: 'Desenhe algo na palma da minha mÃ£o e eu tenho que adivinhar o que Ã© de olhos fechados.', color: 'red' },
            { type: 'desafio', text: 'Diga algo que vocÃª aprendeu sobre si mesmo(a) graÃ§as ao nosso relacionamento.', color: 'red' },
            { type: 'desafio', text: 'Escreva no meu braÃ§o, usando apenas o dedo, uma palavra que defina seu sentimento agora.', color: 'red' },
            { type: 'desafio', text: 'Conte um segredo bobo da sua infÃ¢ncia que vocÃª tem vergonha, mas que Ã© engraÃ§ado.', color: 'red' },
            { type: 'desafio', text: 'Olhe-se no espelho comigo e diga uma coisa que vocÃª ama em nÃ³s como casal.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a uma playlist mental para mim agora e diga qual seria a primeira mÃºsica.', color: 'red' },
            { type: 'desafio', text: 'DÃª um beijo em cada uma das minhas mÃ£os e faÃ§a um agradecimento por algo que eu fiz hoje.', color: 'red' },
            { type: 'desafio', text: 'Tente me fazer rir em menos de 30 segundos usando apenas expressÃµes faciais.', color: 'red' },
            { type: 'desafio', text: 'Descreva como seria a nossa casa dos sonhos se pudÃ©ssemos construÃ­-la hoje.', color: 'red' },
            { type: 'desafio', text: 'Reencontre uma foto nossa de mais de um ano atrÃ¡s e conte o que vocÃª estava sentindo naquele dia.', color: 'red' },
            { type: 'desafio', text: 'Fique abraÃ§ado(a) comigo em silÃªncio por duas rodadas completas.', color: 'red' },
            { type: 'desafio', text: 'Diga qual Ã© a caracterÃ­stica fÃ­sica minha que vocÃª acha mais "acolhedora".', color: 'red' },
            { type: 'desafio', text: 'Conte um plano de "aventura" (como um acampamento ou trilha) que vocÃª quer fazer comigo.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a um elogio a uma conquista minha que vocÃª acompanhou de perto.', color: 'red' },
            { type: 'desafio', text: 'Mostre-me um vÃ­deo ou meme que sempre te faz rir e explique o porquÃª.', color: 'red' },
            { type: 'desafio', text: 'Invente um aperto de mÃ£o secreto sÃ³ para nÃ³s dois.', color: 'red' },
            { type: 'desafio', text: 'Me conte sobre uma pessoa que te inspirou a ser quem vocÃª Ã© hoje.', color: 'red' },
            { type: 'desafio', text: 'DÃª um "abraÃ§o de urso" em mim por 20 segundos cronometrados.', color: 'red' },
            { type: 'desafio', text: 'Escolha um livro ou filme e diga qual personagem eu seria e por quÃª.', color: 'red' },
            { type: 'desafio', text: 'Fale sobre um lugar que vocÃª quer me levar para conhecer pela primeira vez.', color: 'red' },
            { type: 'desafio', text: 'Tente adivinhar qual Ã© o meu maior desejo para a prÃ³xima semana.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a um carinho no meu rosto enquanto diz o que mais te acalma na minha voz.', color: 'red' },
            { type: 'desafio', text: 'Descreva o aroma que vocÃª associa a mim (alÃ©m de perfume).', color: 'red' },
            { type: 'desafio', text: 'Diga trÃªs coisas que vocÃª quer que a gente faÃ§a juntos antes de o ano acabar.', color: 'red' },
            { type: 'desafio', text: 'Escreva uma pequena nota de gratidÃ£o no guardanapo ou papel e me entregue.', color: 'red' },
            { type: 'desafio', text: 'FaÃ§a uma massagem rÃ¡pida nos meus ombros para tirar a tensÃ£o do dia.', color: 'red' },
            { type: 'desafio', text: 'Conte-me sobre um momento em que vocÃª sentiu muita saudade de mim, mesmo estando longe por pouco tempo.', color: 'red' },
            { type: 'desafio', text: 'Me imite pedindo um favor de um jeito que vocÃª acha engraÃ§ado.', color: 'red' },
            { type: 'desafio', text: 'Diga qual Ã© o seu talento "escondido" que vocÃª raramente pratica.', color: 'red' },
            { type: 'desafio', text: 'Olhe para mim e tente nÃ£o sorrir enquanto eu tento te fazer sorrir.', color: 'red' },
            { type: 'desafio', text: 'Compartilhe um pensamento positivo que vocÃª teve sobre nÃ³s hoje cedo.', color: 'red' },
            { type: 'desafio', text: 'Escolha uma palavra que serÃ¡ nossa "palavra de ordem" para quando precisarmos de um tempo sÃ³ nosso.', color: 'red' },

            // --- BÃ´nus ---
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ sorriu para o celular lendo uma mensagem minha hoje.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª guardou algum objeto que te lembra de nÃ³s.', color: 'blue' },
            { type: 'bonus', text: 'Vale-CafÃ© na Cama: Guarde esta carta para ganhar um cafÃ© da manhÃ£ especial no fim de semana.', color: 'blue' },
            { type: 'bonus', text: 'Troca de Perspectiva: Responda a prÃ³xima pergunta de Verdade como se fosse o seu parceiro.', color: 'blue' },
            { type: 'bonus', text: 'Mestre do Tempo: VocÃª pode pular uma pergunta se prometer respondÃª-la em um jantar futuro.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Elogio: O parceiro deve escrever 3 qualidades suas em um post-it e colar em algum lugar visÃ­vel.', color: 'blue' },
            { type: 'bonus', text: 'Momento Nostalgia: Parem o jogo para ver 5 fotos aleatÃ³rias da galeria do celular um do outro.', color: 'blue' },
            { type: 'bonus', text: 'Ouvinte Atento: Pelas prÃ³ximas 2 rodadas, vocÃª nÃ£o pode interromper o parceiro por nada.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª jÃ¡ planejou o futuro com a gente na sua cabeÃ§a.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Escolha de Filme: VocÃª tem o poder de escolher o prÃ³ximo filme que assistiremos sem reclamaÃ§Ãµes.', color: 'blue' },
            { type: 'bonus', text: 'ConexÃ£o Visual: Durante toda a prÃ³xima rodada, vocÃªs devem manter as mÃ£os dadas.', color: 'blue' },
            { type: 'bonus', text: 'Sintonia Musical: Escolha uma mÃºsica para ser o fundo musical das prÃ³ximas 5 cartas.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... vocÃª se sente mais seguro(a) hoje do que quando comeÃ§amos.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Massagem nos PÃ©s: Resgate este cartÃ£o para uma massagem relaxante apÃ³s o jogo.', color: 'blue' }
        ];

        this.binaryWishesDeck = [
            // --- DominaÃ§Ã£o e Controle ---
            { category: 'DominaÃ§Ã£o', text: 'VocÃª aceitaria passar 24 horas sob meu controle total, obedecendo a ordens sem questionar?' },
            { category: 'DominaÃ§Ã£o', text: 'Toparia ser amarrado(a) e vendado(a) hoje, deixando que eu decida onde e como te tocar?' },
            { category: 'DominaÃ§Ã£o', text: 'Usaria uma palavra de seguranÃ§a para explorarmos nossos limites de dominaÃ§Ã£o hoje Ã  noite?' },
            { category: 'DominaÃ§Ã£o', text: 'VocÃª me entregaria o controle de um acessÃ³rio vibratÃ³rio enquanto estamos fora de casa?' },
            { category: 'DominaÃ§Ã£o', text: 'Aceitaria ser "punido(a)" com palmadas ou restriÃ§Ãµes leves se desobedecer a uma regra minha?' },
            { category: 'DominaÃ§Ã£o', text: 'Toparia um cenÃ¡rio onde um de nÃ³s finge ser um completo estranho que te "seduz" Ã  forÃ§a em casa?' },

            // --- Sensorial e Impacto ---
            { category: 'Sensorial', text: 'VocÃª gostaria de experimentar o impacto de gotas de cera morna de vela erÃ³tica na pele?' },
            { category: 'Sensorial', text: 'Toparia usar gelo nas minhas zonas erÃ³genas enquanto vocÃª me leva ao limite?' },
            { category: 'Sensorial', text: 'VocÃª aceitaria uma massagem tÃ¢ntrica usando apenas o meu corpo e Ã³leo aquecido?' },
            { category: 'Sensorial', text: 'Gostaria de sentir o contraste entre uma textura de metal frio e o calor do meu hÃ¡lito?' },
            { category: 'Sensorial', text: 'VocÃª toparia ficar 15 minutos sem poder me tocar enquanto eu faÃ§o o que quiser com vocÃª?' },
            { category: 'Sensorial', text: 'Aceitaria ser provado(a) Ã s cegas, tentando adivinhar quais alimentos ou texturas estou usando em vocÃª?' },

            // --- Roleplay e CenÃ¡rios ---
            { category: 'Roleplay', text: 'VocÃª toparia fingir que somos desconhecidos em um bar e me ver te "convencendo" a ir para um hotel?' },
            { category: 'Roleplay', text: 'Aceitaria fazer um vÃ­deo Ã­ntimo hoje, com a condiÃ§Ã£o de assistirmos e deletarmos (ou guardarmos) depois?' },
            { category: 'Roleplay', text: 'VocÃª teria coragem de iniciar algo ousado em um local pÃºblico onde corremos o risco de ser vistos?' },
            { category: 'Roleplay', text: 'Toparia um cenÃ¡rio de "entrevista de emprego", onde vocÃª precisa ser muito persuasivo(a) para conseguir a vaga?' },
            { category: 'Roleplay', text: 'VocÃª usaria uma lingerie ou peÃ§a de roupa que eu escolhesse, mesmo que fosse algo que vocÃª nunca usou?' },

            // --- Atos e ExploraÃ§Ãµes ---
            { category: 'FÃ­sico', text: 'VocÃª toparia focar exclusivamente no meu prazer oral hoje, sem que eu retribua atÃ© o final?' },
            { category: 'FÃ­sico', text: 'Aceitaria experimentar uma posiÃ§Ã£o do Kamasutra que pareÃ§a "impossÃ­vel" ou muito acrobÃ¡tica?' },
            { category: 'FÃ­sico', text: 'VocÃª gostaria de praticar o "edging" (chegar ao limite e parar) vÃ¡rias vezes antes de eu te deixar chegar lÃ¡?' },
            { category: 'FÃ­sico', text: 'Toparia usar um brinquedo novo ou acessÃ³rio que nunca testamos antes?' },
            { category: 'FÃ­sico', text: 'VocÃª aceitaria que eu usasse o "dirty talk" de forma muito mais agressiva e explÃ­cita hoje?' },
            { category: 'FÃ­sico', text: 'Toparia fazer sexo na frente de um espelho grande para que possamos ver cada detalhe?' },

            // --- Desejos Ocultos ---
            { category: 'Oculto', text: 'VocÃª aceitaria que eu te acordasse no meio da noite para comeÃ§armos algo intenso de imediato?' },
            { category: 'Oculto', text: 'Toparia compartilhar comigo sua fantasia mais "suja" que vocÃª nunca teve coragem de contar?' },
            { category: 'Oculto', text: 'VocÃª aceitaria ser filmado(a) ou fotografado(a) em poses que sÃ³ eu poderei ver?' },
            { category: 'Oculto', text: 'Toparia trocar as luzes por uma iluminaÃ§Ã£o vermelha ou neon para mudar completamente o clima?' },
            { category: 'Oculto', text: 'VocÃª aceitaria que eu convidasse uma "terceira pessoa" (apenas na nossa imaginaÃ§Ã£o e conversa) para o quarto?' },
            { category: 'Oculto', text: 'Toparia passar o dia todo sem roupa de baixo, sabendo que eu sei disso o tempo todo?' },
            { category: 'Oculto', text: 'VocÃª aceitaria que o ato final hoje fosse em um cÃ´modo da casa onde nunca fizemos antes?' }
        ];

        // Estado do jogo BinÃ¡rio
        this.binaryState = {
            turn: 'player1', // player1, player2, results
            p1Choices: [],
            p2Choices: [],
            currentCardIndex: 0,
            shuffledDeck: []
        };

        this.binaryState = {
            turn: 'player1', // player1, player2, results
            p1Choices: [],
            p2Choices: [],
            currentCardIndex: 0,
            shuffledDeck: []
        };

        // Dados da Roleta da Temperatura
        this.temperatureDeck = {
            lowHeat: {
                actions: ['Beijo de esquimÃ³', 'Sopro de leve', 'CarÃ­cia com as unhas', 'Beijo suave', 'Massagem', 'Mordida de leve', 'Trilha de beijos'],
                bodyParts: ['Ponta do nariz', 'Nuca', 'BraÃ§os', 'PÃ¡lpebras', 'Ombros', 'LÃ³bulo da orelha', 'PescoÃ§o'],
                time: [15, 20, 45, 10, 60, 15, 30] // segundos
            },
            highHeat: {
                actions: ['Beijo molhado', 'Mordida provocante', 'Beijo com gelo', 'Massagem firme', 'Beijo de cinema', 'Marcar com beijo', 'Sussurrar desejo'],
                bodyParts: ['AtrÃ¡s da orelha', 'Coxa interna', 'Barriga/Umbigo', 'Virilha (por cima da roupa)', 'Boca (lÃ­ngua)', 'Onde vocÃª escolher', 'No ouvido (bem perto)'],
                time: [45, 20, 30, 60, 60, 30, 40]
            }
        };

        this.rouletteState = {
            level: 'low', // low, high
            spinCount: 0,
            isSpinning: false,
            currentResult: null,
            vetoCount: 3,
            timer: null,
            timeLeft: 0
        };

        this.escaladaDeck = [
            "Apenas contato visual profundo, sem se tocarem por 30 segundos.",
            "Apenas carÃ­cias suaves com as pontas dos dedos no rosto e pescoÃ§o.",
            "Sinta a respiraÃ§Ã£o um do outro bem de perto, mas ainda sem beijar na boca.",
            "Adicione beijos lentos e ternos, explorando apenas os lÃ¡bios.",
            "Leves mordidas e beijos no lÃ³bulo da orelha e no maxilar.",
            "MÃ£os permitidas apenas nas costas e ombros, massageando suavemente.",
            "Sussurre no ouvido do parceiro uma fantasia que vocÃª tem e quer realizar hoje.",
            "MÃ£os liberadas para qualquer lugar acima da cintura, explorando cada curva.",
            "Fechem os olhos e foquem apenas no tato, sentindo cada centÃ­metro da pele exposta.",
            "Explore o pescoÃ§o do parceiro com beijos Ãºmidos e leves chupÃµes.",
            "Aumente a intensidade do beijo na boca, adicionando lÃ­ngua e paixÃ£o.",
            "Passe as unhas de leve pelos braÃ§os, pernas e costelas do outro, arrepiando a pele.",
            "Tirem uma peÃ§a de roupa de cada um (acessÃ³rios, calÃ§ados ou meias contam).",
            "Usem as mÃ£os livremente para explorar todo o corpo, mas ainda sem tocar nas zonas Ã­ntimas diretas.",
            "O parceiro ativo deve morder suavemente o lÃ¡bio inferior do outro, puxando levemente.",
            "Tirem mais uma peÃ§a de roupa, deixando mais pele Ã  mostra.",
            "ProvocaÃ§Ã£o total: beijos Ãºmidos e leves mordidas por todo o corpo, exceto nas zonas mais Ã­ntimas.",
            "Usem o corpo um do outro para criar fricÃ§Ã£o, esfregando-se, sem usar as mÃ£os por 30 segundos.",
            "Comecem as preliminares com foco exclusivo na regiÃ£o do umbigo e da barriga (beijos, lÃ­ngua, carÃ­cias).",
            "A intensidade agora Ã© mÃ¡xima: mÃ£os e bocas liberadas em **qualquer lugar**, exceto o ponto de nÃ£o-retorno.",
            "Tirem a Ãºltima peÃ§a de roupa que estÃ¡ impedindo o contato total da pele.",
            "Preliminares completas: Beijem e toquem-se como se fosse a Ãºltima vez, levando ao limite.",
            "Sussurrem exatamente o que vocÃªs querem fazer um com o outro AGORA.",
            "LiberaÃ§Ã£o quase total: O parceiro ativo tem 1 minuto para levar o outro ao Ã¡pice sem chegar ao final.",
            "LiberaÃ§Ã£o total: O tempo de provocar acabou! O prazer Ã© o Ãºnico guia agora."
        ];

        this.termometroState = {
            startTime: null,
            elapsedSeconds: 0,
            interval: null,
            instructionIndex: 0,
            isActive: false
        };

        // Carregar estado salvo ou iniciar
        this.currentView = localStorage.getItem('hub_currentView') || 'home';
        this.currentGameId = localStorage.getItem('hub_currentGameId') || null;
        this.currentCard = null;
    }

    getGame(id) {
        return this.games.find(g => g.id === id);
    }

    getRandomCard() {
        if (this.currentGameId === 'eu-nunca') {
            return this.getNextEuNuncaCard();
        }

        let deck = [];
        let usedSet = null;

        if (this.currentGameId === 'esquenta') {
            deck = this.esquentaDeck;
        } else if (this.currentGameId === 'eclipse-penumbra') {
            deck = this.eclipsePenumbraDeck;
        } else if (this.currentGameId === 'eclipse-social') {
            deck = this.eclipseSocialDeck;
            usedSet = this.usedEclipseSocialIndices;
        } else if (this.currentGameId === 'quem-mais-provavel') {
            deck = this.quemMaisProvavelDeck;
            usedSet = this.usedQuemMaisProvavelIndices;
        } else if (this.currentGameId === 'eu-nunca-festa') {
            deck = this.euNuncaGrupoDeck;
            usedSet = this.usedEuNuncaGrupoIndices;
        } else if (this.currentGameId === 'sintonia-fina') {
            deck = this.sintoniaFinaDeck;
            usedSet = this.usedSintoniaFinaIndices;
        }

        if (deck.length === 0) return { type: 'erro', text: 'Baralho vazio ou erro.', color: 'grey' };

        // Sorteio com controle de usados (especÃ­fico para Eclipse Social por enquanto)
        if (usedSet) {
            if (usedSet.size >= deck.length) usedSet.clear();

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * deck.length);
            } while (usedSet.has(randomIndex));

            usedSet.add(randomIndex);
            this.currentCard = deck[randomIndex];
        } else {
            const randomIndex = Math.floor(Math.random() * deck.length);
            this.currentCard = deck[randomIndex];
        }

        return this.currentCard;
    }

    startEuNuncaGame() {
        this.euNuncaState = {
            round: 0,
            usedIndices: new Set()
        };
        // Resetar filtro se necessÃ¡rio
    }

    getNextEuNuncaCard() {
        this.euNuncaState.round++;
        const round = this.euNuncaState.round;
        const deck = this.euNuncaDeck;
        const used = this.euNuncaState.usedIndices;

        // Resetar usado se encher
        if (used.size >= deck.length) {
            used.clear();
            alert('Todas as cartas foram usadas! Reembaralhando...');
        }

        // Definir pesos baseado na rodada
        let weights = { 1: 0, 2: 0, 3: 0 };

        if (round <= 5) {
            weights = { 1: 1.0, 2: 0, 3: 0 };
        } else if (round <= 10) {
            weights = { 1: 0.7, 2: 0.3, 3: 0 };
        } else if (round <= 15) {
            weights = { 1: 0.3, 2: 0.7, 3: 0 };
        } else if (round <= 20) {
            weights = { 1: 0, 2: 1.0, 3: 0 };
        } else if (round <= 25) {
            weights = { 1: 0, 2: 0.6, 3: 0.4 };
        } else {
            weights = { 1: 0, 2: 0.1, 3: 0.9 };
        }

        // Filtrar candidatos disponÃ­veis por nÃ­vel
        const candidates = deck.map((card, index) => ({ ...card, index })).filter(c => !used.has(c.index));

        const candidatesL1 = candidates.filter(c => c.level === 1);
        const candidatesL2 = candidates.filter(c => c.level === 2);
        const candidatesL3 = candidates.filter(c => c.level === 3);

        // Se faltar carta do nÃ­vel desejado, joga para o prÃ³ximo disponÃ­vel
        // Sorteio de nÃ­vel alvo
        const r = Math.random();
        let targetLevel = 1;

        // Logica simples de roleta para escolher nÃ­vel
        // Normalizar pesos se algum nÃ­vel estiver vazio
        if (candidatesL1.length === 0) weights[1] = 0;
        if (candidatesL2.length === 0) weights[2] = 0;
        if (candidatesL3.length === 0) weights[3] = 0;

        const totalWeight = weights[1] + weights[2] + weights[3];
        if (totalWeight === 0) {
            // Caso extremo: acabou tudo
            return { text: "Fim de jogo!", level: 0 };
        }

        const normalizedW1 = weights[1] / totalWeight;
        const normalizedW2 = weights[2] / totalWeight;
        // W3 Ã© o resto

        if (r < normalizedW1) targetLevel = 1;
        else if (r < normalizedW1 + normalizedW2) targetLevel = 2;
        else targetLevel = 3;

        // Selecionar array do nÃ­vel sorteado
        let pool = [];
        if (targetLevel === 1) pool = candidatesL1;
        else if (targetLevel === 2) pool = candidatesL2;
        else pool = candidatesL3;

        // Se por arredondamento pool ficar vazio (raro com a normalizaÃ§Ã£o, mas seguro morrer velho)
        if (pool.length === 0) {
            pool = candidates; // Pega qualquer um
        }

        const chosenIndex = Math.floor(Math.random() * pool.length);
        const card = pool[chosenIndex];

        // Marcar como usado
        used.add(card.index);

        return card;
    }

    // --- LÃ³gica Nosso CÃ³digo (MÃ­micas) ---
    initNossoCodigo() {
        this.mimicState = {
            gameActive: true,
            currentPlayer: 1,
            score: 0,
            skipsUsed: 0,
            maxSkips: 1,
            currentCard: null,
            timeRemaining: 20,
            timer: null,
            isTimerRunning: false,
            usedIndices: new Set()
        };
        if (this.mimicState.timer) clearInterval(this.mimicState.timer);
    }

    drawNossoCodigoCard() {
        const deck = this.nossoCodigoDeck;
        const used = this.mimicState.usedIndices;

        if (used.size >= deck.length) {
            used.clear(); // Reseta se acabar
            // Opcional: Avisar usuÃ¡rio
        }

        const available = deck.map((c, i) => ({ ...c, index: i })).filter(c => !used.has(c.index));

        if (available.length === 0) return null; // SeguranÃ§a

        const randomIndex = Math.floor(Math.random() * available.length);
        const card = available[randomIndex];
        used.add(card.index);

        this.mimicState.currentCard = card;
        this.mimicState.timeRemaining = 20;
        this.mimicState.isTimerRunning = false;

        if (this.mimicState.timer) clearInterval(this.mimicState.timer);

        return card;
    }

    startMimicTimer(callback) {
        if (this.mimicState.timer) clearInterval(this.mimicState.timer);

        this.mimicState.isTimerRunning = true;
        this.mimicState.timer = setInterval(() => {
            this.mimicState.timeRemaining--;
            callback(this.mimicState.timeRemaining);

            if (this.mimicState.timeRemaining <= 0) {
                clearInterval(this.mimicState.timer);
                this.mimicState.isTimerRunning = false;
                callback(0, true); // Tempo acabou
            }
        }, 1000);
    }

    mimicSuccess() {
        this.mimicState.score++;
        this.switchMimicPlayer();
        return this.mimicState.score;
    }

    mimicSkip() {
        if (this.mimicState.skipsUsed < this.mimicState.maxSkips) {
            this.mimicState.skipsUsed++;
            return true;
        }
        return false;
    }

    switchMimicPlayer() {
        this.mimicState.currentPlayer = this.mimicState.currentPlayer === 1 ? 2 : 1;
        if (this.mimicState.timer) clearInterval(this.mimicState.timer);
        this.mimicState.isTimerRunning = false;
    }

    // --- LÃ³gica LeilÃ£o de Intimidade ---
    initAuction() {
        this.auctionState = {
            saldoP1: 100,
            saldoP2: 100,
            inventoryP1: [],
            inventoryP2: [],
            lastGastoP1: 0,
            lastGastoP2: 0,
            currentItem: null,
            deck: [...this.auctionDeck], // CÃ³pia para manipular
            message: "FaÃ§am seus lances!",
            gameOver: false
        };
        this.drawAuctionItem();
    }

    drawAuctionItem() {
        if (this.auctionState.deck.length === 0) {
            this.auctionState.gameOver = true;
            this.auctionState.currentItem = null;
            return;
        }
        // Sorteia um item
        const index = Math.floor(Math.random() * this.auctionState.deck.length);
        this.auctionState.currentItem = this.auctionState.deck.splice(index, 1)[0];
    }

    placeBid(bidP1, bidP2) {
        const state = this.auctionState;
        const p1 = parseInt(bidP1);
        const p2 = parseInt(bidP2);

        if (isNaN(p1) || isNaN(p2)) return { success: false, msg: "Valores invÃ¡lidos!" };
        if (p1 > state.saldoP1 || p2 > state.saldoP2) return { success: false, msg: "Saldo insuficiente!" };

        let resultMsg = "";

        if (p1 > p2) {
            state.saldoP1 -= p1;
            state.lastGastoP1 = p1;
            state.inventoryP1.push(state.currentItem);
            resultMsg = `Jogador 1 venceu com ${p1}! (-${p1} saldo)`;
            this.applyAuctionEffect(1, 2);
        } else if (p2 > p1) {
            state.saldoP2 -= p2;
            state.lastGastoP2 = p2;
            state.inventoryP2.push(state.currentItem);
            resultMsg = `Jogador 2 venceu com ${p2}! (-${p2} saldo)`;
            this.applyAuctionEffect(2, 1);
        } else {
            // Empate: item volta pro deck
            state.deck.push(state.currentItem);
            resultMsg = `Empate em ${p1}! O item voltou para o leilÃ£o.`;
        }

        // Verifica fim de jogo por saldo (opcional, mas pedido: "jogo acaba quando um saldo chega a zero ou prÃªmios acabam")
        // Mas se saldo zero, o jogador ainda pode jogar se o outro tiver saldo? A regra diz "O jogo acaba quando um saldo chega a zero".
        if (state.saldoP1 <= 0 && state.saldoP2 <= 0) {
            state.gameOver = true;
        } else {
            this.drawAuctionItem(); // PrÃ³ximo item
        }

        if (state.deck.length === 0 && !state.currentItem) {
            state.gameOver = true;
        }

        state.message = resultMsg;
        return { success: true, msg: resultMsg };
    }

    applyAuctionEffect(winnerNum, loserNum) {
        const state = this.auctionState;
        const card = state.currentItem;
        if (!card || !card.effect) return;

        const winnerSaldoKey = `saldoP${winnerNum}`;
        const loserSaldoKey = `saldoP${loserNum}`;
        const lastGastoKey = `lastGastoP${winnerNum}`;

        switch (card.effect) {
            case 'add_credit':
                state[winnerSaldoKey] += card.value;
                state.message += ` | BÃ´nus: +${card.value} moedas!`;
                break;
            case 'tax':
                // Jogador que ganhou a carta recebe 10 do outro
                state[loserSaldoKey] -= card.value;
                state[winnerSaldoKey] += card.value;
                state.message += ` | TaxaÃ§Ã£o: Recebeu ${card.value} do oponente!`;
                break;
            case 'refund':
                // Recupera 50% do gasto ATUAL (jÃ¡ que a funÃ§Ã£o Ã© chamada logo apÃ³s deduzir o saldo)
                // Ou seria da compra anterior? A carta diz "Ãºltima compra".
                // Se eu acabei de comprar essa carta, ela Ã© a "Ãºltima compra"?
                // Geralmente cartas estratÃ©gicas agem sobre a transaÃ§Ã£o que as adquiriu ou a anterior.
                // Vou implementar como reembolso da transaÃ§Ã£o ATUAL para simplificar e ser imediato.
                const refundAmount = Math.round(state[lastGastoKey] * card.value);
                state[winnerSaldoKey] += refundAmount;
                state.message += ` | Reembolso: +${refundAmount} moedas (50%)!`;
                break;
        }
    }

    // --- LÃ³gica Dados do Prazer ---
    initDiceGame() {
        this.diceState = {
            result: { d1: '?', d2: '?' },
            isSpinning: false,
            timer: null,
            timeRemaining: 0,
            isTimerRunning: false,
            availableD1: [...this.dice1Options].sort(() => Math.random() - 0.5),
            availableD2: [...this.dice2Options].sort(() => Math.random() - 0.5)
        };
        if (this.diceState.timer) clearInterval(this.diceState.timer);
    }

    rollDice() {
        // Se acabaram as posiÃ§Ãµes, reembaralha
        if (this.diceState.availableD1.length === 0) {
            this.diceState.availableD1 = [...this.dice1Options].sort(() => Math.random() - 0.5);
        }
        if (this.diceState.availableD2.length === 0) {
            this.diceState.availableD2 = [...this.dice2Options].sort(() => Math.random() - 0.5);
        }

        // Tira do topo (sem repetir atÃ© acabar todas)
        const d1 = this.diceState.availableD1.pop();
        const d2 = this.diceState.availableD2.pop();

        this.diceState.result = { d1, d2 };
        this.diceState.isSpinning = true;

        return { d1, d2 };
    }

    startDiceTimer(durationMinutes, callback) {
        if (this.diceState.timer) clearInterval(this.diceState.timer);

        this.diceState.timeRemaining = durationMinutes * 60;
        this.diceState.isTimerRunning = true;

        this.diceState.timer = setInterval(() => {
            this.diceState.timeRemaining--;

            const m = Math.floor(this.diceState.timeRemaining / 60);
            const s = this.diceState.timeRemaining % 60;
            const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

            callback(timeStr);

            if (this.diceState.timeRemaining <= 0) {
                clearInterval(this.diceState.timer);
                this.diceState.isTimerRunning = false;
                callback("Acabou!", true);
            }
        }, 1000);
    }
}

// --- View ---
class GameView {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sidebar = document.getElementById('sidebar');
    }

    renderView(viewName, data = null) {
        // Limpar conteÃºdo atual
        this.mainContent.innerHTML = '';

        // Atualizar navegaÃ§Ã£o
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.view === viewName) link.classList.add('active');
        });

        // Renderizar conteÃºdo baseado na view
        switch (viewName) {
            case 'home':
                this._renderHome();
                break;
            case 'games-couple':
                this._renderGamesList(data, 'de Casal');
                break;
            case 'games-group':
                this._renderGamesList(data, 'em Grupo');
                break;
            case 'game-playing':
                this._renderGameInterface(data);
                break; // Passa o objeto do jogo
            case 'tabuleiro-seducao':
                this._renderSeductionBoard(data);
                break;
            case 'about':
                this._renderAbout();
                break;
            default:
                this._renderHome();
        }
    }

    _renderHome() {
        const section = document.createElement('section');
        section.className = 'view active';
        section.innerHTML = `
            <div class="hero">
                <h2>Bem-vindo ao Hub de Jogos! ðŸŽ®</h2>
                <p>Escolha como vocÃª quer se divertir hoje:</p>
            </div>
            <div class="category-grid">
                <div class="category-card" data-action="nav-category" data-view="games-couple">
                    <div class="category-icon">â¤ï¸</div>
                    <h3>Jogos de Casal</h3>
                    <p>Momentos a dois, conexÃ£o e diversÃ£o picante.</p>
                </div>
                <div class="category-card" data-action="nav-category" data-view="games-group">
                    <div class="category-icon">ðŸ»</div>
                    <h3>Jogos em Grupo</h3>
                    <p>Ria com os amigos e quebre o gelo na festa!</p>
                </div>
            </div>
        `;
        this.mainContent.appendChild(section);
    }

    _renderGamesList(games, categoryTitle = 'DisponÃ­veis') {
        const section = document.createElement('section');
        section.className = 'view active';
        section.innerHTML = `<h2>ðŸŽ® Jogos ${categoryTitle}</h2><div class="games-grid"></div>`;

        const grid = section.querySelector('.games-grid');

        games.forEach(game => {
            const card = document.createElement('div');
            card.className = `game-card theme-${game.theme || 'default'}`;
            card.innerHTML = `
                <div>
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-desc">${game.description}</p>
                </div>
                <button class="cta-btn" data-action="play-game" data-id="${game.id}" ${game.type === 'coming-soon' ? 'disabled' : ''}>
                    ${game.type === 'coming-soon' ? 'Em Breve' : 'Jogar Agora'}
                </button>
            `;
            grid.appendChild(card);
        });

        this.mainContent.appendChild(section);
    }

    _renderGameInterface(game) {
        const section = document.createElement('section');
        section.className = `view active game-interface theme-${game.theme || 'default'}`;

        if (game.id === 'esquenta' || game.id === 'eclipse-penumbra' || game.id === 'eu-nunca' || game.id === 'nosso-codigo' || game.id === 'leilao-intimidade' || game.id === 'eclipse-social' || game.id === 'quem-mais-provavel' || game.id === 'eu-nunca-festa' || game.id === 'sintonia-fina') {

            let cardContent = `
                <p class="card-type">Toque abaixo para comeÃ§ar</p>
                <h3 class="card-text">Pronto?</h3>
            `;

            let nextBtnText = 'PrÃ³xima Carta ðŸŽ²';
            if (game.id === 'eu-nunca') nextBtnText = 'Eu Nunca Casal... ðŸº';
            else if (game.id === 'eu-nunca-festa') nextBtnText = 'Eu Nunca Festa... ðŸ»';
            else if (game.id === 'quem-mais-provavel') nextBtnText = 'Quem serÃ¡? â˜ï¸';
            else if (game.id === 'sintonia-fina') nextBtnText = 'Ver Nossa Sintonia ðŸŽ»';

            let controls = `
                <button class="cta-btn" data-action="next-card">
                    ${nextBtnText}
                </button>
            `;

            // Interface especÃ­fica para Nosso CÃ³digo
            if (game.id === 'nosso-codigo') {
                // Recupera estado atual se existir, senÃ£o usa defaults visuais
                const score = window.gameModel ? window.gameModel.mimicState.score : 0;
                const player = window.gameModel ? window.gameModel.mimicState.currentPlayer : 1;
                const skips = window.gameModel ? window.gameModel.mimicState.skipsUsed : 0;
                const maxSkips = window.gameModel ? window.gameModel.mimicState.maxSkips : 1;

                cardContent = `
                    <div id="mimic-info" style="width: 100%; text-align: center; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: bold; color: var(--text-light); background: rgba(0,0,0,0.05); padding: 0.5rem; border-radius: 8px;">
                            <span id="mimic-turn" style="color: var(--primary-color);">Vez do Jogador ${player} <small>(Imita)</small></span>
                            <span id="mimic-score">Placar Cooperativo: <strong style="font-size: 1.2rem;">${score}</strong></span>
                        </div>
                        <div id="mimic-timer-container" style="position: relative; display: inline-block;">
                            <div id="mimic-timer" style="font-size: 3rem; font-weight: 800; color: var(--text-color); line-height: 1;">20</div>
                            <small style="color: var(--text-light);">segundos</small>
                        </div>
                    </div>

                    <div class="game-card-display mimic-card" id="active-card" style="cursor: pointer; min-height: 300px;" data-action="reveal-mimic">
                        <div class="card-front" style="text-align: center;">
                            <p class="card-type" style="margin-bottom: 2rem;">Toque para revelar a mÃ­mica</p>
                            <div style="font-size: 4rem; opacity: 0.2;">ðŸŽ­</div>
                            <p style="margin-top: 2rem; color: var(--text-light); font-size: 0.9rem;">(Apenas quem vai imitar pode ver!)</p>
                        </div>
                        <div class="card-back" style="display: none; text-align: center;">
                            <p class="card-type" id="mimic-category">Categoria</p>
                            <h3 class="card-text" id="mimic-text" style="font-size: 1.4rem;">Texto da mÃ­mica...</h3>
                        </div>
                    </div>
                 `;

                controls = `
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; width: 100%;">
                        <button class="cta-btn success-btn" data-action="mimic-correct" disabled>Acertou! âœ… (+1)</button>
                        <button class="cta-btn warning-btn" data-action="mimic-skip" disabled>Pular â­ï¸ (${maxSkips - skips} rest.)</button>
                        <button class="cta-btn secondary-btn" data-action="mimic-next-turn" disabled>PrÃ³ximo Turno ðŸ”„</button>
                    </div>
                    <button class="cta-btn text-btn" data-action="nav-games" style="margin-top: 1rem;">Sair do Jogo</button>
                 `;
            }

            section.innerHTML = `
                <h2>${game.title}</h2>
                <div class="card-container">
                    ${game.id === 'nosso-codigo' ? cardContent : `
                    <div class="game-card-display" id="active-card">
                        <p class="card-type">Toque abaixo para comeÃ§ar</p>
                        <h3 class="card-text">Pronto?</h3>
                    </div>`}
                </div>
                <div class="game-controls">
                    ${controls}
                </div>
            `;

            if (game.id === 'leilao-intimidade') {
                const state = window.gameModel ? window.gameModel.auctionState : null;
                const saldoP1 = state ? state.saldoP1 : 100;
                const saldoP2 = state ? state.saldoP2 : 100;
                const currentItem = state ? state.currentItem : null;
                const message = state ? state.message : "FaÃ§am seus lances!";
                const gameOver = state ? state.gameOver : false;

                if (gameOver) {
                    let p1Items = state.inventoryP1.map(i => `<li>${i.text}</li>`).join('');
                    let p2Items = state.inventoryP2.map(i => `<li>${i.text}</li>`).join('');

                    cardContent = `
                        <div style="text-align: center;">
                            <h3>Fim de Jogo! ðŸ</h3>
                            <p>Saldo Final: P1 (${saldoP1}) | P2 (${saldoP2})</p>
                            <div style="display: flex; gap: 1rem; margin-top: 1rem; text-align: left;">
                                <div style="flex: 1; background: #f0f0f0; padding: 10px; border-radius: 8px;">
                                    <strong>PrÃªmios do Jogador 1:</strong>
                                    <ul style="font-size: 0.8rem; padding-left: 1rem;">${p1Items || '<li>Nenhum prÃªmio!</li>'}</ul>
                                </div>
                                <div style="flex: 1; background: #f0f0f0; padding: 10px; border-radius: 8px;">
                                    <strong>PrÃªmios do Jogador 2:</strong>
                                    <ul style="font-size: 0.8rem; padding-left: 1rem;">${p2Items || '<li>Nenhum prÃªmio!</li>'}</ul>
                                </div>
                            </div>
                            <p style="margin-top: 1rem; font-size: 0.9rem;">(Estes sÃ£o os itens que cada um conquistou no leilÃ£o!)</p>
                        </div>
                    `;
                    controls = `
                        <button class="cta-btn" data-action="auction-restart">Jogar Novamente ðŸ”„</button>
                        <button class="cta-btn text-btn" data-action="nav-games">Sair</button>
                    `;
                } else {
                    cardContent = `
                        <div style="text-align: center; width: 100%;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: var(--primary-color); font-weight: bold;">
                                <span>ðŸ’° P1: ${saldoP1}</span>
                                <span>ðŸ’° P2: ${saldoP2}</span>
                            </div>

                            <div class="game-card-display" id="active-card" style="border-color: #ffd700; background: linear-gradient(135deg, #fff, #fff8e1);">
                                <p class="card-type" style="color: #d4ac0d;">${currentItem ? currentItem.category : 'Carregando...'}</p>
                                <h3 class="card-text" style="color: #2c3e50;">${currentItem ? currentItem.text : '...'}</h3>
                            </div>

                            <p style="margin: 1rem 0; color: var(--text-light); font-style: italic;">${message}</p>

                            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                                <div style="flex: 1;">
                                    <label style="font-size: 0.8rem; display: block;">Lance P1 ðŸ”’</label>
                                    <input type="password" inputmode="numeric" id="bid-p1" class="bid-input" placeholder="0-100" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                                </div>
                                <div style="flex: 1;">
                                    <label style="font-size: 0.8rem; display: block;">Lance P2 ðŸ”’</label>
                                    <input type="password" inputmode="numeric" id="bid-p2" class="bid-input" placeholder="0-100" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                                </div>
                            </div>
                        </div>
                    `;

                    controls = `
                        <button class="cta-btn" data-action="auction-bid" style="background-color: #d4ac0d; color: white;">Bater o Martelo ðŸ”¨</button>
                        <button class="cta-btn" data-action="auction-skip" style="background-color: #636e72; color: white;">Pular â­ï¸</button>
                    `;
                }

                section.innerHTML = `
                <h2>${game.title}</h2>
                <div class="card-container" style="max-width: 500px;">
                    ${cardContent}
                </div>
                <div class="game-controls">
                    ${controls}
                </div>
                `;
            } else if (game.id !== 'nosso-codigo') {
                section.innerHTML = `
                <h2>${game.title}</h2>
                <div class="card-container">
                    <div class="game-card-display" id="active-card">
                        <p class="card-type">Toque abaixo para comeÃ§ar</p>
                        <h3 class="card-text">Pronto?</h3>
                    </div>
                </div>
                <div class="game-controls">
                     <button class="cta-btn" data-action="next-card">
                        ${game.id === 'eu-nunca' ? 'Eu Nunca Casal... ðŸº' : 'PrÃ³xima Carta ðŸŽ²'}
                    </button>
                    <button class="cta-btn" data-action="nav-games" style="background-color: var(--text-light)">Sair</button>
                </div>
                `;
            }




        } else if (game.id === 'desejos-binarios') {
            section.innerHTML = `
                <h2>${game.title}</h2>
                <div id="binary-game-content">
                    <div class="card-container">
                         <div class="game-card-display binary-card" id="binary-card-display">
                            <p class="card-type" id="binary-turn-indicator">Jogador 1: Toque para comeÃ§ar</p>
                            <h3 class="card-text" id="binary-card-text">Pronto para comeÃ§ar?</h3>
                        </div>
                    </div>
                    <div class="game-controls binary-controls" style="display: none;">
                        <button class="cta-btn btn-no" data-action="binary-no">âŒ NÃ£o</button>
                        <button class="cta-btn btn-yes" data-action="binary-yes">â¤ï¸ Sim</button>
                    </div>
                    <div class="game-controls start-controls">
                         <button class="cta-btn" data-action="start-binary">Iniciar Jogo</button>
                         <button class="cta-btn" data-action="nav-games" style="background-color: var(--text-light)">Sair</button>
                    </div>
                </div>
            `;
        } else if (game.id === 'roleta-temperatura') {
            section.innerHTML = `
                <h2 id="roulette-title">${game.title}</h2>
                <div class="roulette-container">
                    <div class="slot-machine-wrapper">
                        <!-- Slot 1: AÃ§Ã£o -->
                        <div class="slot-column">
                            <div class="slot-label">AÃ§Ã£o ðŸ’‹</div>
                            <div class="slot-box" id="slot-action">
                                <span class="slot-text">?</span>
                            </div>
                        </div>
                        <!-- Slot 2: Corpo -->
                        <div class="slot-column">
                            <div class="slot-label">Local ðŸ¦µ</div>
                            <div class="slot-box" id="slot-body">
                                <span class="slot-text">?</span>
                            </div>
                        </div>
                        <!-- Slot 3: Tempo -->
                        <div class="slot-column">
                            <div class="slot-label">Tempo â³</div>
                            <div class="slot-box" id="slot-time">
                                <span class="slot-text">?</span>
                            </div>
                        </div>
                    </div>

                    <div id="roulette-result" class="roulette-result" style="display: none;">
                        <h3 id="result-text">Girando...</h3>
                    </div>

                    <div id="roulette-timer" class="roulette-timer" style="display: none;">
                         <div class="timer-bar-container">
                            <div class="timer-bar" id="timer-bar"></div>
                         </div>
                         <p id="timer-text">00:00</p>
                    </div>

                    <div class="game-controls roulette-controls">
                        <button class="cta-btn" id="spin-btn" data-action="spin-roulette">Girar Roleta ðŸŽ¡</button>
                        <button class="cta-btn" id="timer-btn" data-action="start-timer" style="display: none; background-color: var(--warning-color); color: #333;">Iniciar Timer â±ï¸</button>
                        <button class="cta-btn" id="veto-btn" data-action="veto-roulette" style="display: none; background-color: #636e72;">
                                Veto ðŸš« (<span id="veto-count">3</span>)
                        </button>
                    </div>

                    <div class="heat-indicator">
                        NÃ­vel de Calor: <span id="heat-level" style="color: var(--accent-color); font-weight: bold;">Low Heat â„ï¸</span>
                    </div>
                </div>
            `;
            // NecessÃ¡rio desenhar o canvas apÃ³s renderizar
            setTimeout(() => this.drawRouletteWheel(), 100);
        } else if (game.id === 'dados-prazer') {
            section.innerHTML = `
                <h2 style="color: #6c5ce7; border-bottom: 2px solid #a29bfe; padding-bottom: 0.5rem;">${game.title}</h2>
                <div class="dice-container-wrapper">
                    <div>
                        <div class="dice-label">ðŸŽ¯ PosiÃ§Ã£o</div>
                        <div class="dice-wrapper">
                            <div class="dice-3d" id="dice-1">
                                <div class="dice-face front">ðŸŽ²</div>
                                <div class="dice-face back">ðŸŽ²</div>
                                <div class="dice-face right">ðŸŽ²</div>
                                <div class="dice-face left">ðŸŽ²</div>
                                <div class="dice-face top">ðŸŽ²</div>
                                <div class="dice-face bottom">ðŸŽ²</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="dice-label">ðŸŒ¡ï¸ Modificador</div>
                        <div class="dice-wrapper">
                            <div class="dice-3d" id="dice-2">
                                <div class="dice-face front">ðŸŽ²</div>
                                <div class="dice-face back">ðŸŽ²</div>
                                <div class="dice-face right">ðŸŽ²</div>
                                <div class="dice-face left">ðŸŽ²</div>
                                <div class="dice-face top">ðŸŽ²</div>
                                <div class="dice-face bottom">ðŸŽ²</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dice-result" class="dice-result-display" style="display: none; background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; padding: 1.5rem; border-radius: 15px; margin: 1rem 0; box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);">
                    <h4 id="dice-action-phrase" style="color: #fffbdf; margin-bottom: 0.5rem; font-weight: bold; font-size: 1.2rem;">Preparem-se...</h4>
                    <h3 id="dice-result-d1" style="font-size: 1.5rem; margin: 0.5rem 0; color: white;">...</h3>
                    <p id="dice-desc-d1" style="font-style: italic; font-size: 0.95rem; opacity: 0.8;"></p>
                    <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.3); margin: 0.8rem 0;">
                    <h3 id="dice-result-d2" style="font-size: 1.3rem; margin: 0.5rem 0; color: #fffbdf;">...</h3>
                    <p id="dice-desc-d2" style="font-size: 0.95rem; opacity: 0.9;"></p>
                    <div id="dice-ref-container" style="margin-top: 1rem;">
                        <a id="dice-ref-link" href="#" target="_blank" style="display: inline-block; padding: 6px 12px; background: white; color: #6c5ce7; border-radius: 20px; font-size: 0.8rem; text-decoration: none; font-weight: bold;">ðŸ” Ver ReferÃªncia Visual</a>
                    </div>
                </div>

                <div id="dice-timer-display" style="display: none; text-align: center; margin-top: 1rem;">
                    <p style="font-size: 2rem; font-weight: bold; color: var(--primary-color);" id="dice-timer-text">05:00</p>
                    <div style="width: 100%; height: 6px; background: #dfe6e9; border-radius: 3px; overflow: hidden; margin-top: 0.5rem;">
                        <div id="dice-timer-bar" style="height: 100%; background: linear-gradient(90deg, #a29bfe, #6c5ce7); width: 100%; transition: width 1s linear;"></div>
                    </div>
                </div>

                <div class="game-controls" style="margin-top: 1.5rem;">
                    <button class="cta-btn" data-action="dice-roll" style="background: linear-gradient(135deg, #a29bfe, #6c5ce7);">LanÃ§ar Dados ðŸŽ²</button>
                    <button class="cta-btn" data-action="dice-start-timer" id="dice-timer-btn" style="display: none; background: linear-gradient(135deg, #6c5ce7, #5a4bd1); color: white;">Iniciar Turno â±ï¸ (5min)</button>
                    <button class="cta-btn" data-action="nav-games" style="background-color: var(--text-light)">Sair</button>
                </div>
            `;
        } else if (game.id === 'termometro-prazer') {
            section.innerHTML = `
                <div id="termometro-app" class="termometro-wrapper">
                    <h2 class="termometro-title">${game.title}</h2>

                    <div class="termometro-progress-container">
                        <div id="termometro-progress-bar" class="termometro-progress-bar"></div>
                    </div>

                    <div class="termometro-timer-display" id="termometro-timer">00:00</div>

                    <div class="instruction-container">
                        <p id="termometro-instruction" class="instruction-text">Toque abaixo para iniciar a provocaÃ§Ã£o</p>
                    </div>

                    <div class="termometro-controls centered">
                        <button class="cta-btn start-btn glow-btn" id="termometro-main-btn" data-action="start-termometro">Iniciar ProvocaÃ§Ã£o ðŸ”¥</button>
                        <button class="cta-btn stop-btn secondary-btn" id="termometro-stop-btn" data-action="stop-termometro" style="display: none;">Perdi o Controle! ðŸ›‘</button>
                    </div>
                </div>
            `;
        } else {
            section.innerHTML = `<h2>Erro: Jogo nÃ£o implementado.</h2>`;
        }

        this.mainContent.appendChild(section);
    }

    drawRouletteWheel(angle = 0) {
        const canvas = document.getElementById('roulette-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = width / 2 - 10;

        ctx.clearRect(0, 0, width, height);

        const colors = ['#d63031', '#ff7675', '#e17055', '#fab1a0', '#fdcb6e', '#ff9f43']; // Paleta Quente/Red
        const slices = 6;
        const arc = (2 * Math.PI) / slices;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle); // Rotacionar canvas

        for (let i = 0; i < slices; i++) {
            ctx.beginPath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, i * arc, (i + 1) * arc);
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.stroke();

            // Texto (opcional, apenas decorativo para MVP)
            ctx.save();
            ctx.translate((radius * 0.7) * Math.cos(i * arc + arc / 2), (radius * 0.7) * Math.sin(i * arc + arc / 2));
            ctx.rotate(i * arc + arc / 2 + Math.PI / 2);
            ctx.fillStyle = "#fff";
            ctx.font = "bold 14px Poppins";
            ctx.fillText("?", 0, 0);
            ctx.restore();
        }
        ctx.restore();

        // CÃ­rculo central
        ctx.beginPath();
        ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }

    updateCardDisplay(card) {
        const cardDisplay = document.getElementById('active-card');
        if (!cardDisplay) return;

        // AnimaÃ§Ã£o de saÃ­da
        cardDisplay.style.transform = 'rotateY(90deg)';

        setTimeout(() => {
            // Atualizar conteÃºdo
            cardDisplay.className = `game-card-display ${card.type}`;
            cardDisplay.querySelector('.card-type').textContent = card.type;
            cardDisplay.querySelector('.card-text').textContent = card.text;

            // AnimaÃ§Ã£o de entrada
            cardDisplay.style.transform = 'rotateY(0deg)';
        }, 200);
    }

    _renderSeductionBoard(game) {
        const state = window.gameModel.seductionBoardState;
        const data = window.gameModel.seductionBoardData;

        const section = document.createElement('section');
        section.className = 'view active board-game-view';

        const turnColorClass = state.currentPlayer === 'blue' ? 'blue' : 'pink';
        const turnName = state.currentPlayer === 'blue' ? 'Vez do Homem' : 'Vez da Mulher';

        // Mapeamento para layout Snake (zigue-zague em 4 colunas - 30 casas)
        const snakeMap = [
            0, 1, 2, 3,
            7, 6, 5, 4,
            8, 9, 10, 11,
            15, 14, 13, 12,
            16, 17, 18, 19,
            23, 22, 21, 20,
            24, 25, 26, 27,
            28, 29 // 30 casas (indices 0 a 29)
        ];

        section.innerHTML = `
            <div class="board-game-container">
                <div class="board-info-header">
                    <div class="turn-banner ${turnColorClass}" id="turn-indicator">
                        ${turnName}
                    </div>
                </div>

                <div class="board-dice-area">
                    <button class="cta-btn gold-btn" data-action="board-roll-dice" style="background: linear-gradient(135deg, #D4AF37, #800020); color: #fff; padding: 1.2rem 3.5rem; font-size: 1.3rem; border-radius: 50px; font-weight: 800; border: 2px solid #D4AF37; box-shadow: 0 10px 25px rgba(128,0,32,0.5); cursor: pointer; transition: all 0.3s ease;">LanÃ§ar Dado ðŸŽ²</button>
                    <div id="board-dice-result" class="dice-val-luxury"></div>
                </div>

                <div class="board-snakes-layout">
                    <!-- Trilha Dele -->
                    <div class="trail-section trail-blue">
                        <h3 class="trail-title-luxury">Trilha Dele</h3>
                        <div class="board-grid">
                            ${snakeMap.map(index => this._createTileHtml(data.blue[index], index, 'blue', state.bluePos)).join('')}
                        </div>
                    </div>

                    <!-- Trilha Dela -->
                    <div class="trail-section trail-pink">
                        <h3 class="trail-title-luxury">Trilha Dela</h3>
                        <div class="board-grid">
                            ${snakeMap.map(index => this._createTileHtml(data.pink[index], index, 'pink', state.pinkPos)).join('')}
                        </div>
                    </div>
                </div>

                <button class="cta-btn text-btn" data-action="nav-games" style="margin-top: 2rem; color: #aaa; background: none; border: none; font-size: 1rem; cursor: pointer;">Sair do Jogo</button>
            </div>
        `;
        this.mainContent.appendChild(section);
    }

    _createTileHtml(tile, index, trailType, currentPos) {
        if (!tile) return '';
        const isCurrent = currentPos === index;
        const text = typeof tile === 'string' ? tile : tile.text;
        const typeClass = tile.type || '';

        const marker = isCurrent ? `<div class="player-pawn">${trailType === 'blue' ? 'ðŸ‘”' : 'ðŸ‘ '}</div>` : '';

        let specialClass = '';
        if (index === 0) specialClass = 'start-tile';
        else if (index === 19) specialClass = 'finish-tile';

        return `
            <div class="board-tile-luxury ${specialClass} ${typeClass} ${isCurrent ? 'active-trail' : ''}" data-index="${index}">
                <span class="tile-num-float">${index + 1}</span>
                ${marker}
                ${!isCurrent && index === 0 ? '<span style="font-size: 1.5rem">ðŸ</span>' : ''}
                ${!isCurrent && index === 29 ? '<span style="font-size: 1.5rem">ðŸ†</span>' : ''}
                <div class="tile-hover-content">
                    ${text}
                </div>
            </div>
        `;
    }

    _renderAbout() {
        const section = document.createElement('section');
        section.className = 'view active';
        section.innerHTML = `
            <h2>Sobre o Hub</h2>
            <div style="background: white; padding: 2rem; border-radius: 16px; margin-top: 1rem;">
                <p>Este projeto foi desenvolvido como um hub interativo para jogos casuais.</p>
                <br>
                <p>VersÃ£o 1.0.0</p>
                <p>Desenvolvido com â¤ï¸ usando HTML, CSS e JS.</p>
            </div>
        `;
        this.mainContent.appendChild(section);
    }

    toggleMobileMenu() {
        this.sidebar.classList.toggle('open');
    }
}

// --- Controller ---
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        // Renderizar view inicial salva ou home
        if ((this.model.currentView === 'game-playing' || this.model.currentView === 'tabuleiro-seducao') && this.model.currentGameId) {
            this.playGame(this.model.currentGameId);
        } else {
            this.navigateTo(this.model.currentView);
        }
        this.setupEventListeners();
    }

    setupEventListeners() {
        // NavegaÃ§Ã£o via Sidebar
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = e.target.dataset.view;
                this.navigateTo(viewName);

                // Fechar menu mobile se aberto
                this.view.sidebar.classList.remove('open');
            });
        });

        // BotÃ£o Menu Mobile
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                this.view.toggleMobileMenu();
            });
        }

        // DelegaÃ§Ã£o de eventos para elementos dinÃ¢micos no Main Content
        document.getElementById('main-content').addEventListener('click', (e) => {
            const target = e.target;
            const action = target.dataset.action;

            if (action === 'nav-games') {
                this.navigateTo('games');
            } else if (action === 'play-game') {
                const gameId = target.dataset.id;
                this.playGame(gameId);
            } else if (action === 'next-card') {
                this.drawNextCard();
            } else if (action === 'start-binary') {
                this.startBinaryGame();
            } else if (action === 'binary-yes') {
                this.handleBinaryChoice(true);
            } else if (action === 'binary-no') {
                this.handleBinaryChoice(false);
            } else if (action === 'spin-roulette') {
                this.spinRoulette();
            } else if (action === 'start-timer') {
                this.startTimer();
            } else if (action === 'veto-roulette') {
                this.handleVeto();
            } else if (action === 'reveal-mimic' || target.closest('[data-action="reveal-mimic"]')) {
                this.handleMimicReveal();
            } else if (action === 'mimic-correct') {
                this.handleMimicCorrect();
            } else if (action === 'mimic-skip') {
                this.handleMimicSkip(target);
            } else if (action === 'mimic-next-turn') {
                this.handleMimicNextTurn();
            } else if (action === 'auction-bid') {
                this.handleAuctionBid();
            } else if (action === 'auction-skip') {
                this.handleAuctionSkip();
            } else if (action === 'auction-restart') {
                this.model.initAuction();
                this.view.renderView('game-playing', this.model.getGame('leilao-intimidade'));
            } else if (action === 'dice-roll') {
                this.handleDiceRoll();
            } else if (action === 'dice-start-timer') {
                this.handleDiceStartTimer();
            } else if (action === 'start-termometro') {
                this.handleStartTermometro();
            } else if (action === 'stop-termometro') {
                this.handleStopTermometro();
            } else if (action === 'nav-category' || target.closest('[data-action="nav-category"]')) {
                const categoryElement = action === 'nav-category' ? target : target.closest('[data-action="nav-category"]');
                const viewName = categoryElement.dataset.view;
                this.navigateTo(viewName);
            } else if (action === 'board-roll-dice') {
                this.handleBoardDiceRoll();
            }
        });
    }

    handleBoardDiceRoll() {
        if (this.model.seductionBoardState.isFinished) return;

        const state = this.model.seductionBoardState;
        const diceBtn = document.querySelector('[data-action="board-roll-dice"]');
        const resultDisplay = document.getElementById('board-dice-result');

        if (diceBtn) diceBtn.disabled = true;

        const rollSelection = Math.floor(Math.random() * 6) + 1;

        // SimulaÃ§Ã£o de animaÃ§Ã£o
        let count = 0;
        const interval = setInterval(() => {
            resultDisplay.innerText = Math.floor(Math.random() * 6) + 1;
            count++;
            if (count > 10) {
                clearInterval(interval);
                resultDisplay.innerText = rollSelection;
                this.movePlayer(rollSelection);
                if (diceBtn) diceBtn.disabled = false;
            }
        }, 50);
    }

    movePlayer(steps) {
        const state = this.model.seductionBoardState;
        const player = state.currentPlayer; // 'blue' or 'pink'
        const posKey = player === 'blue' ? 'bluePos' : 'pinkPos';
        const trailData = this.model.seductionBoardData[player];

        let newPos = state[posKey] + steps;
        if (newPos > 29) newPos = 29;

        // Verificar se é casa especial (punição ou bônus com movimento)
        const tile = trailData[newPos];
        if (typeof tile === 'object' && tile.move) {
            // Move para a casa especial primeiro e renderiza
            state[posKey] = newPos;
            this.view.renderView('tabuleiro-seducao', this.model.getGame('tabuleiro-seducao'));

            setTimeout(() => {
                alert(tile.text);
                state[posKey] = Math.max(0, Math.min(29, newPos + tile.move));
                
                // Se o bônus levou à vitória
                if (state[posKey] === 29) {
                    state.isFinished = true;
                    setTimeout(() => alert('🏅 CHEGADA! ' + (player === 'blue' ? 'Homem' : 'Mulher') + ' venceu! Cumprem o desafio final!'), 500);
                }
                
                this.nextTurn();
                this.view.renderView('tabuleiro-seducao', this.model.getGame('tabuleiro-seducao'));
            }, 800);
        } else {
            state[posKey] = newPos;
            if (newPos === 29) {
                state.isFinished = true;
                setTimeout(() => alert('🏅 CHEGADA! ' + (player === 'blue' ? 'Homem' : 'Mulher') + ' venceu! Cumprem o desafio final!'), 500);
            }
            this.nextTurn();
            this.view.renderView('tabuleiro-seducao', this.model.getGame('tabuleiro-seducao'));
        }
    }

    nextTurn() {
        const state = this.model.seductionBoardState;
        state.currentPlayer = state.currentPlayer === 'blue' ? 'pink' : 'blue';
    }

    navigateTo(viewName) {
        this.model.currentView = viewName;
        localStorage.setItem('hub_currentView', viewName);

        let data = null;
        if (viewName === 'games-couple') {
            data = this.model.games.filter(g => g.category.includes('couple'));
        } else if (viewName === 'games-group') {
            data = this.model.games.filter(g => g.category.includes('group'));
        }

        this.view.renderView(viewName, data);
    }

    startBinaryGame() {
        // Reiniciar estado
        this.model.binaryState = {
            turn: 'player1',
            p1Choices: [],
            p2Choices: [],
            currentCardIndex: 0,
            shuffledDeck: [...this.model.binaryWishesDeck] // CÃ³pia simples, ordem fixa para P1
        };
        // Opcional: Embaralhar para o jogo ser sempre diferente?
        // A prompt diz "Jogador 2 responde Ã s mesmas 20 cartas (em ordem aleatÃ³ria)".
        // EntÃ£o P1 vÃª ordem X, P2 vÃª ordem aleatÃ³ria Y, mas precisamos saber qual carta Ã© qual.
        // Melhor manter Ã­ndices fixos do deck original para comparaÃ§Ã£o.

        // Vamos usar o Ã­ndice do array original como ID da carta.
        this.updateBinaryView();
    }

    updateBinaryView() {
        const state = this.model.binaryState;
        const controls = document.querySelector('.binary-controls');
        const startControls = document.querySelector('.start-controls');
        const display = document.getElementById('binary-card-display');
        const textElement = document.getElementById('binary-card-text');
        const indicator = document.getElementById('binary-turn-indicator');
        const contentDiv = document.getElementById('binary-game-content');

        if (!display) return;

        // Limpar botÃµes de transiÃ§Ã£o anteriores
        const existingBtn = display.querySelector('button');
        if (existingBtn) existingBtn.remove();

        startControls.style.display = 'none';

        if (state.turn === 'results') {
            this.showBinaryResults(contentDiv);
            return;
        }

        controls.style.display = 'flex';

        // Verificar se acabou o turno
        if (state.currentCardIndex >= this.model.binaryWishesDeck.length) {
            if (state.turn === 'player1') {
                // Fim do turno 1
                state.turn = 'transition';
                controls.style.display = 'none';
                indicator.innerText = 'âœ‹ Pare!';
                textElement.innerText = 'Passe o dispositivo para o Jogador 2.';

                const btn = document.createElement('button');
                btn.className = 'cta-btn';
                btn.innerText = 'Sou o Jogador 2 (Iniciar)';
                btn.onclick = () => {
                    state.turn = 'player2';
                    state.currentCardIndex = 0;
                    // Para o jogador 2, vamos embaralhar a ordem de apresentaÃ§Ã£o
                    // Mas precisamos rastrear o Ã­ndice original.
                    // Para simplificar a MVP de agora: manter a mesma ordem ou ordem inversa?
                    // A prompt pede "ordem aleatÃ³ria".
                    // Vamos criar um array de Ã­ndices para o P2.
                    state.p2Order = Array.from({ length: this.model.binaryWishesDeck.length }, (_, i) => i).sort(() => Math.random() - 0.5);

                    this.updateBinaryView();
                };
                display.appendChild(btn);
                return;
            } else if (state.turn === 'player2') {
                state.turn = 'results';
                this.updateBinaryView();
                return;
            }
        }

        // Mostrar carta atual
        let realCardIndex;
        if (state.turn === 'player1') {
            realCardIndex = state.currentCardIndex;
            indicator.innerText = `Jogador 1 (${state.currentCardIndex + 1}/${this.model.binaryWishesDeck.length})`;
        } else {
            // Player 2 com ordem aleatÃ³ria
            realCardIndex = state.p2Order[state.currentCardIndex];
            indicator.innerText = `Jogador 2 (${state.currentCardIndex + 1}/${this.model.binaryWishesDeck.length})`;
        }

        const card = this.model.binaryWishesDeck[realCardIndex];
        textElement.innerText = card.text;

        // AnimaÃ§Ã£o de entrada
        display.classList.remove('slide-in');
        void display.offsetWidth; // trigger reflow
        display.classList.add('slide-in');
    }

    handleBinaryChoice(isYes) {
        const state = this.model.binaryState;

        // Salvar escolha
        if (state.turn === 'player1') {
            const realIndex = state.currentCardIndex; // P1 segue ordem linear
            state.p1Choices[realIndex] = isYes;
        } else if (state.turn === 'player2') {
            const realIndex = state.p2Order[state.currentCardIndex]; // P2 segue ordem embaralhada
            state.p2Choices[realIndex] = isYes;

            // Feedback visual/vibrar
            if (navigator.vibrate) navigator.vibrate(50);
        }

        state.currentCardIndex++;
        this.updateBinaryView();
    }

    showBinaryResults(container) {
        const state = this.model.binaryState;
        let matches = [];

        for (let i = 0; i < this.model.binaryWishesDeck.length; i++) {
            if (state.p1Choices[i] && state.p2Choices[i]) {
                matches.push(this.model.binaryWishesDeck[i]);
            }
        }

        let html = `
            <div class="results-container">
                <h2>âœ¨ Resultado da Sintonia âœ¨</h2>
        `;

        if (matches.length > 0) {
            html += `<p>VocÃªs deram "Match" em <strong>${matches.length}</strong> desejos!</p>`;
            html += `<ul class="matches-list">`;
            matches.forEach(card => {
                html += `<li>ðŸ”¥ ${card.text}</li>`;
            });
            html += `</ul>`;
        } else {
            html += `
                <p>Nenhum match exato desta vez... Mas o desejo continua!</p>
                <div class="consolation-prize">
                    <h3>ðŸ† Desafio de ConsolaÃ§Ã£o</h3>
                    <p>FaÃ§am uma massagem de 5 minutos um no outro para relaxar.</p>
                </div>
            `;
        }

        html += `
            <button class="cta-btn" onclick="location.reload()">Voltar ao Menu</button>
            </div>
        `;

        container.innerHTML = html;
        container.classList.add('fade-in');
    }

    // --- MÃ©todos da Roleta da Temperatura ---

    startRouletteGame() {
        this.model.rouletteState = {
            level: 'low',
            spinCount: 0,
            isSpinning: false,
            currentResult: null,
            vetoCount: 3,
            timer: null,
            timeLeft: 0
        };
        // Resetar view se necessÃ¡rio
    }

    spinRoulette() {
        if (this.model.rouletteState.isSpinning) return;

        const state = this.model.rouletteState;
        state.isSpinning = true;

        const spinBtn = document.getElementById('spin-btn');
        if (spinBtn) spinBtn.disabled = true;

        const resultDiv = document.getElementById('roulette-result');
        const timerDiv = document.getElementById('roulette-timer');
        const timerBtn = document.getElementById('timer-btn');
        const vetoBtn = document.getElementById('veto-btn');

        resultDiv.style.display = 'none';
        timerDiv.style.display = 'none';
        timerBtn.style.display = 'none';
        vetoBtn.style.display = 'none';

        // SimulaÃ§Ã£o de giro no Canvas
        let angle = 0;
        let speed = 0.5; // radianos por frame
        const deceleration = 0.005;
        const duration = 150 + Math.random() * 50; // frames (~3-4 seg)
        let frame = 0;

        const animate = () => {
            frame++;
            if (speed > 0) {
                angle += speed;
                speed -= deceleration * (frame / 50); // Desacelera nÃ£o-linear
                if (speed < 0) speed = 0;

                this.view.drawRouletteWheel(angle);
                requestAnimationFrame(animate);
            } else {
                this.finalizeSpin();
            }
        };
        animate();
    }

    finalizeSpin() {
        const state = this.model.rouletteState;
        state.isSpinning = false;
        state.spinCount++;

        // Verificar evoluÃ§Ã£o de nÃ­vel
        if (state.level === 'low' && state.spinCount >= 5) {
            state.level = 'high';
            const heatLabel = document.getElementById('heat-level');
            if (heatLabel) {
                heatLabel.innerHTML = 'HIGH HEAT ðŸ”¥ðŸ”¥ðŸ”¥';
                heatLabel.style.color = 'var(--danger-color)';
            }
            // Feedback de level up
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            alert('NÃ­vel Subiu! Agora Ã© HIGH HEAT! ðŸ”¥');
        }

        // Sortear resultado baseado no nÃ­vel
        const deck = state.level === 'low' ? this.model.temperatureDeck.lowHeat : this.model.temperatureDeck.highHeat;

        const rAction = Math.floor(Math.random() * deck.actions.length);
        const rBody = Math.floor(Math.random() * deck.bodyParts.length);
        const rTime = Math.floor(Math.random() * deck.time.length);

        state.currentResult = {
            action: deck.actions[rAction],
            bodyPart: deck.bodyParts[rBody],
            time: deck.time[rTime]
        };

        this.drawRouletteResult();
    }

    drawRouletteResult() {
        const state = this.model.rouletteState;
        const result = state.currentResult;

        const resultDiv = document.getElementById('roulette-result');
        const textTitle = document.getElementById('result-text');
        const textDetails = document.getElementById('result-details');
        const spinBtn = document.getElementById('spin-btn');
        const timerBtn = document.getElementById('timer-btn');
        const vetoBtn = document.getElementById('veto-btn');

        resultDiv.style.display = 'block';
        if (state.level === 'high') {
            resultDiv.classList.add('high-heat');
        } else {
            resultDiv.classList.remove('high-heat');
        }

        textTitle.innerText = `${result.action}`;
        textDetails.innerHTML = `em: <strong>${result.bodyPart}</strong><br>por: <strong>${result.time} segundos</strong>`;

        spinBtn.disabled = false;
        spinBtn.innerText = 'Girar Novamente ðŸŽ¡';

        timerBtn.style.display = 'inline-block';

        if (state.vetoCount > 0) {
            vetoBtn.style.display = 'inline-block';
            document.getElementById('veto-count').innerText = state.vetoCount;
        } else {
            vetoBtn.style.display = 'none';
        }

        // AnimaÃ§Ã£o de entrada
        resultDiv.classList.add('pop-in');
        setTimeout(() => resultDiv.classList.remove('pop-in'), 500);
    }

    handleVeto() {
        const state = this.model.rouletteState;
        if (state.vetoCount > 0) {
            state.vetoCount--;
            this.spinRoulette(); // Gira de novo automaticamente
        }
    }

    startTimer() {
        const state = this.model.rouletteState;
        if (!state.currentResult) return;

        const duration = state.currentResult.time; // segundos
        state.timeLeft = duration;

        const timerDiv = document.getElementById('roulette-timer');
        const timerText = document.getElementById('timer-text');
        const timerBar = document.getElementById('timer-bar');
        const timerBtn = document.getElementById('timer-btn');

        timerDiv.style.display = 'block';
        timerBtn.style.display = 'none'; // Esconde botÃ£o de iniciar timer

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        if (state.timer) clearInterval(state.timer);

        state.timer = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
            const progress = ((endTime - now) / (duration * 1000)) * 100;

            state.timeLeft = remaining;
            timerText.innerText = `00:${remaining.toString().padStart(2, '0')}`;
            timerBar.style.width = `${progress}%`;

            if (remaining <= 0) {
                clearInterval(state.timer);
                timerText.innerText = "Tempo Esgotado!";
                if (navigator.vibrate) navigator.vibrate(500);
                setTimeout(() => {
                    timerDiv.style.display = 'none';
                }, 3000);
            }
        }, 100);
    }


    // --- MÃ©todos da Roleta da Temperatura ---

    startRouletteGame() {
        this.model.rouletteState = {
            level: 'low',
            spinCount: 0,
            isSpinning: false,
            currentResult: null,
            vetoCount: 3,
            timer: null,
            timeLeft: 0
        };
        // Resetar view se necessÃ¡rio
    }

    spinRoulette() {
        if (this.model.rouletteState.isSpinning) return;

        const state = this.model.rouletteState;
        state.isSpinning = true;

        const spinBtn = document.getElementById('spin-btn');
        if (spinBtn) spinBtn.disabled = true;

        const resultDiv = document.getElementById('roulette-result');
        const timerDiv = document.getElementById('roulette-timer');
        const timerBtn = document.getElementById('timer-btn');
        const vetoBtn = document.getElementById('veto-btn');

        if (resultDiv) resultDiv.style.display = 'none';
        if (timerDiv) timerDiv.style.display = 'none';
        if (timerBtn) timerBtn.style.display = 'none';
        if (vetoBtn) vetoBtn.style.display = 'none';

        // 1. Preparar o Resultado
        // Verificar evoluÃ§Ã£o de nÃ­vel
        if (state.level === 'low' && state.spinCount >= 5) {
            state.level = 'high';
            const heatLabel = document.getElementById('heat-level');
            if (heatLabel) {
                heatLabel.innerHTML = 'HIGH HEAT ðŸ”¥ðŸ”¥ðŸ”¥';
                heatLabel.style.color = 'var(--danger-color)';
            }
            alert('NÃ­vel Subiu! Agora Ã© HIGH HEAT! ðŸ”¥');
        }

        const deck = state.level === 'low' ? this.model.temperatureDeck.lowHeat : this.model.temperatureDeck.highHeat;

        // Sorteio real
        const rAction = Math.floor(Math.random() * deck.actions.length);
        const rBody = Math.floor(Math.random() * deck.bodyParts.length);
        const rTime = Math.floor(Math.random() * deck.time.length);

        state.currentResult = {
            action: deck.actions[rAction],
            bodyPart: deck.bodyParts[rBody],
            time: deck.time[rTime]
        };

        // 2. Animar Slots
        const slots = [
            { id: 'slot-action', final: state.currentResult.action, delay: 1000, items: deck.actions },
            { id: 'slot-body', final: state.currentResult.bodyPart, delay: 2000, items: deck.bodyParts },
            { id: 'slot-time', final: state.currentResult.time + 's', delay: 3000, items: deck.time.map(t => t + 's') }
        ];

        slots.forEach((slot, index) => {
            const el = document.getElementById(slot.id);
            if (!el) return;
            const textEl = el.querySelector('.slot-text');

            // Resetar estilos
            el.classList.remove('stopped');
            el.classList.add('spinning');

            // Intervalo de "Shuffle" visual
            const interval = setInterval(() => {
                const randomItem = slot.items[Math.floor(Math.random() * slot.items.length)];
                textEl.innerText = randomItem;
            }, 80); // muda a cada 80ms

            // Parar apÃ³s delay
            setTimeout(() => {
                clearInterval(interval);
                textEl.innerText = slot.final;
                el.classList.remove('spinning');
                el.classList.add('stopped');
                if (navigator.vibrate) navigator.vibrate(50);

                // Se for o Ãºltimo, finalizar
                if (index === slots.length - 1) {
                    setTimeout(() => this.finalizeSpin(), 500);
                }
            }, slot.delay);
        });
    }

    finalizeSpin() {
        const state = this.model.rouletteState;
        state.isSpinning = false;
        state.spinCount++;

        this.drawRouletteResult();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    }

    drawRouletteResult() {
        const state = this.model.rouletteState;
        const result = state.currentResult;

        const resultDiv = document.getElementById('roulette-result');
        const textTitle = document.getElementById('result-text');

        const spinBtn = document.getElementById('spin-btn');
        const timerBtn = document.getElementById('timer-btn');
        const vetoBtn = document.getElementById('veto-btn');

        if (resultDiv) {
            resultDiv.style.display = 'block';
            if (state.level === 'high') {
                resultDiv.classList.add('high-heat');
            } else {
                resultDiv.classList.remove('high-heat');
            }
            if (textTitle) textTitle.innerText = "ðŸ”¥ CombinaÃ§Ã£o Definida! ðŸ”¥";

            // AnimaÃ§Ã£o de entrada
            resultDiv.classList.add('pop-in');
            setTimeout(() => resultDiv.classList.remove('pop-in'), 500);
        }

        if (spinBtn) {
            spinBtn.disabled = false;
            spinBtn.innerText = 'Girar Novamente ðŸŽ¡';
        }

        if (timerBtn) timerBtn.style.display = 'inline-block';

        if (state.vetoCount > 0 && vetoBtn) {
            vetoBtn.style.display = 'inline-block';
            const vetoCountEl = document.getElementById('veto-count');
            if (vetoCountEl) vetoCountEl.innerText = state.vetoCount;
        } else if (vetoBtn) {
            vetoBtn.style.display = 'none';
        }
    }

    handleVeto() {
        const state = this.model.rouletteState;
        if (state.vetoCount > 0) {
            state.vetoCount--;
            this.spinRoulette(); // Gira de novo automaticamente
        }
    }

    startTimer() {
        const state = this.model.rouletteState;
        if (!state.currentResult) return;

        const duration = state.currentResult.time; // segundos
        state.timeLeft = duration;

        const timerDiv = document.getElementById('roulette-timer');
        const timerText = document.getElementById('timer-text');
        const timerBar = document.getElementById('timer-bar');
        const timerBtn = document.getElementById('timer-btn');

        timerDiv.style.display = 'block';
        timerBtn.style.display = 'none'; // Esconde botÃ£o de iniciar timer

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        if (state.timer) clearInterval(state.timer);

        state.timer = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
            const progress = ((endTime - now) / (duration * 1000)) * 100;

            state.timeLeft = remaining;
            timerText.innerText = `00:${remaining.toString().padStart(2, '0')}`;
            timerBar.style.width = `${progress}%`;

            if (remaining <= 0) {
                clearInterval(state.timer);
                timerText.innerText = "Tempo Esgotado!";
                if (navigator.vibrate) navigator.vibrate(500);
                setTimeout(() => {
                    timerDiv.style.display = 'none';
                }, 3000);
            }
        }, 100);
    }

    playGame(gameId) {
        const game = this.model.getGame(gameId);
        if (game) {
            this.model.currentGameId = gameId;
            localStorage.setItem('hub_currentGameId', gameId);
            const viewName = gameId === 'tabuleiro-seducao' ? 'tabuleiro-seducao' : 'game-playing';
            this.model.currentView = viewName;
            localStorage.setItem('hub_currentView', viewName);

            if (gameId === 'eu-nunca') {
                this.model.startEuNuncaGame();
            } else if (gameId === 'nosso-codigo') {
                this.model.initNossoCodigo();
            } else if (gameId === 'leilao-intimidade') {
                this.model.initAuction();
            } else if (gameId === 'dados-prazer') {
                this.model.initDiceGame();
            }

            this.view.renderView(viewName, game);

            // Se for Esquenta, jÃ¡ tira uma carta ou prepara
            if (gameId === 'esquenta') {
                // Opcional: jÃ¡ sortear uma carta inicial
                // this.drawNextCard();
                // Deixando manual para o usuÃ¡rio clicar em "Iniciar/Proxima"
            }
        }
    }

    drawNextCard() {
        const card = this.model.getRandomCard();
        this.view.updateCardDisplay(card);
    }
    // --- LÃ³gica de Controle do Nosso CÃ³digo ---

    handleMimicReveal() {
        const cardDisplay = document.getElementById('active-card');
        const front = cardDisplay.querySelector('.card-front');
        const back = cardDisplay.querySelector('.card-back');

        if (front.style.display !== 'none') {
            const card = this.model.drawNossoCodigoCard();
            if (!card) return;

            // Atualiza UI
            front.style.display = 'none';
            back.style.display = 'block';
            document.getElementById('mimic-category').textContent = card.category;
            document.getElementById('mimic-text').textContent = card.text;

            // Habilita botÃµes
            document.querySelector('[data-action="mimic-correct"]').disabled = false;
            document.querySelector('[data-action="mimic-next-turn"]').disabled = false;

            const skipBtn = document.querySelector('[data-action="mimic-skip"]');
            skipBtn.disabled = this.model.mimicState.skipsUsed >= this.model.mimicState.maxSkips;

            // Inicia Timer
            const timerEl = document.getElementById('mimic-timer');
            this.model.startMimicTimer((time, ended) => {
                timerEl.textContent = time;
                if (time <= 5) {
                    timerEl.style.color = 'var(--danger-color)';
                    if (navigator.vibrate && time > 0) navigator.vibrate(200);
                } else {
                    timerEl.style.color = 'var(--text-color)';
                }

                if (ended) {
                    timerEl.textContent = "0";
                    document.querySelector('[data-action="mimic-correct"]').disabled = true;
                    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
                    alert('Tempo esgotado! Passe a vez.');
                }
            });
        }
    }

    handleMimicCorrect() {
        const newScore = this.model.mimicSuccess();
        document.querySelector('#mimic-score strong').textContent = newScore;

        // Efeito visual simples
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        alert('Boa! +1 Ponto. \nAgora troquem: quem adivinhou vai imitar!');

        this._resetMimicUI();
    }

    handleMimicSkip(btnElement) {
        if (this.model.mimicSkip()) {
            const card = this.model.drawNossoCodigoCard();
            if (card) {
                document.getElementById('mimic-category').textContent = card.category;
                document.getElementById('mimic-text').textContent = card.text;

                // Atualiza texto do botÃ£o
                const remaining = this.model.mimicState.maxSkips - this.model.mimicState.skipsUsed;
                btnElement.textContent = `Pular â­ï¸ (${remaining} rest.)`;
                btnElement.disabled = true;
            }
        }
    }

    handleMimicNextTurn() {
        this.model.switchMimicPlayer();
        this._resetMimicUI();
    }

    _resetMimicUI() {
        const player = this.model.mimicState.currentPlayer;
        document.getElementById('mimic-turn').innerHTML = `Vez do Jogador ${player} <small>(Imita)</small>`;

        const cardDisplay = document.getElementById('active-card');
        cardDisplay.querySelector('.card-front').style.display = 'block';
        cardDisplay.querySelector('.card-back').style.display = 'none';

        const timerEl = document.getElementById('mimic-timer');
        timerEl.textContent = "20";
        timerEl.style.color = 'var(--text-color)';

        document.querySelector('[data-action="mimic-correct"]').disabled = true;
        document.querySelector('[data-action="mimic-skip"]').disabled = true;
        document.querySelector('[data-action="mimic-next-turn"]').disabled = true;
    }

    // --- Controller LeilÃ£o ---
    handleAuctionBid() {
        const p1Input = document.getElementById('bid-p1');
        const p2Input = document.getElementById('bid-p2');

        const p1Val = p1Input.value;
        const p2Val = p2Input.value;

        if (!p1Val || !p2Val) {
            alert('Ambos os jogadores precisam dar um lance!');
            return;
        }

        const result = this.model.placeBid(p1Val, p2Val);

        if (!result.success) {
            alert(result.msg);
            return;
        }

        // Re-renderizar para atualizar saldo e prÃ³ximo item
        this.view.renderView('game-playing', this.model.getGame('leilao-intimidade'));

        // Feedback
        if (navigator.vibrate) navigator.vibrate(100);
    }

    handleAuctionSkip() {
        // Pular para o prÃ³ximo item sem dar lance
        this.model.drawAuctionItem();
        this.view.renderView('game-playing', this.model.getGame('leilao-intimidade'));
    }

    // --- Controller Dados do Prazer ---
    handleDiceRoll() {
        const dice1El = document.getElementById('dice-1');
        const dice2El = document.getElementById('dice-2');
        const resultDiv = document.getElementById('dice-result');
        const timerBtn = document.getElementById('dice-timer-btn');
        const timerDisplay = document.getElementById('dice-timer-display');

        if (!dice1El || !dice2El) return;

        // Limpar timer anterior se existir
        if (this.model.diceState && this.model.diceState.timer) {
            clearInterval(this.model.diceState.timer);
            this.model.diceState.isTimerRunning = false;
        }

        // Esconder resultado e timer anteriores
        resultDiv.style.display = 'none';
        timerBtn.style.display = 'none';
        if (timerDisplay) timerDisplay.style.display = 'none';

        // AnimaÃ§Ã£o de giro
        dice1El.classList.add('spinning');
        dice2El.classList.add('spinning');

        // VibraÃ§Ã£o
        if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

        // Sortear resultado apÃ³s animaÃ§Ã£o
        setTimeout(() => {
            dice1El.classList.remove('spinning');
            dice2El.classList.remove('spinning');

            // RotaÃ§Ã£o final aleatÃ³ria para visual
            const rx1 = Math.floor(Math.random() * 4) * 90;
            const ry1 = Math.floor(Math.random() * 4) * 90;
            const rx2 = Math.floor(Math.random() * 4) * 90;
            const ry2 = Math.floor(Math.random() * 4) * 90;
            dice1El.style.transform = `rotateX(${rx1}deg) rotateY(${ry1}deg)`;
            dice2El.style.transform = `rotateX(${rx2}deg) rotateY(${ry2}deg)`;

            // Sortear textos
            const result = this.model.rollDice();

            // Mostrar resultado
            const d1 = result.d1;
            const d2 = result.d2;

            document.getElementById('dice-action-phrase').textContent = `Preparem-se para a posiÃ§Ã£o ${d1.name}...`;
            document.getElementById('dice-result-d1').textContent = d1.name;
            document.getElementById('dice-desc-d1').textContent = d1.description;
            document.getElementById('dice-result-d2').textContent = d2.name;
            document.getElementById('dice-desc-d2').textContent = d2.description;

            // Link de referÃªncia visual
            const refLink = document.getElementById('dice-ref-link');
            if (d1.ref) {
                refLink.href = `https://www.google.com/search?q=${encodeURIComponent(d1.ref)}+posicao+sexo&tbm=isch`;
                document.getElementById('dice-ref-container').style.display = 'block';
            } else {
                document.getElementById('dice-ref-container').style.display = 'none';
            }

            resultDiv.style.display = 'block';
            resultDiv.classList.add('pop-in');
            setTimeout(() => resultDiv.classList.remove('pop-in'), 500);

            // Mostrar botÃ£o de timer
            timerBtn.style.display = 'inline-block';

            if (navigator.vibrate) navigator.vibrate(100);
        }, 1500);
    }

    handleDiceStartTimer() {
        const timerBtn = document.getElementById('dice-timer-btn');
        const timerDisplay = document.getElementById('dice-timer-display');
        const timerText = document.getElementById('dice-timer-text');
        const timerBar = document.getElementById('dice-timer-bar');

        if (!timerDisplay) return;

        timerBtn.style.display = 'none';
        timerDisplay.style.display = 'block';

        const totalSeconds = 5 * 60; // 5 minutos
        const viewEl = document.querySelector('.game-interface');

        this.model.startDiceTimer(5, (timeStr, finished) => {
            timerText.textContent = timeStr;

            if (!finished) {
                const remaining = this.model.diceState.timeRemaining;
                const percent = (remaining / totalSeconds) * 100;
                timerBar.style.width = `${percent}%`;

                // Muda cor da tela nos Ãºltimos 30 segundos
                if (remaining <= 30) {
                    viewEl.classList.add('timer-warning');
                }
            } else {
                timerBar.style.width = '0%';
                timerText.textContent = 'â° Tempo Esgotado!';
                timerText.style.color = '#fff';

                viewEl.classList.remove('timer-warning');
                viewEl.classList.add('timer-finished-bg');

                if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);

                // Mostrar botÃ£o de lanÃ§ar de novo apÃ³s 3s e resetar cor
                setTimeout(() => {
                    timerDisplay.style.display = 'none';
                    timerText.style.color = 'var(--primary-color)';
                    viewEl.classList.remove('timer-finished-bg');
                }, 5000);
            }
        });
    }

    handleStartTermometro() {
        const state = this.model.termometroState;
        const deck = this.model.escaladaDeck;
        state.isActive = true;
        state.elapsedSeconds = 0;
        state.instructionIndex = 0;

        const mainBtn = document.getElementById('termometro-main-btn');
        const stopBtn = document.getElementById('termometro-stop-btn');
        const timerDisplay = document.getElementById('termometro-timer');
        const instructionText = document.getElementById('termometro-instruction');
        const progressBar = document.getElementById('termometro-progress-bar');

        if (mainBtn) mainBtn.style.display = 'none';
        if (stopBtn) {
            stopBtn.style.display = 'block';
            stopBtn.style.margin = '2rem auto 0 auto';
        }
        if (instructionText) {
            instructionText.innerText = deck[0];
            instructionText.classList.add('pop-in');
        }

        // Reset ProgressBar
        if (progressBar) {
            progressBar.style.width = '0%';
            progressBar.style.backgroundColor = '#1e3a8a';
        }

        state.interval = setInterval(() => {
            state.elapsedSeconds++;

            // Atualizar Timer
            const mins = Math.floor(state.elapsedSeconds / 60);
            const secs = state.elapsedSeconds % 60;
            if (timerDisplay) {
                timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }

            // Atualizar InstruÃ§Ã£o (cada 45s)
            if (state.elapsedSeconds > 0 && state.elapsedSeconds % 45 === 0) {
                state.instructionIndex++;
                if (state.instructionIndex < deck.length) {
                    instructionText.style.opacity = '0';
                    setTimeout(() => {
                        instructionText.innerText = deck[state.instructionIndex];
                        instructionText.style.opacity = '1';
                    }, 500);
                }
            }

            // Atualizar Barra de Progresso e Cor
            const progress = Math.min(state.elapsedSeconds / 1125, 1);
            const r = Math.round(30 + (progress * (127 - 30)));
            const g = Math.round(58 + (progress * (29 - 58)));
            const b = Math.round(138 + (progress * (29 - 138)));

            if (progressBar) {
                progressBar.style.width = `${progress * 100}%`;
                progressBar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        }, 1000);
    }

    handleStopTermometro() {
        const state = this.model.termometroState;
        clearInterval(state.interval);
        state.isActive = false;

        const mins = Math.floor(state.elapsedSeconds / 60);
        const secs = state.elapsedSeconds % 60;

        const instructionContainer = document.querySelector('.instruction-container');
        const controls = document.querySelector('.termometro-controls');

        if (instructionContainer) {
            instructionContainer.innerHTML = `
                <div class="termometro-result">
                    <h3>VocÃª resistiu por ${mins}m e ${secs}s.</h3>
                    <h2 style="font-size: 2rem; margin-top: 1rem;">Agora, entregue-se! ðŸ”¥</h2>
                </div>
            `;
        }

        if (controls) {
            controls.innerHTML = `
                <button class="cta-btn secondary-btn" data-action="nav-games">Voltar ao Hub</button>
            `;
        }
    }
}

// InicializaÃ§Ã£o
document.addEventListener('DOMContentLoaded', () => {
    const model = new GameModel();
    const view = new GameView();
    window.gameModel = model;
    const app = new GameController(model, view);
    app.init();
});
