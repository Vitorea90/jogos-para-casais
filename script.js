/**
 * Hub de Jogos - MVC Architecture
 */

// --- Model ---
class GameModel {
    constructor() {
        this.games = [
            {
                id: 'nosso-codigo',
                title: '🧩 Nosso Código',
                description: 'Decifre a mímica do parceiro! Apenas <span style="color: var(--accent-color); font-weight: bold;">Vocês</span> entendem.<br>(Mímicas/Blue)',
                type: 'mimic-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'eclipse-penumbra',
                title: '🧊 Eclipse Penumbra',
                description: 'Conexão e profundidade. <br><span style="color: var(--accent-color); font-weight: bold;">(Leve/Blue)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'sintonia-fina',
                title: '🎻 Sintonia Fina',
                description: 'Será que vocês se conhecem mesmo? Responda e veja se o parceiro acerta! <br><span style="color: var(--accent-color); font-weight: bold;">(Casais/Conexão)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['couple']
            },
            {
                id: 'leilao-intimidade',
                title: '⚖️ Leilão de Intimidade',
                description: 'Quem dá mais por esse desejo? Use seu saldo com sabedoria! <br><span style="color: #FDCB6E; font-weight: bold;">(Casais/Estratégia)</span>',
                theme: 'yellow',
                category: ['couple']
            },
            {
                id: 'eu-nunca',
                title: '🍺 Eu Nunca Casal',
                description: 'O clássico, mas com intensidade progressiva. O jogo esquenta conforme as rodadas passam! <br><span style="color: #FDCB6E; font-weight: bold;">(Casal/Progressivo)</span>',
                type: 'card-game',
                theme: 'yellow',
                category: ['couple']
            },
            {
                id: 'esquenta',
                title: '🔥 Eclipse Total',
                description: 'Verdades e desafios intensos. <br><span style="color: var(--danger-color); font-weight: bold;">(Pesado/Red)</span>',
                type: 'card-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'desejos-binarios',
                title: '🌌 Desejos Binários',
                description: 'Dê "Sim" ou "Não" para fantasias. Descubra onde vocês combinam! <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Red)</span>',
                type: 'binary-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'roleta-temperatura',
                title: '🎡 Roleta da Temperatura',
                description: 'Gire para descobrir o próximo passo. A temperatura sobe com o tempo! <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Interativo)</span>',
                type: 'roulette-game',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'dados-prazer',
                title: '🎲 Dados do Prazer',
                description: 'Lance os dados e descubra a combinação: Posição + Modificador. <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Criativo)</span>',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'termometro-prazer',
                title: '🌡️ Termômetro do Prazer',
                description: 'Resista à provocação enquanto a temperatura sobe. O fundo muda de cor conforme a tensão aumenta! <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Resistência)</span>',
                theme: 'red',
                category: ['couple']
            },
            {
                id: 'eclipse-social',
                title: '🎉 Eclipse Social',
                description: 'Verdades leves, desafios engraçados e bônus caóticos para jogar com amigos! <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/Diversão)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'quem-mais-provavel',
                title: '☝️ Quem é Mais Provável?',
                description: 'Quem do grupo tem mais chance de...? Todos apontam na conta de 3! <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/Social)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'eu-nunca-festa',
                title: '🍹 Eu Nunca Festa',
                description: 'A versão clássica para rir com os amigos de situações engraçadas. <br><span style="color: var(--primary-color); font-weight: bold;">(Grupo/Social)</span>',
                type: 'card-game',
                theme: 'blue',
                category: ['group']
            },
            {
                id: 'tabuleiro-seducao',
                title: '🎲 Tabuleiro da Sedução',
                description: 'Um jogo de trilha onde cada casa é um desafio. Trilha Azul para ele, Rosa para ela. <br><span style="color: var(--danger-color); font-weight: bold;">(Casais/Intenso)</span>',
                type: 'board-game',
                theme: 'marsala',
                category: ['couple']
            },
        ];




        // --- Deck Leilão de Intimidade (40 Itens) ---
        this.auctionDeck = [
            // Mimos e Vida a Dois (15)
            { category: 'Mimos', text: 'Café da manhã na cama amanhã (preparado/servido)' },
            { category: 'Mimos', text: 'Vale-Veto de Louça: 2 dias sem lavar nada' },
            { category: 'Mimos', text: 'Massagem nos pés de 15 minutos sem reclamar' },
            { category: 'Mimos', text: 'Escolha do filme hoje à noite (sem veto)' },
            { category: 'Mimos', text: 'Jantar perdoado: o outro cozinha ou pede' },
            { category: 'Mimos', text: 'Vale-Preguiça: dia inteiro de pijama sem julgamentos' },
            { category: 'Mimos', text: 'Controle Remoto absoluto por uma noite' },
            { category: 'Mimos', text: 'Cafuné ilimitado enquanto assistimos TV' },
            { category: 'Mimos', text: 'Vale "Você tem razão": venço uma discussão automaticamente' },
            { category: 'Mimos', text: 'Sobremesa favorita entregue em casa (paga pelo outro)' },
            { category: 'Mimos', text: 'Vale-Motorista: o outro dirige no próximo passeio' },
            { category: 'Mimos', text: 'Playlist no carro é minha por uma semana' },
            { category: 'Mimos', text: 'Liberação de um compromisso social chato' },
            { category: 'Mimos', text: 'Banho preparado (sais, espuma ou apenas temperatura ideal)' },
            { category: 'Mimos', text: 'Direito a pedir um favor chato (ex: ligar p/ SAC)' },

            // Apimentar a Noite (15)
            { category: 'Apimentar', text: 'Escolha da primeira posição hoje' },
            { category: 'Apimentar', text: 'Vale-Fantasia: Escolho o tema/cenário da próxima' },
            { category: 'Apimentar', text: 'Massagem especial com óleo (20 min)' },
            { category: 'Apimentar', text: 'Striptease exclusivo para mim' },
            { category: 'Apimentar', text: 'Vale-Lingerie/Cueca: Escolho o que você usa hoje' },
            { category: 'Apimentar', text: 'Comando do ritmo: eu dito a velocidade hoje' },
            { category: 'Apimentar', text: 'Vendado(a): você perde a visão por 30 minutos' },
            { category: 'Apimentar', text: 'Amarrado(a): você fica imóvel enquanto eu provoco' },
            { category: 'Apimentar', text: 'Sussurros proibidos: 5 min de dirty talk no ouvido' },
            { category: 'Apimentar', text: 'Vale-Oral: Foco total em mim até o fim' },
            { category: 'Apimentar', text: 'Local inusitado: Eu escolho onde faremos (dentro de casa)' },
            { category: 'Apimentar', text: 'Banho a dois com "algo a mais"' },
            { category: 'Apimentar', text: 'Brinquedo: Eu escolho qual usar e como' },
            { category: 'Apimentar', text: 'Vale-Foto: Uma foto picante só para os meus olhos' },
            { category: 'Apimentar', text: 'Toque livre: Posso te tocar onde quiser em público (discretamente)' },

            // Vales Estratégicos (10)
            { category: 'Estratégico', text: 'Vale-Desejo Livre (bom senso, válido por 24h)' },
            { category: 'Estratégico', text: 'Vale-Perfeição: "Sim" para tudo por 1h' },
            { category: 'Estratégico', text: 'Anular Dívida: Cancelo um item que perdi anteriormente' },
            { category: 'Estratégico', text: 'Roubo: Pego um item do seu inventário para mim' },
            { category: 'Estratégico', text: 'Veto: Cancelo seu lance nessa rodada (se eu ganhar essa carta)' },
            { category: 'Estratégico', text: 'Saldo Extra: Ganho +20 moedas agora (banco paga)', effect: 'add_credit', value: 20 },
            { category: 'Estratégico', text: 'Taxação: Você me paga 10 moedas agora', effect: 'tax', value: 10 },
            { category: 'Estratégico', text: 'Reembolso: Recupero 50% do que gastei na última compra', effect: 'refund', value: 0.5 },
            { category: 'Estratégico', text: 'Silêncio: Você não pode falar por 30 minutos' },
            { category: 'Estratégico', text: 'Espelho: O que você mandar eu fazer, você faz também' }
        ];

        // --- Dados do Tabuleiro da Sedução ---
        this.seductionBoardData = {
            blue: [
                "Elogie a parte do corpo dela que você mais gosta.",
                "Dê um beijo demorado no pescoço e na nuca dela.",
                "Faça uma massagem relaxante nos pés ou pernas dela.",
                "Tire os sapatos e as meias dela.",
                "Sussurre no ouvido dela com detalhes o que você quer fazer hoje.",
                { type: 'punishment', text: "Punição: O clima esfriou. Volte 2 casas.", move: -2 },
                "Dê beijos descendo do pescoço até a barriga dela.",
                "Tire la blusa ou o vestido dela lentamente.",
                { type: 'bonus', text: "Bônus: Escolha uma música sensual para tocar agora." },
                "Faça uma massagem nas costas dela apenas com as pontas dos dedos.",
                "Tire a sua própria camisa.",
                "Ela Pede: Cumpra um desejo rápido que ela escolher agora.",
                "Beije e provoque os seios dela por 1 minuto.",
                "Tire a calça, saia ou short dela.",
                "Tire a sua própria calça.",
                "Tire a roupa íntima dela usando apenas a boca ou uma das mãos.",
                "Provoque a intimidade dela com as mãos.",
                { type: 'punishment', text: "Punição: Calma apressadinho. Volte 1 casa para provocar mais.", move: -1 },
                "Faça sexo oral nela com dedicação até ela pedir para você parar.",
                "Use uma venda nos olhos dela e provoque-a com algo gelado ou morno.",
                "Retire sua própria roupa íntima agora mesmo.",
                "Descreva detalhadamente como você vai fazê-la chegar lá.",
                "Beije-a apaixonadamente enquanto as mãos exploram cada curva.",
                { type: 'bonus', text: "Bônus: Sua pegada é incrível! Avance 2 casas.", move: 2 },
                "Morda levemente a parte interna das coxas dela.",
                { type: 'punishment', text: "Punição: Muito rápido! Volte 2 casas para saborear cada detalhe.", move: -2 },
                "Use a língua para desenhar caminhos de prazer no corpo dela.",
                "Deixe-a no comando por 2 minutos, apenas recebendo o que ela quiser.",
                "Sussurre sua fantasia mais sombria no ouvido dela.",
                "Chegada: Êxtase total na posição que você mais gosta."
            ],
            pink: [
                "Dê um beijo de cinema nele.",
                "Faça carinho na nuca e puxe levemente o cabelo dele.",
                "Conte no ouvido dele uma fantasia secreta sua.",
                "Tire a camisa dele com provocação.",
                "Morda levemente a orelha e o pescoço dele.",
                { type: 'punishment', text: "Punição: O clima esfriou. Volte 2 casas.", move: -2 },
                "Provoque-o passando as mãos por dentro da roupa dele.",
                "Tire a sua própria blusa.",
                { type: 'bonus', text: "Bônus: Ganhe uma massagem de 2 minutos onde você quiser." },
                "Desabotoe a calça dele com muita calma, olhando nos olhos.",
                "Beije o caminho do peitoral até a marca da calça dele.",
                "Ele Pede: Cumpra um desejo rápido que ele escolher agora.",
                "Tire a sua própria calça ou saia.",
                "Faça uma massagem provocante nas coxas e na virilha dele.",
                "Fique apenas de roupa íntima.",
                "Tire a roupa íntima dele lentamente.",
                "Provoque-o com toques, beijos e respiração na região íntima.",
                { type: 'punishment', text: "Punição: Vamos prolongar o desejo. Volte 1 casa.", move: -1 },
                "Faça sexo oral nele, controlando o ritmo como você preferir.",
                "Sussurre uma fantasia que te deixa molhada só de pensar.",
                "Retire a sua própria roupa íntima com um olhar fatal.",
                "Use as mãos para explorá-lo enquanto sussurra palavras de desejo.",
                "Provoque-o até que ele não consiga mais ficar parado.",
                { type: 'bonus', text: "Bônus: Você está impossível! Avance 3 casas.", move: 3 },
                "Escolha um lugar sensível dele e use apenas a ponta da língua.",
                { type: 'punishment', text: "Punição: Ele está perdendo o controle. Volte 2 casas para torturá-lo mais.", move: -2 },
                "Comande a situação: coloque-o onde você quer e faça o que desejar.",
                "Use o seu corpo para envolvê-lo em uma dança privativa rápida.",
                "Revele o que você quer que ele faça com você agora mesmo.",
                "Chegada: Êxtase total na posição que você sempre quis tentar."
            ]
        };

        this.seductionBoardState = {
            bluePos: 0,
            pinkPos: 0,
            currentPlayer: 'blue', // Começa com o azul (homem) ou conforme a regra
            lastMove: 0,
            isFinished: false
        };

        // --- Deck Mímica (40 Cartas) ---
        this.mimicDeck = [
            // Manias do Parceiro
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando está com preguiça de levantar da cama.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro mexe no cabelo quando está nervoso ou pensativo.' },
            { category: 'Manias do Parceiro', text: 'Imite a reação do parceiro quando percebe que esqueceu algo importante em casa.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro come algo que ele gosta muito.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara que o parceiro faz quando está segurando o riso em um lugar sério.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro reage ao receber um presente que não gostou muito (tentando ser educado).' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro caminha quando está com pressa.' },
            { category: 'Manias do Parceiro', text: 'Imite a expressão do parceiro quando ouve um áudio muito longo no WhatsApp.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando tirar uma selfie perfeita.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando está concentrado jogando videogame ou trabalhando.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro espirra ou boceja (de forma exagerada).' },
            { category: 'Manias do Parceiro', text: 'Imite a reação do parceiro ao ver o preço de algo muito caro.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando se arrumar rápido para sair.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara do parceiro quando está com ciúmes, mas finge que não está.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro dirige ou se comporta no trânsito.' },

            // Situações de Casal
            { category: 'Situações de Casal', text: 'Imite nós dois tentando decidir o que comer no sábado à noite.' },
            { category: 'Situações de Casal', text: 'Imite como foi a nossa reação ao assistir um filme de terror juntos.' },
            { category: 'Situações de Casal', text: 'Imite o nosso primeiro beijo (versão "expectativa vs realidade").' },
            { category: 'Situações de Casal', text: 'Imite quando um de nós tenta acordar o outro de forma carinhosa (e falha).' },
            { category: 'Situações de Casal', text: 'Imite como ficamos quando estamos em uma festa e queremos ir embora sem ninguém perceber.' },
            { category: 'Situações de Casal', text: 'Imite a nossa "dança" oficial quando toca uma música que ambos gostamos.' },
            { category: 'Situações de Casal', text: 'Imite um de nós tentando explicar uma fofoca complexa para o outro.' },
            { category: 'Situações de Casal', text: 'Imite como ficamos quando estamos deitados no sofá dividindo a mesma coberta.' },
            { category: 'Situações de Casal', text: 'Imite a nossa reação quando a comida do delivery finalmente chega.' },
            { category: 'Situações de Casal', text: 'Imite um de nós tentando convencer o outro a fazer uma massagem.' },
            { category: 'Situações de Casal', text: 'Imite como é a nossa disputa pelo controle remoto ou pelo lado da cama.' },
            { category: 'Situações de Casal', text: 'Imite a nossa cara quando encontramos alguém que ambos não gostamos na rua.' },
            { category: 'Situações de Casal', text: 'Imite o jeito que a gente se despede quando um de nós vai viajar.' },
            { category: 'Situações de Casal', text: 'Imite como é o nosso "abraço de urso" depois de um dia cansativo.' },
            { category: 'Situações de Casal', text: 'Imite um de nós tentando cantar uma música em inglês sem saber a letra.' },

            // Momentos Específicos
            { category: 'Momentos Específicos', text: 'Imite o parceiro bêbado tentando parecer sóbrio.' },
            { category: 'Momentos Específicos', text: 'Imite como o parceiro fica quando ganha uma discussão.' },
            { category: 'Momentos Específicos', text: 'Imite o parceiro tentando montar um móvel ou consertar algo em casa.' },
            { category: 'Momentos Específicos', text: 'Imite a reação do parceiro ao ganhar um carinho inesperado.' },
            { category: 'Momentos Específicos', text: 'Imite o parceiro falando com um animal de estimação ou um bebê.' },
            { category: 'Momentos Específicos', text: 'Imite o parceiro quando está contando uma mentira muito óbvia.' },
            { category: 'Momentos Específicos', text: 'Imite como o parceiro fica quando está com febre ou levemente doente (o "drama").' },
            { category: 'Momentos Específicos', text: 'Imite a reação do parceiro ao ganhar uma surpresa.' },
            { category: 'Momentos Específicos', text: 'Imite o parceiro tentando fazer um exercício físico difícil.' },
            { category: 'Momentos Específicos', text: 'Imite o parceiro reagindo a uma notícia muito boa.' }
        ];

        this.eclipseSocialDeck = [
            // VERDADES (50)
            { type: 'verdade', text: 'Qual foi a maior vergonha que você já passou na escola?' },
            { type: 'verdade', text: 'Qual mania estranha você tem escondida?' },
            { type: 'verdade', text: 'Qual foi sua pior apresentação em público?' },
            { type: 'verdade', text: 'Já tropeçou feio na frente de muita gente?' },
            { type: 'verdade', text: 'Qual foi a desculpa mais ridícula que você já deu?' },
            { type: 'verdade', text: 'Já falou algo achando que estava arrasando e ficou climão?' },
            { type: 'verdade', text: 'Qual foi o pior corte de cabelo da sua vida?' },
            { type: 'verdade', text: 'Já mandou áudio errado em grupo?' },
            { type: 'verdade', text: 'Qual hábito estranho você tem quando está sozinho?' },
            { type: 'verdade', text: 'Já pagou mico tentando impressionar alguém?' },
            { type: 'verdade', text: 'Qual foi sua pior nota na escola?' },
            { type: 'verdade', text: 'Já esqueceu o nome de alguém importante?' },
            { type: 'verdade', text: 'Já caiu em fake news?' },
            { type: 'verdade', text: 'Qual comida você ama mas tem vergonha de admitir?' },
            { type: 'verdade', text: 'Já riu em momento inapropriado?' },
            { type: 'verdade', text: 'Já chamou professor pelo nome errado?' },
            { type: 'verdade', text: 'Qual modinha você seguiu e hoje se arrepende?' },
            { type: 'verdade', text: 'Já saiu de casa com roupa do avesso?' },
            { type: 'verdade', text: 'Qual foi sua maior preguiça pública?' },
            { type: 'verdade', text: 'Já confundiu alguém na rua?' },
            { type: 'verdade', text: 'Qual foi sua fase mais vergonhosa?' },
            { type: 'verdade', text: 'Já tentou cantar e desafinou feio?' },
            { type: 'verdade', text: 'Já fingiu que entendeu algo que não entendeu?' },
            { type: 'verdade', text: 'Qual meme representa sua vida?' },
            { type: 'verdade', text: 'Já esqueceu aniversário de alguém importante?' },
            { type: 'verdade', text: 'Qual foi sua maior gafe?' },
            { type: 'verdade', text: 'Já tentou contar piada e ninguém riu?' },
            { type: 'verdade', text: 'Já mandou mensagem no grupo errado?' },
            { type: 'verdade', text: 'Qual foi sua pior fase fashion?' },
            { type: 'verdade', text: 'Já caiu na escada?' },
            { type: 'verdade', text: 'Já ficou preso(a) em algum lugar?' },
            { type: 'verdade', text: 'Qual foi sua maior procrastinação?' },
            { type: 'verdade', text: 'Já fingiu estar ocupado?' },
            { type: 'verdade', text: 'Qual foi sua maior vergonha em viagem?' },
            { type: 'verdade', text: 'Já falou mal de algo e depois descobriu que a pessoa gostava?' },
            { type: 'verdade', text: 'Já entrou no banheiro errado?' },
            { type: 'verdade', text: 'Já pagou mico no esporte?' },
            { type: 'verdade', text: 'Qual foi sua maior ilusão?' },
            { type: 'verdade', text: 'Já esqueceu o que ia falar no meio da frase?' },
            { type: 'verdade', text: 'Já caiu dormindo em aula?' },
            { type: 'verdade', text: 'Qual foi sua pior tentativa de cozinhar?' },
            { type: 'verdade', text: 'Já tropeçou em público e fingiu que nada aconteceu?' },
            { type: 'verdade', text: 'Já usou filtro demais numa foto?' },
            { type: 'verdade', text: 'Já errou a letra de música cantando alto?' },
            { type: 'verdade', text: 'Já foi o último escolhido em algo?' },
            { type: 'verdade', text: 'Já fez drama desnecessário?' },
            { type: 'verdade', text: 'Já teve medo bobo?' },
            { type: 'verdade', text: 'Qual talento inútil você tem?' },
            { type: 'verdade', text: 'Já derrubou comida na roupa antes de sair?' },
            { type: 'verdade', text: 'Qual foi seu maior “eu era feliz e não sabia”?' },

            // DESAFIOS (50)
            { type: 'desafio', text: 'Fale com sotaque diferente por 2 rodadas.' },
            { type: 'desafio', text: 'Dance como se estivesse sozinho no quarto.' },
            { type: 'desafio', text: 'Faça 30 segundos de passarela dramática.' },
            { type: 'desafio', text: 'Imite um animal escolhido pelo grupo.' },
            { type: 'desafio', text: 'Faça uma propaganda improvisada de uma cadeira.' },
            { type: 'desafio', text: 'Conte uma piada ruim.' },
            { type: 'desafio', text: 'Fique congelado por 1 rodada.' },
            { type: 'desafio', text: 'Faça um discurso motivacional exagerado.' },
            { type: 'desafio', text: 'Imite um narrador de futebol por 1 minuto.' },
            { type: 'desafio', text: 'Ande como modelo até a próxima rodada.' },
            { type: 'desafio', text: 'Faça caretas até alguém rir.' },
            { type: 'desafio', text: 'Faça 15 polichinelos gritando “ECLIPSE”.' },
            { type: 'desafio', text: 'Fale cantando por 1 rodada.' },
            { type: 'desafio', text: 'Finja que é um robô.' },
            { type: 'desafio', text: 'Faça uma cena de novela dramática.' },
            { type: 'desafio', text: 'Recrie uma pose famosa de super-herói.' },
            { type: 'desafio', text: 'Equilibre algo na cabeça por 30 segundos.' },
            { type: 'desafio', text: 'Faça voz de desenho animado.' },
            { type: 'desafio', text: 'Dê um giro e pose final.' },
            { type: 'desafio', text: 'Imite alguém da roda (sem ofender).' },
            { type: 'desafio', text: 'Fale o alfabeto ao contrário (ou tente).' },
            { type: 'desafio', text: 'Conte uma história como se fosse suspense.' },
            { type: 'desafio', text: 'Faça uma coreografia inventada.' },
            { type: 'desafio', text: 'Desfile como se tivesse vencido concurso.' },
            { type: 'desafio', text: 'Fique 1 rodada sem rir.' },
            { type: 'desafio', text: 'Fale apenas sussurrando por 1 rodada.' },
            { type: 'desafio', text: 'Faça 1 minuto de stand-up improvisado.' },
            { type: 'desafio', text: 'Ande como um vilão.' },
            { type: 'desafio', text: 'Faça uma entrevista fictícia com você mesmo.' },
            { type: 'desafio', text: 'Cante parabéns como ópera.' },
            { type: 'desafio', text: 'Imite risada maligna.' },
            { type: 'desafio', text: 'Faça um comercial de shampoo imaginário.' },
            { type: 'desafio', text: 'Conte uma história exagerando tudo.' },
            { type: 'desafio', text: 'Fale como narrador de documentário.' },
            { type: 'desafio', text: 'Faça uma pose estátua por 1 minuto.' },
            { type: 'desafio', text: 'Recrie cena de filme famoso.' },
            { type: 'desafio', text: 'Dance sem mexer os braços.' },
            { type: 'desafio', text: 'Faça um tutorial inútil (ex: como sentar).' },
            { type: 'desafio', text: 'Fale só em perguntas por 1 rodada.' },
            { type: 'desafio', text: 'Imite alguém acordando atrasado.' },
            { type: 'desafio', text: 'Finja que ganhou um prêmio.' },
            { type: 'desafio', text: 'Faça um rap improvisado.' },
            { type: 'desafio', text: 'Faça cara de vilão por 30 segundos.' },
            { type: 'desafio', text: 'Conte um segredo falso convincente.' },
            { type: 'desafio', text: 'Faça uma caminhada dramática.' },
            { type: 'desafio', text: 'Fale como se estivesse chorando.' },
            { type: 'desafio', text: 'Faça um som de efeito para tudo que alguém fizer por 1 rodada.' },
            { type: 'desafio', text: 'Faça pose de influencer.' },
            { type: 'desafio', text: 'Descreva alguém como se fosse personagem épico.' },
            { type: 'desafio', text: 'Escolha alguém para fazer desafio com você.' },

            // BÔNUS (50)
            { type: 'bonus', text: 'Pular um desafio.' },
            { type: 'bonus', text: 'Passar desafio para outro.' },
            { type: 'bonus', text: 'Duplicar desafio de alguém.' },
            { type: 'bonus', text: 'Criar mini regra por 2 rodadas.' },
            { type: 'bonus', text: 'Inverter ordem do jogo.' },
            { type: 'bonus', text: 'Trocar lugar com qualquer pessoa.' },
            { type: 'bonus', text: 'Forçar alguém a responder 2 verdades.' },
            { type: 'bonus', text: 'Escolher dupla obrigatória.' },
            { type: 'bonus', text: 'Criar desafio coletivo.' },
            { type: 'bonus', text: 'Dar imunidade por 1 rodada.' },
            { type: 'bonus', text: 'Criar rodada só de mímica.' },
            { type: 'bonus', text: 'Criar rodada só de desafios.' },
            { type: 'bonus', text: 'Criar rodada relâmpago.' },
            { type: 'bonus', text: 'Trocar cartas com alguém.' },
            { type: 'bonus', text: 'Roubar vez.' },
            { type: 'bonus', text: 'Criar regra do silêncio.' },
            { type: 'bonus', text: 'Criar regra da risada proibida.' },
            { type: 'bonus', text: 'Escolher líder da rodada.' },
            { type: 'bonus', text: 'Mudar tema para “escola”.' },
            { type: 'bonus', text: 'Mudar tema para “viagens”.' },
            { type: 'bonus', text: 'Obrigar alguém a falar rimando.' },
            { type: 'bonus', text: 'Criar punição leve.' },
            { type: 'bonus', text: 'Escolher alguém para fazer discurso.' },
            { type: 'bonus', text: 'Fazer dois jogarem juntos.' },
            { type: 'bonus', text: 'Escolher próxima vítima.' },
            { type: 'bonus', text: 'Criar regra de voz engraçada.' },
            { type: 'bonus', text: 'Dar imunidade dupla.' },
            { type: 'bonus', text: 'Criar desafio em dupla.' },
            { type: 'bonus', text: 'Criar desafio em trio.' },
            { type: 'bonus', text: 'Escolher alguém para imitar outro.' },
            { type: 'bonus', text: 'Criar rodada temática.' },
            { type: 'bonus', text: 'Escolher alguém para contar história.' },
            { type: 'bonus', text: 'Mudar sentido (verdade vira desafio).' },
            { type: 'bonus', text: 'Criar mini competição.' },
            { type: 'bonus', text: 'Fazer alguém elogiar todos.' },
            { type: 'bonus', text: 'Obrigar alguém a narrar a rodada.' },
            { type: 'bonus', text: 'Criar rodada dramática.' },
            { type: 'bonus', text: 'Criar rodada silenciosa.' },
            { type: 'bonus', text: 'Criar rodada só de caretas.' },
            { type: 'bonus', text: 'Criar rodada rápida (10s por pessoa).' },
            { type: 'bonus', text: 'Escolher alguém para fazer mímica.' },
            { type: 'bonus', text: 'Criar desafio físico leve.' },
            { type: 'bonus', text: 'Criar desafio teatral.' },
            { type: 'bonus', text: 'Criar desafio musical.' },
            { type: 'bonus', text: 'Criar desafio criativo.' },
            { type: 'bonus', text: 'Escolher tema secreto.' },
            { type: 'bonus', text: 'Trocar cartas entre dois.' },
            { type: 'bonus', text: 'Cancelar último desafio.' },
            { type: 'bonus', text: 'Criar regra maluca temporária.' },
            { type: 'bonus', text: 'Ativar “Eclipse Supremo” (todos fazem desafio).' }
        ];

        this.usedEclipseSocialIndices = new Set();

        // --- Deck Quem é Mais Provável? (30 Cartas) ---
        this.quemMaisProvavelDeck = [
            { text: "Quem é mais provável de esquecer onde estacionou o carro?" },
            { text: "Quem é mais provável de gastar todo o salário em um dia?" },
            { text: "Quem é mais provável de chorar assistindo um comercial de margarina?" },
            { text: "Quem é mais provável de ser preso por engano?" },
            { text: "Quem é mais provável de virar um meme na internet?" },
            { text: "Quem é mais provável de sobreviver a um apocalipse zumbi?" },
            { text: "Quem é mais provável de ganhar na loteria e não contar para ninguém?" },
            { text: "Quem é mais provável de viajar para o lugar errado?" },
            { text: "Quem é mais provável de se tornar um eremita?" },
            { text: "Quem é mais provável de dar PT em um open bar?" },
            { text: "Quem é mais provável de casar com um completo estranho em Vegas?" },
            { text: "Quem é mais provável de esquecer o próprio aniversário?" },
            { text: "Quem é mais provável de adotar 10 gatos?" },
            { text: "Quem é mais provável de ser a pessoa mais rica da roda?" },
            { text: "Quem é mais provável de sumir e nunca mais dar notícias?" },
            { text: "Quem é mais provável de enviar mensagem para o ex às 3 da manhã?" },
            { text: "Quem é mais provável de tropeçar no próprio pé?" },
            { text: "Quem é mais provável de brigar com um estranho na rua?" },
            { text: "Quem é mais provável de entrar na casa errada?" },
            { text: "Quem é mais provável de se tornar um influencer famoso?" },
            { text: "Quem é mais provável de contar um segredo sem querer?" },
            { text: "Quem é mais provável de rir em um velório?" },
            { text: "Quem é mais provável de se perder dentro de um shopping?" },
            { text: "Quem é mais provável de falar dormindo?" },
            { text: "Quem é mais provável de ter uma queda por um personagem de desenho?" },
            { text: "Quem é mais provável de ser a primeira pessoa a ser abduzida por aliens?" },
            { text: "Quem é mais provável de fazer drama por causa de um resfriado?" },
            { text: "Quem é mais provável de esquecer o nome de alguém logo após ser apresentado?" },
            { text: "Quem é mais provável de quebrar o celular no primeiro dia de uso?" },
            { text: "Quem é mais provável de ficar famoso por algo estúpido?" }
        ];
        this.usedQuemMaisProvavelIndices = new Set();

        // --- Deck Eu Nunca Festa (30 Cartas) ---
        this.euNuncaGrupoDeck = [
            { text: "Eu nunca usei o cartão de outra pessoa escondido." },
            { text: "Eu nunca fingi que não vi um conhecido na rua." },
            { text: "Eu nunca menti em uma entrevista de emprego." },
            { text: "Eu nunca saí de casa sem roupa de baixo." },
            { text: "Eu nunca peguei algo emprestado e nunca devolvi." },
            { text: "Eu nunca dei um nome falso para alguém em uma festa." },
            { text: "Eu nunca nadei pelado em público." },
            { text: "Eu nunca vomitei em um táxi ou transporte de aplicativo." },
            { text: "Eu nunca stalkeei um ex até as fotos de 2015." },
            { text: "Eu nunca usei a escova de dentes de outra pessoa." },
            { text: "Eu nunca fingi estar falando no celular para evitar alguém." },
            { text: "Eu nunca furei fila descaradamente." },
            { text: "Eu nunca fui expulso de uma festa ou bar." },
            { text: "Eu nunca beijei alguém da roda." },
            { text: "Eu nunca entrei em uma festa sem ser convidado." },
            { text: "Eu nunca menti para meus pais sobre onde estava." },
            { text: "Eu nunca comi algo que caiu no chão (3 segundos!)." },
            { text: "Eu nunca fiz xixi na piscina." },
            { text: "Eu nunca contei um segredo que jurei guardar." },
            { text: "Eu nunca fui parado em uma blitz." },
            { text: "Eu nunca menti sobre ter lido um livro ou visto um filme." },
            { text: "Eu nunca tive um crush no irmão/irmã de um amigo." },
            { text: "Eu nunca usei o Wi-Fi do vizinho sem permissão." },
            { text: "Eu nunca quebrei algo na casa de alguém e fingi que não fomos nós." },
            { text: "Eu nunca dormi no cinema." },
            { text: "Eu nunca mandei um 'oi sumido' por carência." },
            { text: "Eu nunca usei uma roupa e devolvi para a loja depois." },
            { text: "Eu nunca pesquisei meu próprio nome no Google." },
            { text: "Eu nunca menti a idade para parecer mais velho/novo." },
            { text: "Eu nunca dei uma desculpa falsa para faltar ao trabalho/estudo." }
        ];
        this.usedEuNuncaGrupoIndices = new Set();

        // --- Deck Sintonia Fina (30 Cartas) ---
        this.sintoniaFinaDeck = [
            { text: "Qual é a maior mania irritante do parceiro?" },
            { text: "Qual foi o lugar do primeiro encontro oficial?" },
            { text: "Quem gasta mais dinheiro no dia a dia?" },
            { text: "Qual é o maior sonho de infância do parceiro que ele ainda não realizou?" },
            { text: "Quem é mais provável de começar uma discussão?" },
            { text: "Qual é a comida favorita do parceiro que ele pediria como última refeição?" },
            { text: "Quem demora mais para se arrumar para sair?" },
            { text: "Qual é o maior medo bobo do parceiro?" },
            { text: "Para onde seria a viagem dos sonhos que vocês fariam amanhã?" },
            { text: "Quem disse 'eu te amo' primeiro?" },
            { text: "Qual é a música que define o relacionamento de vocês?" },
            { text: "Quem é mais organizado em casa?" },
            { text: "Qual é a primeira coisa que o parceiro faz ao acordar?" },
            { text: "Qual é o talento escondido do parceiro que pouca gente sabe?" },
            { text: "Quem é o mais ciumento da relação?" },
            { text: "Qual foi o presente mais marcante que um deu ao outro?" },
            { text: "Quem é mais provável de esquecer uma data especial?" },
            { text: "Qual é a cor favorita do parceiro?" },
            { text: "Quem é mais explorador e gosta de aventuras?" },
            { text: "O que o parceiro mais gosta de fazer no tempo livre?" },
            { text: "Quem é o mais engraçado/palhaço do casal?" },
            { text: "Qual é o hábito do parceiro que você acha mais fofo?" },
            { text: "Quem cozinha melhor?" },
            { text: "Qual é a série ou filme favorito do parceiro?" },
            { text: "Quem é mais viciado em celular?" },
            { text: "Qual é a maior qualidade que o parceiro vê em você?" },
            { text: "Quem é mais 'mão de vaca'?" },
            { text: "Qual é o destino de viagem que o parceiro detestaria ir?" },
            { text: "Quem é mais provável de se perder dirigindo?" },
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
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando está com preguiça de levantar da cama.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro mexe no cabelo quando está nervoso ou pensativo.' },
            { category: 'Manias do Parceiro', text: 'Imite a reação do parceiro quando percebe que esqueceu algo importante em casa.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro come algo que ele gosta muito.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara que o parceiro faz quando está segurando o riso em um lugar sério.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro reage ao receber um presente que não gostou muito (tentando ser educado).' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro caminha quando está com pressa.' },
            { category: 'Manias do Parceiro', text: 'Imite a expressão do parceiro quando ouve um áudio muito longo no WhatsApp.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando tirar uma selfie perfeita.' },
            { category: 'Manias do Parceiro', text: 'Imite como o parceiro fica quando está concentrado jogando videogame ou trabalhando.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro espirra ou boceja (de forma exagerada).' },
            { category: 'Manias do Parceiro', text: 'Imite a reação do parceiro ao ver o preço de algo muito caro.' },
            { category: 'Manias do Parceiro', text: 'Imite o parceiro tentando se arrumar rápido para sair.' },
            { category: 'Manias do Parceiro', text: 'Imite a cara do parceiro quando está com ciúmes, mas finge que não está.' },
            { category: 'Manias do Parceiro', text: 'Imite o jeito que o parceiro dirige ou se comporta no trânsito.' },

            // Categoria: Situações de Casal (15 Cartas)
            { category: 'Situações de Casal', text: 'Imite nós dois tentando decidir o que comer no sábado à noite.' },
            { category: 'Situações de Casal', text: 'Imite como foi a nossa reação ao assistir um filme de terror juntos.' },
            { category: 'Situações de Casal', text: 'Imite o nosso primeiro beijo (versão "expectativa vs realidade").' },
            { category: 'Situações de Casal', text: 'Imite quando um de nós tenta acordar o outro de forma carinhosa (e falha).' },
            { category: 'Situações de Casal', text: 'Imite como ficamos quando estamos em uma festa e queremos ir embora sem ninguém perceber.' },
            { category: 'Situações de Casal', text: 'Imite a nossa "dança" oficial quando toca uma música que ambos gostamos.' },
            { category: 'Situações de Casal', text: 'Imite a nossa reação quando a comida do delivery finalmente chega.' },
            { category: 'Situações de Casal', text: 'Imite um de nós tentando explicar uma fofoca complexa para o outro.' },
            { category: 'Situações de Casal', text: 'Imite como ficamos quando estamos deitados no sofá dividindo a mesma coberta.' }
        ];

        // --- Dados do Prazer (Arrays) ---
        this.dice1Options = [
            'Missionário (Clássico, foco no olhar)',
            'Doggy Style (De quatro)',
            'Cowgirl (Ela por cima)',
            'Cowgirl Invertida (Ela por cima, de costas)',
            'Conchinha (Deitados de lado)',
            'Tesoura (Pernas entrelaçadas)',
            'Em pé (Frente a frente)',
            'Sentados (Ele sentado, ela no colo)',
            'Carrinho de mão (Apoio nas mãos)',
            'Lótus (Sentados e abraçados)',
            'Ponte (Ela apoiada nos ombros)',
            '69 (Prazer mútuo)',
            'Preguiça (Deitados, pernas cruzadas)',
            'Aranha (Sentados, braços para trás)',
            'Triângulo (Elevando o quadril)',
            'Cadeira (Na beira de um móvel)',
            'Avião (Equilíbrio e profundidade)',
            'Escada (Níveis diferentes)',
            'Fusão (Corpos totalmente colados)',
            'X (Cruzados lateralmente)'
        ];

        this.dice2Options = [
            '...com o parceiro vendado.',
            '...em frente a um espelho.',
            '...na beira da cama.',
            '...usando um brinquedo.',
            '...em um cômodo diferente da casa.',
            '...com movimentos bem lentos (slow motion).',
            '...com as mãos presas ou para trás.',
            '...com as pernas elevadas nos ombros dele.',
            '...enquanto ele sussurra o que vai fazer.',
            '...com foco total no beijo na boca.',
            '...alternando a velocidade (rápido e devagar).',
            '...usando um travesseiro para elevar o quadril.',
            '...no banheiro (chuveiro ou pia).',
            '...no chão (com tapete ou almofadas).',
            '...mantendo contato visual o tempo todo.',
            '...com o parceiro provocando o pescoço/orelha.',
            '...apenas com as pontas dos pés tocando o chão.'
        ];

        // --- Dados do Prazer (Arrays) ---
        this.dice1Options = [
            { name: 'Missionário', description: 'O clássico frente a frente, um sobre o outro.', ref: 'Missionary Position' },
            { name: 'De Quatro', description: 'Um parceiro fica de joelhos e mãos, o outro vem por trás.', ref: 'Doggy Style' },
            { name: 'Cowgirl', description: 'Um parceiro deitado e o outro sentada por cima, de frente.', ref: 'Cowgirl Position' },
            { name: 'Cowgirl Invertida', description: 'Por cima, mas de costas para o parceiro deitado.', ref: 'Reverse Cowgirl' },
            { name: 'Conchinha', description: 'Ambos deitados de lado, um encaixado atrás do outro.', ref: 'Spoony Position' },
            { name: '69', description: 'Deitados em direções opostas para prazer mútuo.', ref: '69 Position' },
            { name: 'A Montanha', description: 'O parceiro deita e você senta por cima, pernas esticadas.', ref: 'Sitting Straddle Position' },
            { name: 'O Laço', description: 'Conchinha com as pernas da pessoa de trás entrelaçadas.', ref: 'Side-Lying Spooning' },
            { name: 'Profundidade', description: 'Missionário com os joelhos dobrados contra o próprio peito.', ref: 'Deep Missionary knees' },
            { name: 'O Trono', description: 'Um senta na beira da cama e o outro senta no colo, de frente.', ref: 'Lap Sitting Position' },
            { name: 'Cão de Caça', description: 'De quatro, peito colado no colchão e quadril elevado.', ref: 'Modified Doggy Style Flat' },
            { name: 'X-Factor', description: 'Ambos deitados de lado, formando um "X" entrelaçado.', ref: 'Criss-Cross Position' },
            { name: 'O Degrau', description: 'Um parceiro em pé e o outro deitado na borda da cama.', ref: 'Standing edge of bed' },
            { name: 'Abraço de Lótus', description: 'Ambos sentados de frente, pernas e braços envolvidos.', ref: 'Lotus Position intimate' },
            { name: 'A Alavanca', description: 'Deitados, um parceiro eleva uma perna do outro ao ombro.', ref: 'Leg on shoulder position' },
            { name: 'A Garça', description: 'Em pé, um parceiro apoiado na parede com uma perna elevada.', ref: 'Standing wall leg up' },
            { name: 'Em Pé', description: 'Ambos em pé, frente a frente, com um deles suspenso ou apoiado.', ref: 'Standing intimate position' },
            { name: 'A Cadeira', description: 'O parceiro senta e o outro senta no colo de costas.', ref: 'Reverse Lap Sitting' },
            { name: 'Tesoura', description: 'Deitados de frente, com as pernas cruzadas como uma tesoura.', ref: 'Scissors position sex' },
            { name: 'O Arco', description: 'Um parceiro deitado de costas com o quadril elevado por um travesseiro.', ref: 'Arch position pillow' }
        ];

        this.dice2Options = [
            { name: 'Semi-vestidos', description: 'Realizar a posição usando roupas (sem tirar tudo).' },
            { name: 'Sussurros', description: 'O parceiro ativo deve sussurrar o que está sentindo.' },
            { name: 'Sem Espaço', description: 'Manter os corpos totalmente colados durante o ato.' },
            { name: 'Proibição de Beijo', description: 'Beijar na boca é proibido neste turno; foque no corpo.' },
            { name: 'Ritmo Musical', description: 'Seguir o tempo da música que estiver tocando.' },
            { name: 'Mãos Dadas', description: 'Manter as mãos entrelaçadas o tempo todo.' },
            { name: 'Pausa de Controle', description: 'Fazer pausas de 10 segundos a cada 1 minuto.' },
            { name: 'Venda Superior', description: 'Quem estiver por cima joga de olhos vendados.' },
            { name: 'Foco Facial', description: 'Prioridade para carícias e beijos no rosto.' },
            { name: 'Choque Térmico', description: 'Realizar no cômodo mais frio da casa.' },
            { name: 'Câmera Lenta', description: 'Movimentos extremamente devagar e profundos.' },
            { name: 'Olhar Fixo', description: 'Manter contato visual ininterrupto.' },
            { name: 'Mãos Presas', description: 'Um dos parceiros deve ficar com as mãos para trás.' },
            { name: 'Frente ao Espelho', description: 'Realizar onde possam ver o reflexo do ato.' },
            { name: 'Uso de Gelo', description: 'Deslizar um gelo pelo corpo do parceiro durante a posição.' },
            { name: 'Luzes Acesas', description: 'Manter a iluminação máxima do ambiente.' },
            { name: 'Sem Toque Manual', description: 'Proibido usar as mãos para estimular o parceiro.' },
            { name: 'Mordidas Leves', description: 'O parceiro ativo deve morder suavemente ombros ou pescoço.' },
            { name: 'Troca de Comando', description: 'O parceiro que geralmente é passivo dita o ritmo agora.' },
            { name: 'Som do Desejo', description: 'Proibido falar; apenas gemidos e respiração são permitidos.' }
        ];

        // --- Deck Eu Nunca (100 Cartas) ---
        this.euNuncaDeck = [
            // Leve (30)
            { level: 1, text: "Eu nunca tive um crush em um professor ou chefe." },
            { level: 1, text: "Eu nunca mandei um 'oi sumido(a)' com segundas intenções." },
            { level: 1, text: "Eu nunca fingi que não vi uma mensagem só para responder mais tarde." },
            { level: 1, text: "Eu nunca pesquisei o nome de alguém no Google antes de um primeiro encontro." },
            { level: 1, text: "Eu nunca beijei alguém e me arrependi cinco minutos depois." },
            { level: 1, text: "Eu nunca menti minha idade para alguém que eu queria conquistar." },
            { level: 1, text: "Eu nunca ensaiei o que ia dizer no espelho antes de um encontro." },
            { level: 1, text: "Eu nunca mandei uma mensagem picante para a pessoa errada." },
            { level: 1, text: "Eu nunca tive uma 'amizade colorida'." },
            { level: 1, text: "Eu nunca tentei seduzir alguém usando apenas o olhar em uma festa." },
            { level: 1, text: "Eu nunca usei uma peça de roupa específica só porque sabia que você gostava." },
            { level: 1, text: "Eu nunca stalkeei o ex da pessoa com quem eu estava saindo." },
            { level: 1, text: "Eu nunca imaginei como seria o nosso casamento nas primeiras semanas." },
            { level: 1, text: "Eu nunca fiz uma playlist para alguém que eu queria ficar." },
            { level: 1, text: "Eu nunca fingi que gostava de uma banda só para impressionar." },
            { level: 1, text: "Eu nunca mandei uma indireta nos Stories esperando que apenas UMA pessoa visse." },
            { level: 1, text: "Eu nunca curti fotos antigas de alguém de propósito para chamar atenção." },
            { level: 1, text: "Eu nunca menti que estava chegando quando ainda estava no banho." },
            { level: 1, text: "Eu nunca tive um crush em um personagem de desenho animado." },
            { level: 1, text: "Eu nunca fingi que não sabia de algo que descobri stalkeando." },
            { level: 1, text: "Eu nunca mandei um 'print' da conversa para a própria pessoa por engano." },
            { level: 1, text: "Eu nunca ignorei uma pessoa só para ver se ela vinha atrás." },
            { level: 1, text: "Eu nunca dei um beijo para esquecer outro." },
            { level: 1, text: "Eu nunca tive um 'namorado(a) imaginário' na adolescência." },
            { level: 1, text: "Eu nunca usei um perfume específico só para ser lembrado(a) por ele." },
            { level: 1, text: "Eu nunca pedi para um amigo(a) me ligar para sair de um encontro ruim." },
            { level: 1, text: "Eu nunca menti sobre meus hobbies para parecer mais interessante." },
            { level: 1, text: "Eu nunca fiquei com alguém em um transporte público." },
            { level: 1, text: "Eu nunca treinei um beijo no meu próprio braço ou no travesseiro." },
            { level: 1, text: "Eu nunca mandei flores para mim mesmo(a) para fazer ciúmes." },

            // Médio (40)
            { level: 2, text: "Eu nunca tirei a peça íntima por baixo da roupa em um lugar público." },
            { level: 2, text: "Eu nunca fiz sexo em um carro." },
            { level: 2, text: "Eu nunca fui pego(a) no flagra por algum familiar." },
            { level: 2, text: "Eu nunca fiz um strip-tease para alguém." },
            { level: 2, text: "Eu nunca fiz sexo em uma praia ou piscina." },
            { level: 2, text: "Eu nunca usei algemas ou algum tipo de amarração leve." },
            { level: 2, text: "Eu nunca transei em um cinema." },
            { level: 2, text: "Eu nunca tive um 'remember' com um ex por carência." },
            { level: 2, text: "Eu nunca usei comida durante o ato sexual." },
            { level: 2, text: "Eu nunca tive um orgasmo fingido." },
            { level: 2, text: "Eu nunca transei com as luzes acesas e um espelho na frente." },
            { level: 2, text: "Eu nunca fiz sexo matinal e cheguei atrasado(a) no trabalho." },
            { level: 2, text: "Eu nunca tive um 'one night stand' (ficar com alguém por uma noite)." },
            { level: 2, text: "Eu nunca beijei alguém do mesmo sexo." },
            { level: 2, text: "Eu nunca usei um vibrador enquanto estava com outra pessoa." },
            { level: 2, text: "Eu nunca transei em um lugar onde corria o risco de ser visto(a)." },
            { level: 2, text: "Eu nunca comprei algo em um sex shop." },
            { level: 2, text: "Eu nunca li contos eróticos para me inspirar." },
            { level: 2, text: "Eu nunca gravei apenas o áudio de uma transa para ouvir depois." },
            { level: 2, text: "Eu nunca fiz sexo em uma escada de prédio." },
            { level: 2, text: "Eu nunca transei em uma barraca de acampamento." },
            { level: 2, text: "Eu nunca fiz um 'topless' fora do meu quarto." },
            { level: 2, text: "Eu nunca usei gelo de forma estratégica nas preliminares." },
            { level: 2, text: "Eu nunca tive que inventar desculpa para esconder um chupão." },
            { level: 2, text: "Eu nunca flertei por texto durante um jantar de família." },
            { level: 2, text: "Eu nunca usei um brinquedo por controle remoto em público." },
            { level: 2, text: "Eu nunca beijei alguém enquanto outra pessoa assistia." },
            { level: 2, text: "Eu nunca fiz sexo em um provador de loja." },
            { level: 2, text: "Eu nunca sonhei acordado(a) com algo que fizemos na noite anterior." },
            { level: 2, text: "Eu nunca mandei um nude que hoje eu me arrependo." },
            { level: 2, text: "Eu nunca usei fantasias (policial, enfermeira, etc)." },
            { level: 2, text: "Eu nunca tomei banho com alguém e fiz mais do que só me lavar." },
            { level: 2, text: "Eu nunca fiz sexo em um banheiro de festa." },
            { level: 2, text: "Eu nunca usei lubrificantes que esquentam ou esfriam." },
            { level: 2, text: "Eu nunca tive um sonho erótico com alguém que está nesta sala." },
            { level: 2, text: "Eu nunca fiz sexo por vídeo/chamada." },
            { level: 2, text: "Eu nunca dei um beijo triplo." },
            { level: 2, text: "Eu nunca recebi um nude indesejado." },
            { level: 2, text: "Eu nunca dei um beijo técnico fingindo sentimento." },
            { level: 2, text: "Eu nunca me senti excitado(a) apenas com um sussurro." },

            // Pesado (30)
            { level: 3, text: "Eu nunca fiz sexo anal." },
            { level: 3, text: "Eu nunca participei de uma festa liberal ou swing." },
            { level: 3, text: "Eu nunca tive vontade de fazer um ménage." },
            { level: 3, text: "Eu nunca fiz sexo com mais de duas pessoas ao mesmo tempo." },
            { level: 3, text: "Eu nunca tive uma fantasia que ainda tenho vergonha de contar." },
            { level: 3, text: "Eu nunca pratiquei BDSM de forma mais séria." },
            { level: 3, text: "Eu nunca transei no local de trabalho." },
            { level: 3, text: "Eu nunca fiz 'roleplay' de desconhecidos com meu parceiro." },
            { level: 3, text: "Eu nunca tive um orgasmo múltiplo." },
            { level: 3, text: "Eu nunca deixei uma marca de propósito no outro." },
            { level: 3, text: "Eu nunca transei com outras pessoas no mesmo ambiente (mesmo sem ver)." },
            { level: 3, text: "Eu nunca usei plug anal." },
            { level: 3, text: "Eu nunca fiz um 'fio terra'." },
            { level: 3, text: "Eu nunca tive vontade de ser dominado(a) completamente." },
            { level: 3, text: "Eu nunca engoli (beba se você gosta/faz)." },
            { level: 3, text: "Eu nunca fiz sexo em um avião ou ônibus." },
            { level: 3, text: "Eu nunca pedi para alguém me bater ou xingar na cama." },
            { level: 3, text: "Eu nunca fiz 'squirt'." },
            { level: 3, text: "Eu nunca tive um fetiche por pés." },
            { level: 3, text: "Eu nunca transei assistindo a um filme pornô." },
            { level: 3, text: "Eu nunca usei acessórios de couro ou látex." },
            { level: 3, text: "Eu nunca fiz sexo ouvindo a minha própria voz." },
            { level: 3, text: "Eu nunca tive vontade de ser filmado(a) sem mostrar o rosto." },
            { level: 3, text: "Eu nunca pratiquei 'edging' (levar ao limite e parar)." },
            { level: 3, text: "Eu nunca fiz sexo em um local religioso ou perto de um." },
            { level: 3, text: "Eu nunca usei vendas e amarras ao mesmo tempo." },
            { level: 3, text: "Eu nunca transei em uma varanda ou sacada." },
            { level: 3, text: "Eu nunca pedi para o parceiro usar algo que ele não queria muito." },
            { level: 3, text: "Eu nunca transei pensando em outra pessoa." },
            { level: 3, text: "Eu nunca fiz 'body painting' com chocolate ou caldas." }
        ];

        this.euNuncaState = {
            round: 0,
            usedIndices: new Set()
        };
        this.esquentaDeck = [
            { type: 'verdade', text: 'Em que lugar inusitado você morre de vontade de transar?', color: 'green' },
            { type: 'verdade', text: 'Qual foi o momento em que você mais sentiu tesão por mim em público e não pôde fazer nada?', color: 'green' },
            { type: 'verdade', text: 'Qual é a sua lingerie ou cueca minha favorita?', color: 'green' },
            { type: 'verdade', text: 'Qual parte do meu corpo te deixa mais excitado(a) quando eu toco?', color: 'green' },
            { type: 'verdade', text: 'Você prefere com a luz acesa, apagada ou meia-luz? Por quê?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a vez em que fizemos amor que você mais gostou até hoje?', color: 'green' },
            { type: 'verdade', text: 'Qual mensagem de texto mais quente você já quis me mandar, mas apagou antes?', color: 'green' },
            { type: 'verdade', text: 'Você já teve algum sonho erótico comigo? Como foi?', color: 'green' },
            { type: 'verdade', text: 'O que eu faço na cama que te leva à loucura?', color: 'green' },
            { type: 'verdade', text: 'Qual é o seu "guilty pleasure" (prazer culposo) quando o assunto é sexo?', color: 'green' },
            { type: 'verdade', text: 'Se fôssemos usar um brinquedo novo hoje, qual você escolheria?', color: 'green' },
            { type: 'verdade', text: 'Você gosta que eu fale besteiras no seu ouvido?', color: 'green' },
            { type: 'verdade', text: 'Qual é a sua posição favorita e por que ela te dá tanto prazer?', color: 'green' },
            { type: 'verdade', text: 'Você prefere preliminares longas ou ir direto ao ponto de forma selvagem?', color: 'green' },
            { type: 'verdade', text: 'Já se masturbou pensando em algo que fizemos na noite anterior?', color: 'green' },
            { type: 'verdade', text: 'O que você acha de gravarmos um vídeo nosso?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a coisa mais ousada que você já fez por desejo?', color: 'green' },
            { type: 'verdade', text: 'Você gosta quando eu tomo a iniciativa?', color: 'green' },
            { type: 'verdade', text: 'Qual roupa do meu dia a dia te deixa com mais vontade de me arrastar para a cama?', color: 'green' },
            { type: 'verdade', text: 'Você já fingiu que estava dormindo só para ver se eu te provocava?', color: 'green' },
            { type: 'verdade', text: 'Se você pudesse me vendar agora, o que faria comigo?', color: 'green' },
            { type: 'verdade', text: 'Qual é o seu tipo de beijo favorito?', color: 'green' },
            { type: 'verdade', text: 'Você gosta de morder ou ser mordido(a)?', color: 'green' },
            { type: 'verdade', text: 'Se tivéssemos que transar em um cômodo da casa que não seja o quarto, qual seria?', color: 'green' },
            { type: 'verdade', text: 'Qual é a sua opinião sobre usar gelo ou algo quente na hora H?', color: 'green' },
            { type: 'verdade', text: 'O que você faria se eu te acordasse no meio da madrugada com carícias?', color: 'green' },
            { type: 'verdade', text: 'Qual palavra ou frase te excita instantaneamente?', color: 'green' },
            { type: 'verdade', text: 'Você já me imaginou com outra pessoa junto com a gente?', color: 'green' },
            { type: 'verdade', text: 'Qual é a provocação que eu faço e que você não consegue resistir?', color: 'green' },
            { type: 'verdade', text: 'Se o sexo de hoje tivesse um tema, qual seria?', color: 'green' },
            { type: 'verdade', text: 'Você prefere dominar ou ser dominado(a)?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a sua primeira impressão sobre a nossa química sexual?', color: 'green' },
            { type: 'verdade', text: 'Tem alguma coisa que você tem vergonha de me pedir na cama?', color: 'green' },
            { type: 'verdade', text: 'Se você pudesse controlar meu corpo por 10 minutos, o que me faria fazer?', color: 'green' },
            { type: 'verdade', text: 'Qual é a zona erógena do seu corpo que eu menos exploro e deveria explorar mais?', color: 'green' },
            { type: 'verdade', text: 'Você gosta de arranhões ou prefere carícias suaves?', color: 'green' },
            { type: 'verdade', text: 'O que você acha de sexo matinal?', color: 'green' },
            { type: 'verdade', text: 'Qual filme ou cena de série te deixou com vontade de pular em cima de mim?', color: 'green' },
            { type: 'verdade', text: 'Você prefere focar no seu prazer primeiro ou no meu?', color: 'green' },
            { type: 'verdade', text: 'Qual é o seu maior "turn-on" (aquilo que te excita de imediato)?', color: 'green' },
            { type: 'verdade', text: 'E o seu maior "turn-off" (aquilo que corta o clima)?', color: 'green' },
            { type: 'verdade', text: 'Você já mandou ou quis mandar nudes para mim no meio do seu expediente?', color: 'green' },
            { type: 'verdade', text: 'Qual música te deixa com vontade de tirar a roupa?', color: 'green' },
            { type: 'verdade', text: 'Se fôssemos a um motel hoje, qual suíte escolheria (temática, com piscina, algemas)?', color: 'green' },
            { type: 'verdade', text: 'Você gosta de contato visual durante o orgasmo?', color: 'green' },
            { type: 'verdade', text: 'O que você acha de roleplay (interpretar personagens)?', color: 'green' },
            { type: 'verdade', text: 'Qual foi a coisa mais gostosa que eu sussurrei no seu ouvido?', color: 'green' },
            { type: 'verdade', text: 'Se você tivesse que descrever nossa vida sexual em uma palavra, qual seria?', color: 'green' },
            { type: 'verdade', text: 'Qual é a próxima coisa que você quer que eu faça com você depois que esse jogo acabar?', color: 'green' },

            // --- Desafio (50 cartas) ---
            { type: 'desafio', text: 'Dê um beijo de cinema em mim, com direito a puxão de cabelo no final.', color: 'red' },
            { type: 'desafio', text: 'Tire uma peça da minha roupa usando apenas os dentes.', color: 'red' },
            { type: 'desafio', text: 'Faça uma massagem nas minhas costas por 2 minutos.', color: 'red' },
            { type: 'desafio', text: 'Vende os meus olhos e use algo para provocar meu pescoço.', color: 'red' },
            { type: 'desafio', text: 'Chupe o meu dedo de forma provocante enquanto mantém contato visual.', color: 'red' },
            { type: 'desafio', text: 'Sussurre a coisa mais suja que vier à sua cabeça no meu ouvido.', color: 'red' },
            { type: 'desafio', text: 'Beije o meu pescoço até me arrepiar.', color: 'red' },
            { type: 'desafio', text: 'Finja que somos estranhos em um bar e me "cante".', color: 'red' },
            { type: 'desafio', text: 'Tire a sua blusa/camisa e jogue o resto do jogo assim.', color: 'red' },
            { type: 'desafio', text: 'Faça um striptease de 1 minuto ao som da música que eu escolher.', color: 'red' },
            { type: 'desafio', text: 'Chupe uma pedra de gelo e depois beije meu corpo.', color: 'red' },
            { type: 'desafio', text: 'Deslize a mão por dentro da minha roupa por 30 segundos.', color: 'red' },
            { type: 'desafio', text: 'Dê três chupões ou mordidas leves na minha coxa.', color: 'red' },
            { type: 'desafio', text: 'Fique no meu colo até a sua próxima vez de jogar.', color: 'red' },
            { type: 'desafio', text: 'Beije cada centímetro do meu rosto, terminando com um beijo molhado na boca.', color: 'red' },
            { type: 'desafio', text: 'Simule a sua posição favorita em mim com as roupas que estamos usando.', color: 'red' },
            { type: 'desafio', text: 'Provoque minha orelha apenas com a respiração e a ponta da língua.', color: 'red' },
            { type: 'desafio', text: 'Mande uma mensagem picante para mim agora, mesmo estando na minha frente.', color: 'red' },
            { type: 'desafio', text: 'Fique de olhos fechados na próxima rodada enquanto eu faço carinho em você.', color: 'red' },
            { type: 'desafio', text: 'Passe a língua nos meus lábios sem me deixar te beijar.', color: 'red' },
            { type: 'desafio', text: 'Dance no meu colo por uma música inteira.', color: 'red' },
            { type: 'desafio', text: 'Prove um pouco da bebida que estamos tomando direto da minha boca.', color: 'red' },
            { type: 'desafio', text: 'Dê tapinhas de leve no meu bumbum.', color: 'red' },
            { type: 'desafio', text: 'Deite-se e deixe eu beijar a sua barriga.', color: 'red' },
            { type: 'desafio', text: 'Mostre como você geme quando está chegando lá.', color: 'red' },
            { type: 'desafio', text: 'Tire as minhas meias usando apenas as mãos amarradas ou para trás.', color: 'red' },
            { type: 'desafio', text: 'Beije a minha nuca e passe as mãos pelo meu peito/seios.', color: 'red' },
            { type: 'desafio', text: 'Desabotoe ou abra o zíper da minha calça/short.', color: 'red' },
            { type: 'desafio', text: 'Fique a 1 centímetro da minha boca por 30 segundos sem encostar.', color: 'red' },
            { type: 'desafio', text: 'Faça carinho na minha virilha por cima da roupa.', color: 'red' },
            { type: 'desafio', text: 'Use a sua bebida para molhar meus lábios e lamba depois.', color: 'red' },
            { type: 'desafio', text: 'Sente-se ao meu lado e deixe nossas pernas entrelaçadas pelo resto do jogo.', color: 'red' },
            { type: 'desafio', text: 'Pegue a minha mão e coloque onde você mais quer que eu toque agora.', color: 'red' },
            { type: 'desafio', text: 'Dê um beijo que comece no ombro e termine atrás da orelha.', color: 'red' },
            { type: 'desafio', text: 'Provoque meu corpo usando apenas as pontas dos dedos por 1 minuto.', color: 'red' },
            { type: 'desafio', text: 'Tire a sua própria roupa íntima discretamente e guarde no bolso.', color: 'red' },
            { type: 'desafio', text: 'Morda os lábios sensualmente enquanto me encara de cima a baixo.', color: 'red' },
            { type: 'desafio', text: 'Deite sobre mim e sinta nossos corações batendo juntos por 1 minuto.', color: 'red' },
            { type: 'desafio', text: 'Lamba uma gota de bebida do meu pescoço.', color: 'red' },
            { type: 'desafio', text: 'Acaricie meu cabelo enquanto diz o quanto me quer.', color: 'red' },
            { type: 'desafio', text: 'Levante a minha blusa e deixe um beijo demorado.', color: 'red' },
            { type: 'desafio', text: 'Tire os meus sapatos e massageie meus pés.', color: 'red' },
            { type: 'desafio', text: 'Faça uma trilha de beijos do meu umbigo até o limite da minha calça/calcinha.', color: 'red' },
            { type: 'desafio', text: 'Passe um pouco da sua bebida nos dedos e faça eu chupar.', color: 'red' },
            { type: 'desafio', text: 'Use o meu pescoço como travesseiro e respire fundo.', color: 'red' },
            { type: 'desafio', text: 'Tire a peça de roupa que mais está te atrapalhando agora.', color: 'red' },
            { type: 'desafio', text: 'Beije a palma da minha mão e cada um dos meus dedos.', color: 'red' },
            { type: 'desafio', text: 'Fale com um sotaque estrangeiro e tente me seduzir.', color: 'red' },
            { type: 'desafio', text: 'Abrace-me por trás e aperte meu corpo contra o seu.', color: 'red' },
            { type: 'desafio', text: 'Escolha um lugar do meu corpo (abaixo do pescoço) e deixe uma marca de beijo.', color: 'red' },

            // --- Bônus (50 cartas) ---
            { type: 'bonus', text: 'Beba se... você já acordou no meio da noite com vontade de transar.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você está sem calcinha/cueca agora.', color: 'blue' },
            { type: 'bonus', text: 'Vale Imunidade: Use esta carta para pular um Desafio que não queira fazer.', color: 'blue' },
            { type: 'bonus', text: 'Dose Dupla: Na próxima rodada, seu parceiro(a) tira duas cartas.', color: 'blue' },
            { type: 'bonus', text: 'Inversão: Devolva a última pergunta de Verdade para o seu parceiro(a) responder.', color: 'blue' },
            { type: 'bonus', text: 'Mestre do Gelo: Coloque um gelo na boca e passe para o parceiro(a) até derreter. Se cair, bebem.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Massagem: Guarde esta carta para cobrar uma massagem completa após o jogo.', color: 'blue' },
            { type: 'bonus', text: 'O Chefe: Pelas próximas 3 rodadas, você dita o ritmo (pode mandar o outro beber ou tirar roupa).', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já pensou em mim hoje no meio do trabalho.', color: 'blue' },
            { type: 'bonus', text: 'Roleta Russa: Bebam os dois uma dose; o último a virar o copo tira uma peça de roupa.', color: 'blue' },
            { type: 'bonus', text: 'Apagão: A próxima rodada inteira deve ser jogada no escuro ou de olhos fechados.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Posição: Guarde esta carta para escolher a primeira posição de hoje mais tarde.', color: 'blue' },
            { type: 'bonus', text: 'Vire a Dose: Aquele que estiver com mais roupas no corpo vira a bebida.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já flertou comigo para conseguir algo.', color: 'blue' },
            { type: 'bonus', text: 'Troca de Roupas: Troque de blusa com seu parceiro(a).', color: 'blue' },
            { type: 'bonus', text: 'Verdade à Força: Use esta carta para obrigar o parceiro(a) a responder qualquer pergunta sua (sem opções do jogo).', color: 'blue' },
            { type: 'bonus', text: 'Sem Mãos: A partir de agora, o parceiro(a) que tirou a carta não pode usar as mãos até a próxima rodada.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Striptease: Entregue esta carta e o seu parceiro(a) deve tirar uma peça de roupa lentamente.', color: 'blue' },
            { type: 'bonus', text: 'Contato Fixo: Vocês devem manter uma parte do corpo encostada na do outro pelo resto do jogo.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já teve um orgasmo múltiplo comigo.', color: 'blue' },
            { type: 'bonus', text: 'Voto de Silêncio: O parceiro(a) que tirou a carta não pode falar até sua próxima vez. Se falar, bebe.', color: 'blue' },
            { type: 'bonus', text: 'Desafio Duplo: Os dois devem cumprir o mesmo desafio físico da última carta de Desafio.', color: 'blue' },
            { type: 'bonus', text: 'Brinde aos Amantes: Façam um brinde olhando nos olhos, entrelacem os braços e bebam.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Oral: Guarde esta carta para resgatar na hora H.', color: 'blue' },
            { type: 'bonus', text: 'Refresco: Beba duas doses e ganhe o direito de colocar a mão dentro da roupa do parceiro(a).', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você for o mais ciumento(a) da relação.', color: 'blue' },
            { type: 'bonus', text: 'Troca-Troca: Troquem de lugares na mesa/sofá/cama. O último a sentar bebe.', color: 'blue' },
            { type: 'bonus', text: 'Vale "Não": Cancele qualquer carta de Verdade ou Desafio sua no futuro.', color: 'blue' },
            { type: 'bonus', text: 'Sem Piscar: O primeiro a piscar tira uma peça de roupa.', color: 'blue' },
            { type: 'bonus', text: 'Escravos de Jó: Passem um gole de bebida de boca em boca. Quem engolir primeiro perde e tira uma roupa.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já quis me agarrar no trânsito.', color: 'blue' },
            { type: 'bonus', text: 'Direto do Corpo: Sirva um pouco de bebida no pescoço ou barriga do parceiro(a) e beba.', color: 'blue' },
            { type: 'bonus', text: 'Aposta: Joguem pedra, papel e tesoura. Quem perder bebe e ganha um chupão.', color: 'blue' },
            { type: 'bonus', text: 'O Som do Desejo: Coloque a playlist mais sexy que vocês têm para tocar agora.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você prefere transar de manhã. O outro bebe se preferir à noite.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Dominador: Guarde esta carta para amarrar/vendar o parceiro(a) mais tarde.', color: 'blue' },
            { type: 'bonus', text: 'Pausa para o Beijo: O jogo pausa por 2 minutos exclusivamente para vocês se beijarem intensamente.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você mandaria uma foto provocante agora mesmo. E mande!', color: 'blue' },
            { type: 'bonus', text: 'Fogo no Parquinho: O parceiro escolhe qual peça de roupa sua você deve tirar agora.', color: 'blue' },
            { type: 'bonus', text: 'Tiro no Escuro: Feche os olhos, aponte para um lugar do corpo do parceiro e ele(a) deve te beijar ali.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você acha que temos a melhor química da sua vida.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Fantasia: O parceiro(a) que tirar essa carta escolhe uma fantasia para o outro realizar hoje.', color: 'blue' },
            { type: 'bonus', text: 'Conexão: Bebam de braços dados (estilo casamento) e finalizem com um selinho.', color: 'blue' },
            { type: 'bonus', text: 'Eu Nunca: Faça um "Eu nunca" picante. Se o parceiro já fez, ele bebe.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você é o mais barulhento(a) na cama.', color: 'blue' },
            { type: 'bonus', text: 'Cartão Vermelho: Pule a vez do seu parceiro(a) e faça ele(a) beber por você.', color: 'blue' },
            { type: 'bonus', text: 'Toque Cego: De olhos fechados, adivinhe qual parte do seu corpo o parceiro está tocando. Se errar, bebe.', color: 'blue' },
            { type: 'bonus', text: 'Revanche: Faça o parceiro(a) cumprir o desafio que ele te deu três rodadas atrás.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já está levemente alterado(a) (e com muito calor).', color: 'blue' },
            { type: 'bonus', text: 'Game Over: O jogo acaba aqui. Peguem as bebidas e vão direto para o quarto (ou onde preferirem)!', color: 'blue' }
        ];

        this.eclipsePenumbraDeck = [
            // --- Verdade ---
            { type: 'verdade', text: 'Qual é a lição mais valiosa que você aprendeu com um erro nosso no passado?', color: 'green' },
            { type: 'verdade', text: 'Se você pudesse mudar de carreira amanhã, o que você faria e como eu poderia te apoiar?', color: 'green' },
            { type: 'verdade', text: 'Qual é o medo que você tem e que raramente confessa para alguém?', color: 'green' },
            { type: 'verdade', text: 'Existe algum lugar no mundo que você sente que "pertence", mesmo sem nunca ter ido lá?', color: 'green' },
            { type: 'verdade', text: 'O que você acha que é a coisa mais difícil de se entender sobre a sua personalidade?', color: 'green' },
            { type: 'verdade', text: 'Qual foi o momento em que você sentiu mais orgulho de mim?', color: 'green' },
            { type: 'verdade', text: 'Se você pudesse fazer uma pergunta ao "eu" do futuro sobre nós, o que perguntaria?', color: 'green' },
            { type: 'verdade', text: 'Qual é a pequena coisa que eu faço que faz você se sentir em casa?', color: 'green' },
            { type: 'verdade', text: 'Qual hobby ou interesse meu você passou a gostar só por causa da nossa convivência?', color: 'green' },
            { type: 'verdade', text: 'Se tivéssemos que viver em uma casa minúscula (tiny house) por um ano, o que você mais sentiria falta e o que mais gostaria?', color: 'green' },
            { type: 'verdade', text: 'Qual é a sua memória favorita de uma viagem ou passeio simples que fizemos?', color: 'green' },
            { type: 'verdade', text: 'O que você gostaria que fizéssemos mais vezes juntos durante a semana?', color: 'green' },
            { type: 'verdade', text: 'Qual é a diferença entre nós que você acha que mais equilibra a nossa relação?', color: 'green' },
            { type: 'verdade', text: 'Se você pudesse escolher um "superpoder" para eu ter, qual seria e por quê?', color: 'green' },
            { type: 'verdade', text: 'Qual conselho sobre amor você daria para o seu eu de 15 anos atrás?', color: 'green' },
            { type: 'verdade', text: 'Qual é o projeto de vida que você mais tem medo de não realizar?', color: 'green' },
            { type: 'verdade', text: 'O que você mais valoriza na nossa amizade, além do nosso romance?', color: 'green' },
            { type: 'verdade', text: 'Existe algum sonho recorrente ou pensamento que você tem quando acorda e me vê ao lado?', color: 'green' },
            { type: 'verdade', text: 'Qual é a música que define a fase que estamos vivendo agora?', color: 'green' },
            { type: 'verdade', text: 'Se fôssemos abrir um negócio juntos, o que seria?', color: 'green' },
            { type: 'verdade', text: 'Qual é o seu maior "oásis" mental quando o mundo lá fora está um caos?', color: 'green' },
            { type: 'verdade', text: 'O que você mais gosta na minha família ou no meu círculo de amigos?', color: 'green' },
            { type: 'verdade', text: 'Como você descreveria a nossa conexão para um estranho em apenas uma frase?', color: 'green' },
            { type: 'verdade', text: 'Qual é a pergunta que você gostaria que eu te fizesse com mais frequência?', color: 'green' },
            { type: 'verdade', text: 'Se pudéssemos parar o tempo por 24 horas para fazer qualquer coisa (sem cansaço), o que faríamos?', color: 'green' },

            // --- Desafio ---
            { type: 'desafio', text: 'Feche os olhos e tente descrever exatamente a roupa que eu estou usando agora, nos mínimos detalhes.', color: 'red' },
            { type: 'desafio', text: 'Escolha um objeto na sala e conte uma história fictícia de como ele representa nossa união.', color: 'red' },
            { type: 'desafio', text: 'Faça uma lista de 3 músicas que você quer que toquem no nosso próximo momento especial.', color: 'red' },
            { type: 'desafio', text: 'Desenhe algo na palma da minha mão e eu tenho que adivinhar o que é de olhos fechados.', color: 'red' },
            { type: 'desafio', text: 'Diga algo que você aprendeu sobre si mesmo(a) graças ao nosso relacionamento.', color: 'red' },
            { type: 'desafio', text: 'Escreva no meu braço, usando apenas o dedo, uma palavra que defina seu sentimento agora.', color: 'red' },
            { type: 'desafio', text: 'Conte um segredo bobo da sua infância que você tem vergonha, mas que é engraçado.', color: 'red' },
            { type: 'desafio', text: 'Olhe-se no espelho comigo e diga uma coisa que você ama em nós como casal.', color: 'red' },
            { type: 'desafio', text: 'Faça uma playlist mental para mim agora e diga qual seria a primeira música.', color: 'red' },
            { type: 'desafio', text: 'Dê um beijo em cada uma das minhas mãos e faça um agradecimento por algo que eu fiz hoje.', color: 'red' },
            { type: 'desafio', text: 'Tente me fazer rir em menos de 30 segundos usando apenas expressões faciais.', color: 'red' },
            { type: 'desafio', text: 'Descreva como seria a nossa casa dos sonhos se pudéssemos construí-la hoje.', color: 'red' },
            { type: 'desafio', text: 'Reencontre uma foto nossa de mais de um ano atrás e conte o que você estava sentindo naquele dia.', color: 'red' },
            { type: 'desafio', text: 'Fique abraçado(a) comigo em silêncio por duas rodadas completas.', color: 'red' },
            { type: 'desafio', text: 'Diga qual é a característica física minha que você acha mais "acolhedora".', color: 'red' },
            { type: 'desafio', text: 'Conte um plano de "aventura" (como um acampamento ou trilha) que você quer fazer comigo.', color: 'red' },
            { type: 'desafio', text: 'Faça um elogio a uma conquista minha que você acompanhou de perto.', color: 'red' },
            { type: 'desafio', text: 'Mostre-me um vídeo ou meme que sempre te faz rir e explique o porquê.', color: 'red' },
            { type: 'desafio', text: 'Invente um aperto de mão secreto só para nós dois.', color: 'red' },
            { type: 'desafio', text: 'Me conte sobre uma pessoa que te inspirou a ser quem você é hoje.', color: 'red' },
            { type: 'desafio', text: 'Dê um "abraço de urso" em mim por 20 segundos cronometrados.', color: 'red' },
            { type: 'desafio', text: 'Escolha um livro ou filme e diga qual personagem eu seria e por quê.', color: 'red' },
            { type: 'desafio', text: 'Fale sobre um lugar que você quer me levar para conhecer pela primeira vez.', color: 'red' },
            { type: 'desafio', text: 'Tente adivinhar qual é o meu maior desejo para a próxima semana.', color: 'red' },
            { type: 'desafio', text: 'Faça um carinho no meu rosto enquanto diz o que mais te acalma na minha voz.', color: 'red' },
            { type: 'desafio', text: 'Descreva o aroma que você associa a mim (além de perfume).', color: 'red' },
            { type: 'desafio', text: 'Diga três coisas que você quer que a gente faça juntos antes de o ano acabar.', color: 'red' },
            { type: 'desafio', text: 'Escreva uma pequena nota de gratidão no guardanapo ou papel e me entregue.', color: 'red' },
            { type: 'desafio', text: 'Faça uma massagem rápida nos meus ombros para tirar a tensão do dia.', color: 'red' },
            { type: 'desafio', text: 'Conte-me sobre um momento em que você sentiu muita saudade de mim, mesmo estando longe por pouco tempo.', color: 'red' },
            { type: 'desafio', text: 'Me imite pedindo um favor de um jeito que você acha engraçado.', color: 'red' },
            { type: 'desafio', text: 'Diga qual é o seu talento "escondido" que você raramente pratica.', color: 'red' },
            { type: 'desafio', text: 'Olhe para mim e tente não sorrir enquanto eu tento te fazer sorrir.', color: 'red' },
            { type: 'desafio', text: 'Compartilhe um pensamento positivo que você teve sobre nós hoje cedo.', color: 'red' },
            { type: 'desafio', text: 'Escolha uma palavra que será nossa "palavra de ordem" para quando precisarmos de um tempo só nosso.', color: 'red' },

            // --- Bônus ---
            { type: 'bonus', text: 'Beba se... você já sorriu para o celular lendo uma mensagem minha hoje.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você guardou algum objeto que te lembra de nós.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Café na Cama: Guarde esta carta para ganhar um café da manhã especial no fim de semana.', color: 'blue' },
            { type: 'bonus', text: 'Troca de Perspectiva: Responda a próxima pergunta de Verdade como se fosse o seu parceiro.', color: 'blue' },
            { type: 'bonus', text: 'Mestre do Tempo: Você pode pular uma pergunta se prometer respondê-la em um jantar futuro.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Elogio: O parceiro deve escrever 3 qualidades suas em um post-it e colar em algum lugar visível.', color: 'blue' },
            { type: 'bonus', text: 'Momento Nostalgia: Parem o jogo para ver 5 fotos aleatórias da galeria do celular um do outro.', color: 'blue' },
            { type: 'bonus', text: 'Ouvinte Atento: Pelas próximas 2 rodadas, você não pode interromper o parceiro por nada.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você já planejou o futuro com a gente na sua cabeça.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Escolha de Filme: Você tem o poder de escolher o próximo filme que assistiremos sem reclamações.', color: 'blue' },
            { type: 'bonus', text: 'Conexão Visual: Durante toda a próxima rodada, vocês devem manter as mãos dadas.', color: 'blue' },
            { type: 'bonus', text: 'Sintonia Musical: Escolha uma música para ser o fundo musical das próximas 5 cartas.', color: 'blue' },
            { type: 'bonus', text: 'Beba se... você se sente mais seguro(a) hoje do que quando começamos.', color: 'blue' },
            { type: 'bonus', text: 'Vale-Massagem nos Pés: Resgate este cartão para uma massagem relaxante após o jogo.', color: 'blue' }
        ];

        this.binaryWishesDeck = [
            // --- Dominação e Controle ---
            { category: 'Dominação', text: 'Você aceitaria passar 24 horas sob meu controle total, obedecendo a ordens sem questionar?' },
            { category: 'Dominação', text: 'Toparia ser amarrado(a) e vendado(a) hoje, deixando que eu decida onde e como te tocar?' },
            { category: 'Dominação', text: 'Usaria uma palavra de segurança para explorarmos nossos limites de dominação hoje à noite?' },
            { category: 'Dominação', text: 'Você me entregaria o controle de um acessório vibratório enquanto estamos fora de casa?' },
            { category: 'Dominação', text: 'Aceitaria ser "punido(a)" com palmadas ou restrições leves se desobedecer a uma regra minha?' },
            { category: 'Dominação', text: 'Toparia um cenário onde um de nós finge ser um completo estranho que te "seduz" à força em casa?' },

            // --- Sensorial e Impacto ---
            { category: 'Sensorial', text: 'Você gostaria de experimentar o impacto de gotas de cera morna de vela erótica na pele?' },
            { category: 'Sensorial', text: 'Toparia usar gelo nas minhas zonas erógenas enquanto você me leva ao limite?' },
            { category: 'Sensorial', text: 'Você aceitaria uma massagem tântrica usando apenas o meu corpo e óleo aquecido?' },
            { category: 'Sensorial', text: 'Gostaria de sentir o contraste entre uma textura de metal frio e o calor do meu hálito?' },
            { category: 'Sensorial', text: 'Você toparia ficar 15 minutos sem poder me tocar enquanto eu faço o que quiser com você?' },
            { category: 'Sensorial', text: 'Aceitaria ser provado(a) às cegas, tentando adivinhar quais alimentos ou texturas estou usando em você?' },

            // --- Roleplay e Cenários ---
            { category: 'Roleplay', text: 'Você toparia fingir que somos desconhecidos em um bar e me ver te "convencendo" a ir para um hotel?' },
            { category: 'Roleplay', text: 'Aceitaria fazer um vídeo íntimo hoje, com a condição de assistirmos e deletarmos (ou guardarmos) depois?' },
            { category: 'Roleplay', text: 'Você teria coragem de iniciar algo ousado em um local público onde corremos o risco de ser vistos?' },
            { category: 'Roleplay', text: 'Toparia um cenário de "entrevista de emprego", onde você precisa ser muito persuasivo(a) para conseguir a vaga?' },
            { category: 'Roleplay', text: 'Você usaria uma lingerie ou peça de roupa que eu escolhesse, mesmo que fosse algo que você nunca usou?' },

            // --- Atos e Explorações ---
            { category: 'Físico', text: 'Você toparia focar exclusivamente no meu prazer oral hoje, sem que eu retribua até o final?' },
            { category: 'Físico', text: 'Aceitaria experimentar uma posição do Kamasutra que pareça "impossível" ou muito acrobática?' },
            { category: 'Físico', text: 'Você gostaria de praticar o "edging" (chegar ao limite e parar) várias vezes antes de eu te deixar chegar lá?' },
            { category: 'Físico', text: 'Toparia usar um brinquedo novo ou acessório que nunca testamos antes?' },
            { category: 'Físico', text: 'Você aceitaria que eu usasse o "dirty talk" de forma muito mais agressiva e explícita hoje?' },
            { category: 'Físico', text: 'Toparia fazer sexo na frente de um espelho grande para que possamos ver cada detalhe?' },

            // --- Desejos Ocultos ---
            { category: 'Oculto', text: 'Você aceitaria que eu te acordasse no meio da noite para começarmos algo intenso de imediato?' },
            { category: 'Oculto', text: 'Toparia compartilhar comigo sua fantasia mais "suja" que você nunca teve coragem de contar?' },
            { category: 'Oculto', text: 'Você aceitaria ser filmado(a) ou fotografado(a) em poses que só eu poderei ver?' },
            { category: 'Oculto', text: 'Toparia trocar as luzes por uma iluminação vermelha ou neon para mudar completamente o clima?' },
            { category: 'Oculto', text: 'Você aceitaria que eu convidasse uma "terceira pessoa" (apenas na nossa imaginação e conversa) para o quarto?' },
            { category: 'Oculto', text: 'Toparia passar o dia todo sem roupa de baixo, sabendo que eu sei disso o tempo todo?' },
            { category: 'Oculto', text: 'Você aceitaria que o ato final hoje fosse em um cômodo da casa onde nunca fizemos antes?' }
        ];

        // Estado do jogo Binário
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
                actions: ['Beijo de esquimó', 'Sopro de leve', 'Carícia com as unhas', 'Beijo suave', 'Massagem', 'Mordida de leve', 'Trilha de beijos'],
                bodyParts: ['Ponta do nariz', 'Nuca', 'Braços', 'Pálpebras', 'Ombros', 'Lóbulo da orelha', 'Pescoço'],
                time: [15, 20, 45, 10, 60, 15, 30] // segundos
            },
            highHeat: {
                actions: ['Beijo molhado', 'Mordida provocante', 'Beijo com gelo', 'Massagem firme', 'Beijo de cinema', 'Marcar com beijo', 'Sussurrar desejo'],
                bodyParts: ['Atrás da orelha', 'Coxa interna', 'Barriga/Umbigo', 'Virilha (por cima da roupa)', 'Boca (língua)', 'Onde você escolher', 'No ouvido (bem perto)'],
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
            "Apenas carícias suaves com as pontas dos dedos no rosto e pescoço.",
            "Sinta a respiração um do outro bem de perto, mas ainda sem beijar na boca.",
            "Adicione beijos lentos e ternos, explorando apenas os lábios.",
            "Leves mordidas e beijos no lóbulo da orelha e no maxilar.",
            "Mãos permitidas apenas nas costas e ombros, massageando suavemente.",
            "Sussurre no ouvido do parceiro uma fantasia que você tem e quer realizar hoje.",
            "Mãos liberadas para qualquer lugar acima da cintura, explorando cada curva.",
            "Fechem os olhos e foquem apenas no tato, sentindo cada centímetro da pele exposta.",
            "Explore o pescoço do parceiro com beijos úmidos e leves chupões.",
            "Aumente a intensidade do beijo na boca, adicionando língua e paixão.",
            "Passe as unhas de leve pelos braços, pernas e costelas do outro, arrepiando a pele.",
            "Tirem uma peça de roupa de cada um (acessórios, calçados ou meias contam).",
            "Usem as mãos livremente para explorar todo o corpo, mas ainda sem tocar nas zonas íntimas diretas.",
            "O parceiro ativo deve morder suavemente o lábio inferior do outro, puxando levemente.",
            "Tirem mais uma peça de roupa, deixando mais pele à mostra.",
            "Provocação total: beijos úmidos e leves mordidas por todo o corpo, exceto nas zonas mais íntimas.",
            "Usem o corpo um do outro para criar fricção, esfregando-se, sem usar as mãos por 30 segundos.",
            "Comecem as preliminares com foco exclusivo na região do umbigo e da barriga (beijos, língua, carícias).",
            "A intensidade agora é máxima: mãos e bocas liberadas em **qualquer lugar**, exceto o ponto de não-retorno.",
            "Tirem a última peça de roupa que está impedindo o contato total da pele.",
            "Preliminares completas: Beijem e toquem-se como se fosse a última vez, levando ao limite.",
            "Sussurrem exatamente o que vocês querem fazer um com o outro AGORA.",
            "Liberação quase total: O parceiro ativo tem 1 minuto para levar o outro ao ápice sem chegar ao final.",
            "Liberação total: O tempo de provocar acabou! O prazer é o único guia agora."
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

        // Sorteio com controle de usados (específico para Eclipse Social por enquanto)
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
        // Resetar filtro se necessário
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

        // Filtrar candidatos disponíveis por nível
        const candidates = deck.map((card, index) => ({ ...card, index })).filter(c => !used.has(c.index));

        const candidatesL1 = candidates.filter(c => c.level === 1);
        const candidatesL2 = candidates.filter(c => c.level === 2);
        const candidatesL3 = candidates.filter(c => c.level === 3);

        // Se faltar carta do nível desejado, joga para o próximo disponível
        // Sorteio de nível alvo
        const r = Math.random();
        let targetLevel = 1;

        // Logica simples de roleta para escolher nível
        // Normalizar pesos se algum nível estiver vazio
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
        // W3 é o resto

        if (r < normalizedW1) targetLevel = 1;
        else if (r < normalizedW1 + normalizedW2) targetLevel = 2;
        else targetLevel = 3;

        // Selecionar array do nível sorteado
        let pool = [];
        if (targetLevel === 1) pool = candidatesL1;
        else if (targetLevel === 2) pool = candidatesL2;
        else pool = candidatesL3;

        // Se por arredondamento pool ficar vazio (raro com a normalização, mas seguro morrer velho)
        if (pool.length === 0) {
            pool = candidates; // Pega qualquer um
        }

        const chosenIndex = Math.floor(Math.random() * pool.length);
        const card = pool[chosenIndex];

        // Marcar como usado
        used.add(card.index);

        return card;
    }

    // --- Lógica Nosso Código (Mímicas) ---
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
            // Opcional: Avisar usuário
        }

        const available = deck.map((c, i) => ({ ...c, index: i })).filter(c => !used.has(c.index));

        if (available.length === 0) return null; // Segurança

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

    // --- Lógica Leilão de Intimidade ---
    initAuction() {
        this.auctionState = {
            saldoP1: 100,
            saldoP2: 100,
            inventoryP1: [],
            inventoryP2: [],
            lastGastoP1: 0,
            lastGastoP2: 0,
            currentItem: null,
            deck: [...this.auctionDeck], // Cópia para manipular
            message: "Façam seus lances!",
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

        if (isNaN(p1) || isNaN(p2)) return { success: false, msg: "Valores inválidos!" };
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
            resultMsg = `Empate em ${p1}! O item voltou para o leilão.`;
        }

        // Verifica fim de jogo por saldo (opcional, mas pedido: "jogo acaba quando um saldo chega a zero ou prêmios acabam")
        // Mas se saldo zero, o jogador ainda pode jogar se o outro tiver saldo? A regra diz "O jogo acaba quando um saldo chega a zero".
        if (state.saldoP1 <= 0 && state.saldoP2 <= 0) {
            state.gameOver = true;
        } else {
            this.drawAuctionItem(); // Próximo item
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
                state.message += ` | Bônus: +${card.value} moedas!`;
                break;
            case 'tax':
                // Jogador que ganhou a carta recebe 10 do outro
                state[loserSaldoKey] -= card.value;
                state[winnerSaldoKey] += card.value;
                state.message += ` | Taxação: Recebeu ${card.value} do oponente!`;
                break;
            case 'refund':
                // Recupera 50% do gasto ATUAL (já que a função é chamada logo após deduzir o saldo)
                // Ou seria da compra anterior? A carta diz "última compra".
                // Se eu acabei de comprar essa carta, ela é a "última compra"?
                // Geralmente cartas estratégicas agem sobre a transação que as adquiriu ou a anterior.
                // Vou implementar como reembolso da transação ATUAL para simplificar e ser imediato.
                const refundAmount = Math.round(state[lastGastoKey] * card.value);
                state[winnerSaldoKey] += refundAmount;
                state.message += ` | Reembolso: +${refundAmount} moedas (50%)!`;
                break;
        }
    }

    // --- Lógica Dados do Prazer ---
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
        // Se acabaram as posições, reembaralha
        if (this.diceState.availableD1.length === 0) {
            this.diceState.availableD1 = [...this.dice1Options].sort(() => Math.random() - 0.5);
        }
        if (this.diceState.availableD2.length === 0) {
            this.diceState.availableD2 = [...this.dice2Options].sort(() => Math.random() - 0.5);
        }

        // Tira do topo (sem repetir até acabar todas)
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
        // Limpar conteúdo atual
        this.mainContent.innerHTML = '';

        // Ativar/Desativar Modo Imersivo (esconde sidebar/header)
        const appContainer = document.querySelector('.app-container');
        if (viewName === 'tabuleiro-seducao') {
            appContainer.classList.add('immersive-mode');
        } else {
            appContainer.classList.remove('immersive-mode');
        }

        // Atualizar navegação
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.view === viewName) link.classList.add('active');
        });

