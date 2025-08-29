import { GameOverDto } from "./game-over-dto";
import { QuestionDto } from "./question-dto";

export interface GameResponseDto {
    idSession: number;
    finished: boolean;
    difficulty: string;
    score: number;
    lives: number;
    currentIndex: number;
    totalQuestion: number;
    correct: boolean;
    correctAnswer: string;
    questionDto: QuestionDto | null;
    gameOverDto: GameOverDto | null;
}
