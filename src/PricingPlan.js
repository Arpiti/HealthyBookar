 const mother_veg = [
//                            B,   L,    D
/* Dummy price @0 */         [0,   0,   0],
/* 1 month prices */       [500, 500, 500],
/* 2 month prices */       [490, 490, 490],
/* 3 month prices */       [480, 480, 480],
/* 4 month prices */       [470, 470, 470],
/* 5 month prices */       [460, 460, 460],
/* 6 month prices */       [450, 450, 450],
  ];


// similarly prices are set in 2D matrix for other variantions

 const mother_egg = [
    [0,   0,   0],
    [600, 600, 600],
    [590, 590, 590],
    [580, 580, 580],
    [570, 570, 570],
    [560, 560, 560],
    [550, 550, 550],
  ];

 const mother_nonVeg = [
    [0,   0,   0],
    [700, 700, 700],
    [690, 690, 690],
    [680, 680, 680],
    [670, 670, 670],
    [660, 660, 660],
    [650, 650, 650],
  ];

 const baby_veg = [
    [0,   0,   0],
    [400, 400, 400],
    [390, 390, 390],
    [380, 380, 380],
    [370, 370, 370],
    [360, 360, 360],
    [350, 350, 350],
  ];

export const calculatePrice = () => {

    const [{ basket }] = useContext(StateContext);
    

    // id: RECOMMENDED_PLAN_TYPE_3,
    // type: 'recommended',
    // subject: BABY,
    // deliveryDone: true,
    // eatPreference: 'Vegetarian',
    // planDurationMother: 3,
    // planDurationNewBorn: null,
    // breakFastRequired: true,
    // lunchRequired: true,
    // dinnerRequired: true,
    // price: 10000,
    // paused: false


}