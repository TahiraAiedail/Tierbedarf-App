import { Component} from '@angular/core';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})

export class QuizComponent {

	question = [
		{ 
			question: 'Wieviel Zeit verbringst du täglich zu Hause?',
	  		options: ['Weniger als 2 STunden', '2 bis 4 Stunden', '4 bis 8 Stunden', 'mehr als 8 Stunden']
		},
		{
			question: 'Wieviel Platz hast du in deinem Zuhause?',
			options: ['Ich wohne in einer kleinen Wohnung mit begrenztem Platz', 'Ich habe ein Haus mit Garten, in dem mein Haustier spielen kann', 'Ich habe genug Platz in meiner Wohnung, um meinem Haustier ein eigenes Zimmer zu geben', 'Ich habe viel Platz und könnte sogar ein großes Tier halten']
		},
		{
			question: 'Wieviel Zeit bist du bereit, täglich in die Pflege deines Haustiers zu investieren?',
			options: ['Weniger als eine Stunde pro Tag', 'Ein bis zwei Stunden pro Tag', 'Mehrere Stunden pro Tag', 'Meine gesamte Freizeit']
		},
		{
			question: 'Wie wichtig ist es dir, dass dein Haustier gut für Anfänger geeignet ist?',
			options: ['Sehr wichtig, da ich noch nie ein Haustier hatte', 'Ein bisschen wichtig', 'Ich habe bereits Erfahrung mit Haustieren und suche nach einer neuen Herausforderung', 'Es ist egal, ob mein Haustier für Anfänger geeignet ist oder nicht']
		},
		{
			question: 'Wieviel Bewegung sollte dein Haustier täglich benötigen?',
			options: ['Mein Haustier sollte nicht viel bewegt werden müssen', 'Einige Minuten pro Tag sollten ausreichen', 'Mein Haustier sollte mindestens eine Stunde Bewegung pro Tag brauchen', 'Mein Haustier sollte mehrere Stunden Bewegung pro Tag brauchen']
		},
		{
			question: 'Wieviel Lärm kannst du tolerieren?',
			options: ['Ich bevorzuge ruhige Haustiere', 'Ein bisschen Lärm ist kein Problem', 'Ich kann viel Lärm tolerieren', 'Lautstärke ist kein Problem für mich']
		},
		{
			question: 'Wie wichtig ist es dir, dass dein Haustier trainierbar ist?',
			options: ['Überhaupt nicht wichtig', 'Ein wenig Trainierbarkeit wäre schön', 'Ich möchte, dass mein Haustier zumindest einige grundlegende Befehle lernt', 'Es ist mir sehr wichtig, dass mein Haustier gut trainiert ist und auf Befehle hört']
		},
		{
			question: 'Wie wichtig ist es dir, dass dein Haustier nicht haart?',
			options: ['Sehr wichtig', 'Ein bisschen wichtig', 'Nicht so wichtig', 'Mir ist es egal, ob mein Haustier haart oder nicht']
		},
		{
			question: 'Wieviel Geld bist du bereit, für die Pflege deines Haustiers auszugeben?',
			options: ['Ich möchte nicht viel Geld ausgeben und suche nach einem Haustier, das keine teuren Pflegebedürfnisse hat', 'Ich bin bereit, ein paar hundert Euro pro Jahr auszugeben', 'Ich bin bereit, ein paar tausend Euro pro Jahr auszugeben, um sicherzustellen, dass mein Haustier die bestmögliche Pflege erhält', 'Geld spielt keine Rolle, ich werde alles tun, um sicherzustellen, dass mein Haustier die bestmögliche Pflege erhält']
		},
		{
			question: 'Wie wichtig ist es dir, dass du Zuneigung von deinem Haustier bekommst?',
			options: ['Überhaupt nicht wichtig', 'Mir ist es egal, ob mein Haustier viel Zuneigung zeigt oder nicht', 'Ab und zu sollte mir mein Haustier schon Aufmerksamkeit schenken', 'Sehr wichtig, da ich viel Zeit und Energie in die Beziehung zu meinem Haustier investieren möchte']
		}
	];

selectedAnswers: string[] = [];
showResults: boolean = false;
resultsMessage: string = '';

evaluateQuiz() {
  const answerCount: { [key: string]: number } = {};

  for (const question of this.question) {
    const selectedAnswer = this.selectedAnswers[this.question.indexOf(question)];

    if (answerCount[selectedAnswer]) {
      answerCount[selectedAnswer]++;
    } else {
      answerCount[selectedAnswer] = 1;
    }
  }

  let maxCount = 0;
  let selectedOption = '';

  const options = Object.keys(answerCount);
  for (const option of options) {
    if (answerCount[option] > maxCount) {
      maxCount = answerCount[option];
      selectedOption = option;
    }
  }

  let resultMessage = '';

  switch (selectedOption) {
    case 'Fische':
      resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Fische am besten zu deinem Lebensstil passen! Fische sind wunderschöne und faszinierende Kreaturen, die sich gut für Menschen eignen, die ein ruhiges und friedliches Zuhause bevorzugen. Als Besitzer von Fischen benötigst du keine große Fläche oder viel Zeit, um sich um sie zu kümmern. Sie können in einem Aquarium oder einem kleineren Behälter untergebracht werden und brauchen nur wenig Futter und Pflege. Fische können auch eine beruhigende Wirkung auf Menschen haben und können dabei helfen, Stress abzubauen. Denke jedoch daran, dass Fische auch eine Verantwortung bedeuten und es wichtig ist, das Wasser regelmäßig zu wechseln und das Aquarium sauber zu halten. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deinen Fischen aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
      break;
    case 'Hamster':
      resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hamster am besten zu deinem Lebensstil passen! Hamster sind kleine und niedliche Nagetiere, die sich gut für Menschen eignen, die ein Haustier suchen, das nicht viel Platz benötigt und trotzdem interaktiv und unterhaltsam ist. Als Besitzer eines Hamsters benötigst du ein kleines Gehege, das mit Spielzeugen, einem Laufrad und Verstecken ausgestattet ist, um deinen Hamster glücklich und gesund zu halten. Hamster sind nachtaktiv, daher solltest du sicherstellen, dass dein Hamster tagsüber ausreichend Ruhe hat. Es ist wichtig, ihn jeden Tag mit frischem Wasser und Futter zu versorgen und sein Gehege regelmäßig zu reinigen.Hamster sind zudem sehr unterhaltsam und können dir stundenlang Freude bereiten, wenn du mit ihnen spielst und interagierst. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Denke jedoch daran, dass Hamster zwar kleine Haustiere sind, aber trotzdem eine Verantwortung bedeuten und Pflege benötigen. Wenn du bereit bist, deinen Hamster die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen.';
      break;
    case 'Katzen':
      resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Katzen am besten zu deinem Lebensstil passen! Katzen sind wunderschöne und elegante Tiere, die sich gut für Menschen eignen, die ein unabhängiges Haustier suchen, das ihnen trotzdem Gesellschaft leisten kann. Als Besitzer einer Katze benötigst du ein sauberes Katzenklo, frisches Wasser und eine ausgewogene Ernährung, um deine Katze gesund und glücklich zu halten. Katzen sind bekannt für ihre Neigung zu schlafen und ihre unabhängige Natur, daher benötigen sie nicht so viel Aufmerksamkeit wie andere Haustiere. Trotzdem solltest du dir Zeit nehmen, um mit deiner Katze zu spielen und zu interagieren. Katzen können eine beruhigende Wirkung auf Menschen haben und helfen, Stress abzubauen. Sie sind auch relativ einfach zu pflegen und erfordern nicht viel Zeit oder Energie. Katzen sind auch perfekt für Menschen, die in einer kleineren Wohnung leben oder keine Zeit haben, regelmäßig spazieren zu gehen. Denke jedoch daran, dass Katzen trotz ihrer Unabhängigkeit eine Verantwortung bedeuten und Pflege benötigen. Mit ein wenig Zeit und Aufmerksamkeit kannst du jedoch eine wunderbare Beziehung zu deiner Katze aufbauen und eine friedliche und ruhige Umgebung in deinem Zuhause schaffen.';
      break;
    case 'Hunde':
      resultMessage = 'Herzlichen Glückwunsch, das Ergebnis des Tests zeigt, dass Hunde am besten zu deinem Lebensstil passen! Hunde sind treue und liebevolle Begleiter, die sich gut für Menschen eignen, die eine enge Bindung zu ihrem Haustier aufbauen möchten. Als Besitzer eines Hundes musst du Zeit und Energie aufwenden, um ihn auszuführen, ihn zu trainieren und ihm die Liebe und Aufmerksamkeit zu schenken, die er benötigt. Hunde brauchen tägliches Training, Spaziergänge und eine ausgewogene Ernährung, um glücklich und gesund zu bleiben. Du solltest auch Zeit mit deinem Hund verbringen, um ihm das Gefühl von Liebe und Zugehörigkeit zu geben. Hunde sind auch perfekt für Menschen, die einen aktiven Lebensstil führen oder einen Begleiter für Outdoor-Aktivitäten suchen. Sie sind sehr soziale Tiere und lieben es, Zeit mit ihrem Besitzer zu verbringen. Denke jedoch daran, dass Hunde eine Verantwortung bedeuten und viel Zeit und Energie erfordern. Wenn du jedoch bereit bist, deinem Hund die Liebe und Aufmerksamkeit zu schenken, die er verdient, kannst du eine wunderbare Beziehung zu deinem pelzigen Freund aufbauen und eine treue und liebevolle Begleitung für das Leben finden.';
      break;
    default:
      resultMessage = 'Es tut uns leid, wir konnten keine spezifische Empfehlung basierend auf deinen Antworten geben.';
  }

  this.showResults = true;
}
}