// Dados dos relatos (41 relatos detalhados)
const relatos = [
    {
        id: 1,
        nome: "Ana Clara Silva",
        idade: 32,
        cidade: "São Paulo, SP",
        ano: 2023,
        regiao: "sudeste",
        profissao: "Professora",
        agressor: "Ex-companheiro",
        duracao: "3 anos",
        detalhes: "Ana sofreu violência psicológica e física durante 3 anos de relacionamento. Seu ex-companheiro controlava suas redes sociais, proibia que ela visitasse a família e a agredia fisicamente regularmente. Após uma agressão que resultou em fratura no braço, ela conseguiu fazer um Boletim de Ocorrência com ajuda de uma colega de trabalho. Hoje, após acompanhamento psicológico e jurídico, Ana reconstruiu sua vida, terminou o mestrado e trabalha como coordenadora pedagógica em uma escola pública.",
        superacao: "Concluiu mestrado em educação, tornou-se coordenadora pedagógica e participa como voluntária em grupos de apoio a outras mulheres.",
        apoio: "Recebeu apoio do Centro de Referência da Mulher, acompanhamento psicológico gratuito e assistência jurídica da Defensoria Pública.",
        tags: ["violência psicológica", "violência física", "controle", "reconstrução profissional"]
    },
    {
        id: 2,
        nome: "Beatriz Oliveira",
        idade: 28,
        cidade: "Rio de Janeiro, RJ",
        ano: 2022,
        regiao: "sudeste",
        profissao: "Vendedora",
        agressor: "Marido",
        duracao: "5 anos",
        detalhes: "Casada desde os 23 anos, Beatriz enfrentou violência econômica e emocional. Seu marido controlava todo o dinheiro da família, mesmo ela trabalhando em tempo integral. Era proibida de fazer cursos ou ter independência financeira. A situação piorou quando ela engravidou e seu marido começou a agredi-la verbalmente diariamente. Com ajuda de uma cliente que percebeu as marcas de agressão, conseguiu contato com uma rede de apoio.",
        superacao: "Conseguiu guardar dinheiro aos poucos, separou-se e hoje é microempreendedora com uma pequena loja online de artesanato. Conquistou a guarda da filha e mantém contato zero com o ex-marido.",
        apoio: "Acolhida em casa abrigo, recebeu capacitação profissional do programa Mulher Empreendedora e apoio do CREAS.",
        tags: ["violência econômica", "violência emocional", "gravidez", "empreendedorismo"]
    },
    {
        id: 3,
        nome: "Carla Santos",
        idade: 45,
        cidade: "Salvador, BA",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Enfermeira",
        agressor: "Ex-namorado",
        duracao: "8 meses",
        detalhes: "Carla conheceu seu agressor em um aplicativo de relacionamentos. Nos primeiros meses, ele era carinhoso e atencioso, mas gradualmente começou a isolá-la dos amigos e familiares. A violência começou com críticas constantes, depois ameaças e, finalmente, agressões físicas. Na última agressão, ele tentou estrangulá-la, mas ela conseguiu fugir e pedir ajuda a um vizinho.",
        superacao: "Após o trauma, Carla especializou-se em atendimento a vítimas de violência. Hoje trabalha em um hospital de referência e ministra palestras sobre identificação de relacionamentos abusivos.",
        apoio: "Atendimento pelo SUS, terapia especializada em trauma e participação em grupo de apoio no hospital onde trabalha.",
        tags: ["violência física", "estrangulamento", "isolamento", "especialização profissional"]
    },
    {
        id: 4,
        nome: "Daniela Costa",
        idade: 38,
        cidade: "Brasília, DF",
        ano: 2023,
        regiao: "centro-oeste",
        profissao: "Advogada",
        agressor: "Ex-marido",
        duracao: "10 anos",
        detalhes: "Daniela vivia um casamento aparentemente perfeito. Seu marido era bem-sucedido profissionalmente e eles tinham uma vida confortável. Porém, em privado, ele humilhava Daniela constantemente, diminuía suas conquistas profissionais e a proibia de ver amigos. A violência psicológica era tão severa que Daniela desenvolveu depressão e ansiedade. Após descobrir traições e ser agredida fisicamente durante uma discussão, decidiu pedir divórcio.",
        superacao: "Retomou a carreira jurídica, especializou-se em direito da mulher e hoje atende vítimas de violência doméstica gratuitamente. Publicou um livro sobre sua experiência.",
        apoio: "Apoio de colegas da OAB, terapia e participação em grupo de mulheres profissionais.",
        tags: ["violência psicológica", "humilhação", "depressão", "advocacia"]
    },
    {
        id: 5,
        nome: "Elena Martins",
        idade: 29,
        cidade: "Manaus, AM",
        ano: 2022,
        regiao: "norte",
        profissao: "Estudante Universitária",
        agressor: "Namorado",
        duracao: "2 anos",
        detalhes: "Elena era bolsista em uma universidade federal quando conheceu seu agressor, também estudante. Inicialmente apoio, ele gradualmente começou a sabotar seus estudos - escondia material, desligava o alarme para que ela perdesse provas e a pressionava a abandonar o curso. A violência culminou quando ele a agrediu no estacionamento da universidade após ela receber uma nota melhor que a dele.",
        superacao: "Concluiu a graduação com honras, entrou no mestrado e fundou um coletivo de mulheres na universidade para apoio mútuo. Ganhou uma bolsa de estudos no exterior.",
        apoio: "Apoio da coordenação do curso, atendimento na universidade e medida protetiva concedida rapidamente.",
        tags: ["violência universitária", "sabotagem", "coletivo feminino", "bolsa exterior"]
    },
    {
        id: 6,
        nome: "Fernanda Lima",
        idade: 41,
        cidade: "Porto Alegre, RS",
        ano: 2021,
        regiao: "sul",
        profissao: "Empresária",
        agressor: "Sócio e Ex-companheiro",
        duracao: "6 anos",
        detalhes: "Fernanda abriu uma empresa com seu então companheiro. Com o tempo, ele assumiu controle total das finanças, a excluiu das decisões e usava o poder econômico para manipulá-la. Quando ela tentou se posicionar, sofreu ameaças de que ficaria sem nada e seria exposta para clientes e fornecedores. A violência psicológica e econômica era constante.",
        superacao: "Processou judicialmente o ex-sócio, recuperou sua parte na empresa e hoje administra sozinha o negócio, que triplicou de tamanho. Criou um programa para capacitar mulheres em gestão empresarial.",
        apoio: "Assessoria jurídica especializada, mentoria de negócios e rede de mulheres empresárias.",
        tags: ["violência econômica", "sociedade", "empresária", "capacitação"]
    },
    {
        id: 7,
        nome: "Gabriela Rocha",
        idade: 26,
        cidade: "Fortaleza, CE",
        ano: 2023,
        regiao: "nordeste",
        profissao: "Influenciadora Digital",
        agressor: "Ex-namorado",
        duracao: "1 ano",
        detalhes: "Gabriela tinha uma carreira promissora como influenciadora quando começou a namorar um homem que inicialmente parecia apoiar seu trabalho. Gradualmente, ele começou a controlar seu conteúdo, exigir senhas das redes sociais e humilhá-la publicamente em comentários. Ameaçava divulgar fotos íntimas se ela não obedecesse. O estresse afetou sua saúde mental e seu trabalho.",
        superacao: "Recuperou o controle das redes sociais, cresceu sua audiência ao compartilhar sua história e hoje é palestrante sobre segurança digital para mulheres. Lançou um curso online sobre empreendedorismo digital feminino.",
        apoio: "Apoio jurídico para crimes digitais, terapia e networking com outras influenciadoras.",
        tags: ["violência digital", "exposição", "redes sociais", "empreendedorismo digital"]
    },
    {
        id: 8,
        nome: "Helena Souza",
        idade: 57,
        cidade: "Belo Horizonte, MG",
        ano: 2020,
        regiao: "sudeste",
        profissao: "Aposentada",
        agressor: "Filho",
        duracao: "4 anos",
        detalhes: "Helena sofria violência do próprio filho, que morava com ela após perder o emprego. Ele a agredia verbal e fisicamente, roubava seu dinheiro da aposentadoria e a ameaçava de colocar em um asilo se denunciasse. Isolada e com medo, Helena não conseguia pedir ajuda até que uma visitadora do INSS percebeu as marcas de agressão.",
        superacao: "Com apoio, conseguiu uma medida protetiva contra o filho, mudou-se para um condomínio de idosos e participa de grupo de convivência. Reconectou-se com amigos antigos e retomou hobbies.",
        apoio: "Apoio do CRAS, Defensoria Pública do Idoso e programa municipal de proteção.",
        tags: ["violência familiar", "idoso", "aposentadoria", "reconexão social"]
    },
    {
        id: 9,
        nome: "Isabela Fernandes",
        idade: 34,
        cidade: "Curitiba, PR",
        ano: 2022,
        regiao: "sul",
        profissao: "Médica",
        agressor: "Ex-marido",
        duracao: "7 anos",
        detalhes: "Isabela era residente de pediatria quando se casou. Seu marido, também médico, parecia o parceiro perfeito. No entanto, ele sabotava sua carreira propositalmente - escondia convites para congressos, mentia sobre plantões e a humilhava perante colegas. A violência psicoliga afetou seu desempenho profissional e a fez questionar sua própria competência.",
        superacao: "Especializou-se em medicina forense, atuando especificamente com violência contra a mulher. É referência na área e presta consultoria para hospitais e delegacias.",
        apoio: "Apoio de mentoras na medicina, terapia especializada e associação médica feminina.",
        tags: ["violência profissional", "sabotagem", "medicina forense", "consultoria"]
    },
    {
        id: 10,
        nome: "Juliana Almeida",
        idade: 30,
        cidade: "Recife, PE",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Jornalista",
        agressor: "Chefe",
        duracao: "2 anos",
        detalhes: "Juliana sofria assédio moral e sexual de seu chefe na redação onde trabalhava. Ele a isolava em reuniões, fazia comentários inapropriados e ameaçava demiti-la se não cedesse a suas investidas. Quando ela se recusou, começou a receber avaliações negativas injustas e foi gradualmente sendo excluída de pautas importantes.",
        superacao: "Processou a empresa, ganhou a ação e recebeu indenização. Usou o dinheiro para fundar um veículo de comunicação independente focado em direitos das mulheres. Hoje emprega outras jornalistas que passaram por situações similares.",
        apoio: "Apoio do sindicato dos jornalistas, assessoria jurídica e crowdfunding para iniciar o novo projeto.",
        tags: ["assédio", "violência no trabalho", "jornalismo", "empreendedorismo"]
    },
    {
        id: 11,
        nome: "Karina Mendes",
        idade: 25,
        cidade: "Goiânia, GO",
        ano: 2023,
        regiao: "centro-oeste",
        profissao: "Atleta Profissional",
        agressor: "Técnico",
        duracao: "3 anos",
        detalhes: "Karina era promessa do atletismo nacional quando começou a ser assediada por seu técnico. Ele controlava todos os aspectos de sua vida - alimentação, treinos, vida social - usando seu poder para exigir favores sexuais. Ameaçava acabar com sua carreira se ela denunciasse. O estresse afetou seu desempenho e saúde física.",
        superacao: "Denunciou ao comitê olímpico, teve o técnico afastado e hoje treina com uma técnica mulher. Conquistou medalhas em competições nacionais e é embaixadora de campanhas contra assédio no esporte.",
        apoio: "Apoio da comissão de ética esportiva, psicóloga esportiva e associação de atletas mulheres.",
        tags: ["assédio esportivo", "controle", "atletismo", "embaixadora"]
    },
    {
        id: 12,
        nome: "Larissa Barbosa",
        idade: 36,
        cidade: "Belém, PA",
        ano: 2022,
        regiao: "norte",
        profissao: "Indígena e Artesã",
        agressor: "Ex-companheiro não indígena",
        duracao: "4 anos",
        detalhes: "Larissa sofreu violência cultural e física de seu companheiro, que desprezava suas tradições indígenas, proibia que ela falasse sua língua nativa com os filhos e destruía seu artesanato. A violência física era justificada por ele como 'educação'. Isolada da comunidade indígena, Larissa sentia que havia perdido sua identidade.",
        superacao: "Retornou para sua comunidade, resgatou suas tradições e hoje lidera uma cooperativa de artesanato indígena que valoriza mulheres artesãs. Seu trabalho é reconhecido internacionalmente.",
        apoio: "Apoio da FUNAI, associação de mulheres indígenas e ONGs de proteção aos povos originários.",
        tags: ["violência cultural", "indígena", "artesanato", "cooperativa"]
    },
    {
        id: 13,
        nome: "Mariana Torres",
        idade: 42,
        cidade: "Vitória, ES",
        ano: 2021,
        regiao: "sudeste",
        profissao: "Psicóloga",
        agressor: "Paciente (ex)",
        duracao: "8 meses",
        detalhes: "Mariana foi vítima de stalking por um ex-paciente que desenvolveu obsessão por ela. Ele a perseguia, mandava centenas de mensagens diárias, aparecia em seu local de trabalho e residência. As ameaças eram constantes e específicas, mostrando que ele a observava detalhadamente. A polícia inicialmente não levou a sério por ele não ter cometido agressão física.",
        superacao: "Especializou-se em segurança pessoal para profissionais de saúde mental, ministra treinamentos para psicólogos e escreveu um protocolo de segurança que foi adotado pelo conselho regional.",
        apoio: "Apoio do CRP, assessoria de segurança privada e terapia de apoio com colegas.",
        tags: ["stalking", "perseguição", "psicóloga", "protocolo segurança"]
    },
    {
        id: 14,
        nome: "Natália Ramos",
        idade: 31,
        cidade: "Florianópolis, SC",
        ano: 2023,
        regiao: "sul",
        profissao: "Programadora",
        agressor: "Colega de trabalho",
        duracao: "1 ano",
        detalhes: "Natália sofria assédio e sabotagem profissional de um colega que se sentia ameaçado por sua competência técnica. Ele excluía seu nome de créditos em projetos, espalhava rumores sobre ela e hackeou sua conta para enviar emails inadequados em seu nome. A empresa ignorou suas queixas até que outras mulheres se manifestaram.",
        superacao: "Processou a empresa, recebeu indenização e fundou uma startup de tecnologia com foco em equidade de gênero no setor tech. Hoje emprega majoritariamente mulheres em posições técnicas.",
        apoio: "Rede de mulheres em tecnologia, mentoria de negócios e incubadora de startups.",
        tags: ["sabotagem profissional", "tecnologia", "startup", "equidade gênero"]
    },
    {
        id: 15,
        nome: "Olivia Castro",
        idade: 39,
        cidade: "Campo Grande, MS",
        ano: 2022,
        regiao: "centro-oeste",
        profissao: "Veterinária",
        agressor: "Ex-companheiro",
        duracao: "6 anos",
        detalhes: "Olivia sofria violência que incluía maus-tratos aos seus animais de estimação como forma de controle e punição. Seu companheiro ameaçava machucar ou matar seus pets quando ela não obedecia. Em uma ocasião, ele realmente envenenou um de seus cachorros. O trauma era duplo - por si mesma e por seus animais.",
        superacao: "Especializou-se em bem-estar animal e violência doméstica, publicando pesquisas sobre a conexão entre maus-tratos animais e violência doméstica. Fundou um abrigo que acolhe mulheres e seus pets.",
        apoio: "Parceria com ONGs de proteção animal, universidade para pesquisa e financiamento coletivo para o abrigo.",
        tags: ["violência animal", "veterinária", "abrigo", "pesquisa"]
    },
    {
        id: 16,
        nome: "Patrícia Nunes",
        idade: 48,
        cidade: "Maceió, AL",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Doméstica",
        agressor: "Patrão",
        duracao: "3 anos",
        detalhes: "Patrícia sofria assédio sexual e exploração trabalhista na casa onde trabalhava. Seu patrão a assediava constantemente, ameaçando demiti-la e dar referências ruins se ela não cedesse. Trabalhava 12 horas por dia, sem registro, por menos de um salário mínimo. Isolada e com medo de perder o emprego, não sabia como sair da situação.",
        superacao: "Denunciou ao Ministério Público do Trabalho, recebeu todos os direitos trabalhistas atrasados e hoje trabalha em uma cooperativa de trabalhadoras domésticas que oferece condições dignas e proteção.",
        apoio: "Apoio do sindicato das domésticas, Ministério Público do Trabalho e cooperativa de trabalhadoras.",
        tags: ["exploração", "trabalhista", "doméstica", "cooperativa"]
    },
    {
        id: 17,
        nome: "Quezia Oliveira",
        idade: 27,
        cidade: "Teresina, PI",
        ano: 2023,
        regiao: "nordeste",
        profissao: "Estudante de Direito",
        agressor: "Ex-namorado da faculdade",
        duracao: "2 anos",
        detalhes: "Quezia sofria violência em um relacionamento com um colega de faculdade que usava seu conhecimento jurídico para manipulá-la e ameaçá-la. Ele distorcia leis, dizia que ela não teria provas e que ninguém acreditaria nela. A violência psicológica era tão elaborada que Quezia duvidava de sua própria sanidade.",
        superacao: "Formou-se com as melhores notas da turma, passou no exame da OAB de primeira e hoje atua como defensora pública, especializando-se em casos de violência contra a mulher. Desenvolveu um método para identificar violência psicológica sofisticada.",
        apoio: "Apoio de professoras da faculdade, estágio na Defensoria Pública e terapia.",
        tags: ["manipulação jurídica", "estudante", "defensoria", "método"]
    },
    {
        id: 18,
        nome: "Rafaela Santos",
        idade: 33,
        cidade: "Natal, RN",
        ano: 2022,
        regiao: "nordeste",
        profissao: "Cabeleireira",
        agressor: "Ex-companheiro",
        duracao: "5 anos",
        detalhes: "Rafaela sofria violência que incluía danos à sua ferramenta de trabalho - tesouras, secadores, produtos químicos eram constantemente danificados ou destruídos por seu companheiro. Ele sabia que isso a impedia de trabalhar e gerar renda, tornando-a mais dependente financeiramente dele.",
        superacao: "Conseguiu um microcrédito para mulheres, abriu seu próprio salão e hoje emprega outras mulheres em situação vulnerável. Desenvolveu uma linha de produtos para cabelo com parte da renda revertida para abrigos.",
        apoio: "Microcrédito do programa Mulher Empreendedora, capacitação do SEBRAE e rede de cabeleireiras.",
        tags: ["danos patrimoniais", "cabeleireira", "microcrédito", "emprego"]
    },
    {
        id: 19,
        nome: "Sandra Costa",
        idade: 50,
        cidade: "João Pessoa, PB",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Agricultora",
        agressor: "Ex-marido",
        duracao: "20 anos",
        detalhes: "Sandra sofria violência há duas décadas em uma área rural isolada. Seu marido controlava tudo - ela não podia ir à cidade sozinha, não tinha acesso a dinheiro e era agredida regularmente. Quando filhos adultos se mudaram, ele aumentou a violência. Sem acesso a telefone ou transporte, sentia-se presa.",
        superacao: "Com ajuda de uma agente de saúde que visitava a região, conseguiu denunciar. Após medida protetiva, recebeu capacitação em agricultura sustentável e hoje lidera uma associação de mulheres agricultoras que comercializa produtos orgânicos coletivamente.",
        apoio: "Apoio da Secretaria de Agricultura Familiar, associação de mulheres rurais e cooperativa.",
        tags: ["área rural", "isolamento", "agricultura", "associação"]
    },
    {
        id: 20,
        nome: "Tatiane Alves",
        idade: 29,
        cidade: "Rio Branco, AC",
        ano: 2023,
        regiao: "norte",
        profissao: "Motorista de Aplicativo",
        agressor: "Passageiro",
        duracao: "Incidente único",
        detalhes: "Tatiane foi vítima de tentativa de estupro por um passageiro durante um trabalho noturno. O homem a ameaçou com uma faca e tentou forçá-la a ir para um local isolado. Ela conseguiu manter a calma, ativou o botão de emergência do aplicativo e dirigiu até uma delegacia, onde o agressor foi preso em flagrante.",
        superacao: "Tornou-se instrutora de defesa pessoal para motoristas mulheres, criou um protocolo de segurança para aplicativos e faz palestras em empresas de transporte. Lidera uma rede de apoio entre motoristas mulheres.",
        apoio: "Treinamento em defesa pessoal, parceria com aplicativos e rede de motoristas mulheres.",
        tags: ["violência no trabalho", "motorista", "defesa pessoal", "protocolo"]
    },
    // NOVOS RELATOS (21-41)
    {
        id: 21,
        nome: "Vanessa Rodrigues",
        idade: 35,
        cidade: "Belo Horizonte, MG",
        ano: 2023,
        regiao: "sudeste",
        profissao: "Arquiteta",
        agressor: "Sócio do escritório",
        duracao: "2 anos",
        detalhes: "Vanessa sofreu assédio sexual constante de seu sócio no escritório de arquitetura que fundaram juntos. Ele usava seu poder na sociedade para forçar situações constrangedoras, como reuniões em hotéis e viagens 'a trabalho' onde tentava avanços. Quando ela se recusou, começou a sabotar seus projetos e espalhar rumores sobre sua competência profissional.",
        superacao: "Processou o sócio, vendeu sua parte na sociedade e abriu seu próprio escritório especializado em projetos sociais. Hoje emprega apenas mulheres e desenvolve projetos comunitários.",
        apoio: "Apoio da associação de arquitetas, assessoria jurídica especializada e incubadora de negócios femininos.",
        tags: ["assédio sexual", "sabotagem profissional", "arquitetura", "empreendedorismo social"]
    },
    {
        id: 22,
        nome: "Wanessa Almeida",
        idade: 27,
        cidade: "Porto Velho, RO",
        ano: 2022,
        regiao: "norte",
        profissao: "Estudante de Medicina",
        agressor: "Colega de residência",
        duracao: "1 ano",
        detalhes: "Durante a residência médica, Wanessa foi vítima de assédio moral e sexual de um colega mais antigo. Ele a humilhava publicamente durante rounds, atribuía seus sucessos a 'favores' e ameaçava prejudicar sua avaliação final. Em uma ocasião, a trancou em uma sala de exames e tentou agredi-la sexualmente.",
        superacao: "Denunciou à coordenação do programa, teve o agressor expulso e concluiu a residência com louvor. Especializou-se em ginecologia e hoje atende vítimas de violência sexual.",
        apoio: "Apoio da coordenação do curso, comissão de ética do hospital e grupo de apoio a residentes mulheres.",
        tags: ["assédio moral", "medicina", "residência", "especialização"]
    },
    {
        id: 23,
        nome: "Ximena Costa",
        idade: 40,
        cidade: "Cuiabá, MT",
        ano: 2023,
        regiao: "centro-oeste",
        profissao: "Fazendeira",
        agressor: "Ex-marido",
        duracao: "15 anos",
        detalhes: "Ximena herdou uma grande propriedade rural de sua família, mas seu marido assumiu o controle total do negócio. Ele a proibia de participar das decisões, assinava documentos em seu nome e a mantinha isolada na fazenda. Quando ela questionou algumas transações financeiras, ele a agrediu gravemente e ameaçou matá-la.",
        superacao: "Com ajuda de um vaqueiro fiel, conseguiu fugir e denunciar. Após longo processo judicial, recuperou a propriedade e hoje administra uma fazenda modelo com foco em sustentabilidade e empregando mulheres rurais.",
        apoio: "Apoio da Comissão Pastoral da Terra, Defensoria Pública e associação de mulheres rurais.",
        tags: ["violência rural", "controle econômico", "herança", "sustentabilidade"]
    },
    {
        id: 24,
        nome: "Yasmin Ferreira",
        idade: 22,
        cidade: "Macapá, AP",
        ano: 2022,
        regiao: "norte",
        profissao: "Estudante de Dança",
        agressor: "Professor de dança",
        duracao: "6 meses",
        detalhes: "Yasmin sonhava em ser bailarina profissional, mas seu professor a assediava sexualmente durante as aulas particulares. Ele dizia que seu 'sucesso dependia dele' e a tocava inapropriadamente durante os alongamentos. Quando ela tentou mudar de professor, ele espalhou que ela não tinha talento e a boicotou em audições.",
        superacao: "Denunciou à escola de dança, fundou um coletivo de bailarinas que monitora assédio no meio artístico e hoje estuda coreografia. Sua primeira peça aborda justamente violência contra mulheres.",
        apoio: "Apoio do sindicato dos artistas, terapia e bolsa de estudos em outra escola.",
        tags: ["assédio artístico", "dança", "coletivo", "coreografia"]
    },
    {
        id: 25,
        nome: "Zuleica Santos",
        idade: 58,
        cidade: "Teresina, PI",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Costureira",
        agressor: "Filho mais velho",
        duracao: "5 anos",
        detalhes: "Viúva, Zuleica sofria violência do filho que se mudou para sua casa após perder o emprego. Ele roubava seu dinheiro, vendia suas máquinas de costura para comprar drogas e a agredia quando ela tentava impedi-lo. Ameaçava colocar fogo na casa se ela denunciasse.",
        superacao: "Com ajuda de uma cliente que era assistente social, conseguiu uma medida protetiva e apoio para tratar sua dependência química do filho. Reabriu sua oficina de costura e hoje capacita outras mulheres idosas no ofício.",
        apoio: "Apoio do CRAS, Centro de Referência do Idoso e associação de costureiras.",
        tags: ["violência familiar", "idoso", "costura", "capacitação"]
    },
    {
        id: 26,
        nome: "Amanda Lima",
        idade: 31,
        cidade: "São Luís, MA",
        ano: 2023,
        regiao: "nordeste",
        profissao: "Jornalista Investigativa",
        agressor: "Fonte entrevistada",
        duracao: "3 meses",
        detalhes: "Amanda investigava um caso de corrupção quando começou a receber ameaças de uma das fontes. Ele a perseguia, mandava fotos dela entrando e saindo de casa, e ameaçava sua família. As ameaças escalaram para tentativas de atropelamento e uma invasão de domicílio.",
        superacao: "Com proteção policial, concluiu a investigação que resultou na prisão do agressor. Hoje é consultora de segurança para jornalistas mulheres e desenvolveu um protocolo de proteção para repórteres investigativos.",
        apoio: "Proteção da Polícia Federal, apoio do sindicato dos jornalistas e treinamento em segurança pessoal.",
        tags: ["ameaças", "jornalismo", "investigação", "segurança"]
    },
    {
        id: 27,
        nome: "Bianca Martins",
        idade: 29,
        cidade: "Campinas, SP",
        ano: 2022,
        regiao: "sudeste",
        profissao: "Cientista de Dados",
        agressor: "Ex-namorado",
        duracao: "4 anos",
        detalhes: "Bianca sofria violência psicológica de um namorado que usava seus conhecimentos em tecnologia para vigiá-la. Ele hackeou seu celular e computador, monitorava suas mensagens e localização, e usava essas informações para controlar todos os aspectos de sua vida. Dizia saber 'tudo sobre ela'.",
        superacao: "Especializou-se em segurança digital, hoje trabalha ajudando vítimas de violência digital a protegerem seus dispositivos. Desenvolveu um aplicativo que detecta spyware em celulares.",
        apoio: "Apoio de especialistas em segurança digital, terapia e rede de mulheres em tecnologia.",
        tags: ["violência digital", "hacking", "tecnologia", "segurança digital"]
    },
    {
        id: 28,
        nome: "Camila Ribeiro",
        idade: 36,
        cidade: "Brasília, DF",
        ano: 2021,
        regiao: "centro-oeste",
        profissao: "Diplomata",
        agressor: "Superior hierárquico",
        duracao: "2 anos",
        detalhes: "Em missão no exterior, Camila sofria assédio sexual de seu embaixador. Ele a ameaçava com repatriamento e fim da carreira se não cedesse a seus avanços. Isolada em outro país, sem rede de apoio, sentia-se completamente vulnerável.",
        superacao: "Registrou queixa formal no Itamaraty, foi transferida para outra missão e hoje é embaixadora adjunta. Lidera um comitê interno para prevenção de assédio no serviço exterior.",
        apoio: "Apoio da associação dos diplomatas, comissão de ética do Itamaraty e rede de diplomatas mulheres.",
        tags: ["assédio institucional", "diplomacia", "exterior", "liderança"]
    },
    {
        id: 29,
        nome: "Débora Silva",
        idade: 44,
        cidade: "Vitória, ES",
        ano: 2023,
        regiao: "sudeste",
        profissao: "Capitã da Marinha Mercante",
        agressor: "Tripulantes",
        duracao: "10 anos",
        detalhes: "Como uma das poucas mulheres em posição de comando na marinha mercante, Débora sofria assédio constante da tripulação. Sabotavam seu trabalho, ignoravam suas ordens e faziam 'pegadinhas' perigosas. Em uma viagem, chegaram a desativar sistemas do navio para fazê-la parecer incompetente.",
        superacao: "Documentou todas as situações, processou a empresa e ganhou uma ação histórica. Hoje comanda o maior navio petroleiro do país e implementou políticas de diversidade na empresa.",
        apoio: "Apoio da autoridade marítima, sindicato dos oficiais e associação de mulheres na marinha.",
        tags: ["assédio profissional", "marinha", "comando", "diversidade"]
    },
    {
        id: 30,
        nome: "Elaine Costa",
        idade: 39,
        cidade: "João Pessoa, PB",
        ano: 2022,
        regiao: "nordeste",
        profissao: "Pastora Evangélica",
        agressor: "Liderança da igreja",
        duracao: "8 anos",
        detalhes: "Elaine enfrentou resistência e perseguição por ser mulher em posição de liderança religiosa. Colegas pastores espalhavam calúnias sobre sua vida pessoal, boicotavam seus cultos e usavam textos bíblicos para justificar que 'mulher não deve liderar'. Chegaram a invadir sua casa para 'expulsar demônios'.",
        superacao: "Fundou sua própria comunidade religiosa inclusiva, com foco no acolhimento de mulheres vítimas de violência. Escreveu um livro sobre mulheres na liderança espiritual.",
        apoio: "Apoio de teólogas feministas, rede de pastoras e organizações ecumênicas.",
        tags: ["perseguição religiosa", "liderança", "teologia", "inclusão"]
    },
    {
        id: 31,
        nome: "Fabiana Oliveira",
        idade: 33,
        cidade: "Manaus, AM",
        ano: 2021,
        regiao: "norte",
        profissao: "Piloto de Avião",
        agressor: "Copiloto",
        duracao: "1 ano",
        detalhes: "Fabiana era a comandante do voo, mas seu copiloto constantemente questionava suas decisões, fazia comentários sexistas sobre mulheres ao volante e em uma ocasião deliberadamente ignorou um alerta de sistema que ela havia identificado, quase causando um acidente.",
        superacao: "Reportou à ANAC, o copiloto foi demitido e ela se especializou em treinamento de equipes com foco em diversidade. Hoje é instrutora de pilotos e palestrante sobre equidade de gênero na aviação.",
        apoio: "Apoio da ANAC, associação de pilotos e programa de mentoria para mulheres na aviação.",
        tags: ["sexismo", "aviação", "liderança", "treinamento"]
    },
    {
        id: 32,
        nome: "Giovanna Santos",
        idade: 26,
        cidade: "Florianópolis, SC",
        ano: 2023,
        regiao: "sul",
        profissao: "Surfista Profissional",
        agressor: "Patrocinador",
        duracao: "2 anos",
        detalhes: "Giovanna dependia financeiramente de um patrocinador que usava esse poder para assediá-la sexualmente. Marcava 'reuniões de trabalho' em locais inapropriados, exigia que ela usasse roupas específicas para fotos e ameaçava cortar o patrocínio se não atendesse suas exigências.",
        superacao: "Denunciou publicamente, conseguiu novos patrocínios de marcas com políticas éticas e hoje é campeã nacional. Fundou uma associação que auxilia atletas mulheres a negociarem contratos com segurança.",
        apoio: "Apoio de outras atletas, advogada especializada em direito esportivo e rede de mulheres no esporte.",
        tags: ["assédio esportivo", "patrocínio", "surfe", "associação"]
    },
    {
        id: 33,
        nome: "Heloísa Fernandes",
        idade: 48,
        cidade: "Porto Alegre, RS",
        ano: 2022,
        regiao: "sul",
        profissao: "Juíza",
        agressor: "Colega de tribunal",
        duracao: "5 anos",
        detalhes: "Heloísa julgava casos de violência doméstica quando começou a receber ameaças de um colega juiz que discordava de suas sentenças. Ele a perseguia nos corredores do tribunal, fazia comentários depreciivos sobre suas decisões e em uma ocasião adulterou processos para prejudicá-la.",
        superacao: "Denunciou ao CNJ, o colega foi afastado e ela se especializou em direito das mulheres. Hoje é desembargadora e referência nacional em jurisprudência de gênero.",
        apoio: "Apoio da associação dos magistrados, CNJ e rede de juízas feministas.",
        tags: ["assédio institucional", "justiça", "jurisprudência", "liderança"]
    },
    {
        id: 34,
        nome: "Isis Martins",
        idade: 30,
        cidade: "Salvador, BA",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Mãe de Santo",
        agressor: "Lideranças religiosas rivais",
        duracao: "4 anos",
        detalhes: "Isis liderava um terreiro de candomblé quando começou a sofrer perseguição religiosa e racista. Seu terreiro foi pichado com ofensas, clientes eram ameaçados e em uma noite, incendiários tentaram queimar o local com ela e suas filhas-de-santo dentro.",
        superacao: "Com apoio da comunidade, reconstruiu o terreiro e hoje oferece atendimento gratuito a mulheres vítimas de violência. Tornou-se ativista pelos direitos das religiões de matriz africana.",
        apoio: "Apoio de organizações do movimento negro, Ministério Público e rede de terreiros.",
        tags: ["racismo religioso", "candomblé", "ativismo", "comunidade"]
    },
    {
        id: 35,
        nome: "Júlia Costa",
        idade: 37,
        cidade: "Fortaleza, CE",
        ano: 2023,
        regiao: "nordeste",
        profissao: "Taxista",
        agressor: "Passageiro e colegas de trabalho",
        duracao: "3 anos",
        detalhes: "Como uma das poucas mulheres taxistas da cidade, Júlia sofria assédio constante de passageiros e discriminação de colegas homens. Roubavam sua clientela, danificavam seu táxi e passageiros tentavam agredi-la sexualmente durante corridas noturnas.",
        superacao: "Organizou uma cooperativa de taxistas mulheres, com sistema de segurança mútua e treinamento em defesa pessoal. Hoje a cooperativa tem mais de 50 associadas.",
        apoio: "Apoio do sindicato dos taxistas, treinamento em segurança e incubadora de cooperativas.",
        tags: ["discriminação", "transporte", "cooperativa", "segurança"]
    },
    {
        id: 36,
        nome: "Kelly Silva",
        idade: 41,
        cidade: "Goiânia, GO",
        ano: 2022,
        regiao: "centro-oeste",
        profissao: "Caminhoneira",
        agressor: "Colegas de estrada",
        duracao: "8 anos",
        detalhes: "Kelly enfrentava violência constante nas estradas. Em postos de combustível, colegas homens a assediavam, em restaurantes a serviam por último, e em uma ocasião, um grupo tentou invadir sua cabine durante a noite. Isolada por dias nas estradas, sentia-se extremamente vulnerável.",
        superacao: "Criou um aplicativo que conecta caminhoneiras para viagens em comboio e indica postos seguros. Hoje lidera uma associação nacional de mulheres caminhoneiras.",
        apoio: "Apoio da PRF, sindicato dos caminhoneiros e programa de segurança nas estradas.",
        tags: ["estradas", "caminhoneira", "tecnologia", "associação"]
    },
    {
        id: 37,
        nome: "Larissa Mendes",
        idade: 34,
        cidade: "Curitiba, PR",
        ano: 2021,
        regiao: "sul",
        profissao: "Médica Veterinária de Grandes Animais",
        agressor: "Clientes e colegas",
        duracao: "6 anos",
        detalhes: "Larissa trabalhava com animais de grande porte (bovinos, equinos) em propriedades rurais. Clientes duvidavam de sua capacidade por ser mulher, recusavam-se a pagar seus serviços e em uma fazenda, um dono tentou agredi-la sexualmente no meio do pasto, longe de qualquer ajuda.",
        superacao: "Especializou-se em bem-estar animal e abriu uma clínica própria. Desenvolveu um protocolo de segurança para profissionais mulheres que trabalham em áreas rurais isoladas.",
        apoio: "Apoio do conselho de veterinária, associação de mulheres rurais e treinamento em segurança.",
        tags: ["área rural", "veterinária", "isolamento", "protocolo segurança"]
    },
    {
        id: 38,
        nome: "Marina Alves",
        idade: 29,
        cidade: "Natal, RN",
        ano: 2023,
        regiao: "nordeste",
        profissao: "Engenheira Civil de Obra",
        agressor: "Operários e engenheiros colegas",
        duracao: "4 anos",
        detalhes: "Como engenheira responsável por grandes obras, Marina enfrentava resistência diária. Operários ignoravam suas ordens de segurança, colegas a excluíam de reuniões importantes e sabotavam seus projetos. Em uma obra, alteraram deliberadamente suas especificações, causando um acidente que poderia tê-la matado.",
        superacao: "Processou a empresa, ganhou uma indenização recorde e abriu sua própria construtora com foco em segurança e equidade. Hoje só contrata mulheres para posições de liderança.",
        apoio: "Apoio do CREA, associação de engenheiras e mentoria em empreendedorismo.",
        tags: ["sabotagem", "engenharia", "construtora", "liderança feminina"]
    },
    {
        id: 39,
        nome: "Nádia Pereira",
        idade: 52,
        cidade: "Belém, PA",
        ano: 2022,
        regiao: "norte",
        profissao: "Pescadora Artesanal",
        agressor: "Colegas pescadores e intermediários",
        duracao: "20 anos",
        detalhes: "Nádia pescava desde adolescente, mas os colegas homens a impediam de acessar os melhores pontos de pesca, roubavam seu pescado e os intermediários pagavam preços mais baixos pelo seu peixe. Quando denunciava, era ameaçada de ter seu barco afundado.",
        superacao: "Organizou uma cooperativa de pescadoras que negocia diretamente com restaurantes, eliminando intermediários. Hoje exportam para outros estados e têm uma marca própria.",
        apoio: "Apoio da colônia de pescadores, SEBRAE e programa de economia solidária.",
        tags: ["pesca", "cooperativa", "comercialização", "empoderamento econômico"]
    },
    {
        id: 40,
        nome: "Olívia Santos",
        idade: 45,
        cidade: "Maceió, AL",
        ano: 2021,
        regiao: "nordeste",
        profissao: "Catadora de Materiais Recicláveis",
        agressor: "Colegas catadores e donos de ferro-velho",
        duracao: "10 anos",
        detalhes: "Olívia trabalhava coletando materiais recicláveis quando começou a ser assediada por colegas no galpão de triagem. Roubavam seus materiais mais valiosos, ameaçavam-na quando ela reclamava e os donos do ferro-velho pagavam preços mais baixos para mulheres.",
        superacao: "Fundou uma cooperativa exclusivamente feminina que hoje tem contrato com a prefeitura para coleta seletiva. Implementou um sistema de segurança e apoio mútuo entre as catadoras.",
        apoio: "Apoio do movimento nacional de catadores, prefeitura e ONGs ambientais.",
        tags: ["reciclagem", "cooperativa", "coleta seletiva", "organização coletiva"]
    },
    {
        id: 41,
        nome: "Patrícia Lima",
        idade: 38,
        cidade: "Rio Branco, AC",
        ano: 2023,
        regiao: "norte",
        profissao: "Guia de Turismo na Floresta",
        agressor: "Colegas guias e clientes",
        duracao: "8 anos",
        detalhes: "Patrícia conduzia grupos na floresta amazônica quando começou a sofrer assédio de clientes durante expedições de vários dias. Colegas homens espalhavam que ela 'não era confiável' para guiar grupos grandes e em uma expedição, um cliente tentou agredi-la sexualmente durante a noite, far de qualquer socorro.",
        superacao: "Especializou-se em expedições apenas para mulheres, criou roteiros focados em conhecimento tradicional feminino e hoje treina outras mulheres como guias. Desenvolveu um protocolo de segurança para turismo na floresta.",
        apoio: "Apoio da associação de guias, órgãos de turismo e comunidades tradicionais.",
        tags: ["turismo", "floresta", "segurança", "conhecimento tradicional"]
    }
];

