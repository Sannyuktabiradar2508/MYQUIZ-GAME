class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  text(lastFedtime)


  play(){

   Question.hide();
   backgroundcolor(turquoise);
   fill(0);
   
   textSize(40)
   text("Results Of Quiz", 120, 90);
   text("----------------------------", 320, 65);


   Contestant.getContestantInfo();
  
   if(allContestants !== undefined){
    debugger;
    var display_Answers = 230
    fill("white")
    textSize(25);
    this.text("*NOTE: Contestants who answered correct are highlighted in green color!", 130, 230);
}
 
for(var plr in allContestants){
  debugger;
  var correctAns = "2";

  if(correctAns === allContestants[plr]. answer){
  fill("green");}

  else{
  fill("red");

  display_Answers+=30
  textSize(25);
  text(allContestants[plr].name + ":" + allContestants[plr].answer, 250, display_Answers)
  }
}
   
    
    
    

    

   


    
    
   
    
  }

}
