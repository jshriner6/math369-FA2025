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
},
{
  "id": "lab-3",
  "level": "1",
  "url": "lab-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 3: Computer Animation",
  "body": " Lab 3: Computer Animation    Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.  In this lab, we'll see how computer animators use matrix transformations to tell stories. In fact, when you watch a Pixar movie, you're actually seeing some very elegant applications of linear algebra. You may wish to use Subsection 2.6.2 as a supplemental resource for this lab.  Now, let me introduce you to Wooody, the lovable star of the animated kids' film Toy Tale due out this holiday season.   Stick figure in coordinate plane.   The computer animators who made Toy Tale assembled the film frame by frame. To make us think that Wooody is moving, they make changes in Wooody's position from one frame to the next. This is where linear algebra is useful. (Actually, Wooody really lives in a three-dimensional world and each part of his body may be moving in different ways so the situation is a little more complicated but hopefully you will get the idea.)  If you go to the animation interactive , you will find a figure that can make Wooody move. On the left, you see a picture of Wooody, while on the right you will see a picture of him after a matrix transformation has been applied.  Here is the function we will consider; it is not quite as simple as what we have seen in class: The six sliders along the top of the diagram represent the quantities        Using homogeneous coordinates, we represent this change as      Compute this matrix product and verify that it produces the appropriate expressions for and .      The benefit of using homogeneous coordinates is because they introduce additional parameters and . What role do these two parameters play in the transformation?         Press the Reset button if you have modified Wooody. As shown above, Wooody is waving with his left hand. In the first scene of the movie, Wooody comes on screen and waves with his right hand. What is the matrix transformation that has been applied?   Stick figure with right arm up and left arm down.         Next, Wooody begins his morning callesthenics and performs a cartwheel in the following frames reading across the first row and then the bottom.   The progression of the stick figure doing four 45 degree rotations counterclockwise.      What is the transformation that produces the first (upper left) frame?      Using , how can you produce the second frame (upper right)? What is the matrix that produces the second frame?      How can you continue using to generate and , the matrices that produce the remaining two frames?         At this point in the story, Wooody remembers a long-ago love and the camera moves in for a close up.   The progression of the stick figure being magnified.   There are two ways to do this, and the sequence of frames above illustrates one. The first two frames are rather straightforward. The third is a little tricky but the diagram gives you another tool to help. Once you have the diagram configured in some way you like, you may press the button Compose , and the image on the left is set to that on the right and the transformation resets to the identity. You may then operate on the new figure from scratch. Mathematically, you are composing two functions.     Explain the transformations required to make the sequence of frames above.      Determine the (matrix) function that takes our original picture of Wooody into the final close up.         Wooody decides to go out for a walk. In the morning sun, he casts a shadow that looks like this:   The stick figure sheered to the right.      Find the matrix transformation that creates the shadow. You might remember how we have found the matrix representing a matrix transformation by looking at what happens to the vectors and .      As the sun comes up, his shadow get shorter.   The progression of the stick figure sheering more to the right.   Explain what matrix transformations achieve this and how you found them. (Think about composing transformations again.)         Write an ending to our heart-felt story and describe how to illustrate it.     "
},
{
  "id": "lab-3-3-1",
  "level": "2",
  "url": "lab-3.html#lab-3-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Using homogeneous coordinates, we represent this change as      Compute this matrix product and verify that it produces the appropriate expressions for and .      The benefit of using homogeneous coordinates is because they introduce additional parameters and . What role do these two parameters play in the transformation?    "
},
{
  "id": "lab-3-4-1",
  "level": "2",
  "url": "lab-3.html#lab-3-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Press the Reset button if you have modified Wooody. As shown above, Wooody is waving with his left hand. In the first scene of the movie, Wooody comes on screen and waves with his right hand. What is the matrix transformation that has been applied?   Stick figure with right arm up and left arm down.    "
},
{
  "id": "lab-3-5-1",
  "level": "2",
  "url": "lab-3.html#lab-3-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Next, Wooody begins his morning callesthenics and performs a cartwheel in the following frames reading across the first row and then the bottom.   The progression of the stick figure doing four 45 degree rotations counterclockwise.      What is the transformation that produces the first (upper left) frame?      Using , how can you produce the second frame (upper right)? What is the matrix that produces the second frame?      How can you continue using to generate and , the matrices that produce the remaining two frames?    "
},
{
  "id": "lab-3-6-1",
  "level": "2",
  "url": "lab-3.html#lab-3-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  At this point in the story, Wooody remembers a long-ago love and the camera moves in for a close up.   The progression of the stick figure being magnified.   There are two ways to do this, and the sequence of frames above illustrates one. The first two frames are rather straightforward. The third is a little tricky but the diagram gives you another tool to help. Once you have the diagram configured in some way you like, you may press the button Compose , and the image on the left is set to that on the right and the transformation resets to the identity. You may then operate on the new figure from scratch. Mathematically, you are composing two functions.     Explain the transformations required to make the sequence of frames above.      Determine the (matrix) function that takes our original picture of Wooody into the final close up.    "
},
{
  "id": "lab-3-7-1",
  "level": "2",
  "url": "lab-3.html#lab-3-7-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Wooody decides to go out for a walk. In the morning sun, he casts a shadow that looks like this:   The stick figure sheered to the right.      Find the matrix transformation that creates the shadow. You might remember how we have found the matrix representing a matrix transformation by looking at what happens to the vectors and .      As the sun comes up, his shadow get shorter.   The progression of the stick figure sheering more to the right.   Explain what matrix transformations achieve this and how you found them. (Think about composing transformations again.)    "
},
{
  "id": "lab-3-8-1",
  "level": "2",
  "url": "lab-3.html#lab-3-8-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Write an ending to our heart-felt story and describe how to illustrate it.   "
},
{
  "id": "lab-4",
  "level": "1",
  "url": "lab-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 4: Image Compression",
  "body": " Lab 4: Image Compression    Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.  As introduced in class, we are going to study the luminance values in an block of pixels from a digital photo taken in Capitol Reef National Park.   An eight by eight grid of gray pixels.    An eight by eight grid showing the luminance values of each pixel.     To begin, we'll consider the first column of luminance values, which is the 8-dimensional vector represented graphically as  Graph of the components of the vector x.  Two things are important:   There are not rapid variations in these numbers within the column.    If some of the values were to change slightly, our eyes would probably not notice because the pixels, when represented on a screen, are so small.     In the daily prep, we encountered the Fourier basis consisting of vectors , and the vector consisting of the Fourier coefficients .  There is a page of Sage cells to use for this lab. Be sure to evaluate the first cell and then use the rest of the cells to complete your work. This cell will load the matrix , whose columns are the vectors , as well as the vector shown above and the matrix of luminance values called luminance .        Describe in words how to convert the vector into the vector of Fourier coefficients and, conversely, how to convert back into .      Find the vector using the page of Sage cells provided, take a screenshot of it, and paste it below.      What does the relative size of the Fourier coefficients tell us about the relative contributions of the basis vectors to the vector ? How is your observation consistent with the fact that “there are not rapid variations” in the vector ?         Now form a new vector , which is formed from by rounding the Fourier coefficients to the nearest integers and setting the last two Fourier coefficients to zero. In other words, we are only saving of the Fourier coefficients, or of them.     Find , an approximation to the vector formed by the approximate Fourier coefficients . Describe the vector and how you found . Then paste a screenshot of below. (Remember that you can define a vector in Sage as v = vector([2, 1]) .)      Paste a screen shot of , and describe what this measures.      Here's the main idea: we have saved only of the Fourier coefficients, but when we reconstruct the visual information in the vector , the error is pretty small and probably not visible to the human eye (remember that the components of can vary between and ). We say that the compression ratio is . Let's try again saving only the four largest Fourier coefficients (a compression ratio of ); that is, form a new by setting the four smallest Fourier coefficients to zero. Paste a screen shot of the new value of . Describe its relationship to what you obtained in the previous question, and why this makes sense.         We can, in fact, do better. Let's return to the block of luminance values on page 1 of this document. Each column of luminance values forms an 8-dimensional vector, the first of which we studied already. If is the column of the luminance matrix, then we can find its corresponding vector of Fourier coefficients.     Find the matrix whose columns are the vectors and paste a screenshot of your results in the space below. Include a description of how you found this matrix. This may sound daunting at first, but remember how matrix-matrix multiplication works, and that you have the matrix luminance of luminance values available on your page of Sage cells.      As you scan across a row, take the first row, for instance, you'll see that the values don't change wildly. So maybe we can also Fourier transform the rows of the matrix of Fourier coefficients. Define the 8-dimensional vector consisting of the rounded values of the first row of the Fourier coefficient matrix and then find its Fourier coefficients . Paste a screenshot of below. What do you notice about the relative size of these Fourier coefficients?         Transforming the rows of a Fourier coefficient matrix is called the double Fourier transform , and there's a Sage function, double_fourier( luminance ) , that can do this for you from the original luminance values.     Give the matrix obtained after a double Fourier transform a name, and paste a screenshot of it below. What do you notice about the size of the entries of this matrix?      There is another command round_matrix( matrix_name, minimum ) that will round the entries in the given matrix to the nearest integer and set any entries whose absolute value is smaller than minimum to zero. For instance, round_matrix( A, 4 ) will round the entries of and set any entries in the range from -3 to 3 equal to zero. Round the matrix of double Fourier coefficients with a minimum value of 4 and paste your result below. How many non-zero double Fourier coefficients are left? What is the compression ratio? (The non-zero entries are the only ones that we need to save, so the ratio of the number of non-zero double Fourier coefficients to 64 represents the compression ratio.)         There is a final command, inverse_double_fourier( matrix_name ) , that will reconstruct the luminance values from the rounded double Fourier coefficients.     Find this reconstruction and paste it below.      Compute a matrix that represents the error between the original luminance values and the reconstructed values, and paste it below.     Notice that we have only saved about of the Fourier coefficients yet we are able to reconstruct the luminance values with a relatively small error. When you take a picture with your phone, the software saves the rounded double Fourier coefficients of each block of pixels, which represents only a small fraction of the information. When you want to view a picture, the software reconstructs the image from the saved double Fourier coefficients with a relatively small error. Most photo editing programs allow you to choose the compression ratio (quality setting), which is controlled by the range of Fourier coefficients we save.   "
},
{
  "id": "lab-4-2-1-5",
  "level": "2",
  "url": "lab-4.html#lab-4-2-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "luminance "
},
{
  "id": "lab-4-3-1",
  "level": "2",
  "url": "lab-4.html#lab-4-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   Describe in words how to convert the vector into the vector of Fourier coefficients and, conversely, how to convert back into .      Find the vector using the page of Sage cells provided, take a screenshot of it, and paste it below.      What does the relative size of the Fourier coefficients tell us about the relative contributions of the basis vectors to the vector ? How is your observation consistent with the fact that “there are not rapid variations” in the vector ?    "
},
{
  "id": "lab-4-4-1",
  "level": "2",
  "url": "lab-4.html#lab-4-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Now form a new vector , which is formed from by rounding the Fourier coefficients to the nearest integers and setting the last two Fourier coefficients to zero. In other words, we are only saving of the Fourier coefficients, or of them.     Find , an approximation to the vector formed by the approximate Fourier coefficients . Describe the vector and how you found . Then paste a screenshot of below. (Remember that you can define a vector in Sage as v = vector([2, 1]) .)      Paste a screen shot of , and describe what this measures.      Here's the main idea: we have saved only of the Fourier coefficients, but when we reconstruct the visual information in the vector , the error is pretty small and probably not visible to the human eye (remember that the components of can vary between and ). We say that the compression ratio is . Let's try again saving only the four largest Fourier coefficients (a compression ratio of ); that is, form a new by setting the four smallest Fourier coefficients to zero. Paste a screen shot of the new value of . Describe its relationship to what you obtained in the previous question, and why this makes sense.    "
},
{
  "id": "lab-4-5-1",
  "level": "2",
  "url": "lab-4.html#lab-4-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  We can, in fact, do better. Let's return to the block of luminance values on page 1 of this document. Each column of luminance values forms an 8-dimensional vector, the first of which we studied already. If is the column of the luminance matrix, then we can find its corresponding vector of Fourier coefficients.     Find the matrix whose columns are the vectors and paste a screenshot of your results in the space below. Include a description of how you found this matrix. This may sound daunting at first, but remember how matrix-matrix multiplication works, and that you have the matrix luminance of luminance values available on your page of Sage cells.      As you scan across a row, take the first row, for instance, you'll see that the values don't change wildly. So maybe we can also Fourier transform the rows of the matrix of Fourier coefficients. Define the 8-dimensional vector consisting of the rounded values of the first row of the Fourier coefficient matrix and then find its Fourier coefficients . Paste a screenshot of below. What do you notice about the relative size of these Fourier coefficients?    "
},
{
  "id": "lab-4-6-1",
  "level": "2",
  "url": "lab-4.html#lab-4-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Transforming the rows of a Fourier coefficient matrix is called the double Fourier transform , and there's a Sage function, double_fourier( luminance ) , that can do this for you from the original luminance values.     Give the matrix obtained after a double Fourier transform a name, and paste a screenshot of it below. What do you notice about the size of the entries of this matrix?      There is another command round_matrix( matrix_name, minimum ) that will round the entries in the given matrix to the nearest integer and set any entries whose absolute value is smaller than minimum to zero. For instance, round_matrix( A, 4 ) will round the entries of and set any entries in the range from -3 to 3 equal to zero. Round the matrix of double Fourier coefficients with a minimum value of 4 and paste your result below. How many non-zero double Fourier coefficients are left? What is the compression ratio? (The non-zero entries are the only ones that we need to save, so the ratio of the number of non-zero double Fourier coefficients to 64 represents the compression ratio.)    "
},
{
  "id": "lab-4-7-1",
  "level": "2",
  "url": "lab-4.html#lab-4-7-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  There is a final command, inverse_double_fourier( matrix_name ) , that will reconstruct the luminance values from the rounded double Fourier coefficients.     Find this reconstruction and paste it below.      Compute a matrix that represents the error between the original luminance values and the reconstructed values, and paste it below.    "
},
{
  "id": "lab-5",
  "level": "1",
  "url": "lab-5.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 5: Dynamical Systems",
  "body": " Lab 5: Dynamical Systems   Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.     In this first exercise we will look at several examples of dynamical systems and their behavior over time. If , we note that the columns of form a basis of . Given below are several matrices written in the form for some matrix . For each matrix,   state the eigenvalues of , and describe how the matrix acts on vectors written in the basis ,    sketch trajectories (with arrows) on the phase portrait for the matrix for each of the initial values indicated by dots, and    answer the question provided regarding the system's behavior over time.          where .      When , we say the origin is a repellor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a center . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When , we say the origin is a saddle . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When , we say the origin is an attractor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a spiral repellor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a spiral attractor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.       In this exercise, we will consider several ways in which two species might interact with one another. Throughout, we will consider two species and whose populations in year form a vector and which evolve according to the rule .  To answer the questions, you will need to refer to eigenvalues and eigenvectors of the given matrix. Use Sage to compute eigenvalues and eigenvectors for each matrix, and paste a screenshot of your result.      Suppose that .  Explain why the species do not interact with one another. Which of the six types of dynamical systems from the first exercise do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.       Suppose now that .   Explain why is a beneficial species for . Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.      If , explain why this describes a predator-prey system. Which of the species is the predator and which is the prey? Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.      Suppose that . Compare this predator-prey system to the one in the previous part. Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.      "
},
{
  "id": "lab-5-3",
  "level": "2",
  "url": "lab-5.html#lab-5-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  In this first exercise we will look at several examples of dynamical systems and their behavior over time. If , we note that the columns of form a basis of . Given below are several matrices written in the form for some matrix . For each matrix,   state the eigenvalues of , and describe how the matrix acts on vectors written in the basis ,    sketch trajectories (with arrows) on the phase portrait for the matrix for each of the initial values indicated by dots, and    answer the question provided regarding the system's behavior over time.          where .      When , we say the origin is a repellor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a center . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When , we say the origin is a saddle . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When , we say the origin is an attractor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a spiral repellor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.        where .      When and , we say the origin is a spiral attractor . Verify that your eigenvalues satisfy this criteria, and use your phase portrait to describe why this is an appropriate term for the origin in this case.    "
},
{
  "id": "lab-5-4",
  "level": "2",
  "url": "lab-5.html#lab-5-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  In this exercise, we will consider several ways in which two species might interact with one another. Throughout, we will consider two species and whose populations in year form a vector and which evolve according to the rule .  To answer the questions, you will need to refer to eigenvalues and eigenvectors of the given matrix. Use Sage to compute eigenvalues and eigenvectors for each matrix, and paste a screenshot of your result.      Suppose that .  Explain why the species do not interact with one another. Which of the six types of dynamical systems from the first exercise do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.       Suppose now that .   Explain why is a beneficial species for . Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.      If , explain why this describes a predator-prey system. Which of the species is the predator and which is the prey? Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.      Suppose that . Compare this predator-prey system to the one in the previous part. Which of the six types of dynamical systems do we have? What happens to both species after a long time? Be as specific as you are able with the information that you have.    "
},
{
  "id": "lab-6",
  "level": "1",
  "url": "lab-6.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 6: Google’s PageRank Algorithm",
  "body": " Lab 6: Google's PageRank Algorithm   Complete the following exercises in groups of 2 or 3 students including complete explanations of your work. You should write directly on this handout (if additional pages are necessary, please make sure they are well-organized), and you only need to submit one report to Gradescope. Make sure you indicate everyone in your group in your submission to Gradescope.  When I recently googled the phrase “linear algebra”, Google told me there were about 78.5 million results, which took less than half a second to produce. It also told me that the Wikipedia page was the one most likely to be useful to me. How does Google decide to recommend that page above all the others? Well, Google computes a quantity called PageRank for each page on the internet. Pages with a higher PageRank are deemed to be more valuable. The key to computing PageRank lies in an algorithm that we'll study in this lab.  One could determine the importance of a web page by allowing people to vote for their favorite web pages. However, Google wants their rankings to be free of any human bias, so it examines the structure of the internet itself to rank pages. Here is the basic idea: if my home page is valuable, many other pages will link to it. Of course, I could try to sway the rankings by creating lots of pages that link to my home page. So Google views a page as being more valuable when valuable pages link to it. For instance, if three of my friends link to my home page, that means three people think I have a valuable page. But if nytimes.com, amazon.com, and beyonce.com link to my page, that probably means more people will find my page to be valuable, so I should have a higher PageRank.  We'll describe here how to compute PageRank, then work through several examples. Each webpage has a certain value of PageRank that we denote by . Each page divides its PageRank value into equal portions, one for each outgoing link. Each page then gives one portion of its PageRank to each page it links to. A page's PageRank is then the sum of all the PageRank it receives from pages that link to it.  Let's look at some examples to make this more concrete. If you visit this Sage page , you will find some Sage code that will be helpful for this lab. Be sure to evaluate the first cell to gain access to useful commands, and then don't use that cell again. Whenever you use Sage to compute something to answer a question, you should paste a screenshot of your code and result.     Suppose that our Internet only has three pages with links as shown below. Page 2 only links to page 1 so it gives all of its PageRank to Page 1. Page 3 has two outgoing links so it divides its PageRank into two equal pieces and gives half its PageRank to Page 1. The PageRank is therefore .   Directed graph showing pages 1 and 2 and 1 and 3 are connected in both directions, while page 3 is connected to page 2, but page 2 is not connected to page 3.      Find similar expressions for and .      If we write , find the “Google matrix” such that .      Notice that the equation is the condition that be an eigenvector of . What is the associated eigenvalue?      Find the vectors that satisfy .      You should notice that the solutions from the previous part form a 1-dimensional subspace. Since we're just interested in the relative size of the entries, we can choose any one of them as the PageRank vector , but only one is a probability vector. Identify the probability vector, and use it to identify which of the three web pages has the highest PageRank and which has the smallest.      Explain why is a stochastic matrix. Why will this always be the case for any internet, assuming that each page has outgoing links?      Does satisfy the hypothesis of the Perron-Frobenius theorem? Explain why or why not. What does this tell us about the behavior of a Markov chain constructed using ?      The first cell on the page of Sage cells loaded a function markov(A, x0, n) that prints vectors in the Markov chain defined by a stochastic matrix and initial state vector . Starting with the initial state vector , generate a Markov chain with vectors . What do you notice about the vectors ? How does this demonstrate the Perron-Frobenius theorem?      Note : Google is estimated to know about 400 billion ( pages), so the real Google matrix is 400 billion 400 billion. That's big, but real applications of linear algebra frequently use huge matrices. Finding the PageRank vector by finding a basis for the eigenspace and using row reduction is not computationally feasible. However, the Perron-Frobenius theorem tells us that any Markov chain will converge to the PageRank vector!    Consider the Internet shown below.   A directed graph with 8 nodes showing the connections between each.   The Google matrix for this internet was defined to be G8 when you evaluated the first cell. Create a Markov chain with a sufficient number of terms to converge. What do you find for the PageRank vector? Which page is most valuable? Which page is least valuable?      Now consider the new Internet shown below.   A directed graph show 1 is connected to 2 is connected to 3 is connected to 4 is connected to 5 is connected to 1.      Find the Google matrix of this internet.      What happens in a Markov chain that begins with ?      By inspecting this internet, state what you feel the PageRank vector should be. Is any page more important than the others? Explain.       As the last example shows, the Perron-Frobenius theorem may not always apply given the structure of the internet. This means that a Markov chain may not converge or it may converge to a vector with zero entries. For this reason, Google modifies the Google matrix so that the Perron-Frobenius theorem always applies. Let's describe what happens.  If there are web pages, define the matrix This would correspond to an Internet in which every page is linked to every other page, including itself. We now define a modified Google matrix by choosing a parameter , which is a trade secret but is suspected to be close to , and defining , which when we take becomes . In other words, is obtained by mixing of with of . You may use the Sage command modified_google_matrix(G) to produce .     Go back and revisit the Internet having five pages linked together in a cycle. Construct the modified Google matrix and explain why the Perron-Frobenius theorem now applies.      What do you now find for the PageRank vector using G'? Does this agree with what you think the PageRank vector should be?      Revisit the second Internet whose Google matrix is G8 and construct its modified Google matrix, then its PageRank vector. Which page is most important and which is least important? Do the results using the modified Google matrix differ significantly from the original results obtained just using G8 ?     "
},
{
  "id": "lab-6-2-2",
  "level": "2",
  "url": "lab-6.html#lab-6-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PageRank "
},
{
  "id": "lab-6-3",
  "level": "2",
  "url": "lab-6.html#lab-6-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose that our Internet only has three pages with links as shown below. Page 2 only links to page 1 so it gives all of its PageRank to Page 1. Page 3 has two outgoing links so it divides its PageRank into two equal pieces and gives half its PageRank to Page 1. The PageRank is therefore .   Directed graph showing pages 1 and 2 and 1 and 3 are connected in both directions, while page 3 is connected to page 2, but page 2 is not connected to page 3.      Find similar expressions for and .      If we write , find the “Google matrix” such that .      Notice that the equation is the condition that be an eigenvector of . What is the associated eigenvalue?      Find the vectors that satisfy .      You should notice that the solutions from the previous part form a 1-dimensional subspace. Since we're just interested in the relative size of the entries, we can choose any one of them as the PageRank vector , but only one is a probability vector. Identify the probability vector, and use it to identify which of the three web pages has the highest PageRank and which has the smallest.      Explain why is a stochastic matrix. Why will this always be the case for any internet, assuming that each page has outgoing links?      Does satisfy the hypothesis of the Perron-Frobenius theorem? Explain why or why not. What does this tell us about the behavior of a Markov chain constructed using ?      The first cell on the page of Sage cells loaded a function markov(A, x0, n) that prints vectors in the Markov chain defined by a stochastic matrix and initial state vector . Starting with the initial state vector , generate a Markov chain with vectors . What do you notice about the vectors ? How does this demonstrate the Perron-Frobenius theorem?    "
},
{
  "id": "lab-6-5",
  "level": "2",
  "url": "lab-6.html#lab-6-5",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider the Internet shown below.   A directed graph with 8 nodes showing the connections between each.   The Google matrix for this internet was defined to be G8 when you evaluated the first cell. Create a Markov chain with a sufficient number of terms to converge. What do you find for the PageRank vector? Which page is most valuable? Which page is least valuable?   "
},
{
  "id": "lab-6-6",
  "level": "2",
  "url": "lab-6.html#lab-6-6",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Now consider the new Internet shown below.   A directed graph show 1 is connected to 2 is connected to 3 is connected to 4 is connected to 5 is connected to 1.      Find the Google matrix of this internet.      What happens in a Markov chain that begins with ?      By inspecting this internet, state what you feel the PageRank vector should be. Is any page more important than the others? Explain.    "
},
{
  "id": "lab-6-7",
  "level": "2",
  "url": "lab-6.html#lab-6-7",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  As the last example shows, the Perron-Frobenius theorem may not always apply given the structure of the internet. This means that a Markov chain may not converge or it may converge to a vector with zero entries. For this reason, Google modifies the Google matrix so that the Perron-Frobenius theorem always applies. Let's describe what happens.  If there are web pages, define the matrix This would correspond to an Internet in which every page is linked to every other page, including itself. We now define a modified Google matrix by choosing a parameter , which is a trade secret but is suspected to be close to , and defining , which when we take becomes . In other words, is obtained by mixing of with of . You may use the Sage command modified_google_matrix(G) to produce .     Go back and revisit the Internet having five pages linked together in a cycle. Construct the modified Google matrix and explain why the Perron-Frobenius theorem now applies.      What do you now find for the PageRank vector using G'? Does this agree with what you think the PageRank vector should be?      Revisit the second Internet whose Google matrix is G8 and construct its modified Google matrix, then its PageRank vector. Which page is most important and which is least important? Do the results using the modified Google matrix differ significantly from the original results obtained just using G8 ?    "
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
