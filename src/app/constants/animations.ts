import { animate, animateChild, group, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";


export const RevealContentAndChildren = [
      trigger('revealContent', [
            state('visible', style({
                  opacity: '1',
                  transform: 'scale(1) translate-y-0',
            })),
            state('hidden', style({
                  opacity: '0',
                  transform: 'scale(.9) translate-y-30',
            })),
            transition('* => visible', [
                  group([
                        query('@revealContentChild', [
                              animateChild(),
                              stagger(50, [
                                    animate('.6s cubic-bezier(0, 1.01, 0, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
                              ])
                        ]),
                        animate('.7s cubic-bezier(0.1, 1.22, 0.1, 1)',
                              keyframes([
                                    style({ display: 'block', opacity: '0', transform: 'scale(.75) translateY(10%)', offset: 0 }),
                                    style({ display: 'block', opacity: '0', transform: 'scale(.75) translateY(10%)', offset: 0.01 }),
                                    style({ display: 'block',  opacity: '1', transform: 'scale(1) translateY(0%)', offset: 1 }),
                              ])
                        ),
                  ])
            ]),
      ]),
      trigger('revealContentChild', [
            state('visible', style({
                  opacity: '1',
                  transform: 'scale(1) translateY(0)',
            })),
            state('hidden', style({
                  opacity: '.3',
                  transform: 'scale(.9) translateY(30)',
            })),
            transition('* <=> *', [
                  animate('2s cubic-bezier(0.66, 0.04, 0, 1.01)'
                  )
            ]),
      ])
]


export const animatedList = [
    trigger('animatedList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(.7) translateY(100%)' }),
          stagger(50, [
            animate('.3s cubic-bezier(0, 1.01, 0, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])]