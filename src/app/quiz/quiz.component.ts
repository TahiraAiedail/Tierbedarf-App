import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      questionText: 'Wieviel Zeit verbringst du täglich zu Hause?',
      answerOptions: ['Weniger als 2 Stunden', '2-4 Stunden', '4-6 Stunden', 'Mehr als 6 Stunden'],
    },
    {
      questionText: 'Wieviel Platz hast du in deinem Zuhause?',
      answerOptions: ['Ich wohne in einer kleinen Wohnung', 'Ich wohner in einer großen Wohnung mit Zugang zum Garten', 'Ich habe genug Platz in meiner Wohnung, um meinem Haustier ein eigenes Zimmer zu geben', 'Ich habe ein Haus mit Garten und könnte sogar ein großes Tier halten']
    },
    {
      questionText: 'Wieviel Zeit bist du bereit, täglich in die Pflege deines Haustieres zu investieren?',
      answerOptions: ['Weniger als 1 Stunde', '1-2 Stunden', '2-3 Stunden', 'Mehr als 3 Stunden']
    },
    {
      questionText: 'Wie wichtig ist es dir, daass dein Haustier gut für Anfänger geeignet ist?',
      answerOptions: ['Sehr wichtig, da ich noch nie ein Haustier hatte', 'Wichtig', 'Nicht so wichtig, da ich bereits ein Haustier hatte und nach neuen Herausforderungen suche', 'Gar nicht wichtig']
    },
    {
      questionText: 'Wieviel Bewegung sollte dein Haustier täglich mit dir zusammen maximal benötigen?',
      answerOptions: ['Mein Haustier sollte nicht bewegt werden müssen', 'Ein paar Minuten pro Tag sollten ausreichen', 'Mein Haustier sollte maximal eine Stunde pro Tag brauchen', 'Mein Haustier kann mehrere Stunden Bewegung brauchen']
    },
    {
      questionText: 'Wieviel Lärm sollte dein Haustier maximal machen?',
      answerOptions: ['Mein Haustier sollte möglichst leise sein', 'Ein bisschen Lärm ist okay', 'Mein Haustier kann auch mal lauter sein', 'Mein Haustier kann so laut sein, wie es will']
    },
    {
      questionText: 'Wie wichtig ist es dir, dass dein Haustier trainiert werden kann?',
      answerOptions: ['Überhaupt nicht wichtig', 'Ein bisschen Training ist okay', 'Ich möchte mein Haustier gerne trainieren', 'Ich möchte mein Haustier unbedingt trainieren']
    },
    {
      questionText: 'Wie wichtig ist es dir, dass dein Haustier nicht haart?',
      answerOptions: ['Sehr wichtig', 'Wichtig', 'Nicht so wichtig', 'Gar nicht wichtig']
    },
    {
      questionText: 'Wieviel Geld bist du bereit, monatlich für dein Haustier auszugeben?',
      answerOptions: ['Weniger als 10€', '10-20€', '20-50€', 'Mehr als 50€']
    },
    {
      questionText: 'Wie wichtig ist es dir, dass du Zuneigung von deinem Haustier bekommst?',
      answerOptions: ['Überhaupt nicht wichtig','Mir ist es egal, ob mein Haustier Zuneigung zeigt', 'Ab und zu sollte mir mein Haustier schon Zuneigung zeigen', 'Ich möchte, dass mein Haustier mich liebt']
    }
  ]


  selectAnswers: string[] = [];
  showResults: boolean = false;
  resultMessage: string = "";

  evaluateAnswers() {
    const answerCount: Record<string, number> = {};

    for (const question of this.questions) {
      const selectedAnswer = this.selectAnswers[this.questions.indexOf(question)];
      if (selectedAnswer in answerCount) {
        answerCount[selectedAnswer] += 1;
      } else {
          answerCount[selectedAnswer] = 1;
        }
    }
    let maxCount = 0;
    let selectedAnswer = "";

    for (const answer in answerCount) {
      if (answerCount[answer] > maxCount) {
        maxCount = answerCount[answer];
        selectedAnswer = answer;
      }
    }

    let resultMessage = "";

      switch (selectedAnswer) {
        case 'Fische':
        resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Fische am besten zu deinem Lebensstil passen! Fische sind wunderschöne und faszinierende Kreaturen, die sich gut für Menschen eignen, die ein ruhiges und friedliches Zuhause bevorzugen. Als Besitzer von Fischen benötigst du keine große Fläche oder viel Zeit, um sich um sie zu kümmern. Sie können in einem Aquarium oder einem kleineren Behälter untergebracht werden und brauchen nur wenig Futter und Pflege. Fische können auch eine beruhigende Wirkung auf Menschen haben und können dabei helfen, Stress abzubauen. Denke jedoch daran, dass Fische auch eine Verantwortung bedeuten und es wichtig ist, das Wasser regelmäßig zu wechseln und das Aquarium sauber zu halten. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deinen Fischen aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
        break;
        case 'Hamster':
          resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hamster am besten zu deinem Lebensstil passen! Hamster sind kleine und niedliche Nagetiere, die sich gut für Menschen eignen, die ein Haustier suchen, das nicht viel Platz benötigt und trotzdem interaktiv und unterhaltsam ist. Als Besitzer eines Hamsters benötigst du ein kleines Gehege, das mit Spielzeugen, einem Laufrad und Verstecken ausgestattet ist, um deinen Hamster glücklich und gesund zu halten. Hamster sind nachtaktiv, daher solltest du sicherstellen, dass dein Hamster tagsüber ausreichend Ruhe hat. Es ist wichtig, ihn jeden Tag mit frischem Wasser und Futter zu versorgen und sein Gehege regelmäßig zu reinigen. Hamster sind zudem sehr unterhaltsam und können dir stundenlang Freude bereiten, wenn du mit ihnen spielst und interagierst. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Denke jedoch daran, dass Hamster zwar kleine Haustiere sind, aber trotzdem eine Verantwortung bedeuten und Pflege benötigen. Wenn du bereit bist, deinen Hamster die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen.';
        break;
        case 'Katze':
          resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Katzen am besten zu deinem Lebensstil passen! Katzen sind wunderschöne und elegante Tiere, die sich gut für Menschen eignen, die ein unabhängiges Haustier suchen, das ihnen trotzdem Gesellschaft leisten kann. Als Besitzer einer Katze benötigst du ein sauberes Katzenklo, frisches Wasser und eine ausgewogene Ernährung, um deine Katze gesund und glücklich zu halten. Katzen sind bekannt für ihre Neigung zu schlafen und ihre unabhängige Natur, daher benötigen sie nicht so viel Aufmerksamkeit wie andere Haustiere. Trotzdem solltest du dir Zeit nehmen, um mit deiner Katze zu spielen und zu interagieren. Katzen können eine beruhigende Wirkung auf Menschen haben und helfen, Stress abzubauen. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Katzen sind auch perfekt für Menschen, die in einer kleineren Wohnung leben oder keine Zeit haben, regelmäßig spazieren zu gehen. Denke jedoch daran, dass Katzen trotz ihrer Unabhängigkeit eine Verantwortung bedeuten und Pflege benötigen. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deiner Katze aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
        break;
        case 'Hund':
          resultMessage =  'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hunde am besten zu deinem Lebensstil passen! Hunde sind treue und liebevolle Begleiter, die sich gut für Menschen eignen, die eine enge Bindung zu ihrem Haustier aufbauen möchten. Als Besitzer eines Hundes musst du Zeit und Energie aufwenden, um ihn auszuführen, ihn zu trainieren und ihm die Liebe und Aufmerksamkeit zu schenken, die er benötigt. Hunde brauchen tägliches Training, Spaziergänge und eine ausgewogene Ernährung, um glücklich und gesund zu bleiben. Du solltest auch Zeit mit deinem Hund verbringen, um ihm das Gefühl von Liebe und Zugehörigkeit zu geben. Hunde sind auch perfekt für Menschen, die einen aktiven Lebensstil führen oder einen Begleiter für Outdoor-Aktivitäten suchen. Sie sind sehr soziale Tiere und lieben es, Zeit mit ihrem Besitzer zu verbringen. Denke jedoch daran, dass Hunde eine Verantwortung bedeuten und viel Zeit und Energie erfordern. Wenn du jedoch bereit bist, deinem Hund die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen und eine treue und liebevolle Begleitung für das Leben finden.';
        break;
        default:
          resultMessage = 'Es tut uns leid, wir konnten kein Ergebnis für dich finden. Bitte versuche es erneut.';
      }       

    this.showResults = true;
  }  
}