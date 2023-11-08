//code doesn`t work in codewars and I don`t know why
class Warrior {
    constructor() {
      this._level = 1;
      this._experience = 100;
      this._rank = "Pushover";
      this._achievements = [];
    }
  
    level() {
      return this._level;
    }
  
    experience() {
      return this._experience;
    }
  
    rank() {
      return this._rank;
    }
  
    achievements() {
      return this._achievements;
    }
  
    training(trainingEvent) {
      const [description, experiencePoints, minLevel] = trainingEvent;
      if (this._level >= minLevel) {
        this._experience += experiencePoints;
        this._achievements.push(description);
        return description;
      } else {
        return "Not strong enough";
      }
    }
  
    battle(enemyLevel) {
  if (enemyLevel < 1 || enemyLevel > 100) {
    return "Invalid level";
  }

  const levelDifference = enemyLevel - this._level;

  if (levelDifference >= 5 && this._rank !== "Greatest") {
    return "You've been defeated";
  }

  let experienceEarned = 0;
  let battleResult = "";

  if (levelDifference === 0) {
    experienceEarned = 10;
    battleResult = "A good fight";
  } else if (levelDifference === -1) {
    experienceEarned = 5;
    battleResult = "A good fight";
  } else if (levelDifference > 0) {
    if (levelDifference > 0 && levelDifference < 5) {
      experienceEarned = 20 * levelDifference * levelDifference;
    }
    battleResult = "An intense fight";
  } else if (levelDifference < 0) {
    battleResult = "Easy fight";
  }
  while (this._experience >= 100) {
    this._level++;
    this._experience -= 100;
  }
  this._updateRank();

  this._experience += experienceEarned;

  return battleResult;
}
  
   _updateRank() {
    const rankTiers = [
      "Pushover", "Novice", "Fighter", "Warrior", "Veteran",
      "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
    ];
    this._rank = rankTiers[Math.floor((this._level - 1) / 10)];
    }
  } 