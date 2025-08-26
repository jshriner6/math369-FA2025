var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro-sols",
  "level": "1",
  "url": "intro-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction and Setting the Stage",
  "body": " Introduction and Setting the Stage    Why?   Linear algebra provides the language and tools for:       Image processing    Computer graphics    Search engines    Cryptography    Artificial Intelligence and Machine Learning    Quantum mechanics (computing, chemistry, physics, biology, optics, etc.)        How?  Our approach to learning linear algebra will include the following aspects:       Abstract. We can explore concepts using mathematical objects and definitions.    Computational. We can use technology to combine and compute with mathematical objects in meaningful ways.    Geometric. We can view concepts intuitively and describe how objects are positioned and move in space. A great reference for building this view throughout our course is Essence of linear algebra by 3Blue1Brown.         Setting the Stage   On the grid below, you may only move vertically\/horizontally, and you must move exactly 2 spaces at a time. In groups, determine if it is possible to begin on the \"start\" square and end on the \"finish\" square.   Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".     After some experimenting, you may convince yourself this is not possible. Explaining why with clarity, however, may be more challenging. One approach would be to change your perspective of the problem. You could shade every other square:  Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\", and every other square is shaded blue.  It is now more obvious why this is not possible: the rules of the game require us to start on a blue square and remain on blue squares. Since the \"Finish\" square is not blue, it's not possible to land here.       Two more grids   Repeate the previous task for the two grids below    Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and the square in row 3 column 4 is labeled with \"Finish\".    Grid with 5 rows and 5 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".      With a deeper understanding of the original question, we now have tools to approach related questions more effectively. Using similar reasoning, we can conclude it is not possible for the grid on the left, but it is possible for the grid on the right.     "
},
{
  "id": "xr-why-sols",
  "level": "2",
  "url": "intro-sols.html#xr-why-sols",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why?",
  "body": " Why?   Linear algebra provides the language and tools for:       Image processing    Computer graphics    Search engines    Cryptography    Artificial Intelligence and Machine Learning    Quantum mechanics (computing, chemistry, physics, biology, optics, etc.)      "
},
{
  "id": "xr-how-sols",
  "level": "2",
  "url": "intro-sols.html#xr-how-sols",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "How?",
  "body": " How?  Our approach to learning linear algebra will include the following aspects:  "
},
{
  "id": "xr-set-stage-sols",
  "level": "2",
  "url": "intro-sols.html#xr-set-stage-sols",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Setting the Stage.",
  "body": " Setting the Stage   On the grid below, you may only move vertically\/horizontally, and you must move exactly 2 spaces at a time. In groups, determine if it is possible to begin on the \"start\" square and end on the \"finish\" square.   Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".     After some experimenting, you may convince yourself this is not possible. Explaining why with clarity, however, may be more challenging. One approach would be to change your perspective of the problem. You could shade every other square:  Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\", and every other square is shaded blue.  It is now more obvious why this is not possible: the rules of the game require us to start on a blue square and remain on blue squares. Since the \"Finish\" square is not blue, it's not possible to land here.   "
},
{
  "id": "xr-set-stage2-sols",
  "level": "2",
  "url": "intro-sols.html#xr-set-stage2-sols",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Two more grids.",
  "body": " Two more grids   Repeate the previous task for the two grids below    Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and the square in row 3 column 4 is labeled with \"Finish\".    Grid with 5 rows and 5 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".      With a deeper understanding of the original question, we now have tools to approach related questions more effectively. Using similar reasoning, we can conclude it is not possible for the grid on the left, but it is possible for the grid on the right.   "
},
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.1\\text{:}\\)<\/span> What Can We Expect",
  "body": " : What Can We Expect    Motivation: Linear Equations and Solutions        Activity: Linear Equation in Two Variables   In this activity, we consider sets of linear equations having just two unknowns. In this case, we can graph the solutions sets for the equations, which allows us to visualize different types of behavior.     On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.            On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.        On the grid below, graph the line .  How many points satisfy this equation?    An empty coordinate system.            On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy all three equations?    An empty coordinate system.          Observations   Let's notice three important factors involved in the previous activity.     Linear Equations: Unknowns          Activity: Linear Equations in Three Unknowns   This activity considers sets of equations having three unknowns. In this case, we know that the solutions of a single equation form a plane. If it helps with visualization, consider using -inch index cards to represent planes.   Is it possible that there are no solutions to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that there is exactly one solution to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that the solutions to four equations in three unknowns form a line? Either sketch an example or state a reason why it can't happen.    What would you usually expect for the set of solutions to four equations in three unknowns?    Suppose we have a set of 500 linear equations in 10 unknowns. What would you expect regarding the number of solutions?   Suppose we have a set of 10 linear equations in 500 unknowns. What would you expect regarding the number of solutions?      Observations   Let's make some observations from our work so far.       Definition: Linear System and Solutions        Activity: Linear Equations and Their Solutions     Which of the following equations are linear? Please provide a justification for your response.   .   .   .    Consider the system of linear equations:    Is a solution?   Is a solution?    Is a solution?   Can you find a solution in which ?   Do you think there are other solutions? Please explain your response.          "
},
{
  "id": "sec-1-1-2-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Linear Equations and Solutions.",
  "body": " Motivation: Linear Equations and Solutions      "
},
{
  "id": "sec-1-1-2-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Activity: Linear Equation in Two Variables.",
  "body": " Activity: Linear Equation in Two Variables   In this activity, we consider sets of linear equations having just two unknowns. In this case, we can graph the solutions sets for the equations, which allows us to visualize different types of behavior.     On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.      "
},
{
  "id": "sec-1-1-5-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Observations.",
  "body": " Observations   Let's notice three important factors involved in the previous activity.   "
},
{
  "id": "sec-1-1-5-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-5-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Linear Equations: <span class=\"process-math\">\\(3\\)<\/span> Unknowns.",
  "body": " Linear Equations: Unknowns      "
},
{
  "id": "sec-1-1-6-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-6-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Linear Equations in Three Unknowns.",
  "body": " Activity: Linear Equations in Three Unknowns   This activity considers sets of equations having three unknowns. In this case, we know that the solutions of a single equation form a plane. If it helps with visualization, consider using -inch index cards to represent planes.   Is it possible that there are no solutions to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that there is exactly one solution to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that the solutions to four equations in three unknowns form a line? Either sketch an example or state a reason why it can't happen.    What would you usually expect for the set of solutions to four equations in three unknowns?    Suppose we have a set of 500 linear equations in 10 unknowns. What would you expect regarding the number of solutions?   Suppose we have a set of 10 linear equations in 500 unknowns. What would you expect regarding the number of solutions?    "
},
{
  "id": "sec-1-1-6-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-6-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Observations.",
  "body": " Observations   Let's make some observations from our work so far.   "
},
{
  "id": "sec-1-1-7-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-7-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Definition: Linear System and Solutions.",
  "body": " Definition: Linear System and Solutions      "
},
{
  "id": "sec-1-1-7-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-7-2",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Activity: Linear Equations and Their Solutions.",
  "body": " Activity: Linear Equations and Their Solutions     Which of the following equations are linear? Please provide a justification for your response.   .   .   .    Consider the system of linear equations:    Is a solution?   Is a solution?    Is a solution?   Can you find a solution in which ?   Do you think there are other solutions? Please explain your response.        "
},
{
  "id": "sec-1-2-1",
  "level": "1",
  "url": "sec-1-2-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.2\\text{:}\\)<\/span> Gaussian Elimination",
  "body": " : Gaussian Elimination    Motivation: Gaussian Elimination        Preview: Finding Solution Spaces   In this activity, we will consider some simple examples that will guide us in finding a more general approach.     Give a description of the solution space to the linear system:       Give a description of the solution space to the linear system:       Give a description of the solution space to the linear system:       Describe the solution space to the linear equation .      Describe the solution space to the linear equation .      Big Idea: Finding Solution Spaces          Operations on Linear Systems   We can perform the following operations on a linear system to get a new system, without changing the solution space:     Example: Using Gaussian Elimination   Find the solution space of the following system of equations:        Activity: Gaussian Elimination   For each of the following linear systems, use Gaussian elimination to describe the solutions to the following systems of linear equations. In particular, determine whether each linear system has exactly one solution, infinitely many solutions, or no solutions.                  "
},
{
  "id": "sec-1-2-1-2-1",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Gaussian Elimination.",
  "body": " Motivation: Gaussian Elimination      "
},
{
  "id": "sec-1-2-1-2-2",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview: Finding Solution Spaces.",
  "body": " Preview: Finding Solution Spaces   In this activity, we will consider some simple examples that will guide us in finding a more general approach.     Give a description of the solution space to the linear system:       Give a description of the solution space to the linear system:       Give a description of the solution space to the linear system:       Describe the solution space to the linear equation .      Describe the solution space to the linear equation .    "
},
{
  "id": "sec-1-2-1-2-3",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-2-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Big Idea: Finding Solution Spaces.",
  "body": " Big Idea: Finding Solution Spaces      "
},
{
  "id": "sec-1-2-1-3-1",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-3-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Operations on Linear Systems.",
  "body": " Operations on Linear Systems   We can perform the following operations on a linear system to get a new system, without changing the solution space:   "
},
{
  "id": "sec-1-2-1-3-2",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-3-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Example: Using Gaussian Elimination.",
  "body": " Example: Using Gaussian Elimination   Find the solution space of the following system of equations:    "
},
{
  "id": "sec-1-2-1-4-1",
  "level": "2",
  "url": "sec-1-2-1.html#sec-1-2-1-4-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Activity: Gaussian Elimination.",
  "body": " Activity: Gaussian Elimination   For each of the following linear systems, use Gaussian elimination to describe the solutions to the following systems of linear equations. In particular, determine whether each linear system has exactly one solution, infinitely many solutions, or no solutions.                "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
