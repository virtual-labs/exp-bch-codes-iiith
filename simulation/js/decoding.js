const r2c2 = document.getElementById("table-1-row-2-column-2");
const r2c3 = document.getElementById("table-1-row-2-column-3");
const r2c4 = document.getElementById("table-1-row-2-column-4");
const r2c5 = document.getElementById("table-1-row-2-column-5");

const r3c2 = document.getElementById("table-1-row-3-column-2");
const r3c3 = document.getElementById("table-1-row-3-column-3");
const r3c4 = document.getElementById("table-1-row-3-column-4");
const r3c5 = document.getElementById("table-1-row-3-column-5");

const r4c2 = document.getElementById("table-1-row-4-column-2");
const r4c3 = document.getElementById("table-1-row-4-column-3");
const r4c4 = document.getElementById("table-1-row-4-column-4");
const r4c5 = document.getElementById("table-1-row-4-column-5");

const r5c2 = document.getElementById("table-1-row-5-column-2");
const r5c3 = document.getElementById("table-1-row-5-column-3");
const r5c4 = document.getElementById("table-1-row-5-column-4");
const r5c5 = document.getElementById("table-1-row-5-column-5");

const r6c2 = document.getElementById("table-1-row-6-column-2");
// const r6c3 = document.getElementById("table-1-row-6-column-3");
// const r6c4 = document.getElementById("table-1-row-6-column-4");
// const r6c5 = document.getElementById("table-1-row-6-column-5");

const submit1 = document.getElementById("submit-1");
const submit2 = document.getElementById("submit-2");
const submit3 = document.getElementById("submit-3");
const submit4 = document.getElementById("submit-4");
const submit5 = document.getElementById("submit-5");
const submit6 = document.getElementById("submit-6");
const submit7 = document.getElementById("submit-7");
const submit8 = document.getElementById("submit-8");
const submit9 = document.getElementById("submit-9");
const submit10 = document.getElementById("submit-10");
const submit11 = document.getElementById("submit-11");
const submit12 = document.getElementById("submit-12");
const submit13 = document.getElementById("submit-13");
const submit14 = document.getElementById("submit-14");
const submit15 = document.getElementById("submit-15");
const submit16 = document.getElementById("submit-16");
const submit17 = document.getElementById("submit-17");
const submit18 = document.getElementById("submit-18");

const t2r2c2 = document.getElementById("table-2-row-2-column-2");
const t2r2c3 = document.getElementById("table-2-row-2-column-3");
const t2r2c4 = document.getElementById("table-2-row-2-column-4");
const t2r2c5 = document.getElementById("table-2-row-2-column-5");

const t2r3c2 = document.getElementById("table-2-row-3-column-2");
const t2r3c3 = document.getElementById("table-2-row-3-column-3");
const t2r3c4 = document.getElementById("table-2-row-3-column-4");
const t2r3c5 = document.getElementById("table-2-row-3-column-5");

const t2r4c2 = document.getElementById("table-2-row-4-column-2");
const t2r4c3 = document.getElementById("table-2-row-4-column-3");
const t2r4c4 = document.getElementById("table-2-row-4-column-4");
const t2r4c5 = document.getElementById("table-2-row-4-column-5");

const t2r5c2 = document.getElementById("table-2-row-5-column-2");
const t2r5c3 = document.getElementById("table-2-row-5-column-3");
const t2r5c4 = document.getElementById("table-2-row-5-column-4");
const t2r5c5 = document.getElementById("table-2-row-5-column-5");

const t2r6c2 = document.getElementById("table-2-row-6-column-2");
const t2r6c3 = document.getElementById("table-2-row-6-column-3");
const t2r6c4 = document.getElementById("table-2-row-6-column-4");
const t2r6c5 = document.getElementById("table-2-row-6-column-5");

const t2r7c2 = document.getElementById("table-2-row-7-column-2");
const t2r7c3 = document.getElementById("table-2-row-7-column-3");
const t2r7c4 = document.getElementById("table-2-row-7-column-4");
const t2r7c5 = document.getElementById("table-2-row-7-column-5");

