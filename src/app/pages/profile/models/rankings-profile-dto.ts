import { RankingProfileDto } from "./ranking-profile-dto";

export interface RankingsProfileDto {
    username: string;
    easy: RankingProfileDto;
    medium: RankingProfileDto;
    hard: RankingProfileDto;
}