// DOM Elements
const relatosContainer = document.getElementById('relatosContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const yearFilter = document.getElementById('yearFilter');
const regionFilter = document.getElementById('regionFilter');
const resetFilters = document.getElementById('resetFilters');
const backBtn = document.getElementById('backBtn');
const modal = document.getElementById('relatoModal');
const closeModal = document.querySelector('.close-modal');
const modalContent = document.getElementById('modalContent');

// Render relatos
function renderRelatos(filteredRelatos = relatos) {
    relatosContainer.innerHTML = '';
    
    if (filteredRelatos.length === 0) {
        relatosContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--medium-gray); margin-bottom: 20px;"></i>
                <h3 style="color: var(--primary-color); margin-bottom: 10px;">Nenhum relato encontrado</h3>
                <p>Tente ajustar os filtros ou usar termos de busca diferentes.</p>
            </div>
        `;
        return;
    }
    
    filteredRelatos.forEach(relato => {
        const relatoCard = document.createElement('div');
        relatoCard.className = 'relato-card';
        relatoCard.innerHTML = `
            <div class="relato-image">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="relato-content">
                <h3 class="relato-title">${relato.nome}</h3>
                <div class="relato-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${relato.cidade}</span>
                    <span><i class="fas fa-calendar-alt"></i> ${relato.ano}</span>
                    <span><i class="fas fa-user"></i> ${relato.idade} anos</span>
                </div>
                <p class="relato-excerpt">${relato.detalhes.substring(0, 150)}...</p>
                <button class="read-more-btn" data-id="${relato.id}">
                    <i class="fas fa-book-open"></i> Ler história completa
                </button>
            </div>
        `;
        relatosContainer.appendChild(relatoCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            openModal(id);
        });
    });
}

// Filter relatos
function filterRelatos() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedRegion = regionFilter.value;
    
    const filtered = relatos.filter(relato => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            relato.nome.toLowerCase().includes(searchTerm) ||
            relato.cidade.toLowerCase().includes(searchTerm) ||
            relato.profissao.toLowerCase().includes(searchTerm) ||
            relato.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Year filter
        const matchesYear = selectedYear === 'all' || relato.ano.toString() === selectedYear;
        
        // Region filter
        const matchesRegion = selectedRegion === 'all' || relato.regiao === selectedRegion;
        
        return matchesSearch && matchesYear && matchesRegion;
    });
    
    // Update stats
    document.getElementById('totalRelatos').textContent = filtered.length;
    
    renderRelatos(filtered);
}

// Open modal with detailed view
function openModal(id) {
    const relato = relatos.find(r => r.id === id);
    if (!relato) return;
    
    modalContent.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 20px; font-family: 'Merriweather', serif;">${relato.nome}</h2>
        
        <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px; background-color: var(--light-gray); padding: 20px; border-radius: 10px;">
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: var(--secondary-color); margin-bottom: 10px;"><i class="fas fa-user"></i> Informações Pessoais</h4>
                <p><strong>Idade:</strong> ${relato.idade} anos</p>
                <p><strong>Cidade:</strong> ${relato.cidade}</p>
                <p><strong>Profissão:</strong> ${relato.profissao}</p>
                <p><strong>Ano do relato:</strong> ${relato.ano}</p>
            </div>
            
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: var(--secondary-color); margin-bottom: 10px;"><i class="fas fa-exclamation-triangle"></i> Situação de Violência</h4>
                <p><strong>Agressor:</strong> ${relato.agressor}</p>
                <p><strong>Duração:</strong> ${relato.duracao}</p>
                <p><strong>Região:</strong> ${relato.regiao.toUpperCase()}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h4 style="color: var(--secondary-color); margin-bottom: 15px;"><i class="fas fa-book"></i> História Completa</h4>
            <p style="line-height: 1.8; text-align: justify;">${relato.detalhes}</p>
        </div>
        
        <div style="margin-bottom: 30px; background-color: #e8f6f3; padding: 20px; border-radius: 10px; border-left: 5px solid #2ecc71;">
            <h4 style="color: #27ae60; margin-bottom: 15px;"><i class="fas fa-seedling"></i> Processo de Superação</h4>
            <p style="line-height: 1.8;">${relato.superacao}</p>
        </div>
        
        <div style="margin-bottom: 30px; background-color: #ebf5fb; padding: 20px; border-radius: 10px; border-left: 5px solid #3498db;">
            <h4 style="color: #2980b9; margin-bottom: 15px;"><i class="fas fa-hands-helping"></i> Rede de Apoio</h4>
            <p style="line-height: 1.8;">${relato.apoio}</p>
        </div>
        
        <div style="margin-top: 30px;">
            <h4 style="color: var(--secondary-color); margin-bottom: 15px;"><i class="fas fa-tags"></i> Palavras-chave</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                ${relato.tags.map(tag => `<span style="background-color: var(--light-color); padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-top: 40px; padding: 20px; background-color: #fef9e7; border-radius: 10px; text-align: center;">
            <p style="color: #7d6608; font-style: italic;">
                <i class="fas fa-quote-left"></i> Esta história inspira esperança e mostra que a reconstrução é possível com apoio e determinação. 
                Se você está passando por situação similar, saiba que não está sozinha e que ajuda está disponível. 
                <i class="fas fa-quote-right"></i>
            </p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModalFunc() {
    modal.style.display = 'none';
}

// Event Listeners
searchInput.addEventListener('input', filterRelatos);
searchBtn.addEventListener('click', filterRelatos);
yearFilter.addEventListener('change', filterRelatos);
regionFilter.addEventListener('change', filterRelatos);
resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    yearFilter.value = 'all';
    regionFilter.value = 'all';
    filterRelatos();
});

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Keyboard shortcut for back button
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalFunc();
    }
    if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        window.location.href = 'index.html';
    }
});

// Initialize
renderRelatos();