        // Renderizar conteúdo baseado na view
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
                <h2>Bem-vindo ao Hub de Jogos! 🎮</h2>
                <p>Escolha como você quer se divertir hoje:</p>
            </div>
            <div class="category-grid">
                <div class="category-card" data-action="nav-category" data-view="games-couple">
                    <div class="category-icon">❤️</div>
                    <h3>Jogos de Casal</h3>
                    <p>Momentos a dois, conexão e diversão picante.</p>
                </div>
                <div class="category-card" data-action="nav-category" data-view="games-group">
                    <div class="category-icon">🍻</div>
                    <h3>Jogos em Grupo</h3>
                    <p>Ria com os amigos e quebre o gelo na festa!</p>
                </div>
            </div>
        `;
        this.mainContent.appendChild(section);
    }

    _renderGamesList(games, categoryTitle = 'Disponíveis') {
        const section = document.createElement('section');
        section.className = 'view active';
        section.innerHTML = `<h2>🎮 Jogos ${categoryTitle}</h2><div class="games-grid"></div>`;

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
                <p class="card-type">Toque abaixo para começar</p>
                <h3 class="card-text">Pronto?</h3>
            `;

            let nextBtnText = 'Próxima Carta 🎲';
            if (game.id === 'eu-nunca') nextBtnText = 'Eu Nunca Casal... 🍺';
            else if (game.id === 'eu-nunca-festa') nextBtnText = 'Eu Nunca Festa... 🍻';
            else if (game.id === 'quem-mais-provavel') nextBtnText = 'Quem será? ☝️';
            else if (game.id === 'sintonia-fina') nextBtnText = 'Ver Nossa Sintonia 🎻';

