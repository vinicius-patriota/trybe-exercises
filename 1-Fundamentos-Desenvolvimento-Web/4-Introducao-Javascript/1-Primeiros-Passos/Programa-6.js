let piece = "bishop";

switch (piece) {
    case "pawn":
    case "Pawn":
        console.log("Vertically forward one square, with the option to move two squares if they have not yet moved.");
        break;
    case "bishop":
    case "Bishop":
        console.log("Diagonally any number of squares.");
        break;
    case "knight":
    case "Knight":
        console.log("In an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.");
        break;
    case "rook":
    case "Rook":
        console.log("Horizontally or vertically any number of squares.");
        break;
    case "queen":
    case "Queen":
        console.log("Diagonally, horizontally, or vertically any number of squares");
        break;
    case "king":
    case "King":
        console.log("One square in any direction, so long as that square is not attacked by an enemy piece.");
        break;
    default:
        console.log("Invalid input or my code is broken idk");
};