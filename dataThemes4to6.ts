import { ThemeModule } from './types.ts';

export const themes4to6: ThemeModule[] = [
  {
    id: 4,
    slug: 'funciones-del-lenguaje',
    badge: 'TEMA 4',
    iconName: 'MessageSquare',
    title: {
      es: 'Las funciones del lenguaje',
      hy: 'Լեզվի գործառույթները',
    },
    subtitle: {
      es: 'La intención del hablante al comunicarse',
      hy: 'Խոսողի նպատակադրումը հաղորդակցվելիս',
    },
    description: {
      es: 'Aprende las 6 funciones del lenguaje según Roman Jakobson: referencial, expresiva, apelativa, fática, metalingüística y poética, con sus rasgos y ejemplos.',
      hy: 'Սովորիր լեզվի 6 գործառույթները՝ հաղորդողական, զգացմունքային, կոչական-ներգործական, շփման, մետալեզվական և բանաստեղծական։',
    },
    theory: [
      {
        id: 't4-overview',
        title: {
          es: '¿Qué son las funciones del lenguaje?',
          hy: 'Ի՞նչ են լեզվի գործառույթները',
        },
        summary: {
          es: 'Son los diferentes objetivos o intenciones con los que un emisor utiliza la lengua al comunicarse.',
          hy: 'Լեզվի տարբեր նպատակներն են, որոնցով հաղորդողը կիրառում է լեզուն հաղորդակցվելիս։',
        },
        content: [
          {
            es: 'Siempre que hablamos o escribimos lo hacemos con un propósito: informar de un hecho, expresar un sentimiento, convencer a alguien, comprobar si nos oyen, hablar sobre el propio idioma o crear arte.',
            hy: 'Ամեն անգամ, երբ խոսում կամ գրում ենք, մենք դա անում ենք որոշակի նպատակով՝ փաստ հաղորդել, զգացմունք արտահայտել, համոզել որևէ մեկին, ստուգել կապը, խոսել հենց լեզվի մասին կամ արվեստ ստեղծել։',
          },
          {
            es: 'Cada función se centra en uno de los elementos de la comunicación (emisor, receptor, mensaje, código, canal o contexto).',
            hy: 'Յուրաքանչյուր գործառույթ կենտրոնանում է հաղորդակցության տարրերից մեկի վրա (խոսող, լսող, հաղորդագրություն, կոդ, կապուղի կամ իրադրություն)։',
          },
        ],
        rules: [
          {
            name: { es: '1. Función referencial o representativa', hy: '1. Հաղորդողական (տեղեկատվական) գործառույթ' },
            desc: {
              es: 'Informa objetivamente sobre la realidad o contexto exterior, sin emociones ni juicios. Ejemplo: "La capital de España es Madrid".',
              hy: 'Օբյեկտիվորեն տեղեկացնում է իրականության մասին՝ առանց անձնական զգացմունքների։ Օրինակ՝ «Իսպանիայի մայրաքաղաքը Մադրիդն է»։',
            },
          },
          {
            name: { es: '2. Función expresiva o emotiva', hy: '2. Զգացմունքային (էմոցիոնալ) գործառույթ' },
            desc: {
              es: 'Manifiesta los sentimientos, opiniones, estados de ánimo o emociones del emisor. Centrada en el emisor. Ejemplo: "¡Estoy muy feliz de verte!".',
              hy: 'Արտահայտում է խոսողի զգացմունքները, կարծիքները, տրամադրությունը կամ հույզերը։ Օրինակ՝ «Ես շատ ուրախ եմ քեզ տեսնելու համար»։',
            },
          },
          {
            name: { es: '3. Función apelativa o conativa', hy: '3. Կոչական (ներգործական) գործառույթ' },
            desc: {
              es: 'Pretende influir en el receptor para que haga algo, responda o cambie su actitud (órdenes, ruegos, preguntas). Centrada en el receptor. Ejemplo: "Cierra la puerta, por favor".',
              hy: 'Նպատակ ունի ազդել լսողի վրա, որ նա որևէ բան անի կամ պատասխանի (հրաման, խնդրանք, հարց)։ Օրինակ՝ «Փակի՛ր դուռը, խնդրում եմ»։',
            },
          },
          {
            name: { es: '4. Función fática o de contacto', hy: '4. Շփման (հաղորդակցական կապի) գործառույթ' },
            desc: {
              es: 'Sirve para iniciar, mantener, comprobar o interrumpir la comunicación por el canal. Centrada en el canal. Ejemplo: "¿Diga? ¿Me escuchas bien? Adiós".',
              hy: 'Ծառայում է կապուղով հաղորդակցությունը սկսելու, պահպանելու, ստուգելու կամ ընդհատելու համար։ Օրինակ՝ «Լսո՞ւմ ես ինձ։ Ալո՞։ Ցտեսություն»։',
            },
          },
          {
            name: { es: '5. Función metalingüística', hy: '5. Մետալեզվական գործառույթ' },
            desc: {
              es: 'Se utiliza para hablar del propio código, es decir, de la lengua, su gramática, ortografía o significado de palabras. Centrada en el código. Ejemplo: "La palabra \'árbol\' es llana y lleva tilde".',
              hy: 'Օգտագործվում է հենց լեզվի կոդի՝ քերականության, ուղղագրության կամ բառերի իմաստի մասին խոսելու համար։ Օրինակ՝ «"Árbol" բառը շեշտվում է նախավերջին վանկում և ունի շեշտանշան»։',
            },
          },
          {
            name: { es: '6. Función poética o estética', hy: '6. Բանաստեղծական (գեղագիտական) գործառույթ' },
            desc: {
              es: 'Busca llamar la atención sobre la forma artística y bella del propio mensaje mediante recursos literarios y rima. Centrada en el mensaje. Ejemplo: "Tus cabellos son hilos de oro al viento".',
              hy: 'Ձգտում է ուշադրություն հրավիրել հենց հաղորդագրության գեղարվեստական գեղեցկության վրա՝ ոճական հնարքների միջոցով։ Օրինակ՝ «Քո վարսերը ոսկե թելեր են քամու մեջ»։',
            },
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex4-1',
        title: { es: 'Función referencial', hy: 'Հաղորդողական գործառույթ' },
        text: {
          es: 'El examen de Lengua comenzará el próximo lunes a las nueve de la mañana.',
          hy: 'Լեզվի քննությունը կսկսվի հաջորդ երկուշաբթի առավոտյան ժամը իննին։',
        },
        analysis: {
          es: 'Transmite datos objetivos y comprobables sobre el horario sin opiniones personales.',
          hy: 'Փոխանցում է օբյեկտիվ և ստուգելի տվյալներ ժամանակացույցի մասին՝ առանց անձնական կարծիքների։',
        },
        tag: { es: 'Referencial', hy: 'Հաղորդողական' },
      },
      {
        id: 'ex4-2',
        title: { es: 'Función apelativa', hy: 'Կոչական գործառույթ' },
        text: {
          es: '¡Prestad atención a la pizarra y abrid el libro en la página 45!',
          hy: 'Ուշադրությո՛ւն դարձրեք գրատախտակին և բացե՛ք գիրքը 45-րդ էջում։',
        },
        analysis: {
          es: 'Usa verbos en imperativo ("prestad", "abrid") con la intención directa de modificar la conducta de los alumnos (receptores).',
          hy: 'Օգտագործում է հրամայական եղանակի բայեր («ուշադրությո՛ւն դարձրեք», «բացե՛ք»)՝ աշակերտների վարքը փոխելու ուղղակի նպատակով։',
        },
        tag: { es: 'Apelativa', hy: 'Կոչական' },
      },
      {
        id: 'ex4-3',
        title: { es: 'Función metalingüística', hy: 'Մետալեզվական գործառույթ' },
        text: {
          es: 'Los sustantivos son palabras que nombran personas, animales, objetos o ideas.',
          hy: 'Գոյականներն այն բառերն են, որոնք անվանում են անձեր, կենդանիներ, առարկաներ կամ գաղափարներ։',
        },
        analysis: {
          es: 'El enunciado explica un concepto gramatical de la propia lengua española.',
          hy: 'Նախադասությունը բացատրում է հենց իսպաներեն լեզվի քերականական հասկացությունը։',
        },
        tag: { es: 'Metalingüística', hy: 'Մետալեզվական' },
      },
    ],
    practiceExerciseIds: ['q-t4-1', 'q-t4-2', 'q-t4-3', 'q-t4-4', 'q-t4-5', 'q-t4-6', 'q-t4-7', 'q-t4-8', 'q-t4-9', 'q-t4-10', 'q-t4-11', 'q-t4-12', 'q-t4-13', 'q-t4-14', 'q-t4-15'],
    examExerciseIds: ['q-t4-1', 'q-t4-3', 'q-t4-5', 'q-t4-8', 'q-t4-11', 'q-t4-14'],
  },
  {
    id: 5,
    slug: 'comunicacion-y-modalidades',
    badge: 'TEMA 5',
    iconName: 'Radio',
    title: {
      es: 'La comunicación y modalidades oracionales',
      hy: 'Հաղորդակցություն և նախադասությունների տեսակներ',
    },
    subtitle: {
      es: 'Elementos del acto comunicativo y actitud del hablante',
      hy: 'Հաղորդակցական ակտի տարրերը և խոսողի դիրքորոշումը',
    },
    description: {
      es: 'Domina los 6 elementos de la comunicación (emisor, receptor, mensaje, código, canal, contexto) y clasifica las oraciones según la actitud del hablante: enunciativas, interrogativas, exclamativas, imperativas, desiderativas y dubitativas.',
      hy: 'Յուրացրու հաղորդակցության 6 տարրերը և նախադասությունների տեսակներն ըստ խոսողի վերաբերմունքի՝ պատմողական, հարցական, բացականչական, հրամայական, ըղձական և երկբայական։',
    },
    theory: [
      {
        id: 't5-elementos',
        title: {
          es: 'Los 6 elementos de la comunicación',
          hy: 'Հաղորդակցության 6 տարրերը',
        },
        summary: {
          es: 'Cualquier proceso en el que se transmite información requiere seis elementos fundamentales.',
          hy: 'Ցանկացած գործընթաց, որտեղ փոխանցվում է տեղեկություն, պահանջում է վեց հիմնարար տարրեր։',
        },
        content: [
          {
            es: '1. Emisor (Հաղորդող): Quien elabora y transmite el mensaje.',
            hy: '1. Հաղորդող (Emisor)՝ նա, ով կազմում և փոխանցում է հաղորդագրությունը։',
          },
          {
            es: '2. Receptor (Ընդունող/Լսող): Quien recibe y descifra el mensaje.',
            hy: '2. Ընդունող (Receptor)՝ նա, ով ստանում և վերծանում է հաղորդագրությունը։',
          },
          {
            es: '3. Mensaje (Հաղորդագրություն): La información, idea o sentimiento que se transmite.',
            hy: '3. Հաղորդագրություն (Mensaje)՝ տեղեկությունը, միտքը կամ զգացմունքը, որ փոխանցվում է։',
          },
          {
            es: '4. Código (Կոդ/Նշանային համակարգ): El sistema de signos y reglas compartido (ejemplo: el idioma español, código morse).',
            hy: '4. Կոդ (Código)՝ նշանների և կանոնների ընդհանուր համակարգը (օրինակ՝ իսպաներենը, ճանապարհային նշանները)։',
          },
          {
            es: '5. Canal (Կապուղի): El medio físico a través del cual viaja el mensaje (el aire, papel, ondas de radio, cable de fibra óptica).',
            hy: '5. Կապուղի (Canal)՝ նյութական միջավայրը, որով ճամփորդում է հաղորդագրությունը (օդը, թուղթը, ռադիոալիքները, էկրանը)։',
          },
          {
            es: '6. Contexto o situación comunicativa (Իրադրություն/Համատեքստ): Circunstancias de tiempo, lugar y cultura que rodean el acto de comunicación.',
            hy: '6. Համատեքստ (Contexto)՝ ժամանակի, տեղի և միջավայրի հանգամանքները, որոնք շրջապատում են հաղորդակցությունը։',
          },
        ],
      },
      {
        id: 't5-modalidades',
        title: {
          es: 'Modalidades oracionales (Actitud del hablante)',
          hy: 'Նախադասությունների տեսակներն ըստ խոսողի վերաբերմունքի',
        },
        summary: {
          es: 'Según lo que el hablante pretenda expresar con su mensaje, las oraciones se clasifican en:',
          hy: 'Կախված նրանից, թե ինչ է խոսողը ցանկանում արտահայտել, նախադասությունները դասակարգվում են.',
        },
        content: [
          {
            es: '• Enunciativas (Պատմողական): Afirman o niegan un hecho de forma objetiva. Afirmativa: "Hoy es viernes". Negativa: "No vino a clase".',
            hy: '• Պատմողական (Enunciativas)՝ օբյեկտիվորեն հաստատում կամ ժխտում են փաստը։ Դրական՝ «Այսօր ուրբաթ է»։ Ժխտական՝ «Նա դասի չեկավ»։',
          },
          {
            es: '• Interrogativas (Հարցական): Plantean una pregunta para obtener información. Directa: "¿Qué hora tienes?". Indirecta: "Me preguntó qué hora era".',
            hy: '• Հարցական (Interrogativas)՝ հարց են տալիս տեղեկություն ստանալու նպատակով։ «Ժամը քանի՞սն է»։',
          },
          {
            es: '• Exclamativas (Բացականչական): Expresan emociones intensas como sorpresa, alegría, dolor o enfado: "¡Qué golazo tan increíble!".',
            hy: '• Բացականչական (Exclamativas)՝ արտահայտում են բուռն զգացմունքներ (զարմանք, ուրախություն, զայրույթ)՝ «Ինչպիսի՜ հրաշալի գոլ»։',
          },
          {
            es: '• Exhortativas o imperativas (Հրամայական/Հորդորական): Expresan una orden, mandato, ruego o prohibición: "Guarda silencio", "Por favor, ven aquí".',
            hy: '• Հրամայական (Exhortativas/imperativas)՝ արտահայտում են հրաման, պատվեր, խնդրանք կամ արգելք՝ «Լռությո՛ւն պահպանիր», «Արի՛ այստեղ»։',
          },
          {
            es: '• Desiderativas u optativas (Ըղձական): Manifiestan un deseo o anhelo. A menudo usan "ojalá", "que", "deseo": "¡Ojalá apruebe el examen!".',
            hy: '• Ըղձական (Desiderativas)՝ արտահայտում են ցանկություն կամ իղձ («երանի՜», «ցանկանում եմ»)՝ «Երանի՜ հանձնեմ քննությունը»։',
          },
          {
            es: '• Dubitativas (Երկբայական/Կասկած արտահայտող): Expresan duda, probabilidad o incertidumbre. Usan "quizá", "tal vez", "probablemente": "Tal vez llueva mañana".',
            hy: '• Երկբայական (Dubitativas)՝ արտահայտում են կասկած կամ հավանականություն («գուցե», «թերևս»)՝ «Թերևս վաղը անձրև գա»։',
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex5-1',
        title: { es: 'Desiderativa vs. Exhortativa', hy: 'Ըղձական և Հրամայական' },
        text: {
          es: 'Desiderativa: ¡Ojalá tengamos vacaciones pronto!\nExhortativa: Estudia mucho para las vacaciones.',
          hy: 'Ըղձական՝ Երանի՜ շուտ արձակուրդ լինի։\nՀրամայական՝ Շատ սովորի՛ր արձակուրդի համար։',
        },
        analysis: {
          es: 'La primera expresa un deseo interior sin ordenar nada a nadie; la segunda es una instrucción directa dirigida al interlocutor.',
          hy: 'Առաջինը ներքին ցանկություն է արտահայտում՝ ոչ մեկին ոչինչ չպարտադրելով, երկրորդը ուղղակի հանձնարարություն է զրուցակցին։',
        },
        tag: { es: 'Modalidades', hy: 'Նախադասության տեսակներ' },
      },
    ],
    practiceExerciseIds: ['q-t5-1', 'q-t5-2', 'q-t5-3', 'q-t5-4', 'q-t5-5', 'q-t5-6', 'q-t5-7', 'q-t5-8', 'q-t5-9', 'q-t5-10', 'q-t5-11', 'q-t5-12', 'q-t5-13', 'q-t5-14', 'q-t5-15'],
    examExerciseIds: ['q-t5-1', 'q-t5-3', 'q-t5-6', 'q-t5-9', 'q-t5-12', 'q-t5-15'],
  },
  {
    id: 6,
    slug: 'categorias-gramaticales',
    badge: 'TEMA 6',
    iconName: 'Layers',
    title: {
      es: 'Las categorías gramaticales',
      hy: 'Խոսքի մասերը',
    },
    subtitle: {
      es: 'Clases de palabras y su funcionamiento en la lengua española',
      hy: 'Բառերի դասերը և դրանց կիրառությունը իսպաներենում',
    },
    description: {
      es: 'Identifica con total seguridad las 10 categorías gramaticales: sustantivo, pronombre, adjetivo, verbo, adverbio, determinante (incluidos artículos), preposición, conjunción e interjección.',
      hy: 'Վստահորեն ճանաչիր խոսքի 10 մասերը՝ գոյական, դերանուն, ածական, բայ, մակբայ, որոշիչ (այդ թվում՝ հոդեր), նախդիր, շաղկապ և ձայնարկություն։',
    },
    theory: [
      {
        id: 't6-clases',
        title: {
          es: 'Las 10 clases de palabras de 1.º de ESO',
          hy: '7-րդ դասարանի խոսքի 10 մասերը',
        },
        summary: {
          es: 'Cada palabra en español pertenece a una categoría según su forma y función.',
          hy: 'Իսպաներենում յուրաքանչյուր բառ պատկանում է որոշակի խոսքի մասի՝ ըստ ձևի և պաշտոնի։',
        },
        content: [
          {
            es: '1. Sustantivo o nombre (Գոյական): Nombra seres, objetos, lugares, ideas o sentimientos (casa, perro, Madrid, libertad, alegría).',
            hy: '1. Գոյական (Sustantivo)՝ անվանում է էակներ, առարկաներ, վայրեր, գաղափարներ կամ զգացմունքներ (տուն, շուն, Մադրիդ, ազատություն, ուրախություն)։',
          },
          {
            es: '2. Pronombre (Դերանուն): Sustituye al sustantivo y no va acompañando a un nombre (yo, tú, él, ellos, esto, quién, alguien, nadie).',
            hy: '2. Դերանուն (Pronombre)՝ փոխարինում է գոյականին և չի ուղեկցում գոյականի (ես, դու, նա, սա, ով, ինչ-որ մեկը, ոչ ոք)։',
          },
          {
            es: '3. Adjetivo (Ածական): Acompaña al sustantivo para expresar una cualidad o estado (alto, brillante, azul, alegre, inteligente).',
            hy: '3. Ածական (Adjetivo)՝ բնորոշում է գոյականին՝ արտահայտելով հատկանիշ կամ վիճակ (բարձրահասակ, փայլուն, կապույտ, ուրախ, խելացի)։',
          },
          {
            es: '4. Verbo (Բայ): Expresa acciones, estados o procesos situados en el tiempo (cantar, correr, existía, aprendemos, jugaron).',
            hy: '4. Բայ (Verbo)՝ արտահայտում է գործողություն, վիճակ կամ գործընթաց ժամանակի մեջ (երգել, վազել, սովորում ենք, խաղացին)։',
          },
          {
            es: '5. Adverbio (Մակբայ): Palabra invariable que modifica a un verbo, a un adjetivo o a otro adverbio (ayer, rápidamente, muy, aquí, jamás).',
            hy: '5. Մակբայ (Adverbio)՝ անփոփոխ բառ, որը լրացնում է բային, ածականին կամ այլ մակբայի (երեկ, արագորեն, շատ, այստեղ, երբեք)։',
          },
          {
            es: '6. Determinante (Որոշիչ): Introduce y precisa al sustantivo, situándose delante de él. Abarca: demostrativos (este, ese), posesivos (mi, tu, su), numerales (dos, primer), indefinidos (muchos, algún).',
            hy: '6. Որոշիչ (Determinante)՝ կոնկրետացնում է գոյականը և դրվում նրա առջև (ցուցական, ստացական, թվական, անորոշ)։',
          },
          {
            es: '7. Artículo (Հոդ): Tipo especial de determinante que actualiza al sustantivo: determinados (el, la, los, las) e indeterminados (un, una, unos, unas). En la gramática escolar actual se integra como una clase de determinante.',
            hy: '7. Հոդ (Artículo)՝ որոշիչների հատուկ տեսակ՝ որոշյալ (el, la, los, las) և անորոշ (un, una, unos, unas)։',
          },
          {
            es: '8. Preposición (Նախդիր): Palabra invariable que une palabras subordinando una a otra: a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras.',
            hy: '8. Նախդիր (Preposición)՝ անփոփոխ բառ, որը կապում է բառերը (a, ante, bajo, con, de, en, para, por, sin, sobre...)։',
          },
          {
            es: '9. Conjunción (Շաղկապ): Palabra invariable que enlaza palabras u oraciones al mismo o distinto nivel: y, e, ni, o, pero, sino, porque, aunque, si.',
            hy: '9. Շաղկապ (Conjunción)՝ անփոփոխ բառ, որը միացնում է բառեր կամ նախադասություններ (y, pero, porque, sino, si...)։',
          },
          {
            es: '10. Interjección (Ձայնարկություն): Palabra o expresión autónoma que comunica emociones vivas, llamadas o saludos: ¡ay!, ¡hola!, ¡ojalá!, ¡uf!, ¡bravo!.',
            hy: '10. Ձայնարկություն (Interjección)՝ արտահայտում է հույզեր, ողջույն կամ բացականչություն (¡ay!, ¡hola!, ¡uf!, ¡bravo!)։',
          },
        ],
        rules: [
          {
            name: { es: 'Pronombre vs. Determinante', hy: 'Դերանուն ընդդեմ Որոշիչի' },
            desc: {
              es: 'El DETERMINANTE acompaña al sustantivo (Mi libro). El PRONOMBRE sustituye al sustantivo y va solo (El mío está allí; Este libro me gusta pero ESTE no).',
              hy: 'Որոշիչը (Determinante) ուղեկցում է գոյականին («Mi libro»)։ Դերանունը (Pronombre) փոխարինում է գոյականին և մենակ է («El mío»)։',
            },
          },
          {
            name: { es: 'Adjetivo vs. Adverbio', hy: 'Ածական ընդդեմ Մակբայի' },
            desc: {
              es: 'El ADJETIVO concuerda en género y número con el sustantivo (chica rápida). El ADVERBIO es invariable y modifica al verbo o adjetivo (ella corre rápido / rápidamente).',
              hy: 'Ածականը համաձայնում է սեռով և թվով գոյականի հետ («chica rápida»)։ Մակբայը անփոփոխ է և լրացնում է բային («corre rápido»)։',
            },
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex6-1',
        title: { es: 'Análisis de una oración completa', hy: 'Ամբողջական նախադասության վերլուծություն' },
        text: {
          es: 'Mi hermano pequeño corre rápidamente por el parque.',
          hy: 'Իմ փոքր եղբայրը արագորեն վազում է զբոսայգով։',
        },
        analysis: {
          es: '• Mi = Determinante posesivo\n• hermano = Sustantivo\n• pequeño = Adjetivo calificativo\n• corre = Verbo (presente indicativo)\n• rápidamente = Adverbio de modo\n• por = Preposición\n• el = Determinante artículo determinado\n• parque = Sustantivo',
          hy: '• Mi = Ստացական որոշիչ\n• hermano = Գոյական\n• pequeño = Որակական ածական\n• corre = Բայ\n• rápidamente = Ձևի մակբայ\n• por = Նախդիր\n• el = Որոշյալ հոդ (որոշիչ)\n• parque = Գոյական',
        },
        tag: { es: 'Morfología completa', hy: 'Ամբողջական ձևաբանություն' },
      },
    ],
    practiceExerciseIds: ['q-t6-1', 'q-t6-2', 'q-t6-3', 'q-t6-4', 'q-t6-5', 'q-t6-6', 'q-t6-7', 'q-t6-8', 'q-t6-9', 'q-t6-10', 'q-t6-11', 'q-t6-12', 'q-t6-13', 'q-t6-14', 'q-t6-15'],
    examExerciseIds: ['q-t6-1', 'q-t6-4', 'q-t6-7', 'q-t6-9', 'q-t6-12', 'q-t6-15'],
  },
];
