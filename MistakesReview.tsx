import React, { useState } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Sparkles,
  BookOpen,
  ArrowRight,
  Check,
} from 'lucide-react';
import { DualText } from './DualText.tsx';
import { ExerciseItem, UserProgress } from './types.ts';
import { allQuestions } from './dataQuestions.ts';
import { sounds } from './audio.ts';

interface MistakesReviewProps {
  progress: UserProgress;
  onResolveMistake: (exerciseId: string) => void;
  onSuccessAnswer: (pts: number) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const MistakesReview: React.FC<MistakesReviewProps> = ({
  progress,
  onResolveMistake,
  onSuccessAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);
  const [isResolved, setIsResolved] = useState(false);

  // Retrieve actual question objects
  const mistakeQuestions = allQuestions.filter((q) => progress.mistakeIds.includes(q.id));
  const currentQ: ExerciseItem | undefined = mistakeQuestions[activeIdx];

  const handleRetrySelect = (optId: string, isCorrect: boolean) => {
    setSelectedOptId(optId);
    if (isCorrect) {
      if (audioEnabled) sounds.playSuccess();
      setIsResolved(true);
      onSuccessAnswer(15);
      onResolveMistake(currentQ.id);
    } else {
      if (audioEnabled) sounds.playWrong();
    }
  };

  const handleNext = () => {
    setSelectedOptId(null);
    setIsResolved(false);
    if (activeIdx < mistakeQuestions.length - 1) {
      setActiveIdx((i) => i + 1);
    } else {
      setActiveIdx(0);
    }
  };

  if (mistakeQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-stone-900">
          ¡No tienes ningún error pendiente!
        </h3>
        <p className="text-stone-600 font-armenian text-sm">
          Դու դեռևս չունես սխալ պատասխանած հարցեր կամ արդեն բոլորը ուղղել ես։
        </p>
        <p className="text-xs text-stone-500 max-w-md mx-auto">
          Sigue practicando en los temas o en los exámenes. Si fallas alguna pregunta, aparecerá aquí automáticamente para repasarlo con explicaciones simples.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-400 text-stone-950 rounded-xl shadow-md">
            <RotateCcw className="w-6 h-6 text-amber-950" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Repaso Personalizado de Errores
            </h2>
            <p className="text-amber-200 font-armenian text-sm font-semibold">
              Սխալների կրկնության և ամրապնդման բաժին
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
          Aquí repasamos cada pregunta donde tuviste dificultades. Te explicamos la regla en español simple con traducción al armenio y te permitimos reintentarlo para afianzar el concepto.
        </p>
      </div>

      {/* Review Box */}
      {currentQ && (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-stone-500 border-b border-stone-100 pb-3">
            <span>Error {activeIdx + 1} de {mistakeQuestions.length}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-bold">
              Tema {currentQ.themeId}
            </span>
          </div>

          <div>
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

          {currentQ.contextText && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 italic font-serif">
              <DualText
                text={currentQ.contextText}
                size="base"
                forceOpen={alwaysShowArmenian}
              />
            </div>
          )}

          {/* Detailed rule explanation card */}
          <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Regla explicada paso a paso:</span>
            </div>
            <div className="text-sm text-stone-800 leading-relaxed">
              <DualText text={currentQ.explanation} forceOpen={alwaysShowArmenian} />
            </div>
          </div>

          {/* Re-try choices */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-extrabold text-stone-500 tracking-wider">
              Vuelve a responder para dominar el concepto:
            </h4>
            {currentQ.options?.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptId === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleRetrySelect(opt.id, opt.isCorrect)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? opt.isCorrect
                        ? 'bg-emerald-50 border-emerald-500'
                        : 'bg-rose-50 border-rose-500'
                      : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    isSelected && opt.isCorrect
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-200 text-stone-800'
                  }`}>
                    {letter}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <DualText text={opt.text} size="base" forceOpen={alwaysShowArmenian} />
                  </div>
                </div>
              );
            })}
          </div>

          {isResolved && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>¡Perfecto! Has resuelto este error (+15 pts).</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 bg-stone-900 text-white font-bold rounded-lg text-xs cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>Siguiente error</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
