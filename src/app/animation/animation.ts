import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const AngularAnimation = [
  trigger("slideInOutUp", [
    transition(":enter", [
      style({
        transform: "translateY(-50%)",
        opacity: 0
      }),
      animate( 
        "400ms ease-in",
        style({
          transform: "translateY(-100%)",
          opacity: 0
        })
      )
    ]),
    transition(":leave", [
      style({ zIndex: "0" }),
      animate("600ms ease-out", style({ transform: "translateY(-80%)" }))
    ])
  ]),

  trigger("slideInOutDown", [
    transition(":leave", [
      style({ zIndex: "1" }),
      animate("400ms ease-out", style({ transform: "translateY(100%)" })),
      transition(":enter", [
        style({
          transform: "translateY(-20%)",
          zIndex: "1",
          opacity: 0
        }),
        animate(
          "600ms ease-in-out",
          style({
            transform: "translateY(-200%)",
            zIndex: "1",
            opacity: 0
          })
        )
      ])
    ])
  ]),

  trigger("slideInOut", [
    transition(":enter", [
      style({ transform: "translateY(100%)", opacity: 0 }),
      animate(
        "600ms ease-in",
        style({ transform: "translateY(0%)", opacity: 1 })
      )
    ]),
    transition(":leave", [
      style({ transform: "translateY(0%)", opacity: 1 }),
      animate("0ms ease-in", style({ transform: "translateY(0%)", opacity: 0 }))
    ])
  ]),

 trigger("slideOutOut", [
    transition(":enter", [
      style({ transform: "translateY(-100%)", opacity: 0 }),
      animate(
        "600ms ease-in",
        style({ transform: "translateY(0%)", opacity: 1 })
      )
    ]),
    transition(":leave", [
      style({ transform: "translateY(0%)", opacity: 1 }),
      animate("0ms ease-in", style({ transform: "translateY(0%)", opacity: 0 }))
    ])
  ]),
  trigger("slideView", [
    state("true", style({ transform: "translateY(100%)", opacity: 0 })),
    state("false", style({ transform: "translateY(0)", opacity: 1 })),
    transition(
      "0 => 1",
      animate("500ms", style({ transform: "translateY(0)", opacity: 1 }))
    ),
    transition(
      "1 => 1",
      animate("500ms", style({ transform: "translateY(100%)", opacity: 0 }))
    )
  ])
];
