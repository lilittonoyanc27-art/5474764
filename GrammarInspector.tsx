import React, { useState } from 'react';
import { Layers, Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { DualText } from './DualText.tsx';
import { sounds } from './audio.ts';

interface WordToken {
  word: string;
  category: string;
  categoryHy: string;
  explanation: { es: string; hy: string };
}

interface SentenceData {
  id: string;
  text: string;
  tokens: WordToken[];
  targetPrompt?: {
    category: string;
    targetWord: string;
    promptText: { es: string; hy: string };
  };
}

const sampleSentences: SentenceData[] = [
  {
    id: 's1',
    text: 'Mi hermano pequeño corre rápidamente por el parque.',
    tokens: [
      {
        word: 'Mi',
        category: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        explanation: {
          es: 'Acompaña al sustantivo "hermano" indicando posesión o pertenencia.',
          hy: 'Ուղեկցում է «hermano» (եղբայր) գոյականին՝ ցույց տալով պատկանելություն։',
        },
      },
      {
        word: 'hermano',
        category: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        explanation: {
          es: 'Nombra a una persona de la familia (género masculino, singular).',
          hy: 'Անվանում է ընտանիքի անդամ անձի (արական սեռ, եզակի թիվ)։',
        },
      },
      {
        word: 'pequeño',
        category: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        explanation: {
          es: 'Expresa una cualidad o tamaño de "hermano", concordando en masculino singular.',
          hy: 'Արտահայտում է «hermano»-ի որակը կամ չափը՝ համաձայնելով արական եզակիով։',
        },
      },
      {
        word: 'corre',
        category: 'Verbo (acción)',
        categoryHy: 'Բայ (գործողություն)',
        explanation: {
          es: 'Núcleo del predicado. Tercera persona del singular, presente de indicativo del verbo correr.',
          hy: 'Ստորոգյալի կորիզը։ Երրորդ դեմք եզակի թիվ, սահմանական եղանակի ներկա ժամանակ։',
        },
      },
      {
        word: 'rápidamente',
        category: 'Adverbio de modo',
        categoryHy: 'Ձևի մակբայ',
        explanation: {
          es: 'Palabra invariable terminada en -mente que modifica al verbo "corre" indicando cómo corre.',
          hy: 'Անփոփոխ բառ՝ -mente վերջավորությամբ, որը լրացնում է «corre» բային՝ ցույց տալով վազելու ձևը։',
        },
      },
      {
        word: 'por',
        category: 'Preposición',
        categoryHy: 'Նախդիր',
        explanation: {
          es: 'Enlace subordinante que introduce el complemento de lugar.',
          hy: 'Կապակցական բառ, որը ներմուծում է տեղի պարագան։',
        },
      },
      {
        word: 'el',
        category: 'Determinante artículo determinado',
        categoryHy: 'Որոշյալ հոդ (որոշիչ)',
        explanation: {
          es: 'Actualiza e introduce al sustantivo "parque" en masculino singular.',
          hy: 'Արական եզակիով ներկայացնում է «parque» (զբոսայգի) գոյականը։',
        },
      },
      {
        word: 'parque',
        category: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        explanation: {
          es: 'Nombra un lugar físico público de recreo.',
          hy: 'Անվանում է հասարակական հանգստի ֆիզիկական վայր։',
        },
      },
    ],
  },
  {
    id: 's2',
    text: 'Ayer compré un libro interesante.',
    tokens: [
      {
        word: 'Ayer',
        category: 'Adverbio de tiempo',
        categoryHy: 'Ժամանակի մակբայ',
        explanation: {
          es: 'Indica el momento temporal en que se realizó la acción del verbo.',
          hy: 'Ցույց է տալիս այն ժամանակը, երբ կատարվել է բայի գործողությունը։',
        },
      },
      {
        word: 'compré',
        category: 'Verbo (acción)',
        categoryHy: 'Բայ (գործողություն)',
        explanation: {
          es: 'Primera persona del singular del pretérito perfecto simple de indicativo (comprar).',
          hy: 'Առաջին դեմք եզակի թիվ, սահմանական եղանակի անցյալ կատարյալ ժամանակ։',
        },
      },
      {
        word: 'un',
        category: 'Determinante artículo indeterminado',
        categoryHy: 'Անորոշ հոդ (որոշիչ)',
        explanation: {
          es: 'Presenta al sustantivo "libro" de forma no consabida.',
          hy: 'Անորոշ կերպով ներկայացնում է «libro» (գիրք) գոյականը։',
        },
      },
      {
        word: 'libro',
        category: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        explanation: {
          es: 'Nombra un objeto material de lectura y cultura.',
          hy: 'Անվանում է ընթերցանության նյութական առարկա։',
        },
      },
      {
        word: 'interesante',
        category: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        explanation: {
          es: 'Atribuye una cualidad intrínseca al sustantivo "libro".',
          hy: 'Բնորոշում է «libro» գոյականին՝ արտահայտելով հատկանիշ։',
        },
      },
    ],
  },
];

interface GrammarInspectorProps {
  onSuccessAnswer: (pts: number) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const GrammarInspector: React.FC<GrammarInspectorProps> = ({
  onSuccessAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);
  const [selectedWordIdx, setSelectedWordIdx] = useState<number | null>(null);

  const sentence = sampleSentences[currentSentenceIdx];
  const selectedToken = selectedWordIdx !== null ? sentence.tokens[selectedWordIdx] : null;

  const handleWordClick = (idx: number) => {
    if (audioEnabled) sounds.playClick();
    setSelectedWordIdx(idx);
    onSuccessAnswer(5);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-600" />
          <h3 className="font-extrabold text-lg text-stone-900">
            Inspector Morfológico: Haz clic en cada palabra
          </h3>
        </div>

        <div className="flex gap-2">
          {sampleSentences.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentSentenceIdx(idx);
                setSelectedWordIdx(null);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                idx === currentSentenceIdx
                  ? 'bg-amber-500 text-stone-950 border-amber-600'
                  : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
              }`}
            >
              Oración {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-stone-500 font-armenian">
        Սեղմի՛ր ցանկացած բառի վրա՝ նրա քերականական խոսքի մասը և բացատրությունը տեսնելու համար։
      </p>

      {/* Interactive Sentence Words */}
      <div className="p-6 rounded-2xl bg-stone-50 border-2 border-stone-200 flex flex-wrap items-center gap-2">
        {sentence.tokens.map((token, idx) => {
          const isSelected = selectedWordIdx === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleWordClick(idx)}
              className={`px-3 py-2 rounded-xl text-lg sm:text-xl font-bold transition-all cursor-pointer border-2 select-none ${
                isSelected
                  ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-md scale-105 ring-2 ring-amber-300'
                  : 'bg-white text-stone-900 border-stone-300 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              {token.word}
            </button>
          );
        })}
      </div>

      {/* Selected Token Inspector Card */}
      {selectedToken && (
        <div className="p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-300 shadow-sm space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Palabra analizada:
              </span>
              <h4 className="text-2xl font-black text-rose-950">
                "{selectedToken.word}"
              </h4>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-rose-950 text-white text-xs font-extrabold uppercase shadow-xs">
                {selectedToken.category}
              </span>
              <div className="text-xs font-armenian text-amber-950 font-bold mt-1">
                {selectedToken.categoryHy}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-amber-200/80">
            <h5 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">
              ¿Por qué pertenece a esta categoría?
            </h5>
            <div className="text-sm text-stone-900 leading-relaxed">
              <DualText text={selectedToken.explanation} forceOpen={alwaysShowArmenian} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
