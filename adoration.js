function showHowMuchILoveYou (amount) {
    if(typeof amount == "number" && Number.isInteger(amount) && amount > 0){
        return `I love you th${'l'.repeat(amount)}s much`;
    } else {
        throw new Error ("I am emotionally unavailable, sorry.")
    }
}



module.exports = { showHowMuchILoveYou }
