import React, { useState } from 'react';
import {
  BookOpen,
  Eye,
  CheckCircle2,
  HelpCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Flame,
  Lightbulb,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ThemeModule, UserProgress, ExerciseItem } from './types.ts';
import { DualText } from './DualText.tsx';
import { getQuestionsByTheme } from './dataQuestions.ts';
import { sounds } from './audio.ts';

interface ThemeViewProps {
  theme: ThemeModule;
  onSelectTheme: (themeId: number) => void;
  progress: UserProgress;
  onSuccessAnswer: (pts: number) => void;
  onMistakeAnswer: (exerciseId: string) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const ThemeView: React.FC<ThemeViewProps> = ({
  theme,
  progress,
  onSuccessAnswer,
  onMistakeAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [activeStage, setActiveStage] = useState<number>(1);

  // Stage 3 practice state
  const practiceQuestions = getQuestionsByTheme(theme.id);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Stage 6 mini-exam state
  const [examIdx, setExamIdx] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);

  const currentPracticeQ = practiceQuestions[practiceIdx] || practiceQuestions[0];
  const miniExamQuestions = practiceQuestions.slice(0, 5);

  const stages = [
    { num: 1, title: '1. Teoría', sub: 'Տեսություն' },
    { num: 2, title: '2. Ejemplos', sub: 'Օրինակներ' },
    { num: 3, title: '3. Práctica', sub: 'Քայլ առ քայլ' },
    { num: 4, title: '4. Jugando', sub: 'Խաղային' },
    { num: 5, title: '5. Errores', sub: 'Սխալներ' },
    { num: 6, title: '6. Examen', sub: 'Ստուգիչ' },
  ];

  const handlePracticeSelect = (optId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOptId(optId);
    setIsAnswered(true);

    if (isCorrect) {
      if (audioEnabled) sounds.playSuccess();
      onSuccessAnswer(10);
    } else {
      if (audioEnabled) sounds.playWrong();
      onMistakeAnswer(currentPracticeQ.id);
    }
  };

  const handleNextPractice = () => {
    setSelectedOptId(null);
    setIsAnswered(false);
    setShowHint(false);
    if (practiceIdx < practiceQuestions.length - 1) {
      setPracticeIdx((i) => i + 1);
    } else {
      setPracticeIdx(0);
    }
  };

  const handleMiniExamSelect = (qIdx: number, optId: string) => {
    if (examSubmitted) return;
    setExamAnswers((prev) => ({ ...prev, [qIdx]: optId }));
  };

  const handleMiniExamSubmit = () => {
    setExamSubmitted(true);
    let correctCount = 0;
    miniExamQuestions.forEach((q, idx) => {
      const selected = examAnswers[idx];
      const correctOpt = q.options?.find((o) => o.isCorrect);
      if (selected === correctOpt?.id) {
        correctCount++;
      } else {
        onMistakeAnswer(q.id);
      }
    });

    if (correctCount >= 4) {
      if (audioEnabled) sounds.playFanfare();
      onSuccessAnswer(50);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } else {
      if (audioEnabled) sounds.playWrong();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Theme Header Card */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8 border border-amber-500/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 bg-amber-400 text-stone-950 rounded-lg shadow-sm">
              {theme.badge}
            </span>
            <span className="text-xs text-amber-300 font-armenian font-semibold">
              7-րդ դասարանի դաս
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs bg-black/30 px-3 py-1.5 rounded-full border border-white/10">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Etapa {activeStage} de 6</span>
          </div>
        </div>

        <div className="mt-4">
          <DualText
            text={theme.title}
            as="h2"
            size="3xl"
            weight="extrabold"
            color="text-white"
            showAudio={true}
            forceOpen={alwaysShowArmenian}
          />
          <div className="mt-2 text-rose-100">
            <DualText
              text={theme.subtitle}
              size="base"
              color="text-rose-100"
              forceOpen={alwaysShowArmenian}
            />
          </div>
        </div>

        {/* 6 Stage Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-8 pt-6 border-t border-white/10">
          {stages.map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStage(st.num)}
              className={`p-2 rounded-xl text-center transition-all cursor-pointer border ${
                activeStage === st.num
                  ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md scale-102'
                  : 'bg-black/20 text-rose-100 border-white/10 hover:bg-black/40'
              }`}
            >
              <div className="text-xs font-bold leading-tight">{st.title}</div>
              <div className="text-[10px] font-armenian opacity-90">{st.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* STAGE 1: APRENDE LA TEORÍA */}
      {activeStage === 1 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span>Etapa 1 — Aprende la teoría</span>
            </h3>
            <button
              onClick={() => setActiveStage(2)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Ver ejemplos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {theme.theory.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden"
            >
              <div className="p-6 bg-stone-50 border-b border-stone-200">
                <DualText
                  text={section.title}
                  as="h4"
                  size="xl"
                  weight="bold"
                  color="text-rose-950"
                  showAudio={true}
                  forceOpen={alwaysShowArmenian}
                />
                <div className="mt-2 text-stone-700">
                  <DualText
                    text={section.summary}
                    size="base"
                    weight="medium"
                    forceOpen={alwaysShowArmenian}
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                {section.content.map((p, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-100">
                    <DualText text={p} size="base" forceOpen={alwaysShowArmenian} />
                  </div>
                ))}

                {section.rules && section.rules.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <h5 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-3">
                      Reglas y definiciones clave:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.rules.map((rule, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white border-2 border-stone-200 hover:border-amber-400 transition-colors shadow-xs"
                        >
                          <DualText
                            text={rule.name}
                            as="h6"
                            size="base"
                            weight="bold"
                            color="text-rose-900"
                            forceOpen={alwaysShowArmenian}
                          />
                          <div className="mt-2 text-xs text-stone-700">
                            <DualText text={rule.desc} size="sm" forceOpen={alwaysShowArmenian} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveStage(2)}
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Continuar a Etapa 2: Ejemplos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 2: MIRA LOS EJEMPLOS */}
      {activeStage === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-700" />
              <span>Etapa 2 — Mira los ejemplos comentados</span>
            </h3>
            <button
              onClick={() => setActiveStage(3)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Ir a la práctica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {theme.examples.map((ex, idx) => (
              <div
                key={ex.id || idx}
                className="bg-white rounded-2xl shadow-md border border-stone-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded">
                      <DualText text={ex.tag} size="sm" forceOpen={alwaysShowArmenian} />
                    </span>
                    <span className="text-xs text-stone-400 font-semibold">Ejemplo #{idx + 1}</span>
                  </div>

                  {ex.title && (
                    <div className="mb-2">
                      <DualText
                        text={ex.title}
                        as="h4"
                        size="lg"
                        weight="bold"
                        color="text-stone-900"
                        forceOpen={alwaysShowArmenian}
                      />
                    </div>
                  )}

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 my-3 font-serif text-stone-900 italic leading-relaxed">
                    <DualText
                      text={ex.text}
                      size="base"
                      showAudio={true}
                      forceOpen={alwaysShowArmenian}
                    />
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-stone-800 leading-relaxed">
                  <strong className="block text-amber-950 font-bold mb-1">
                    🔍 Análisis explicativo:
                  </strong>
                  <DualText text={ex.analysis} size="sm" forceOpen={alwaysShowArmenian} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setActiveStage(1)}
              className="px-4 py-2.5 text-stone-600 hover:text-stone-900 font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la teoría</span>
            </button>
            <button
              onClick={() => setActiveStage(3)}
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Continuar a Etapa 3: Práctica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 3: PRACTICA PASO A PASO */}
      {activeStage === 3 && currentPracticeQ && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-700" />
              <span>Etapa 3 — Practica paso a paso</span>
            </h3>
            <span className="text-xs text-stone-500 font-semibold">
              Ejercicio {practiceIdx + 1} de {practiceQuestions.length}
            </span>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8">
            <div className="mb-4">
              <span className="text-xs uppercase font-extrabold px-2.5 py-1 bg-amber-100 text-amber-900 rounded">
                Dificultad: {currentPracticeQ.difficulty.toUpperCase()}
              </span>
            </div>

            <div className="mb-6">
              <DualText
                text={currentPracticeQ.question}
                as="h4"
                size="xl"
                weight="bold"
                color="text-stone-900"
                showAudio={true}
                forceOpen={alwaysShowArmenian}
              />
            </div>

            {currentPracticeQ.contextText && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6 italic font-serif">
                <DualText
                  text={currentPracticeQ.contextText}
                  size="base"
                  forceOpen={alwaysShowArmenian}
                />
              </div>
            )}

            {/* Multiple choice options */}
            {currentPracticeQ.options && (
              <div className="space-y-3">
                {currentPracticeQ.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selectedOptId === opt.id;
                  let style = 'bg-stone-50 hover:bg-stone-100 border-stone-200';

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/40 text-emerald-950';
                    } else if (isSelected && !opt.isCorrect) {
                      style = 'bg-rose-50 border-rose-500 ring-2 ring-rose-400/40 text-rose-950';
                    } else {
                      style = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${style}`}
                    >
                      <button
                        type="button"
                        onClick={() => handlePracticeSelect(opt.id, opt.isCorrect)}
                        disabled={isAnswered}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm cursor-pointer transition-colors flex-shrink-0 ${
                          isAnswered
                            ? opt.isCorrect
                              ? 'bg-emerald-600 text-white'
                              : isSelected
                              ? 'bg-rose-600 text-white'
                              : 'bg-stone-200 text-stone-600'
                            : 'bg-stone-200 text-stone-800 hover:bg-amber-500 hover:text-stone-950'
                        }`}
                      >
                        {isAnswered && opt.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : isAnswered && isSelected && !opt.isCorrect ? (
                          <XCircle className="w-5 h-5" />
                        ) : (
                          letter
                        )}
                      </button>

                      <div className="flex-1 pt-0.5">
                        <DualText text={opt.text} size="base" forceOpen={alwaysShowArmenian} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Hint */}
            {!isAnswered && currentPracticeQ.hint && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Ocultar pista' : 'Ver pista (Հուշում)'}</span>
                </button>
                {showHint && (
                  <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                    <DualText text={currentPracticeQ.hint} size="sm" forceOpen={alwaysShowArmenian} />
                  </div>
                )}
              </div>
            )}

            {/* Feedback and explanation */}
            {isAnswered && (
              <div className="mt-6 p-5 rounded-xl border bg-stone-50 border-stone-200 animate-in fade-in">
                <h5 className="font-bold text-sm text-stone-900 mb-2">
                  Explicación del resultado:
                </h5>
                <DualText text={currentPracticeQ.explanation} forceOpen={alwaysShowArmenian} />

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextPractice}
                    className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-sm text-sm"
                  >
                    <span>Siguiente ejercicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STAGE 4: APRENDE JUGANDO */}
      {activeStage === 4 && (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-stone-900">
              Etapa 4 — Aprende jugando
            </h3>
            <p className="text-stone-600 max-w-lg mx-auto text-sm mt-1">
              Pon a prueba tus conocimientos de {theme.title.es} en nuestros modos arcade: Detective de Figuras, Millonario, Memoria Visual y Desafío Rápido.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveStage(6)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              Pasar al Mini-Examen del Tema
            </button>
          </div>
        </div>
      )}

      {/* STAGE 5: REPASA TUS ERRORES */}
      {activeStage === 5 && (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-rose-700" />
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                Etapa 5 — Repasa tus errores
              </h3>
              <p className="text-xs text-stone-500 font-armenian">
                Կրկնի՛ր այն բոլոր կանոնները, որոնցում սխալ ես թույլ տվել։
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-sm text-stone-800">
            <p className="font-semibold text-amber-950">
              💡 Metodología de refuerzo continuo:
            </p>
            <p className="mt-1 text-xs leading-relaxed">
              Cada error que cometes en las pruebas se guarda en tu panel personal de errores. Repasa las reglas clave de este tema y vuelve a practicar para afianzar el aprobado.
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveStage(6)}
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Ir al Mini-Examen final (Etapa 6)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 6: COMPRUEBA LO APRENDIDO (MINI-EXAMEN) */}
      {activeStage === 6 && (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-600" />
                <span>Etapa 6 — Comprueba lo aprendido (Mini-Examen)</span>
              </h3>
              <p className="text-xs text-stone-500 font-armenian mt-0.5">
                5 հարց առանց նախնական հուշումների. ստուգի՛ր գիտելիքներդ։
              </p>
            </div>
            {examSubmitted && (
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-full text-xs">
                Examen corregido
              </span>
            )}
          </div>

          {/* List of 5 questions */}
          <div className="space-y-6">
            {miniExamQuestions.map((q, qIndex) => {
              const selectedOpt = examAnswers[qIndex];
              const correctOpt = q.options?.find((o) => o.isCorrect);

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-950 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <DualText text={q.question} size="base" weight="semibold" forceOpen={alwaysShowArmenian} />
                  </div>

                  {/* Options */}
                  <div className="space-y-2 pl-8">
                    {q.options?.map((opt, optIndex) => {
                      const letter = String.fromCharCode(65 + optIndex);
                      const isSelected = selectedOpt === opt.id;
                      let optClass = 'bg-white border-stone-200 hover:bg-stone-50';

                      if (examSubmitted) {
                        if (opt.isCorrect) {
                          optClass = 'bg-emerald-50 border-emerald-500 font-bold text-emerald-950';
                        } else if (isSelected && !opt.isCorrect) {
                          optClass = 'bg-rose-50 border-rose-500 text-rose-950';
                        } else {
                          optClass = 'bg-white border-stone-200 opacity-60';
                        }
                      } else if (isSelected) {
                        optClass = 'bg-amber-100 border-amber-500 font-bold';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleMiniExamSelect(qIndex, opt.id)}
                          className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3 ${optClass}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center">
                            {letter}
                          </span>
                          <div className="flex-1">
                            <DualText text={opt.text} size="sm" forceOpen={alwaysShowArmenian} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {examSubmitted && (
                    <div className="pl-8 pt-2 text-xs">
                      <DualText text={q.explanation} forceOpen={alwaysShowArmenian} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit button or score */}
          <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
            <button
              onClick={() => setActiveStage(1)}
              className="text-stone-600 hover:text-stone-900 text-xs font-semibold cursor-pointer"
            >
              Volver a repasar la teoría
            </button>

            {!examSubmitted ? (
              <button
                type="button"
                onClick={handleMiniExamSubmit}
                disabled={Object.keys(examAnswers).length < miniExamQuestions.length}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold rounded-xl shadow-md cursor-pointer transition-colors"
              >
                Entregar y corregir mini-examen
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setExamAnswers({});
                  setExamSubmitted(false);
                }}
                className="px-6 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                Reintentar mini-examen
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
