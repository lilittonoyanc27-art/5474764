import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCw,
  Lightbulb,
  ArrowRight,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DualText } from './DualText.tsx';
import { ExerciseItem } from './types.ts';
import { getFigurasQuestions } from './dataQuestions.ts';
import { sounds } from './audio.ts';

interface DetectiveGameProps {
  onSuccessAnswer: (points: number) => void;
  onMistakeAnswer: (exerciseId: string) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const DetectiveGame: React.FC<DetectiveGameProps> = ({
  onSuccessAnswer,
  onMistakeAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [questions, setQuestions] = useState<ExerciseItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);

  // Initialize and shuffle detective questions
  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const figuras = getFigurasQuestions();
    const shuffled = [...figuras].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setShowHint(false);
    setStreak(0);
    setScore(0);
  };

  const currentQ = questions[currentIndex];

  // Options shuffled for each question to prevent memorizing positions
  const [shuffledOptions, setShuffledOptions] = useState<NonNullable<ExerciseItem['options']>>([]);

  useEffect(() => {
    if (currentQ && currentQ.options) {
      setShuffledOptions([...currentQ.options].sort(() => Math.random() - 0.5));
    }
    setSelectedOptionId(null);
    setIsAnswered(false);
    setShowHint(false);
  }, [currentIndex, currentQ]);

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      if (audioEnabled) sounds.playSuccess();
      setStreak((s) => s + 1);
      setScore((sc) => sc + 15 + streak * 5);
      onSuccessAnswer(15 + streak * 5);

      if (streak > 0 && (streak + 1) % 3 === 0) {
        try {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        } catch {}
      }
    } else {
      if (audioEnabled) sounds.playWrong();
      setStreak(0);
      onMistakeAnswer(currentQ.id);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    } else {
      // Completed all
      if (audioEnabled) sounds.playFanfare();
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch {}
      setCurrentIndex(0);
    }
  };

  if (!currentQ) {
    return (
      <div className="text-center py-12">
        <p className="text-stone-600">Cargando preguntas de detective...</p>
      </div>
    );
  }

  const selectedOpt = shuffledOptions.find((o) => o.id === selectedOptionId);
  const isCorrectChoice = selectedOpt?.isCorrect ?? false;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Game Header */}
      <div className="bg-gradient-to-r from-rose-900 via-burgundy-900 to-amber-900 text-white rounded-2xl p-6 shadow-xl mb-6 border border-amber-500/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400 text-stone-950 rounded-xl shadow-md">
              <Sparkles className="w-6 h-6 text-amber-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 bg-amber-400/20 text-amber-300 rounded border border-amber-400/30">
                  Juego Especial — Tema 3
                </span>
                <span className="text-xs font-armenian text-amber-200">11 Գրական հնարքներ</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight mt-0.5">
                Detective de Figuras Literarias
              </h2>
              <p className="text-sm text-rose-100 font-armenian">
                Ուսումնասիրի՛ր յուրաքանչյուր նախադասություն և գտի՛ր ճիշտ գրական հնարքը։
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-black/30 px-4 py-2 rounded-xl border border-white/10">
            <div className="text-center">
              <div className="text-xs text-rose-200 uppercase font-semibold">Puntos</div>
              <div className="text-xl font-bold text-amber-300">{score}</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-xs text-rose-200 uppercase font-semibold flex items-center justify-center gap-0.5">
                <Flame className="w-3 h-3 text-orange-400" /> Racha
              </div>
              <div className="text-xl font-bold text-orange-400">{streak}</div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex justify-between text-xs text-rose-200 font-medium mb-1.5">
            <span>Caso {currentIndex + 1} de {questions.length}</span>
            <span>Aciertos consecutivos: {streak}</span>
          </div>
          <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden mb-6">
        <div className="p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-900 rounded-full text-xs font-semibold mb-4 border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Identifica la figura retórica</span>
          </div>

          <div className="mb-6">
            <DualText
              text={currentQ.question}
              as="h3"
              size="xl"
              weight="bold"
              color="text-stone-900"
              showAudio={true}
              forceOpen={alwaysShowArmenian}
            />
          </div>

          {/* Context box if available */}
          {currentQ.contextText && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
              <DualText
                text={currentQ.contextText}
                size="base"
                color="text-stone-800"
                showAudio={true}
                forceOpen={alwaysShowArmenian}
              />
            </div>
          )}

          {/* Options Grid */}
          <div className="space-y-3">
            {shuffledOptions.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptionId === option.id;
              let btnStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-900';

              if (isAnswered) {
                if (option.isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400/40';
                } else if (isSelected && !option.isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-400/40';
                } else {
                  btnStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                }
              }

              return (
                <div
                  key={option.id}
                  className={`p-4 rounded-xl border-2 transition-all flex items-start gap-3 select-none ${btnStyle}`}
                >
                  {/* Select button with letter */}
                  <button
                    type="button"
                    onClick={() => handleSelectOption(option.id, option.isCorrect)}
                    disabled={isAnswered}
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm cursor-pointer transition-colors ${
                      isAnswered
                        ? option.isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-stone-200 text-stone-600'
                        : 'bg-stone-200 text-stone-800 hover:bg-amber-500 hover:text-stone-950'
                    }`}
                  >
                    {isAnswered && option.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : isAnswered && isSelected && !option.isCorrect ? (
                      <XCircle className="w-5 h-5 text-white" />
                    ) : (
                      letter
                    )}
                  </button>

                  {/* Option bilingual text with separate translation button */}
                  <div className="flex-1 pt-0.5">
                    <DualText
                      text={option.text}
                      size="base"
                      weight="medium"
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint button */}
          {!isAnswered && currentQ.hint && (
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1.5 cursor-pointer p-2 rounded-lg hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-colors"
              >
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>{showHint ? 'Ocultar pista' : '¿Necesitas una pista? (Հուշում)'}</span>
              </button>

              {showHint && (
                <div className="mt-2 p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-stone-800">
                  <DualText text={currentQ.hint} size="sm" forceOpen={alwaysShowArmenian} />
                </div>
              )}
            </div>
          )}

          {/* Explanation Banner */}
          {isAnswered && (
            <div
              className={`mt-6 p-5 rounded-xl border animate-in fade-in slide-in-from-bottom-2 ${
                isCorrectChoice
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrectChoice ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-base">
                      {isCorrectChoice ? '¡Excelente deducción!' : '¡Respuesta incorrecta! Repasemos la regla:'}
                    </h4>
                    <span className="text-xs font-armenian">
                      {isCorrectChoice ? 'Հիանալի՛ է:' : 'Ուշադրությո՛ւն, կրկնենք կանոնը.'}
                    </span>
                  </div>

                  <div className="mt-2 text-sm leading-relaxed">
                    <DualText
                      text={currentQ.explanation}
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>
              </div>

              {/* Next button */}
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center gap-2 shadow-md cursor-pointer transition-all hover:gap-3"
                >
                  <span>Siguiente caso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Restart game bar */}
      <div className="flex justify-center">
        <button
          onClick={restartGame}
          className="text-stone-500 hover:text-stone-800 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer hover:underline"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Barajar y reiniciar detective</span>
        </button>
      </div>
    </div>
  );
};
