let DesireToPLay = confirm('Do you want to play a game?'),
    StartRange = 0,
    EndRange = 8,
    CountOfEndRange = 8,
    StepRange = 4,
    CountOfStep = 3,
    Prize = 0,
    PossiblePrize = 100,
    PossiblePrizeAfterGame = 100,
    Step = CountOfStep;
const MultiplicationFactor = 2;

if (DesireToPLay) {
    while (DesireToPLay) {
        let rand = Math.floor(Math.random() * (EndRange + 1 - StartRange)) + StartRange;
        let NumberFromUser = +prompt('Choose a roulette pocket number from 0 to ' + EndRange + '\n' +
            'Attempts left: '+ Step +' \n' +
            'Total prize: '+ Prize +'$ \n' +
            'Possible prize on current attempt: '+ PossiblePrize +'', '');

        if (NumberFromUser === rand) {
            Prize += PossiblePrize;
            Step--;
            EndRange += StepRange;
            PossiblePrize *= MultiplicationFactor;

            DesireToPLay = confirm('Congratulation, you won! \n' +
                'Your prize is: '+ Prize +'$. Do you want to continue?');

            if (!DesireToPLay) {
                alert('Thank you for your participation. Your prize is: '+ Prize +'$');
                DesireToPLay = confirm('Want to play again?');
                if (DesireToPLay) {
                    Prize = 0;
                    PossiblePrize = PossiblePrizeAfterGame;
                    EndRange = CountOfEndRange;
                    Step = CountOfStep;
                }
            }
        } else {
            let PossiblePrizeAfterLose = PossiblePrize;

            while (NumberFromUser !== rand) {
                PossiblePrizeAfterLose /= MultiplicationFactor;
                Step--;

                if (Step !== 0) {
                    NumberFromUser = +prompt('Choose a roulette pocket number from 0 to ' + EndRange + '\n' +
                        'Attempts left: '+ Step +' \n' +
                        'Total prize: '+ Prize +'$ \n' +
                        'Possible prize on current attempt: '+ PossiblePrizeAfterLose +'', '');
                } else {
                    DesireToPLay = confirm('You lose, want to play again?');
                    Prize = 0;
                    PossiblePrize = PossiblePrizeAfterGame;
                    EndRange = CountOfEndRange;
                    Step = CountOfStep;
                    break;
                }
            }
            
            if (NumberFromUser === rand) {
                Prize += PossiblePrizeAfterLose;
                EndRange += StepRange;
                Step = CountOfStep;
                DesireToPLay = confirm('Congratulation, you won! \n' +
                    'Your prize is: '+ Prize +'$. Do you want to continue?');
                PossiblePrize *= MultiplicationFactor;
                if (!DesireToPLay) {
                    alert('Thank you for your participation. Your prize is: '+ Prize +'$');
                    DesireToPLay = confirm('Want to play again?');
                    if (DesireToPLay) {
                        Prize = 0;
                        PossiblePrize = PossiblePrizeAfterGame;
                        EndRange = CountOfEndRange;
                        Step = CountOfStep;
                    }
                }
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can');
}
