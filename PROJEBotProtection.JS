function botProtection (arr) {
    let commandSequences = {} ; // Girilen Komut
    let result = '' ;

    for (let i = 0 ; i <arr.length-2 ; i ++ ){
        let triplet  = arr.slice(i , i+3 ) . join ('  ') ; // 3 Komutlu Grup
        if (commandSequences [triplet ]) {
            commandSequences[triplet ]++;
        }else {
            commandSequences[triplet ] = 1 ;
        }
    }

    for (let triplet  in commandSequences) {
        if (commandSequences[triplet ] >=2 ) { // Bir Kelime Grubu 2'den Fazla Tekrar Edip Etmemesi 
            result = triplet ;
            break ;
        }
    }

    return result ;

}

console.log(botProtection([  "left",
"right",
"fire",
"jump",
"fire",
"back",
"forward",
"forward",
"jump",
"fire",
"back",
"left",
"left",
"right"])) ;
