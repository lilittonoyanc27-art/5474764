import React, { useState } from 'react';
import {
  Brain,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCw,
  Eye,
  Check,
  Split,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { DualText } from './DualText.tsx';
import { flashcardsData } from './dataFlashcards.ts';
import { confusingPairs } from './dataPairs.ts';
import { FlashcardItem, ConfusingPair, UserProgress } from './types.ts';
import { sounds } from './audio.ts';

interface MemorizeViewProps {
  progress: UserProgress;
  onUpdateFlashcard: (id: string, status: 'known' | 'doubt' | 'forgotten') => void;
  onSuccessAnswer: (pts: number) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const MemorizeView: React.FC<MemorizeViewProps> = ({
  progress,
  onUpdateFlashcard,
  onSuccessAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'flashcards' | 'pairs'>('flashcards');

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState<FlashcardItem[]>(flashcardsData);

  // Confusing pairs state
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const [pairQuizAnswer, setPairQuizAnswer] = useState<'A' | 'B' | null>(null);
  const [pairQuizSubmitted, setPairQuizSubmitted] = useState(false);

  const currentCard = cards[cardIndex];
  const currentPair: ConfusingPair = confusingPairs[selectedPairIndex];

  const handleFlip = () => {
    if (audioEnabled) sounds.playClick();
    setIsFlipped(!isFlipped);
  };

  const handleCardFeedback = (status: 'known' | 'doubt' | 'forgotten') => {
    if (!currentCard) return;

    if (status === 'known') {
      if (audioEnabled) sounds.playSuccess();
      onSuccessAnswer(10);
    } else if (status === 'forgotten') {
      if (audioEnabled) sounds.playWrong();
    } else {
      if (audioEnabled) sounds.playClick();
    }

    onUpdateFlashcard(currentCard.id, status);

    // Advance to next card
    setIsFlipped(false);
    if (cardIndex < cards.length - 1) {
      setCardIndex((i) => i + 1);
    } else {
      setCardIndex(0);
    }
  };

  const handlePairQuiz = (choice: 'A' | 'B') => {
    if (pairQuizSubmitted) return;
    setPairQuizAnswer(choice);
    setPairQuizSubmitted(true);

    const isCorrect = choice === currentPair.quickCheck.correctTerm;
    if (isCorrect) {
      if (audioEnabled) sounds.playSuccess();
      onSuccessAnswer(15);
    } else {
      if (audioEnabled) sounds.playWrong();
    }
  };

  const handleNextPair = () => {
    setPairQuizAnswer(null);
    setPairQuizSubmitted(false);
    setSelectedPairIndex((idx) => (idx + 1) % confusingPairs.length);
  };

  // Stats calculation
  const knownCount = Object.values(progress.flashcardStatus).filter((s) => s === 'known').length;
  const doubtCount = Object.values(progress.flashcardStatus).filter((s) => s === 'doubt').length;
  const forgottenCount = Object.values(progress.flashcardStatus).filter((s) => s === 'forgotten').length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8 border border-amber-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400 text-stone-950 rounded-xl shadow-md">
              <Brain className="w-6 h-6 text-amber-950" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Memoriza las Reglas
              </h2>
              <p className="text-amber-200 font-armenian text-sm sm:text-base font-semibold">
                Անգիր սովորիր կանոնները — Ակտիվ հիշողության համակարգ
              </p>
            </div>
          </div>

          {/* Subtabs switcher */}
          <div className="flex items-center gap-2 bg-black/30 p-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveSubTab('flashcards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'flashcards'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-rose-200 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tarjetas Activas</span>
            </button>
            <button
              onClick={() => setActiveSubTab('pairs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'pairs'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-rose-200 hover:text-white'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>11 Parejas Confusas</span>
            </button>
          </div>
        </div>

        {/* Spaced repetition stats chips */}
        {activeSubTab === 'flashcards' && (
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
            <span className="text-rose-200">Tu estado de retención:</span>
            <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-semibold flex items-center gap-1">
              <Check className="w-3 h-3" /> Dominadas: {knownCount}
            </span>
            <span className="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Con dudas: {doubtCount}
            </span>
            <span className="bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-full border border-rose-500/30 font-semibold flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> Por repasar: {forgottenCount}
            </span>
          </div>
        )}
      </div>

      {/* SUBTAB 1: ACTIVE RECALL FLASHCARDS */}
      {activeSubTab === 'flashcards' && currentCard && (
        <div className="max-w-2xl mx-auto">
          {/* Progress indicator */}
          <div className="flex justify-between items-center text-xs text-stone-500 mb-2 font-semibold">
            <span>Tarjeta {cardIndex + 1} de {cards.length}</span>
            <span className="bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200">
              <DualText text={currentCard.category} size="sm" forceOpen={alwaysShowArmenian} />
            </span>
          </div>

          {/* Flashcard container */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-stone-200 overflow-hidden min-h-[380px] flex flex-col justify-between transition-all">
            {/* Front of card (always visible) */}
            <div className="p-8 text-center border-b border-stone-100">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                Término
              </span>
              <div className="mt-4">
                <DualText
                  text={currentCard.term}
                  as="h3"
                  size="3xl"
                  weight="extrabold"
                  color="text-stone-900"
                  showAudio={true}
                  forceOpen={alwaysShowArmenian}
                />
              </div>

              {!isFlipped && (
                <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-stone-700 text-sm">
                  <p className="font-medium">
                    🤔 Intenta recordar su definición exacta en tu mente antes de mirar.
                  </p>
                  <p className="font-armenian text-xs text-amber-900 mt-1">
                    Փորձի՛ր նախ մտքիդ մեջ հիշել սահմանումը, հետո միայն բացիր։
                  </p>
                </div>
              )}
            </div>

            {/* Back of card (revealed on flip) */}
            {isFlipped ? (
              <div className="p-8 bg-stone-50/70 flex-1 space-y-4 animate-in fade-in">
                {/* Definition */}
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                    Definición oficial:
                  </h4>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <DualText
                      text={currentCard.definition}
                      size="base"
                      weight="medium"
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>

                {/* Example */}
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                    Ejemplo canónico:
                  </h4>
                  <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-stone-900 italic font-serif">
                    <DualText
                      text={currentCard.example}
                      size="sm"
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>

                {/* Mnemonic trick if available */}
                {currentCard.memorizationTrick && (
                  <div className="p-3 bg-amber-100/70 rounded-xl border border-amber-300 text-amber-950 text-xs">
                    <strong className="block font-bold mb-0.5">💡 Truco de memoria:</strong>
                    <DualText text={currentCard.memorizationTrick} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 flex items-center justify-center flex-1">
                <button
                  type="button"
                  onClick={handleFlip}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                >
                  <Eye className="w-5 h-5" />
                  <span>Girar tarjeta y ver definición</span>
                </button>
              </div>
            )}

            {/* Action buttons (only when flipped) */}
            {isFlipped && (
              <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-stone-600">
                  ¿Cómo lo recordaste?
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCardFeedback('forgotten')}
                    className="px-3 py-2 bg-rose-100 hover:bg-rose-200 text-rose-900 text-xs font-bold rounded-lg border border-rose-300 cursor-pointer transition-colors"
                  >
                    No lo recuerdo
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCardFeedback('doubt')}
                    className="px-3 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold rounded-lg border border-amber-300 cursor-pointer transition-colors"
                  >
                    Tengo dudas
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCardFeedback('known')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>¡Lo sé bien! (+10 pts)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick skip */}
          <div className="flex justify-between items-center mt-4 text-xs text-stone-500">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((i) => (i > 0 ? i - 1 : cards.length - 1));
              }}
              className="hover:text-stone-900 cursor-pointer"
            >
              ← Anterior
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((i) => (i + 1) % cards.length);
              }}
              className="hover:text-stone-900 cursor-pointer"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 2: CONFUSING PAIRS COMPARATOR */}
      {activeSubTab === 'pairs' && currentPair && (
        <div className="space-y-6">
          {/* Pair selector tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {confusingPairs.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => {
                  setSelectedPairIndex(idx);
                  setPairQuizAnswer(null);
                  setPairQuizSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all border ${
                  idx === selectedPairIndex
                    ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span>{pair.badge}: </span>
                <span>{pair.termA.name.es} vs {pair.termB.name.es}</span>
              </button>
            ))}
          </div>

          {/* Side by side comparison card */}
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-stone-900 to-rose-950 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 bg-amber-400 text-stone-950 rounded">
                  {currentPair.badge}
                </span>
                <div className="mt-2">
                  <DualText
                    text={currentPair.title}
                    as="h3"
                    size="2xl"
                    weight="bold"
                    color="text-white"
                    forceOpen={alwaysShowArmenian}
                  />
                </div>
              </div>
            </div>

            {/* Split cards A & B */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              {/* Term A */}
              <div className="p-6 space-y-4 bg-amber-50/30">
                <div className="inline-block px-3 py-1 bg-amber-200/80 text-amber-950 text-xs font-bold rounded-lg uppercase">
                  Opción A
                </div>
                <DualText
                  text={currentPair.termA.name}
                  as="h4"
                  size="xl"
                  weight="extrabold"
                  color="text-stone-900"
                  showAudio={true}
                  forceOpen={alwaysShowArmenian}
                />
                <div>
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Definición:
                  </h5>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <DualText text={currentPair.termA.definition} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Ejemplo:
                  </h5>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-stone-900 italic font-serif">
                    <DualText text={currentPair.termA.example} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                </div>
                <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-300/80 text-xs text-amber-950">
                  <strong className="block mb-0.5">⚡ Truco clave:</strong>
                  <DualText text={currentPair.termA.trick} size="sm" forceOpen={alwaysShowArmenian} />
                </div>
              </div>

              {/* Term B */}
              <div className="p-6 space-y-4 bg-rose-50/30">
                <div className="inline-block px-3 py-1 bg-rose-200/80 text-rose-950 text-xs font-bold rounded-lg uppercase">
                  Opción B
                </div>
                <DualText
                  text={currentPair.termB.name}
                  as="h4"
                  size="xl"
                  weight="extrabold"
                  color="text-stone-900"
                  showAudio={true}
                  forceOpen={alwaysShowArmenian}
                />
                <div>
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Definición:
                  </h5>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <DualText text={currentPair.termB.definition} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Ejemplo:
                  </h5>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-stone-900 italic font-serif">
                    <DualText text={currentPair.termB.example} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                </div>
                <div className="p-3 bg-rose-100/60 rounded-xl border border-rose-300/80 text-xs text-rose-950">
                  <strong className="block mb-0.5">⚡ Truco clave:</strong>
                  <DualText text={currentPair.termB.trick} size="sm" forceOpen={alwaysShowArmenian} />
                </div>
              </div>
            </div>

            {/* Key Difference Highlight */}
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider">
                    Diferencia definitiva para no confundirlos en el examen:
                  </h5>
                  <div className="mt-1">
                    <DualText
                      text={currentPair.keyDifference}
                      size="base"
                      weight="semibold"
                      color="text-stone-900"
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick interactive test on this pair */}
            <div className="p-6 bg-stone-900 text-white border-t border-stone-800">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">
                  Comprobación rápida: ¿A o B?
                </h4>
              </div>

              <div className="mb-4">
                <DualText
                  text={currentPair.quickCheck.question}
                  size="base"
                  weight="medium"
                  color="text-stone-100"
                  forceOpen={alwaysShowArmenian}
                />
              </div>

              {/* Sample text */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-amber-300 font-serif italic mb-4">
                <DualText
                  text={currentPair.quickCheck.sampleText}
                  size="base"
                  showAudio={true}
                  forceOpen={alwaysShowArmenian}
                />
              </div>

              {/* Answer options A and B */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={pairQuizSubmitted}
                  onClick={() => handlePairQuiz('A')}
                  className={`p-4 rounded-xl font-bold text-sm text-left transition-all cursor-pointer border-2 ${
                    pairQuizSubmitted
                      ? currentPair.quickCheck.correctTerm === 'A'
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : pairQuizAnswer === 'A'
                        ? 'bg-rose-600 text-white border-rose-400'
                        : 'bg-stone-800 text-stone-400 border-stone-700'
                      : 'bg-stone-800 hover:bg-stone-700 text-white border-stone-700 hover:border-amber-400'
                  }`}
                >
                  <div className="text-xs uppercase text-amber-400 mb-1">Opción A</div>
                  <DualText text={currentPair.termA.name} size="base" forceOpen={alwaysShowArmenian} />
                </button>

                <button
                  type="button"
                  disabled={pairQuizSubmitted}
                  onClick={() => handlePairQuiz('B')}
                  className={`p-4 rounded-xl font-bold text-sm text-left transition-all cursor-pointer border-2 ${
                    pairQuizSubmitted
                      ? currentPair.quickCheck.correctTerm === 'B'
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : pairQuizAnswer === 'B'
                        ? 'bg-rose-600 text-white border-rose-400'
                        : 'bg-stone-800 text-stone-400 border-stone-700'
                      : 'bg-stone-800 hover:bg-stone-700 text-white border-stone-700 hover:border-amber-400'
                  }`}
                >
                  <div className="text-xs uppercase text-rose-400 mb-1">Opción B</div>
                  <DualText text={currentPair.termB.name} size="base" forceOpen={alwaysShowArmenian} />
                </button>
              </div>

              {/* Feedback */}
              {pairQuizSubmitted && (
                <div
                  className={`mt-4 p-4 rounded-xl border animate-in fade-in ${
                    pairQuizAnswer === currentPair.quickCheck.correctTerm
                      ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                      : 'bg-rose-950/80 border-rose-600 text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {pairQuizAnswer === currentPair.quickCheck.correctTerm ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>¡Correcto! Has diferenciado perfectamente ambos conceptos.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-400" />
                        <span>¡Incorrecto! Revisa la explicación:</span>
                      </>
                    )}
                  </div>
                  <div className="text-xs leading-relaxed mt-2 text-stone-200">
                    <DualText
                      text={currentPair.quickCheck.explanation}
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={handleNextPair}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Siguiente pareja</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
