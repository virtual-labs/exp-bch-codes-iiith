There are two tasks in Simulation:
<br>
**Procedure for Generator Polynomial:**

1. Initially, all the polynomials are in grey background.
2. Clicking on a polynomial changes its background color from grey to green. All the polynomials with green background are the selected polynomials.
3. To deselect a polynomial, click on it again. Its background color changes back to grey.
4. Select all the minimal polynomials and click on <b>Submit</b>.
5. <b>Observations</b> section displays whether all the correct polynomials are selected or not.
6. If all the correct minimal polynomials have been selected, a field to enter the generator polynomial will be displayed.
7. Use only <b>lower case</b> x in the field. Expressions like x<sup>2</sup> can be entered in the field by typing x^2 on the keyboard.
8. 1, +, x, x^2, x^3, ..., x^10 and their combinations need to be entered in the field in this task. Do not enter any other symbols.
9. Enter the polynomials in either increasing order of degree (from the lowest degree term to the highest) or decreasing order of degree (from the highest degree term to the lowest). For example, only 1+x^2+x^7+x^8 or x^8+x^7+x^2+1 is allowed. Any other permutation is not allowed. For example x^7+1+x^2+x^8 is not allowed.
10. Enter the encoding polynomial in the field and click on <b>Submit</b>.
11. The correctness of the entered answer is displayed in <b>Observations</b>.
12. <b>Next</b> - Displays the next example.
13. <b>Previous</b> - Displays the previous example.
14. <b>Reset</b> - Clears all selected polynomials, input fields, and empties the Observations section for the current example. Use this to start over or try a different selection.

---

**Procedure for Decoding:**

1. Typing alpha on the keyboard displays the symbol &alpha;. Expressions like &alpha;<sup>2</sup> can be entered in the field by typing alpha^2 on the keyboard.
2. Initially, all the fields except those for entering syndromes are disabled. Subsequent fields will be enabled sequentially upon correct entry of preceding ones.
3. Enter the syndromes in the provided fields. Begin with the leftmost field for the first syndrome, then proceed to the adjacent fields for the subsequent syndromes. After entering all the syndromes in the corresponding fields, click on <b>Submit</b>.
4. The correctness of the entered answer is displayed in <b>Observations</b>.
5. If all the syndromes are entered correctly, the syndrome fields will be disabled and the first row of the table is enabled.
6. In d<sub>&#956;</sub>, l<sub>&#956;</sub> and &#956;-l<sub>&#956;</sub> fields, only numbers need to be entered.
7. In the &#963;<sup>(&#956;)</sup>(x) field, polynomial needs to be entered using only <b>lower case</b> x. Enter the polynomials in increasing order of degree (from the lowest degree term to the highest). The coefficient (which might be a power of &alpha;) must always precede the variable x. For example, the polynomial in a field can be 1+α^2x+α^3x^2.
8. α^3x^2+α^2x+1 is not allowed because the degree is not from lowest to highest. 1+xα^2+α^3x^2 is not allowed because α^2, which is the coefficient, is written after x.
9. Enter values in all the fields of a row and click on <b>Submit</b>.
10. The correctness of the entered answer is displayed in <b>Observations</b>.
11. If the answer is correct, proceed to the next row. Values in the fields in a row cannot be entered without completing the previous row correctly.
12. After successfully entering all the rows in the table, enter the roots of the error locator polynomial in the fields provided and click on <b>Submit</b>.
13. The correctness of the entered answer is displayed in <b>Observations</b>.
14. If the answer is correct, the decoded codeword field will be enabled. Enter the decoded codeword and click on <b>Submit</b>.
15. If the correct answer is entered, a message indicating that the decoding algorithm has been successfully completed will be displayed in <b>Observations</b>.
16. <b>Next</b> - Displays the next example.
17. <b>Previous</b> - Displays the previous example.
18. <b>Reset</b> - Clears all input fields, table entries, and empties the Observations section for the current example. Use this to start over or retry the decoding steps.

---
