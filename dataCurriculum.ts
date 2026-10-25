import { ThemeModule } from './types.ts';
import { themes1to3 } from './dataThemes1to3.ts';
import { themes4to6 } from './dataThemes4to6.ts';
import { themes7to8 } from './dataThemes7to8.ts';

export const allThemes: ThemeModule[] = [
  ...themes1to3,
  ...themes4to6,
  ...themes7to8,
];

export function getThemeById(id: number): ThemeModule | undefined {
  return allThemes.find((t) => t.id === id);
}

export function getThemeBySlug(slug: string): ThemeModule | undefined {
  return allThemes.find((t) => t.slug === slug);
}
