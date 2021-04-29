export function GetHappiness(happy){
    if (happy > 1)
        return unHappy;
     else if (happy > 7)
        return veryHappy;
    
}
export function GetStrength(Str){
    if (Strength > 1)
        return notStrong;
     else if (happy > 7)
        return Strong;
    
}
export function GetIntel(Intel){
    if (Intelligence > 1)
        return notSmart;
    } else if (happy > 7)
        return Smart; 
}

function getHappinessImage(happiness) {
    if (happiness < 4) return 'http://www.placekitten.com/300/300'
    if (happiness > 7) return 'http://www.placekitten.com/400/400'
   return 'http://www.placekitten.com/500/500'
   }
