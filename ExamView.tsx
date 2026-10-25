import React, { useState } from 'react';
import {
  FileCheck2,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  ChevronRight,
  Sparkles,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DualText } from './DualText.tsx';
import { ExerciseItem, UserProgress } from './types.ts';
import { getRandomQuestions } from './dataQuestions.ts';
import { sounds } from './audio.ts';

interface ExamViewProps {
  progress: UserProgress;
  onSuccessAnswer: (pts: number) => void;
  onMistakeAnswer: (exerciseId: string) => void;
  onSaveExamResult: (examType: string, score: number, total: number) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const ExamView: React.FC<ExamViewProps> = ({
  onSuccessAnswer,
  onMistakeAnswer,
  onSaveExamResult,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [activeExamType, setActiveExamType] = useState<string | null>(null);
  const [examQuestions, setExamQuestions] = useState<ExerciseItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examOnlySpanish, setExamOnlySpanish] = useState(false);

  const examTiers = [
    { id: 'facil', name: 'Examen 1 — Nivel Fácil', hy: 'Մակարդակ 1 — Հեշտ', count: 20, desc: 'Conceptos fundamentales de 1.º de ESO (20 preguntas)' },
    { id: 'medio', name: 'Examen 2 — Nivel Medio', hy: 'Մակարդակ 2 — Միջին', count: 30, desc: 'Diferenciación de figuras, métrica y sintaxis (30 preguntas)' },
    { id: 'dificil', name: 'Examen 3 — Nivel Difícil', hy: 'Մակարդակ 3 — Դժվար', count: 40, desc: 'Análisis detallado de textos, categorías y parejas confusas (40 preguntas)' },
    { id: 'final', name: 'Gran Examen Final de Lengua', hy: 'Լեզվի գլխավոր ամփոփիչ քննություն', count: 50, desc: 'Simulacro oficial completo de los 8 temas escolares (50 preguntas)' },
  ];

  const startExam = (tierId: string, count: number) => {
    const questions = getRandomQuestions(count);
    setExamQuestions(questions);
    setActiveExamType(tierId);
    setCurrentIdx(0);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const handleSelectOption = (qIdx: number, optId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qIdx]: optId }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    let correct = 0;
    examQuestions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      const correctOpt = q.options?.find((o) => o.isCorrect);
      if (selected === correctOpt?.id) {
        correct++;
      } else {
        onMistakeAnswer(q.id);
      }
    });

    const percentage = Math.round((correct / examQuestions.length) * 100);
    onSaveExamResult(activeExamType || 'exam', correct, examQuestions.length);

    if (percentage >= 50) {
      if (audioEnabled) sounds.playFanfare();
      onSuccessAnswer(correct * 10);
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch {}
    } else {
      if (audioEnabled) sounds.playWrong();
    }
  };

  // Spanish school grading scale
  const getGradeText = (score: number, total: number) => {
    const mark = (score / total) * 10;
    if (mark >= 9) return { label: 'Sobresaliente (Գերազանց)', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
    if (mark >= 7) return { label: 'Notable (Լավ)', color: 'text-blue-700 bg-blue-100 border-blue-300' };
    if (mark >= 6) return { label: 'Bien (Բավարար)', color: 'text-amber-700 bg-amber-100 border-amber-300' };
    if (mark >= 5) return { label: 'Suficiente (Անցողիկ)', color: 'text-yellow-700 bg-yellow-100 border-yellow-300' };
    return { label: 'Insuficiente (Անբավարար — Պետք է կրկնել)', color: 'text-rose-700 bg-rose-100 border-rose-300' };
  };

  const totalAnswered = Object.keys(userAnswers).length;
  const currentQ = examQuestions[currentIdx];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* EXAM SELECTION MENU */}
      {!activeExamType && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-400 text-stone-950 rounded-xl shadow-md">
                <FileCheck2 className="w-7 h-7 text-amber-950" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Exámenes Oficiales de Lengua 1.º ESO
                </h2>
                <p className="text-amber-200 font-armenian text-sm font-semibold mt-0.5">
                  Քննական սրահ — Ստուգիր գիտելիքներդ իրական դպրոցական թեստերով
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
              En este modo, las respuestas no se revelan hasta que entregues el examen. Puedes activar el modo oficial "Solo en español" o apoyarte en la traducción al armenio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-stone-200 hover:border-amber-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded bg-amber-100 text-amber-950">
                      {tier.count} Preguntas
                    </span>
                    <span className="text-xs text-stone-500 font-armenian font-semibold">
                      {tier.hy}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{tier.name}</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{tier.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                  <button
                    onClick={() => startExam(tier.id, tier.count)}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Comenzar examen</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE EXAM RUNNER */}
      {activeExamType && !isSubmitted && currentQ && (
        <div className="space-y-6">
          {/* Top Exam Status Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-amber-800">
                Pregunta {currentIdx + 1} de {examQuestions.length}
              </span>
              <div className="text-xs text-stone-500 mt-0.5">
                Respondidas: <strong>{totalAnswered}</strong> de {examQuestions.length}
              </div>
            </div>

            {/* Toggle Solo en español */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setExamOnlySpanish(!examOnlySpanish)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  examOnlySpanish
                    ? 'bg-rose-950 text-white border-rose-900 shadow-xs'
                    : 'bg-stone-100 text-stone-700 border-stone-300'
                }`}
              >
                {examOnlySpanish ? '✓ Examen solo en español (Activo)' : 'Permitir ayuda en armenio'}
              </button>

              <button
                type="button"
                onClick={handleSubmitExam}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs cursor-pointer shadow-sm"
              >
                Entregar examen ({totalAnswered}/{examQuestions.length})
              </button>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[11px] uppercase font-bold px-2 py-0.5 bg-stone-100 text-stone-700 rounded mr-2">
                Tema {currentQ.themeId}
              </span>
            </div>

            <DualText
              text={currentQ.question}
              as="h3"
              size="xl"
              weight="bold"
              color="text-stone-900"
              showAudio={true}
              forceOpen={!examOnlySpanish && alwaysShowArmenian}
            />

            {currentQ.contextText && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-serif italic text-stone-800">
                <DualText
                  text={currentQ.contextText}
                  size="base"
                  forceOpen={!examOnlySpanish && alwaysShowArmenian}
                />
              </div>
            )}

            {/* Options list */}
            <div className="space-y-3">
              {currentQ.options?.map((opt, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isSelected = userAnswers[currentIdx] === opt.id;

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(currentIdx, opt.id)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-100 border-amber-600 shadow-sm'
                        : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      isSelected ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-800'
                    }`}>
                      {letter}
                    </span>
                    <div className="flex-1 pt-0.5">
                      <DualText
                        text={opt.text}
                        size="base"
                        forceOpen={!examOnlySpanish && alwaysShowArmenian}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 border-t border-stone-200 flex justify-between items-center">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => i - 1)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
              >
                ← Anterior
              </button>

              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-md py-1">
                {examQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-7 h-7 rounded text-xs font-bold flex-shrink-0 cursor-pointer ${
                      idx === currentIdx
                        ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-400'
                        : userAnswers[idx]
                        ? 'bg-emerald-100 text-emerald-900 font-bold'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {currentIdx < examQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((i) => i + 1)}
                  className="px-5 py-2 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 cursor-pointer"
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitExam}
                  className="px-5 py-2 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400 cursor-pointer shadow-sm"
                >
                  Finalizar
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* EXAM CORRECTION & REPORT */}
      {isSubmitted && (
        <div className="space-y-8 animate-in fade-in">
          {(() => {
            let correct = 0;
            const mistakes: { q: ExerciseItem; selectedOptId?: string; correctOpt?: NonNullable<ExerciseItem['options']>[0] }[] = [];

            examQuestions.forEach((q, idx) => {
              const selected = userAnswers[idx];
              const correctOpt = q.options?.find((o) => o.isCorrect);
              if (selected === correctOpt?.id) {
                correct++;
              } else {
                mistakes.push({ q, selectedOptId: selected, correctOpt });
              }
            });

            const grade = getGradeText(correct, examQuestions.length);
            const percentage = Math.round((correct / examQuestions.length) * 100);

            return (
              <>
                {/* Score Certificate Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
                    <Trophy className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-stone-900">
                    Resultados del Examen
                  </h3>

                  <div className="flex flex-wrap items-center justify-center gap-4 py-2">
                    <div className="text-4xl font-black text-rose-950">
                      {correct} / {examQuestions.length}
                    </div>
                    <div className="text-2xl font-bold text-amber-600">
                      ({percentage}%)
                    </div>
                  </div>

                  <div className="inline-block px-4 py-1.5 rounded-full border text-sm font-extrabold shadow-xs">
                    <span className={grade.color}>Calificación: {grade.label}</span>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <button
                      onClick={() => setActiveExamType(null)}
                      className="px-6 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs cursor-pointer shadow-md"
                    >
                      Volver a la selección de exámenes
                    </button>
                  </div>
                </div>

                {/* Review Mistakes Section */}
                {mistakes.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                      <h4 className="font-extrabold text-lg text-stone-900">
                        Preguntas falladas ({mistakes.length}) — Corrección detallada
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {mistakes.map(({ q, selectedOptId, correctOpt }, mIdx) => (
                        <div
                          key={q.id}
                          className="p-5 rounded-xl border border-rose-200 bg-rose-50/40 space-y-3"
                        >
                          <div className="flex items-start gap-2">
                            <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {mIdx + 1}
                            </span>
                            <DualText text={q.question} size="base" weight="semibold" forceOpen={alwaysShowArmenian} />
                          </div>

                          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-2 text-xs">
                            <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                              <span>Respuesta correcta: </span>
                              {correctOpt && <DualText text={correctOpt.text} size="sm" forceOpen={alwaysShowArmenian} />}
                            </div>

                            <div className="pt-2 border-t border-stone-100 text-stone-700">
                              <strong className="block text-stone-900 mb-1">💡 Explicación de la regla:</strong>
                              <DualText text={q.explanation} size="sm" forceOpen={alwaysShowArmenian} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};
