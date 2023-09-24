### Procedure

There are two tasks in Simulation.
<br>
<br>

**Procedure for Generator Polynomial:**
* Initially, all the polynomials are in grey background.
* Clicking on polynomial changes its background color to from grey to green. All the polynomials with green background are the selected polynomials.
* To deselect a polynomial, click on it again. Its background color changes back to grey.
* Select all the minimal polynomials and click on <b>Submit</b>.
* <b>Observations</b> section displays whether all the correct polynomials are selected or not.
* If all the correct minimal polynomials have been selected, a field to enter the generator polynomial will be displayed.
* Use only <b>lower case</b> x in the field. Expressions like x<sup>2</sup> can be entered in the field by typing x^2 on the keyboard.
* 1, +, x, x^2, x^3, ..., x^10 and their combinations need to be entered in the field in this task. Do not enter any other symbols.
* Enter the polynomials in either increasing order of degree (from the lowest degreeterm to the highest) or decreasing order of degree (from the highest degree term to the lowest). For example, only 1+x^2+x^7+x^8 or x^8+x^7+x^2+1 is allowed. Any other permutation is not allowed. For example x^7+1+x^2+x^8 is not allowed.
* Enter the encoding polynomial in the field and click on <b>Submit</b>.
* The correctness of the entered answer is displayed in <b>Observations</b>.
* <b>Next</b> - Displays the next example.
* <b>Previous</b> - Displays the previous example.
---
**Procedure for Decoding:**
* Typing alpha on the keyboard displays the symbol &alpha;. Expressions like &alpha;<sup>2</sup> can be entered in the field by typing alpha^2 on the keyboard.
* Initially, all the fields except those for entering syndromes are disabled. Subsequent fields will be enabled sequentially upon correct entry of preceding ones.
* Enter the syndromes in the provided fields. Begin with the leftmost field for the first syndrome, then proceed to the adjacent fields for the subsequent syndromes After entering all the syndromes in the corresponding fields, click on <b>Submit</b>.
* The correctness of the entered answer is displayed in <b>Observations</b>.
* If all the syndromes are entered correctly, the syndrome fields will be disabled and the first row of the table is enabled.
* In d<sub>&#956;</sub>, l<sub>&#956;</sub> and &#956;-l<sub>&#956;</sub> fields, only numbers needs to be enetered.
* In the &#963;<sup>(&#956;)</sup>(X) field, polynomial needs to be entered.
* Use only <b>upper case</b> X in the field. Enter the polynomials in increasing order of degree (from the lowest degree term to the highest). The coefficient (which might be a power of &alpha;) must always precede the variable X. For example the polynomial in a field can be 1+α^2X+α^3X^2.
* α^3X^2+α^2X+1 is not allowed because the degree is not from lowest to highest. 1+Xα^2+α^3X^2 is not allowed because α^2, which is the coefficient is written after X.
* Enter values in all the fields of a row and click on <b>Submit</b>.
* The correctness of the entered answer is displayed in <b>Observations</b>.
* If the answer is correct, proceed to the next row. Values in the fields in a row cannot be entered without completing the previous row correctly.
* After successfully entering all the rows in the table, enter the roots of the error locator polynomial in the fields provided and click on <b>Submit</b>.
* The correctness of the entered answer is displayed in <b>Observations</b>
* If the answer is correct, the decoded codeword field will be enabled. Enter the decoded codeword and click on <b>Submit</b>.
* If the correct answer is entered, a message indicating that the decoding algorithm has been successfully completed will be displayed in <b>Observations</b>.
* <b>Next</b> - Displays the next example.
* <b>Previous</b> - Displays the previous example.
---

							
