export class Player {
  rank: number;
  name: String;
  _id: String;
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
    medal: String,
    _id: String
  ) {
    this.rank = rank;
    this.name = name;
    this._id = _id;
    this.loses = loses;
    this.wins = wins;
    this.roles = roles;
    this.medal = medal;
  }
}
