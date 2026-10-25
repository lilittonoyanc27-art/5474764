import { ExerciseItem } from './types.ts';

export const questionsPart1: ExerciseItem[] = [
  // ==========================================
  // TEMA 1: EL LENGUAJE LITERARIO (25 questions)
  // ==========================================
  {
    id: 'q-t1-1',
    themeId: 1,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Cuál es la finalidad principal del lenguaje literario?',
      hy: 'Ո՞րն է գրական լեզվի գլխավոր նպատակը։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Crear belleza y emocionar al lector mediante la intención estética.',
          hy: 'Ստեղծել գեղեցկություն և հուզել ընթերցողին գեղագիտական նպատակադրմամբ։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Dar instrucciones rápidas para armar un mueble.',
          hy: 'Արագ հրահանգներ տալ կահույք հավաքելու համար։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Informar de la previsión del tiempo sin usar adjetivos.',
          hy: 'Եղանակի տեսության մասին տեղեկացնել առանց ածականների։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Vender productos en un supermercado.',
          hy: 'Սուպերմարկետում ապրանքներ վաճառել։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'El lenguaje literario se distingue por su intención estética: no solo busca comunicar, sino emocionar y crear belleza artística con las palabras.',
      hy: 'Գրական լեզուն առանձնանում է իր գեղագիտական նպատակով. այն ոչ միայն հաղորդակցվում է, այլև բառերով ստեղծում է գեղարվեստական գեղեցկություն։',
    },
    hint: {
      es: 'Piensa en qué busca un poeta o un novelista.',
      hy: 'Մտածի՛ր, թե ինչ է ձգտում անել բանաստեղծը կամ վիպասանը։',
    },
  },
  {
    id: 'q-t1-2',
    themeId: 1,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Cuál de las siguientes dos frases utiliza un lenguaje literario?',
      hy: 'Հետևյալ երկու նախադասություններից ո՞րն է օգտագործում գրական լեզու։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'El sol acaricia con dedos dorados los tejados de la ciudad.',
          hy: 'Արևը ոսկե մատներով շոյում է քաղաքի տանիքները։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'La temperatura máxima de hoy será de 24 grados centígrados.',
          hy: 'Այսօրվա առավելագույն ջերմաստիճանը կլինի 24 աստիճան։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'El autobús de la línea 5 pasa cada diez minutos.',
          hy: '5-րդ երթուղու ավտոբուսը անցնում է յուրաքանչյուր տասը րոպեն մեկ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Por favor, tira el papel a la papelera.',
          hy: 'Խնդրում եմ, թուղթը գցիր աղբամանի մեջ։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La frase "El sol acaricia con dedos dorados..." personifica al sol y usa una metáfora visual bella y poética.',
      hy: '«Արևը ոսկե մատներով շոյում է...» նախադասությունը անձնավորում է արևին և կիրառում է գեղեցիկ բանաստեղծական փոխաբերություն։',
    },
  },
  {
    id: 'q-t1-3',
    themeId: 1,
    type: 'true-false',
    difficulty: 'facil',
    question: {
      es: '¿Verdadero o falso? El lenguaje cotidiano busca la eficacia y la claridad inmediata, mientras que el literario busca la belleza formal y la sugerencia.',
      hy: 'Ճի՞շտ է, թե՞ սխալ. Առօրյա լեզուն ձգտում է անմիջական պարզության, իսկ գրական լեզուն՝ ձևի գեղեցկության և ենթատեքստի։',
    },
    correctAnswer: true,
    options: [
      { id: 'v', text: { es: 'Verdadero', hy: 'Ճիշտ է' }, isCorrect: true },
      { id: 'f', text: { es: 'Falso', hy: 'Սխալ է' }, isCorrect: false },
    ],
    explanation: {
      es: 'Verdadero. En la vida diaria necesitamos comunicar cosas prácticas rápidamente; en la literatura se cuida el estilo y la polisemia.',
      hy: 'Ճիշտ է։ Առօրյա կյանքում պետք է արագ հաղորդել գործնական մտքեր, իսկ գրականության մեջ կարևորվում է ոճն ու բազմիմաստությունը։',
    },
  },
  {
    id: 'q-t1-4',
    themeId: 1,
    type: 'fill-blank',
    difficulty: 'medio',
    question: {
      es: 'En el lenguaje literario, cuando una palabra sugiere múltiples significados o emociones al lector, decimos que posee...',
      hy: 'Գրական լեզվում, երբ բառը ընթերցողին հուշում է բազմաթիվ իմաստներ կամ զգացմունքներ, ասում ենք, որ այն օժտված է...',
    },
    options: [
      { id: 'a', text: { es: 'Polisemia y sugerencia', hy: 'Բազմիմաստությամբ և ենթատեքստով' }, isCorrect: true },
      { id: 'b', text: { es: 'Monosemia estricta', hy: 'Խիստ միարժեքությամբ' }, isCorrect: false },
      { id: 'c', text: { es: 'Cero adjetivos', hy: 'Զրոյական ածականներով' }, isCorrect: false },
      { id: 'd', text: { es: 'Error ortográfico', hy: 'Ուղղագրական սխալով' }, isCorrect: false },
    ],
    explanation: {
      es: 'La literatura explota la polisemia (capacidad de evocar varios significados y asociaciones personales).',
      hy: 'Գրականությունն օգտագործում է բազմիմաստությունը՝ առաջացնելով տարբեր զուգորդումներ ընթերցողի մտքում։',
    },
  },
  {
    id: 'q-t1-5',
    themeId: 1,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cómo transformarías la frase cotidiana "Llueve mucho" en una expresión literaria?',
      hy: 'Ինչպե՞ս կվերածեիր «Շատ անձրև է գալիս» առօրյա նախադասությունը գրական արտահայտության։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'El cielo llora lágrimas de cristal sobre la tierra sedienta.',
          hy: 'Երկինքը բյուրեղյա արցունքներ է թափում ծարաված հողի վրա։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Cayeron 40 litros por metro cuadrado según el pluviómetro.',
          hy: 'Ըստ անձրևաչափի՝ մեկ քառակուսի մետրի վրա թափվեց 40 լիտր։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Tengo que coger el paraguas porque me mojo.',
          hy: 'Պետք է հովանոց վերցնեմ, որովհետև թրջվում եմ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Hoy la lluvia atasca el tráfico en la calle Mayor.',
          hy: 'Այսօր անձրևը խցանում է երթևեկությունը գլխավոր փողոցում։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: '"El cielo llora lágrimas de cristal..." utiliza una personificación del cielo y una hermosa metáfora para la lluvia.',
      hy: '«Երկինքը բյուրեղյա արցունքներ է թափում...» արտահայտությունն անձնավորում է երկինքը և անձրևի համար գեղեցիկ փոխաբերություն է ստեղծում։',
    },
  },
  {
    id: 'q-t1-6',
    themeId: 1,
    type: 'match-pairs',
    difficulty: 'medio',
    question: {
      es: 'Empareja la frase cotidiana con su correspondiente versión literaria poética:',
      hy: 'Համապատասխանեցրո՛ւ առօրյա նախադասությունը իր բանաստեղծական գրական տարբերակի հետ.',
    },
    pairs: [
      {
        left: { es: 'La noche es oscura', hy: 'Գիշերը մութ է' },
        right: { es: 'La noche viste su manto de carbón y misterio', hy: 'Գիշերը հագնում է ածխի ու խորհրդավորության իր թիկնոցը' },
      },
      {
        left: { es: 'El río se mueve rápido', hy: 'Գետն արագ է հոսում' },
        right: { es: 'Una serpiente de plata corre apresurada hacia el mar', hy: 'Արծաթե մի օձ շտապով վազում է դեպի ծովը' },
      },
      {
        left: { es: 'Llegó la primavera', hy: 'Եկավ գարունը' },
        right: { es: 'La tierra despierta con vestidos de verde y flores', hy: 'Երկիրն արթնանում է կանաչի ու ծաղիկների զգեստներով' },
      },
    ],
    explanation: {
      es: 'El lenguaje literario transforma la realidad en imágenes poéticas mediante adjetivos sugerentes y metáforas.',
      hy: 'Գրական լեզուն իրականությունը վերածում է բանաստեղծական պատկերների՝ փոխաբերությունների միջոցով։',
    },
  },
  {
    id: 'q-t1-7',
    themeId: 1,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Qué elemento NO es característico del lenguaje literario?',
      hy: 'Ո՞ր հատկանիշը բնորոշ ՉԷ գրական լեզվին։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'La búsqueda exclusiva de un lenguaje técnico, frío y sin ninguna emoción.',
          hy: 'Բացառապես տեխնիկական, սառը և անզգացմունք լեզվի ձգտումը։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'El ritmo y la musicalidad de las palabras.',
          hy: 'Բառերի ռիթմն ու երաժշտականությունը։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'El uso de figuras retóricas como la metáfora y la anáfora.',
          hy: 'Ոճական հնարքների կիրառումը, ինչպիսիք են փոխաբերությունն ու անաֆորան։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'La capacidad de transmitir sentimientos y mundos imaginarios.',
          hy: 'Զգացմունքներ և երևակայական աշխարհներ փոխանցելու կարողությունը։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'El lenguaje técnico y frío es propio de los manuales científicos, no de la literatura.',
      hy: 'Տեխնիկական և սառը լեզուն հատուկ է գիտական ձեռնարկներին, ոչ թե գրականությանը։',
    },
  },
  {
    id: 'q-t1-8',
    themeId: 1,
    type: 'true-false',
    difficulty: 'facil',
    question: {
      es: '¿La literatura solo se escribe en verso o también puede escribirse en prosa?',
      hy: 'Գրականությունը միայն չափածո՞ է գրվում, թե՞ կարող է նաև արձակ լինել։',
    },
    correctAnswer: true,
    options: [
      { id: 'v', text: { es: 'Puede escribirse tanto en verso como en prosa.', hy: 'Կարող է գրվել ինչպես չափածո, այնպես էլ արձակ։' }, isCorrect: true },
      { id: 'f', text: { es: 'Solo y exclusivamente en verso rimado.', hy: 'Միայն և բացառապես հանգավոր չափածոյով։' }, isCorrect: false },
    ],
    explanation: {
      es: 'Las novelas, cuentos y obras de teatro son literatura en prosa, mientras que los poemas suelen ser en verso.',
      hy: 'Վեպերը, պատմվածքներն ու պիեսները արձակ գրականություն են, իսկ բանաստեղծությունները՝ չափածո։',
    },
  },

  // ==========================================
  // TEMA 2: EL VERSO Y LA PROSA (25 questions)
  // ==========================================
  {
    id: 'q-t2-1',
    themeId: 2,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué es la rima consonante?',
      hy: 'Ի՞նչ է համահունչ (ամբողջական) հանգը (rima consonante)։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Cuando a partir de la última vocal acentuada coinciden tanto las vocales como las consonantes.',
          hy: 'Երբ վերջին շեշտված ձայնավորից սկսած համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Cuando solo riman las vocales y las consonantes son distintas.',
          hy: 'Երբ հանգավորվում են միայն ձայնավորները, իսկ բաղաձայնները տարբեր են։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Cuando los versos no riman en absoluto.',
          hy: 'Երբ տողերը ընդհանրապես չեն հանգավորվում։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Cuando todas las palabras empiezan por la misma letra.',
          hy: 'Երբ բոլոր բառերը սկսվում են նույն տառով։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'En la rima consonante (ejemplo: canción / corazón, viento / cuento) coinciden todos los sonidos a partir del acento.',
      hy: 'Համահունչ հանգում շեշտից սկսած համընկնում են բոլոր հնչյունները (ձայնավորներն ու բաղաձայնները)։',
    },
  },
  {
    id: 'q-t2-2',
    themeId: 2,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: '¿Qué tipo de rima hay entre las palabras "barco" y "plato"?',
      hy: 'Ի՞նչ տեսակի հանգ կա «barco» և «plato» բառերի միջև։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Rima asonante (solo coinciden las vocales a-o).',
          hy: 'Ձայնավորային հանգ (համընկնում են միայն a-o ձայնավորները)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Rima consonante perfecta.',
          hy: 'Կատարյալ համահունչ հանգ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'No hay ninguna rima.',
          hy: 'Ոչ մի հանգ չկա։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Rima visual pero no sonora.',
          hy: 'Տեսողական, բայց ոչ հնչյունային հանգ։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'En b-A-rc-O y pl-A-t-O, las vocales a partir de la tónica son a - o. Las consonantes (rc frente a t) son diferentes: es rima asonante.',
      hy: 'Barco և plato բառերում շեշտից սկսած նույնն են միայն a-o ձայնավորները, իսկ բաղաձայնները տարբեր են. ուրեմն rima asonante է։',
    },
  },
  {
    id: 'q-t2-3',
    themeId: 2,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cuál es la diferencia principal en la disposición visual entre el verso y la prosa?',
      hy: 'Ո՞րն է գլխավոր տեսողական տարբերությունը չափածոյի և արձակի տողադարձի միջև։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'La prosa ocupa todo el renglón hasta el margen; el verso se escribe en líneas cortas con pausas.',
          hy: 'Արձակը զբաղեցնում է ամբողջ տողը մինչև լուսանցք, իսկ չափածոն գրվում է կարճ տողերով։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'La prosa siempre se escribe con letra negrita y el verso en cursiva.',
          hy: 'Արձակը միշտ թավատառ է գրվում, իսկ չափածոն՝ շղատառ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'El verso no puede tener puntos ni comas.',
          hy: 'Չափածոն չի կարող ունենալ կետեր կամ ստորակետներ։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'No hay ninguna diferencia de formato.',
          hy: 'Ձևաչափի ոչ մի տարբերություն չկա։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'El verso se corta voluntariamente antes de llegar al margen para crear ritmo y métrica; la prosa continúa hasta el final de la línea.',
      hy: 'Չափածո տողը կտրվում է մինչև լուսանցքին հասնելը՝ ռիթմ ստեղծելու համար, իսկ արձակը շարունակվում է մինչև տողավերջ։',
    },
  },
  {
    id: 'q-t2-4',
    themeId: 2,
    type: 'match-pairs',
    difficulty: 'medio',
    question: {
      es: 'Clasifica los siguientes pares de palabras según su tipo de rima:',
      hy: 'Դասակարգի՛ր հետևյալ բառազույգերն ըստ իրենց հանգի տեսակի.',
    },
    pairs: [
      {
        left: { es: 'estrella / doncella', hy: 'estrella / doncella' },
        right: { es: 'Rima consonante (-ella)', hy: 'Համահունչ հանգ (-ella)' },
      },
      {
        left: { es: 'pino / trigo', hy: 'pino / trigo' },
        right: { es: 'Rima asonante (i - o)', hy: 'Ձայնավորային հանգ (i - o)' },
      },
      {
        left: { es: 'canción / melón', hy: 'canción / melón' },
        right: { es: 'Rima consonante (-ón)', hy: 'Համահունչ հանգ (-ón)' },
      },
      {
        left: { es: 'selva / yerba', hy: 'selva / yerba' },
        right: { es: 'Rima asonante (e - a)', hy: 'Ձայնավորային հանգ (e - a)' },
      },
    ],
    explanation: {
      es: 'Si coinciden vocales y consonantes = consonante. Si solo coinciden las vocales después del acento = asonante.',
      hy: 'Եթե համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները՝ consonante է։ Եթե միայն ձայնավորները՝ asonante։',
    },
  },
  {
    id: 'q-t2-5',
    themeId: 2,
    type: 'fill-blank',
    difficulty: 'facil',
    question: {
      es: 'La medida del número de sílabas que tiene un verso se llama...',
      hy: 'Չափածո տողի վանկերի քանակի չափումը կոչվում է...',
    },
    options: [
      { id: 'a', text: { es: 'Métrica', hy: 'Տաղաչափություն (Métrica)' }, isCorrect: true },
      { id: 'b', text: { es: 'Sintaxis', hy: 'Շարահյուսություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Ortografía', hy: 'Ուղղագրություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Metáfora', hy: 'Փոխաբերություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'La métrica se encarga de contar y analizar las sílabas de cada verso.',
      hy: 'Տաղաչափությունը (métrica) զբաղվում է յուրաքանչյուր տողի վանկերի հաշվարկով ու չափմամբ։',
    },
  },

  // ==========================================
  // TEMA 3: LAS FIGURAS LITERARIAS (50 questions covering 11 figures)
  // ==========================================
  {
    id: 'q-t3-1',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria se emplea en: "Tres tristes tigres tragan trigo"?',
      hy: 'Ո՞ր գրական հնարքն է կիրառված. «Tres tristes tigres tragan trigo»:',
    },
    options: [
      { id: 'a', text: { es: 'Aliteración (repetición del sonido /t/ y /r/)', hy: 'Հնչյունակրկնություն (/t/ և /r/ հնչյունների կրկնություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Pleonasmo', hy: 'Ավելաբանություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es una aliteración porque repite de forma insistente los fonemas /t/ y /r/ creando un juego sonoro.',
      hy: 'Հնչյունակրկնություն (aliteración) է, քանի որ կրկնում է /t/ և /r/ հնչյունները՝ ստեղծելով հնչյունային խաղ։',
    },
    hint: {
      es: 'Fíjate en las letras que se repiten al inicio de casi cada palabra.',
      hy: 'Ուշադրություն դարձրո՛ւ գրեթե յուրաքանչյուր բառի սկզբում կրկնվող տառերին։',
    },
  },
  {
    id: 'q-t3-2',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria es "El tic-tac del reloj rompía el silencio"?',
      hy: 'Ո՞ր գրական հնարքն է. «El tic-tac del reloj rompía el silencio»:',
    },
    options: [
      { id: 'a', text: { es: 'Onomatopeya (imitación directa del sonido)', hy: 'Ձայնընդօրինակում (ձայնի անմիջական ընդօրինակում)' }, isCorrect: true },
      { id: 'b', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Metáfora pura', hy: 'Մաքուր փոխաբերություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն' }, isCorrect: false },
    ],
    explanation: {
      es: '"Tic-tac" es una onomatopeya: una palabra creada para reproducir el sonido real de las agujas del reloj.',
      hy: '«Tic-tac»-ը ձայնընդօրինակում է (onomatopeya)՝ բառ, որն ընդօրինակում է ժամացույցի սլաքների իրական ձայնը։',
    },
  },
  {
    id: 'q-t3-3',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura literaria encontramos en: "El hombre caminaba con mucha hambre"?',
      hy: 'Ո՞ր գրական հնարքն է. «El hombre caminaba con mucha hambre»:',
    },
    options: [
      { id: 'a', text: { es: 'Paronomasia (juego entre hombre y hambre)', hy: 'Հարանունություն (hombre և hambre բառերի խաղ)' }, isCorrect: true },
      { id: 'b', text: { es: 'Aliteración simple', hy: 'Պարզ հնչյունակրկնություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Pleonasmo', hy: 'Ավելաբանություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es una paronomasia: enfrenta "hombre" y "hambre", dos palabras de sonido casi igual pero con significado completamente distinto.',
      hy: 'Հարանունություն է (paronomasia). համադրում է «hombre» և «hambre» բառերը, որոնք հնչում են գրեթե նույն կերպ, բայց տարբեր իմաստներով։',
    },
  },
  {
    id: 'q-t3-4',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura se utiliza en el famoso verso: "Verde que te quiero verde"?',
      hy: 'Ո՞ր հնարքն է օգտագործված հայտնի տողում. «Verde que te quiero verde»:',
    },
    options: [
      { id: 'a', text: { es: 'Epanadiplosis (empieza y termina con la misma palabra)', hy: 'Սկզբնավերջային կրկնություն (սկսվում և ավարտվում է նույն բառով)' }, isCorrect: true },
      { id: 'b', text: { es: 'Anáfora', hy: 'Սկզբնակրկնություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es una epanadiplosis porque el verso empieza con "Verde" y termina exactamente con la misma palabra: "verde".',
      hy: 'Սա epanadiplosis է, քանի որ տողը սկսվում է «Verde» բառով և ավարտվում հենց նույն «verde» բառով։',
    },
  },
  {
    id: 'q-t3-5',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura literaria aparece en: "Volverán del amor en tus oídos las palabras ardientes a sonar"?',
      hy: 'Ո՞ր հնարքն է. «Volverán del amor en tus oídos las palabras ardientes a sonar»:',
    },
    options: [
      { id: 'a', text: { es: 'Hipérbaton (desorden intencionado de la frase)', hy: 'Շրջադասություն (նախադասության կարգի միտումնավոր խախտում)' }, isCorrect: true },
      { id: 'b', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում' }, isCorrect: false },
      { id: 'd', text: { es: 'Pleonasmo', hy: 'Ավելաբանություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es un hipérbaton: altera el orden lógico habitual (Las ardientes palabras de amor volverán a sonar en tus oídos).',
      hy: 'Շրջադասություն (hipérbaton) է. խախտում է սովորական տրամաբանական կարգը՝ գեղարվեստական տպավորություն ստեղծելու համար։',
    },
  },
  {
    id: 'q-t3-6',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura literaria hay en estos versos:\n"Aquí todo se recuerda,\naquí todo se siente,\naquí todo revive"?',
      hy: 'Ո՞ր գրական հնարքն է այս տողերում.\n«Aquí todo se recuerda,\naquí todo se siente,\naquí todo revive»:',
    },
    options: [
      { id: 'a', text: { es: 'Anáfora (repetición de "Aquí todo" al inicio de cada verso)', hy: 'Սկզբնակրկնություն (տողասկզբում «Aquí todo»-ի կրկնություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Asíndeton únicamente', hy: 'Միայն անշաղկապություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Paronomasia', hy: 'Հարանունություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es una anáfora: repite la misma palabra "Aquí" al comienzo de tres versos consecutivos.',
      hy: 'Սկզբնակրկնություն (anáfora) է, քանի որ «Aquí» բառը կրկնվում է երեք հաջորդական տողերի սկզբում։',
    },
  },
  {
    id: 'q-t3-7',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria hay en: "Llegué, miré, sonreí, vencí"?',
      hy: 'Ո՞ր հնարքն է. «Llegué, miré, sonreí, vencí»:',
    },
    options: [
      { id: 'a', text: { es: 'Asíndeton (omisión de conjunciones)', hy: 'Անշաղկապություն (շաղկապների բացակայություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Aliteración', hy: 'Հնչյունակրկնություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Metáfora pura', hy: 'Մաքուր փոխաբերություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es asíndeton: se suprimen las conjunciones ("y") para que la acción suene rápida y dinámica.',
      hy: 'Անշաղկապություն (asíndeton) է. բաց են թողնված շաղկապները («y»), որպեսզի գործողությունն արագ և դինամիկ հնչի։',
    },
  },
  {
    id: 'q-t3-8',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria hay en: "Y sueña, y canta, y ríe, y llora la muchacha"?',
      hy: 'Ո՞ր հնարքն է. «Y sueña, y canta, y ríe, y llora la muchacha»:',
    },
    options: [
      { id: 'a', text: { es: 'Polisíndeton (repetición insistente de "y")', hy: 'Բազմաշաղկապություն («y» շաղկապի համառ կրկնություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Pleonasmo', hy: 'Ավելաբանություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es un polisíndeton por la repetición deliberada de la conjunción "y" antes de cada verbo.',
      hy: 'Բազմաշաղկապություն (polisíndeton) է՝ ամեն մի բայից առաջ «y» շաղկապի գիտակցված կրկնության պատճառով։',
    },
  },
  {
    id: 'q-t3-9',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura literaria hay en: "Compré manzanas, peras, uvas, plátanos y ciruelas"?',
      hy: 'Ո՞ր հնարքն է. «Compré manzanas, peras, uvas, plátanos y ciruelas»:',
    },
    options: [
      { id: 'a', text: { es: 'Enumeración (lista acumulativa de elementos)', hy: 'Թվարկում (տարրերի հաջորդական կուտակում)' }, isCorrect: true },
      { id: 'b', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Paronomasia', hy: 'Հարանունություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es una enumeración: acumula sustantivos de una misma serie (frutas).',
      hy: 'Թվարկում (enumeración) է. հաջորդաբար կուտակում է նույն շարքի գոյականները (մրգեր)։',
    },
  },
  {
    id: 'q-t3-10',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria hay en: "Lo vi con mis propios ojos"?',
      hy: 'Ո՞ր հնարքն է. «Lo vi con mis propios ojos» (տեսա սեփական աչքերովս):',
    },
    options: [
      { id: 'a', text: { es: 'Pleonasmo (redundancia enfática)', hy: 'Ավելաբանություն (ընդգծող ավելորդաբանություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Metáfora', hy: 'Փոխաբերություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում' }, isCorrect: false },
      { id: 'd', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Es un pleonasmo: añade "con mis propios ojos" a "vi", lo cual es lógicamente redundante pero refuerza la convicción.',
      hy: 'Ավելաբանություն (pleonasmo) է. «տեսա» բային ավելացնում է «սեփական աչքերովս», ինչը տրամաբանորեն ավելորդ է, բայց ուժեղացնում է վստահությունը։',
    },
  },
  {
    id: 'q-t3-11',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: 'En la metáfora "Tus ojos son dos luceros", ¿cuál es el Término Real (A) y cuál el Término Imaginario (B)?',
      hy: '«Tus ojos son dos luceros» փոխաբերության մեջ ո՞րն է Իրական եզրը (A) և ո՞րը Պատկերավոր եզրը (B)։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Término Real (A) = los ojos; Término Imaginario (B) = los luceros.',
          hy: 'Իրական եզր (A) = աչքերը, Պատկերավոր եզր (B) = լուսատուները (աստղերը)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Término Real (A) = los luceros; Término Imaginario (B) = los ojos.',
          hy: 'Իրական եզր (A) = աստղերը, Պատկերավոր եզր (B) = աչքերը։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Ambos son términos reales del diccionario.',
          hy: 'Երկուսն էլ բառարանի իրական եզրեր են։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'No es una metáfora sino una aliteración.',
          hy: 'Փոխաբերություն չէ, այլ հնչյունակրկնություն։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'El término real existente en la persona son los "ojos" (A), y la imagen poética creada por semejanza de brillo son los "luceros" (B).',
      hy: 'Մարդու իրական օրգանը աչքերն են (A), իսկ փայլի նմանությամբ ստեղծված պատկերը՝ աստղերը (B)։',
    },
  },
  {
    id: 'q-t3-12',
    themeId: 3,
    type: 'multiple-choice',
    difficulty: 'dificil',
    question: {
      es: 'En la frase "Las perlas de su boca brillaban", ¿a qué tipo de estructura metafórica corresponde?',
      hy: '«Las perlas de su boca brillaban» նախադասության մեջ փոխաբերության ո՞ր կառուցվածքն է օգտագործված։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Metáfora preposicional B de A (las perlas de su boca = los dientes de su boca).',
          hy: 'B de A կառուցվածքի փոխաբերություն (բերանի մարգարիտները = բերանի ատամները)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Metáfora simple A es B.',
          hy: 'Պարզ փոխաբերություն՝ A-ն B է։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Símil con el nexo "como".',
          hy: 'Համեմատություն «como» (ինչպես) բառով։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Pleonasmo vulgar.',
          hy: 'Հասարակ ավելաբանություն։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'Es la estructura clásica "B de A", donde B es el término imaginario (perlas) y A el término real contextual (boca = dientes).',
      hy: 'Դասական «B de A» կառուցվածքն է, որտեղ B-ն պատկերավոր եզրն է (մարգարիտներ), իսկ A-ն՝ իրականը (բերան = ատամներ)։',
    },
  },
];
