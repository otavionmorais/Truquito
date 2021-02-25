class Team {

    id;
    players;
    points;
    games;

    constructor(players) {
        this.id = `${Math.random()}${new Date().toISOString()}`
        this.players = players;
        this.points = 0;
        this.games = 0;
    }

    addPoints(points) {
        this.points += points;
        if (this.points > 10) {
            this.addGame();
        }
    }

    resetPoints() {
        this.points = 0;
    }

    addGame() {
        this.games += 1;
        this.resetPoints();
    }
}

export default Team;