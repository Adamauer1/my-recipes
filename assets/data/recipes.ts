const recipes: any = [
  {
    id: 0,
    name: "Popeye's Chicken Sandwich",
    image: require("@/assets/images/maxresdefault.jpg"),
    descriptions: {},
    ingredients: {
      marinade: [
        "4-6 - boneless skinless chick thighs",
        "2 cups - buttermilk",
        "2 tsp - salt",
        "2 tsp - garlic powder",
        "1 tsp - any pepper powder",
      ],
      "flour-mix": [
        "3 cups - all purpose flour",
        "2.5 tsp - salt",
        "2 tsp - garlic powder",
        "1.5 tsp - smoked paprika",
        "0.5 black pepper",
        "1 tsp - cayenne (pepper)",
      ],
      mayonnaise: [
        "0.75 cup - mayo",
        "8 - garlic cloves",
        "1 tbsp - hot sauce",
        "salt to taste",
        "1 tsp - smoked paprika",
        "lemon juice to taste",
      ],
    },
    instructions: {
      marinade: [
        "Toss chicken in marinade, let sit for an hour minimum or overnight maximum",
      ],
      dredge: [
        "add all ingredients in a medium sized container Tip: for extra flaky bits - add droplets of marinade into dredge and mix together forming baby clumps",
        "Make sure chicken is coated in flour and place on baking sheet with a rack. Do not pile on top of each other",
      ],
      frying: [
        "Fill a cast iron pan with a neutral oil about halfway full.",
        "Using a fry or candy thermometer, heat oil to 350 f degrees.",
        "Once heated, drop the chicken away from you and fry until golden brown with an internal temperatur of 165 f degrees.",
        "Take out of the oil into a sheet tray with a rack on top to cool",
      ],
    },
    link: {},
  },
  {
    id: 1,
    name: "Philly Pretzel Factory Soft Pretzels",
    image: require("@/assets/images/phillypretzel.jpg"),
    descriptions: {},
    ingredients: {
      dough: [
        "4 cups - flour",
        "1.5 cups - warm water",
        "2.25 tsp - dry yeast",
        "1 tsp - salt",
        "1 tbsp - suger",
        "1 tbsp - melted unsalted butter",
      ],
      "baking soda bath": [
        "0.5 cut - baking soda",
        "9 cups - boiled warm water",
      ],
    },
    instructions: {
      dough: [
        "Whisk together yeast, warm water, salt, sugar, and melted butter. Use a mixer to add the flour. The dough should have a bouncy consistency.",
        "Knead and roll out into log strands. Create pretzel shape. Refrigerate overnight",
      ],
      "baking soda bath": [
        "Dip in a boiling baking soda bath, drain, and then salt",
      ],
      bake: ["Bake at 400 degrees f for about 8 minutes"],
    },
    link: "",
  },
];

export default recipes;
