const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    COFFEE: Symbol("coffee"),
    INSIDE: Symbol("inside"),
    AFRAID: Symbol("afraid"),
    GAS: Symbol("gas")
});

export default class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case GameState.WELCOMING:
                sReply = "You are at the club. You make a new friend. You seem to be having a great time with her. It is really late at night and she asks you if you can drive her back to her home. You can't help but agree to do so. You reach her house. The house looks like no one's been here since like a hundred years. You pull over to the driveway. She asks you if you want to have a cup of coffee. Would you GO or DENY?";
                this.stateCur = GameState.COFFEE;
                break;
            case GameState.COFFEE:
                if (sInput.toLowerCase().match("go")) {
                    sReply = "You decide to go in. The house looks as wrecked from inside as it did from outside. It felt like you were walking on a beach. There were spider nets all over the walls. You reach the kitchen and she asks you to sit on the dining chair. You do as she says. She picks up a pot, fills it with water and keeps it on a stove. She looks into the pantry, she shows you the empty sugar cam and says she is going to grab some sugar from the store room. Would you SIT there and wait for her or FOLLOW her?";
                    this.stateCur = GameState.INSIDE;
                } else if (sInput.toLowerCase().match("deny")) {
                    sReply = "She makes a sad face and says goodbye to you. You reverse the car and wait for her to get inside the house. Just as you are about to pull away, you hear a loud scream from her. You immediately park the car and go inside. Once you are inside the house, you find her laughing hard. She tricked you to get inside. The house looks as wrecked from inside as it did from outside. It felt like you were walking on a beach. There were spider nets all over the walls. You reach the kitchen and she asks you to sit on the dining chair. You do as she says. She picks up a pot, fills it with water and keeps it on a stove. She looks into the pantry, she shows you the empty sugar can and says she is going to grab some sugar from the store room. Would you SIT there and wait for her or FOLLOW her?";
                    this.stateCur = GameState.INSIDE;
                }
                break;
            case GameState.INSIDE:
                if (sInput.toLowerCase().match("sit")) {
                    sReply = "You decide to sit and wait. She goes out of the kitchen. You wait for her. After around 15 minutes, you grow suspicious. You get up and start searching for her. You go out of the kitchen, it is dark everywhere. You call out her name only to hear no response. You get really scared and decide to head back home. You are walking really fast down the hallway to the main entrance. As you reach out for your shoes, you notice a dead rat in one of your shoes. You feel disgusted and more scared at the same time. You flip the shoe upside down so that the dead rat falls to the ground. As the rat hits the floor, it shatters like glass. Before you think and come to any conclusion, a hand reaches and touches your left shoulder. You jump up because of the shock. As you turn around, you see your friend laughing her soul off. She simply said Happy halloween. You are relieved to know that she had been tricking you all the time. You go inside the kitchen, have a wonderful cup of coffee over some wonderful conversation and you head back home.";
                    this.stateCur = GameState.WELCOMING;
                }
                else if (sInput.toLowerCase().match("follow")) {
                    sReply = "You decide to follow her along. You get up, she leads the way. On your way, you are talking about how different methods of brewing coffee can dramatically change the taste of the coffee. The hallway is pretty dark, the floor squeaks as you walk. You are not feeling so good about the house, the surrounding and your new friend. You suddenly ask her how long she has been living in this house. She replies, she has been living here since the last 400 years. You feel a shock wave going down your spine. You are confused whether to STAY there or RUN for your life. What would you do?";
                    this.stateCur = GameState.AFRAID;
                }
                break;
            case GameState.AFRAID:
                if (sInput.toLowerCase.match("stay")) {
                    sReply = "You decide to stay there and act cool. You say nothing. She then clarifies that she was just messing around with you. You reach the store room. She opens the door of the store room. You smell strongly of propane. You point it out to her. She gets worried immediately. You notice a small propane tank sitting on the floor. You point it to her. She is really worried and confused to do anything. It is up to you if you want to leave her and run for you LIFE or help her SAVE her house.";
                    this.stateCur = GameState.GAS;
                }
                else if (sInput.toLowerCase.match("run")) {
                    sReply = "You decide to leave everything and run for your life. You do so. You just start running down the hallway like a mad man. You grab your shoes and run out of the house all the way to your car without bothering to wear your shoes. Your friend looks more confused than ever and follows you. You get into the car, start the car and pull away very fast. You decide never to go near the house or contact her ever again.";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.GAS:
                if (sInput.toLowerCase.match("life")) {
                    sReply = "You decide to run for your life. You leave her back there, run through the hallway to the main door of the house. You grab your shoes and run out. You get into your car, and pull it away. As you are pulling the car away, you see the whole house explode. One of the pieces of debris comes flying to you and breaks the rear windshield of your car. You pull away hard. You are safe, your friend is probably dead. You blame yourself for it. You think you could have saved her but you didn't.";
                    this.stateCur = GameState.WELCOMING;
                }
                else if (sInput.toLowerCase.match("save")) {
                    sReply = "You think it is a good idea to open all the windows of the house to let the gas vent away. You tell your friend the same. you both rush to different corners of the house and start opening up windows. As you approach one of the windows, you accidentally drop something to the floor. It was a lighter. It fell to the ground and triggered itself on. The whole house exploded including you and your friend. Both of you are DEAD! Thanks for playing.";
                    this.stateCur = GameState.WELCOMING;
                }

        }
        return ([sReply]);
    }
}




/*const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a dark and rainy night. Bang! You have a flat tire. Too bad you don't have a spare. Do you WAIT or GO to the spooky mansion for help?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                }else{
                    sReply ="On the door is a large knocker. Do you knock or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you go in or run back to the car?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.TOAST:
                if(sInput.toLowerCase().match("toast")){
                    sReply = "you enter a new world of adventure ... game over";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
        }
        return([sReply]);
    }
}*/