        var question001 = ["Dans les Jeux de l’Antiquité, les gagnants recevaient une chèvre plutôt qu’une médaille.",
                           "Aux Jeux de 1900, il y avait des courses de ballons à gaz (charlières).",
                           "Londres est la seule ville qui a accueilli trois fois les Jeux olympiques d’été.",
                           "Le drapeau olympique a été utilisé la première fois aux Jeux de 1916.",
                           "Les compétitions artistiques ont fait partie des Jeux olympiques modernes de 1912 à 1948.",
                           "À la cérémonie d’ouverture des Jeux, la délégation grecque ouvre toujours la marche.",
                           "Aux Jeux olympiques de 1924, Robert LeGendre n’a pas gagné de médaille d’or même s’il a été le seul athlète à battre le record du saut en longueur.",
                           "Aucun athlète n’est décédé pendant une compétition olympique.",
                           "L’état du Vatican a envoyé deux fois des athlètes aux Jeux olympiques.",
                           "Le baron Pierre de Coubertin est à l’origine de la renaissance des Jeux olympiques."];

        var options001 = ["<button class=buttons001 onclick=q1i()>Vrai</button><br /><button class=buttons001 onclick=q1c()>Faux</button>"];
        
        var options002 = ["<button class=buttons001 onclick=q2i()>Faux</button><br /><button class=buttons001 onclick=q2c()>Vrai</button>"];
        
        var options003 = ["<button class=buttons001 onclick=q3i()>Faux</button><br /><button class=buttons001 onclick=q3c()>Vrai</button>"];
        
        var options004 = ["<button class=buttons001 onclick=q4i()>Vrai</button><br /><button class=buttons001 onclick=q4c()>Faux</button>"];
        
        var options005 = ["<button class=buttons001 onclick=q5i()>Faux</button><br /><button class=buttons001 onclick=q5c()>Vrai</button>"];
        
        var options006 = ["<button class=buttons001 onclick=q6i()>Faux</button><br /><button class=buttons001 onclick=q6c()>Vrai</button>"];
        
        var options007 = ["<button class=buttons001 onclick=q7i()>Faux</button><br /><button class=buttons001 onclick=q7c()>Vrai</button>"];
        
        var options008 = ["<button class=buttons001 onclick=q8i()>Vrai</button><br /><button class=buttons001 onclick=q8c()>Faux</button>"];
        
        var options009 = ["<button class=buttons001 onclick=q9i()>Vrai</button><br /><button class=buttons001 onclick=q9c()>Faux</button>"];
        
        var options010 = ["<button class=buttons001 onclick=q10i()>Faux</button><br /><button class=buttons001 onclick=q10c()>Vrai</button>"];

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
            message003.innerHTML = "Bravo ! Bonne réponse. C'est FAUX. Dans les Jeux de l’Antiquité, les gagnants recevaient une couronne faite d’un rameau d’olivier.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Suivant</button>";
        }

        function q1i() {
            message003.innerHTML = "Mauvaise réponse. C'est FAUX. Dans les Jeux de l’Antiquité, les gagnants recevaient une couronne faite d’un rameau d’olivier.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Suivant</button>";
        }

        function q2c() {
            message003.innerHTML = "Bonne réponse. C’est VRAI. En 1900, alors que l’aéronautique en était à ses débuts, les courses de ballons à gaz étaient très populaires et figuraient parmi les événements les plus courus des Jeux olympiques et de l’Exposition universelle de Paris.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q2i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. En 1900, alors que l’aéronautique en était à ses débuts, les courses de ballons à gaz étaient très populaires et figuraient parmi les événements les plus courus des Jeux olympiques et de l’Exposition universelle de Paris.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est VRAI. Londres a été l’hôte des Jeux olympiques à trois occasions : en 1908, 1948 et 2012. C’est la seule ville qui a accueilli les Jeux d'été trois fois.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. Londres a été l’hôte des Jeux olympiques à trois occasions : en 1908, 1948 et 2012. C’est la seule ville qui a accueilli les Jeux d'été trois fois.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est FAUX. Le drapeau des Jeux olympiques a été présenté la première fois aux Jeux d’Anvers en 1920. Les Jeux de 1916, prévus à Berlin, n’ont pas eu lieu à cause de la Première Guerre mondiale.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4i() {
            message003.innerHTML = "Mauvaise réponse. C’est FAUX. Le drapeau des Jeux olympiques a été présenté la première fois aux Jeux d’Anvers en 1920. Les Jeux de 1916, prévus à Berlin, n’ont pas eu lieu à cause de la Première Guerre mondiale.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est VRAI. De 1912 à 1948, des médailles étaient décernées dans 5 catégories (architecture, littérature, musique, peinture, sculpture) pour des œuvres d’art ayant un lien avec le sport.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. De 1912 à 1948, des médailles étaient décernées dans 5 catégories (architecture, littérature, musique, peinture, sculpture) pour des œuvres d’art ayant un lien avec le sport.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est VRAI. Durant les cérémonies d’ouverture des Jeux (été comme hiver), c’est toujours la délégation de la Grèce qui ouvre la marche et le pays hôte qui ferme la marche.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. Durant les cérémonies d’ouverture des Jeux (été comme hiver), c’est toujours la délégation de la Grèce qui ouvre la marche et le pays hôte qui ferme la marche.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est VRAI. Robert LeGendre a battu le record du saut de longueur par près de 30 cm (12 po), mais n’a pas gagné de médaille d’or dans cette discipline parce que son saut faisait partie de la compétition du pentathlon.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. Robert LeGendre a battu le record du saut de longueur par près de 30 cm (12 po), mais n’a pas gagné de médaille d’or dans cette discipline parce que son saut faisait partie de la compétition du pentathlon";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est FAUX. Deux athlètes sont morts durant des compétitions olympiques. Francisco Lázar, du Portugal, est décédé d’un problème cardiaque durant le marathon de 1912. Et Knut Jensen, du Danemark, est mort d’un coup de chaleur durant une compétition de cyclisme en 1960. Au moins quatre autres athlètes sont morts durant les entraînements.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8i() {
            message003.innerHTML = "Mauvaise réponse. C’est FAUX. Deux athlètes sont morts durant des compétitions olympiques. Francisco Lázar, du Portugal, est décédé d’un problème cardiaque durant le marathon de 1912. Et Knut Jensen, du Danemark, est mort d’un coup de chaleur durant une compétition de cyclisme en 1960. Au moins quatre autres athlètes sont morts durant les entraînements.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est FAUX. La seule nation souveraine à n’avoir jamais eu de délégation d’athlètes aux Jeux olympiques est le Vatican.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9i() {
            message003.innerHTML = "Mauvaise réponse. C’est FAUX. La seule nation souveraine à n’avoir jamais eu de délégation d’athlètes aux Jeux olympiques est le Vatican.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10c() {
            message003.innerHTML = "Bravo ! Bonne réponse. C’est VRAI. Le baron Pierre de Coubertin est à l’origine de la renaissance des Jeux olympiques. Il croyait que pour rendre le sport plus populaire, il fallait l’internationaliser. C’est pour cette raison qu’en 1894, il a conçu le projet de restaurer les Jeux olympiques.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10i() {
            message003.innerHTML = "Mauvaise réponse. C’est VRAI. Le baron Pierre de Coubertin est à l’origine de la renaissance des Jeux olympiques. Il croyait que pour rendre le sport plus populaire, il fallait l’internationaliser. C’est pour cette raison qu’en 1894, il a conçu le projet de restaurer les Jeux olympiques.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
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
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>REJOUER</button>";
            }
        }

        function repeat001() {
            location.reload();
        }
