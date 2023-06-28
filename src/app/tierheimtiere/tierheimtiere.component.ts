import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tierheimtiere',
  templateUrl: './tierheimtiere.component.html',
  styleUrls: ['./tierheimtiere.component.css']
})

export class TierheimtiereComponent implements OnInit{

  tierheimtiere = {

    animals:[
      {
        name: 'Max',
        type: 'Hund',
        breed: 'Labrador Retriever',
        gender: 'männlich',
        age: '3 Jahre',
        description: 'Max ist ein aktiver und freundlicher Hund, der gerne draußen spielt und spazieren geht. Er liebt es, mit Kindern zu spielen und ist sehr gutmütig. Max ist bereits stubenrein und kennt einige Grundkommandos. Er würde sich gut in einer Familie mit Kindern oder aktiven Erwachsenen eignen.',
        image: 'pfad/zum/bild1.jpg',
      },
      {
        name: 'Oreo',
        type: 'Katze',
        breed: 'Europäisch Kurzhaar',
        gender: 'weiblich',
        age: '2 Jahre',
        description: 'Oreo ist eine süße und schüchterne Katze, die gerne in ihrem Versteck bleibt. Sie liebt es, gestreichelt zu werden, sobald sie Vertrauen aufgebaut hat. Oreo ist bereits kastriert und stubenrein. Sie würde sich gut in einem ruhigen Haushalt eignen, ohne kleine Kinder oder andere Haustiere.',
        image: 'pfad/zum/bild2.jpg',
      },
      {
        name: 'Nemo',
        type: 'Kaninchen',
        breed: 'Zwergkaninchen',
        gender: 'männlich',
        age: '1 Jahr',
        description: 'Nemo ist ein süßes und neugieriges Kaninchen, das gerne hüpft und spielt. Er ist bereits kastriert und stubenrein. Nemo braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freigehege ideal für ihn. Er würde sich gut in einer Familie mit älteren Kindern oder als Begleiter für ein anderes Kaninchen eignen.',
        image: 'pfad/zum/bild3.jpg',
      },
      {
        name: 'Cookie',
        type: 'Meerschweinchen',
        breed: 'Glatthaar-Meerschweinchen',
        gender: 'weiblich',
        age: '1 Jahr',
        description: 'Cookie ist ein süßes und verspieltes Meerschweinchen, das gerne kuschelt und gestreichelt wird. Sie ist bereits kastriert und stubenrein. Cookie braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freigehege ideal für sie. Sie würde sich gut in einer Familie mit Kindern oder als Begleiter für ein anderes Meerschweinchen eignen.',
        image: 'pfad/zum/bild4.jpg',
      },
      {
        name: 'Rio',
        type: 'Vogel',
        breed: 'Wellensittich',
        gender: 'männlich',
        age: '1 Jahr',
        description: 'Rio ist ein lebhafter und neugieriger Wellensittich, der gerne zwitschert und spielt. Er ist bereits zahm und kann auf die Hand genommen werden. Rio braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freiflugzimmer ideal für ihn. Er würde sich gut als Begleiter für einen anderen Wellensittich oder als Haustier für jemanden, der viel Zeit für ihn hat, eignen.',
        image: 'pfad/zum/bild5.jpg',
      },
    ]
  };
  

 
  constructor() { }

  ngOnInit(): void {
  }

}
