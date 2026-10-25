import React from 'react';
import {
  BookOpen,
  Sparkles,
  Award,
  Brain,
  Gamepad2,
  FileCheck2,
  Volume2,
  VolumeX,
  RotateCcw,
  Languages,
  Flame,
} from 'lucide-react';
import { UserProgress } from './types.ts';

interface NavbarProps {
  currentTab: 'themes' | 'detective' | 'memorize' | 'games' | 'exam' | 'mistakes';
  setCurrentTab: (tab: 'themes' | 'detective' | 'memorize' | 'games' | 'exam' | 'mistakes') => void;
  progress: UserProgress;
  onToggleAudio: () => void;
  onToggleAlwaysArmenian: () => void;
  onResetProgress: () => void;
  fontSize: 'standard' | 'large' | 'extralarge';
  onCycleFontSize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  progress,
  onToggleAudio,
  onToggleAlwaysArmenian,
  onResetProgress,
  fontSize,
  onCycleFontSize,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-rose-950 via-red-900 to-amber-900 text-white shadow-md border-b border-amber-600/30">
      {/* Top micro bar with school metadata and user stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-400/30">
            1.º de ESO — España
          </span>
          <span className="hidden sm:inline text-rose-200">
            Bilingüe: <strong className="text-white">Español</strong> + <strong className="text-amber-300 font-armenian">Հայերեն</strong>
          </span>
        </div>

        {/* Stats counter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-amber-300 bg-black/20 px-2.5 py-1 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">{progress.points}</span>
            <span className="text-[10px] text-amber-200 uppercase">pts</span>
          </div>

          <div className="flex items-center gap-1.5 text-rose-200 bg-black/20 px-2.5 py-1 rounded-full border border-rose-500/30">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-bold text-white">{progress.stars}</span>
            <span className="text-[10px] text-rose-300">★</span>
          </div>

          {progress.streak > 0 && (
            <div className="hidden md:flex items-center gap-1 text-orange-300 bg-orange-950/60 px-2 py-0.5 rounded-full border border-orange-500/30">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold">{progress.streak}</span>
            </div>
          )}

          {/* Audio toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-1.5 rounded-full cursor-pointer transition-colors ${
              progress.audioEnabled ? 'bg-amber-600/80 text-white' : 'bg-white/10 text-rose-200 hover:text-white'
            }`}
            title={progress.audioEnabled ? 'Efectos de sonido activados' : 'Efectos de sonido silenciados'}
          >
            {progress.audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Quick Armenian auto-toggle */}
          <button
            onClick={onToggleAlwaysArmenian}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold cursor-pointer transition-all border ${
              progress.alwaysShowArmenian
                ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-xs'
                : 'bg-white/10 text-rose-100 hover:bg-white/20 border-white/20'
            }`}
            title="Activar o desactivar traducción automática al armenio"
          >
            <Languages className="w-3 h-3" />
            <span className="text-[11px] font-armenian">ՀԱՅ {progress.alwaysShowArmenian ? 'ON' : 'OFF'}</span>
          </button>

          {/* Font Size Toggle Button */}
          <button
            onClick={onCycleFontSize}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all bg-white/10 hover:bg-white/20 border border-white/20 text-amber-200"
            title="Cambiar tamaño de fuente / Փոխել տառաչափը"
          >
            <span className="text-[10px] uppercase text-rose-200">Fuente:</span>
            <span className="font-extrabold text-white">
              {fontSize === 'standard' ? 'A (17px)' : fontSize === 'large' ? 'A+ (19px)' : 'A++ (22px)'}
            </span>
          </button>

          {/* Reset progress */}
          <button
            onClick={onResetProgress}
            className="text-rose-300 hover:text-rose-100 p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
            title="Reiniciar progreso"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main navigation title & tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div
          onClick={() => setCurrentTab('themes')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-rose-950/30 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-rose-950" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Lengua y Literatura <span className="text-amber-400 text-sm font-semibold">1.º ESO</span>
            </h1>
            <p className="text-xs text-rose-200/90 font-armenian">
              Իսպաներենի և գրականության դպրոցական ինտերակտիվ դասընթաց
            </p>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setCurrentTab('themes')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              currentTab === 'themes'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Temas 1–8</span>
          </button>

          <button
            onClick={() => setCurrentTab('detective')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              currentTab === 'detective'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Detective de Figuras</span>
          </button>

          <button
            onClick={() => setCurrentTab('memorize')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              currentTab === 'memorize'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Memoriza las Reglas</span>
          </button>

          <button
            onClick={() => setCurrentTab('games')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              currentTab === 'games'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Juegos (15)</span>
          </button>

          <button
            onClick={() => setCurrentTab('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              currentTab === 'exam'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Exámenes</span>
          </button>

          <button
            onClick={() => setCurrentTab('mistakes')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer relative ${
              currentTab === 'mistakes'
                ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                : 'text-rose-100 hover:bg-white/10'
            }`}
          >
            <span>Repaso Errores</span>
            {progress.mistakeIds.length > 0 && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {progress.mistakeIds.length}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
