import React, { useState, useEffect } from 'react';
import {
  Gamepad2,
  Trophy,
  Timer,
  Volume2,
  Layers,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Split,
  Eye,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DualText } from './DualText.tsx';
import { ExerciseItem } from './types.ts';
import { allQuestions, getRandomQuestions } from './dataQuestions.ts';
import { flashcardsData } from './dataFlashcards.ts';
import { sounds, speakSpanish } from './audio.ts';

interface GamesHubProps {
  onSuccessAnswer: (pts: number) => void;
  onMistakeAnswer: (exerciseId: string) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const GamesHub: React.FC<GamesHubProps> = ({
  onSuccessAnswer,
  onMistakeAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  // MILLONARIO GAME STATE (Juego 12)
  const [millonarioQuestions, setMillonarioQuestions] = useState<ExerciseItem[]>([]);
  const [millonarioLevel, setMillonarioLevel] = useState<number>(0);
  const [used5050, setUsed5050] = useState(false);
  const [usedPass, setUsedPass] = useState(false);
  const [eliminatedOptionIds, setEliminatedOptionIds] = useState<string[]>([]);
  const [millonarioGameOver, setMillonarioGameOver] = useState(false);
  const [millonarioWon, setMillonarioWon] = useState(false);

  // MEMORIA VISUAL STATE (Juego 13)
  interface MemoryCard {
    id: string;
    pairId: string;
    text: { es: string; hy: string };
    type: 'term' | 'def';
    isFlipped: boolean;
    isMatched: boolean;
  }
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [firstCardIndex, setFirstCardIndex] = useState<number | null>(null);
  const [isProcessingMatch, setIsProcessingMatch] = useState(false);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);

  // RESPONDE RÁPIDO STATE (Juego 8)
  const [quickQuestions, setQuickQuestions] = useState<ExerciseItem[]>([]);
  const [quickIndex, setQuickIndex] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quickScore, setQuickScore] = useState(0);
  const [quickFinished, setQuickFinished] = useState(false);

  // ESCUCHA Y RESPONDE (Juego 14)
  const [listenQuestions, setListenQuestions] = useState<ExerciseItem[]>([]);
  const [listenIndex, setListenIndex] = useState(0);
  const [listenSelectedId, setListenSelectedId] = useState<string | null>(null);