const t2r8c2 = document.getElementById("table-2-row-8-column-2");
// const t2r8c3 = document.getElementById("table-2-row-8-column-3");
// const t2r8c4 = document.getElementById("table-2-row-8-column-4");
// const t2r8c5 = document.getElementById("table-2-row-8-column-5");



function replaceAlpha(input) {
    input.value = input.value.replace(/alpha/gi, "α");
}

function check1() {
    const syndrome1 = document.getElementById("syndrome-1").value;
    const syndrome2 = document.getElementById("syndrome-2").value;
    const syndrome3 = document.getElementById("syndrome-3").value;
    const syndrome4 = document.getElementById("syndrome-4").value;
    const obs = document.getElementById("observations1");


    if ((syndrome1.length == 0) || (syndrome2.length == 0) || (syndrome3.length) == 0 || (syndrome4.length) == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the syndromes.";
    }

    else if ((syndrome1 == "α^2") && (syndrome2 == "α^4") && (syndrome3 == "α^11") && (syndrome4 == "α^8")) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit1.setAttribute("disabled", true);

        document.getElementById("syndrome-1").setAttribute("disabled", true);
        document.getElementById("syndrome-2").setAttribute("disabled", true);
        document.getElementById("syndrome-3").setAttribute("disabled", true);
        document.getElementById("syndrome-4").setAttribute("disabled", true);

        submit2.removeAttribute("disabled");
        r2c2.removeAttribute("disabled");
        r2c3.removeAttribute("disabled");
        r2c4.removeAttribute("disabled");
        r2c5.removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}



