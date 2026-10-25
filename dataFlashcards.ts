import { FlashcardItem } from './types.ts';

export const flashcardsData: FlashcardItem[] = [
  {
    id: 'fc-alit',
    themeId: 3,
    category: { es: 'Figuras - Fónico', hy: 'Հնարքներ - Հնչյունային' },
    term: { es: 'Aliteración', hy: 'Հնչյունակրկնություն (Aliteración)' },
    definition: {
      es: 'Repetición intencionada de un mismo sonido consonántico o vocálico en un verso o frase.',
      hy: 'Նույն բաղաձայն կամ ձայնավոր հնչյունի միտումնավոր կրկնություն տողում կամ նախադասության մեջ։',
    },
    example: {
      es: 'En el silencio solo se sentía un suave susurro.',
      hy: 'Լռության մեջ միայն լսվում էր մի մեղմ սոսափյուն (/s/ հնչյունի կրկնություն)։',
    },
    memorizationTrick: {
      es: 'Aliteración = "A-letra-ción", repites letras y sonidos.',
      hy: 'Հիշի՛ր՝ կրկնվում են տառեր և հնչյուններ սովորական բառերում։',
    },
    confusedWith: 'Onomatopeya',
  },
  {
    id: 'fc-onom',
    themeId: 3,
    category: { es: 'Figuras - Fónico', hy: 'Հնարքներ - Հնչյունային' },
    term: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում (Onomatopeya)' },
    definition: {
      es: 'Palabra que imita de forma directa el sonido de una acción, animal o cosa.',
      hy: 'Բառ, որն անմիջականորեն ընդօրինակում է գործողության, կենդանու կամ առարկայի իրական ձայնը։',
    },
    example: {
      es: 'El gato maullaba: ¡miau, miau! Y la puerta hizo ¡pum!',
      hy: 'Կատուն մլավում էր՝ մյա՛ու, մյա՛ու, իսկ դուռը արեց՝ պո՛ւմ։',
    },
    memorizationTrick: {
      es: 'Es la palabra del cómic: ¡boom, guau, tic-tac, zas!',
      hy: 'Կոմիքսների բառն է՝ բո՛ւմ, հա՛ֆ, տիկ-տակ, զա՛ս։',
    },
    confusedWith: 'Aliteración',
  },
  {
    id: 'fc-paron',
    themeId: 3,
    category: { es: 'Figuras - Fónico', hy: 'Հնարքներ - Հնչյունային' },
    term: { es: 'Paronomasia', hy: 'Հարանունություն (Paronomasia)' },
    definition: {
      es: 'Uso próximo de palabras con sonido casi idéntico pero de significado diferente.',
      hy: 'Գրեթե նույնահունչ, բայց տարբեր իմաստ ունեցող բառերի կիրառում կողք կողքի։',
    },
    example: {
      es: 'El hombre caminaba con hambre en la cumbre.',
      hy: 'Տղամարդը (hombre) քայլում էր քաղցով (hambre) գագաթին (cumbre)։',
    },
    memorizationTrick: {
      es: 'Par-onomasia: un "par" de palabras parecidas cara a cara.',
      hy: 'Հիշի՛ր՝ «զույգ» (par) նմանահունչ բառեր՝ դեմ առ դեմ։',
    },
    confusedWith: 'Aliteración',
  },
  {
    id: 'fc-epan',
    themeId: 3,
    category: { es: 'Figuras - Fónico/Sintáctico', hy: 'Հնարքներ - Սկզբնավերջային' },
    term: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն (Epanadiplosis)' },
    definition: {
      es: 'Repetición de la misma palabra al principio y al final de un mismo verso.',
      hy: 'Նույն բառի կրկնությունը նույն տողի սկզբում և վերջում։',
    },
    example: {
      es: 'Verde que te quiero verde.',
      hy: 'Կանաչ (Verde), որքան եմ քեզ սիրում, կանաչ (verde)։',
    },
    memorizationTrick: {
      es: 'E-pan-a-di-plo-sis: empieza y termina igual, como un círculo.',
      hy: 'Սկսվում է և ավարտվում նույնությամբ, ինչպես փակ շրջան։',
    },
    confusedWith: 'Anáfora',
  },
  {
    id: 'fc-anaf',
    themeId: 3,
    category: { es: 'Figuras - Morfosintáctico', hy: 'Հնարքներ - Շարահյուսական' },
    term: { es: 'Anáfora', hy: 'Սկզբնակրկնություն (Anáfora)' },
    definition: {
      es: 'Repetición de una o más palabras al comienzo de versos sucesivos.',
      hy: 'Մեկ կամ մի քանի բառերի կրկնությունը հաջորդական տողերի սկզբում։',
    },
    example: {
      es: 'Aquí no hay lágrimas,\naquí no hay dolor.',
      hy: 'Այստեղ (Aquí) չկան արցունքներ,\nԱյստեղ (Aquí) չկա ցավ։',
    },
    memorizationTrick: {
      es: 'Anáfora = A-delante. Todas las líneas arrancan con la misma palabra.',
      hy: 'Anáfora = Առջևից։ Բոլոր տողերը մեկնարկում են նույն բառով։',
    },
    confusedWith: 'Epanadiplosis',
  },
  {
    id: 'fc-hiper',
    themeId: 3,
    category: { es: 'Figuras - Morfosintáctico', hy: 'Հնարքներ - Շարահյուսական' },
    term: { es: 'Hipérbaton', hy: 'Շրջադասություն (Hipérbaton)' },
    definition: {
      es: 'Alteración del orden sintáctico habitual de los elementos de la oración.',
      hy: 'Նախադասության անդամների սովորական շարադասության գիտակցված խախտում։',
    },
    example: {
      es: 'Volverán las oscuras golondrinas.',
      hy: 'Կվերադառնան մուգ ծիծեռնակները (ենթական դրված է բայից հետո)։',
    },
    memorizationTrick: {
      es: '¡Hablar como el maestro Yoda de Star Wars!',
      hy: 'Խոսել ինչպես «Աստղային պատերազմների» վարպետ Յոդան։',
    },
  },
  {
    id: 'fc-asin',
    themeId: 3,
    category: { es: 'Figuras - Morfosintáctico', hy: 'Հնարքներ - Շարահյուսական' },
    term: { es: 'Asíndeton', hy: 'Անշաղկապություն (Asíndeton)' },
    definition: {
      es: 'Omisión voluntaria de conjunciones copulativas ("y") entre elementos para dar rapidez.',
      hy: 'Շաղկապների («y») գիտակցված բացթողում տարրերի միջև՝ արագություն հաղորդելու համար։',
    },
    example: {
      es: 'Llegué, vi, vencí, triunfé.',
      hy: 'Եկա, տեսա, հաղթեցի, տոնեցի։',
    },
    memorizationTrick: {
      es: 'A-síndeton = "A" (sin) nexos. ¡Puro sprint!',
      hy: 'A-síndeton = առանց շաղկապների, միայն արագ ստորակետներ։',
    },
    confusedWith: 'Polisíndeton',
  },
  {
    id: 'fc-poli',
    themeId: 3,
    category: { es: 'Figuras - Morfosintáctico', hy: 'Հնարքներ - Շարահյուսական' },
    term: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն (Polisíndeton)' },
    definition: {
      es: 'Repetición intencionada de la conjunción "y" o "ni" para imprimir lentitud e insistencia.',
      hy: '«Y» կամ «ni» շաղկապի միտումնավոր կրկնություն՝ խոսքին դանդաղություն և կշիռ հաղորդելու համար։',
    },
    example: {
      es: 'Y sueña y ríe y canta y goza.',
      hy: 'Ե՛վ երազում է, և՛ ծիծաղում, և՛ երգում, և՛ վայելում։',
    },
    memorizationTrick: {
      es: 'Poli- = "muchos" nexos. Y... y... y... como una procesión lenta.',
      hy: 'Poli- = բազում շաղկապներ, որոնք դանդաղեցնում են խոսքը։',
    },
    confusedWith: 'Asíndeton',
  },
  {
    id: 'fc-pleon',
    themeId: 3,
    category: { es: 'Figuras - Morfosintáctico', hy: 'Հնարքներ - Շարահյուսական' },
    term: { es: 'Pleonasmo', hy: 'Ավելաբանություն (Pleonasmo)' },
    definition: {
      es: 'Uso de palabras redundantes o innecesarias para reforzar enfáticamente la idea.',
      hy: 'Ավելորդ բառերի կիրառում՝ միտքը առավել շեշտելու և ուժեղացնելու համար։',
    },
    example: {
      es: 'Lo vi con mis propios ojos.',
      hy: 'Սեփական աչքերովս տեսա (տեսնելն արդեն աչքերով է լինում)։',
    },
    memorizationTrick: {
      es: 'Pleno = "lleno" de palabras de más que dicen lo mismo.',
      hy: 'Լիքը ավելորդ բառեր, որոնք կրկնում են նույն իմաստը։',
    },
  },
  {
    id: 'fc-meta',
    themeId: 3,
    category: { es: 'Figuras - Semántico', hy: 'Հնարքներ - Իմաստային' },
    term: { es: 'Metáfora', hy: 'Փոխաբերություն (Metáfora)' },
    definition: {
      es: 'Identificación poética entre un Término Real (A) y un Término Imaginario (B) por semejanza.',
      hy: 'Իրական եզրի (A) և Պատկերավոր եզրի (B) բանաստեղծական նույնացում՝ նմանության հիման վրա։',
    },
    example: {
      es: 'Las perlas (B) de su boca (A) sonreían.',
      hy: 'Նրա բերանի (A) մարգարիտները (B) ժպտում էին (մարգարիտներ = ատամներ)։',
    },
    memorizationTrick: {
      es: 'No dice "es COMO", sino que dice que A "ES" B.',
      hy: 'Չի ասում «նման է», այլ ասում է, որ A-ն B-ն Է։',
    },
  },
  {
    id: 'fc-r-cons',
    themeId: 2,
    category: { es: 'Métrica y rima', hy: 'Տաղաչափություն և հանգ' },
    term: { es: 'Rima consonante', hy: 'Համահունչ հանգ (Rima consonante)' },
    definition: {
      es: 'Coinciden todas las vocales y consonantes a partir de la última vocal acentuada.',
      hy: 'Համընկնում են բոլոր ձայնավորներն ու բաղաձայնները՝ վերջին շեշտված ձայնավորից սկսած։',
    },
    example: {
      es: 'canción / corazón (-ón), casa / masa (-asa).',
      hy: 'canción / corazón (-ón), casa / masa (-asa)։',
    },
    memorizationTrick: {
      es: 'Con-sonante = "Con todo": vocales + consonantes exactas.',
      hy: 'Con-sonante = ամեն ինչով՝ ձայնավորներ + բաղաձայններ։',
    },
    confusedWith: 'Rima asonante',
  },
  {
    id: 'fc-r-ason',
    themeId: 2,
    category: { es: 'Métrica y rima', hy: 'Տաղաչափություն և հանգ' },
    term: { es: 'Rima asonante', hy: 'Ձայնավորային հանգ (Rima asonante)' },
    definition: {
      es: 'Coinciden ÚNICAMENTE las vocales a partir del último acento; las consonantes cambian.',
      hy: 'Համընկնում են ՄԻԱՅՆ ձայնավորները վերջին շեշտից սկսած, իսկ բաղաձայնները տարբեր են։',
    },
    example: {
      es: 'barco / plato (a - o), puente / nieve (e - e).',
      hy: 'barco / plato (a - o), puente / nieve (e - e)։',
    },
    memorizationTrick: {
      es: 'A-sonante = "A solas las vocales".',
      hy: 'A-sonante = միայն ձայնավորները։',
    },
    confusedWith: 'Rima consonante',
  },
  {
    id: 'fc-romance',
    themeId: 7,
    category: { es: 'Literatura popular', hy: 'Ժողովրդական գրականություն' },
    term: { es: 'Romance', hy: 'Ռոմանս (Romance)' },
    definition: {
      es: 'Poema tradicional en versos de 8 sílabas con rima asonante en los versos pares.',
      hy: '8-վանկանի տողերով ավանդական չափածո՝ զույգ տողերի ձայնավորային հանգով։',
    },
    example: {
      es: 'Versos 1, 3, 5 libres; versos 2, 4, 6 riman en asonante.',
      hy: '1, 3, 5-րդ տողերը՝ ազատ, 2, 4, 6-րդ տողերը՝ ձայնավորային հանգով։',
    },
    memorizationTrick: {
      es: 'Romance = Ocho sílabas + asonante en los pares.',
      hy: 'Ռոմանս = 8 վանկ + ձայնավորային հանգ զույգ տողերում։',
    },
  },
  {
    id: 'fc-leyenda',
    themeId: 7,
    category: { es: 'Literatura popular', hy: 'Ժողովրդական գրականություն' },
    term: { es: 'Leyenda', hy: 'Ավանդազրույց / Լեգենդ (Leyenda)' },
    definition: {
      es: 'Relato que parte de un lugar real o personaje histórico con hechos sobrenaturales.',
      hy: 'Իրական վայրի կամ պատմական անձի վրա հիմնված պատմություն՝ գերբնական հավելումներով։',
    },
    example: {
      es: 'La cueva misteriosa del monte Moncayo.',
      hy: 'Մոնկայո իրական լեռան խորհրդավոր քարանձավի ավանդազրույցը։',
    },
    confusedWith: 'Mito',
  },
  {
    id: 'fc-mito',
    themeId: 7,
    category: { es: 'Literatura popular', hy: 'Ժողովրդական գրականություն' },
    term: { es: 'Mito', hy: 'Առասպել (Mito)' },
    definition: {
      es: 'Relato sagrado sobre dioses que explica el origen cósmico del mundo o de la naturaleza.',
      hy: 'Սրբազան զրույց աստվածների մասին, որը բացատրում է տիեզերքի կամ բնության ծագումը։',
    },
    example: {
      es: 'El dios Apolo conduciendo el carro del Sol.',
      hy: 'Ապոլոն աստվածը՝ արեգակի կառքը վարելիս։',
    },
    confusedWith: 'Leyenda',
  },
];
