import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import { ThemesHub } from './ThemesHub.tsx';
import { ThemeView } from './ThemeView.tsx';
import { DetectiveGame } from './DetectiveGame.tsx';
import { MemorizeView } from './MemorizeView.tsx';
import { GamesHub } from './GamesHub.tsx';
import { ExamView } from './ExamView.tsx';
import { MistakesReview } from './MistakesReview.tsx';
import { ThemeModule, UserProgress } from './types.ts';
import { allThemes } from './dataCurriculum.ts';
import { sounds } from './audio.ts';

const LOCAL_STORAGE_KEY = 'lengua_eso1_progress_v1';

const defaultProgress: UserProgress = {
  completedExercises: {},
  mistakeIds: [],
  stars: 0,
  points: 100,
  streak: 0,
  themeProgress: {
    1: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    2: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    3: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    4: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    5: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    6: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    7: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
    8: { theoryRead: false, examplesViewed: false, practiceCompleted: 0, examPassed: false, score: 0 },
  },
  flashcardStatus: {},
  examHistory: [],
  audioEnabled: true,
  alwaysShowArmenian: false,
  activeStage: {},
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<'themes' | 'detective' | 'memorize' | 'games' | 'exam' | 'mistakes'>('themes');
  const [selectedTheme, setSelectedTheme] = useState<ThemeModule | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...defaultProgress, ...JSON.parse(saved) };
      }
    } catch {}
    return defaultProgress;
  });

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'extralarge'>(() => {
    try {
      const saved = localStorage.getItem('lengua_eso1_font_size');
      if (saved === 'standard' || saved === 'large' || saved === 'extralarge') return saved;
    } catch {}
    return 'large'; // Default to large font size
  });

  // Apply font size class to root html element
  useEffect(() => {
    try {
      document.documentElement.classList.remove('font-size-standard', 'font-size-large', 'font-size-extralarge');
      document.documentElement.classList.add(`font-size-${fontSize}`);
      localStorage.setItem('lengua_eso1_font_size', fontSize);
    } catch {}
  }, [fontSize]);

  const handleCycleFontSize = () => {
    setFontSize((prev) => {
      if (prev === 'standard') return 'large';
      if (prev === 'large') return 'extralarge';
      return 'standard';
    });
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const handleSuccessAnswer = (pts: number) => {
    setProgress((prev) => ({
      ...prev,
      points: prev.points + pts,
      stars: prev.stars + 1,
      streak: prev.streak + 1,
    }));
  };

  const handleMistakeAnswer = (exerciseId: string) => {
    setProgress((prev) => {
      const alreadyIn = prev.mistakeIds.includes(exerciseId);
      return {
        ...prev,
        streak: 0,
        mistakeIds: alreadyIn ? prev.mistakeIds : [...prev.mistakeIds, exerciseId],
      };
    });
  };

  const handleResolveMistake = (exerciseId: string) => {
    setProgress((prev) => ({
      ...prev,
      mistakeIds: prev.mistakeIds.filter((id) => id !== exerciseId),
    }));
  };

  const handleUpdateFlashcard = (id: string, status: 'known' | 'doubt' | 'forgotten') => {
    setProgress((prev) => {
      const updatedStatus = { ...prev.flashcardStatus, [id]: status };
      let updatedMistakes = prev.mistakeIds;
      if (status === 'forgotten' && !updatedMistakes.includes(id)) {
        updatedMistakes = [...updatedMistakes, id];
      }
      return {
        ...prev,
        flashcardStatus: updatedStatus,
        mistakeIds: updatedMistakes,
      };
    });
  };

  const handleSaveExamResult = (examType: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    setProgress((prev) => ({
      ...prev,
      points: prev.points + score * 5,
      stars: percentage >= 50 ? prev.stars + 5 : prev.stars,
      examHistory: [
        {
          id: Date.now().toString(),
          examType,
          score,
          total,
          percentage,
          date: new Date().toLocaleDateString(),
        },
        ...prev.examHistory,
      ],
    }));
  };

  const handleToggleAudio = () => {
    setProgress((prev) => ({ ...prev, audioEnabled: !prev.audioEnabled }));
  };

  const handleToggleAlwaysArmenian = () => {
    setProgress((prev) => ({ ...prev, alwaysShowArmenian: !prev.alwaysShowArmenian }));
  };

  const handleResetProgress = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    setProgress(defaultProgress);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {}
    setShowResetConfirm(false);
    if (progress.audioEnabled) sounds.playClick();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f6] text-[#1e1e24] antialiased selection:bg-amber-200 selection:text-amber-950">
      {/* Global Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'themes') setSelectedTheme(null);
        }}
        progress={progress}
        onToggleAudio={handleToggleAudio}
        onToggleAlwaysArmenian={handleToggleAlwaysArmenian}
        onResetProgress={handleResetProgress}
        fontSize={fontSize}
        onCycleFontSize={handleCycleFontSize}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'themes' && !selectedTheme && (
          <ThemesHub
            onSelectTheme={(theme) => setSelectedTheme(theme)}
            progress={progress}
            onSuccessAnswer={handleSuccessAnswer}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}

        {currentTab === 'themes' && selectedTheme && (
          <div>
            <div className="max-w-5xl mx-auto px-4 pt-6">
              <button
                onClick={() => setSelectedTheme(null)}
                className="text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <span>← Volver a los 8 temas</span>
              </button>
            </div>
            <ThemeView
              theme={selectedTheme}
              onSelectTheme={(id) => {
                const found = allThemes.find((t) => t.id === id);
                if (found) setSelectedTheme(found);
              }}
              progress={progress}
              onSuccessAnswer={handleSuccessAnswer}
              onMistakeAnswer={handleMistakeAnswer}
              audioEnabled={progress.audioEnabled}
              alwaysShowArmenian={progress.alwaysShowArmenian}
            />
          </div>
        )}

        {currentTab === 'detective' && (
          <DetectiveGame
            onSuccessAnswer={handleSuccessAnswer}
            onMistakeAnswer={handleMistakeAnswer}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}

        {currentTab === 'memorize' && (
          <MemorizeView
            progress={progress}
            onUpdateFlashcard={handleUpdateFlashcard}
            onSuccessAnswer={handleSuccessAnswer}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}

        {currentTab === 'games' && (
          <GamesHub
            onSuccessAnswer={handleSuccessAnswer}
            onMistakeAnswer={handleMistakeAnswer}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}

        {currentTab === 'exam' && (
          <ExamView
            progress={progress}
            onSuccessAnswer={handleSuccessAnswer}
            onMistakeAnswer={handleMistakeAnswer}
            onSaveExamResult={handleSaveExamResult}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}

        {currentTab === 'mistakes' && (
          <MistakesReview
            progress={progress}
            onResolveMistake={handleResolveMistake}
            onSuccessAnswer={handleSuccessAnswer}
            audioEnabled={progress.audioEnabled}
            alwaysShowArmenian={progress.alwaysShowArmenian}
          />
        )}
      </main>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-200 space-y-4">
            <h3 className="text-xl font-extrabold text-stone-900">
              ¿Reiniciar todo tu progreso?
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Esta acción borrará tus puntos, estrellas, respuestas completadas y el historial de exámenes para comenzar desde cero.
            </p>
            <p className="text-xs font-armenian text-rose-800">
              Այս գործողությունը կզրոյացնի ձեր բոլոր միավորները և կսկսի դասընթացը սկզբից։
            </p>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={confirmReset}
                className="px-5 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm cursor-pointer"
              >
                Sí, reiniciar progreso
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
