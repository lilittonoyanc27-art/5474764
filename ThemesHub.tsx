import React, { useState } from 'react';
import {
  BookOpen,
  Feather,
  Sparkles,
  MessageSquare,
  Radio,
  Layers,
  Flame,
  Award,
  ChevronRight,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { allThemes } from './dataCurriculum.ts';
import { ThemeModule, UserProgress } from './types.ts';
import { DualText } from './DualText.tsx';
import { GrammarInspector } from './GrammarInspector.tsx';

interface ThemesHubProps {
  onSelectTheme: (theme: ThemeModule) => void;
  progress: UserProgress;
  onSuccessAnswer: (pts: number) => void;
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
}

export const ThemesHub: React.FC<ThemesHubProps> = ({
  onSelectTheme,
  progress,
  onSuccessAnswer,
  audioEnabled,
  alwaysShowArmenian,
}) => {
  const [showInspector, setShowInspector] = useState(false);

  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Feather': return Feather;
      case 'Sparkles': return Sparkles;
      case 'MessageSquare': return MessageSquare;
      case 'Radio': return Radio;
      case 'Layers': return Layers;
      case 'Flame': return Flame;
      case 'Award': return Award;
      default: return BookOpen;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950 via-red-900 to-amber-900 text-white p-8 sm:p-12 shadow-2xl border border-amber-500/20">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase tracking-wider shadow-sm">
            <span>Curso Oficial 1.º de ESO</span>
            <span>•</span>
            <span className="font-armenian font-semibold">Իսպանիայի 7-րդ դասարան</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Lengua Castellana y Literatura
          </h1>

          <p className="text-rose-100 text-base sm:text-lg font-medium leading-relaxed">
            Preparación integral bilingüe (Español + Հայերեն) con explicaciones claras, 220+ ejercicios interactivos, juegos de memoria y simulacros de examen.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setShowInspector(!showInspector)}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs sm:text-sm shadow-md cursor-pointer transition-transform hover:scale-105 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-stone-950" />
              <span>{showInspector ? 'Ocultar Inspector Morfológico' : 'Abrir Inspector de Categorías'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional Grammar Inspector Modal/Drawer */}
      {showInspector && (
        <div className="animate-in fade-in slide-in-from-top-4">
          <GrammarInspector
            onSuccessAnswer={onSuccessAnswer}
            audioEnabled={audioEnabled}
            alwaysShowArmenian={alwaysShowArmenian}
          />
        </div>
      )}

      {/* Grid of the 8 Mandatory Themes */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-amber-700" />
              <span>Los 8 Temas Obligatorios de 1.º ESO</span>
            </h2>
            <p className="text-xs text-stone-500 font-armenian font-semibold">
              Պարտադիր 8 ուսումնական բաժինները՝ քայլ առ քայլ յուրացման համակարգով
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allThemes.map((theme) => {
            const IconComponent = getThemeIcon(theme.iconName);
            const isCompleted = progress.themeProgress[theme.id]?.examPassed;

            return (
              <div
                key={theme.id}
                onClick={() => onSelectTheme(theme)}
                className="group bg-white rounded-2xl p-6 sm:p-7 shadow-md border-2 border-stone-200 hover:border-amber-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-stone-100 text-stone-800">
                        {theme.badge}
                      </span>
                      {isCompleted && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Aprobado
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <DualText
                      text={theme.title}
                      as="h3"
                      size="xl"
                      weight="extrabold"
                      color="text-stone-900 group-hover:text-amber-950"
                      forceOpen={alwaysShowArmenian}
                    />
                    <div className="text-stone-600 text-xs">
                      <DualText text={theme.subtitle} size="sm" forceOpen={alwaysShowArmenian} />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {theme.description.es}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 group-hover:text-rose-900 transition-colors">
                    Aprender teoría y practicar
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center transition-all">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