  // PAIRS MATCHING (Juego 4)
  const [matchingLeft, setMatchingLeft] = useState<{ id: string; text: { es: string; hy: string } }[]>([]);
  const [matchingRight, setMatchingRight] = useState<{ id: string; text: { es: string; hy: string } }[]>([]);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);

  // CLASSIFY CATEGORIES (Juego 7)
  const [classifyItems, setClassifyItems] = useState<{ id: string; word: string; category: string; hy: string }[]>([]);
  const [placedItems, setPlacedItems] = useState<Record<string, string>>({}); // itemId -> category

  // 15 Games metadata
  const gameCards = [
    { id: 'millonario', title: '¿Quién quiere ser millonario?', hy: 'Ո՞վ է ուզում դառնալ միլիոնատեր', icon: Trophy, desc: '15 preguntas con comodines 50:50 y saltar pregunta' },
    { id: 'memoria', title: 'Memoria Visual', hy: 'Տեսողական հիշողության խաղ', icon: Layers, desc: 'Encuentra las parejas de términos y definiciones' },
    { id: 'escucha', title: 'Escucha y Responde', hy: 'Լսի՛ր և պատասխանի՛ր', icon: Volume2, desc: 'Entrena tu oído con pronunciación en español de España' },
    { id: 'rapido', title: 'Responde Rápido', hy: 'Արագ արձագանքման խաղ', icon: Timer, desc: '10 preguntas a contrarreloj con temporizador opcional' },
    { id: 'parejas', title: 'Une las Parejas', hy: 'Միացրո՛ւ զույգերը', icon: Split, desc: 'Conecta cada concepto literario con su definición' },
    { id: 'clasifica', title: 'Arrastra y Clasifica', hy: 'Դասակարգի՛ր խոսքի մասերը', icon: BookOpen, desc: 'Coloca cada palabra en su categoría gramatical correcta' },
  ];

  // =====================================
  // INITIALIZERS
  // =====================================
  const startMillonario = () => {
    const qList = getRandomQuestions(15);
    setMillonarioQuestions(qList);
    setMillonarioLevel(0);
    setUsed5050(false);
    setUsedPass(false);
    setEliminatedOptionIds([]);
    setMillonarioGameOver(false);
    setMillonarioWon(false);
    setSelectedGame('millonario');
  };

  const startMemoria = () => {
    const chosen = [...flashcardsData].sort(() => Math.random() - 0.5).slice(0, 6);
    const cards: MemoryCard[] = [];
    chosen.forEach((item, idx) => {
      cards.push({
        id: `card-term-${idx}`,
        pairId: `pair-${idx}`,
        text: item.term,
        type: 'term',
        isFlipped: false,
        isMatched: false,
      });
      cards.push({
        id: `card-def-${idx}`,
        pairId: `pair-${idx}`,
        text: item.definition,
        type: 'def',
        isFlipped: false,
        isMatched: false,
      });
    });
    setMemoryCards(cards.sort(() => Math.random() - 0.5));
    setFirstCardIndex(null);
    setIsProcessingMatch(false);
    setMatchedPairsCount(0);
    setSelectedGame('memoria');
  };

  const startRapido = () => {
    const qList = getRandomQuestions(10);
    setQuickQuestions(qList);
    setQuickIndex(0);
    setTimeLeft(15);
    setQuickScore(0);
    setQuickFinished(false);
    setSelectedGame('rapido');
  };

  const startEscucha = () => {
    const qList = getRandomQuestions(8);
    setListenQuestions(qList);
    setListenIndex(0);
    setListenSelectedId(null);
    setSelectedGame('escucha');
  };

  const startParejas = () => {
    const subset = flashcardsData.slice(0, 4);
    const left = subset.map((s) => ({ id: s.id, text: s.term }));
    const right = subset.map((s) => ({ id: s.id, text: s.definition })).sort(() => Math.random() - 0.5);
    setMatchingLeft(left);
    setMatchingRight(right);
    setSelectedLeftId(null);
    setMatchedPairIds([]);
    setSelectedGame('parejas');
  };

  const startClasifica = () => {
    const sampleWords = [
      { id: 'w1', word: 'Castillo', category: 'Sustantivo', hy: 'Ամրոց (Գոյական)' },
      { id: 'w2', word: 'Nosotros', category: 'Pronombre', hy: 'Մենք (Դերանուն)' },
      { id: 'w3', word: 'Brillante', category: 'Adjetivo', hy: 'Փայլուն (Ածական)' },
      { id: 'w4', word: 'Caminaban', category: 'Verbo', hy: 'Քայլում էին (Բայ)' },
      { id: 'w5', word: 'Rápidamente', category: 'Adverbio', hy: 'Արագորեն (Մակբայ)' },
      { id: 'w6', word: 'Bajo', category: 'Preposición', hy: 'Տակ (Նախդիր)' },
    ];
    setClassifyItems(sampleWords.sort(() => Math.random() - 0.5));
    setPlacedItems({});
    setSelectedGame('clasifica');
  };

  // Timer for Quick Fire
  useEffect(() => {
    if (selectedGame !== 'rapido' || quickFinished || !timerEnabled) return;
    if (timeLeft <= 0) {
      // Time up
      if (audioEnabled) sounds.playWrong();
      handleQuickNext(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedGame, quickFinished, timerEnabled, timeLeft]);

  // Millonario ladder values
  const prizeLadder = [
    '100 €', '200 €', '300 €', '500 €', '1.000 € ★',
    '2.000 €', '4.000 €', '8.000 €', '16.000 €', '32.000 € ★',
    '64.000 €', '125.000 €', '250.000 €', '500.000 €', '1.000.000 € 🏆'
  ];

  const handleMillonarioAnswer = (opt: NonNullable<ExerciseItem['options']>[0]) => {
    if (millonarioGameOver || millonarioWon) return;

    if (opt.isCorrect) {
      if (audioEnabled) sounds.playSuccess();
      onSuccessAnswer(30);

      if (millonarioLevel === 14) {
        setMillonarioWon(true);
        if (audioEnabled) sounds.playFanfare();
        try {
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.5 } });
        } catch {}
      } else {
        setMillonarioLevel((l) => l + 1);
        setEliminatedOptionIds([]);
      }
    } else {
      if (audioEnabled) sounds.playWrong();
      setMillonarioGameOver(true);
      onMistakeAnswer(millonarioQuestions[millonarioLevel].id);
    }
  };

  const handle5050 = () => {
    if (used5050 || millonarioGameOver) return;
    setUsed5050(true);
    if (audioEnabled) sounds.playLifeline();
    const currentQ = millonarioQuestions[millonarioLevel];
    if (!currentQ.options) return;
    const incorrect = currentQ.options.filter((o) => !o.isCorrect);
    const toEliminate = incorrect.slice(0, 2).map((o) => o.id);
    setEliminatedOptionIds(toEliminate);
  };

  const handlePass = () => {
    if (usedPass || millonarioGameOver) return;
    setUsedPass(true);
    if (audioEnabled) sounds.playLifeline();
    if (millonarioLevel < 14) {
      setMillonarioLevel((l) => l + 1);
      setEliminatedOptionIds([]);
    }
  };

  // Memory card click
  const handleMemoryCardClick = (idx: number) => {
    if (isProcessingMatch || memoryCards[idx].isFlipped || memoryCards[idx].isMatched) return;

    if (audioEnabled) sounds.playClick();
    const updated = [...memoryCards];
    updated[idx].isFlipped = true;
    setMemoryCards(updated);

    if (firstCardIndex === null) {
      setFirstCardIndex(idx);
    } else {
      // Check match
      setIsProcessingMatch(true);
      const first = memoryCards[firstCardIndex];
      const second = updated[idx];

      if (first.pairId === second.pairId && first.type !== second.type) {
        // MATCH!
        setTimeout(() => {
          if (audioEnabled) sounds.playSuccess();
          onSuccessAnswer(20);
          updated[firstCardIndex].isMatched = true;
          updated[idx].isMatched = true;
          setMemoryCards([...updated]);
          setFirstCardIndex(null);
          setIsProcessingMatch(false);
          setMatchedPairsCount((c) => {
            const next = c + 1;
            if (next === 6) {
              if (audioEnabled) sounds.playFanfare();
              try {
                confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
              } catch {}
            }
            return next;
          });
        }, 500);
      } else {
        // NO MATCH
        setTimeout(() => {
          if (audioEnabled) sounds.playWrong();
          updated[firstCardIndex].isFlipped = false;
          updated[idx].isFlipped = false;
          setMemoryCards([...updated]);
          setFirstCardIndex(null);
          setIsProcessingMatch(false);
        }, 1000);
      }
    }
  };

  // Quick Fire next
  const handleQuickNext = (correct: boolean) => {
    if (correct) {
      if (audioEnabled) sounds.playSuccess();
      setQuickScore((s) => s + 10);
      onSuccessAnswer(10);
    }
    if (quickIndex < quickQuestions.length - 1) {
      setQuickIndex((i) => i + 1);
      setTimeLeft(15);
    } else {
      setQuickFinished(true);
      if (audioEnabled) sounds.playFanfare();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* ARCADE MENU */}
      {!selectedGame && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-400 text-stone-950 rounded-xl shadow-md">
                <Gamepad2 className="w-7 h-7 text-amber-950" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Salón de Juegos y Desafíos
                </h2>
                <p className="text-amber-200 font-armenian text-sm font-semibold mt-0.5">
                  Խաղային սրահ — 15 ինտերակտիվ վարժություններ և առաջադրանքներ
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
              Consolida la métrica, las figuras retóricas, las funciones de la lengua y las categorías gramaticales mientras ganas puntos y trofeos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gameCards.map((g) => {
              const IconComp = g.icon;
              return (
                <div
                  key={g.id}
                  onClick={() => {
                    if (g.id === 'millonario') startMillonario();
                    else if (g.id === 'memoria') startMemoria();
                    else if (g.id === 'rapido') startRapido();
                    else if (g.id === 'escucha') startEscucha();
                    else if (g.id === 'parejas') startParejas();
                    else if (g.id === 'clasifica') startClasifica();
                  }}
                  className="bg-white rounded-2xl p-6 shadow-md border-2 border-stone-200 hover:border-amber-500 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-amber-900 transition-colors">
                      {g.title}
                    </h3>
                    <p className="font-armenian text-xs text-amber-800 font-medium mt-0.5">
                      {g.hy}
                    </p>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
                    <span>Jugar ahora</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 12: ¿QUIÉN QUIERE SER MILLONARIO? */}
      {selectedGame === 'millonario' && (
        <div className="bg-stone-950 text-white rounded-2xl p-6 shadow-2xl border border-amber-500/40 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <div>
                <h3 className="text-xl font-extrabold text-amber-300">
                  ¿Quién quiere ser millonario?
                </h3>
                <span className="text-xs font-armenian text-stone-300">Ո՞վ է ուզում դառնալ միլիոնատեր</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={used5050 || millonarioGameOver}
                onClick={handle5050}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  used5050 ? 'opacity-30 border-stone-700 bg-stone-900 text-stone-500' : 'bg-amber-500 text-stone-950 border-amber-400 hover:bg-amber-400'
                }`}
              >
                Comodín 50:50
              </button>
              <button
                disabled={usedPass || millonarioGameOver}
                onClick={handlePass}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  usedPass ? 'opacity-30 border-stone-700 bg-stone-900 text-stone-500' : 'bg-amber-500 text-stone-950 border-amber-400 hover:bg-amber-400'
                }`}
              >
                Pasar pregunta
              </button>
              <button
                onClick={() => setSelectedGame(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-400 hover:text-white"
              >
                Salir
              </button>
            </div>
          </div>

          {/* Current Question & Ladder */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              {millonarioQuestions[millonarioLevel] && (
                <>
                  <div className="p-6 rounded-2xl bg-stone-900 border-2 border-amber-500/30 text-center">
                    <span className="text-xs text-amber-400 uppercase font-extrabold tracking-widest block mb-2">
                      Pregunta por {prizeLadder[millonarioLevel]}
                    </span>
                    <DualText
                      text={millonarioQuestions[millonarioLevel].question}
                      size="xl"
                      weight="bold"
                      color="text-white"
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>

                  {/* 4 Choices A, B, C, D */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {millonarioQuestions[millonarioLevel].options?.map((opt, idx) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isEliminated = eliminatedOptionIds.includes(opt.id);

                      if (isEliminated) {
                        return (
                          <div
                            key={opt.id}
                            className="p-4 rounded-xl border border-stone-800 bg-stone-900/40 text-stone-700 opacity-20"
                          >
                            <span className="font-bold">{letter}: </span>[Eliminado]
                          </div>
                        );
                      }

                      return (
                        <div
                          key={opt.id}
                          className="p-4 rounded-xl border-2 border-stone-700 bg-stone-900 hover:border-amber-400 transition-all flex items-start gap-3 select-none"
                        >
                          <button
                            type="button"
                            onClick={() => handleMillonarioAnswer(opt)}
                            className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-bold flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-amber-400"
                          >
                            {letter}
                          </button>
                          <div className="flex-1 pt-0.5">
                            <DualText text={opt.text} size="base" forceOpen={alwaysShowArmenian} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* Game Over or Won banners */}
              {millonarioGameOver && (
                <div className="p-5 bg-rose-950/90 border border-rose-500 text-center rounded-xl animate-in fade-in">
                  <h4 className="text-lg font-bold text-rose-200">¡Respuesta incorrecta!</h4>
                  <p className="text-xs text-rose-300 mt-1">Has llegado al nivel {millonarioLevel + 1}.</p>
                  <button
                    onClick={startMillonario}
                    className="mt-4 px-6 py-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-md"
                  >
                    Volver a intentarlo
                  </button>
                </div>
              )}

              {millonarioWon && (
                <div className="p-5 bg-emerald-950/90 border border-emerald-500 text-center rounded-xl animate-in fade-in">
                  <h4 className="text-2xl font-extrabold text-amber-300">¡ENHORABUENA! ¡ERES MILLONARIO!</h4>
                  <p className="text-xs text-emerald-300 font-armenian mt-1">Շնորհավորո՛ւմ ենք, դու հասար 1.000.000 €-ի:</p>
                  <button
                    onClick={() => setSelectedGame(null)}
                    className="mt-4 px-6 py-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-md"
                  >
                    Volver al menú de juegos
                  </button>
                </div>
              )}
            </div>

            {/* Ladder list */}
            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800 space-y-1">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                Escala de premios:
              </h4>
              {[...prizeLadder].reverse().map((prize, revIdx) => {
                const actualLevel = 14 - revIdx;
                const isCurrent = actualLevel === millonarioLevel;
                const isPast = actualLevel < millonarioLevel;

                return (
                  <div
                    key={prize}
                    className={`px-3 py-1 rounded text-xs flex justify-between font-bold ${
                      isCurrent
                        ? 'bg-amber-500 text-stone-950 animate-pulse'
                        : isPast
                        ? 'text-emerald-400'
                        : 'text-stone-500'
                    }`}
                  >
                    <span>{actualLevel + 1}.</span>
                    <span>{prize}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* GAME 13: MEMORIA VISUAL */}
      {selectedGame === 'memoria' && (
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-stone-200 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-600" />
                <span>Memoria Visual — Empareja Término y Definición</span>
              </h3>
              <p className="text-xs text-stone-500 font-armenian">
                Գտի՛ր տերմինի և նրա սահմանման համապատասխան զույգերը։
              </p>
            </div>
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              ← Volver al menú
            </button>
          </div>

          <div className="text-xs text-stone-600 font-semibold">
            Parejas encontradas: {matchedPairsCount} de 6
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {memoryCards.map((card, idx) => (
              <div
                key={card.id}
                onClick={() => handleMemoryCardClick(idx)}
                className={`h-36 rounded-xl border-2 p-3 transition-all duration-300 flex items-center justify-center text-center cursor-pointer select-none ${
                  card.isMatched
                    ? 'bg-emerald-100 border-emerald-500 text-emerald-950 opacity-80 cursor-default'
                    : card.isFlipped
                    ? 'bg-amber-50 border-amber-500 text-stone-900 shadow-md scale-102'
                    : 'bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700 hover:border-amber-400'
                }`}
              >
                {card.isFlipped || card.isMatched ? (
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-stone-200 text-stone-800">
                      {card.type === 'term' ? 'Término' : 'Definición'}
                    </span>
                    <div className="text-xs font-bold leading-snug">
                      <DualText text={card.text} size="sm" forceOpen={alwaysShowArmenian} />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <HelpCircle className="w-6 h-6 text-amber-400" />
                    <span className="text-[11px] font-bold text-stone-300">Descubrir</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {matchedPairsCount === 6 && (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-center animate-in fade-in">
              <h4 className="font-extrabold text-emerald-950 text-base">¡Enhorabuena! Has emparejado todos los términos.</h4>
              <button
                onClick={startMemoria}
                className="mt-3 px-5 py-2 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-sm"
              >
                Jugar otra ronda
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 8: RESPONDE RÁPIDO */}
      {selectedGame === 'rapido' && quickQuestions[quickIndex] && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-lg text-stone-900">
                Responde Rápido — Pregunta {quickIndex + 1} de 10
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setTimerEnabled(!timerEnabled)}
                className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer underline"
              >
                {timerEnabled ? 'Desactivar temporizador' : 'Activar temporizador'}
              </button>
              {timerEnabled && (
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  timeLeft <= 5 ? 'bg-red-500 text-white animate-ping' : 'bg-orange-100 text-orange-950'
                }`}>
                  ⏱ {timeLeft}s
                </span>
              )}
            </div>
          </div>

          {!quickFinished ? (
            <div className="space-y-6">
              <DualText
                text={quickQuestions[quickIndex].question}
                size="xl"
                weight="bold"
                showAudio={true}
                forceOpen={alwaysShowArmenian}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickQuestions[quickIndex].options?.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => handleQuickNext(opt.isCorrect)}
                    className="p-4 rounded-xl border-2 border-stone-200 hover:border-amber-500 bg-stone-50 hover:bg-amber-50 font-medium text-left text-sm cursor-pointer transition-all"
                  >
                    <span className="font-bold text-amber-800 mr-2">{String.fromCharCode(65 + idx)}:</span>
                    <DualText text={opt.text} size="sm" forceOpen={alwaysShowArmenian} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <Trophy className="w-12 h-12 text-amber-500 mx-auto" />
              <h4 className="text-2xl font-extrabold text-stone-900">
                ¡Ronda rápida completada!
              </h4>
              <p className="text-stone-600 text-sm">Puntuación lograda: {quickScore} puntos.</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={startRapido}
                  className="px-6 py-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-md"
                >
                  Jugar otra ronda rápida
                </button>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="px-6 py-2.5 bg-stone-200 text-stone-800 font-bold rounded-xl text-xs cursor-pointer"
                >
                  Volver al menú
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME 14: ESCUCHA Y RESPONDE */}
      {selectedGame === 'escucha' && listenQuestions[listenIndex] && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-lg text-stone-900">
                Escucha y Responde — Caso {listenIndex + 1} de {listenQuestions.length}
              </h3>
            </div>
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              ← Volver al menú
            </button>
          </div>

          <div className="text-center py-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
            <button
              onClick={() => speakSpanish(listenQuestions[listenIndex].question.es)}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold shadow-md inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              <Volume2 className="w-5 h-5" />
              <span>Escuchar en español (España)</span>
            </button>
            <p className="text-xs text-stone-500">
              Haz clic en el botón superior para escuchar la frase hablada.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-bold text-stone-700 mb-3">
              Selecciona la respuesta correcta:
            </h4>
            <div className="space-y-3">
              {listenQuestions[listenIndex].options?.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setListenSelectedId(opt.id);
                    if (opt.isCorrect) {
                      if (audioEnabled) sounds.playSuccess();
                      onSuccessAnswer(15);
                    } else {
                      if (audioEnabled) sounds.playWrong();
                    }
                  }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    listenSelectedId === opt.id
                      ? opt.isCorrect
                        ? 'bg-emerald-50 border-emerald-500'
                        : 'bg-rose-50 border-rose-500'
                      : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  <DualText text={opt.text} size="base" forceOpen={alwaysShowArmenian} />
                </button>
              ))}
            </div>

            {listenSelectedId && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setListenSelectedId(null);
                    if (listenIndex < listenQuestions.length - 1) {
                      setListenIndex((i) => i + 1);
                    } else {
                      setSelectedGame(null);
                    }
                  }}
                  className="px-6 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Siguiente audio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* GAME 4: UNE LAS PAREJAS */}
      {selectedGame === 'parejas' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2">
              <Split className="w-5 h-5 text-amber-600" />
              <span>Une las Parejas: Término y Definición</span>
            </h3>
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              ← Volver al menú
            </button>
          </div>

          <p className="text-xs text-stone-600">
            Haz clic en un término de la izquierda y luego en su definición correspondiente de la derecha.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left list (Terms) */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider">
                Términos:
              </h4>
              {matchingLeft.map((item) => {
                const isMatched = matchedPairIds.includes(item.id);
                const isSelected = selectedLeftId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (!isMatched) setSelectedLeftId(item.id);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-400 opacity-60'
                        : isSelected
                        ? 'bg-amber-100 border-amber-600 shadow-md'
                        : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <DualText text={item.text} size="base" weight="bold" forceOpen={alwaysShowArmenian} />
                  </div>
                );
              })}
            </div>

            {/* Right list (Definitions) */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider">
                Definiciones:
              </h4>
              {matchingRight.map((item) => {
                const isMatched = matchedPairIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (isMatched || !selectedLeftId) return;
                      if (selectedLeftId === item.id) {
                        // MATCH
                        if (audioEnabled) sounds.playSuccess();
                        onSuccessAnswer(15);
                        setMatchedPairIds((prev) => [...prev, item.id]);
                        setSelectedLeftId(null);
                      } else {
                        // WRONG
                        if (audioEnabled) sounds.playWrong();
                      }
                    }}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-400 opacity-60'
                        : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <DualText text={item.text} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                );
              })}
            </div>
          </div>

          {matchedPairIds.length === matchingLeft.length && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center animate-in fade-in">
              <h4 className="font-extrabold text-emerald-950">¡Excelente trabajo! Has emparejado todo.</h4>
              <button
                onClick={startParejas}
                className="mt-3 px-5 py-2 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-sm"
              >
                Volver a jugar
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 7: CLASIFICA CATEGORÍAS */}
      {selectedGame === 'clasifica' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>Clasifica las Categorías Gramaticales</span>
            </h3>
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              ← Volver al menú
            </button>
          </div>

          <div className="flex flex-wrap gap-2 p-4 bg-stone-50 rounded-xl border border-stone-200">
            {classifyItems.map((item) => (
              <span
                key={item.id}
                className="px-3 py-1.5 bg-amber-100 text-amber-950 rounded-lg text-xs font-bold border border-amber-300 shadow-xs"
              >
                {item.word} ({item.hy}) → {item.category}
              </span>
            ))}
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            Cada palabra en español cumple una función morfológica precisa. En el examen escolar de 1.º de ESO se evalúa la distinción exacta entre nombres, adjetivos, pronombres y determinantes.
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => setSelectedGame(null)}
              className="px-5 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs cursor-pointer"
            >
              Finalizar juego
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
