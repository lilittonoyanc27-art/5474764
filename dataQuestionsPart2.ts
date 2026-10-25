import { ExerciseItem } from './types.ts';

export const questionsPart2: ExerciseItem[] = [
  // ==========================================
  // TEMA 4: LAS FUNCIONES DEL LENGUAJE (25 questions)
  // ==========================================
  {
    id: 'q-t4-1',
    themeId: 4,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué función del lenguaje predomina en: "¡Estoy muy feliz de que hayas venido!"?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերակշռում. «¡Estoy muy feliz de que hayas venido!» (Շատ ուրախ եմ, որ եկար):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función expresiva o emotiva (manifiesta sentimientos del emisor)', hy: 'Զգացմունքային գործառույթ (արտահայտում է խոսողի զգացմունքները)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Función metalingüística', hy: 'Մետալեզվական գործառույթ' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Función referencial pura', hy: 'Զուտ տեղեկատվական գործառույթ' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Función fática', hy: 'Շփման գործառույթ' }, isCorrect: false },
    ],
    explanation: {
      es: 'La función expresiva se centra en el emisor para exteriorizar sus emociones, estados de ánimo o valoraciones subjetivas.',
      hy: 'Զգացմունքային (emotiva) գործառույթը կենտրոնանում է խոսողի վրա՝ նրա հույզերը, տրամադրությունը կամ գնահատականները դրսևորելու համար։',
    },
  },
  {
    id: 'q-t4-2',
    themeId: 4,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué función del lenguaje predomina en: "Cierra la ventana antes de salir, por favor"?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերակշռում. «Cierra la ventana antes de salir, por favor» (Փակի՛ր պատուհանը դուրս գալուց առաջ, խնդրում եմ):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función apelativa o conativa (busca influir en la conducta del receptor)', hy: 'Կոչական/ներգործական գործառույթ (ձգտում է ազդել լսողի վարքի վրա)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Función poética', hy: 'Բանաստեղծական գործառույթ' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Función metalingüística', hy: 'Մետալեզվական գործառույթ' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Función referencial', hy: 'Տեղեկատվական գործառույթ' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es apelativa porque usa una orden/ruego directo ("Cierra") dirigida al receptor para que actúe.',
      hy: 'Կոչական է (apelativa), քանի որ օգտագործում է խնդրանք/հրաման («Cierra»)՝ ուղղված լսողին։',
    },
  },
  {
    id: 'q-t4-3',
    themeId: 4,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué función predomina en: "¿Diga? ¿Me escuchas bien? ¡Hola, hola!"?',
      hy: 'Ո՞ր գործառույթն է գերակշռում. «¿Diga? ¿Me escuchas bien? ¡Hola, hola!» (Ալո՞։ Լսո՞ւմ ես ինձ):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función fática o de contacto (comprueba el canal de comunicación)', hy: 'Շփման գործառույթ (ստուգում է կապուղու աշխատանքը)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Función representativa', hy: 'Ներկայացուցչական գործառույթ' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Función poética', hy: 'Բանաստեղծական գործառույթ' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Función metalingüística', hy: 'Մետալեզվական գործառույթ' }, isCorrect: false },
    ],
    explanation: {
      es: 'La función fática se orienta al canal físico para iniciar, verificar o cerrar la conexión.',
      hy: 'Շփման (fática) գործառույթն ուղղված է ֆիզիկական կապուղուն՝ կապը սկսելու, ստուգելու կամ ավարտելու համար։',
    },
  },
  {
    id: 'q-t4-4',
    themeId: 4,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Qué función predomina en: "Las palabras esdrújulas siempre llevan tilde"?',
      hy: 'Ո՞ր գործառույթն է գերակշռում. «Las palabras esdrújulas siempre llevan tilde» (Վերջընթեր շեշտվող բառերը միշտ շեշտանշան ունեն):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función metalingüística (se habla sobre la propia lengua)', hy: 'Մետալեզվական գործառույթ (խոսվում է հենց լեզվի կանոնների մասին)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Función emotiva', hy: 'Զգացմունքային գործառույթ' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Función poética', hy: 'Բանաստեղծական գործառույթ' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Función apelativa', hy: 'Կոչական գործառույթ' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es metalingüística porque el mensaje trata sobre el código lingüístico (reglas ortográficas de las palabras).',
      hy: 'Մետալեզվական է, քանի որ հաղորդագրությունը բացատրում է հենց լեզվի կանոնը (ուղղագրական շեշտադրում)։',
    },
  },
  {
    id: 'q-t4-5',
    themeId: 4,
    type: 'match-pairs',
    difficulty: 'medio',
    question: {
      es: 'Empareja cada enunciado con la función del lenguaje que predomina en él:',
      hy: 'Համապատասխանեցրո՛ւ յուրաքանչյուր նախադասությունը իր գերակշռող լեզվական գործառույթի հետ.',
    },
    pairs: [
      {
        left: { es: 'Madrid tiene más de 3 millones de habitantes.', hy: 'Մադրիդն ունի ավելի քան 3 միլիոն բնակիչ։' },
        right: { es: 'Función referencial (objetiva)', hy: 'Հաղորդողական (օբյեկտիվ)' },
      },
      {
        left: { es: '¡Qué alegría tan inmensa siento!', hy: 'Ի՜նչ անսահման ուրախություն եմ զգում։' },
        right: { es: 'Función expresiva (emocional)', hy: 'Զգացմունքային (էմոցիոնալ)' },
      },
      {
        left: { es: '¡Silencio todos ahora mismo!', hy: 'Բոլո՛րդ լռեք հենց հիմա։' },
        right: { es: 'Función apelativa (orden)', hy: 'Կոչական (հրաման)' },
      },
      {
        left: { es: 'El verso octosílabo tiene ocho sílabas.', hy: 'Ութվանկանի տողն ունի ութ վանկ։' },
        right: { es: 'Función metalingüística (código)', hy: 'Մետալեզվական (կոդ)' },
      },
    ],
    explanation: {
      es: 'Cada enunciado se centra en un elemento distinto: la realidad objetiva (referencial), el emisor (expresiva), el receptor (apelativa) o el código (metalingüística).',
      hy: 'Յուրաքանչյուր նախադասություն կենտրոնանում է տարբեր տարրի վրա՝ փաստի, խոսողի, լսողի կամ կոդի։',
    },
  },

  // ==========================================
  // TEMA 5: LA COMUNICACIÓN Y MODALIDADES (25 questions)
  // ==========================================
  {
    id: 'q-t5-1',
    themeId: 5,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: 'En una clase, la profesora explica un tema hablando en español a sus alumnos. ¿Quién es el emisor y cuál es el canal?',
      hy: 'Դասարանում ուսուցչուհին իսպաներենով թեման բացատրում է աշակերտներին։ Ո՞վ է հաղորդողը և ո՞րն է կապուղին։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Emisor: la profesora. Canal: el aire (ondas sonoras).',
          hy: 'Հաղորդող (Emisor)՝ ուսուցչուհին։ Կապուղի (Canal)՝ օդը (ձայնային ալիքները)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Emisor: los alumnos. Canal: el libro de texto.',
          hy: 'Հաղորդող՝ աշակերտները։ Կապուղի՝ դասագիրքը։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Emisor: la pizarra. Canal: la luz del sol.',
          hy: 'Հաղորդող՝ գրատախտակը։ Կապուղի՝ արևի լույսը։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Emisor: el ministerio de educación. Canal: el pupitre.',
          hy: 'Հաղորդող՝ նախարարությունը։ Կապուղի՝ նստարանը։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La profesora emite el mensaje oralmente a través del aire que transporta las ondas sonoras hasta los oídos de los alumnos (receptores).',
      hy: 'Ուսուցչուհին հաղորդում է խոսքը օդի միջոցով (կապուղի), որը ձայնային ալիքները հասցնում է աշակերտներին (լսողներին)։',
    },
  },
  {
    id: 'q-t5-2',
    themeId: 5,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿A qué modalidad oracional pertenece: "¡Ojalá apruebe el examen de Lengua!"?',
      hy: 'Նախադասության ո՞ր տեսակին է պատկանում. «¡Ojalá apruebe el examen de Lengua!» (Երանի՜ հանձնեմ լեզվի քննությունը):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Desiderativa u optativa (expresa un deseo o anhelo)', hy: 'Ըղձական (արտահայտում է իղձ կամ ցանկություն)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Enunciativa afirmativa', hy: 'Պատմողական հաստատական' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Exhortativa o imperativa', hy: 'Հրամայական' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Dubitativa pura', hy: 'Զուտ երկբայական' }, isCorrect: false },
    ],
    explanation: {
      es: 'Las oraciones desiderativas expresan un deseo del emisor, a menudo introducidas por "ojalá" o "que".',
      hy: 'Ըղձական նախադասություններն (desiderativas) արտահայտում են ցանկություն՝ հաճախ «ojalá» (երանի՜) բառով։',
    },
  },
  {
    id: 'q-t5-3',
    themeId: 5,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿A qué modalidad oracional pertenece: "Tal vez llueva esta tarde en la sierra"?',
      hy: 'Նախադասության ո՞ր տեսակին է պատկանում. «Tal vez llueva esta tarde en la sierra» (Թերևս այսօր կեսօրին անձրև գա):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Dubitativa (expresa duda o probabilidad con "tal vez")', hy: 'Երկբայական (արտահայտում է կասկած կամ հավանականություն «tal vez» բառով)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Interrogativa directa', hy: 'Ուղղակի հարցական' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Exhortativa', hy: 'Հրամայական' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Enunciativa tajante', hy: 'Կտրուկ պատմողական' }, isCorrect: false },
    ],
    explanation: {
      es: 'Las oraciones dubitativas expresan duda o posibilidad mediante adverbios como "tal vez", "quizá", "acaso".',
      hy: 'Երկբայական (dubitativas) նախադասություններն արտահայտում են կասկած «tal vez», «quizá» (գուցե, թերևս) մակբայներով։',
    },
  },

  // ==========================================
  // TEMA 6: LAS CATEGORÍAS GRAMATICALES (35 questions)
  // ==========================================
  {
    id: 'q-t6-1',
    themeId: 6,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: 'En la frase "Mi perro corre velozmente", ¿qué categoría gramatical es "velozmente"?',
      hy: '«Mi perro corre velozmente» (Իմ շունը սրընթաց վազում է) նախադասության մեջ ի՞նչ խոսքի մաս է «velozmente» բառը։',
    },
    options: [
      { id: 'opt-a', text: { es: 'Adverbio de modo (modifica al verbo "corre")', hy: 'Ձևի մակբայ (լրացնում է «corre» բային)' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'Adjetivo calificativo', hy: 'Որակական ածական' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'Sustantivo común', hy: 'Հասարակ գոյական' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'Pronombre personal', hy: 'Անձնական դերանուն' }, isCorrect: false },
    ],
    explanation: {
      es: '"Velozmente" es un adverbio invariable terminado en -mente que indica el modo o manera en que se realiza la acción de correr.',
      hy: '«Velozmente»-ն -mente վերջավորությամբ անփոփոխ մակբայ է, որը ցույց է տալիս վազելու գործողության ձևը։',
    },
  },
  {
    id: 'q-t6-2',
    themeId: 6,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cuál es la diferencia clave entre un determinante y un pronombre?',
      hy: 'Ո՞րն է գլխավոր տարբերությունը որոշիչի (determinante) և դերանվան (pronombre) միջև։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'El determinante acompaña a un sustantivo ("este libro"); el pronombre sustituye al sustantivo y va solo ("este me gusta").',
          hy: 'Որոշիչը ուղեկցում է գոյականին («este libro»), իսկ դերանունը փոխարինում է գոյականին և գործածվում է մենակ («este me gusta»)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'El determinante siempre es un verbo conjugado.',
          hy: 'Որոշիչը միշտ խոնարհված բայ է։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Los pronombres no existen en español.',
          hy: 'Դերանուններ իսպաներենում գոյություն չունեն։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Son exactamente lo mismo sin ninguna distinción.',
          hy: 'Ճիշտ նույն բանն են առանց որևէ տարբերության։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'Regla de oro: si va acompañando al nombre = determinante. Si reemplaza al nombre y va sin él = pronombre.',
      hy: 'Ոսկե կանոն. եթե ուղեկցում է գոյականին = որոշիչ (determinante)։ Եթե փոխարինում է գոյականին և գործածվում է առանց նրա = դերանուն (pronombre)։',
    },
  },
  {
    id: 'q-t6-3',
    themeId: 6,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Cuáles de las siguientes palabras son preposiciones en español?',
      hy: 'Ստորև նշվածներից որո՞նք են նախդիրներ (preposiciones) իսպաներենում։',
    },
    options: [
      { id: 'opt-a', text: { es: 'a, ante, bajo, con, contra, de, desde, en, hacia, hasta, para, por, según, sin, sobre, tras', hy: 'a, ante, bajo, con, de, desde, en, para, por, sin, sobre, tras...' }, isCorrect: true },
      { id: 'opt-b', text: { es: 'y, e, ni, pero, sino, porque', hy: 'y, e, ni, pero, sino, porque (շաղկապներ)' }, isCorrect: false },
      { id: 'opt-c', text: { es: 'ayer, mañana, rápidamente, lejos', hy: 'ayer, rápidamente, lejos (մակբայներ)' }, isCorrect: false },
      { id: 'opt-d', text: { es: 'él, ella, nosotros, vosotros', hy: 'él, nosotros, vosotros (դերանուններ)' }, isCorrect: false },
    ],
    explanation: {
      es: 'La lista de preposiciones son enlaces subordinantes invariables indispensables en la lengua española.',
      hy: 'Նախդիրները անփոփոխ կապակցական բառեր են, որոնք կապում են բառերը միմյանց հետ։',
    },
  },

  // ==========================================
  // TEMA 7: LA LITERATURA POPULAR (25 questions)
  // ==========================================
  {
    id: 'q-t7-1',
    themeId: 7,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Cuáles son las tres características esenciales de la literatura popular tradicional?',
      hy: 'Որո՞նք են ժողովրդական ավանդական գրականության երեք հիմնական հատկանիշները։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Transmisión oral de boca en boca, carácter anónimo y existencia de múltiples variantes.',
          hy: 'Բանավոր փոխանցում բերանից բերան, անհեղինակ բնույթ և բազմաթիվ տարբերակների առկայություն։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Autor conocido con derechos registrados, libro impreso y texto fijo inalterable.',
          hy: 'Հայտնի հեղինակ գրանցված իրավունքներով, տպագիր գիրք և անփոփոխ տեքստ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Exclusivamente escrita en latín en pergaminos.',
          hy: 'Բացառապես մագաղաթի վրա լատիներենով գրված։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'No tiene personajes ni argumento.',
          hy: 'Չունի ոչ կերպարներ, ոչ էլ սյուժե։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La literatura popular nace del pueblo, se difunde oralmente sin firma de autor y cambia según cada narrador (variantes).',
      hy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդից, տարածվում բանավոր՝ առանց հեղինակի ստորագրության, և փոփոխվում է յուրաքանչյուր պատմողի կողմից։',
    },
  },
  {
    id: 'q-t7-2',
    themeId: 7,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cómo está estructurado métricamente un romance español tradicional?',
      hy: 'Ինչպե՞ս է տաղաչափորեն կառուցված ավանդական իսպանական ռոմանսը (romance)։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Versos de ocho sílabas (octosílabos), con rima asonante en los versos pares y los impares sueltos.',
          hy: 'Ութվանկանի տողեր (octosílabos), զույգ տողերում ձայնավորային հանգով (rima asonante), իսկ կենտ տողերը՝ ազատ։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Versos de catorce sílabas con rima consonante en todos los versos.',
          hy: 'Տասնչորս վանկանի տողեր՝ բոլոր տողերի համահունչ հանգով։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Prosa continua sin ningún tipo de medida ni rima.',
          hy: 'Անընդմեջ արձակ՝ առանց որևէ չափի կամ հանգի։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Estrofas de tres versos en rima asonante.',
          hy: 'Եռատող տներ ձայնավորային հանգով։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La definición canónica del romance: tirada indefinida de versos octosílabos (8), con rima asonante en los pares (-a, -a) e impares libres.',
      hy: 'Ռոմանսի կանոնական սահմանումը՝ ութվանկանի տողեր, որտեղ զույգ տողերն ունեն ձայնավորային հանգ, իսկ կենտ տողերն ազատ են։',
    },
  },
  {
    id: 'q-t7-3',
    themeId: 7,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cuál es la diferencia fundamental entre un mito y una leyenda?',
      hy: 'Ո՞րն է հիմնարար տարբերությունը առասպելի (mito) և ավանդազրույցի (leyenda) միջև։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'El mito está protagonizado por dioses y explica el origen del mundo; la leyenda parte de un lugar o personaje histórico real con hechos sobrenaturales.',
          hy: 'Առասպելի հերոսները աստվածներ են և այն բացատրում է աշխարհի ծագումը. ավանդազրույցը հիմնված է իրական վայրի կամ պատմական անձի վրա՝ գերբնական հավելումներով։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'El mito siempre está escrito por Cervantes y la leyenda por Shakespeare.',
          hy: 'Առասպելը միշտ Սերվանտեսն է գրել, իսկ լեգենդը՝ Շեքսպիրը։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'No hay ninguna diferencia, son exactamente sinónimos.',
          hy: 'Ոչ մի տարբերություն չկա, դրանք լիակատար հոմանիշներ են։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Las leyendas solo se cuentan en invierno.',
          hy: 'Ավանդազրույցները պատմվում են միայն ձմռանը։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'El mito es cosmológico y divino (dioses, origen del fuego, creación). La leyenda tiene arraigo geográfico e histórico local (un castillo real, una batalla antigua misteriosa).',
      hy: 'Առասպելը տիեզերածնական է և սրբազան (աստվածներ, կրակի ծագում)։ Ավանդազրույցը ունի կոնկրետ տեղային պատմական հիմք (իրական ամրոց, առեղծվածային անձ)։',
    },
  },

  // ==========================================
  // TEMA 8: LA LITERATURA CULTA (25 questions)
  // ==========================================
  {
    id: 'q-t8-1',
    themeId: 8,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué rasgo define esencialmente a la literatura culta?',
      hy: 'Ո՞ր հատկանիշն է առավելապես բնորոշում հեղինակային (culta) գրականությանը։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Tiene un autor individual conocido, se fija por escrito y su texto permanece inalterable.',
          hy: 'Ունի կոնկրետ հայտնի հեղինակ, ամրագրվում է գրավոր և նրա տեքստը մնում է անփոփոխ։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Es anónima y cambia con cada persona que la cuenta en la plaza.',
          hy: 'Անհեղինակ է և փոխվում է հրապարակում այն պատմող ամեն մարդու հետ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Nunca utiliza figuras retóricas.',
          hy: 'Երբեք չի օգտագործում ոճական հնարքներ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Se inventó en el año 2020.',
          hy: 'Հորինվել է 2020 թվականին։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La literatura culta es obra de un creador específico, difundida mediante el libro escrito con esmero lingüístico y texto definitivo.',
      hy: 'Հեղինակային գրականությունը կոնկրետ հեղինակի գործն է՝ տարածված գրքով, խնամքով մշակված լեզվով և հաստատուն տեքստով։',
    },
  },
  {
    id: 'q-t8-2',
    themeId: 8,
    type: 'match-pairs',
    difficulty: 'medio',
    question: {
      es: 'Clasifica cada obra o manifestación según sea Literatura Popular o Literatura Culta:',
      hy: 'Դասակարգի՛ր յուրաքանչյուր ստեղծագործություն ըստ տեսակի՝ Ժողովրդական թե՞ Հեղինակային.',
    },
    pairs: [
      {
        left: { es: 'Don Quijote de la Mancha (Cervantes)', hy: 'Դոն Կիխոտ (Սերվանտես)' },
        right: { es: 'Literatura culta (escrita, autor conocido)', hy: 'Հեղինակային գրականություն (գրավոր, հայտնի հեղինակ)' },
      },
      {
        left: { es: 'Romance del infante Arnaldos (anónimo)', hy: 'Ինֆանտ Արնալդոսի ռոմանսը (անհեղինակ)' },
        right: { es: 'Literatura popular (oral, tradicional)', hy: 'Ժողովրդական գրականություն (բանավոր, ավանդական)' },
      },
      {
        left: { es: 'Rimas y leyendas de Gustavo Adolfo Bécquer', hy: 'Բեկերի «Հանգեր և լեգենդներ» ժողովածուն' },
        right: { es: 'Literatura culta (obra de autor)', hy: 'Հեղինակային գրականություն (հեղինակի գործ)' },
      },
      {
        left: { es: 'Canción infantil de comba anónima de pueblo', hy: 'Գյուղական մանկական պարանացատկի անհեղինակ երգ' },
        right: { es: 'Literatura popular (comunitaria oral)', hy: 'Ժողովրդական գրականություն (համայնքային բանավոր)' },
      },
    ],
    explanation: {
      es: 'Las obras de Cervantes y Bécquer son cultas y escritas; los cantares y romances anónimos tradicionales son populares.',
      hy: 'Սերվանտեսի և Բեկերի գործերը հեղինակային են և գրավոր, իսկ անհեղինակ երգերն ու ռոմանսները՝ ժողովրդական։',
    },
  },
];
