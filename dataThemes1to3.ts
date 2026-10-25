import { ThemeModule } from './types.ts';

export const themes1to3: ThemeModule[] = [
  {
    id: 1,
    slug: 'lenguaje-literario',
    badge: 'TEMA 1',
    iconName: 'BookOpen',
    title: {
      es: 'El lenguaje literario',
      hy: 'Գրական լեզու',
    },
    subtitle: {
      es: 'La intención estética y la magia de las palabras',
      hy: 'Գեղագիտական նպատակը և բառերի կախարդանքը',
    },
    description: {
      es: 'Descubre cómo los escritores transforman las palabras cotidianas en arte mediante la musicalidad, el ritmo, los sentimientos y los recursos literarios.',
      hy: 'Բացահայտիր, թե ինչպես են գրողները առօրյա բառերը վերածում արվեստի՝ երաժշտականության, ռիթմի, զգացմունքների և գրական հնարքների միջոցով։',
    },
    theory: [
      {
        id: 't1-def',
        title: {
          es: '¿Qué es el lenguaje literario y poético?',
          hy: 'Ի՞նչ է գրական և բանաստեղծական լեզուն',
        },
        summary: {
          es: 'El lenguaje literario es una forma especial de usar la lengua donde importa no solo qué se dice, sino cómo se dice.',
          hy: 'Գրական լեզուն լեզվի կիրառման յուրահատուկ ձև է, որտեղ կարևոր է ոչ միայն այն, թե ինչ է ասվում, այլև այն, թե ինչպես է ասվում։',
        },
        content: [
          {
            es: 'En nuestra vida diaria usamos el lenguaje para pedir cosas, informar o resolver dudas (lenguaje cotidiano). Por ejemplo: "Hoy llueve mucho".',
            hy: 'Առօրյա կյանքում մենք լեզուն օգտագործում ենք ինչ-որ բան խնդրելու, տեղեկացնելու կամ հարցեր լուծելու համար (առօրյա լեզու)։ Օրինակ՝ «Այսօր շատ անձրև է գալիս»։',
          },
          {
            es: 'En cambio, el escritor busca la belleza, emocionar y sorprender al lector. Esto se llama intención estética.',
            hy: 'Մինչդեռ գրողը ձգտում է գեղեցկության, զգացմունքներ արթնացնելուն և ընթերցողին զարմացնելուն։ Սա կոչվում է գեղագիտական նպատակ (intención estética)։',
          },
          {
            es: 'Para lograrlo, cuida al máximo la forma de la expresión, recurre al ritmo, a la musicalidad y a las figuras retóricas.',
            hy: 'Դրան հասնելու համար նա առավելագույնս ուշադրություն է դարձնում արտահայտման ձևին, դիմում է ռիթմին, երաժշտականությանը և ոճական պատկերներին։',
          },
        ],
        rules: [
          {
            name: { es: 'Intención estética', hy: 'Գեղագիտական նպատակ' },
            desc: {
              es: 'El autor no busca solo transmitir datos, sino crear belleza y despertar sensaciones profundas en el receptor.',
              hy: 'Հեղինակը չի ձգտում պարզապես փաստեր փոխանցել, այլ ստեղծել գեղեցկություն և ընթերցողի մեջ արթնացնել խորը զգացումներ։',
            },
          },
          {
            name: { es: 'Cuidado de la forma', hy: 'Խոսքի ձևի մշակում' },
            desc: {
              es: 'Se eligen las palabras con precisión por su sonido, su significado sugerente y su capacidad de evocar mundos imaginarios.',
              hy: 'Բառերն ընտրվում են մեծ ճշգրտությամբ՝ իրենց հնչողության, ենթատեքստի և երևակայական աշխարհներ արթնացնելու ուժի շնորհիվ։',
            },
          },
        ],
        keyTips: [
          {
            es: 'Pregúntate siempre: ¿Este texto solo informa de un hecho o busca crear una emoción bella? Si busca conmoverte con las palabras, es literatura.',
            hy: 'Միշտ ինքդ քեզ հարցրու. այս տեքստը պարզապես տեղեկացնո՞ւմ է ինչ-որ փաստի մասին, թե՞ ձգտում է գեղեցիկ զգացմունք առաջացնել։ Եթե ձգտում է հուզել բառերի գեղեցկությամբ, ուրեմն դա գրականություն է։',
          },
        ],
      },
      {
        id: 't1-diff',
        title: {
          es: 'Diferencias: Lenguaje literario vs. Lenguaje cotidiano',
          hy: 'Տարբերությունները՝ գրական լեզու ընդդեմ առօրյա լեզվի',
        },
        summary: {
          es: 'El lenguaje cotidiano es directo, práctico y espontáneo. El literario es artístico, elaborado y polisémico.',
          hy: 'Առօրյա լեզուն ուղղակի է, գործնական և ինքնաբուխ։ Գրական լեզուն արվեստային է, խնամքով մշակված և բազմիմաստ։',
        },
        content: [
          {
            es: 'Cotidiano: Busca la eficacia rápida. El significado suele ser literal (un solo sentido claro).',
            hy: 'Առօրյա. ձգտում է արագ արդյունավետության։ Իմաստը սովորաբար բառացի է (մեկ հստակ իմաստ)։',
          },
          {
            es: 'Literario: Busca la sorpresa y la belleza. Es polisémico: una misma frase puede sugerir varios significados o emociones.',
            hy: 'Գրական. ձգտում է զարմացնել և գեղեցկություն պարգևել։ Այն բազմիմաստ է. նույն նախադասությունը կարող է մի քանի իմաստ կամ զգացմունք առաջացնել։',
          },
        ],
        rules: [
          {
            name: { es: 'Polisemia y sugerencia', hy: 'Բազմիմաստություն և ենթատեքստ' },
            desc: {
              es: 'En la literatura las palabras van más allá de su significado de diccionario: sugieren recuerdos, aromas, misterio.',
              hy: 'Գրականության մեջ բառերը դուրս են գալիս բառարանային նեղ իմաստից. դրանք հիշողություններ, բույրեր ու խորհրդավորություն են արթնացնում։',
            },
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex1-1',
        title: { es: 'La luz del sol', hy: 'Արեգակի լույսը' },
        text: {
          es: 'Cotidiano: El sol ilumina la ciudad.\nLiterario: El sol acaricia los tejados dorados de la ciudad dormida.',
          hy: 'Առօրյա՝ Արևը լուսավորում է քաղաքը։\nԳրական՝ Արևը շոյում է քնած քաղաքի ոսկեզօծ տանիքները։',
        },
        analysis: {
          es: 'En la versión literaria, el verbo "acaricia" personifica al sol y los adjetivos "dorados" y "dormida" transmiten calidez y ternura poética.',
          hy: 'Գրական տարբերակում «շոյում է» բայը անձնավորում է արևին, իսկ «ոսկեզօծ» և «քնած» ածականները փոխանցում են ջերմություն և բանաստեղծական քնքշություն։',
        },
        tag: { es: 'Intención estética', hy: 'Գեղագիտական նպատակ' },
        type: 'literario',
      },
      {
        id: 'ex1-2',
        title: { es: 'El viento en los árboles', hy: 'Քամին ծառերի մեջ' },
        text: {
          es: 'Cotidiano: Hace mucho viento en el parque.\nLiterario: El viento susurra secretos antiguos entre las ramas del sauce.',
          hy: 'Առօրյա՝ Զբոսայգում ուժեղ քամի է։\nԳրական՝ Քամին հնագույն գաղտնիքներ է շշնջում ուռենու ճյուղերի արանքում։',
        },
        analysis: {
          es: 'El viento se convierte en un personaje misterioso que "susurra secretos", creando un ambiente mágico inexistente en la frase común.',
          hy: 'Քամին դառնում է խորհրդավոր մի կերպար, որը «գաղտնիքներ է շշնջում»՝ ստեղծելով կախարդական միջավայր, որը բացակայում է սովորական նախադասության մեջ։',
        },
        tag: { es: 'Musicalidad y emoción', hy: 'Երաժշտականություն և զգացմունք' },
        type: 'literario',
      },
      {
        id: 'ex1-3',
        title: { es: 'El mar y las olas', hy: 'Ծովն ու ալիքները' },
        text: {
          es: 'Cotidiano: Hay olas en la playa.\nLiterario: El mar brama enfurecido contra los acantilados de plata.',
          hy: 'Առօրյա՝ Լողափին ալիքներ կան։\nԳրական՝ Ծովը զայրացած մռնչում է արծաթե ժայռերի դեմ։',
        },
        analysis: {
          es: 'El uso de "brama enfurecido" y "acantilados de plata" despierta una sensación de fuerza épica y sonoridad impactante.',
          hy: '«Զայրացած մռնչում է» և «արծաթե ժայռեր» բառակապակցությունները արթնացնում են վիպերգական ուժ և տպավորիչ հնչեղություն։',
        },
        tag: { es: 'Recursos expresivos', hy: 'Արտահայտիչ հնարքներ' },
        type: 'literario',
      },
      {
        id: 'ex1-4',
        title: { es: 'La noche fría', hy: 'Ցուրտ գիշերը' },
        text: {
          es: 'Cotidiano: La temperatura bajó y hace frío.\nLiterario: La noche vistió su manto de escarcha y silencio.',
          hy: 'Առօրյա՝ Ջերմաստիճանն իջավ և ցուրտ է։\nԳրական՝ Գիշերը հագավ իր եղյամե և լռության թիկնոցը։',
        },
        analysis: {
          es: 'La noche adquiere vestimenta ("manto de escarcha"), transformando un dato meteorológico en un cuadro visual conmovedor.',
          hy: 'Գիշերը ստանում է հանդերձանք («եղյամե թիկնոց»)՝ եղանակային տվյալը վերածելով հուզիչ տեսողական պատկերի։',
        },
        tag: { es: 'Metáfora poética', hy: 'Բանաստեղծական փոխաբերություն' },
        type: 'literario',
      },
    ],
    practiceExerciseIds: ['q-t1-1', 'q-t1-2', 'q-t1-3', 'q-t1-4', 'q-t1-5', 'q-t1-6', 'q-t1-7', 'q-t1-8', 'q-t1-9', 'q-t1-10', 'q-t1-11', 'q-t1-12', 'q-t1-13', 'q-t1-14', 'q-t1-15'],
    examExerciseIds: ['q-t1-1', 'q-t1-3', 'q-t1-5', 'q-t1-7', 'q-t1-9', 'q-t1-12', 'q-t1-15'],
  },
  {
    id: 2,
    slug: 'verso-y-prosa',
    badge: 'TEMA 2',
    iconName: 'Feather',
    title: {
      es: 'El verso y la prosa',
      hy: 'Չափածո և արձակ',
    },
    subtitle: {
      es: 'Métrica, rima asonante y consonante, ritmo y estrofas',
      hy: 'Տաղաչափություն, համահունչ և ձայնավորային հանգ, ռիթմ և տներ',
    },
    description: {
      es: 'Aprende a diferenciar el verso de la prosa, medir sílabas métricas, identificar el ritmo y distinguir con seguridad la rima consonante de la rima asonante.',
      hy: 'Սովորիր տարբերել չափածոն արձակից, չափել վանկերը, որոշել ռիթմը և վստահորեն զանազանել բաղաձայնային ու ձայնավորային հանգերը։',
    },
    theory: [
      {
        id: 't2-def',
        title: {
          es: '¿Qué es el verso y qué es la prosa?',
          hy: 'Ի՞նչ է չափածոն (բանաստեղծությունը) և ի՞նչ է արձակը',
        },
        summary: {
          es: 'El verso se escribe en líneas cortas con ritmo y musicalidad premeditada. La prosa ocupa todo el renglón de margen a margen.',
          hy: 'Չափածոն գրվում է կարճ տողերով՝ նախապես մտածված ռիթմով ու երաժշտականությամբ։ Արձակը զբաղեցնում է ամբողջ տողը՝ լուսանցքից մինչև լուսանցք։',
        },
        content: [
          {
            es: 'El verso es cada una de las líneas que componen un poema. Tienen una medida (métrica), pausas marcadas y a menudo rima.',
            hy: 'Չափածո տողը (verso) բանաստեղծությունը կազմող յուրաքանչյուր տողն է։ Տողերն ունեն որոշակի չափ (տաղաչափություն), ընդգծված դադարներ և հաճախ հանգ։',
          },
          {
            es: 'La prosa es la forma habitual de escribir de corrido: novelas, cuentos, cartas, noticias. No tiene un número fijo de sílabas por línea.',
            hy: 'Արձակը (prosa) անընդմեջ շարադրանքի սովորական ձևն է՝ վեպեր, պատմվածքներ, նամակներ, լուրեր։ Այն չունի տողի մեջ վանկերի հաստատուն քանակ։',
          },
        ],
        rules: [
          {
            name: { es: 'Métrica', hy: 'Տաղաչափություն (չափ)' },
            desc: {
              es: 'Es el cómputo o medida de las sílabas poéticas que componen cada verso.',
              hy: 'Չափածո յուրաքանչյուր տողը կազմող բանաստեղծական վանկերի հաշվարկն ու չափումն է։',
            },
          },
          {
            name: { es: 'Ritmo', hy: 'Ռիթմ' },
            desc: {
              es: 'Es la cadencia o armonía que produce la distribución regular de los acentos en el verso.',
              hy: 'Այն ներդաշնակությունն ու ելևէջն է, որն առաջանում է տողում շեշտերի կանոնավոր բաշխումից։',
            },
          },
          {
            name: { es: 'Rima', hy: 'Հանգ' },
            desc: {
              es: 'Es la repetición de sonidos al final de dos o más versos, a partir de la última vocal acentuada (vocal tónica).',
              hy: 'Երկու կամ ավելի տողերի վերջում հնչյունների կրկնությունն է՝ սկսած վերջին շեշտված ձայնավորից։',
            },
          },
        ],
        keyTips: [
          {
            es: '¡Cuidado! No confundas métrica (número de sílabas), ritmo (distribución de acentos) y rima (coincidencia de sonidos finales).',
            hy: 'Ուշադրությո՛ւն։ Մի՛ շփոթիր չափը (վանկերի քանակը), ռիթմը (շեշտերի դասավորությունը) և հանգը (վերջին հնչյունների համընկնումը)։',
          },
        ],
      },
      {
        id: 't2-rima',
        title: {
          es: 'Rima consonante vs. Rima asonante',
          hy: 'Համահունչ (ամբողջական) հանգ ընդդեմ ձայնավորային (թերի) հանգի',
        },
        summary: {
          es: 'En la rima consonante coinciden vocales y consonantes. En la rima asonante coinciden únicamente las vocales.',
          hy: 'Համահունչ հանգում համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները։ Ձայնավորային հանգում համընկնում են միայն ձայնավորները։',
        },
        content: [
          {
            es: 'Rima consonante (total o perfecta): A partir de la última vocal acentuada coinciden TODOS los fonemas (vocales y consonantes).',
            hy: 'Համահունչ հանգ (rima consonante)՝ վերջին շեշտված ձայնավորից սկսած համընկնում են ԲՈԼՈՐ հնչյունները (ձայնավորներն ու բաղաձայնները)։',
          },
          {
            es: 'Ejemplo consonante: c-as-a / m-as-a (coinciden a-s-a), c-anc-ión / corr-az-ón (coinciden ó-n).',
            hy: 'Օրինակ՝ casa / masa (համընկնում են a-s-a), canción / corazón (համընկնում են ó-n)։',
          },
          {
            es: 'Rima asonante (parcial): A partir de la última vocal acentuada coinciden SOLAMENTE las vocales; las consonantes son distintas.',
            hy: 'Ձայնավորային հանգ (rima asonante)՝ վերջին շեշտված ձայնավորից սկսած համընկնում են ՄԻԱՅՆ ձայնավորները, իսկ բաղաձայնները տարբեր են։',
          },
          {
            es: 'Ejemplo asonante: b-a-rc-o / pl-a-t-o (coinciden a - o), p-e-rr-o / c-i-e-l-o (coinciden e - o).',
            hy: 'Օրինակ՝ barco / plato (համընկնում են միայն a - o), perro / cielo (համընկնում են e - o)։',
          },
        ],
        rules: [
          {
            name: { es: 'Regla de oro de la rima', hy: 'Հանգի ոսկե կանոնը' },
            desc: {
              es: 'Localiza la última vocal tónica (acentuada) de la última palabra de cada verso y compara desde esa vocal hasta el final.',
              hy: 'Գտի՛ր տողի վերջին բառի վերջին շեշտված ձայնավորը և համեմատի՛ր այդ ձայնավորից մինչև տողի ավարտը։',
            },
          },
        ],
        keyTips: [
          {
            es: 'Si cambia alguna consonante después del acento (ej. río / frío = consonante; pero río / pino = asonante i-o).',
            hy: 'Եթե շեշտից հետո թեկուզ մեկ բաղաձայն տարբերվում է, ապա հանգը ձայնավորային է (asonante), եթե բոլորը նույնն են՝ համահունչ (consonante)։',
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex2-1',
        title: { es: 'Rima consonante perfecta', hy: 'Կատարյալ համահունչ հանգ' },
        text: {
          es: 'En el corazón tenía\nla espina de una pasión;\nlogré arrancármela un día:\nya no siento el corazón.',
          hy: 'Սրտիս մեջ ունեի ես\nՄի կրքի սուր փուշ,\nՄի օր պոկեցի այն հանեցի.\nԱյլևս սիրտս չեմ զգում։',
        },
        analysis: {
          es: '"tenía" y "día" riman en -ía (consonante). "pasión" y "corazón" riman en -ón (consonante). Coinciden todas las letras desde el acento.',
          hy: '«tenía» և «día» բառերը հանգավորվում են -ía-ով (համահունչ)։ «pasión» և «corazón» բառերը՝ -ón-ով (համահունչ)։ Համընկնում են բոլոր հնչյունները շեշտից սկսած։',
        },
        tag: { es: 'Rima consonante', hy: 'Համահունչ հանգ' },
        type: 'verso',
      },
      {
        id: 'ex2-2',
        title: { es: 'Rima asonante en romance', hy: 'Ձայնավորային հանգ ռոմանսում' },
        text: {
          es: 'A las cinco de la tarde.\nEran las cinco en punto de la tarde.\nUn niño trajo la blanca sábana\na las cinco de la tarde.',
          hy: 'Երեկոյան ժամը հինգին։\nՈւղիղ երեկոյան ժամը հինգն էր։\nՄի տղա բերեց ճերմակ սավանը\nԵրեկոյան ժամը հինգին։',
        },
        analysis: {
          es: 'En otros romances españoles: "puente" y "nieve" riman en e-e (asonante), "barco" y "mano" riman en a-o (asonante).',
          hy: 'Իսպանական ռոմանսներում՝ «puente» և «nieve» բառերը հանգավորվում են e-e-ով (ձայնավորային), «barco» և «mano»՝ a-o-ով (ձայնավորային)։',
        },
        tag: { es: 'Rima asonante', hy: 'Ձայնավորային հանգ' },
        type: 'verso',
      },
      {
        id: 'ex2-3',
        title: { es: 'Texto en prosa', hy: 'Արձակ տեքստ' },
        text: {
          es: 'El hidalgo vivía en una aldea de La Mancha. Leía libros de caballerías día y noche, hasta que de tanto leer y poco dormir se le secó el cerebro.',
          hy: 'Իդալգոն ապրում էր Լա Մանչայի մի գյուղում։ Նա ասպետական գրքեր էր կարդում գիշեր ու զօր, մինչև որ շատ կարդալուց ու քիչ քնելուց ուղեղը չորացավ։',
        },
        analysis: {
          es: 'Está escrito de margen a margen, sin versos, sin rima y sin un esquema silábico prefijado: es una narración en prosa.',
          hy: 'Գրված է լուսանցքից մինչև լուսանցք, առանց չափածո տողերի, առանց հանգի և առանց վանկերի կանխորոշված չափի. սա արձակ պատմվածք է։',
        },
        tag: { es: 'Prosa narrativa', hy: 'Պատմողական արձակ' },
        type: 'prosa',
      },
    ],
    practiceExerciseIds: ['q-t2-1', 'q-t2-2', 'q-t2-3', 'q-t2-4', 'q-t2-5', 'q-t2-6', 'q-t2-7', 'q-t2-8', 'q-t2-9', 'q-t2-10', 'q-t2-11', 'q-t2-12', 'q-t2-13', 'q-t2-14', 'q-t2-15'],
    examExerciseIds: ['q-t2-1', 'q-t2-3', 'q-t2-6', 'q-t2-8', 'q-t2-11', 'q-t2-14'],
  },
  {
    id: 3,
    slug: 'figuras-literarias',
    badge: 'TEMA 3',
    iconName: 'Sparkles',
    title: {
      es: 'Las figuras literarias',
      hy: 'Գրական արտահայտչամիջոցներ',
    },
    subtitle: {
      es: 'Nivel fónico, morfosintáctico y semántico (11 figuras imprescindibles)',
      hy: 'Հնչյունային, ձևաշարահյուսական և իմաստային մակարդակներ (11 պարտադիր հնարքներ)',
    },
    description: {
      es: 'Domina las 11 figuras retóricas clave de 1.º de ESO: aliteración, onomatopeya, paronomasia, epanadiplosis, hipérbaton, anáfora, asíndeton, polisíndeton, enumeración, pleonasmo y metáfora.',
      hy: 'Յուրացրո՛ւ 7-րդ դասարանի 11 գլխավոր ոճական հնարքները՝ հնչյունակրկնություն, ձայնարկություն, հարանունություն, սկզբնավերջային կրկնություն, շրջադասություն, սկզբնակրկնություն, անշաղկապություն, բազմաշաղկապություն, թվարկում, ավելաբանություն և փոխաբերություն։',
    },
    theory: [
      {
        id: 't3-fonico',
        title: {
          es: 'A. Nivel fónico — Հնչյունային մակարդակ',
          hy: 'Ա. Հնչյունային մակարդակ (ձայների խաղը)',
        },
        summary: {
          es: 'Juegan con los sonidos de las palabras para crear musicalidad, imitar la realidad o provocar asombro.',
          hy: 'Խաղում են բառերի հնչյունների հետ՝ ստեղծելով երաժշտականություն, ընդօրինակելով իրական ձայները կամ զարմանք առաջացնելով։',
        },
        content: [
          {
            es: '1. Aliteración (Հնչյունակրկնություն): Repetición de un mismo sonido (o sonidos similares) en un verso o frase para transmitir una sensación. Ejemplo: "En el silencio un susurro se sentía" (repetición del sonido /s/ para imitar el silencio o el viento).',
            hy: '1. Հնչյունակրկնություն (Aliteración)՝ Նույն կամ նման հնչյունների կրկնությունը տողում՝ որոշակի զգացողություն առաջացնելու համար։ Օրինակ՝ «En el silencio un susurro se sentía» (/s/ հնչյունի կրկնությունը լռություն կամ սոսափյուն ընդօրինակելու համար)։',
          },
          {
            es: '2. Onomatopeya (Ձայնարկություն, ձայնընդօրինակում): Palabra que imita un sonido real de la naturaleza, animales o cosas. Ejemplos: "tic-tac" (reloj), "guau" (perro), "miau" (gato), "pum" (explosión).',
            hy: '2. Ձայնընդօրինակում (Onomatopeya)՝ Բառ, որն ընդօրինակում է բնության, կենդանիների կամ առարկաների իրական ձայները։ Օրինակ՝ tic-tac (ժամացույց), guau (շան հաչոց), pum (պայթյուն)։',
          },
          {
            es: '3. Paronomasia (Հարանունություն, համանման հնչող բառեր): Uso de palabras de sonido muy semejante pero de significado totalmente distinto en la misma frase. Ejemplo: "El hombre tenía mucha hambre", "Tanta tinta tonta".',
            hy: '3. Հարանունություն (Paronomasia)՝ Շատ նման հնչողություն ունեցող, բայց բոլորովին տարբեր իմաստ ունեցող բառերի կիրառումը նույն նախադասության մեջ։ Օրինակ՝ «El hombre tenía hambre» (տղամարդը քաղցած էր)։',
          },
          {
            es: '4. Epanadiplosis (Սկզբնավերջային կրկնություն): Repetición de la misma palabra al principio y al final de un mismo verso o enunciado. Ejemplo: "Verde que te quiero verde", "Silencio, no digas nada, silencio".',
            hy: '4. Սկզբնավերջային կրկնություն (Epanadiplosis)՝ Նույն բառի կրկնությունը նույն տողի կամ նախադասության սկզբում և վերջում։ Օրինակ՝ «Verde que te quiero verde»։',
          },
        ],
      },
      {
        id: 't3-sintactico',
        title: {
          es: 'B. Nivel morfosintáctico — Ձևաշարահյուսական մակարդակ',
          hy: 'Բ. Ձևաբանական և շարահյուսական մակարդակ (կառուցվածքի խաղը)',
        },
        summary: {
          es: 'Afectan al orden de las palabras, a la repetición de estructuras o a la adición/supresión de nexos.',
          hy: 'Վերաբերում են բառերի շարադասությանը, կառույցների կրկնությանը կամ շաղկապների ավելացմանն ու բացթողմանը։',
        },
        content: [
          {
            es: '5. Hipérbaton (Շրջադասություն): Alteración intencionada del orden sintáctico habitual y lógico de las palabras (Sujeto + Verbo + Complementos). Ejemplo célebre de Bécquer: "Volverán las oscuras golondrinas en tu balcón sus nidos a colgar" (en orden normal: Las oscuras golondrinas volverán a colgar sus nidos en tu balcón).',
            hy: '5. Շրջադասություն (Hipérbaton)՝ Բառերի սովորական և տրամաբանական շարադասության (ենթակա + բայ + լրացումներ) նպատակադրված փոփոխություն։ Օրինակ՝ «Volverán las oscuras golondrinas» (սովորական կարգի փոխարեն)։',
          },
          {
            es: '6. Anáfora (Սկզբնակրկնություն): Repetición de una o más palabras al comienzo de varios versos o frases consecutivas. Ejemplo: "Aquí todo se recuerda, / aquí todo se siente, / aquí todo perdura".',
            hy: '6. Սկզբնակրկնություն (Anáfora)՝ Մեկ կամ մի քանի բառերի կրկնությունը հաջորդական տողերի կամ նախադասությունների սկզբում։ Օրինակ՝ «Aquí todo se recuerda / Aquí todo se siente»։',
          },
          {
            es: '7. Asíndeton (Անշաղկապություն): Omisión voluntaria de conjunciones (como "y") entre palabras o proposiciones, dando rapidez, dinamismo y agilidad. Ejemplo de Julio César: "Vine, vi, vencí" (Llegué, miré, sonreí, vencí).',
            hy: '7. Անշաղկապություն (Asíndeton)՝ Շաղկապների (օրինակ՝ «և») գիտակցված բացթողում թվարկվող տարրերի միջև՝ խոսքին հաղորդելով արագություն և դինամիզմ։ Օրինակ՝ «Llegué, miré, sonreí, salí»։',
          },
          {
            es: '8. Polisíndeton (Բազմաշաղկապություն): Empleo reiterado e innecesario de conjunciones (habitualmente "y", "ni") para dar lentitud, insistencia, solemnidad y peso emocional. Ejemplo: "Y canta, y ríe, y sueña, y llora, y vive".',
            hy: '8. Բազմաշաղկապություն (Polisíndeton)՝ Շաղկապների (հատկապես «y» կամ «ni») միտումնավոր ու հաճախակի կրկնություն՝ խոսքին հանդիսավորություն, դանդաղություն և զգացմունքային ծանրություն հաղորդելու համար։ Օրինակ՝ «Y canta y ríe y sueña y juega»։',
          },
          {
            es: '9. Enumeración (Թվարկում): Sucesión ordenada de palabras o ideas pertenecientes a un mismo campo conceptual. Puede acumular sustantivos, adjetivos o verbos. Ejemplo: "Compré libros, lápices, cuadernos y carpetas". Puede combinarse con asíndeton o polisíndeton.',
            hy: '9. Թվարկում (Enumeración)՝ Միևնույն իմաստային դաշտին պատկանող բառերի կամ մտքերի հաջորդական թվարկում։ Կարող է զուգորդվել անշաղկապության կամ բազմաշաղկապության հետ։ Օրինակ՝ «Compré libros, lápices, cuadernos y carpetas»։',
          },
          {
            es: '10. Pleonasmo (Ավելաբանություն / Իմաստային ավելորդ կրկնություն): Uso de palabras redundantes que no añaden información nueva pero aportan gran fuerza expresiva o intensidad. Ejemplo: "Lo vi con mis propios ojos", "Subir arriba", "Llorar con llanto amargo".',
            hy: '10. Ավելաբանություն (Pleonasmo)՝ Ավելորդ, կրկնվող բառերի կիրառում, որոնք նոր տեղեկություն չեն ավելացնում, սակայն խոսքին տալիս են մեծ արտահայտչական ուժ կամ հուզականություն։ Օրինակ՝ «Lo vi con mis propios ojos» (տեսա սեփական աչքերով)։',
          },
        ],
      },
      {
        id: 't3-semantico',
        title: {
          es: 'C. Nivel semántico: La Metáfora — Իմաստային մակարդակ. Փոխաբերություն',
          hy: 'Գ. Իմաստային մակարդակ. Փոխաբերություն',
        },
        summary: {
          es: 'Identificación entre dos realidades basada en una relación de semejanza: Término Real (A) y Término Imaginario (B).',
          hy: 'Երկու իրողությունների նույնացում՝ հիմնված նմանության վրա. Իրական եզր (A) և Պատկերավոր եզր (B)։',
        },
        content: [
          {
            es: 'Término Real (A): Lo que existe en el mundo real (ejemplo: los dientes, los ojos, la noche).',
            hy: 'Իրական եզր (A)՝ այն, ինչ գոյություն ունի իրական աշխարհում (օրինակ՝ ատամները, աչքերը, գիշերը)։',
          },
          {
            es: 'Término Imaginario (B): La imagen poética con la que se identifica por parecido (las perlas, las estrellas, un manto oscuro).',
            hy: 'Պատկերավոր եզր (B)՝ այն բանաստեղծական պատկերը, որի հետ նույնացվում է նմանության հիման վրա (մարգարիտներ, աստղեր, մութ թիկնոց)։',
          },
          {
            es: 'Estructuras de metáforas en 1.º de ESO:\n• A es B (Metáfora impura simple): "Tus ojos son dos estrellas brillantes".\n• B de A: "Las perlas de su boca" (perlas = dientes de su boca).\n• A en aposición: "Tus cabellos, cascada de oro...".\n• Metáfora pura: Solo aparece B, y A queda sobreentendido: "Las perlas brillaban al sonreír" (perlas = dientes).',
            hy: 'Փոխաբերության կառուցվածքները 7-րդ դասարանում.\n• A-ն B է՝ «Tus ojos son dos estrellas» (քո աչքերը երկու աստղ են)։\n• B de A՝ «Las perlas de su boca» (նրա բերանի մարգարիտները = ատամները)։\n• Մաքուր փոխաբերություն (pura)՝ հայտնվում է միայն B-ն, իսկ A-ն ենթադրվում է՝ «Las perlas brillaban al sonreír» (մարգարիտները շողում էին ժպտալիս = ատամները)։',
          },
        ],
        rules: [
          {
            name: { es: 'Diferencia Metáfora vs. Símil', hy: 'Փոխաբերության և Համեմատության տարբերությունը' },
            desc: {
              es: 'El símil o comparación usa nexos explícitos ("como", "parece", "igual que"): "Tus ojos son COMO estrellas". La metáfora afirma la identidad directa: "Tus ojos SON estrellas".',
              hy: 'Համեմատությունն (símil) օգտագործում է համեմատական բառեր («ինչպես», «կարծես»)՝ «Tus ojos son como estrellas»։ Փոխաբերությունն ուղղակիորեն նույնացնում է՝ «Tus ojos son estrellas»։',
            },
          },
        ],
      },
    ],
    examples: [
      {
        id: 'ex3-1',
        title: { es: 'Aliteración clásica', hy: 'Դասական հնչյունակրկնություն' },
        text: {
          es: 'Tres tristes tigres tragan trigo en un trigal.',
          hy: 'Երեք տխուր վագրեր ցորեն են խժռում ցորենի արտում։',
        },
        analysis: {
          es: 'Repetición intencionada de los fonemas /t/ y /r/ creando un efecto rítmico sonoro muy característico.',
          hy: '/t/ և /r/ հնչյունների գիտակցված կրկնություն, որն առաջացնում է բնորոշ ռիթմիկ հնչյունային ազդեցություն։',
        },
        tag: { es: 'Aliteración (Fónico)', hy: 'Հնչյունակրկնություն (Հնչյունային)' },
        type: 'figura',
      },
      {
        id: 'ex3-2',
        title: { es: 'Hipérbaton poético', hy: 'Բանաստեղծական շրջադասություն' },
        text: {
          es: 'Del salón en el ángulo oscuro,\nde su dueña tal vez olvidada,\nsilenciosa y cubierta de polvo,\nveíase el arpa.',
          hy: 'Սրահի մութ անկյունում,\nԻր տիրուհուց թերևս մոռացված,\nԼուռ ու փոշով պատված,\nԵրևում էր տավիղը։',
        },
        analysis: {
          es: 'El sujeto "el arpa" aparece al final del poema tras todos los complementos de lugar y modo. Es un hipérbaton magistral de Bécquer.',
          hy: '«El arpa» (տավիղը) ենթական հայտնվում է բանաստեղծության ամենավերջում՝ տեղի ու ձևի լրացումներից հետո։ Սա Բեկերի հանճարեղ շրջադասությունն է։',
        },
        tag: { es: 'Hipérbaton (Sintáctico)', hy: 'Շրջադասություն (Շարահյուսական)' },
        type: 'figura',
      },
      {
        id: 'ex3-3',
        title: { es: 'Asíndeton vs. Polisíndeton', hy: 'Անշաղկապություն և Բազմաշաղկապություն' },
        text: {
          es: 'Asíndeton: Rendí, vencí, triunfé, callé.\nPolisíndeton: Y sueña, y llora, y gime, y sufre el alma.',
          hy: 'Անշաղկապություն՝ Հանձնվեցի, հաղթեցի, տոնեցի, լռեցի։\nԲազմաշաղկապություն՝ Ե՛վ երազում է, և՛ լալիս, և՛ հառաչում, և՛ տառապում հոգին։',
        },
        analysis: {
          es: 'El asíndeton no lleva ninguna conjunción (puro dinamismo y velocidad). El polisíndeton repite "y" antes de cada verbo dando dramatismo y lentitud.',
          hy: 'Անշաղկապությունը չունի ոչ մի շաղկապ (արագաշարժ դինամիզմ)։ Բազմաշաղկապությունը կրկնում է «y» (և) շաղկապը յուրաքանչյուր բայից առաջ՝ հաղորդելով դրամատիզմ և դանդաղություն։',
        },
        tag: { es: 'Estructura morfosintáctica', hy: 'Ձևաշարահյուսական կառույց' },
        type: 'figura',
      },
      {
        id: 'ex3-4',
        title: { es: 'Metáfora: Término Real e Imaginario', hy: 'Փոխաբերություն. Իրական և պատկերավոր եզրեր' },
        text: {
          es: 'El manto de la noche cubrió las colinas.',
          hy: 'Գիշերվա թիկնոցը ծածկեց բլուրները։',
        },
        analysis: {
          es: 'Término real A: la oscuridad de la noche. Término imaginario B: un manto que cubre. Relación de semejanza: ambos tapan y oscurecen el paisaje.',
          hy: 'Իրական եզր A՝ գիշերվա խավարը։ Պատկերավոր եզր B՝ ծածկող թիկնոցը։ Նմանությունը՝ երկուսն էլ ծածկում և մթնեցնում են բնապատկերը։',
        },
        tag: { es: 'Metáfora (Semántico)', hy: 'Փոխաբերություն (Իմաստային)' },
        type: 'figura',
      },
    ],
    practiceExerciseIds: ['q-t3-1', 'q-t3-2', 'q-t3-3', 'q-t3-4', 'q-t3-5', 'q-t3-6', 'q-t3-7', 'q-t3-8', 'q-t3-9', 'q-t3-10', 'q-t3-11', 'q-t3-12', 'q-t3-13', 'q-t3-14', 'q-t3-15', 'q-t3-16', 'q-t3-17', 'q-t3-18', 'q-t3-19', 'q-t3-20', 'q-t3-21', 'q-t3-22', 'q-t3-23', 'q-t3-24', 'q-t3-25'],
    examExerciseIds: ['q-t3-1', 'q-t3-4', 'q-t3-7', 'q-t3-10', 'q-t3-13', 'q-t3-16', 'q-t3-19', 'q-t3-22', 'q-t3-25'],
  },
];
