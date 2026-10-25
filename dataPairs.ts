import { ConfusingPair } from './types.ts';

export const confusingPairs: ConfusingPair[] = [
  {
    id: 'pair-alit-onom',
    badge: 'PAR 1',
    title: {
      es: 'Aliteración vs. Onomatopeya',
      hy: 'Հնչյունակրկնություն ընդդեմ Ձայնարկության',
    },
    termA: {
      name: { es: 'Aliteración', hy: 'Հնչյունակրկնություն (Aliteración)' },
      definition: {
        es: 'Repetición intencionada de un mismo sonido (consonante o vocal) a lo largo de una frase o verso.',
        hy: 'Նույն հնչյունի միտումնավոր կրկնություն նախադասության կամ տողի մեջ։',
      },
      trick: {
        es: 'No crea una palabra sonora nueva, sino que repite letras comunes en palabras normales.',
        hy: 'Այն չի ստեղծում նոր ձայնային բառ, այլ կրկնում է նույն տառերը սովորական բառերում։',
      },
      example: {
        es: 'El ruido con que rueda la ronca tempestad.',
        hy: 'Աղմուկը, որով գլորվում է խռպոտ փոթորիկը (կրկնվում է /r/ հնչյունը)։',
      },
    },
    termB: {
      name: { es: 'Onomatopeya', hy: 'Ձայնընդօրինակում (Onomatopeya)' },
      definition: {
        es: 'Palabra que imita directamente un sonido real de la naturaleza, un animal o un golpe.',
        hy: 'Բառ, որն անմիջապես ընդօրինակում է բնության, կենդանու կամ հարվածի իրական ձայնը։',
      },
      trick: {
        es: '¡Es una palabra que suena exactamente como el ruido! (tic-tac, pum, guau).',
        hy: 'Դա այն բառն է, որը հնչում է ճիշտ այնպես, ինչպես իրական աղմուկը (տիկ-տակ, բըմ, հաֆ)։',
      },
      example: {
        es: 'El reloj hacía tic-tac en la habitación.',
        hy: 'Ժամացույցը սենյակում տիկ-տակ էր անում։',
      },
    },
    keyDifference: {
      es: 'La aliteración es una repetición armónica de letras (/s/, /r/) en palabras habituales; la onomatopeya es una palabra-sonido que imita un ruido.',
      hy: 'Հնչյունակրկնությունը սովորական բառերի մեջ տառերի կրկնությունն է (/s/, /r/), իսկ ձայնընդօրինակումը ձայնն ընդօրինակող կոնկրետ բառ է (պում, մյաու)։',
    },
    quickCheck: {
      question: {
        es: '¿Qué figura aparece en: "En el silencio solo se escuchaba un suave susurro de abejas"?',
        hy: 'Ո՞ր հնարքն է օգտագործված. «En el silencio solo se escuchaba un suave susurro de abejas»:',
      },
      sampleText: {
        es: 'En el silencio solo se escuchaba un suave susurro de abejas.',
        hy: 'Լռության մեջ միայն լսվում էր մեղուների մեղմ շշուկը։',
      },
      correctTerm: 'A',
      explanation: {
        es: 'Es una aliteración porque repite insistentemente el sonido /s/ para evocar el zumbido de las abejas, sin usar una palabra onomatopéyica directa.',
        hy: 'Սա հնչյունակրկնություն (aliteración) է, քանի որ կրկնում է /s/ հնչյունը՝ մեղուների բզզոցը հիշեցնելու համար, առանց ձայնարկական բառ օգտագործելու։',
      },
    },
  },
  {
    id: 'pair-alit-paron',
    badge: 'PAR 2',
    title: {
      es: 'Aliteración vs. Paronomasia',
      hy: 'Հնչյունակրկնություն ընդդեմ Հարանունության',
    },
    termA: {
      name: { es: 'Aliteración', hy: 'Հնչյունակրկնություն (Aliteración)' },
      definition: {
        es: 'Repetición de fonemas similares en varias palabras sucesivas.',
        hy: 'Նման հնչյունների կրկնություն մի քանի հաջորդական բառերում։',
      },
      trick: {
        es: 'Te fijas en un solo sonido que se repite muchas veces (/t/, /r/, /s/).',
        hy: 'Ուշադրություն ես դարձնում մեկ հնչյունի վրա, որը շատ անգամ է կրկնվում։',
      },
      example: {
        es: 'Tres tristes tigres tragan trigo.',
        hy: 'Երեք տխուր վագրեր ցորեն են խժռում։',
      },
    },
    termB: {
      name: { es: 'Paronomasia', hy: 'Հարանունություն (Paronomasia)' },
      definition: {
        es: 'Juego entre dos palabras completas casi idénticas en sonido pero con significado muy diferente.',
        hy: 'Երկու գրեթե նույնահունչ, բայց բոլորովին տարբեր իմաստ ունեցող ամբողջական բառերի խաղ։',
      },
      trick: {
        es: 'Hay dos palabras "gemelas falsas" frente a frente: hombre/hambre, adaptar/adoptar.',
        hy: 'Կողք կողքի կան երկու «կեղծ երկվորյակ» բառեր՝ hombre / hambre, adaptar / adoptar։',
      },
      example: {
        es: 'El hombre caminaba con mucha hambre.',
        hy: 'Տղամարդը քայլում էր մեծ քաղցով (hombre/hambre)։',
      },
    },
    keyDifference: {
      es: 'La aliteración repite un fonema suelto a lo largo de la frase. La paronomasia enfrenta dos palabras completas que solo se diferencian por una o dos letras.',
      hy: 'Հնչյունակրկնությունը կրկնում է առանձին հնչյուն ամբողջ նախադասության մեջ։ Հարանունությունը բաղդատում է երկու ամբողջական բառեր, որոնք տարբերվում են ընդամենը մեկ կամ երկու տառով։',
    },
    quickCheck: {
      question: {
        es: '¿Qué figura predomina en: "Milicia contra malicia"?',
        hy: 'Ո՞ր հնարքն է գերակշռում. «Milicia contra malicia»:',
      },
      sampleText: {
        es: 'Milicia contra malicia.',
        hy: 'Զորքը՝ ընդդեմ չարամտության։',
      },
      correctTerm: 'B',
      explanation: {
        es: 'Es una paronomasia: enfrenta "milicia" y "malicia", dos palabras de sonido casi igual pero significado dispar.',
        hy: 'Սա հարանունություն (paronomasia) է. համադրում է «milicia» և «malicia» բառերը, որոնք գրեթե նույնահունչ են, բայց տարբեր իմաստներով։',
      },
    },
  },
  {
    id: 'pair-anaf-epan',
    badge: 'PAR 3',
    title: {
      es: 'Anáfora vs. Epanadiplosis',
      hy: 'Սկզբնակրկնություն ընդդեմ Սկզբնավերջային կրկնության',
    },
    termA: {
      name: { es: 'Anáfora', hy: 'Սկզբնակրկնություն (Anáfora)' },
      definition: {
        es: 'Repetición de palabras AL PRINCIPIO de varios versos o frases consecutivas.',
        hy: 'Բառերի կրկնությունը մի քանի հաջորդական տողերի կամ նախադասությունների ՍԿԶԲՈՒՄ։',
      },
      trick: {
        es: 'Fíjate en las primeras palabras de cada línea: si empiezan igual, es anáfora.',
        hy: 'Նայի՛ր յուրաքանչյուր տողի առաջին բառերին. եթե սկսվում են նույն բառով, ապա անաֆորա է։',
      },
      example: {
        es: 'Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada.',
        hy: 'Վաղաժամ մահը թռիչք առավ,\nՎաղաժամ լուսացավ լուսաբացը (Temprano... / Temprano...)։',
      },
    },
    termB: {
      name: { es: 'Epanadiplosis', hy: 'Սկզբնավերջային կրկնություն (Epanadiplosis)' },
      definition: {
        es: 'Repetición de la misma palabra AL PRINCIPIO y AL FINAL del MISMO verso o enunciado.',
        hy: 'Նույն բառի կրկնությունը ՆՈՒՅՆ տողի կամ նախադասության ՍԿԶԲՈՒՄ և ՎԵՐՋՈՒՄ։',
      },
      trick: {
        es: 'La frase "hace un círculo": empieza con una palabra y termina con esa mismísima palabra.',
        hy: 'Նախադասությունը շրջան է գծում. սկսվում է մի բառով և ավարտվում հենց այդ նույն բառով։',
      },
      example: {
        es: 'Verde que te quiero verde.',
        hy: 'Կանաչ, որքան եմ քեզ սիրում, կանաչ (Verde... verde)։',
      },
    },
    keyDifference: {
      es: 'La anáfora repite palabras al inicio de DIFERENTES líneas; la epanadiplosis repite la palabra en los dos extremos de la MISMA línea.',
      hy: 'Անաֆորան բառերը կրկնում է ՏԱՐԲԵՐ տողերի սկզբում, իսկ էպանադիպլոզիսը բառը կրկնում է ՄԻԵՎՆՈՒՅՆ տողի երկու ծայրերում։',
    },
    quickCheck: {
      question: {
        es: '¿Qué figura literaria es: "Silencio de la noche, callado silencio"?',
        hy: 'Ո՞ր գրական հնարքն է. «Silencio de la noche, callado silencio»:',
      },
      sampleText: {
        es: 'Silencio de la noche, callado silencio.',
        hy: 'Գիշերվա լռություն, անխոս լռություն։',
      },
      correctTerm: 'B',
      explanation: {
        es: 'Es una epanadiplosis porque el verso empieza con "Silencio" y termina con "silencio".',
        hy: 'Սա սկզբնավերջային կրկնություն (epanadiplosis) է, քանի որ տողը սկսվում է «Silencio» բառով և ավարտվում «silencio» բառով։',
      },
    },
  },
  {
    id: 'pair-asin-poli',
    badge: 'PAR 4',
    title: {
      es: 'Asíndeton vs. Polisíndeton',
      hy: 'Անշաղկապություն ընդդեմ Բազմաշաղկապության',
    },
    termA: {
      name: { es: 'Asíndeton', hy: 'Անշաղկապություն (Asíndeton)' },
      definition: {
        es: 'Supresión total de conjunciones copulativas ("y", "e", "ni"). Solo comas.',
        hy: 'Միավորող շաղկապների («y», «e», «ni») բացարձակ բացակայություն։ Միայն ստորակետներ։',
      },
      trick: {
        es: 'A-síndeton = "Sin" conjunción. Aporta rapidez, velocidad, vértigo.',
        hy: 'A-síndeton = «Առանց» շաղկապի։ Տալիս է արագություն և դինամիկ թափ։',
      },
      example: {
        es: 'Llegué, miré, sonreí, salí.',
        hy: 'Եկա, նայեցի, ժպտացի, դուրս եկա։',
      },
    },
    termB: {
      name: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն (Polisíndeton)' },
      definition: {
        es: 'Repetición innecesaria y marcada de conjunciones ("y canta y ríe y sueña").',
        hy: 'Շաղկապների շեշտված և ավելորդ կրկնություն («և՛ երգում է, և՛ ծիծաղում, և՛ երազում»)։',
      },
      trick: {
        es: 'Poli- = "Muchos" nexos. Aporta lentitud, pesadez, solemnidad e insistencia.',
        hy: 'Poli- = «Շատ» շաղկապներ։ Տալիս է դանդաղություն, ծանրություն և հանդիսավորություն։',
      },
      example: {
        es: 'Y sueña y llora y lucha y vive.',
        hy: 'Ե՛վ երազում է, և՛ լալիս, և՛ պայքարում, և՛ ապրում։',
      },
    },
    keyDifference: {
      es: 'El asíndeton elimina los nexos ("y") para correr rápido. El polisíndeton mete "y" por todas partes para caminar despacio y solemne.',
      hy: 'Անշաղկապությունը հեռացնում է «y» շաղկապները՝ խոսքն արագացնելու համար։ Բազմաշաղկապությունը ամենուր «y» է դնում՝ դանդաղ և հանդիսավոր քայլելու համար։',
    },
    quickCheck: {
      question: {
        es: '¿Qué figura hay en: "Ni las flores ni el viento ni las piedras callan"?',
        hy: 'Ո՞ր հնարքն է. «Ni las flores ni el viento ni las piedras callan»:',
      },
      sampleText: {
        es: 'Ni las flores ni el viento ni las piedras callan.',
        hy: 'Ո՛չ ծաղիկները, ո՛չ քամին, ո՛չ քարերը չեն լռում։',
      },
      correctTerm: 'B',
      explanation: {
        es: 'Es polisíndeton por la reiteración continua de la conjunción "ni... ni... ni...".',
        hy: 'Սա բազմաշաղկապություն (polisíndeton) է՝ «ni... ni... ni...» ժխտական շաղկապի անընդհատ կրկնության պատճառով։',
      },
    },
  },
  {
    id: 'pair-enum-poli',
    badge: 'PAR 5',
    title: {
      es: 'Enumeración vs. Polisíndeton',
      hy: 'Թվարկում ընդդեմ Բազմաշաղկապության',
    },
    termA: {
      name: { es: 'Enumeración', hy: 'Թվարկում (Enumeración)' },
      definition: {
        es: 'Acumulación sucesiva de varios elementos pertenecientes a un mismo campo conceptual.',
        hy: 'Միևնույն իմաստային դաշտին պատկանող մի քանի տարրերի հաջորդական կուտակում։',
      },
      trick: {
        es: 'Es una lista de cosas (libros, lápices, cuadernos). Puede o no llevar una sola "y" al final.',
        hy: 'Իրերի ցուցակ է (գրքեր, մատիտներ, տետրեր)։ Կարող է ունենալ սովորական մեկ «y» վերջում։',
      },
      example: {
        es: 'Compré manzanas, peras, uvas y plátanos.',
        hy: 'Գնեցի խնձորներ, տանձեր, խաղող և բանաններ։',
      },
    },
    termB: {
      name: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն (Polisíndeton)' },
      definition: {
        es: 'La figura consiste en la REPETICIÓN del nexo ("y... y... y..."), no en la lista en sí.',
        hy: 'Հնարքը կայանում է հենց ՇԱՂԿԱՊԻ ԿՐԿՆՈՒԹՅԱՆ մեջ («և՛... և՛... և՛...»), ոչ թե պարզապես ցուցակի մեջ։',
      },
      trick: {
        es: 'En la enumeración normal hay comas y un "y" al final. En el polisíndeton hay "y" entre cada elemento.',
        hy: 'Սովորական թվարկման մեջ ստորակետներ են և մեկ «y» վերջում։ Իսկ բազմաշաղկապության մեջ «y» կա յուրաքանչյուր բառի միջև։',
      },
      example: {
        es: 'Y manzanas y peras y uvas y plátanos.',
        hy: 'Ե՛վ խնձորներ, և՛ տանձեր, և՛ խաղող, և՛ բանաններ։',
      },
    },
    keyDifference: {
      es: 'La enumeración es el contenido (acumular elementos); el polisíndeton es el recurso sintáctico de repetir la conjunción entre todos ellos.',
      hy: 'Թվարկումը բովանդակությունն է (տարրերի կուտակում)։ Բազմաշաղկապությունը շարահյուսական հնարքն է, երբ շաղկապը կրկնվում է բոլոր տարրերի միջև։',
    },
    quickCheck: {
      question: {
        es: '¿Qué figura específica se añade cuando una enumeración tiene "y" repetida en todos sus términos?',
        hy: 'Ո՞ր հատուկ հնարքն է ավելանում, երբ թվարկումը բոլոր անդամների միջև ունի կրկնվող «y»:',
      },
      sampleText: {
        es: 'Y ríe y llora y canta y sueña.',
        hy: 'Ե՛վ ծիծաղում է, և՛ լալիս, և՛ երգում, և՛ երազում։',
      },
      correctTerm: 'B',
      explanation: {
        es: 'Aunque enumera acciones, la figura retórica destacada por la repetición deliberada del nexo "y" es el polisíndeton.',
        hy: 'Թեև թվարկում է գործողություններ, «y» շաղկապի միտումնավոր կրկնությամբ ընդգծված հիմնական ոճական հնարքը բազմաշաղկապությունն է (polisíndeton)։',
      },
    },
  },
  {
    id: 'pair-meta-literal',
    badge: 'PAR 6',
    title: {
      es: 'Metáfora vs. Lenguaje literal',
      hy: 'Փոխաբերություն ընդդեմ Բառացի լեզվի',
    },
    termA: {
      name: { es: 'Metáfora', hy: 'Փոխաբերություն (Metáfora)' },
      definition: {
        es: 'Identificación poética entre dos realidades distintas basada en una semejanza (A es B).',
        hy: 'Երկու տարբեր իրողությունների բանաստեղծական նույնացում՝ հիմնված նմանության վրա (A-ն B է)։',
      },
      trick: {
        es: 'No ocurre en el mundo real en sentido estricto: es una creación de la imaginación artística.',
        hy: 'Իրական աշխարհում բառացի չի կատարվում. գեղարվեստական երևակայության ստեղծագործություն է։',
      },
      example: {
        es: 'Las perlas de tu boca brillaban al sol.',
        hy: 'Քո բերանի մարգարիտները շողում էին արևի տակ (մարգարիտներ = ատամներ)։',
      },
    },
    termB: {
      name: { es: 'Lenguaje literal', hy: 'Բառացի լեզու (Lenguaje literal)' },
      definition: {
        es: 'Uso de las palabras con su significado exacto, directo y real del diccionario.',
        hy: 'Բառերի կիրառումն իրենց ճշգրիտ, ուղիղ և բառարանային իրական իմաստով։',
      },
      trick: {
        es: 'Dice exactamente lo que pasa en la realidad sin transformar nada.',
        hy: 'Ասում է ճիշտ այն, ինչ տեղի է ունենում իրականում՝ ոչինչ չձևափոխելով։',
      },
      example: {
        es: 'Tus dientes blancos estaban muy limpios.',
        hy: 'Քո սպիտակ ատամները շատ մաքուր էին։',
      },
    },
    keyDifference: {
      es: 'En el lenguaje literal los dientes son dientes; en la metáfora los dientes son identificados con perlas preciosas.',
      hy: 'Բառացի լեզվում ատամներն ատամներ են, իսկ փոխաբերության մեջ ատամները նույնացվում են թանկարժեք մարգարիտների հետ։',
    },
    quickCheck: {
      question: {
        es: '¿La frase "El tiempo vuela" es lenguaje literal o metáfora?',
        hy: '«El tiempo vuela» (ժամանակը թռչում է) արտահայտությունը բառացի՞ լեզու է, թե՞ փոխաբերություն:',
      },
      sampleText: {
        es: 'El tiempo vuela cuando estamos juntos.',
        hy: 'Ժամանակը թռչում է, երբ մենք միասին ենք։',
      },
      correctTerm: 'A',
      explanation: {
        es: 'Es metáfora: el tiempo no tiene alas ni plumas para volar en la realidad; se identifica su rapidez con el vuelo de un ave.',
        hy: 'Փոխաբերություն է. ժամանակն իրականում թևեր չունի թռչելու համար. նրա արագ անցնելը նույնացվում է թռչնի թռիչքի հետ։',
      },
    },
  },
  {
    id: 'pair-verso-prosa',
    badge: 'PAR 7',
    title: {
      es: 'Verso vs. Prosa',
      hy: 'Չափածո ընդդեմ Արձակի',
    },
    termA: {
      name: { es: 'Verso', hy: 'Չափածո / Բանաստեղծական տող (Verso)' },
      definition: {
        es: 'Forma de expresión artística en líneas cortas con ritmo, pausas y medida silábica premeditada.',
        hy: 'Գեղարվեստական խոսք կարճ տողերով՝ նախապես մտածված ռիթմով, դադարներով և վանկերի չափով։',
      },
      trick: {
        es: 'No llega hasta el final del renglón. Tiene música interior y a menudo rima.',
        hy: 'Չի հասնում տողի վերջին (լուսանցքին)։ Ունի ներքին երաժշտականություն և հաճախ հանգ։',
      },
      example: {
        es: 'Caminante, son tus huellas\nel camino y nada más...',
        hy: 'Ճամփորդ, քո հետքերն են\nՃանապարհը և ուրիշ ոչինչ...',
      },
    },
    termB: {
      name: { es: 'Prosa', hy: 'Արձակ (Prosa)' },
      definition: {
        es: 'Forma natural de expresión continua que ocupa todo el renglón de margen a margen.',
        hy: 'Բնական շարադրանքի ձև, որը զբաղեցնում է ամբողջ տողը՝ լուսանցքից մինչև լուսանցք։',
      },
      trick: {
        es: 'Se escribe de corrido en párrafos. Es el lenguaje de los cuentos, noticias y novelas.',
        hy: 'Գրվում է անընդմեջ՝ պարբերություններով։ Պատմվածքների, լուրերի և վեպերի լեզուն է։',
      },
      example: {
        es: 'Ayer por la tarde fuimos al cine con toda la familia para ver una película.',
        hy: 'Երեկ կեսօրին ամբողջ ընտանիքով գնացինք կինոթատրոն՝ ֆիլմ դիտելու։',
      },
    },
    keyDifference: {
      es: 'El verso se estructura en líneas breves con métrica y ritmo fijo; la prosa fluye continuada en renglones completos.',
      hy: 'Չափածոն կառուցվում է կարճ տողերով՝ հաստատուն չափով ու ռիթմով, իսկ արձակը հոսում է անընդհատ՝ ամբողջական տողերով։',
    },
    quickCheck: {
      question: {
        es: '¿Cómo se llama el texto escrito en líneas cortas con rima y ritmo: verso o prosa?',
        hy: 'Ինչպե՞ս է կոչվում կարճ տողերով, հանգով ու ռիթմով գրված տեքստը՝ չափածո՞, թե՞ արձակ:',
      },
      sampleText: {
        es: 'Cultivo una rosa blanca\nen junio como en enero...',
        hy: 'Սպիտակ վարդ եմ աճեցնում ես\nՀունիսին, ինչպես հունվարին...',
      },
      correctTerm: 'A',
      explanation: {
        es: 'Es verso, pues son líneas independientes medidas con ritmo y rima.',
        hy: 'Չափածո (verso) է, քանի որ կարճ առանձին տողեր են՝ չափված ռիթմով և հանգով։',
      },
    },
  },
  {
    id: 'pair-pop-culta',
    badge: 'PAR 8',
    title: {
      es: 'Literatura popular vs. Literatura culta',
      hy: 'Ժողովրդական ընդդեմ Հեղինակային գրականության',
    },
    termA: {
      name: { es: 'Literatura popular', hy: 'Ժողովրդական գրականություն (Popular)' },
      definition: {
        es: 'Creación colectiva y anónima transmitida oralmente de padres a hijos con variantes.',
        hy: 'Հավաքական և անհեղինակ ստեղծագործություն՝ փոխանցված բանավոր՝ սերնդեսերունդ տարբերակներով։',
      },
      trick: {
        es: '¡No hay un autor con nombre! Pertenece a la memoria del pueblo.',
        hy: 'Հայտնի հեղինակ չկա։ Պատկանում է ժողովրդի հիշողությանը։',
      },
      example: {
        es: 'Romance del conde Olinos (anónimo, oral).',
        hy: 'Կոմս Օլինոսի ռոմանսը (անհեղինակ, բանավոր)։',
      },
    },
    termB: {
      name: { es: 'Literatura culta', hy: 'Հեղինակային գրականություն (Culta)' },
      definition: {
        es: 'Creación individual de un autor con nombre conocido, fijada por escrito en libros inalterables.',
        hy: 'Հայտնի անունով հեղինակի անհատական ստեղծագործություն՝ ամրագրված գրքերում անփոփոխ կերպով։',
      },
      trick: {
        es: 'Lleva la firma de su autor (Cervantes, Bécquer, García Lorca) y tiene texto fijo.',
        hy: 'Կրում է իր հեղինակի ստորագրությունը (Սերվանտես, Բեկեր) և ունի հաստատուն տեքստ։',
      },
      example: {
        es: 'Don Quijote de la Mancha de Miguel de Cervantes.',
        hy: 'Միգել դե Սերվանտեսի «Դոն Կիխոտ» վեպը։',
      },
    },
    keyDifference: {
      es: 'Popular = Anónima + Transmisión oral + Variantes. Culta = Autor conocido + Transmisión escrita + Texto fijo.',
      hy: 'Ժողովրդական = Անհեղինակ + Բանավոր փոխանցում + Տարբերակներ։ Հեղինակային = Հայտնի հեղինակ + Գրավոր փոխանցում + Հաստատուն տեքստ։',
    },
    quickCheck: {
      question: {
        es: 'Un cantar tradicional que se canta en una fiesta de pueblo sin autor conocido, ¿a qué tipo pertenece?',
        hy: 'Ավանդական երգը, որը երգվում է գյուղական տոնին առանց հայտնի հեղինակի, ո՞ր տեսակին է պատկանում:',
      },
      sampleText: {
        es: 'Canción anónima de siega transmitida de abuelos a nietos.',
        hy: 'Հնձի անհեղինակ երգ՝ պապերից թոռներին փոխանցված։',
      },
      correctTerm: 'A',
      explanation: {
        es: 'Pertenece a la literatura popular tradicional: oral, anónima y comunitaria.',
        hy: 'Պատկանում է ժողովրդական գրականությանը՝ բանավոր, անհեղինակ և համայնքային։',
      },
    },
  },
  {
    id: 'pair-mito-leyenda',
    badge: 'PAR 9',
    title: {
      es: 'Mito vs. Leyenda',
      hy: 'Առասպել ընդդեմ Ավանդազրույցի (Լեգենդի)',
    },
    termA: {
      name: { es: 'Mito', hy: 'Առասպել (Mito)' },
      definition: {
        es: 'Relato sagrado sobre dioses o el origen del universo y las fuerzas de la naturaleza en un tiempo remoto.',
        hy: 'Սրբազան զրույց աստվածների կամ տիեզերքի ու բնության ուժերի ծագման մասին՝ անհիշելի ժամանակներում։',
      },
      trick: {
        es: 'Protagonistas: ¡DIOSES o Titanes! Explica cómo se creó el mundo, el sol o el fuego.',
        hy: 'Գլխավոր հերոսները՝ ԱՍՏՎԱԾՆԵՐԸ։ Բացատրում է, թե ինչպես ստեղծվեց աշխարհը, արևը կամ կրակը։',
      },
      example: {
        es: 'El mito de Prometeo robando el fuego a los dioses del Olimpo.',
        hy: 'Պրոմեթևսի առասպելը, որը կրակը գողացավ Օլիմպոսի աստվածներից։',
      },
    },
    termB: {
      name: { es: 'Leyenda', hy: 'Ավանդազրույց / Լեգենդ (Leyenda)' },
      definition: {
        es: 'Narración ligada a un lugar, personaje histórico o acontecimiento real concreto con toques sobrenaturales.',
        hy: 'Պատմություն՝ կապված կոնկրետ իրական վայրի, պատմական անձի կամ դեպքի հետ՝ գերբնական տարրերով։',
      },
      trick: {
        es: 'Está situada en un LUGAR REAL (un castillo, una cueva, una ciudad que existe hoy).',
        hy: 'Գտնվում է ԻՐԱԿԱՆ ՎԱՅՐՈՒՄ (ամրոց, քարանձավ, այսօր գոյություն ունեցող քաղաք)։',
      },
      example: {
        es: 'La leyenda de la dama misteriosa del castillo de Sigüenza.',
        hy: 'Սիգուենսայի իրական ամրոցի խորհրդավոր տիրուհու ավանդազրույցը։',
      },
    },
    keyDifference: {
      es: 'El mito habla de DIOSES y el origen cósmico del mundo; la leyenda parte de un LUGAR o PERSONA REAL histórica con misterio añadido.',
      hy: 'Առասպելը պատմում է ԱՍՏՎԱԾՆԵՐԻ և աշխարհի ծագման մասին, իսկ ավանդազրույցը հիմնված է ԻՐԱԿԱՆ ՎԱՅՐԻ կամ պատմական անձի վրա։',
    },
    quickCheck: {
      question: {
        es: 'Una historia sobre cómo Zeus lanzó un rayo para crear las tormentas en la Tierra es un...',
        hy: 'Մի պատմություն այն մասին, թե ինչպես Զևսը կայծակ արձակեց Երկրի վրա փոթորիկներ ստեղծելու համար, դա...',
      },
      sampleText: {
        es: 'Los dioses del Olimpo y el origen de las tormentas celestes.',
        hy: 'Օլիմպոսի աստվածները և երկնային փոթորիկների ծագումը։',
      },
      correctTerm: 'A',
      explanation: {
        es: 'Es un mito porque sus protagonistas son divinidades y explica el origen de un fenómeno natural.',
        hy: 'Առասպել (mito) է, քանի որ գործում են աստվածները և բացատրվում է բնական երևույթի ծագումը։',
      },
    },
  },
  {
    id: 'pair-sust-pron',
    badge: 'PAR 10',
    title: {
      es: 'Sustantivo vs. Pronombre',
      hy: 'Գոյական ընդդեմ Դերանվան',
    },
    termA: {
      name: { es: 'Sustantivo', hy: 'Գոյական (Sustantivo)' },
      definition: {
        es: 'Palabra que nombra directamente a personas, animales, cosas, lugares o conceptos.',
        hy: 'Բառ, որն անմիջականորեն անվանում է անձեր, կենդանիներ, իրեր, վայրեր կամ հասկացություններ։',
      },
      trick: {
        es: 'Es el nombre propio de la cosa: gato, mesa, María, libertad, colegio.',
        hy: 'Առարկայի բուն անունն է՝ gato, mesa, María, libertad, colegio։',
      },
      example: {
        es: 'El estudiante lee un libro en la biblioteca.',
        hy: 'Ուսանողը գիրք է կարդում գրադարանում։',
      },
    },
    termB: {
      name: { es: 'Pronombre', hy: 'Դերանուն (Pronombre)' },
      definition: {
        es: 'Palabra que sustituye al sustantivo para no repetirlo y realiza su misma función sintáctica.',
        hy: 'Բառ, որը փոխարինում է գոյականին՝ այն չկրկնելու համար, և կատարում է նույն շարահյուսական պաշտոնը։',
      },
      trick: {
        es: '¡Ocupa el lugar del nombre! (Él, ellos, esto, alguien, nadie).',
        hy: 'Գրավում է անվան տեղը՝ Él (նա), esto (սա), alguien (ինչ-որ մեկը)։',
      },
      example: {
        es: 'Él lee esto allí.',
        hy: 'Նա սա կարդում է այնտեղ (Él = el estudiante, esto = el libro)։',
      },
    },
    keyDifference: {
      es: 'El sustantivo nombra a la realidad; el pronombre reemplaza al sustantivo cuando ya sabemos de quién se trata.',
      hy: 'Գոյականն անվանում է իրականությունը, իսկ դերանունը փոխարինում է գոյականին, երբ արդեն գիտենք, թե ում մասին է խոսքը։',
    },
    quickCheck: {
      question: {
        es: 'En "Carlos no vino porque él estaba enfermo", ¿qué categoría es "él"?',
        hy: '«Carlos no vino porque él estaba enfermo» նախադասության մեջ ի՞նչ խոսքի մաս է «él»-ը:',
      },
      sampleText: {
        es: '...porque él estaba enfermo.',
        hy: '...որովհետև նա հիվանդ էր։',
      },
      correctTerm: 'B',
      explanation: {
        es: '"Él" es un pronombre personal que sustituye al sustantivo propio "Carlos".',
        hy: '«Él»-ը անձնական դերանուն է, որը փոխարինում է «Carlos» հատուկ գոյականին։',
      },
    },
  },
  {
    id: 'pair-det-pron',
    badge: 'PAR 11',
    title: {
      es: 'Determinante vs. Pronombre',
      hy: 'Որոշիչ ընդդեմ Դերանվան',
    },
    termA: {
      name: { es: 'Determinante', hy: 'Որոշիչ (Determinante)' },
      definition: {
        es: 'Palabra que ACOMPAÑA al sustantivo delante de él para concretarlo (este libro, mi casa).',
        hy: 'Բառ, որն ՈՒՂԵԿՑՈՒՄ Է գոյականին նրա առջև՝ այն կոնկրետացնելու համար (este libro, mi casa)։',
      },
      trick: {
        es: '¡Siempre lleva un sustantivo pegado detrás! Determinante + Sustantivo.',
        hy: 'Միշտ իր կողքին հետևից ունի գոյական։ Որոշիչ + Գոյական։',
      },
      example: {
        es: 'Este coche es muy rápido.',
        hy: 'Այս մեքենան շատ արագ է (Este + coche)։',
      },
    },
    termB: {
      name: { es: 'Pronombre', hy: 'Դերանուն (Pronombre)' },
      definition: {
        es: 'Palabra que va SOLA porque SUSTITUYE por completo al sustantivo.',
        hy: 'Բառ, որը գործածվում է ՄԵՆԱԿ, քանի որ ամբողջությամբ ՓՈԽԱՐԻՆՈՒՄ Է գոյականին։',
      },
      trick: {
        es: '¡No lleva ningún sustantivo detrás! Va solo o junto al verbo.',
        hy: 'Իրենից հետո ոչ մի գոյական չունի։ Հանդես է գալիս մենակ կամ բայի հետ։',
      },
      example: {
        es: 'Este es muy rápido.',
        hy: 'Սա շատ արագ է («Este»-ն մենակ է՝ փոխարինում է մեքենային)։',
      },
    },
    keyDifference: {
      es: 'Si va con un nombre al lado ("este lápiz") = DETERMINANTE. Si va solo sin nombre ("este es mío") = PRONOMBRE.',
      hy: 'Եթե կողքին գոյական կա («este lápiz») = ՈՐՈՇԻՉ (Determinante)։ Եթե մենակ է առանց գոյականի («este es...») = ԴԵՐԱՆՈՒՆ (Pronombre)։',
    },
    quickCheck: {
      question: {
        es: 'En "Dame ese libro y quédate con este", ¿qué es "este"?',
        hy: '«Dame ese libro y quédate con este» նախադասության մեջ ի՞նչ է վերջին «este»-ն:',
      },
      sampleText: {
        es: '...y quédate con este.',
        hy: '...իսկ սա պահիր քեզ մոտ։',
      },
      correctTerm: 'B',
      explanation: {
        es: '"Este" va solo sin sustantivo detrás; por tanto, es un pronombre demostrativo que sustituye a "libro". ("Ese", en cambio, es determinante porque acompaña a "libro").',
        hy: '«Este»-ն մենակ է առանց հետևի գոյականի, ուստի ցուցական դերանուն է (pronombre), որը փոխարինում է «libro»-ին։ (Մինչդեռ առաջին «ese»-ն որոշիչ է, քանի որ ուղեկցում է «libro»-ին)։',
      },
    },
  },
];
