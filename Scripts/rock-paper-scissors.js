const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

    updateScoreElement();

    let isAutoPlaying = false;
    let intervalId;

  

    function autoplay() {
      if(!isAutoPlaying){
        intervalId = setInterval(() => {
          const playermove = pickComputerChoice();
          playgame(playermove);
  
        },1000);
        isAutoPlaying = true;
      }else {
        clearInterval(intervalId);
        isAutoPlaying = false

      }
    }

    function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
    }

      document.querySelector('.js-rock-button')
      .addEventListener('click' , () => {
        playgame('Rock')
      });


      document.querySelector('.js-paper-button')
      .addEventListener('click' , () => {
        playgame('Paper')
      });
    

      document.querySelector('.js-scissors-button')
      .addEventListener('click' , () => {
        playgame('Scissors')
      });

      document.querySelector('.js-reset-score-button')
      .addEventListener('click' , () => {
        resetScore();
      });

      document.querySelector('.js-autoplay-button')
      .addEventListener('click' , () => {
        autoplay()
      });


      document.body.addEventListener('keydown' , (event) => {
        if(event.key === 'r'){
          playgame('Rock')
        }else if(event.key === 'p'){
          playgame('Paper')
        }else if(event.key === 's'){
          playgame('Scissors')
        }else if(event.key === 'Backspace'){
          resetScore()
        }else if(event.key === 'a' ){
          autoplay()
        }
      });
    
    
    
    
    function playgame(playermove){
          const   computerChoice =  pickComputerChoice();

      let result = '';

      if(playermove === 'Scissors'){

          if(computerChoice === 'Rock'){
          result = 'You Lose';
        }
        else if(computerChoice === 'Paper'){
          result = 'You Win';
        }
        else if(computerChoice === 'Scissors'){
          result = 'Tie';
        }        
      } 
      else if(playermove === 'Paper'){
             
        if(computerChoice === 'Rock'){
          result = 'You Win';
        }
        else if(computerChoice === 'Paper'){
          result = 'Tie';
        }
        else if(computerChoice === 'Scissors'){
          result = 'You Lose';
        } 
      } 
      
        else if(playermove === 'Rock'){
      
        if(computerChoice === 'Rock'){
          result = 'Tie';
        }
        else if(computerChoice === 'Paper'){
          result = 'You Lose';
        }
        else if(computerChoice === 'Scissors'){
          result = 'You Win';
        } 
      } 
     if( result === 'You Win'){
      score.wins += 1;
     }else if(result === 'You Lose'){
      score.losses += 1;
     } else if(result === 'Tie'){
      score.ties += 1;
     } 

     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();

     document.querySelector('.js-result')
     .innerHTML = result;

     document.querySelector('.js-moves')
     .innerHTML = ` You choose :
    <img src="images/${playermove}-emoji.png" class="move-emoji"}>
     Computer choose :
    <img src="images/${computerChoice}-emoji.png" class="move-emoji"> `; 
    }

    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses:
        ${score.losses}, Ties: ${score.ties}`;
    }
    
    function pickComputerChoice(){
      const randomNumber = Math.random(); 
      let computerChoice = '';

  if( randomNumber >= 0 && randomNumber < 1/3){
    computerChoice = 'Rock';
  }
  else if(randomNumber >= 1 / 3 && randomNumber < 2/3){
    computerChoice = 'Paper';
  }
  else if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = 'Scissors'; 
  } 

     return computerChoice;
                
    }