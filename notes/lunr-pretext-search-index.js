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
  "id": "sec-1-1-sols",
  "level": "1",
  "url": "sec-1-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.1\\text{:}\\)<\/span> What Can We Expect",
  "body": " : What Can We Expect    Motivation: Linear Equations and Solutions       In essence, linear algebra is all about sets of linear equations. In practice, it helps us deal with lots of linear equations (think trillions of equations with trillions of variables). What types of solutions can we expect?     Activity: Linear Equation in Two Variables   In this activity, we consider sets of linear equations having just two unknowns. In this case, we can graph the solutions sets for the equations, which allows us to visualize different types of behavior.     On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.       The graph of the two lines is as shown on the right. There is a single point, the point , at which the lines intersect. Therefore, there is a single point that satisfies both equations.   Two lines intersecting at one point.        On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.       These two lines are parallel, which means there is no point at which the lines intersect. Therefore, there is no point that satisfies both equations.   Two parallel lines.        On the grid below, graph the line .  How many points satisfy this equation?    An empty coordinate system.       There are infinitely many points that lie on this line and that, therefore, satisfy this single equation.   A single line.        On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy all three equations?    An empty coordinate system.       These three lines do not have a common intersection point. Consequently, there is no point satisfying all three equations.   Three lines which do not intersect at a single point.          Observations   Let's notice three important factors involved in the previous activity.       The number of equations (number of lines).    The number of variables, also called unknowns (coordinate system).    The number of intersection points (number of solutions: variable values that satisfy all equations).        Linear Equations: Unknowns       If we increase the number of unknowns to , our visuals are now in three-dimensional space, and linear equations are planes.   Two planes intersecting at a line.        Activity: Linear Equations in Three Unknowns   This activity considers sets of equations having three unknowns. In this case, we know that the solutions of a single equation form a plane. If it helps with visualization, consider using -inch index cards to represent planes.   Is it possible that there are no solutions to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that there is exactly one solution to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that the solutions to four equations in three unknowns form a line? Either sketch an example or state a reason why it can't happen.    What would you usually expect for the set of solutions to four equations in three unknowns?    Suppose we have a set of 500 linear equations in 10 unknowns. What would you expect regarding the number of solutions?   Suppose we have a set of 10 linear equations in 500 unknowns. What would you expect regarding the number of solutions?       Yes, it is possible if the two planes are parallel to one another.    No, this is not possible. Two planes will either intersect in a line, if they are not parallel, or not intersect at all, if they are parallel.    Yes, it is possible that four planes intersect in a line. One may sketch four planes that intersect in, say, the -axis.    In general, we would expect there to be no solutions to four equations in three unknowns because there are more equations than unknowns.    Since there are more equations than unknowns, we would expect there to be no solutions. We cannot guarantee this, however.    Since there are fewer equations than unknowns, we would expect there to be infinitely many solutions. We cannot guarantee this, however.       Observations   Let's make some observations from our work so far.       The more equations we have, the fewer solution we have. The more unknowns we have, the more solutions we have. WARNING: this is just vague (but helpful) intuition! We already know of examples that are exceptions to this rule.    There are three possibilities to the number of solutions we have for a system of linear equations:   Infinitely many    Exactly one    None             Definition: Linear System and Solutions       A linear equation with unknowns can be written in the form where are real numbers called coefficients , and are also referred to as variables .  A linear system or system of linear equations is a set of linear equations written in a common set of variables.  A solution to a linear system is a set of numbers for each variable that satisfy all the equations in the system. A solution space is the set of all solutions to a linear system.     Activity: Linear Equations and Their Solutions     Which of the following equations are linear? Please provide a justification for your response.   .   .   .    Consider the system of linear equations:    Is a solution?   Is a solution?    Is a solution?   Can you find a solution in which ?   Do you think there are other solutions? Please explain your response.          There are two linear equations in this list.  This is not a linear equation due to the presence of in the third term on the left.  This is a linear equation.  This is a linear equation since it can be rewritten in the form .     We will see that the system of linear equations has infinitely many solutions.  Yes, this is a solution since all three equations are satisfied if we set , , and .  No, this is not a solution since the first equation is not satisfied if and .  This is also not a solution.  If , then we arrive at the system of three linear equations: We have a solution when and . Therefore, is a solution to the original system of equations.  Since we have found more than one solution to the system of equations, we should expect that there are infinitely many. Therefore, there should be many other solutions.         "
},
{
  "id": "sec-1-1-sols-2-1",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Linear Equations and Solutions.",
  "body": " Motivation: Linear Equations and Solutions       In essence, linear algebra is all about sets of linear equations. In practice, it helps us deal with lots of linear equations (think trillions of equations with trillions of variables). What types of solutions can we expect?   "
},
{
  "id": "sec-1-1-sols-2-2",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Activity: Linear Equation in Two Variables.",
  "body": " Activity: Linear Equation in Two Variables   In this activity, we consider sets of linear equations having just two unknowns. In this case, we can graph the solutions sets for the equations, which allows us to visualize different types of behavior.     On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.       The graph of the two lines is as shown on the right. There is a single point, the point , at which the lines intersect. Therefore, there is a single point that satisfies both equations.   Two lines intersecting at one point.        On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy both equations?    An empty coordinate system.       These two lines are parallel, which means there is no point at which the lines intersect. Therefore, there is no point that satisfies both equations.   Two parallel lines.        On the grid below, graph the line .  How many points satisfy this equation?    An empty coordinate system.       There are infinitely many points that lie on this line and that, therefore, satisfy this single equation.   A single line.        On the grid below, graph the lines   At what point or points , do the lines intersect? How many points satisfy all three equations?    An empty coordinate system.       These three lines do not have a common intersection point. Consequently, there is no point satisfying all three equations.   Three lines which do not intersect at a single point.      "
},
{
  "id": "sec-1-1-sols-3-1",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Observations.",
  "body": " Observations   Let's notice three important factors involved in the previous activity.       The number of equations (number of lines).    The number of variables, also called unknowns (coordinate system).    The number of intersection points (number of solutions: variable values that satisfy all equations).      "
},
{
  "id": "sec-1-1-sols-3-2",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-3-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Linear Equations: <span class=\"process-math\">\\(3\\)<\/span> Unknowns.",
  "body": " Linear Equations: Unknowns       If we increase the number of unknowns to , our visuals are now in three-dimensional space, and linear equations are planes.   Two planes intersecting at a line.    "
},
{
  "id": "sec-1-1-sols-4-1",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Linear Equations in Three Unknowns.",
  "body": " Activity: Linear Equations in Three Unknowns   This activity considers sets of equations having three unknowns. In this case, we know that the solutions of a single equation form a plane. If it helps with visualization, consider using -inch index cards to represent planes.   Is it possible that there are no solutions to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that there is exactly one solution to two linear equations in three unknowns? Either sketch an example or state a reason why it can't happen.    Is it possible that the solutions to four equations in three unknowns form a line? Either sketch an example or state a reason why it can't happen.    What would you usually expect for the set of solutions to four equations in three unknowns?    Suppose we have a set of 500 linear equations in 10 unknowns. What would you expect regarding the number of solutions?   Suppose we have a set of 10 linear equations in 500 unknowns. What would you expect regarding the number of solutions?       Yes, it is possible if the two planes are parallel to one another.    No, this is not possible. Two planes will either intersect in a line, if they are not parallel, or not intersect at all, if they are parallel.    Yes, it is possible that four planes intersect in a line. One may sketch four planes that intersect in, say, the -axis.    In general, we would expect there to be no solutions to four equations in three unknowns because there are more equations than unknowns.    Since there are more equations than unknowns, we would expect there to be no solutions. We cannot guarantee this, however.    Since there are fewer equations than unknowns, we would expect there to be infinitely many solutions. We cannot guarantee this, however.     "
},
{
  "id": "sec-1-1-sols-4-2",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-4-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Observations.",
  "body": " Observations   Let's make some observations from our work so far.       The more equations we have, the fewer solution we have. The more unknowns we have, the more solutions we have. WARNING: this is just vague (but helpful) intuition! We already know of examples that are exceptions to this rule.    There are three possibilities to the number of solutions we have for a system of linear equations:   Infinitely many    Exactly one    None         "
},
{
  "id": "sec-1-1-sols-5-1",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Definition: Linear System and Solutions.",
  "body": " Definition: Linear System and Solutions       A linear equation with unknowns can be written in the form where are real numbers called coefficients , and are also referred to as variables .  A linear system or system of linear equations is a set of linear equations written in a common set of variables.  A solution to a linear system is a set of numbers for each variable that satisfy all the equations in the system. A solution space is the set of all solutions to a linear system.   "
},
{
  "id": "sec-1-1-sols-5-2",
  "level": "2",
  "url": "sec-1-1-sols.html#sec-1-1-sols-5-2",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Activity: Linear Equations and Their Solutions.",
  "body": " Activity: Linear Equations and Their Solutions     Which of the following equations are linear? Please provide a justification for your response.   .   .   .    Consider the system of linear equations:    Is a solution?   Is a solution?    Is a solution?   Can you find a solution in which ?   Do you think there are other solutions? Please explain your response.          There are two linear equations in this list.  This is not a linear equation due to the presence of in the third term on the left.  This is a linear equation.  This is a linear equation since it can be rewritten in the form .     We will see that the system of linear equations has infinitely many solutions.  Yes, this is a solution since all three equations are satisfied if we set , , and .  No, this is not a solution since the first equation is not satisfied if and .  This is also not a solution.  If , then we arrive at the system of three linear equations: We have a solution when and . Therefore, is a solution to the original system of equations.  Since we have found more than one solution to the system of equations, we should expect that there are infinitely many. Therefore, there should be many other solutions.       "
},
{
  "id": "sec-1-2-1-sols",
  "level": "1",
  "url": "sec-1-2-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.2\\text{:}\\)<\/span> Gaussian Elimination",
  "body": " : Gaussian Elimination    Motivation: Gaussian Elimination       We've visualized linear systems and solutions for some intuition, but visuals quickly break down when we're dealing with lots of unknowns. We need to find some tools for dealing with a generic linear system (i.e., a system with many unknowns).     Preview: Finding Solution Spaces   In this activity, we will consider some simple examples that will guide us in finding a more general approach.     Give a description of the solution space to the linear system:     The equations tell us the value of both variables so there is only one solution .      Give a description of the solution space to the linear system:     We first use the third equation to determine that . We next substitute this value into the first two equations to obtain Now we can use the second equation to determine that , substitute that value into the first equation, and determine that . This tells us that the linear system has one solution .      Give a description of the solution space to the linear system:     Notice that we can rewrite the first equation as and substitute this into the second equation to obtain This tells us that and . The linear system therefore has one solution .      Describe the solution space to the linear equation .    No matter the value of , we have . Therefore, the solution space to the equation is all real numbers . In other words, this equation does not place a restriction on the value of .      Describe the solution space to the linear equation .    By contrast, the equation has no solutions since no value of , when multiplied by , can produce .      Big Idea: Finding Solution Spaces       Start with a linear system and manipulate it to a new system that is \"easy\", and has the same solution space as the original system.       Operations on Linear Systems   We can perform the following operations on a linear system to get a new system, without changing the solution space:       Scaling. Multiply any linear equation in your system by a non-zero constant.    Interchanging. Swap the order of any two equations in your system.    Replacement. Multiply any linear equation in your system by a non-zero constant then add to a second equation. The resulting linear equation replaces one of the two original equations.        Example: Using Gaussian Elimination   Find the solution space of the following system of equations:     This is Example 1.2.4 in the textbook.       Activity: Gaussian Elimination   For each of the following linear systems, use Gaussian elimination to describe the solutions to the following systems of linear equations. In particular, determine whether each linear system has exactly one solution, infinitely many solutions, or no solutions.                   Our aim is to apply a sequence of scaling, interchange, and replacement operations to first put the system into a triangular form. We begin by multiplying the first equation by and adding it to the second equation. Next, we add the first equation to the third. This leads us to: We will now apply a scaling operation to make the coefficient of equal in the second equation. Another replacement operation brings the system into a triangular form.   From here, we begin the process of back substitution seeking a decoupled system. Finally, we have the decoupled system which tells us that the solution space consists of the single solution .  Once again, we begin with a sequence of replacement and scaling operations that lead to the triangular system Back substitution gives us the system The third equation does not impose a restriction on the solutions since it is satisfied for any . The second equation tells us that must equal ; however, there are infinitely many solutions to the first equation that have . Therefore, this system has infinitely many solutions.  After applying two replacement and one scaling operation, we find Another replacement operation leads to the system Since the third equation has no solutions, the original system can have no solutions as well.      "
},
{
  "id": "sec-1-2-1-sols-2-1",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Gaussian Elimination.",
  "body": " Motivation: Gaussian Elimination       We've visualized linear systems and solutions for some intuition, but visuals quickly break down when we're dealing with lots of unknowns. We need to find some tools for dealing with a generic linear system (i.e., a system with many unknowns).   "
},
{
  "id": "sec-1-2-1-sols-2-2",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview: Finding Solution Spaces.",
  "body": " Preview: Finding Solution Spaces   In this activity, we will consider some simple examples that will guide us in finding a more general approach.     Give a description of the solution space to the linear system:     The equations tell us the value of both variables so there is only one solution .      Give a description of the solution space to the linear system:     We first use the third equation to determine that . We next substitute this value into the first two equations to obtain Now we can use the second equation to determine that , substitute that value into the first equation, and determine that . This tells us that the linear system has one solution .      Give a description of the solution space to the linear system:     Notice that we can rewrite the first equation as and substitute this into the second equation to obtain This tells us that and . The linear system therefore has one solution .      Describe the solution space to the linear equation .    No matter the value of , we have . Therefore, the solution space to the equation is all real numbers . In other words, this equation does not place a restriction on the value of .      Describe the solution space to the linear equation .    By contrast, the equation has no solutions since no value of , when multiplied by , can produce .    "
},
{
  "id": "sec-1-2-1-sols-2-3",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-2-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Big Idea: Finding Solution Spaces.",
  "body": " Big Idea: Finding Solution Spaces       Start with a linear system and manipulate it to a new system that is \"easy\", and has the same solution space as the original system.   "
},
{
  "id": "sec-1-2-1-sols-3-1",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Operations on Linear Systems.",
  "body": " Operations on Linear Systems   We can perform the following operations on a linear system to get a new system, without changing the solution space:       Scaling. Multiply any linear equation in your system by a non-zero constant.    Interchanging. Swap the order of any two equations in your system.    Replacement. Multiply any linear equation in your system by a non-zero constant then add to a second equation. The resulting linear equation replaces one of the two original equations.      "
},
{
  "id": "sec-1-2-1-sols-3-2",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-3-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Example: Using Gaussian Elimination.",
  "body": " Example: Using Gaussian Elimination   Find the solution space of the following system of equations:     This is Example 1.2.4 in the textbook.   "
},
{
  "id": "sec-1-2-1-sols-4-1",
  "level": "2",
  "url": "sec-1-2-1-sols.html#sec-1-2-1-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Activity: Gaussian Elimination.",
  "body": " Activity: Gaussian Elimination   For each of the following linear systems, use Gaussian elimination to describe the solutions to the following systems of linear equations. In particular, determine whether each linear system has exactly one solution, infinitely many solutions, or no solutions.                   Our aim is to apply a sequence of scaling, interchange, and replacement operations to first put the system into a triangular form. We begin by multiplying the first equation by and adding it to the second equation. Next, we add the first equation to the third. This leads us to: We will now apply a scaling operation to make the coefficient of equal in the second equation. Another replacement operation brings the system into a triangular form.   From here, we begin the process of back substitution seeking a decoupled system. Finally, we have the decoupled system which tells us that the solution space consists of the single solution .  Once again, we begin with a sequence of replacement and scaling operations that lead to the triangular system Back substitution gives us the system The third equation does not impose a restriction on the solutions since it is satisfied for any . The second equation tells us that must equal ; however, there are infinitely many solutions to the first equation that have . Therefore, this system has infinitely many solutions.  After applying two replacement and one scaling operation, we find Another replacement operation leads to the system Since the third equation has no solutions, the original system can have no solutions as well.    "
},
{
  "id": "sec-1-2-2-sols",
  "level": "1",
  "url": "sec-1-2-2-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.2\\text{:}\\)<\/span> Reduced Row Echelon Form (RREF)",
  "body": " : Reduced Row Echelon Form (RREF)    Motivation: RREF       We've found a method for solving linear systems that uses row operations to reduce to an \"easy\" system that has the same solution set. But it's tedious! How can we organize the information for efficient computation?     Augmented Matrices   Consider the system Perform the row operation .    The given row operation results in the system   Note that if we changed the variable names this doesn't fundamentally change our process. The coefficients drive the solution space, but it is important to keep track of their positions with respect to different variables. We can do this by using an augmented matrix .  As an example, consider the linear system The corresponding augmented matrix would be The sub-matrix to the left of the vertical line is called the coefficient matrix .  Row operations on equations extend naturally to row operations on matrices. This is more efficient, but we have to remember where the matrices come from in order to accurately interpret meaning.       Activity: Augmented Matrices and Solution Spaces      Write the augmented matrix for the linear system and perform Gaussian elimination to describe the solution space in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that the augmented matrix of a linear system has the following shape where could be any real number.    How many equations are there in this system and how many variables?   Based on our earlier discussion in Section 1.1, do you think it's most likely that this system has exactly one solution, infinitely many solutions, or no solutions?   Suppose that this augmented matrix is row equivalent to Make a choice for the names of the variables and write the corresponding linear system. Does the system have exactly one solution, infinitely many solutions, or no solutions?         The augmented matrix for this linear system is This corresponds to the system of equations showing that there is a single solution .  The corresponding system of equations is The third equation is satisfied for any values of and . Therefore, we see that the only solution to the system is .  Here, the corresponding system of equations is Since the third equation is not satisfied for any values of and , there are no solutions to the system.  The system corresponding to this augmented matrix has three equations and five variables. Our first guess is there are infinitely many solutions. If we write out the equations corresponding to the augmented matrix, we find since the third row of the augmented matrix does not restrict the solution space. From here, we see that there are infinitely many solutions: if we make any choice for the variables , , and , we can find values for and that give a solution.        Definition: RREF   How do we know a matrix is reduced to the \"easiest\" form?  We say that a matrix is in reduced row echelon form if the following properties are satisfied.   If the entries in a row are all zero, then the same is true of any row below it.    If we move across a row from left to right, the first nonzero entry we encounter is 1. We call this entry the leading entry in the row.    The leading entry in any row is to the right of the leading entries in all the rows above it.    A leading entry is the only nonzero entry in its column.   We call a matrix in reduced row echelon form a reduced row echelon matrix .  The following is an example of a matrix in RREF:     The position of a leading entry in a matrix in RREF is called a pivot position .     Activity: Identifying RREF   Consider each of the following augmented matrices. Determine if the matrix is in reduced row echelon form. If it is not, explain why.                            Because the leading entry in the first row is not a , this is not in reduced row echelon form. If we scale the first row by , however, we have a matrix in reduced row echelon form. We may write the corresponding linear system as which may be rewritten as Since may take on any value, this shows that there are infinitely many solutions.   This matrix is in reduced row echelon form. There is a single solution .   This matrix is technically not in RREF since the leading entry in the last row is not the only nonzero entry in its column. However, doing the operations to change this wont' impact the outcome: there are no solutions since the third equation is .   This is not in reduced row echelon form because the row of zeroes should be at the bottom of the matrix. We also need another interchange so that the leading entry in the second row is to the right of the leading entry in the first row. Once again, there are infinitely many solutions.   This is not in reduced row echelon form because the leading entry in the second and third rows are not the only nonzero elements in their columns. We can use replacement operations to remedy this and see that the system has the single solution .        Practice: Using RREF to Describe Solution Spaces   For each matrix in the previous activity, perform necessary row operations to obtain RREF if it is not already reduced. Then, use the matrix in RREF to describe the solution space of the original system.    Solutions are provided in the previous activity.     Fact: RREF       For any given matrix, there is exactly one RREF matrix that can be computed using row operations. This is useful because it means that if we want to find the solution space of a linear system, we should   Translate our system of equations to an augmented matrix.    Compute the RREF of the augmented matrix.    Interpret the solution space from the matrix in RREF.          Observations: Solution Spaces and Pivots       A linear system is inconsistent exactly when a pivot position appears in the rightmost column of the augmented matrix.  A solution is unique when every column of the coefficient matrix contains a pivot position. Columns containing pivot positions correspond to basic variables of the system.  There are infinitely many solutions when there is a column of the coefficient matrix without a pivot position. Columns not containing pivot positions correspond to free variables of the system.     "
},
{
  "id": "sec-1-2-2-sols-2-1",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: RREF.",
  "body": " Motivation: RREF       We've found a method for solving linear systems that uses row operations to reduce to an \"easy\" system that has the same solution set. But it's tedious! How can we organize the information for efficient computation?   "
},
{
  "id": "sec-1-2-2-sols-2-2",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Augmented Matrices.",
  "body": " Augmented Matrices   Consider the system Perform the row operation .    The given row operation results in the system   Note that if we changed the variable names this doesn't fundamentally change our process. The coefficients drive the solution space, but it is important to keep track of their positions with respect to different variables. We can do this by using an augmented matrix .  As an example, consider the linear system The corresponding augmented matrix would be The sub-matrix to the left of the vertical line is called the coefficient matrix .  Row operations on equations extend naturally to row operations on matrices. This is more efficient, but we have to remember where the matrices come from in order to accurately interpret meaning.   "
},
{
  "id": "sec-1-2-2-sols-3-1",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Activity: Augmented Matrices and Solution Spaces.",
  "body": " Activity: Augmented Matrices and Solution Spaces      Write the augmented matrix for the linear system and perform Gaussian elimination to describe the solution space in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that the augmented matrix of a linear system has the following shape where could be any real number.    How many equations are there in this system and how many variables?   Based on our earlier discussion in Section 1.1, do you think it's most likely that this system has exactly one solution, infinitely many solutions, or no solutions?   Suppose that this augmented matrix is row equivalent to Make a choice for the names of the variables and write the corresponding linear system. Does the system have exactly one solution, infinitely many solutions, or no solutions?         The augmented matrix for this linear system is This corresponds to the system of equations showing that there is a single solution .  The corresponding system of equations is The third equation is satisfied for any values of and . Therefore, we see that the only solution to the system is .  Here, the corresponding system of equations is Since the third equation is not satisfied for any values of and , there are no solutions to the system.  The system corresponding to this augmented matrix has three equations and five variables. Our first guess is there are infinitely many solutions. If we write out the equations corresponding to the augmented matrix, we find since the third row of the augmented matrix does not restrict the solution space. From here, we see that there are infinitely many solutions: if we make any choice for the variables , , and , we can find values for and that give a solution.    "
},
{
  "id": "sec-1-2-2-sols-4-1",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Definition: RREF.",
  "body": " Definition: RREF   How do we know a matrix is reduced to the \"easiest\" form?  We say that a matrix is in reduced row echelon form if the following properties are satisfied.   If the entries in a row are all zero, then the same is true of any row below it.    If we move across a row from left to right, the first nonzero entry we encounter is 1. We call this entry the leading entry in the row.    The leading entry in any row is to the right of the leading entries in all the rows above it.    A leading entry is the only nonzero entry in its column.   We call a matrix in reduced row echelon form a reduced row echelon matrix .  The following is an example of a matrix in RREF:     The position of a leading entry in a matrix in RREF is called a pivot position .   "
},
{
  "id": "sec-1-2-2-sols-4-2",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Identifying RREF.",
  "body": " Activity: Identifying RREF   Consider each of the following augmented matrices. Determine if the matrix is in reduced row echelon form. If it is not, explain why.                            Because the leading entry in the first row is not a , this is not in reduced row echelon form. If we scale the first row by , however, we have a matrix in reduced row echelon form. We may write the corresponding linear system as which may be rewritten as Since may take on any value, this shows that there are infinitely many solutions.   This matrix is in reduced row echelon form. There is a single solution .   This matrix is technically not in RREF since the leading entry in the last row is not the only nonzero entry in its column. However, doing the operations to change this wont' impact the outcome: there are no solutions since the third equation is .   This is not in reduced row echelon form because the row of zeroes should be at the bottom of the matrix. We also need another interchange so that the leading entry in the second row is to the right of the leading entry in the first row. Once again, there are infinitely many solutions.   This is not in reduced row echelon form because the leading entry in the second and third rows are not the only nonzero elements in their columns. We can use replacement operations to remedy this and see that the system has the single solution .    "
},
{
  "id": "sec-1-2-2-sols-5-1",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Practice: Using RREF to Describe Solution Spaces.",
  "body": " Practice: Using RREF to Describe Solution Spaces   For each matrix in the previous activity, perform necessary row operations to obtain RREF if it is not already reduced. Then, use the matrix in RREF to describe the solution space of the original system.    Solutions are provided in the previous activity.   "
},
{
  "id": "sec-1-2-2-sols-5-2",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-5-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Fact: RREF.",
  "body": " Fact: RREF       For any given matrix, there is exactly one RREF matrix that can be computed using row operations. This is useful because it means that if we want to find the solution space of a linear system, we should   Translate our system of equations to an augmented matrix.    Compute the RREF of the augmented matrix.    Interpret the solution space from the matrix in RREF.      "
},
{
  "id": "sec-1-2-2-sols-6-1",
  "level": "2",
  "url": "sec-1-2-2-sols.html#sec-1-2-2-sols-6-1",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Observations: Solution Spaces and Pivots.",
  "body": " Observations: Solution Spaces and Pivots       A linear system is inconsistent exactly when a pivot position appears in the rightmost column of the augmented matrix.  A solution is unique when every column of the coefficient matrix contains a pivot position. Columns containing pivot positions correspond to basic variables of the system.  There are infinitely many solutions when there is a column of the coefficient matrix without a pivot position. Columns not containing pivot positions correspond to free variables of the system.   "
},
{
  "id": "sec-1-3",
  "level": "1",
  "url": "sec-1-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.3\\text{:}\\)<\/span> Computation with Sage",
  "body": " : Computation with Sage    Motivation: Sage   Real applications of linear algebra are on very large systems, and require technology to compute with and manipulate. There are many possible tools one could use for this task. We'll work with Sage. The goals of this activity are to   Introduce ways to access Sage and references when you need help.    Learn the basic syntax to use Sage.    Use Sage to answer questions we've addressed by hand so far in Chapter 1.         Access Section 1.3 of our textbook. Follow instructions provided in class.     "
},
{
  "id": "sec-1-3-2-1",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Sage.",
  "body": " Motivation: Sage   Real applications of linear algebra are on very large systems, and require technology to compute with and manipulate. There are many possible tools one could use for this task. We'll work with Sage. The goals of this activity are to   Introduce ways to access Sage and references when you need help.    Learn the basic syntax to use Sage.    Use Sage to answer questions we've addressed by hand so far in Chapter 1.      "
},
{
  "id": "sec-1-3-2-2",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Access Section 1.3 of our textbook. Follow instructions provided in class.   "
},
{
  "id": "sec-2-1-1-sols",
  "level": "1",
  "url": "sec-2-1-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.1\\text{:}\\)<\/span> Vectors and Linear Combinations",
  "body": " : Vectors and Linear Combinations    Motivation: Vectors       We've seen that computations with matrices of the form can help us solve linear systems. In this chapter, we'll try to understand the geometric (visual) information held in these matrices to further our understanding of linear systems.     Preview Activity: Vectors   Suppose that      Find expressions for the vectors and sketch them using the coordinate system below.  Sketch the vectors on this grid.    An empty coordinate system.        Solutions to this preview activity are provided in Section 2.1 .      What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.         Sketch the vectors using the coordinate system below.  Sketch the vectors on this grid.    An empty coordinate system.          Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Give a geometric description of this set of vectors.  Sketch the vectors on this grid.    An empty coordinate system.            If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .      Can the vector be represented as a linear combination of and ? Asked differently, can we find scalars and such that .     Definition: Linear Combination   The linear combination of the vectors with scalars is the vector     The scalars are called the weights of the linear combination.       Activity: Connection Linear Combinations to Linear Systems   In this activity, we will look at linear combinations of a pair of vectors, and .  There is an interactive diagram in our textbook that accompanies this activity.   The interactive provided should be used to construct linear combinations whose weights and may be varied using the sliders at the top. The vectors and are outlined while the linear combination is shaded red.     The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.         Exercise: Linear Combinations and Linear Systems   Is a linear combination of and ?    This is example 2.1.11 in the textbook.     "
},
{
  "id": "sec-2-1-1-sols-2-1",
  "level": "2",
  "url": "sec-2-1-1-sols.html#sec-2-1-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Vectors.",
  "body": " Motivation: Vectors       We've seen that computations with matrices of the form can help us solve linear systems. In this chapter, we'll try to understand the geometric (visual) information held in these matrices to further our understanding of linear systems.   "
},
{
  "id": "sec-2-1-1-sols-2-2",
  "level": "2",
  "url": "sec-2-1-1-sols.html#sec-2-1-1-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview Activity: Vectors.",
  "body": " Preview Activity: Vectors   Suppose that      Find expressions for the vectors and sketch them using the coordinate system below.  Sketch the vectors on this grid.    An empty coordinate system.        Solutions to this preview activity are provided in Section 2.1 .      What geometric effect does scalar multiplication have on a vector? Also, describe the effect that multiplying by a negative scalar has.    "
},
{
  "id": "fig-activity-2-1-2",
  "level": "2",
  "url": "sec-2-1-1-sols.html#fig-activity-2-1-2",
  "type": "Figure",
  "number": "2",
  "title": "",
  "body": " Sketch the vectors on this grid.    An empty coordinate system.    "
},
{
  "id": "fig-activity-2-1-3",
  "level": "2",
  "url": "sec-2-1-1-sols.html#fig-activity-2-1-3",
  "type": "Figure",
  "number": "3",
  "title": "",
  "body": " Sketch the vectors on this grid.    An empty coordinate system.    "
},
{
  "id": "sec-2-1-1-sols-4-3",
  "level": "2",
  "url": "sec-2-1-1-sols.html#sec-2-1-1-sols-4-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Linear Combination.",
  "body": " Definition: Linear Combination   The linear combination of the vectors with scalars is the vector     The scalars are called the weights of the linear combination.   "
},
{
  "id": "sec-2-1-1-sols-5-1",
  "level": "2",
  "url": "sec-2-1-1-sols.html#sec-2-1-1-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Activity: Connection Linear Combinations to Linear Systems.",
  "body": " Activity: Connection Linear Combinations to Linear Systems   In this activity, we will look at linear combinations of a pair of vectors, and .  There is an interactive diagram in our textbook that accompanies this activity.   The interactive provided should be used to construct linear combinations whose weights and may be varied using the sliders at the top. The vectors and are outlined while the linear combination is shaded red.     The weight is initially set to 0. Explain what happens as you vary while keeping . How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   Describe the vectors that arise when the weight is set to 1 and is varied. How is this related to our investigations in the preview activity?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are the weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?       When we vary with , the linear combination moves along the line defined by .  When and , we find   When and is allowed to vary, the linear combinations lie on the line through parallel to .  If the weights and , then the linear combination is the vector .  If the weights and , then the linear combination is the vector .  We find the linear system for the weights: If we construct the corresponding augmented matrix and determine its reduced row echelon matrix, we find the weights and .  In the same way, we construct a linear system for the weights whose augmented matrix is which shows that there are weights that produce the desired linear combination. The same will happen for any vector that we ask to write as a linear combination of and .  Every two-dimensional vector can be written as a linear combination of and because the coefficient matrix of the linear system remains the same. Since that coefficient matrix has a pivot position in every row, the augmented matrix can never have a pivot position in the rightmost column.     "
},
{
  "id": "sec-2-1-1-sols-6-1",
  "level": "2",
  "url": "sec-2-1-1-sols.html#sec-2-1-1-sols-6-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Exercise: Linear Combinations and Linear Systems.",
  "body": " Exercise: Linear Combinations and Linear Systems   Is a linear combination of and ?    This is example 2.1.11 in the textbook.   "
},
{
  "id": "sec-2-1-2-sols",
  "level": "1",
  "url": "sec-2-1-2-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.1\\text{:}\\)<\/span> Linear Combinations and Linear Systems",
  "body": " : Linear Combinations and Linear Systems    Motivation: Linear Combinations and Linear Systems       Last time we saw    can be visualized as walking along a total of times, then walking along a total of times (in ).    In general, asking whether is a linear combination of other vectors is equivalent to asking whether a specific linear system has a solution.        Example: Notation   Last time we found that is a linear combination of and because     As shorthand, we will often write augmented matrices that come from linear combinations as      Fact: Linear Combinations and Linear Systems       See Proposition 2.1.12 .       Notes: Vectors and Matrices in Sage   See tips from the textbook for how vectors can be defined in Sage.  You can also use column vectors to define matrices in Sage using the following syntax:          Activity: Linear Combinations and Linear Systems   Sage cells are provided in the text to help with computations to answer the following questions.    Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use Sage cells to answer this question.  Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?   Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?   Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.         Visualizing No Solution   Consider the vectors and , as shown in .   Vectors and .        Review Example 2.1.13 .     "
},
{
  "id": "sec-2-1-2-sols-2-1",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Linear Combinations and Linear Systems.",
  "body": " Motivation: Linear Combinations and Linear Systems       Last time we saw    can be visualized as walking along a total of times, then walking along a total of times (in ).    In general, asking whether is a linear combination of other vectors is equivalent to asking whether a specific linear system has a solution.      "
},
{
  "id": "sec-2-1-2-sols-2-2",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Example: Notation.",
  "body": " Example: Notation   Last time we found that is a linear combination of and because     As shorthand, we will often write augmented matrices that come from linear combinations as    "
},
{
  "id": "sec-2-1-2-sols-2-3",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-2-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Fact: Linear Combinations and Linear Systems.",
  "body": " Fact: Linear Combinations and Linear Systems       See Proposition 2.1.12 .   "
},
{
  "id": "sec-2-1-2-sols-3-1",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Notes: Vectors and Matrices in Sage.",
  "body": " Notes: Vectors and Matrices in Sage   See tips from the textbook for how vectors can be defined in Sage.  You can also use column vectors to define matrices in Sage using the following syntax:      "
},
{
  "id": "sec-2-1-2-sols-4-1",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Linear Combinations and Linear Systems.",
  "body": " Activity: Linear Combinations and Linear Systems   Sage cells are provided in the text to help with computations to answer the following questions.    Given the vectors , can be expressed as a linear combination of , , and ? Rephrase this question by writing a linear system for the weights , , and and use Sage cells to answer this question.  Consider the following linear system. Identify vectors , , , and such that the question \"Is this linear system consistent?\" is equivalent to the question \"Can be expressed as a linear combination of , , and ?\"   Consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?   Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.   Now consider the vectors . Can be expressed as a linear combination of , , and ? If so, can be written as a linear combination of these vectors in more than one way?   Considering the vectors , , and from the previous part, can we write every three-dimensional vector as a linear combination of these vectors? Explain how the pivot positions of the matrix help answer this question.        We find the linear system with corresponding augmented matrix This shows that the linear system is inconsistent so there are no such weights , , and . This means that is not a linear combination of , , and .  We find vectors   This is the same as asking if the linear system corresponding to the following augmented matrix is consistent: From the reduced row echelon form, we see that the system is consistent, which means that can be expressed as a linear combination of , , and . Moreover, there are infinitely many ways in which we can do so.  No, it is not possible to write every three-dimensional as a linear combination of , , and because the matrix does not have a pivot position in every row. This means that, with some choice of vector , we will obtain an inconsistent system.  We find the augmented matrix This shows that can be expressed as a linear combination of , , and in exactly one way.  Every vector can be expressed as a linear combination of , , and in exactly one way because has a pivot position in every row and every column.     "
},
{
  "id": "sec-2-1-2-sols-5-1",
  "level": "2",
  "url": "sec-2-1-2-sols.html#sec-2-1-2-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Visualizing No Solution.",
  "body": " Visualizing No Solution   Consider the vectors and , as shown in .   Vectors and .        Review Example 2.1.13 .   "
},
{
  "id": "sec-2-2-1-sols",
  "level": "1",
  "url": "sec-2-2-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.2\\text{:}\\)<\/span> Matrix-Vector Multiplication",
  "body": " : Matrix-Vector Multiplication    Motivation: Matrix Multiplication       Matrix multiplication is often introduced as a \"recipe\" for combining matrices. Its definition is motivated by linear combinations, and is useful for expressing linear systems in compact ways.     Preview Activity 2.2.1    Compute the scalar multiple .           Find the sum .           Suppose that and are two matrices. What do we need to know about their shapes before we can form the sum ?    The shapes must be the same.      The matrix , which we call the identity matrix, is the matrix whose entries are zero except for the diagonal entries, all of which are 1. For instance, . If we can form the sum , what must be true about the matrix ?    The shape of must be .      Find the matrix where .             Definition: Matrix-Vector Multiplcation       Matrix-vector multiplication is a way to express a linear combination of vectors. See Definition 2.2.2 .     Example: Matrix-Vector Multiplication   Let and .    If we label the columns of as , then .       Activity: Matrix-vector Multiplication     Find the matrix product .   Suppose that is the matrix . If is defined, what is the dimension of the vector and what is the dimension of ?   A vector whose entries are all zero is denoted by . If is a matrix, what is the product ?   Suppose that is the identity matrix and . Find the product and explain why is called the identity matrix.   Suppose we write the matrix in terms of its columns as . If the vector , what is the product ?    Suppose that . Is there a vector such that ?       We have   The dimension of must be the same as the number of columns of so is three-dimensional. The dimension of equals the number of rows of so is four-dimensional.  We have .  We have ; that is, multiplying a vector by produces the same vector.  The product .  If , then we have with corresponding augmented matrix This means that is the unique solution to the equation .        Activity: Matrix-vector Multiplication in Sage   Sage can find the product of a matrix and vector using the * operator. For example,    Use Sage to evaluate the product from of the previous activity.    In Sage, define the matrix and vectors .   What do you find when you evaluate ?  What do you find when you evaluate and and compare your results?  What do you find when you evaluate and and compare your results?       We define A = matrix(3, 4, [1, 2, 0, -1, 2, 4, -3, -2, -1, -2, 6, 1]) v = vector([3, 1, -1, 1]) A*v   We define A = matrix(2, 3, [-2, 0, 3, 1, 4, 2]) zero = vector([0, 0]) v = vector([-2, 3]) w = vector([1, 2])    .   .           Properties: Matrix-vector Multiplication       See Proposition 2.2.3 .     "
},
{
  "id": "sec-2-2-1-sols-2-1",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Matrix Multiplication.",
  "body": " Motivation: Matrix Multiplication       Matrix multiplication is often introduced as a \"recipe\" for combining matrices. Its definition is motivated by linear combinations, and is useful for expressing linear systems in compact ways.   "
},
{
  "id": "sec-2-2-1-sols-2-2",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview Activity 2.2.1.",
  "body": " Preview Activity 2.2.1    Compute the scalar multiple .           Find the sum .           Suppose that and are two matrices. What do we need to know about their shapes before we can form the sum ?    The shapes must be the same.      The matrix , which we call the identity matrix, is the matrix whose entries are zero except for the diagonal entries, all of which are 1. For instance, . If we can form the sum , what must be true about the matrix ?    The shape of must be .      Find the matrix where .         "
},
{
  "id": "sec-2-2-1-sols-3-1",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Matrix-Vector Multiplcation.",
  "body": " Definition: Matrix-Vector Multiplcation       Matrix-vector multiplication is a way to express a linear combination of vectors. See Definition 2.2.2 .   "
},
{
  "id": "sec-2-2-1-sols-3-2",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-3-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Example: Matrix-Vector Multiplication.",
  "body": " Example: Matrix-Vector Multiplication   Let and .    If we label the columns of as , then .   "
},
{
  "id": "sec-2-2-1-sols-4-1",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Matrix-vector Multiplication.",
  "body": " Activity: Matrix-vector Multiplication     Find the matrix product .   Suppose that is the matrix . If is defined, what is the dimension of the vector and what is the dimension of ?   A vector whose entries are all zero is denoted by . If is a matrix, what is the product ?   Suppose that is the identity matrix and . Find the product and explain why is called the identity matrix.   Suppose we write the matrix in terms of its columns as . If the vector , what is the product ?    Suppose that . Is there a vector such that ?       We have   The dimension of must be the same as the number of columns of so is three-dimensional. The dimension of equals the number of rows of so is four-dimensional.  We have .  We have ; that is, multiplying a vector by produces the same vector.  The product .  If , then we have with corresponding augmented matrix This means that is the unique solution to the equation .    "
},
{
  "id": "sec-2-2-1-sols-5-1",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Activity: Matrix-vector Multiplication in Sage.",
  "body": " Activity: Matrix-vector Multiplication in Sage   Sage can find the product of a matrix and vector using the * operator. For example,    Use Sage to evaluate the product from of the previous activity.    In Sage, define the matrix and vectors .   What do you find when you evaluate ?  What do you find when you evaluate and and compare your results?  What do you find when you evaluate and and compare your results?       We define A = matrix(3, 4, [1, 2, 0, -1, 2, 4, -3, -2, -1, -2, 6, 1]) v = vector([3, 1, -1, 1]) A*v   We define A = matrix(2, 3, [-2, 0, 3, 1, 4, 2]) zero = vector([0, 0]) v = vector([-2, 3]) w = vector([1, 2])    .   .       "
},
{
  "id": "sec-2-2-1-sols-6-1",
  "level": "2",
  "url": "sec-2-2-1-sols.html#sec-2-2-1-sols-6-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Properties: Matrix-vector Multiplication.",
  "body": " Properties: Matrix-vector Multiplication       See Proposition 2.2.3 .   "
},
{
  "id": "sec-2-2-2-sols",
  "level": "1",
  "url": "sec-2-2-2-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.2\\text{:}\\)<\/span> Matrix Multiplication and Linear Systems",
  "body": " : Matrix Multiplication and Linear Systems    Motivation: Matrix Multiplication and Linear Systems       Last time we made sense of in terms of linear combinations of column vectors with specific weights to get a new vector. Recall also that the \"membership\" question is important. We'll rephrase and answer this question in this new context.     Membership: Three Perspectives       The following questions are all equivalent:   For an matrix and vector , does there exist a vector such that ?    Are there weights such that ?    Does the system represented by have a solution?     This is also summarized in Proposition 2.2.4 .       Example: Three Perspectives   Find all such that .    This example is summarized in Example 2.2.5 .       Activity: The equation     Consider the linear system Identify the matrix and vector to express this system in the form .   If and are as below, write the linear system corresponding to the equation and describe its solution space, using a parametric description if appropriate:    Describe the solution space of the equation .   Suppose is an matrix. What can you guarantee about the solution space of the equation ?       and .  Form the augmented matrix so that   We have the augmented matrix Since this system is inconsistent, there are no solutions to the matrix equation.  We know that there is at least one solution, namely, .        Definition: Matrix-Matrix Multiplication   Let .    See Definition 2.2.6 .     Example: Matrix-Matrix Multiplication   Let             Activity: Properites of Matrix Multiplication   Consider the matrices .   Before computing, first explain why the shapes of and enable us to form the product . Then describe the shape of .   Compute the product .  Sage can multiply matrices using the * operator. Define the matrices and in the Sage cell below and check your work by computing .   Are we able to form the matrix product ? If so, use the Sage cell above to find . Is it generally true that ?  Suppose we form the three matrices. . Compare what happens when you compute and . State your finding as a general principle.   Compare the results of evaluating and and state your finding as a general principle.  When we are dealing with real numbers, we know if and , then . Define matrices and compute and . If , is it necessarily true that ?  Again, with real numbers, we know that if , then either or . Define and compute . If , is it necessarily true that either or ?       The product exists because the number of columns of equals the number of rows of . The dimensions of are .  We have .  Define A = matrix(2, 3, [1, 3, 2, -3, 4, -1]) B = matrix(3, 2, [3, 0, 1, 2, -2, -1]) A*B   Yes, we can form the product because the number of columns of equals the number of rows of . This product will be , however, so it must be true that .  We find that .  We find that .  It is not generally true that if , as illustrated by this example.  It is not generally true that or if , as illustrated by this example.        Properties: Matrix Multiplication       See some important properties of matrices and some important non-properties of matrices .     "
},
{
  "id": "sec-2-2-2-sols-2-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Matrix Multiplication and Linear Systems.",
  "body": " Motivation: Matrix Multiplication and Linear Systems       Last time we made sense of in terms of linear combinations of column vectors with specific weights to get a new vector. Recall also that the \"membership\" question is important. We'll rephrase and answer this question in this new context.   "
},
{
  "id": "sec-2-2-2-sols-2-2",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Membership: Three Perspectives.",
  "body": " Membership: Three Perspectives       The following questions are all equivalent:   For an matrix and vector , does there exist a vector such that ?    Are there weights such that ?    Does the system represented by have a solution?     This is also summarized in Proposition 2.2.4 .   "
},
{
  "id": "sec-2-2-2-sols-3-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Example: Three Perspectives.",
  "body": " Example: Three Perspectives   Find all such that .    This example is summarized in Example 2.2.5 .   "
},
{
  "id": "sec-2-2-2-sols-4-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Activity: The equation <span class=\"process-math\">\\(A\\xvec = \\bvec\\)<\/span>.",
  "body": " Activity: The equation     Consider the linear system Identify the matrix and vector to express this system in the form .   If and are as below, write the linear system corresponding to the equation and describe its solution space, using a parametric description if appropriate:    Describe the solution space of the equation .   Suppose is an matrix. What can you guarantee about the solution space of the equation ?       and .  Form the augmented matrix so that   We have the augmented matrix Since this system is inconsistent, there are no solutions to the matrix equation.  We know that there is at least one solution, namely, .    "
},
{
  "id": "sec-2-2-2-sols-5-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Definition: Matrix-Matrix Multiplication.",
  "body": " Definition: Matrix-Matrix Multiplication   Let .    See Definition 2.2.6 .   "
},
{
  "id": "sec-2-2-2-sols-5-2",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-5-2",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Example: Matrix-Matrix Multiplication.",
  "body": " Example: Matrix-Matrix Multiplication   Let         "
},
{
  "id": "sec-2-2-2-sols-6-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-6-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Activity: Properites of Matrix Multiplication.",
  "body": " Activity: Properites of Matrix Multiplication   Consider the matrices .   Before computing, first explain why the shapes of and enable us to form the product . Then describe the shape of .   Compute the product .  Sage can multiply matrices using the * operator. Define the matrices and in the Sage cell below and check your work by computing .   Are we able to form the matrix product ? If so, use the Sage cell above to find . Is it generally true that ?  Suppose we form the three matrices. . Compare what happens when you compute and . State your finding as a general principle.   Compare the results of evaluating and and state your finding as a general principle.  When we are dealing with real numbers, we know if and , then . Define matrices and compute and . If , is it necessarily true that ?  Again, with real numbers, we know that if , then either or . Define and compute . If , is it necessarily true that either or ?       The product exists because the number of columns of equals the number of rows of . The dimensions of are .  We have .  Define A = matrix(2, 3, [1, 3, 2, -3, 4, -1]) B = matrix(3, 2, [3, 0, 1, 2, -2, -1]) A*B   Yes, we can form the product because the number of columns of equals the number of rows of . This product will be , however, so it must be true that .  We find that .  We find that .  It is not generally true that if , as illustrated by this example.  It is not generally true that or if , as illustrated by this example.    "
},
{
  "id": "sec-2-2-2-sols-7-1",
  "level": "2",
  "url": "sec-2-2-2-sols.html#sec-2-2-2-sols-7-1",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Properties: Matrix Multiplication.",
  "body": " Properties: Matrix Multiplication       See some important properties of matrices and some important non-properties of matrices .   "
},
{
  "id": "sec-2-3-1-sols",
  "level": "1",
  "url": "sec-2-3-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.3\\text{:}\\)<\/span> The Span of Vectors",
  "body": " : The Span of Vectors    Motivation: Span       We'll continue to deepen our understanding of the \"membership\" question in the context of matrix equations: \"Is there a solution to \" is equivalent to \"Is a linear combination of columns of \"?       Preview 2.3.1    If the equation is inconsistent, what can we say about the pivot positions of the augmented matrix ?    We know there must be a pivot position in the rightmost column of the augmented matrix.      Consider the matrix  . If , is the equation consistent? If so, find a solution.     We construct the augmented matrix which shows that the system is consistent. The solution space is described parametrically as .      If , is the equation consistent? If so, find a solution.     Now the augmented matrix is showing that the equation is inconsistent.      Identify the pivot positions of .    There are two pivot positions in , as shown.       For our two choices of the vector , one equation has a solution and the other does not. What feature of the pivot positions of the matrix tells us to expect this?    Since there is a row of that does not have a pivot position, it is possible to augment by a vector so that we obtain a pivot position in the rightmost column of the augmented matrix. In this case, we have an inconsistent system.        Definition: Span   The span of a set of vectors is    See Definition 2.3.1 .     Example: Span   Let and .    See Example 2.3.2 .       Activity: Span   Let's look at two examples to develop some intuition for the concept of span.  First, we will consider the set of vectors .  There is an interactive diagram in our textbook that accompanies this activity.    What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?      We will now look at an example where .  There is an interactive diagram in our textbook that accompanies this activity.    What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?         For the first set of vectors, we find:  We can form the linear combinations:  When and , the linear combination is .   When and , the linear combination is .   When and , the linear combination is .    Yes, we saw that there are at least two ways. For instance, when the weights are and . This means that is in the span of and .  No. No matter how we change the weights, the linear combination lies on the line through and . This means that is not in the span of and .  The span of and is the set of all vectors on the line through .  If the equation has a solution, must lie on the line defined by .    For the second set of vectors, we have:  We can form the linear combinations:   When and , the linear combination is .   When and , the linear combination is .   When and , the linear combination is .    Yes. Using the diagram, we see that . This means that is in the span of and .  Yes. Using the diagram, we see that . This means that is in the span of and .  Every two-dimensional vector is in the span of and .  The equation has a solution for every .       "
},
{
  "id": "sec-2-3-1-sols-2-1",
  "level": "2",
  "url": "sec-2-3-1-sols.html#sec-2-3-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Span.",
  "body": " Motivation: Span       We'll continue to deepen our understanding of the \"membership\" question in the context of matrix equations: \"Is there a solution to \" is equivalent to \"Is a linear combination of columns of \"?   "
},
{
  "id": "sec-2-3-1-sols-3-1",
  "level": "2",
  "url": "sec-2-3-1-sols.html#sec-2-3-1-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview 2.3.1.",
  "body": " Preview 2.3.1    If the equation is inconsistent, what can we say about the pivot positions of the augmented matrix ?    We know there must be a pivot position in the rightmost column of the augmented matrix.      Consider the matrix  . If , is the equation consistent? If so, find a solution.     We construct the augmented matrix which shows that the system is consistent. The solution space is described parametrically as .      If , is the equation consistent? If so, find a solution.     Now the augmented matrix is showing that the equation is inconsistent.      Identify the pivot positions of .    There are two pivot positions in , as shown.       For our two choices of the vector , one equation has a solution and the other does not. What feature of the pivot positions of the matrix tells us to expect this?    Since there is a row of that does not have a pivot position, it is possible to augment by a vector so that we obtain a pivot position in the rightmost column of the augmented matrix. In this case, we have an inconsistent system.    "
},
{
  "id": "sec-2-3-1-sols-4-1",
  "level": "2",
  "url": "sec-2-3-1-sols.html#sec-2-3-1-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Span.",
  "body": " Definition: Span   The span of a set of vectors is    See Definition 2.3.1 .   "
},
{
  "id": "sec-2-3-1-sols-4-2",
  "level": "2",
  "url": "sec-2-3-1-sols.html#sec-2-3-1-sols-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Example: Span.",
  "body": " Example: Span   Let and .    See Example 2.3.2 .   "
},
{
  "id": "sec-2-3-1-sols-5-1",
  "level": "2",
  "url": "sec-2-3-1-sols.html#sec-2-3-1-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Span.",
  "body": " Activity: Span   Let's look at two examples to develop some intuition for the concept of span.  First, we will consider the set of vectors .  There is an interactive diagram in our textbook that accompanies this activity.    What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?      We will now look at an example where .  There is an interactive diagram in our textbook that accompanies this activity.    What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?         For the first set of vectors, we find:  We can form the linear combinations:  When and , the linear combination is .   When and , the linear combination is .   When and , the linear combination is .    Yes, we saw that there are at least two ways. For instance, when the weights are and . This means that is in the span of and .  No. No matter how we change the weights, the linear combination lies on the line through and . This means that is not in the span of and .  The span of and is the set of all vectors on the line through .  If the equation has a solution, must lie on the line defined by .    For the second set of vectors, we have:  We can form the linear combinations:   When and , the linear combination is .   When and , the linear combination is .   When and , the linear combination is .    Yes. Using the diagram, we see that . This means that is in the span of and .  Yes. Using the diagram, we see that . This means that is in the span of and .  Every two-dimensional vector is in the span of and .  The equation has a solution for every .     "
},
{
  "id": "sec-2-3-2-sols",
  "level": "1",
  "url": "sec-2-3-2-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.3\\text{:}\\)<\/span> Span and Pivots",
  "body": " : Span and Pivots    Motivation: Span and Pivots       Last time we introduced the notion of \"span\" to rephrase the membership question as \"Is in the span of column vectors of ?\". Now we'll make a connection between the span of vectors and pivot positions of a RREF matrix.     Review: Span    vs.     Vectors v and w in the coordinate plane.    Vectors v and w in the coordinate plane.      See Example 2.3.5 and Example 2.3.7 .       Activity: Pivots and Span in   In this activity, we will look at the span of sets of vectors in .   Suppose . Give a geometric description of and a rough sketch of and its span in .   A three-dimensional coordinate system for sketching and its span.    Three dimensional coordinate plane.       Now consider the two vectors . Sketch the vectors below. Then give a geometric description of and a rough sketch of the span in .   A coordinate system for sketching , , and .              Activity (continued)     Let's now look at this situation algebraically by writing write . Determine the conditions on , , and so that is in by considering the linear system or . Explain how this relates to your sketch of .   Consider the vectors    Is the vector in ?    Is the vector in ?   Give a geometric description of .           Activity (continued)     Consider the vectors . Form the matrix and find its reduced row echelon form. What does this tell you about ?   If the span of a set of vectors is , what can you say about the pivot positions of the matrix ?  What is the smallest number of vectors such that ?       is the line defined by .   is the -plane.   For the linear system to be consistent, we need , which means that the third coordinate of the vector must be 0 for to be in . In other words, must lie in the -plane.   We consider the two cases.  We have the augmented matrix which shows that the system is inconsistent. Therefore, is not in .  We have the augmented matrix which shows that the system is consistent. Therefore, is in .  The span is the plane in defined by and .   We have the reduced row echelon form Since there is a pivot position in every row, this says that every equation is consistent. The is therefore .  There must be a pivot position in every row.  If a set of vectors spans , its corresponding matrix must have a pivot position in every row. Because there can be at most one pivot position in a column, there must be at least three columns. Therefore, the smallest number of vectors that span is three.        Summary ( )          The span of a single vector, , is a line. If we look at the RREF of a matrix containing this single column vector, it will contain one row with a pivot.    The span of two vectors which do not lie on the same line, , is a plane. If we look at the RREF of a matrix containing these two column vectors, it will contain two rows with a pivot.    The span of three vectors which do not lie in the same plane, , is . If we look at the RREF of a matrix containing these three column vectors, it will contain three rows with a pivot.        Facts: Span and Pivots   Let . Then     exactly when the RREF of has a pivot in every row.  Since a matrix can have a most one pivot position in every column, this also implies that a set of vectors spanning must contain at least vectors.     "
},
{
  "id": "sec-2-3-2-sols-2-1",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Span and Pivots.",
  "body": " Motivation: Span and Pivots       Last time we introduced the notion of \"span\" to rephrase the membership question as \"Is in the span of column vectors of ?\". Now we'll make a connection between the span of vectors and pivot positions of a RREF matrix.   "
},
{
  "id": "sec-2-3-2-sols-2-2",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Review: Span.",
  "body": " Review: Span    vs.     Vectors v and w in the coordinate plane.    Vectors v and w in the coordinate plane.      See Example 2.3.5 and Example 2.3.7 .   "
},
{
  "id": "sec-2-3-2-sols-3-1",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Activity: Pivots and Span in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Activity: Pivots and Span in   In this activity, we will look at the span of sets of vectors in .   Suppose . Give a geometric description of and a rough sketch of and its span in .   A three-dimensional coordinate system for sketching and its span.    Three dimensional coordinate plane.       Now consider the two vectors . Sketch the vectors below. Then give a geometric description of and a rough sketch of the span in .   A coordinate system for sketching , , and .          "
},
{
  "id": "sec-2-3-2-sols-4-1",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Activity (continued).",
  "body": " Activity (continued)     Let's now look at this situation algebraically by writing write . Determine the conditions on , , and so that is in by considering the linear system or . Explain how this relates to your sketch of .   Consider the vectors    Is the vector in ?    Is the vector in ?   Give a geometric description of .       "
},
{
  "id": "sec-2-3-2-sols-5-1",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity (continued).",
  "body": " Activity (continued)     Consider the vectors . Form the matrix and find its reduced row echelon form. What does this tell you about ?   If the span of a set of vectors is , what can you say about the pivot positions of the matrix ?  What is the smallest number of vectors such that ?       is the line defined by .   is the -plane.   For the linear system to be consistent, we need , which means that the third coordinate of the vector must be 0 for to be in . In other words, must lie in the -plane.   We consider the two cases.  We have the augmented matrix which shows that the system is inconsistent. Therefore, is not in .  We have the augmented matrix which shows that the system is consistent. Therefore, is in .  The span is the plane in defined by and .   We have the reduced row echelon form Since there is a pivot position in every row, this says that every equation is consistent. The is therefore .  There must be a pivot position in every row.  If a set of vectors spans , its corresponding matrix must have a pivot position in every row. Because there can be at most one pivot position in a column, there must be at least three columns. Therefore, the smallest number of vectors that span is three.    "
},
{
  "id": "sec-2-3-2-sols-6-1",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-6-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Summary (<span class=\"process-math\">\\(\\R^3\\)<\/span>).",
  "body": " Summary ( )          The span of a single vector, , is a line. If we look at the RREF of a matrix containing this single column vector, it will contain one row with a pivot.    The span of two vectors which do not lie on the same line, , is a plane. If we look at the RREF of a matrix containing these two column vectors, it will contain two rows with a pivot.    The span of three vectors which do not lie in the same plane, , is . If we look at the RREF of a matrix containing these three column vectors, it will contain three rows with a pivot.      "
},
{
  "id": "sec-2-3-2-sols-6-2",
  "level": "2",
  "url": "sec-2-3-2-sols.html#sec-2-3-2-sols-6-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Facts: Span and Pivots.",
  "body": " Facts: Span and Pivots   Let . Then     exactly when the RREF of has a pivot in every row.  Since a matrix can have a most one pivot position in every column, this also implies that a set of vectors spanning must contain at least vectors.   "
},
{
  "id": "sec-2-4-1-sols",
  "level": "1",
  "url": "sec-2-4-1-sols.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.4\\text{:}\\)<\/span> Linear Independence",
  "body": " : Linear Independence    Motivation: Linear Independence       Span has given us a way to discuss whether solutions exist to a linear system. We'll now explore ideas that will help us determine if our system is efficient.       Preview Activity 2.4.1   Let's begin by looking at some sets of vectors in . As we saw in the previous section, the span of a set of vectors in will be either a line, a plane, or itself.     Consider the following vectors in : . Describe the span of these vectors, , as a line, a plane, or .     We will construct the matrix whose columns are , , and : Because there is a pivot in every row, we know that .      Now consider the set of vectors: . Describe the span of these vectors, , as a line, a plane, or .     Similarly, As there are two pivot positions, we see that is a plane in .      Show that the vector is a linear combination of and by finding weights such that .    We see that which tells us that .      Explain why any linear combination of , , and , can be written as a linear combination of and .    We have       Explain why .    Any linear combination of , , and is itself a linear combination of and .        Span of three vectors   Let's make more precise the difference between three vectors whose span is a plan and three vectors whose span is .  Let's compare and .    See Example 2.4.1 and Example 2.4.2 .       Span Geometrically       When three vectors span all of R 3. Two vectors form a plane, and the third vector is not in that plane.     When three vectors span a plane in R 3. Two vectors form a plane, and the third vector is in that plane.         Definition: Linear Independence   A set of vectors is called linearly dependent if    one of the vectors is a linear combination of the others. Otherwise, the set of vectors is called linearly independent .     "
},
{
  "id": "sec-2-4-1-sols-2-1",
  "level": "2",
  "url": "sec-2-4-1-sols.html#sec-2-4-1-sols-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Linear Independence.",
  "body": " Motivation: Linear Independence       Span has given us a way to discuss whether solutions exist to a linear system. We'll now explore ideas that will help us determine if our system is efficient.   "
},
{
  "id": "sec-2-4-1-sols-3-1",
  "level": "2",
  "url": "sec-2-4-1-sols.html#sec-2-4-1-sols-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview Activity 2.4.1.",
  "body": " Preview Activity 2.4.1   Let's begin by looking at some sets of vectors in . As we saw in the previous section, the span of a set of vectors in will be either a line, a plane, or itself.     Consider the following vectors in : . Describe the span of these vectors, , as a line, a plane, or .     We will construct the matrix whose columns are , , and : Because there is a pivot in every row, we know that .      Now consider the set of vectors: . Describe the span of these vectors, , as a line, a plane, or .     Similarly, As there are two pivot positions, we see that is a plane in .      Show that the vector is a linear combination of and by finding weights such that .    We see that which tells us that .      Explain why any linear combination of , , and , can be written as a linear combination of and .    We have       Explain why .    Any linear combination of , , and is itself a linear combination of and .    "
},
{
  "id": "sec-2-4-1-sols-4-1",
  "level": "2",
  "url": "sec-2-4-1-sols.html#sec-2-4-1-sols-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Span of three vectors.",
  "body": " Span of three vectors   Let's make more precise the difference between three vectors whose span is a plan and three vectors whose span is .  Let's compare and .    See Example 2.4.1 and Example 2.4.2 .   "
},
{
  "id": "sec-2-4-1-sols-5-1",
  "level": "2",
  "url": "sec-2-4-1-sols.html#sec-2-4-1-sols-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Span Geometrically.",
  "body": " Span Geometrically       When three vectors span all of R 3. Two vectors form a plane, and the third vector is not in that plane.     When three vectors span a plane in R 3. Two vectors form a plane, and the third vector is in that plane.       "
},
{
  "id": "sec-2-4-1-sols-5-2",
  "level": "2",
  "url": "sec-2-4-1-sols.html#sec-2-4-1-sols-5-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Definition: Linear Independence.",
  "body": " Definition: Linear Independence   A set of vectors is called linearly dependent if    one of the vectors is a linear combination of the others. Otherwise, the set of vectors is called linearly independent .   "
},
{
  "id": "sec-2-4-2",
  "level": "1",
  "url": "sec-2-4-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.4\\text{:}\\)<\/span> Linear Independence (Part 2)",
  "body": " : Linear Independence (Part 2)    Motivation: Linear Independence          Activity: Determining Linear Independence   We would like to develop a means to detect when a set of vectors is linearly dependent. This activity will point the way.  Suppose we have five vectors in that form the columns of a matrix having reduced row echelon form . Is it possible to write one of the vectors as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors. Is this set of vectors linearly dependent or independent?  Suppose we have another set of three vectors in that form the columns of a matrix having reduced row echelon form . Is it possible to write one of these vectors , , as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors. Is this set of vectors linearly dependent or independent?  By looking at the pivot positions, how can you determine whether the columns of a matrix are linearly dependent or independent?  If one vector in a set is the zero vector , can the set of vectors be linearly independent?  Suppose a set of vectors in has twelve vectors. Is it possible for this set to be linearly independent?        Facts: Linear Independence        Homogeneous Equations          Activity: Homogeneous Equations and Linear Independence    Explain why the homogeneous equation is consistent no matter the matrix .  Consider the matrix whose columns we denote by , , and . Describe the solution space of the homogeneous equation using a parametric description, if appropriate.   Find a nonzero solution to the homogeneous equation and use it to find weights , , and such that .  Use the equation you found in the previous part to write one of the vectors as a linear combination of the others.  Are the vectors , , and linearly dependent or independent?        Fact: Homogeneous Equations and Linear Indpendence   The column vectors of a matrix are linearly dependent exactly when     Summary: Linear Independence   For , the following are equivalent:     "
},
{
  "id": "sec-2-4-2-2-1",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Linear Independence.",
  "body": " Motivation: Linear Independence      "
},
{
  "id": "sec-2-4-2-3-1",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Activity: Determining Linear Independence.",
  "body": " Activity: Determining Linear Independence   We would like to develop a means to detect when a set of vectors is linearly dependent. This activity will point the way.  Suppose we have five vectors in that form the columns of a matrix having reduced row echelon form . Is it possible to write one of the vectors as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors. Is this set of vectors linearly dependent or independent?  Suppose we have another set of three vectors in that form the columns of a matrix having reduced row echelon form . Is it possible to write one of these vectors , , as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors. Is this set of vectors linearly dependent or independent?  By looking at the pivot positions, how can you determine whether the columns of a matrix are linearly dependent or independent?  If one vector in a set is the zero vector , can the set of vectors be linearly independent?  Suppose a set of vectors in has twelve vectors. Is it possible for this set to be linearly independent?    "
},
{
  "id": "sec-2-4-2-4-1",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Facts: Linear Independence.",
  "body": " Facts: Linear Independence      "
},
{
  "id": "sec-2-4-2-4-2",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Homogeneous Equations.",
  "body": " Homogeneous Equations      "
},
{
  "id": "sec-2-4-2-5-1",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-5-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Homogeneous Equations and Linear Independence.",
  "body": " Activity: Homogeneous Equations and Linear Independence    Explain why the homogeneous equation is consistent no matter the matrix .  Consider the matrix whose columns we denote by , , and . Describe the solution space of the homogeneous equation using a parametric description, if appropriate.   Find a nonzero solution to the homogeneous equation and use it to find weights , , and such that .  Use the equation you found in the previous part to write one of the vectors as a linear combination of the others.  Are the vectors , , and linearly dependent or independent?    "
},
{
  "id": "sec-2-4-2-6-1",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-6-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Fact: Homogeneous Equations and Linear Indpendence.",
  "body": " Fact: Homogeneous Equations and Linear Indpendence   The column vectors of a matrix are linearly dependent exactly when   "
},
{
  "id": "sec-2-4-2-6-2",
  "level": "2",
  "url": "sec-2-4-2.html#sec-2-4-2-6-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Summary: Linear Independence.",
  "body": " Summary: Linear Independence   For , the following are equivalent:   "
},
{
  "id": "sec-2-5-1",
  "level": "1",
  "url": "sec-2-5-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.5\\text{:}\\)<\/span> Matrix Transformations",
  "body": " : Matrix Transformations    Motivation: Matrix Transformations          Preview Activity 2.5.1   We will begin by considering a more familiar situation; namely, the function , which takes a real number as an input and produces its square as its output.     What is the value of ?      Can we solve the equation ? If so, is the solution unique?      Can we solve the equation ? If so, is the solution unique?      Sketch a graph of the function in      Graph the function above.        We will now consider functions having the form . Draw a graph of the function on the left in .      Graphs of the function and .        Draw a graph of the function on the right of .      Remember that composing two functions means we use the output from one function as the input into the other; that is, . What function results from composing ?        Definition: Matrix Transformation   The matrix transformation of a matrix is     Example 1: Matrix Transformations   Consider the matrix      Example 2: Matrix Transformations   Consider the function that has the form        Activity: Matrix Transformations   In this activity, we will look at some examples of matrix transformations.  To begin, suppose that is the matrix with associated matrix transformation .  What is ?  What is ?  What is ?  Is there a vector such that ?  Write as a two-dimensional vector.      Suppose that where .  What is the dimension of the vectors that are inputs for ?  What is the dimension of the vectors that are outputs?  If we describe this transformation as , what are the values of and and how do they relate to the shape of ?  Describe the vectors for which .   If is the matrix , what is in terms of the vectors and ? What about ?  Suppose that is a matrix and that . If , what is the matrix ?        Fact: Identifying Matrix Transformations   If is a matrix transformation given by , then       Activity 2: Matrix Transformations   Let's look at some examples and apply these observations.   To begin, suppose that is the matrix transformation that takes a two-dimensional vector as an input and outputs , the two-dimensional vector obtained by rotating counterclockwise by , as shown in .   The matrix transformation takes two-dimensional vectors on the left and rotates them by counterclockwise into the vectors on the right.       We will see in the next section that many geometric operations like this one can be performed by matrix transformations.   If we write , what are the values of and , and what is the shape of the associated matrix ?    Determine the matrix by considering the vectors .    If as shown on the left in , use your matrix to determine and verify that it agrees with that shown on the right of .    If , determine the vector obtained by rotating counterclockwise by .             Activity (continued)      Suppose that we work for a company that makes baked goods, including cakes, doughnuts, and eclairs. The company operates two bakeries, Bakery 1 and Bakery 2. In one hour of operation,  Bakery 1 produces 10 cakes, 50 doughnuts, and 30 eclairs.  Bakery 2 produces 20 cakes, 30 doughnuts, and 30 eclairs.  If Bakery 1 operates for hours and Bakery 2 for hours, we will use the vector to describe the operation of the two bakeries.  We would like to describe a matrix transformation where describes the number of hours the bakeries operate and describes the total number of cakes, doughnuts, and eclairs produced. That is, where is the number of cakes, is the number of doughnuts, and is the number of eclairs produced.   If , what are the values of and , and what is the shape of the associated matrix ?    We can determine the matrix by considering vectors . For instance, will describe the number of cakes, doughnuts, and eclairs produced when Bakery 1 operates for one hour and Bakery 2 sits idle. What is this vector?    In the same way, determine . What is the matrix ?    If Bakery 1 operates for 120 hours and Bakery 2 for 180 hours, what is the total number of cakes, doughnuts, and eclairs produced?     Suppose that in one period of time, the company produces 5060 cakes, 14310 doughnuts, and 10470 eclairs. How long did each bakery operate?    Suppose that the company receives an order for a certain number of cakes, doughnuts, and eclairs. Can you guarantee that you can fill the order without having leftovers?           "
},
{
  "id": "sec-2-5-1-2-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Matrix Transformations.",
  "body": " Motivation: Matrix Transformations      "
},
{
  "id": "sec-2-5-1-3-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Preview Activity 2.5.1.",
  "body": " Preview Activity 2.5.1   We will begin by considering a more familiar situation; namely, the function , which takes a real number as an input and produces its square as its output.     What is the value of ?      Can we solve the equation ? If so, is the solution unique?      Can we solve the equation ? If so, is the solution unique?      Sketch a graph of the function in      Graph the function above.        We will now consider functions having the form . Draw a graph of the function on the left in .      Graphs of the function and .        Draw a graph of the function on the right of .      Remember that composing two functions means we use the output from one function as the input into the other; that is, . What function results from composing ?    "
},
{
  "id": "sec-2-5-1-4-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Matrix Transformation.",
  "body": " Definition: Matrix Transformation   The matrix transformation of a matrix is   "
},
{
  "id": "sec-2-5-1-4-2",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Example 1: Matrix Transformations.",
  "body": " Example 1: Matrix Transformations   Consider the matrix    "
},
{
  "id": "sec-2-5-1-4-3",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-4-3",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Example 2: Matrix Transformations.",
  "body": " Example 2: Matrix Transformations   Consider the function that has the form    "
},
{
  "id": "sec-2-5-1-5-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Activity: Matrix Transformations.",
  "body": " Activity: Matrix Transformations   In this activity, we will look at some examples of matrix transformations.  To begin, suppose that is the matrix with associated matrix transformation .  What is ?  What is ?  What is ?  Is there a vector such that ?  Write as a two-dimensional vector.      Suppose that where .  What is the dimension of the vectors that are inputs for ?  What is the dimension of the vectors that are outputs?  If we describe this transformation as , what are the values of and and how do they relate to the shape of ?  Describe the vectors for which .   If is the matrix , what is in terms of the vectors and ? What about ?  Suppose that is a matrix and that . If , what is the matrix ?    "
},
{
  "id": "sec-2-5-1-6-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-6-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Fact: Identifying Matrix Transformations.",
  "body": " Fact: Identifying Matrix Transformations   If is a matrix transformation given by , then   "
},
{
  "id": "sec-2-5-1-7-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-7-1",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Activity 2: Matrix Transformations.",
  "body": " Activity 2: Matrix Transformations   Let's look at some examples and apply these observations.   To begin, suppose that is the matrix transformation that takes a two-dimensional vector as an input and outputs , the two-dimensional vector obtained by rotating counterclockwise by , as shown in .   The matrix transformation takes two-dimensional vectors on the left and rotates them by counterclockwise into the vectors on the right.       We will see in the next section that many geometric operations like this one can be performed by matrix transformations.   If we write , what are the values of and , and what is the shape of the associated matrix ?    Determine the matrix by considering the vectors .    If as shown on the left in , use your matrix to determine and verify that it agrees with that shown on the right of .    If , determine the vector obtained by rotating counterclockwise by .         "
},
{
  "id": "sec-2-5-1-8-1",
  "level": "2",
  "url": "sec-2-5-1.html#sec-2-5-1-8-1",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "Activity (continued).",
  "body": " Activity (continued)      Suppose that we work for a company that makes baked goods, including cakes, doughnuts, and eclairs. The company operates two bakeries, Bakery 1 and Bakery 2. In one hour of operation,  Bakery 1 produces 10 cakes, 50 doughnuts, and 30 eclairs.  Bakery 2 produces 20 cakes, 30 doughnuts, and 30 eclairs.  If Bakery 1 operates for hours and Bakery 2 for hours, we will use the vector to describe the operation of the two bakeries.  We would like to describe a matrix transformation where describes the number of hours the bakeries operate and describes the total number of cakes, doughnuts, and eclairs produced. That is, where is the number of cakes, is the number of doughnuts, and is the number of eclairs produced.   If , what are the values of and , and what is the shape of the associated matrix ?    We can determine the matrix by considering vectors . For instance, will describe the number of cakes, doughnuts, and eclairs produced when Bakery 1 operates for one hour and Bakery 2 sits idle. What is this vector?    In the same way, determine . What is the matrix ?    If Bakery 1 operates for 120 hours and Bakery 2 for 180 hours, what is the total number of cakes, doughnuts, and eclairs produced?     Suppose that in one period of time, the company produces 5060 cakes, 14310 doughnuts, and 10470 eclairs. How long did each bakery operate?    Suppose that the company receives an order for a certain number of cakes, doughnuts, and eclairs. Can you guarantee that you can fill the order without having leftovers?         "
},
{
  "id": "sec-2-5-2",
  "level": "1",
  "url": "sec-2-5-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 2.5\\text{:}\\)<\/span> Matrix Transformations and Composition",
  "body": " : Matrix Transformations and Composition    Motivation: Composition          Activity: Composition   We will explore the composition of matrix transformations by revisiting the matrix transformations from a previous activity.   Let's begin with the matrix transformation that rotates a two-dimensional vector by to produce . We saw in the earlier activity that the associated matrix is . Suppose that we compose this matrix transformation with itself to obtain , which is the result of rotating by twice.   What is the matrix associated to the composition ?    What is the result of rotating twice?    Suppose that is the matrix transformation that rotates vectors by , as shown in .   The matrix transformation takes two-dimensional vectors on the left and rotates them by into the vectors on the right.       Use the vectors to find the matrix associated to and explain why it is the same matrix associated to .    Write the two-dimensional vector . How might this vector be expressed in terms of scalar multiplication and why does this make sense geometrically?             Activity (continued)      In the previous activity, we imagined a company that operates two bakeries. We found the matrix transformation where describes the number of cakes, doughnuts, and eclairs when Bakery1 runs for hours and Bakery 2 runs for hours. The associated matrix is .  Suppose now that  Each cake requires 4 cups of flour and and 2 cups of sugar.  Each doughnut requires 1 cup of flour and 1 cup of sugar.  Each eclair requires 1 cup of flour and 2 cups of sugar.  We will describe a matrix transformation where is a two-dimensional vector describing the number of cups of flour and sugar required to make cakes, doughnuts, and eclairs.   Use the vectors to write the matrix associated to the transformation .    If we make 1200 cakes, 2850 doughnuts, and 2250 eclairs, how many cups of flour and sugar are required?     Suppose that Bakery 1 operates for 75 hours and Bakery 2 operates for 53 hours. How many cakes, doughnuts, and eclairs are produced? How many cups of flour and sugar are required?    What is the meaning of the composition and what is its associated matrix?    In a certain time interval, both bakeries use a total of 5800 cups of flour and 5980 cups of sugar. How long have the two bakeries been operating?             Application: Discrete Dynamical Systems        "
},
{
  "id": "sec-2-5-2-2-1",
  "level": "2",
  "url": "sec-2-5-2.html#sec-2-5-2-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Composition.",
  "body": " Motivation: Composition      "
},
{
  "id": "sec-2-5-2-3-1",
  "level": "2",
  "url": "sec-2-5-2.html#sec-2-5-2-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Activity: Composition.",
  "body": " Activity: Composition   We will explore the composition of matrix transformations by revisiting the matrix transformations from a previous activity.   Let's begin with the matrix transformation that rotates a two-dimensional vector by to produce . We saw in the earlier activity that the associated matrix is . Suppose that we compose this matrix transformation with itself to obtain , which is the result of rotating by twice.   What is the matrix associated to the composition ?    What is the result of rotating twice?    Suppose that is the matrix transformation that rotates vectors by , as shown in .   The matrix transformation takes two-dimensional vectors on the left and rotates them by into the vectors on the right.       Use the vectors to find the matrix associated to and explain why it is the same matrix associated to .    Write the two-dimensional vector . How might this vector be expressed in terms of scalar multiplication and why does this make sense geometrically?         "
},
{
  "id": "sec-2-5-2-4-1",
  "level": "2",
  "url": "sec-2-5-2.html#sec-2-5-2-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Activity (continued).",
  "body": " Activity (continued)      In the previous activity, we imagined a company that operates two bakeries. We found the matrix transformation where describes the number of cakes, doughnuts, and eclairs when Bakery1 runs for hours and Bakery 2 runs for hours. The associated matrix is .  Suppose now that  Each cake requires 4 cups of flour and and 2 cups of sugar.  Each doughnut requires 1 cup of flour and 1 cup of sugar.  Each eclair requires 1 cup of flour and 2 cups of sugar.  We will describe a matrix transformation where is a two-dimensional vector describing the number of cups of flour and sugar required to make cakes, doughnuts, and eclairs.   Use the vectors to write the matrix associated to the transformation .    If we make 1200 cakes, 2850 doughnuts, and 2250 eclairs, how many cups of flour and sugar are required?     Suppose that Bakery 1 operates for 75 hours and Bakery 2 operates for 53 hours. How many cakes, doughnuts, and eclairs are produced? How many cups of flour and sugar are required?    What is the meaning of the composition and what is its associated matrix?    In a certain time interval, both bakeries use a total of 5800 cups of flour and 5980 cups of sugar. How long have the two bakeries been operating?         "
},
{
  "id": "sec-2-5-2-5-1",
  "level": "2",
  "url": "sec-2-5-2.html#sec-2-5-2-5-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Application: Discrete Dynamical Systems.",
  "body": " Application: Discrete Dynamical Systems      "
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
