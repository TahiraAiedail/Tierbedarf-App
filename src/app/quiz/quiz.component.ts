import { Component } from '@angular/core';

interface AnswerOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
      {
        questionText: 'Wieviel Zeit verbringst du täglich zu Hause?',
        answerOptions: [
          { label: 'Weniger als 2 Stunden', value: 'A' },
          { label: '2 bis 4 Stunden', value: 'B' },
          { label: '4 bis 6 Stunden', value: 'C' },
          { label: 'Mehr als 6 Stunden', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wieviel Platz hast du in deinem Zuhause?',
        answerOptions: [
          { label: 'Ich wohne in einer kleinen Wohnung', value: 'A' },
          { label: 'Ich wohne in einer großen Wohnung mit Zugang zum Garten', value: 'B' },
          { label: 'Ich habe genug Platz in meiner Wohnung, um meinem Haustier ein eigenes Zimmer zu geben', value: 'C' },
          { label: 'Ich habe ein Haus mit Garten und könnte sogar ein großes Tier halten', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wieviel Zeit bist du bereit, täglich in die Pflege deines Haustieres zu investieren?',
        answerOptions: [
          { label: 'Weniger als 1 Stunde', value: 'A' },
          { label: '1-2 Stunden', value: 'B' },
          { label: '2-3 Stunden', value: 'C' },
          { label: 'Mehr als 3 Stunden', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wie wichtig ist es dir, dass dein Haustier gut für Anfänger geeignet ist?',
        answerOptions: [
          { label: 'Sehr wichtig, da ich noch nie ein Haustier hatte', value: 'A' },
          { label: 'Wichtig', value: 'B' },
          { label: 'Nicht so wichtig, da ich bereits ein Haustier hatte und nach neuen Herausforderungen suche', value: 'C' },
          { label: 'Gar nicht wichtig', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wieviel Bewegung sollte dein Haustier täglich mit dir zusammen maximal benötigen?',
        answerOptions: [
          { label: 'Mein Haustier sollte nicht bewegt werden müssen', value: 'A' },
          { label: 'Ein paar Minuten pro Tag sollten ausreichen', value: 'B' },
          { label: 'Mein Haustier sollte maximal eine Stunde pro Tag brauchen', value: 'C' },
          { label: 'Mein Haustier kann mehrere Stunden Bewegung brauchen', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wieviel Lärm sollte dein Haustier maximal machen?',
        answerOptions: [
          { label: 'Mein Haustier sollte möglichst leise sein', value: 'A' },
          { label: 'Ein bisschen Lärm ist okay', value: 'B' },
          { label: 'Mein Haustier kann auch mal lauter sein', value: 'C' },
          { label: 'Mein Haustier kann so laut sein, wie es will', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wie wichtig ist es dir, dass dein Haustier trainierbar ist?',
        answerOptions: [
          { label: 'Überhaupt nicht wichtig', value: 'A' },
          { label: 'Ein wenig Trainierbarkeit wäre schön', value: 'B' },
          { label: 'Ich möchte, dass mein Haustier zumindest einige grundlegende Befehle lernt', value: 'C' },
          { label: 'Es ist mir sehr wichtig, dass mein Haustier gut trainiert ist und auf Befehle hört', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wie wichtig ist es dir, dass dein Haustier nicht haart?',
        answerOptions: [
          { label: 'Sehr wichtig', value: 'A' },
          { label: 'Ein bisschen wichtig', value: 'B' },
          { label: 'Nicht so wichtig', value: 'C' },
          { label: 'Mir ist es egal, ob mein Haustier haart oder nicht', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wieviel Geld bist du bereit, für die Pflege deines Haustiers auszugeben?',
        answerOptions: [
          { label: 'Ich möchte nicht viel Geld ausgeben und suche nach einem Haustier, das keine teuren Pflegebedürfnisse hat', value: 'A' },
          { label: 'Ich bin bereit, ein paar hundert Euro pro Jahr auszugeben', value: 'B' },
          { label: 'Ich bin bereit, ein paar tausend Euro pro Jahr auszugeben, um sicherzustellen, dass mein Haustier die bestmögliche Pflege erhält', value: 'C' },
          { label: 'Geld spielt keine Rolle, ich werde alles tun, um sicherzustellen, dass mein Haustier die bestmögliche Pflege erhält', value: 'D' }
        ] as AnswerOption[]
      },
      {
        questionText: 'Wie wichtig ist es dir, dass du Zuneigung von deinem Haustier bekommst?',
        answerOptions: [
          { label: 'Überhaupt nicht wichtig', value: 'A' },
          { label: 'Mir ist es egal, ob mein Haustier viel Zuneigung zeigt oder nicht', value: 'B' },
          { label: 'Ab und zu sollte mir mein Haustier schon Aufmerksamkeit schenken', value: 'C' },
          { label: 'Sehr wichtig, da ich viel Zeit und Energie in die Beziehung zu meinem Haustier investieren möchte', value: 'D' }
        ] as AnswerOption[]
      }
    ];
    
  currentQuestionIndex = 0;
  currentQuestion: any;
  selectedAnswers: any = {};
  quizResult: string | null = null;
  answerCounts: { [key: string]: number } = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  ngOnInit() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  selectAnswer(answer: string) {
    this.selectedAnswers[this.currentQuestionIndex] = answer;
  }
  
  evaluateAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      const selectedAnswer = this.selectedAnswers[i];
  
      if (selectedAnswer) {
        const answer = selectedAnswer as string;
        this.answerCounts[answer]++;
      }
    }
  
    let maxCount = 0;
    let maxAnswer = '';
  
    for (const [key, value] of Object.entries(this.answerCounts)) {
      if (value > maxCount) {
        maxCount = value;
        maxAnswer = key;
      }
    }

      switch (maxAnswer) {
        case 'A':
          this.quizResult = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Fische am besten zu deinem Lebensstil passen! Fische sind wunderschöne und faszinierende Kreaturen, die sich gut für Menschen eignen, die ein ruhiges und friedliches Zuhause bevorzugen. Als Besitzer von Fischen benötigst du keine große Fläche oder viel Zeit, um sich um sie zu kümmern. Sie können in einem Aquarium oder einem kleineren Behälter untergebracht werden und brauchen nur wenig Futter und Pflege. Fische können auch eine beruhigende Wirkung auf Menschen haben und können dabei helfen, Stress abzubauen. Denke jedoch daran, dass Fische auch eine Verantwortung bedeuten und es wichtig ist, das Wasser regelmäßig zu wechseln und das Aquarium sauber zu halten. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deinen Fischen aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
        break;
        case 'B':
          this.quizResult = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hamster am besten zu deinem Lebensstil passen! Hamster sind kleine und niedliche Nagetiere, die sich gut für Menschen eignen, die ein Haustier suchen, das nicht viel Platz benötigt und trotzdem interaktiv und unterhaltsam ist. Als Besitzer eines Hamsters benötigst du ein kleines Gehege, das mit Spielzeugen, einem Laufrad und Verstecken ausgestattet ist, um deinen Hamster glücklich und gesund zu halten. Hamster sind nachtaktiv, daher solltest du sicherstellen, dass dein Hamster tagsüber ausreichend Ruhe hat. Es ist wichtig, ihn jeden Tag mit frischem Wasser und Futter zu versorgen und sein Gehege regelmäßig zu reinigen. Hamster sind zudem sehr unterhaltsam und können dir stundenlang Freude bereiten, wenn du mit ihnen spielst und interagierst. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Denke jedoch daran, dass Hamster zwar kleine Haustiere sind, aber trotzdem eine Verantwortung bedeuten und Pflege benötigen. Wenn du bereit bist, deinen Hamster die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen.';
        break;
        case 'C':
          this.quizResult = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Katzen am besten zu deinem Lebensstil passen! Katzen sind wunderschöne und elegante Tiere, die sich gut für Menschen eignen, die ein unabhängiges Haustier suchen, das ihnen trotzdem Gesellschaft leisten kann. Als Besitzer einer Katze benötigst du ein sauberes Katzenklo, frisches Wasser und eine ausgewogene Ernährung, um deine Katze gesund und glücklich zu halten. Katzen sind bekannt für ihre Neigung zu schlafen und ihre unabhängige Natur, daher benötigen sie nicht so viel Aufmerksamkeit wie andere Haustiere. Trotzdem solltest du dir Zeit nehmen, um mit deiner Katze zu spielen und zu interagieren. Katzen können eine beruhigende Wirkung auf Menschen haben und helfen, Stress abzubauen. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Katzen sind auch perfekt für Menschen, die in einer kleineren Wohnung leben oder keine Zeit haben, regelmäßig spazieren zu gehen. Denke jedoch daran, dass Katzen trotz ihrer Unabhängigkeit eine Verantwortung bedeuten und Pflege benötigen. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deiner Katze aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
        break;
        case 'D':
          this.quizResult = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hunde am besten zu deinem Lebensstil passen! Hunde sind treue und liebevolle Begleiter, die sich gut für Menschen eignen, die eine enge Bindung zu ihrem Haustier aufbauen möchten. Als Besitzer eines Hundes musst du Zeit und Energie aufwenden, um ihn auszuführen, ihn zu trainieren und ihm die Liebe und Aufmerksamkeit zu schenken, die er benötigt. Hunde brauchen tägliches Training, Spaziergänge und eine ausgewogene Ernährung, um glücklich und gesund zu bleiben. Du solltest auch Zeit mit deinem Hund verbringen, um ihm das Gefühl von Liebe und Zugehörigkeit zu geben. Hunde sind auch perfekt für Menschen, die einen aktiven Lebensstil führen oder einen Begleiter für Outdoor-Aktivitäten suchen. Sie sind sehr soziale Tiere und lieben es, Zeit mit ihrem Besitzer zu verbringen. Denke jedoch daran, dass Hunde eine Verantwortung bedeuten und viel Zeit und Energie erfordern. Wenn du jedoch bereit bist, deinem Hund die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen und eine treue und liebevolle Begleitung für das Leben finden.';
        break;
        default:
          this.quizResult = 'Es tut uns leid, wir konnten kein Ergebnis für dich finden. Bitte versuche es erneut.';
    }
  }
}

