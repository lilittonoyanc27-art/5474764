export interface BilingualText {
  es: string;
  hy: string;
}

export type ExerciseType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'match-pairs'
  | 'find-error'
  | 'detective-figure'
  | 'drag-classify'
  | 'quick-fire'
  | 'correct-definition'
  | 'cloze'
  | 'reading-comprehension'
  | 'millionaire'
  | 'memory-card'
  | 'listen-pick'
  | 'surprise-exam'
  | 'transform-literary';

export interface OptionItem {
  id: string;
  text: BilingualText;
  isCorrect: boolean;
}

export interface PairItem {
  left: BilingualText;
  right: BilingualText;
}

export interface DragCategory {
  id: string;
  title: BilingualText;
  expectedItemIds: string[];
}

export interface DraggableItem {
  id: string;
  text: BilingualText;
  correctCategoryId: string;
}

export interface TokenItem {
  word: string;
  category: string;
  explanation: BilingualText;
  hyTranslation: string;
}

export interface ExerciseItem {
  id: string;
  themeId: number;
  type: ExerciseType;
  difficulty: 'facil' | 'medio' | 'dificil';
  question: BilingualText;
  contextText?: BilingualText;
  readingAuthor?: string;
  options?: OptionItem[];
  correctAnswer?: string | boolean | string[];
  explanation: BilingualText;
  hint?: BilingualText;
  relatedTerm?: string;
  similarExerciseId?: string;
  audioText?: string;
  pairs?: PairItem[];
  categories?: DragCategory[];
  draggableItems?: DraggableItem[];
  tokens?: TokenItem[];
}

export interface TheoryRule {
  name: BilingualText;
  desc: BilingualText;
  formula?: string;
  counterpart?: BilingualText;
}

export interface TheorySection {
  id: string;
  title: BilingualText;
  summary: BilingualText;
  content: BilingualText[];
  rules?: TheoryRule[];
  keyTips?: BilingualText[];
}

export interface ExampleItem {
  id: string;
  title?: BilingualText;
  text: BilingualText;
  analysis: BilingualText;
  tag: BilingualText;
  type?: 'literario' | 'cotidiano' | 'figura' | 'verso' | 'prosa' | 'popular' | 'culta';
}

export interface ConfusingPair {
  id: string;
  title: BilingualText;
  badge: string;
  termA: {
    name: BilingualText;
    definition: BilingualText;
    trick: BilingualText;
    example: BilingualText;
  };
  termB: {
    name: BilingualText;
    definition: BilingualText;
    trick: BilingualText;
    example: BilingualText;
  };
  keyDifference: BilingualText;
  quickCheck: {
    question: BilingualText;
    sampleText: BilingualText;
    correctTerm: 'A' | 'B';
    explanation: BilingualText;
  };
}

export interface FlashcardItem {
  id: string;
  themeId: number;
  term: BilingualText;
  definition: BilingualText;
  example: BilingualText;
  category: BilingualText;
  memorizationTrick?: BilingualText;
  confusedWith?: string;
}

export interface ThemeModule {
  id: number;
  slug: string;
  title: BilingualText;
  subtitle: BilingualText;
  badge: string;
  description: BilingualText;
  iconName: string;
  theory: TheorySection[];
  examples: ExampleItem[];
  practiceExerciseIds: string[];
  examExerciseIds: string[];
}

export interface UserProgress {
  completedExercises: Record<string, boolean>; // id -> isCorrect
  mistakeIds: string[];
  stars: number;
  points: number;
  streak: number;
  themeProgress: Record<
    number,
    {
      theoryRead: boolean;
      examplesViewed: boolean;
      practiceCompleted: number;
      examPassed: boolean;
      score: number;
    }
  >;
  flashcardStatus: Record<string, 'known' | 'doubt' | 'forgotten'>;
  examHistory: {
    id: string;
    examType: string;
    score: number;
    total: number;
    percentage: number;
    date: string;
  }[];
  audioEnabled: boolean;
  alwaysShowArmenian: boolean;
  activeStage: Record<number, number>; // themeId -> active stage (1..6)
}
