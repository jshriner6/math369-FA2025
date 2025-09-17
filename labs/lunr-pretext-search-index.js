var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "lab-1",
  "level": "1",
  "url": "lab-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 1: Systems of Equations",
  "body": " Lab 1: Systems of Equations   Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.  There is a page of Sage cells available for you to use for computation.      Consider the system of linear equations: Write this system as an augmented matrix and use Sage to find a description of the solution space.        Shown below is the traffic pattern in the downtown area of a large city. The figures give the number of cars per hour traveling along each road. Any car that drives into an intersection must also leave the intersection. This means that the number of cars entering an intersection in an hour is equal to the number of cars leaving the intersection.  Traffic pattern in a directed graph.       Write a system of equations for the quantities , , , and and describe the set of solutions. Is there a single solution, infinitely many solutions, or no solutions?      Explain why you would expect infinitely many solutions for this particular traffic pattern.      What is the smallest amount of traffic flowing through ?         A typical problem in thermodynamics is to determine the temperature distribution across a thin plate if you know the temperature around the boundary. Assume, for instance, that the plate represents a cross section of a metal beam with negligible heat flow in the direction perpendicular to the plate. Let be the temperatures at the six nodes inside the beam. The temperature at a node is approximately the average of the four nearest nodes: for instance, .    A temperature grid.       In the real world, the approximation becomes better the closer the points are together or as we add more and more into the grid. Set up a system of linear equations to find the temperature inside the plate.      Solve your equations to find the temperatures inside the plate.  Helpful Sage hint: If you have a matrix B containing rational entries (e.g. fractions), you can obtain a decimal approximation using B.numerical_approx(digits=4) . You may, of course, change 4 to any other appropriate value.         This exercise is about balancing chemical reactions.  Chemists denote a molecule of water as , which means it is composed of two atoms of hydrogen (H) and one atom of oxygen (O). The process by which hydrogen is burned is described by the chemical reaction This means that molecules of hydrogen combine with molecules of oxygen to produce water molecules. The number of hydrogen atoms is the same before and after the reaction; the same is true of the oxygen atoms.     How many hydrogen atoms are there before the reaction? How many hydrogen atoms are there after the reaction? Find a linear equation in , , and by equating these quantities.      Find a second linear equation in , , and by equating the number of oxygen atoms before and after the reaction.      Describe the solutions of this linear system. Why would you expect infinitely many solutions when balancing a chemical reaction?      In this chemical setting, , , and should be positive integers. Find the solution where , , and are the smallest possible positive integers.      Consider the reaction where potassium permanganate and manganese sulfate combine with water to produce manganese dioxide, potassium sulfate, and sulfuric acid: As in the previous exercise, find the appropriate values for to balance the chemical reaction.        "
},
{
  "id": "lab-1-3-1",
  "level": "2",
  "url": "lab-1.html#lab-1-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the system of linear equations: Write this system as an augmented matrix and use Sage to find a description of the solution space.   "
},
{
  "id": "lab-1-4-1",
  "level": "2",
  "url": "lab-1.html#lab-1-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Shown below is the traffic pattern in the downtown area of a large city. The figures give the number of cars per hour traveling along each road. Any car that drives into an intersection must also leave the intersection. This means that the number of cars entering an intersection in an hour is equal to the number of cars leaving the intersection.  Traffic pattern in a directed graph.       Write a system of equations for the quantities , , , and and describe the set of solutions. Is there a single solution, infinitely many solutions, or no solutions?      Explain why you would expect infinitely many solutions for this particular traffic pattern.      What is the smallest amount of traffic flowing through ?    "
},
{
  "id": "lab-1-5-1",
  "level": "2",
  "url": "lab-1.html#lab-1-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  A typical problem in thermodynamics is to determine the temperature distribution across a thin plate if you know the temperature around the boundary. Assume, for instance, that the plate represents a cross section of a metal beam with negligible heat flow in the direction perpendicular to the plate. Let be the temperatures at the six nodes inside the beam. The temperature at a node is approximately the average of the four nearest nodes: for instance, .    A temperature grid.       In the real world, the approximation becomes better the closer the points are together or as we add more and more into the grid. Set up a system of linear equations to find the temperature inside the plate.      Solve your equations to find the temperatures inside the plate.  Helpful Sage hint: If you have a matrix B containing rational entries (e.g. fractions), you can obtain a decimal approximation using B.numerical_approx(digits=4) . You may, of course, change 4 to any other appropriate value.    "
},
{
  "id": "lab-1-6-1",
  "level": "2",
  "url": "lab-1.html#lab-1-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  This exercise is about balancing chemical reactions.  Chemists denote a molecule of water as , which means it is composed of two atoms of hydrogen (H) and one atom of oxygen (O). The process by which hydrogen is burned is described by the chemical reaction This means that molecules of hydrogen combine with molecules of oxygen to produce water molecules. The number of hydrogen atoms is the same before and after the reaction; the same is true of the oxygen atoms.     How many hydrogen atoms are there before the reaction? How many hydrogen atoms are there after the reaction? Find a linear equation in , , and by equating these quantities.      Find a second linear equation in , , and by equating the number of oxygen atoms before and after the reaction.      Describe the solutions of this linear system. Why would you expect infinitely many solutions when balancing a chemical reaction?      In this chemical setting, , , and should be positive integers. Find the solution where , , and are the smallest possible positive integers.      Consider the reaction where potassium permanganate and manganese sulfate combine with water to produce manganese dioxide, potassium sulfate, and sulfuric acid: As in the previous exercise, find the appropriate values for to balance the chemical reaction.    "
},
{
  "id": "lab-2",
  "level": "1",
  "url": "lab-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 2: Markov Chains",
  "body": " Lab 2: Markov Chains    Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.  There is a page of Sage cells available for you to use for computation.  We're going to use linear algebra to model a bike sharing program, like the one in Fort Collins. To keep things simple, we're going to imagine there are only two locations, and , where the bicycles are located.  We will assume that bicycles are rented in the morning and returned in the evening according to the following rules:   Of the bikes that are rented from location , of them are returned to and the other are returned to .    Of the bikes that are rented from location , of them are returned to and the other are returned to .    All bikes get rented throughout the day.           Suppose that some morning there are bicycles at and none at . How many bicycles are at the next morning and how many are at ?      Suppose that some morning there are bicycles at and none at . How many bicycles are at the next morning and how many are at ?      Now suppose that there are bicycles at and at some morning. How many are at each location the next morning? Show your work and explain your thinking.          Now we're going to introduce some algebra to help us understand what's going on more generally. Suppose that is the number of bicycles at on the morning of day and is the number of bicycles at .  The next morning, the number of bicycles at location will be of and of . Express this as an algebraic equation for .      Find an algebraic equation for .      Now we'll bundle this together using vectors and matrices. We will use the vector to represent the distribution of bicycles on day . Using the equations for and that you just wrote, find a matrix so that .      Check your work by evaluating and comparing the result to what you found above.          Suppose that there are, on Monday morning, bicycles at and at . Find the distribution of bicycles on Tuesday morning, Wednesday morning, and Thursday morning. Explain how you found these distributions.      Suppose you find on a Saturday morning that there are bicycles at and at . How many were at each location a day earlier on Friday morning? On Thursday morning?          Here are some vectors that are special for matrix : . Evaluate . What do you notice?      Evaluate and compare it to . What do you notice?      Suppose that the initial distribution of bicycles some morning is written as a linear combination of and : . Use the linearity principle of matrix multiplication , along with what you just found out above, to explain why .      Apply the same reasoning to write as a linear combination of and .          Suppose that the initial distribution of bicycles has at and at . Write the vector as a linear combination of and .      Use what you've found above to write , the distribution of bicycles the next day, as a linear combination of and .      In the same way, write , the distribution of bicycles one week later, as a linear combination of and .      What happens as time goes by? That is, after a very long time, what happens to when written as a linear combination of and ?      What does this say about the ultimate distribution of bicycles at locations and ?         Repeat the analysis from part 5, assuming that all bicycles start at . What happens after a very long time?     "
},
{
  "id": "lab-2-3-1",
  "level": "2",
  "url": "lab-2.html#lab-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   Suppose that some morning there are bicycles at and none at . How many bicycles are at the next morning and how many are at ?      Suppose that some morning there are bicycles at and none at . How many bicycles are at the next morning and how many are at ?      Now suppose that there are bicycles at and at some morning. How many are at each location the next morning? Show your work and explain your thinking.    "
},
{
  "id": "lab-2-4-1",
  "level": "2",
  "url": "lab-2.html#lab-2-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   Now we're going to introduce some algebra to help us understand what's going on more generally. Suppose that is the number of bicycles at on the morning of day and is the number of bicycles at .  The next morning, the number of bicycles at location will be of and of . Express this as an algebraic equation for .      Find an algebraic equation for .      Now we'll bundle this together using vectors and matrices. We will use the vector to represent the distribution of bicycles on day . Using the equations for and that you just wrote, find a matrix so that .      Check your work by evaluating and comparing the result to what you found above.    "
},
{
  "id": "lab-2-5-1",
  "level": "2",
  "url": "lab-2.html#lab-2-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "   Suppose that there are, on Monday morning, bicycles at and at . Find the distribution of bicycles on Tuesday morning, Wednesday morning, and Thursday morning. Explain how you found these distributions.      Suppose you find on a Saturday morning that there are bicycles at and at . How many were at each location a day earlier on Friday morning? On Thursday morning?    "
},
{
  "id": "lab-2-6-1",
  "level": "2",
  "url": "lab-2.html#lab-2-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "   Here are some vectors that are special for matrix : . Evaluate . What do you notice?      Evaluate and compare it to . What do you notice?      Suppose that the initial distribution of bicycles some morning is written as a linear combination of and : . Use the linearity principle of matrix multiplication , along with what you just found out above, to explain why .      Apply the same reasoning to write as a linear combination of and .    "
},
{
  "id": "lab-2-7-1",
  "level": "2",
  "url": "lab-2.html#lab-2-7-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "   Suppose that the initial distribution of bicycles has at and at . Write the vector as a linear combination of and .      Use what you've found above to write , the distribution of bicycles the next day, as a linear combination of and .      In the same way, write , the distribution of bicycles one week later, as a linear combination of and .      What happens as time goes by? That is, after a very long time, what happens to when written as a linear combination of and ?      What does this say about the ultimate distribution of bicycles at locations and ?    "
},
{
  "id": "lab-2-8-1",
  "level": "2",
  "url": "lab-2.html#lab-2-8-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Repeat the analysis from part 5, assuming that all bicycles start at . What happens after a very long time?   "
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
