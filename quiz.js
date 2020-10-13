        var question001 = ["Dans les Jeux de l’Antiquité, les gagnants recevaient une chèvre plutôt qu’une médaille.",
                           "Question2.",
                           "Question3.",
                           "Question4.",
                           "Question5.",
                           "Question6.",
                           "Question7.",
                           "Question8.",
                           "Question9.",
                           "Question10."];

        var options001 = ["<button class=buttons001 onclick=q1i()>Vrai</button><br /><br /><button class=buttons001 onclick=q1c()>Faux</button>"];
        
        var options002 = ["<button class=buttons001 onclick=q1c()>Faux</button><br /><br /><button class=buttons001 onclick=q1i()>Vrai</button>"];
        
        var options003 = ["<button class=buttons001 onclick=q1c()>Vrai</button><br /><br /><button class=buttons001 onclick=q1i()>Faux</button>"];
        
        var options004 = ["<button class=buttons001 onclick=q1i()>Vrai</button><br /><br /><button class=buttons001 onclick=q1c()>Faux</button>"];
        
        var options005 = ["<button class=buttons001 onclick=q1c()>Faux</button><br /><br /><button class=buttons001 onclick=q1i()>Vrai</button>"];
        
        var options006 = ["<button class=buttons001 onclick=q1i()>Faux</button><br /><br /><button class=buttons001 onclick=q1c()>Vrai</button>"];
        
        var options007 = ["<button class=buttons001 onclick=q1c()>Vrai</button><br /><br /><button class=buttons001 onclick=q1i()>Faux</button>"];
        
        var options008 = ["<button class=buttons001 onclick=q1c()>Faux</button><br /><br /><button class=buttons001 onclick=q1i()>Vrai</button>"];
        
        var options009 = ["<button class=buttons001 onclick=q1c()>Vrai</button><br /><br /><button class=buttons001 onclick=q1i()>Faux</button>"];
        
        var options010 = ["<button class=buttons001 onclick=q1i()>Vrai</button><br /><br /><button class=buttons001 onclick=q1c()>Faux</button>"];

        var a = 0;
        a++;
        var b = 0;
        b++;

        function begin001() {
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
        }

        function q1c() {
            message003.innerHTML = "Correct";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Suivant</button>";
        }

        function q1i() {
            message003.innerHTML = "Incorrect";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Suivant</button>";
        }

        function next001() {
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            } else {
                message001.innerHTML = "Fin du Quizz !";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Réessayer</button>";
            }
        }

        function repeat001() {
            location.reload();
        }
