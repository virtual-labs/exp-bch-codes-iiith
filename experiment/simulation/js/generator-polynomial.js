function change1(id) {
    const background = document.getElementById(id).style.backgroundColor;


    if (document.getElementById("submit-1").getAttribute("disabled") != "true") {
        if (background == "rgb(26, 255, 0)") {
            document.getElementById(id).style.background = "rgb(200, 200, 200)";
        }

        else {
            document.getElementById(id).style.background = "rgb(26, 255, 0)";
        }
    }
}

function change2(id) {
    const background = document.getElementById(id).style.backgroundColor;


    if (document.getElementById("submit-2").getAttribute("disabled") != "true") {
        if (background == "rgb(26, 255, 0)") {
            document.getElementById(id).style.background = "rgb(200, 200, 200)";
        }

        else {
            document.getElementById(id).style.background = "rgb(26, 255, 0)";
        }
    }
}


function check1() {
    const bg1 = document.getElementById("ex1-p1").style.backgroundColor;
    const bg2 = document.getElementById("ex1-p2").style.backgroundColor;
    const bg3 = document.getElementById("ex1-p3").style.backgroundColor;
    const bg4 = document.getElementById("ex1-p4").style.backgroundColor;
    const bg5 = document.getElementById("ex1-p5").style.backgroundColor;
    const bg6 = document.getElementById("ex1-p6").style.backgroundColor;
    const obs = document.getElementById("observations1");


    if ((bg1 != "rgb(26, 255, 0)") && (bg2 != "rgb(26, 255, 0)") && (bg3 != "rgb(26, 255, 0)")
        && (bg4 != "rgb(26, 255, 0)") && (bg5 != "rgb(26, 255, 0)") && (bg6 != "rgb(26, 255, 0)")) {
        obs.style.color = "black";
        obs.innerHTML = "Select the polynomials.";
    }

    else if ((bg1 != "rgb(26, 255, 0)") && (bg2 != "rgb(26, 255, 0)") && (bg3 == "rgb(26, 255, 0)")
        && (bg4 == "rgb(26, 255, 0)") && (bg5 != "rgb(26, 255, 0)") && (bg6 != "rgb(26, 255, 0)")) {

        obs.style.color = "green";
        obs.innerHTML = "<b>Correct Answer!!!</b><br>Now enter the generator polynomial";

        document.getElementById("example1-part2").style.display = "block";
        document.getElementById("submit-1").setAttribute("disabled", true);
        document.getElementById("next-1").style.display = "none";

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
    const bg1 = document.getElementById("ex2-p1").style.backgroundColor;
    const bg2 = document.getElementById("ex2-p2").style.backgroundColor;
    const bg3 = document.getElementById("ex2-p3").style.backgroundColor;
    const bg4 = document.getElementById("ex2-p4").style.backgroundColor;
    const bg5 = document.getElementById("ex2-p5").style.backgroundColor;
    const bg6 = document.getElementById("ex2-p6").style.backgroundColor;
    const obs = document.getElementById("observations2");


    if ((bg1 != "rgb(26, 255, 0)") && (bg2 != "rgb(26, 255, 0)") && (bg3 != "rgb(26, 255, 0)")
        && (bg4 != "rgb(26, 255, 0)") && (bg5 != "rgb(26, 255, 0)") && (bg6 != "rgb(26, 255, 0)")) {
        obs.style.color = "black";
        obs.innerHTML = "Select the polynomials.";
    }

    else if ((bg1 != "rgb(26, 255, 0)") && (bg2 != "rgb(26, 255, 0)") && (bg3 == "rgb(26, 255, 0)")
        && (bg4 == "rgb(26, 255, 0)") && (bg5 == "rgb(26, 255, 0)") && (bg6 != "rgb(26, 255, 0)")) {

        obs.style.color = "green";
        obs.innerHTML = "<b>Correct Answer!!!</b><br>Now enter the generator polynomial";

        document.getElementById("example2-part2").style.display = "block";
        document.getElementById("submit-2").setAttribute("disabled", true);
        document.getElementById("previous-1").style.display = "none";

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


function verify1() {
    const ans1 = document.getElementById("math-field-1").value;
    const obs = document.getElementById("observations1");


    if (ans1.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the polynomial.";
    }

    else if (ans1 == "1+x^4+x^6+x^7+x^8" || ans1 == "x^8+x^7+x^6+x^4+1") {
        obs.innerHTML = "<b>Correct Answer!!!</b>";
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

function verify2() {
    const ans2 = document.getElementById("math-field-2").value;
    const obs = document.getElementById("observations2");


    if (ans2.length == 0) {
        obs.style.color = "black";
        obs.innerHTML = "Enter the polynomial.";
    }

    else if (ans2 == "1+x+x^2+x^4+x^5+x^8+x^10" || ans2 == "x^10+x^8+x^5+x^4+x^2+x+1") {
        if (obs.innerHTML == "<b>Correct Answer!!!</b>") {
            obs.innerHTML = "<b>Correct Again!!!</b>";
            obs.style.color = "green";
        }

        else {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color = "green";
        }
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

function page1() {
    document.getElementById("example1").style.display = "block";
    document.getElementById("example2").style.display = "none";

    document.getElementById("ex1-p1").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex1-p2").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex1-p3").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex1-p4").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex1-p5").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex1-p6").style.background = "rgb(200, 200, 200)";

    document.getElementById("example1-part2").style.display = "none";
    document.getElementById("submit-1").removeAttribute("disabled");
    document.getElementById("next-1").style.display = "block";
    document.getElementById("form1").reset();

    document.getElementById("observations1").innerHTML = "";
}

function page2() {
    document.getElementById("example1").style.display = "none";
    document.getElementById("example2").style.display = "block";

    document.getElementById("ex2-p1").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex2-p2").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex2-p3").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex2-p4").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex2-p5").style.background = "rgb(200, 200, 200)";
    document.getElementById("ex2-p6").style.background = "rgb(200, 200, 200)";

    document.getElementById("example2-part2").style.display = "none";
    document.getElementById("submit-2").removeAttribute("disabled");
    document.getElementById("previous-1").style.display = "block";
    document.getElementById("form2").reset();

    document.getElementById("observations2").innerHTML = "";
}