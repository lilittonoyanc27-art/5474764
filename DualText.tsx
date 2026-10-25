import React, { useState } from 'react';
import { Languages, Volume2, X } from 'lucide-react';
import { BilingualText } from './types.ts';
import { speakSpanish } from './audio.ts';

interface DualTextProps {
  text: BilingualText;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
  showAudio?: boolean;
  highlightSpan?: string;
  badgeLabel?: string;
  forceOpen?: boolean;
  onTranslationToggled?: (open: boolean) => void;
}

export const DualText: React.FC<DualTextProps> = ({
  text,
  className = '',
  as: Component = 'div',
  size = 'base',
  weight = 'normal',
  color = '',
  showAudio = false,
  highlightSpan,
  badgeLabel,
  forceOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(forceOpen);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    await speakSpanish(text.es);
    setIsPlayingAudio(false);
  };

  const handleToggleTranslation = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    base: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
    '2xl': 'text-3xl sm:text-4xl',
    '3xl': 'text-4xl sm:text-5xl',
  }[size];

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }[weight];

  // Helper to highlight a subpart of text if needed
  const renderHighlightedText = (content: string) => {
    if (!highlightSpan || !content.includes(highlightSpan)) {
      return content;
    }
    const parts = content.split(highlightSpan);
    return (
      <>
        {parts[0]}
        <span className="bg-amber-200 text-amber-950 font-bold px-1.5 py-0.5 rounded">
          {highlightSpan}
        </span>
        {parts.slice(1).join(highlightSpan)}
      </>
    );
  };

  return (
    <Component className={`relative group/dual inline-block w-full ${className}`}>
      <div className="flex flex-wrap items-baseline gap-2 justify-between">
        <span className={`${sizeClasses} ${weightClasses} ${color} leading-relaxed`}>
          {renderHighlightedText(text.es)}
        </span>

        {/* Translation trigger & optional speaker button */}
        <span className="inline-flex items-center gap-1.5 ml-1.5 flex-shrink-0 align-middle">
          {showAudio && (
            <button
              type="button"
              onClick={handleAudio}
              disabled={isPlayingAudio}
              title="Escuchar pronunciación (es-ES)"
              aria-label="Escuchar pronunciación"
              className="p-1.5 rounded-lg text-stone-400 hover:text-red-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'text-red-600 animate-pulse' : ''}`} />
            </button>
          )}

          <button
            type="button"
            onClick={handleToggleTranslation}
            title={isOpen ? 'Ocultar traducción armenia' : 'Ver traducción armenia (Հայերեն)'}
            aria-label="Traducir al armenio"
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all duration-150 border select-none shadow-xs ${
              isOpen
                ? 'bg-amber-600 text-white border-amber-700'
                : 'bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200 hover:border-amber-400'
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-current" />
            <span className="font-extrabold text-xs">HY ՀԱՅ</span>
          </button>
        </span>
      </div>

      {badgeLabel && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-900 bg-red-100 px-2.5 py-0.5 rounded mt-1 mr-2">
          {badgeLabel}
        </span>
      )}

      {/* Armenian translation popover / callout with enlarged comfortable font */}
      {(isOpen || forceOpen) && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-2 p-3.5 sm:p-4 rounded-xl bg-amber-50/98 border-l-4 border-amber-600 border-amber-200 text-stone-900 shadow-md transition-all duration-200 animate-in fade-in slide-in-from-top-1"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[11px] uppercase font-black text-amber-900 tracking-wider px-2 py-0.5 bg-amber-200 rounded mt-0.5">
                Հայերեն
              </span>
              <p className="text-base sm:text-lg font-armenian font-semibold text-stone-900 leading-relaxed">
                {text.hy}
              </p>
            </div>
            {!forceOpen && (
              <button
                type="button"
                onClick={handleToggleTranslation}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-amber-200/60 transition-colors cursor-pointer"
                aria-label="Cerrar traducción"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </Component>
  );
};
