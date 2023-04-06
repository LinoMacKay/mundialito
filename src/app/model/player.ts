export class Player {
  rank: number;
  name: String;
  wins: number;
  loses: number;
  roles: Array<String>;
  medal: String;

  constructor(
    rank: number,
    name: String,
    wins: number,
    loses: number,
    roles: Array<String>,
    medal: String
  ) {
    this.rank = rank;
    this.name = name;
    this.loses = loses;
    this.wins = wins;
    this.roles = roles;
    this.medal = medal;
  }
}
