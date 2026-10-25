import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-white text-base">
                Lengua y Literatura 1.º ESO
              </h4>
            </div>
            <p className="text-xs text-stone-400 font-armenian leading-relaxed">
              Իսպաներենի և գրականության դպրոցական ինտերակտիվ հարթակ Իսպանիայի 7-րդ դասարանի աշակերտների համար՝ լիարժեք հայերեն օժանդակությամբ։
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Metodología Pedagógica
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed">
              Teoría explicada paso a paso → Ejemplos guiados → Práctica progresiva → Juegos interactivos → Repaso de errores → Exámenes oficiales.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Soporte Bilingüe
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed font-armenian">
              Յուրաքանչյուր իսպաներեն տեքստ, հարց, պատասխան և հուշում ունի մեկ սեղմումով հասանելի հայերեն ճշգրիտ թարգմանություն։
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <span>Lengua Castellana y Literatura — 1.º de ESO (España)</span>
          <span className="flex items-center gap-1">
            <span>Diseñado con esmero didáctico para el éxito escolar</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </span>
        </div>
      </div>
    </footer>
  );
};