function confirmtable1() {


    const obs = document.getElementById("observations1");

    if (r2c2.value.length == 0 || r2c3.value.length == 0 || r2c4.value.length == 0 || r2c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (r2c2.value == "1" && r2c3.value == "α^2" && r2c4.value == "0" && r2c5.value == "0") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit2.setAttribute("disabled", true);
        r2c2.setAttribute("disabled", true);
        r2c3.setAttribute("disabled", true);
        r2c4.setAttribute("disabled", true);
        r2c5.setAttribute("disabled", true);

        submit3.removeAttribute("disabled");
        r3c2.removeAttribute("disabled");
        r3c3.removeAttribute("disabled");
        r3c4.removeAttribute("disabled");
        r3c5.removeAttribute("disabled");


    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable2() {


    const obs = document.getElementById("observations1");

    if (r3c2.value.length == 0 || r3c3.value.length == 0 || r3c4.value.length == 0 || r3c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (r3c2.value == "1+α^2X" && r3c3.value == "0" && r3c4.value == "1" && r3c5.value == "0") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit3.setAttribute("disabled", true);
        r3c2.setAttribute("disabled", true);
        r3c3.setAttribute("disabled", true);
        r3c4.setAttribute("disabled", true);
        r3c5.setAttribute("disabled", true);

        submit4.removeAttribute("disabled");
        r4c2.removeAttribute("disabled");
        r4c3.removeAttribute("disabled");
        r4c4.removeAttribute("disabled");
        r4c5.removeAttribute("disabled");


    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable3() {


    const obs = document.getElementById("observations1");

    if (r4c2.value.length == 0 || r4c3.value.length == 0 || r4c4.value.length == 0 || r4c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (r4c2.value == "1+α^2X  " && r4c3.value == "α" && r4c4.value == "1" && r4c5.value == "1") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit4.setAttribute("disabled", true);
        r4c2.setAttribute("disabled", true);
        r4c3.setAttribute("disabled", true);
        r4c4.setAttribute("disabled", true);
        r4c5.setAttribute("disabled", true);

        submit5.removeAttribute("disabled");
        r5c2.removeAttribute("disabled");
        r5c3.removeAttribute("disabled");
        r5c4.removeAttribute("disabled");
        r5c5.removeAttribute("disabled");


    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function confirmtable4() {


    const obs = document.getElementById("observations1");

    if (r5c2.value.length == 0 || r5c3.value.length == 0 || r5c4.value.length == 0 || r5c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (r5c2.value == "1+α^2X+α^14X^2" && r5c3.value == "0" && r5c4.value == "2" && r5c5.value == "1") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit5.setAttribute("disabled", true);
        r5c2.setAttribute("disabled", true);
        r5c3.setAttribute("disabled", true);
        r5c4.setAttribute("disabled", true);
        r5c5.setAttribute("disabled", true);

        submit6.removeAttribute("disabled");
        r6c2.removeAttribute("disabled");
        // r6c3.removeAttribute("disabled");
        // r6c4.removeAttribute("disabled");
        // r6c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable5() {


    const obs = document.getElementById("observations1");

    if (r6c2.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (r6c2.value == "1+α^2X+α^14X^2") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit6.setAttribute("disabled", true);
        r6c2.setAttribute("disabled", true);
        // r6c3.setAttribute("disabled", true);
        // r6c4.setAttribute("disabled", true);
        // r6c5.setAttribute("disabled", true);

        submit7.removeAttribute("disabled");
        document.getElementById("root-1").removeAttribute("disabled");
        document.getElementById("root-2").removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function check2() {
    const root1 = document.getElementById("root-1").value;
    const root2 = document.getElementById("root-2").value;
    const obs = document.getElementById("observations1");


    if ((root1.length == 0) || (root2.length == 0)) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the error vectors.";
    }

    else if (((root1 == "α^4") && (root2 == "α^10")) || ((root2 == "α^4") && (root1 == "α^10"))) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit7.setAttribute("disabled", true);
        document.getElementById("root-1").setAttribute("disabled", true);
        document.getElementById("root-2").setAttribute("disabled", true);

        submit8.removeAttribute("disabled");
        document.getElementById("decode-ex-1").removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function check3() {
    const decoded = document.getElementById("decode-ex-1").value;
    const obs = document.getElementById("observations1");


    if (decoded.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the decoded vector.";
    }

    else if (decoded == "110011100100000") {
        obs.innerHTML = "<b>Correct Answer!!! You have successfully completed the decoding algorithm</b>";
        obs.style.color = "green";
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

// -----------------------------------Second Example ----------------------------------
function check4() {
    const syndrome1 = document.getElementById("syndrome-5").value;
    const syndrome2 = document.getElementById("syndrome-6").value;
    const syndrome3 = document.getElementById("syndrome-7").value;
    const syndrome4 = document.getElementById("syndrome-8").value;
    const syndrome5 = document.getElementById("syndrome-9").value;
    const syndrome6 = document.getElementById("syndrome-10").value;
    const obs = document.getElementById("observations2");


    if ((syndrome1.length == 0) || (syndrome2.length == 0) || (syndrome3.length) == 0 || (syndrome4.length) == 0 || (syndrome5.length) == 0 || (syndrome6.length) == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the syndromes.";
    }

    else if ((syndrome1 == "α^5") && (syndrome2 == "α^10") && (syndrome3 == "α^8") && (syndrome4 == "α^5") && (syndrome5 == "0") && (syndrome6 == "α^")) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit9.setAttribute("disabled", true);

        document.getElementById("syndrome-5").setAttribute("disabled", true);
        document.getElementById("syndrome-6").setAttribute("disabled", true);
        document.getElementById("syndrome-7").setAttribute("disabled", true);
        document.getElementById("syndrome-8").setAttribute("disabled", true);
        document.getElementById("syndrome-9").setAttribute("disabled", true);
        document.getElementById("syndrome-10").setAttribute("disabled", true);
    
        submit10.removeAttribute("disabled");
        t2r2c2.removeAttribute("disabled");
        t2r2c3.removeAttribute("disabled");
        t2r2c4.removeAttribute("disabled");
        t2r2c5.removeAttribute("disabled");
    }


    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable6() {


    const obs = document.getElementById("observations2");

    if (t2r2c2.value.length == 0 || t2r2c3.value.length == 0 || t2r2c4.value.length == 0 || t2r2c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r2c2.value == "1" && t2r2c3.value == "α^5" && t2r2c4.value == "0" && t2r2c5.value == "0") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit10.setAttribute("disabled", true);
        t2r2c2.setAttribute("disabled", true);
        t2r2c3.setAttribute("disabled", true);
        t2r2c4.setAttribute("disabled", true);
        t2r2c5.setAttribute("disabled", true);

        submit11.removeAttribute("disabled");
        t2r3c2.removeAttribute("disabled");
        t2r3c3.removeAttribute("disabled");
        t2r3c4.removeAttribute("disabled");
        t2r3c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable7() {


    const obs = document.getElementById("observations2");

    if (t2r3c2.value.length == 0 || t2r3c3.value.length == 0 || t2r3c4.value.length == 0 || t2r3c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r3c2.value == "1+α^5X" && t2r3c3.value == "0" && t2r3c4.value == "1" && t2r3c5.value == "0") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit11.setAttribute("disabled", true);
        t2r3c2.setAttribute("disabled", true);
        t2r3c3.setAttribute("disabled", true);
        t2r3c4.setAttribute("disabled", true);
        t2r3c5.setAttribute("disabled", true);

        submit12.removeAttribute("disabled");
        t2r4c2.removeAttribute("disabled");
        t2r4c3.removeAttribute("disabled");
        t2r4c4.removeAttribute("disabled");
        t2r4c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable8() {


    const obs = document.getElementById("observations2");

    if (t2r4c2.value.length == 0 || t2r4c3.value.length == 0 || t2r4c4.value.length == 0 || t2r4c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r4c2.value == "1+α^5X" && t2r4c3.value == "α^2" && t2r4c4.value == "1" && t2r4c5.value == "1") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit12.setAttribute("disabled", true);
        t2r4c2.setAttribute("disabled", true);
        t2r4c3.setAttribute("disabled", true);
        t2r4c4.setAttribute("disabled", true);
        t2r4c5.setAttribute("disabled", true);

        submit13.removeAttribute("disabled");
        t2r5c2.removeAttribute("disabled");
        t2r5c3.removeAttribute("disabled");
        t2r5c4.removeAttribute("disabled");
        t2r5c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function confirmtable9() {


    const obs = document.getElementById("observations2");

    if (t2r5c2.value.length == 0 || t2r5c3.value.length == 0 || t2r5c4.value.length == 0 || t2r5c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r5c2.value == "1+α^5X+α^12X^2" && t2r5c3.value == "0" && t2r5c4.value == "2" && t2r5c5.value == "1") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit13.setAttribute("disabled", true);
        t2r5c2.setAttribute("disabled", true);
        t2r5c3.setAttribute("disabled", true);
        t2r5c4.setAttribute("disabled", true);
        t2r5c5.setAttribute("disabled", true);

        submit14.removeAttribute("disabled");
        t2r6c2.removeAttribute("disabled");
        t2r6c3.removeAttribute("disabled");
        t2r6c4.removeAttribute("disabled");
        t2r6c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable10() {


    const obs = document.getElementById("observations2");

    if (t2r6c2.value.length == 0 || t2r6c3.value.length == 0 || t2r6c4.value.length == 0 || t2r6c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r6c2.value == "1+α^5X+α^12X^2" && t2r6c3.value == "1" && t2r6c4.value == "2" && t2r6c5.value == "2") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit14.setAttribute("disabled", true);
        t2r6c2.setAttribute("disabled", true);
        t2r6c3.setAttribute("disabled", true);
        t2r6c4.setAttribute("disabled", true);
        t2r6c5.setAttribute("disabled", true);

        submit15.removeAttribute("disabled");
        t2r7c2.removeAttribute("disabled");
        t2r7c3.removeAttribute("disabled");
        t2r7c4.removeAttribute("disabled");
        t2r7c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function confirmtable11() {


    const obs = document.getElementById("observations2");

    if (t2r7c2.value.length == 0 || t2r7c3.value.length == 0 || t2r7c4.value.length == 0 || t2r7c5.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r7c2.value == "1+α^5X+αX^2+α^3X^3" && t2r7c3.value == "0" && t2r7c4.value == "3" && t2r7c5.value == "2") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit15.setAttribute("disabled", true);
        t2r7c2.setAttribute("disabled", true);
        t2r7c3.setAttribute("disabled", true);
        t2r7c4.setAttribute("disabled", true);
        t2r7c5.setAttribute("disabled", true);

        submit16.removeAttribute("disabled");
        t2r8c2.removeAttribute("disabled");
        // t2r8c3.removeAttribute("disabled");
        // t2r8c4.removeAttribute("disabled");
        // t2r8c5.removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function confirmtable12() {


    const obs = document.getElementById("observations2");

    if (t2r8c2.value.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter all the values.";
    }

    else if (t2r8c2.value == "1+α^5X+αX^2+α^3X^3") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit16.setAttribute("disabled", true);
        t2r8c2.setAttribute("disabled", true);
        // t2r8c3.setAttribute("disabled", true);
        // t2r8c4.setAttribute("disabled", true);
        // t2r8c5.setAttribute("disabled", true);

        submit17.removeAttribute("disabled");
        document.getElementById("root-3").removeAttribute("disabled");
        document.getElementById("root-4").removeAttribute("disabled");
        document.getElementById("root-5").removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function check5() {
    const root3 = document.getElementById("root-3").value;
    const root4 = document.getElementById("root-4").value;
    const root5 = document.getElementById("root-5").value;
    const obs = document.getElementById("observations2");


    if ((root3.length == 0) || (root4.length == 0) || (root5.length == 0)) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the error vectors.";
    }

    else if ((root3 == "α^3") && (root4 == "α^4") && (root5 == "α^5")) {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
        obs.style.color = "green";

        submit17.setAttribute("disabled", true);
        document.getElementById("root-3").setAttribute("disabled", true);
        document.getElementById("root-4").setAttribute("disabled", true);
        document.getElementById("root-5").setAttribute("disabled", true);

        submit18.removeAttribute("disabled");
        document.getElementById("decode-ex-2").removeAttribute("disabled");
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function check6() {
    const decoded = document.getElementById("decode-ex-2").value;
    const obs = document.getElementById("observations2");


    if (decoded.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the decoded vector.";
    }

    else if (decoded == "010011010111100") {
        obs.innerHTML = "<b>Correct Answer!!!</b> You have successfully completed the decoding algorithm";
        obs.style.color = "green";
    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}


function next() {

    document.getElementById("example1").style.display="none";
    document.getElementById("example2").style.display="block";

    submit9.removeAttribute("disabled");

    document.getElementById("syndrome-5").removeAttribute("disabled");
    document.getElementById("syndrome-6").removeAttribute("disabled");
    document.getElementById("syndrome-7").removeAttribute("disabled");
    document.getElementById("syndrome-8").removeAttribute("disabled");
    document.getElementById("syndrome-9").removeAttribute("disabled");
    document.getElementById("syndrome-10").removeAttribute("disabled");

    submit10.setAttribute("disabled", true);
    submit11.setAttribute("disabled", true);
    submit12.setAttribute("disabled", true);
    submit13.setAttribute("disabled", true);
    submit14.setAttribute("disabled", true);
    submit15.setAttribute("disabled", true);
    submit16.setAttribute("disabled", true);
    submit17.setAttribute("disabled", true);
    submit18.setAttribute("disabled", true);

    t2r2c2.setAttribute("disabled", true);
    t2r2c3.setAttribute("disabled", true);
    t2r2c4.setAttribute("disabled", true);
    t2r2c5.setAttribute("disabled", true);

    t2r3c2.setAttribute("disabled", true);
    t2r3c3.setAttribute("disabled", true);
    t2r3c4.setAttribute("disabled", true);
    t2r3c5.setAttribute("disabled", true);

    t2r4c2.setAttribute("disabled", true);
    t2r4c3.setAttribute("disabled", true);
    t2r4c4.setAttribute("disabled", true);
    t2r4c5.setAttribute("disabled", true);

    t2r5c2.setAttribute("disabled", true);
    t2r5c3.setAttribute("disabled", true);
    t2r5c4.setAttribute("disabled", true);
    t2r5c5.setAttribute("disabled", true);

    t2r6c2.setAttribute("disabled", true);
    t2r6c3.setAttribute("disabled", true);
    t2r6c4.setAttribute("disabled", true);
    t2r6c5.setAttribute("disabled", true);
    
    t2r7c2.setAttribute("disabled", true);
    t2r7c3.setAttribute("disabled", true);
    t2r7c4.setAttribute("disabled", true);
    t2r7c5.setAttribute("disabled", true);

    t2r8c2.setAttribute("disabled", true);
    // t2r8c3.setAttribute("disabled", true);
    // t2r8c4.setAttribute("disabled", true);
    // t2r8c5.setAttribute("disabled", true);

    document.getElementById("root-3").setAttribute("disabled", true);
    document.getElementById("root-4").setAttribute("disabled", true);
    document.getElementById("root-5").setAttribute("disabled", true);

    document.getElementById("decode-ex-2").setAttribute("disabled", true);

    document.getElementById("form-9").reset();
    document.getElementById("form-10").reset();
    document.getElementById("form-11").reset();
    document.getElementById("form-12").reset();
    document.getElementById("form-13").reset();
    document.getElementById("form-14").reset();
    document.getElementById("form-15").reset();
    document.getElementById("form-16").reset();
    document.getElementById("form-17").reset();
    document.getElementById("form-18").reset();
    document.getElementById("observations2").innerHTML = "";
}


function previous() {

    document.getElementById("example1").style.display="block";
    document.getElementById("example2").style.display="none";

    submit1.removeAttribute("disabled");
    document.getElementById("syndrome-1").removeAttribute("disabled");
    document.getElementById("syndrome-2").removeAttribute("disabled");
    document.getElementById("syndrome-3").removeAttribute("disabled");
    document.getElementById("syndrome-4").removeAttribute("disabled");

    submit2.setAttribute("disabled", true);
    submit3.setAttribute("disabled", true);
    submit4.setAttribute("disabled", true);
    submit5.setAttribute("disabled", true);
    submit6.setAttribute("disabled", true);
    submit7.setAttribute("disabled", true);
    submit8.setAttribute("disabled", true);

    r2c2.setAttribute("disabled", true);
    r2c3.setAttribute("disabled", true);
    r2c4.setAttribute("disabled", true);
    r2c5.setAttribute("disabled", true);

    r3c2.setAttribute("disabled", true);
    r3c3.setAttribute("disabled", true);
    r3c4.setAttribute("disabled", true);
    r3c5.setAttribute("disabled", true);

    r4c2.setAttribute("disabled", true);
    r4c3.setAttribute("disabled", true);
    r4c4.setAttribute("disabled", true);
    r4c5.setAttribute("disabled", true);

    r5c2.setAttribute("disabled", true);
    r5c3.setAttribute("disabled", true);
    r5c4.setAttribute("disabled", true);
    r5c5.setAttribute("disabled", true);

    r6c2.setAttribute("disabled", true);
    // r6c3.setAttribute("disabled", true);
    // r6c4.setAttribute("disabled", true);
    // r6c5.setAttribute("disabled", true);

    document.getElementById("root-1").setAttribute("disabled", true);
    document.getElementById("root-2").setAttribute("disabled", true);

    document.getElementById("decode-ex-1").setAttribute("disabled", true);


    document.getElementById("form-1").reset();
    document.getElementById("form-2").reset();
    document.getElementById("form-3").reset();
    document.getElementById("form-4").reset();
    document.getElementById("form-5").reset();
    document.getElementById("form-6").reset();
    document.getElementById("form-7").reset();
    document.getElementById("form-8").reset();
    document.getElementById("observations1").innerHTML = "";

}