            let controls = `
                <button class="cta-btn" data-action="next-card">
                    ${nextBtnText}
                </button>
            `;

            // Interface específica para Nosso Código
            if (game.id === 'nosso-codigo') {
                // Recupera estado atual se existir, senão usa defaults visuais
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
                            <p class="card-type" style="margin-bottom: 2rem;">Toque para revelar a mímica</p>
                            <div style="font-size: 4rem; opacity: 0.2;">🎭</div>
                            <p style="margin-top: 2rem; color: var(--text-light); font-size: 0.9rem;">(Apenas quem vai imitar pode ver!)</p>
                        </div>
                        <div class="card-back" style="display: none; text-align: center;">
                            <p class="card-type" id="mimic-category">Categoria</p>
                            <h3 class="card-text" id="mimic-text" style="font-size: 1.4rem;">Texto da mímica...</h3>
                        </div>
                    </div>
                 `;

                controls = `
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; width: 100%;">
                        <button class="cta-btn success-btn" data-action="mimic-correct" disabled>Acertou! ✅ (+1)</button>
                        <button class="cta-btn warning-btn" data-action="mimic-skip" disabled>Pular ⏭️ (${maxSkips - skips} rest.)</button>
                        <button class="cta-btn secondary-btn" data-action="mimic-next-turn" disabled>Próximo Turno 🔄</button>
                    </div>
                    <button class="cta-btn text-btn" data-action="nav-games" style="margin-top: 1rem;">Sair do Jogo</button>
                 `;
            }

            section.innerHTML = `
                <h2>${game.title}</h2>
                <div class="card-container">
                    ${game.id === 'nosso-codigo' ? cardContent : `
                    <div class="game-card-display" id="active-card">
                        <p class="card-type">Toque abaixo para começar</p>
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
                const message = state ? state.message : "Façam seus lances!";
                const gameOver = state ? state.gameOver : false;

                if (gameOver) {
                    let p1Items = state.inventoryP1.map(i => `<li>${i.text}</li>`).join('');
                    let p2Items = state.inventoryP2.map(i => `<li>${i.text}</li>`).join('');

                    cardContent = `
                        <div style="text-align: center;">
                            <h3>Fim de Jogo! 🏁</h3>
                            <p>Saldo Final: P1 (${saldoP1}) | P2 (${saldoP2})</p>
                            <div style="display: flex; gap: 1rem; margin-top: 1rem; text-align: left;">
                                <div style="flex: 1; background: #f0f0f0; padding: 10px; border-radius: 8px;">
                                    <strong>Prêmios do Jogador 1:</strong>
                                    <ul style="font-size: 0.8rem; padding-left: 1rem;">${p1Items || '<li>Nenhum prêmio!</li>'}</ul>
                                </div>
                                <div style="flex: 1; background: #f0f0f0; padding: 10px; border-radius: 8px;">
                                    <strong>Prêmios do Jogador 2:</strong>
                                    <ul style="font-size: 0.8rem; padding-left: 1rem;">${p2Items || '<li>Nenhum prêmio!</li>'}</ul>
                                </div>
                            </div>
                            <p style="margin-top: 1rem; font-size: 0.9rem;">(Estes são os itens que cada um conquistou no leilão!)</p>
                        </div>
                    `;
                    controls = `
                        <button class="cta-btn" data-action="auction-restart">Jogar Novamente 🔄</button>
                        <button class="cta-btn text-btn" data-action="nav-games">Sair</button>
                    `;
                } else {
                    cardContent = `
                        <div style="text-align: center; width: 100%;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: var(--primary-color); font-weight: bold;">
                                <span>💰 P1: ${saldoP1}</span>
                                <span>💰 P2: ${saldoP2}</span>
                            </div>

                            <div class="game-card-display" id="active-card" style="border-color: #ffd700; background: linear-gradient(135deg, #fff, #fff8e1);">
                                <p class="card-type" style="color: #d4ac0d;">${currentItem ? currentItem.category : 'Carregando...'}</p>
                                <h3 class="card-text" style="color: #2c3e50;">${currentItem ? currentItem.text : '...'}</h3>
                            </div>

                            <p style="margin: 1rem 0; color: var(--text-light); font-style: italic;">${message}</p>

                            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                                <div style="flex: 1;">
                                    <label style="font-size: 0.8rem; display: block;">Lance P1 🔒</label>
                                    <input type="password" inputmode="numeric" id="bid-p1" class="bid-input" placeholder="0-100" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                                </div>
                                <div style="flex: 1;">
                                    <label style="font-size: 0.8rem; display: block;">Lance P2 🔒</label>
                                    <input type="password" inputmode="numeric" id="bid-p2" class="bid-input" placeholder="0-100" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                                </div>
                            </div>
                        </div>
                    `;

                    controls = `
                        <button class="cta-btn" data-action="auction-bid" style="background-color: #d4ac0d; color: white;">Bater o Martelo 🔨</button>
                        <button class="cta-btn" data-action="auction-skip" style="background-color: #636e72; color: white;">Pular ⏭️</button>
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
                        <p class="card-type">Toque abaixo para começar</p>
                        <h3 class="card-text">Pronto?</h3>
                    </div>
                </div>
                <div class="game-controls">
                     <button class="cta-btn" data-action="next-card">
                        ${game.id === 'eu-nunca' ? 'Eu Nunca Casal... 🍺' : 'Próxima Carta 🎲'}
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
                            <p class="card-type" id="binary-turn-indicator">Jogador 1: Toque para começar</p>
                            <h3 class="card-text" id="binary-card-text">Pronto para começar?</h3>
                        </div>
                    </div>
                    <div class="game-controls binary-controls" style="display: none;">
                        <button class="cta-btn btn-no" data-action="binary-no">❌ Não</button>
                        <button class="cta-btn btn-yes" data-action="binary-yes">❤️ Sim</button>
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
                        <!-- Slot 1: Ação -->
                        <div class="slot-column">
                            <div class="slot-label">Ação 💋</div>
                            <div class="slot-box" id="slot-action">
                                <span class="slot-text">?</span>
                            </div>
                        </div>
                        <!-- Slot 2: Corpo -->
                        <div class="slot-column">
                            <div class="slot-label">Local 🦵</div>
                            <div class="slot-box" id="slot-body">
                                <span class="slot-text">?</span>
                            </div>
                        </div>
                        <!-- Slot 3: Tempo -->
                        <div class="slot-column">
                            <div class="slot-label">Tempo ⏳</div>
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
                        <button class="cta-btn" id="spin-btn" data-action="spin-roulette">Girar Roleta 🎡</button>
                        <button class="cta-btn" id="timer-btn" data-action="start-timer" style="display: none; background-color: var(--warning-color); color: #333;">Iniciar Timer ⏱️</button>
                        <button class="cta-btn" id="veto-btn" data-action="veto-roulette" style="display: none; background-color: #636e72;">
                                Veto 🚫 (<span id="veto-count">3</span>)
                        </button>
                    </div>

                    <div class="heat-indicator">
                        Nível de Calor: <span id="heat-level" style="color: var(--accent-color); font-weight: bold;">Low Heat ❄️</span>
                    </div>
                </div>
            `;
            // Necessário desenhar o canvas após renderizar
            setTimeout(() => this.drawRouletteWheel(), 100);
        } else if (game.id === 'dados-prazer') {
            section.innerHTML = `
                <h2 style="color: #6c5ce7; border-bottom: 2px solid #a29bfe; padding-bottom: 0.5rem;">${game.title}</h2>
                <div class="dice-container-wrapper">
                    <div>
                        <div class="dice-label">🎯 Posição</div>
                        <div class="dice-wrapper">
                            <div class="dice-3d" id="dice-1">
                                <div class="dice-face front">🎲</div>
                                <div class="dice-face back">🎲</div>
                                <div class="dice-face right">🎲</div>
                                <div class="dice-face left">🎲</div>
                                <div class="dice-face top">🎲</div>
                                <div class="dice-face bottom">🎲</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="dice-label">🌡️ Modificador</div>
                        <div class="dice-wrapper">
                            <div class="dice-3d" id="dice-2">
                                <div class="dice-face front">🎲</div>
                                <div class="dice-face back">🎲</div>
                                <div class="dice-face right">🎲</div>
                                <div class="dice-face left">🎲</div>
                                <div class="dice-face top">🎲</div>
                                <div class="dice-face bottom">🎲</div>
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
                        <a id="dice-ref-link" href="#" target="_blank" style="display: inline-block; padding: 6px 12px; background: white; color: #6c5ce7; border-radius: 20px; font-size: 0.8rem; text-decoration: none; font-weight: bold;">🔍 Ver Referência Visual</a>
                    </div>
                </div>

                <div id="dice-timer-display" style="display: none; text-align: center; margin-top: 1rem;">
                    <p style="font-size: 2rem; font-weight: bold; color: var(--primary-color);" id="dice-timer-text">05:00</p>
                    <div style="width: 100%; height: 6px; background: #dfe6e9; border-radius: 3px; overflow: hidden; margin-top: 0.5rem;">
                        <div id="dice-timer-bar" style="height: 100%; background: linear-gradient(90deg, #a29bfe, #6c5ce7); width: 100%; transition: width 1s linear;"></div>
                    </div>
                </div>

                <div class="game-controls" style="margin-top: 1.5rem;">
                    <button class="cta-btn" data-action="dice-roll" style="background: linear-gradient(135deg, #a29bfe, #6c5ce7);">Lançar Dados 🎲</button>
                    <button class="cta-btn" data-action="dice-start-timer" id="dice-timer-btn" style="display: none; background: linear-gradient(135deg, #6c5ce7, #5a4bd1); color: white;">Iniciar Turno ⏱️ (5min)</button>
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
                        <p id="termometro-instruction" class="instruction-text">Toque abaixo para iniciar a provocação</p>
                    </div>

                    <div class="termometro-controls centered">
                        <button class="cta-btn start-btn glow-btn" id="termometro-main-btn" data-action="start-termometro">Iniciar Provocação 🔥</button>
                        <button class="cta-btn stop-btn secondary-btn" id="termometro-stop-btn" data-action="stop-termometro" style="display: none;">Perdi o Controle! 🛑</button>
                    </div>
                </div>
            `;
        } else {
            section.innerHTML = `<h2>Erro: Jogo não implementado.</h2>`;
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

        // Círculo central
        ctx.beginPath();
        ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }

    updateCardDisplay(card) {
        const cardDisplay = document.getElementById('active-card');
        if (!cardDisplay) return;

        // Animação de saída
        cardDisplay.style.transform = 'rotateY(90deg)';

        setTimeout(() => {
            // Atualizar conteúdo
            cardDisplay.className = `game-card-display ${card.type}`;
            cardDisplay.querySelector('.card-type').textContent = card.type;
            cardDisplay.querySelector('.card-text').textContent = card.text;

            // Animação de entrada
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

        // Layout Artístico Unificado (Snake 10x6 para 60 slots, usaremos 30 para cada ou 60 intercalados)
        // Para ser "Single Screen", vamos criar um grid compacto onde as duas trilhas coexistem de forma artística.

        // Mapeamento Snake 10 colunas
        const snakeMap = [];
        for (let row = 0; row < 6; row++) {
            const rowIndices = [];
            for (let col = 0; col < 10; col++) {
                rowIndices.push(row * 10 + col);
            }
            if (row % 2 !== 0) rowIndices.reverse();
            snakeMap.push(...rowIndices);
        }

        section.innerHTML = `
            <div class="turn-banner-hud ${turnColorClass}" id="turn-indicator">
                ${turnName}
            </div>

            <div class="board-game-container">
                <div class="board-unified-layout">
                    <div class="board-grid-artistic">
                        ${snakeMap.map(i => {
            // Intercalar as trilhas: i par = Blue, i impar = Pink (ou vice-versa)
            // Cada trilha tem 30 casas. Total 60.
            const indexInTrail = Math.floor(i / 2);
            const isBlueTile = i % 2 === 0;
            const trailType = isBlueTile ? 'blue' : 'pink';
            const trailData = data[trailType];
            const currentPos = isBlueTile ? state.bluePos : state.pinkPos;

            return this._createTileHtml(trailData[indexInTrail], indexInTrail, trailType, currentPos);
        }).join('')}
                    </div>
                </div>

                <div class="board-dice-hud">
                    <div id="board-dice-result" class="dice-val-luxury">?</div>
                    <button class="cta-btn gold-btn" data-action="board-roll-dice" style="background: linear-gradient(135deg, #D4AF37, #800020); color: #fff; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 800; border: 1px solid #D4AF37; cursor: pointer;">Girar Dado 🎲</button>
                    <button class="cta-btn text-btn" data-action="nav-games" style="margin-top: 0.5rem; color: #fff; background: none; border: none; font-size: 0.8rem; cursor: pointer; opacity: 0.6;">Sair do Jogo</button>
                </div>
            </div>
        `;
        this.mainContent.appendChild(section);
    }

    _createTileHtml(tile, index, trailType, currentPos) {
        if (!tile) return '';
        const isCurrent = currentPos === index;
        const text = typeof tile === 'string' ? tile : tile.text;
        const typeClass = tile.type || '';

        const marker = isCurrent ? `<div class="player-pawn">${trailType === 'blue' ? '👔' : '👠'}</div>` : '';

        let specialClass = '';
        if (index === 0) specialClass = 'start-tile';
        else if (index === 29) specialClass = 'finish-tile';

        return `
            <div class="board-tile-luxury ${specialClass} ${typeClass} ${isCurrent ? 'active-trail' : ''}" data-index="${index}">
                <span class="tile-num-float">${index + 1}</span>
                ${marker}
                ${!isCurrent && index === 0 ? '<span style="font-size: 1.5rem">🏁</span>' : ''}
                ${!isCurrent && index === 29 ? '<span style="font-size: 1.5rem">🏆</span>' : ''}
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
                <p>Versão 1.0.0</p>
                <p>Desenvolvido com ❤️ usando HTML, CSS e JS.</p>
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
        // Navegação via Sidebar
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const viewName = e.target.dataset.view;
                this.navigateTo(viewName);

                // Fechar menu mobile se aberto
                this.view.sidebar.classList.remove('open');
            });
        });

        // Botão Menu Mobile
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                this.view.toggleMobileMenu();
            });
        }

        // Delegação de eventos para elementos dinâmicos no Main Content
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

        // Simulação de animação
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
                    setTimeout(() => alert("🏅 CHEGADA! " + (player === 'blue' ? "Homem" : "Mulher") + " venceu! Cumprem o desafio final!"), 500);
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
            shuffledDeck: [...this.model.binaryWishesDeck] // Cópia simples, ordem fixa para P1
        };
        // Opcional: Embaralhar para o jogo ser sempre diferente?
        // A prompt diz "Jogador 2 responde às mesmas 20 cartas (em ordem aleatória)".
        // Então P1 vê ordem X, P2 vê ordem aleatória Y, mas precisamos saber qual carta é qual.
        // Melhor manter índices fixos do deck original para comparação.

        // Vamos usar o índice do array original como ID da carta.
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

        // Limpar botões de transição anteriores
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
                indicator.innerText = '✋ Pare!';
                textElement.innerText = 'Passe o dispositivo para o Jogador 2.';

                const btn = document.createElement('button');
                btn.className = 'cta-btn';
                btn.innerText = 'Sou o Jogador 2 (Iniciar)';
                btn.onclick = () => {
                    state.turn = 'player2';
                    state.currentCardIndex = 0;
                    // Para o jogador 2, vamos embaralhar a ordem de apresentação
                    // Mas precisamos rastrear o índice original.
                    // Para simplificar a MVP de agora: manter a mesma ordem ou ordem inversa?
                    // A prompt pede "ordem aleatória".
                    // Vamos criar um array de índices para o P2.
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
            // Player 2 com ordem aleatória
            realCardIndex = state.p2Order[state.currentCardIndex];
            indicator.innerText = `Jogador 2 (${state.currentCardIndex + 1}/${this.model.binaryWishesDeck.length})`;
        }

        const card = this.model.binaryWishesDeck[realCardIndex];
        textElement.innerText = card.text;

        // Animação de entrada
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
                <h2>✨ Resultado da Sintonia ✨</h2>
        `;

        if (matches.length > 0) {
            html += `<p>Vocês deram "Match" em <strong>${matches.length}</strong> desejos!</p>`;
            html += `<ul class="matches-list">`;
            matches.forEach(card => {
                html += `<li>🔥 ${card.text}</li>`;
            });
            html += `</ul>`;
        } else {
            html += `
                <p>Nenhum match exato desta vez... Mas o desejo continua!</p>
                <div class="consolation-prize">
                    <h3>🏆 Desafio de Consolação</h3>
                    <p>Façam uma massagem de 5 minutos um no outro para relaxar.</p>
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

    // --- Métodos da Roleta da Temperatura ---

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
        // Resetar view se necessário
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

        // Simulação de giro no Canvas
        let angle = 0;
        let speed = 0.5; // radianos por frame
        const deceleration = 0.005;
        const duration = 150 + Math.random() * 50; // frames (~3-4 seg)
        let frame = 0;

        const animate = () => {
            frame++;
            if (speed > 0) {
                angle += speed;
                speed -= deceleration * (frame / 50); // Desacelera não-linear
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

        // Verificar evolução de nível
        if (state.level === 'low' && state.spinCount >= 5) {
            state.level = 'high';
            const heatLabel = document.getElementById('heat-level');
            if (heatLabel) {
                heatLabel.innerHTML = 'HIGH HEAT 🔥🔥🔥';
                heatLabel.style.color = 'var(--danger-color)';
            }
            // Feedback de level up
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            alert('Nível Subiu! Agora é HIGH HEAT! 🔥');
        }

        // Sortear resultado baseado no nível
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
        spinBtn.innerText = 'Girar Novamente 🎡';

        timerBtn.style.display = 'inline-block';

        if (state.vetoCount > 0) {
            vetoBtn.style.display = 'inline-block';
            document.getElementById('veto-count').innerText = state.vetoCount;
        } else {
            vetoBtn.style.display = 'none';
        }

        // Animação de entrada
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
        timerBtn.style.display = 'none'; // Esconde botão de iniciar timer

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


    // --- Métodos da Roleta da Temperatura ---

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
        // Resetar view se necessário
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
        // Verificar evolução de nível
        if (state.level === 'low' && state.spinCount >= 5) {
            state.level = 'high';
            const heatLabel = document.getElementById('heat-level');
            if (heatLabel) {
                heatLabel.innerHTML = 'HIGH HEAT 🔥🔥🔥';
                heatLabel.style.color = 'var(--danger-color)';
            }
            alert('Nível Subiu! Agora é HIGH HEAT! 🔥');
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

            // Parar após delay
            setTimeout(() => {
                clearInterval(interval);
                textEl.innerText = slot.final;
                el.classList.remove('spinning');
                el.classList.add('stopped');
                if (navigator.vibrate) navigator.vibrate(50);

                // Se for o último, finalizar
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
            if (textTitle) textTitle.innerText = "🔥 Combinação Definida! 🔥";

            // Animação de entrada
            resultDiv.classList.add('pop-in');
            setTimeout(() => resultDiv.classList.remove('pop-in'), 500);
        }

        if (spinBtn) {
            spinBtn.disabled = false;
            spinBtn.innerText = 'Girar Novamente 🎡';
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
        timerBtn.style.display = 'none'; // Esconde botão de iniciar timer

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

            // Se for Esquenta, já tira uma carta ou prepara
            if (gameId === 'esquenta') {
                // Opcional: já sortear uma carta inicial
                // this.drawNextCard();
                // Deixando manual para o usuário clicar em "Iniciar/Proxima"
            }
        }
    }

    drawNextCard() {
        const card = this.model.getRandomCard();
        this.view.updateCardDisplay(card);
    }
    // --- Lógica de Controle do Nosso Código ---

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

            // Habilita botões
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

                // Atualiza texto do botão
                const remaining = this.model.mimicState.maxSkips - this.model.mimicState.skipsUsed;
                btnElement.textContent = `Pular ⏭️ (${remaining} rest.)`;
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

    // --- Controller Leilão ---
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

        // Re-renderizar para atualizar saldo e próximo item
        this.view.renderView('game-playing', this.model.getGame('leilao-intimidade'));

        // Feedback
        if (navigator.vibrate) navigator.vibrate(100);
    }

    handleAuctionSkip() {
        // Pular para o próximo item sem dar lance
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

        // Animação de giro
        dice1El.classList.add('spinning');
        dice2El.classList.add('spinning');

        // Vibração
        if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

        // Sortear resultado após animação
        setTimeout(() => {
            dice1El.classList.remove('spinning');
            dice2El.classList.remove('spinning');

            // Rotação final aleatória para visual
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

            document.getElementById('dice-action-phrase').textContent = `Preparem-se para a posição ${d1.name}...`;
            document.getElementById('dice-result-d1').textContent = d1.name;
            document.getElementById('dice-desc-d1').textContent = d1.description;
            document.getElementById('dice-result-d2').textContent = d2.name;
            document.getElementById('dice-desc-d2').textContent = d2.description;

            // Link de referência visual
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

            // Mostrar botão de timer
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

                // Muda cor da tela nos últimos 30 segundos
                if (remaining <= 30) {
                    viewEl.classList.add('timer-warning');
                }
            } else {
                timerBar.style.width = '0%';
                timerText.textContent = '⏰ Tempo Esgotado!';
                timerText.style.color = '#fff';

                viewEl.classList.remove('timer-warning');
                viewEl.classList.add('timer-finished-bg');

                if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);

                // Mostrar botão de lançar de novo após 3s e resetar cor
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

            // Atualizar Instrução (cada 45s)
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
                    <h3>Você resistiu por ${mins}m e ${secs}s.</h3>
                    <h2 style="font-size: 2rem; margin-top: 1rem;">Agora, entregue-se! 🔥</h2>
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

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const model = new GameModel();
    const view = new GameView();
    window.gameModel = model;
    const app = new GameController(model, view);
    app.init();
});
