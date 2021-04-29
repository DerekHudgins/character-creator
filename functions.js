
export function getCharacterImage(happy, strong, intel) {
    let sum = Number(happy)+ Number(strong) + Number(intel);
if ( sum > 15) return 'http://www.placekitten.com/300/300';
if (sum <= 15 && sum > 3) return 'http://www.placekitten.com/400/400';
else return 'http://www.placekitten.com/500/500';
}
