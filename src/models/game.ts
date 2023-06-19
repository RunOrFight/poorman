interface IGameData {
    playerData: IPlayerData;
    enemyData: IEnemyData;
}

interface IPlayerData {
    name: string;
    hp: number;
    mana: number;
    cardsInHand: IPlayerCard[];
    field1: IPlayerCard;
    field2: IPlayerCard;
    field3: IPlayerCard;
    field4: IPlayerCard;
}

interface IEnemyData {
    name: string;
    hp: number;
    mana: number;
    cardsInHandCount: number;
    field1: IPlayerCard;
    field2: IPlayerCard;
    field3: IPlayerCard;
    field4: IPlayerCard;
}

interface IPlayerCard {
    id: number;
    playerId: number;
    player: IPlayer;
    cardId: number;
    card: ICard;
    cardIn: CardIn
    isDead: boolean;
    manacost: number;
    hp: number;
    damage: number;
    name: string;
    type: CardType;
}

interface IPlayer {
    id: number;
    gameId: number;
    game: IGame,
    userId: number;
    user: IUserData;
    isLoaded: boolean;
    turnEnded: boolean;
    hp: number;
    mana: number;
    cards: IPlayerCard[];
}

interface IUserData {
    id: number;
    name: string
}

interface IGame {
    id: number;
    link: string;
    players: IPlayer[];
    isFinished: boolean;
}



interface ICard
{
    id: number;
    name: string;
    type: CardType;
    manacost: number;
    hp: number;
    damage: number;
}

interface ICardAttack {
    field: number;
    attackingPlayer: IPlayer;
    attackingCard: IPlayerCard;
    playerUnderAttack: IPlayer;
    cardUnderAttack: IPlayerCard[];
}

interface ICardIsDead {
    field: number;
    playerUnderAttack: IPlayer;
}

enum CardIn {
    Hand,
    Field1,
    Field2,
    Field3,
    Field4,
}

enum CardType {
    Straight,
    Left,
    Right,
    All,
}