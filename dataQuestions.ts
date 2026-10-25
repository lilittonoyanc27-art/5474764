import { ExerciseItem } from './types.ts';
import { questionsPart1 } from './dataQuestionsPart1.ts';
import { questionsPart2 } from './dataQuestionsPart2.ts';

// Additional thematic questions to ensure 230+ comprehensive, fully translated questions
const questionsExtra: ExerciseItem[] = [
  // Figurative language extra practice (Theme 3)
  {
    id: 'q-t3-extra-1',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: '¿Qué figura retórica encontramos en: "Tanta tinta tonta que te atonta"?',
      hy: 'Ո՞ր ոճական հնարքն է. «Tanta tinta tonta que te atonta»:',
    },
    options: [
      { id: 'a', text: { es: 'Paronomasia y aliteración', hy: 'Հարանունություն և հնչյունակրկնություն' }, isCorrect: true },
      { id: 'b', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Metáfora pura', hy: 'Մաքուր փոխաբերություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Juega con palabras casi idénticas en sonido (tinta, tonta) y repite la /t/.',
      hy: 'Խաղում է գրեթե նույնահունչ բառերի (tinta, tonta) հետ և կրկնում /t/ հնչյունը։',
    },
  },
  {
    id: 'q-t3-extra-2',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'dificil',
    question: {
      es: '¿Qué figura retórica es: "De verdes sauces hay una espesura" en vez de "Hay una espesura de verdes sauces"?',
      hy: 'Ո՞ր հնարքն է. «De verdes sauces hay una espesura» (սովորական շարադասության փոխարեն):',
    },
    options: [
      { id: 'a', text: { es: 'Hipérbaton', hy: 'Շրջադասություն (Hipérbaton)' }, isCorrect: true },
      { id: 'b', text: { es: 'Anáfora', hy: 'Սկզբնակրկնություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում' }, isCorrect: false },
    ],
    explanation: {
      es: 'Garcilaso de la Vega altera el orden sintáctico normal anteponiendo el complemento al verbo: es un hipérbaton poético.',
      hy: 'Գարսիլասո դե լա Վեգան խախտում է սովորական շարադասությունը՝ լրացումը դնելով բայից առաջ. սա շրջադասություն է։',
    },
  },
  {
    id: 'q-t3-extra-3',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria es: "Boca que arrastra mi boca, boca que me has empujado"?',
      hy: 'Ո՞ր գրական հնարքն է. «Boca que arrastra mi boca, boca que me has empujado»:',
    },
    options: [
      { id: 'a', text: { es: 'Anáfora (repetición de "boca que" al principio)', hy: 'Սկզբնակրկնություն (սկզբում «boca que»-ի կրկնություն)' }, isCorrect: true },
      { id: 'b', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում' }, isCorrect: false },
      { id: 'd', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'La repetición de la palabra "boca" al comienzo de las frases es una anáfora de Miguel Hernández.',
      hy: 'Նախադասությունների սկզբում «boca» բառի կրկնությունը Միգել Էռնանդեսի կողմից անաֆորա է։',
    },
  },
  {
    id: 'q-t3-extra-4',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'facil',
    question: {
      es: '¿Qué figura literaria es: "Día, noche, poniente, madrugada"?',
      hy: 'Ո՞ր հնարքն է. «Día, noche, poniente, madrugada»:',
    },
    options: [
      { id: 'a', text: { es: 'Asíndeton y enumeración', hy: 'Անշաղկապություն և թվարկում' }, isCorrect: true },
      { id: 'b', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Paronomasia', hy: 'Հարանունություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Enumera momentos del día sin conjunciones intermedias: combina enumeración con asíndeton.',
      hy: 'Թվարկում է օրվա պահերը առանց միջանկյալ շաղկապների՝ միավորելով թվարկումը և անշաղկապությունը։',
    },
  },
  {
    id: 'q-t3-extra-5',
    themeId: 3,
    type: 'detective-figure',
    difficulty: 'medio',
    question: {
      es: 'En "El llanto de la guitarra", ¿qué recurso se utiliza?',
      hy: '«El llanto de la guitarra» (կիթառի լացը) արտահայտության մեջ ի՞նչ հնարք է օգտագործված։',
    },
    options: [
      { id: 'a', text: { es: 'Metáfora (atribuye llanto humano al sonido del instrumento)', hy: 'Փոխաբերություն (գործիքի հնչյունին վերագրում է մարդկային լաց)' }, isCorrect: true },
      { id: 'b', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, isCorrect: false },
      { id: 'c', text: { es: 'Pleonasmo', hy: 'Ավելաբանություն' }, isCorrect: false },
      { id: 'd', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, isCorrect: false },
    ],
    explanation: {
      es: 'Federico García Lorca identifica metafóricamente la música triste de la guitarra con el llanto.',
      hy: 'Լորկան փոխաբերորեն նույնացնում է կիթառի տխուր նվագը մարդկային լացի հետ։',
    },
  },
  {
    id: 'q-t6-extra-1',
    themeId: 6,
    type: 'multiple-choice',
    difficulty: 'facil',
    question: {
      es: 'En "Este lápiz es mío", ¿qué clase de palabras son "Este" y "mío"?',
      hy: '«Este lápiz es mío» նախադասության մեջ ի՞նչ խոսքի մասեր են «Este»-ն և «mío»-ն։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: '"Este" es determinante demostrativo; "mío" es pronombre posesivo.',
          hy: '«Este»-ն ցուցական որոշիչ է, իսկ «mío»-ն՝ ստացական դերանուն։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Ambos son verbos en infinitivo.',
          hy: 'Երկուսն էլ անորոշ բայեր են։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Ambos son adverbios de tiempo.',
          hy: 'Երկուսն էլ ժամանակի մակբայներ են։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: '"Este" es preposición y "mío" conjunción.',
          hy: '«Este»-ն նախդիր է, իսկ «mío»-ն՝ շաղկապ։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: '"Este" va pegado al sustantivo "lápiz" (determinante). "Mío" va solo con el verbo sin sustantivo al lado (pronombre).',
      hy: '«Este»-ն ուղեկցում է «lápiz» գոյականին (որոշիչ)։ «Mío»-ն գործածվում է մենակ (դերանուն)։',
    },
  },
  {
    id: 'q-t7-extra-1',
    themeId: 7,
    type: 'multiple-choice',
    difficulty: 'medio',
    question: {
      es: '¿Cómo se denominan las tres partes fundamentales de la estructura de un cuento o narración?',
      hy: 'Ինչպե՞ս են կոչվում հեքիաթի կամ պատմվածքի կառուցվածքի երեք հիմնական մասերը։',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          es: 'Planteamiento (inicio), nudo (conflicto) y desenlace (resolución).',
          hy: 'Սկիզբ/ծանոթացում (Planteamiento), հանգույց/կոնֆլիկտ (nudo) և հանգուցալուծում (desenlace)։',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          es: 'Rima, verso y estrofa.',
          hy: 'Հանգ, չափածո տող և տուն։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          es: 'Sujeto, verbo y predicado.',
          hy: 'Ենթակա, ստորոգյալ և լրացում։',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          es: 'Emisor, canal y código.',
          hy: 'Հաղորդող, կապուղի և կոդ։',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      es: 'La estructura narrativa canónica se compone de planteamiento inicial, nudo donde se desarrolla el conflicto y desenlace final.',
      hy: 'Պատմողական դասական կառուցվածքը բաղկացած է սկզբնական ծանոթացումից, հանգույցից (որտեղ զարգանում է կոնֆլիկտը) և հանգուցալուծումից։',
    },
  },
];

// Combine all 230+ questions
export const allQuestions: ExerciseItem[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsExtra,
];

// Helper functions for curriculum, games, and exams
export function getQuestionsByTheme(themeId: number): ExerciseItem[] {
  return allQuestions.filter((q) => q.themeId === themeId);
}

export function getQuestionsByType(type: string): ExerciseItem[] {
  return allQuestions.filter((q) => q.type === type);
}

export function getFigurasQuestions(): ExerciseItem[] {
  return allQuestions.filter((q) => q.themeId === 3);
}

export function getRandomQuestions(count: number, themeId?: number): ExerciseItem[] {
  const pool = themeId ? getQuestionsByTheme(themeId) : [...allQuestions];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
