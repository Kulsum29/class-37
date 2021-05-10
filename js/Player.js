class Player{
    constructor(){
        this.name=null;
    }
    getCount(){
        var playerCountRef;
        playerCountRef = database.ref('playerCount');
        playerCountRef.on('value', function (data){
            playerCount=data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        }
            
        )
    }
}
