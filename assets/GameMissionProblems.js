const PROBLEM_TYPES = Object.freeze({
  SOLVE_THE_EQUATION: 0,
  ANSWER_THE_QUESTION: 1,
});

const TEST_MISSION = Object.freeze({
  title: "Jerarquía de operaciones",
  problems: [
    {
      type: PROBLEM_TYPES.SOLVE_THE_EQUATION,
      statement: "5 + ? x 6 = 71",
      unkownChar: "?",
      answers: ["5", "11", "10", "12"],
      correct_answer: "11",
    },
    {
      type: PROBLEM_TYPES.SOLVE_THE_EQUATION,
      statement: "? + 5 x 3 = 17",
      unkownChar: "?",
      answers: ["21", "2", "17", "13"],
      correct_answer: "2",
    },
  ],
});

export { PROBLEM_TYPES, TEST_MISSION };
