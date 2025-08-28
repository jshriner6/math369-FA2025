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
},
{
  "id": "sec-1-2-2",
  "level": "1",
  "url": "sec-1-2-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.2\\text{:}\\)<\/span> Reduced Row Echelon Form (RREF)",
  "body": " : Reduced Row Echelon Form (RREF)    Motivation: RREF        Augmented Matrices   Consider the system Perform the row operation .       Activity: Augmented Matrices and Solution Spaces      Write the augmented matrix for the linear system and perform Gaussian elimination to describe the solution space in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that the augmented matrix of a linear system has the following shape where could be any real number.    How many equations are there in this system and how many variables?   Based on our earlier discussion in Section 1.1, do you think it's most likely that this system has exactly one solution, infinitely many solutions, or no solutions?   Suppose that this augmented matrix is row equivalent to Make a choice for the names of the variables and write the corresponding linear system. Does the system have exactly one solution, infinitely many solutions, or no solutions?           Definition: RREF   How do we know a matrix is reduced to the \"easiest\" form?  We say that a matrix is in reduced row echelon form if the following properties are satisfied.   If the entries in a row are all zero, then the same is true of any row below it.    If we move across a row from left to right, the first nonzero entry we encounter is 1. We call this entry the leading entry in the row.    The leading entry in any row is to the right of the leading entries in all the rows above it.    A leading entry is the only nonzero entry in its column.   We call a matrix in reduced row echelon form a reduced row echelon matrix .  The following is an example of a matrix in RREF:      Activity: Identifying RREF   Consider each of the following augmented matrices. Determine if the matrix is in reduced row echelon form. If it is not, explain why.                             Practice: Using RREF to Describe Solution Spaces   For each matrix in the previous activity, perform necessary row operations to obtain RREF if it is not already reduced. Then, use the matrix in RREF to describe the solution space of the original system.     Fact: RREF          Observations: Solution Spaces and Pivots        "
},
{
  "id": "sec-1-2-2-2-1",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: RREF.",
  "body": " Motivation: RREF      "
},
{
  "id": "sec-1-2-2-2-2",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Augmented Matrices.",
  "body": " Augmented Matrices   Consider the system Perform the row operation .   "
},
{
  "id": "sec-1-2-2-3-1",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Activity: Augmented Matrices and Solution Spaces.",
  "body": " Activity: Augmented Matrices and Solution Spaces      Write the augmented matrix for the linear system and perform Gaussian elimination to describe the solution space in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that you have a linear system in the variables and whose augmented matrix is row equivalent to Write the linear system corresponding to this augmented matrix and describe its solution set in as much detail as you can.    Suppose that the augmented matrix of a linear system has the following shape where could be any real number.    How many equations are there in this system and how many variables?   Based on our earlier discussion in Section 1.1, do you think it's most likely that this system has exactly one solution, infinitely many solutions, or no solutions?   Suppose that this augmented matrix is row equivalent to Make a choice for the names of the variables and write the corresponding linear system. Does the system have exactly one solution, infinitely many solutions, or no solutions?       "
},
{
  "id": "sec-1-2-2-4-1",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-4-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Definition: RREF.",
  "body": " Definition: RREF   How do we know a matrix is reduced to the \"easiest\" form?  We say that a matrix is in reduced row echelon form if the following properties are satisfied.   If the entries in a row are all zero, then the same is true of any row below it.    If we move across a row from left to right, the first nonzero entry we encounter is 1. We call this entry the leading entry in the row.    The leading entry in any row is to the right of the leading entries in all the rows above it.    A leading entry is the only nonzero entry in its column.   We call a matrix in reduced row echelon form a reduced row echelon matrix .  The following is an example of a matrix in RREF:    "
},
{
  "id": "sec-1-2-2-4-2",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Identifying RREF.",
  "body": " Activity: Identifying RREF   Consider each of the following augmented matrices. Determine if the matrix is in reduced row echelon form. If it is not, explain why.                         "
},
{
  "id": "sec-1-2-2-5-1",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Practice: Using RREF to Describe Solution Spaces.",
  "body": " Practice: Using RREF to Describe Solution Spaces   For each matrix in the previous activity, perform necessary row operations to obtain RREF if it is not already reduced. Then, use the matrix in RREF to describe the solution space of the original system.   "
},
{
  "id": "sec-1-2-2-5-2",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-5-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Fact: RREF.",
  "body": " Fact: RREF      "
},
{
  "id": "sec-1-2-2-6-1",
  "level": "2",
  "url": "sec-1-2-2.html#sec-1-2-2-6-1",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Observations: Solution Spaces and Pivots.",
  "body": " Observations: Solution Spaces and Pivots      "
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
