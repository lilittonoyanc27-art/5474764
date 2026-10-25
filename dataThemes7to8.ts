import { ThemeModule } from './types.ts';

export const themes7to8: ThemeModule[] = [
  {
    id: 7,
    slug: 'literatura-popular',
    badge: 'TEMA 7',
    iconName: 'Flame',
    title: {
      es: 'La literatura popular',
      hy: 'Ժողովրդական գրականություն',
    },
    subtitle: {
      es: 'Transmisión oral, romances, mitos, leyendas y cuentos tradicionales',
      hy: 'Բանավոր փոխանցում, ռոմանսներ, առասպելներ, ավանդազրույցներ և ժողովրդական հեքիաթներ',
    },
    description: {
      es: 'Conoce las creaciones anónimas transmitidas de boca en boca de generación en generación: canciones populares, romances, mitos cosmogónicos, leyendas locales y cuentos de hadas tradicionales.',
      hy: 'Ծանոթացի՛ր սերնդեսերունդ բանավոր փոխանցված անհեղինակ ստեղծագործություններին՝ ժողովրդական երգեր, ռոմանսներ, առասպելներ, ավանդազրույցներ և հեքիաթներ։',
    },
    theory: [
      {
        id: 't7-rasgos',
        title: {
          es: 'Rasgos de la literatura popular y tradicional',
          hy: 'Ժողովրդական և ավանդական գրականության հատկանիշները',
        },
        summary: {
          es: 'Nace en el seno del pueblo, se transmite de memoria por la voz y se recrea en cada interpretación.',
          hy: 'Ծնվում է ժողովրդի գրկում, փոխանցվում է անգիր՝ ձայնի միջոցով, և նորոգվում ամեն մի կատարման ժամանակ։',
        },
        content: [
          {
            es: '• Transmisión oral (Բանավոր փոխանցում): Se canta o cuenta de padres a hijos sin necesidad de soporte escrito.',
            hy: '• Բանավոր փոխանցում՝ երգվում կամ պատմվում է հորից որդուն՝ առանց գրավոր գրքի անհրաժեշտության։',
          },
          {
            es: '• Carácter anónimo (Անհեղինակ բնույթ): No tiene un autor individual firmado; pertenece a toda la comunidad.',
            hy: '• Անհեղինակություն՝ չունի ստորագրված կոնկրետ հեղինակ, պատկանում է ողջ ժողովրդին։',
          },
          {
            es: '• Variantes (Տարբերակներ): Al pasar de boca en boca, cada narrador añade, quita o cambia detalles, generando múltiples versiones de una misma historia.',
            hy: '• Տարբերակայնություն՝ բերանից բերան անցնելիս յուրաքանչյուր պատմող ավելացնում կամ փոխում է մանրամասներ՝ ստեղծելով նույն պատմության բազմաթիվ տարբերակներ։',
          },
          {
            es: '• Recursos orales (Բանավոր խոսքի հնարքներ): Empleo frecuente de repeticiones, estribillos, llamadas de atención al receptor ("Oíd, señores..."), fórmulas fijas y onomatopeyas.',
            hy: '• Բանավոր խոսքի հնարքներ՝ կրկներգեր, կրկնություններ, լսողի ուշադրությունը գրավող դիմումներ («Լսե՛ք, պարոնայք»), կայուն բանաձևեր։',
          },
        ],
      },
      {
        id: 't7-generos',
        title: {
          es: 'Subgéneros populares imprescindibles',
          hy: 'Ժողովրդական գրականության հիմնական ժանրերը',
        },
        summary: {
          es: 'El romance, la leyenda, el mito y el cuento tradicional tienen diferencias cruciales que debes dominar.',
          hy: 'Ռոմանսը, ավանդազրույցը, առասպելը և ժողովրդական հեքիաթը ունեն էական տարբերություններ, որոնք պետք է իմանաս։',
        },
        content: [
          {
            es: '1. Romance (Ռոմանս): Poema narrativo típicamente español compuesto por una serie indefinida de versos octosílabos (8 sílabas), con rima asonante en los versos pares (2, 4, 6...) y versos impares sueltos (libres). Cantaba hazañas heroicas, amores y sucesos trágicos.',
            hy: '1. Ռոմանս (Romance)՝ իսպանական ավանդական չափածո պատմություն՝ կազմված 8-վանկանի (octosílabos) տողերից, որտեղ զույգ տողերը (2, 4, 6...) ունեն ձայնավորային հանգ (rima asonante), իսկ կենտ տողերը ազատ են։',
          },
          {
            es: '2. Mito (Առասպել): Relato tradicional sagrado cuyos protagonistas son dioses, semidioses o héroes legendarios. Explica el origen del universo, los seres humanos o las fuerzas de la naturaleza (ej. el carro del Sol de Apolo, el mito del Minotauro).',
            hy: '2. Առասպել (Mito)՝ սրբազան ավանդական զրույց աստվածների ու հերոսների մասին, որը բացատրում է տիեզերքի, մարդկության կամ բնության ուժերի ծագումը։',
          },
          {
            es: '3. Leyenda (Ավանդազրույց/Լեգենդ): Narración popular que parte de un hecho, lugar o personaje histórico y real concreto, pero enriquecido con elementos sobrenaturales, milagrosos o fantásticos (ej. la dama blanca de un castillo real, la cueva de Salamanca).',
            hy: '3. Ավանդազրույց (Leyenda)՝ ժողովրդական պատմություն, որը հիմնված է իրական պատմական վայրի, դեպքի կամ անձի վրա, բայց պարունակում է գերբնական կամ հրաշապատում տարրեր։',
          },
          {
            es: '4. Cuento tradicional (Ժողովրդական հեքիաթ): Narración breve ficticia transmitida oralmente, ambientada en un lugar y tiempo indeterminados ("Había una vez..."), con personajes planos y arquetípicos (la bruja mala, el príncipe valiente, el hermano menor bondadoso) y moraleja final.',
            hy: '4. Ժողովրդական հեքիաթ (Cuento tradicional)՝ կարճ հորինված բանավոր պատմություն անորոշ ժամանակում և վայրում («Կար-չկար մի ժամանակ...»), տիպական կերպարներով և բարոյախրատական ավարտով։',
          },
        ],
        rules: [
          {
            name: { es: 'Estructura de la narración', hy: 'Պատմվածքի կառուցվածքը' },
            desc: {
              es: '• Planteamiento / Inicio: Presenta a los personajes, tiempo y lugar.\n• Nudo: Surge el conflicto, la aventura o el problema.\n• Desenlace: Se soluciona el conflicto, bien sea de modo feliz o trágico.',
              hy: '• Սկիզբ (Planteamiento)՝ կերպարների, վայրի և ժամանակի ծանոթացում։\n• Հանգույց (Nudo)՝ կոնֆլիկտի կամ արկածի ծագում։\n• Հանգուցալուծում (Desenlace)՝ կոնֆլիկտի լուծումը։',
            },
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex7-1',
        title: { es: 'Fragmento de Romance español', hy: 'Իսպանական ռոմանսի հատված' },
        text: {
          es: 'Que por mayo era, por mayo,\ncuando hace la calor,\ncuando los trigos encañan\ny están los campos en flor...',
          hy: 'Մայիսն էր, մայիսը,\nԵրբ շոգ է լինում,\nԵրբ ցորենն է հասկակալում,\nԵվ դաշտերը ծաղկում են...',
        },
        analysis: {
          es: 'Versos de ocho sílabas. Riman en asonante las líneas pares (-or, -or en calor/flor). Expresión típica de la lírica tradicional española.',
          hy: 'Ութվանկանի տողեր։ Զույգ տողերը հանգավորվում են ձայնավորային հանգով (calor/flor)։ Իսպանական ժողովրդական քնարերգության դասական նմուշ։',
        },
        tag: { es: 'Romance tradicional', hy: 'Ավանդական ռոմանս' },
        type: 'popular',
      },
    ],
    practiceExerciseIds: ['q-t7-1', 'q-t7-2', 'q-t7-3', 'q-t7-4', 'q-t7-5', 'q-t7-6', 'q-t7-7', 'q-t7-8', 'q-t7-9', 'q-t7-10', 'q-t7-11', 'q-t7-12', 'q-t7-13', 'q-t7-14', 'q-t7-15'],
    examExerciseIds: ['q-t7-1', 'q-t7-3', 'q-t7-6', 'q-t7-9', 'q-t7-12', 'q-t7-15'],
  },
  {
    id: 8,
    slug: 'literatura-culta',
    badge: 'TEMA 8',
    iconName: 'Award',
    title: {
      es: 'La literatura culta',
      hy: 'Հեղինակային գրականություն',
    },
    subtitle: {
      es: 'Autor conocido, fijación escrita, estilo elaborado y tabla comparativa',
      hy: 'Հայտնի հեղինակ, գրավոր ամրագրում, մշակված ոճ և համեմատական աղյուսակ',
    },
    description: {
      es: 'Descubre las obras creadas por escritores individuales reconocidos, fijadas en texto escrito inalterable y con una elaboración formal y estilística compleja.',
      hy: 'Բացահայտի՛ր անհատ գրողների ստեղծագործությունները՝ գրավոր ամրագրված անփոփոխ տեքստով և բարդ գեղարվեստական մշակմամբ։',
    },
    theory: [
      {
        id: 't8-culta',
        title: {
          es: 'Rasgos de la literatura culta',
          hy: 'Հեղինակային գրականության հատկանիշները',
        },
        summary: {
          es: 'Es la literatura escrita por autores individuales con un propósito estético premeditado y fijada en libros.',
          hy: 'Անհատ հեղինակների կողմից գրված գրականությունն է՝ կանխամտածված գեղագիտական նպատակով և ամրագրված գրքերում։',
        },
        content: [
          {
            es: '• Autor conocido y reconocido (Հայտնի հեղինակ): La obra lleva la firma de su creador (Miguel de Cervantes, Gustavo Adolfo Bécquer, Federico García Lorca).',
            hy: '• Հայտնի հեղինակ՝ ստեղծագործությունը կրում է իր հեղինակի անունը (Սերվանտես, Բեկեր, Լորկա)։',
          },
          {
            es: '• Fijación escrita inalterable (Գրավոր ամրագրում): Se transmite mediante la escritura e imprenta. El texto no cambia con el tiempo; permanece tal como el autor lo concibió.',
            hy: '• Գրավոր ամրագրում՝ փոխանցվում է գրի և տպագրության միջոցով։ Տեքստը չի փոխվում ժամանակի ընթացքում, մնում է այնպես, ինչպես հեղինակն է ստեղծել։',
          },
          {
            es: '• Lenguaje muy elaborado (Խնամքով մշակված լեզու): Gran riqueza de vocabulario, sintaxis compleja y uso consciente y refinado de figuras literarias.',
            hy: '• Խնամքով մշակված լեզու՝ բառապաշարի մեծ հարստություն, բարդ շարահյուսություն և ոճական հնարքների գիտակցված կիրառում։',
          },
          {
            es: '• Destinatario lector (Ընթերցող լսարան): Pensada para una lectura individual, reflexiva y sosegada.',
            hy: '• Ընթերցող լսարան՝ նախատեսված է անհատական, խոհական և հանգիստ ընթերցանության համար։',
          },
        ],
      },
      {
        id: 't8-comparativa',
        title: {
          es: 'Tabla comparativa: Popular vs. Culta',
          hy: 'Համեմատական աղյուսակ՝ Ժողովրդական ընդդեմ Հեղինակայինի',
        },
        summary: {
          es: 'Comparación sistemática de ambas manifestaciones literarias:',
          hy: 'Երկու գրական դրսևորումների համակարգված համեմատություն.',
        },
        content: [
          {
            es: '1. Autoría: Popular = Anónima, colectiva. Culta = Autor individual con nombre y apellidos.',
            hy: '1. Հեղինակություն՝ Ժողովրդական = Անհեղինակ, հավաքական։ Հեղինակային = Կոնկրետ հայտնի հեղինակ։',
          },
          {
            es: '2. Transmisión: Popular = Oral (de voz en voz, cantada). Culta = Escrita (libros, manuscritos, imprenta).',
            hy: '2. Փոխանցում՝ Ժողովրդական = Բանավոր (երգվում է, պատմվում)։ Հեղինակային = Գրավոր (գրքեր, տպագրություն)։',
          },
          {
            es: '3. Estabilidad del texto: Popular = Múltiples versiones y variantes. Culta = Texto fijo y definitivo.',
            hy: '3. Տեքստի կայունություն՝ Ժողովրդական = Բազմաթիվ տարբերակներ։ Հեղինակային = Հաստատուն և անփոփոխ տեքստ։',
          },
          {
            es: '4. Lenguaje: Popular = Sencillo, coloquial, con repeticiones. Culta = Complejo, culto, muy elaborado.',
            hy: '4. Լեզու՝ Ժողովրդական = Պարզ, խոսակցական, կրկնվող բանաձևերով։ Հեղինակային = Բարդ, հարուստ, բարձր ոճով։',
          },
          {
            es: '5. Difusión: Popular = En plazas, celebraciones, hogar. Culta = En bibliotecas, academias y librerías.',
            hy: '5. Տարածում՝ Ժողովրդական = Հրապարակներում, տոներին, տանը։ Հեղինակային = Գրադարաններում, գրախանութներում։',
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex8-1',
        title: { es: 'Fragmento de "Don Quijote de la Mancha" de Cervantes', hy: 'Հատված Սերվանտեսի «Դոն Կիխոտից»' },
        text: {
          es: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
          hy: 'Լա Մանչայի մի գյուղում, որի անունը հիշել չեմ ցանկանում, ոչ վաղ անցյալում ապրում էր մի իդալգո՝ նիզակը հենարանին, հնամաշ վահանով, նիհար ձիով ու որսաշնով։',
        },
        analysis: {
          es: 'Obra escrita cumbre de autor conocido mundialmente (Miguel de Cervantes). Posee un texto fijo, fijado por la imprenta en 1605.',
          hy: 'Համաշխարհային հռչակ վայելող հայտնի հեղինակի (Սերվանտես) գրավոր գլուխգործոցը։ Ունի անփոփոխ տեքստ՝ տպագրված 1605 թվականին։',
        },
        tag: { es: 'Literatura culta escrita', hy: 'Գրավոր հեղինակային գրականություն' },
        type: 'culta',
      },
    ],
    practiceExerciseIds: ['q-t8-1', 'q-t8-2', 'q-t8-3', 'q-t8-4', 'q-t8-5', 'q-t8-6', 'q-t8-7', 'q-t8-8', 'q-t8-9', 'q-t8-10', 'q-t8-11', 'q-t8-12', 'q-t8-13', 'q-t8-14', 'q-t8-15'],
    examExerciseIds: ['q-t8-1', 'q-t8-3', 'q-t8-6', 'q-t8-9', 'q-t8-12', 'q-t8-15'],
  },
];
