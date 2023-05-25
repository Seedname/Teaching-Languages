let cookie = document.cookie;
let isEnglish = true;

$(document).ready(function(){
    $(".searchButton").click(function(){
        if (document.getElementsByClassName('searchTerm')[0].value != "") {
            $("#chat").css("display", "block");
            $("#chat").animate({
                // top: '78%',
                height: '300px',
                width: '45%'    
            })
            $(".wrap").animate({
                width: '50%'
            });
            $('#overlay2').animate({
                left: '55%'
            });
        }
    }); 
});

function setCookie() {
    const pos = cookie.indexOf("language=")+9
    if (cookie.substring(pos, pos+7) == "Spanish") {
        spanish();
        isEnglish = false;
    } else {
        english();
    }
}

var l = window.location.href.split("/")[3].split(".")[0]

function spanish() {
    let image = document.getElementById("flag");
    image.src = "es_flag.png";
    image.style.right = "10px";

    document.querySelector("#header > div:nth-child(2) > a").textContent = "PÁGINA PRINCIPAL";
    document.querySelector("#header > div:nth-child(3) > a").textContent = "MÁS";
    document.querySelector("#header > div:nth-child(4) > a").textContent = "RECURSOS ADICIONALES";
    document.querySelector("#header > div:nth-child(5)").textContent = "IDIOMA:";

    if (l == "") {
        document.querySelector("#searchTerm0").placeholder = "¿Que quieres saber?";
    } else if (l == "about") {
        document.querySelector("body > div > div.contentWrap > h1:nth-child(4)").textContent = "¿Que es AP WE Service?";
        document.querySelector("body > div > div.contentWrap > h1:nth-child(6)").textContent = "Nuestra Mision";
        document.querySelector("body > div > div.contentWrap > h1:nth-child(8)").textContent = "Conoce al Equipo";

        document.querySelector("body > div > div.contentWrap > div:nth-child(5)").textContent = "AP WE Service es un programa diseñado por College Board y WE. Este programa trae nuestro aprendizaje basado en servicios reconocidos internacionalmente con recursos de clases AP. El programa ayuda a los maestros y estudiantes a identificar oportunidades locales y globales que traducen el aprendizaje en el aula a la resolución práctica de problemas. Los estudiantes definen qué forma tomará su servicio, y aplican el contenido y las habilidades que han aprendido en su curso AP a situaciones del mundo real que requieren innovación, creatividad y organización.";
        document.querySelector("body > div > div.contentWrap > div:nth-child(7)").innerHTML = "La misión de TuCanSpeak's es a ayudar a superar la barrera de idioma para personas hispanohablantes. Mas de 26 millones de personas en los Estados Unidos tienen dificultad con el idioma de Ingles. Esto puedo causar mal entendimiento , frustración, y violencia. Nuestra misión es reducir este número por transduciendo además de ensenado ambos español e inglés.<br><br><strong>Publico:</strong> Personas que están tratando de aprender otro lenguaje.<br><strong>Meta:</strong> Hacer el aprendizaje de inglés o español más fácil.<br><strong>Método:</strong> Utilizar la tecnología del Chat GPT API Chatbot a traducir palabras y oraciones además de enseñar lo básico de español. "
    } else if (l == "resources") {
        document.querySelector("body > h1").textContent = "Recursos Adicionales";
        document.querySelector("body > div.pageContainer > div.contentWrap > div").innerHTML = '<strong>FluentU:</strong><br><a target="_blank" href="https://www.fluentu.com/">Language Immersion Online | Learn a Language with Videos | FluentU</a><br>Sitio web y aplicación que utiliza videospara desarrollar habilidades de conversación. Cuesta $29.99 por mes.<br><br> <strong>BBC Learning English:</strong><br><a target="_blank" href="https://www.bbc.co.uk/learningenglish">BBC Learning English - BBC Learning English - Homepage</a><br>Sitio web que utiliza nuevos artículos y videos para mejorar el dominio del idioma inglés. De uso gratuito.<br><br> <strong>Duolingo:</strong><br><a target="_blank" href="https://www.duolingo.com/">Duolingo - The world\'s best way to learn a language</a><br>Sitio web y aplicación que utiliza actividades basados en el lenguaje para ayudar a aprender una variedad de idiomas. El sitio web es de uso gratuito, pero el acceso completo a todas las funciones requiere una suscripción de $6.99 por mes.<br><br> <strong>British Council:</strong><br><a target="_blank" href="https://learnenglish.britishcouncil.org/">Learn English Online | British Council</a><br>Sitio web que utiliza cursos extensos realizados por los mejores profesores de inglés del mundo. El costo general es gratuito, pero algunos cursos tienen diferentes tarifas.<br><br> <strong>Cambridge English:</strong><br><a target="_blank" href="https://www.cambridgeenglish.org/learning-english/">Learning English | Cambridge English | Learning English | Cambridge English</a><br>Una colección completa de recursos tanto para estudiantes de inglés como para maestros. También tiene evaluaciones de nivel de inglés. De uso gratuito.<br><br> <strong>Bussu:</strong><br><a target="_blank" href="https://www.busuu.com/en/course/learn-english-online">Learn English Online: Free Courses for All Levels - Busuu</a><br>Sigue un plan de estudio para una mejor comprensión del Ingles. De uso gratuito, pero puede incluir un plan de pago donde los precios varían.<br><br> <strong>WordReference:</strong><br><a target="_blank" href="https://forum.wordreference.com/">WordReference Forums</a><br>Sus forums permiten a las personas conversar con usuarios de inglés. De uso gratuito.<br><br> <strong>Lingua:</strong><br><a target="_blank" href="https://lingua.com/">Lingua.com - Free tools for language learning</a><br>Utiliza varias herramientas para mejorar la comprensión del inglés. El costo es gratuito, pero incluye contenido premium a un precio de $9.99 por año.<br><br> <strong>Daily Grammar:</strong><br><a target="_blank" href="https://www.dailygrammar.com/index.html">Daily Grammar - Improve your writing with our free grammar lessons</a><br>Utiliza actividades informativas para mejorar la comprensión del inglés. De uso gratuito.<br><br> <strong>Using English:</strong><br><a target="_blank" href="https://www.usingenglish.com/">UsingEnglish.com: English Language (ESL) Learning Online</a><br>Utiliza una recopilación de recursos para enseñar inglés, hecha por estudiantes. De uso gratuito.<br></br>';
    }

    document.querySelector("#footer").style.bottom = "0px";
}

function english() {
    let image = document.getElementById("flag");
    image.src = "en_flag.png";
    image.style.right = "0px";

    document.querySelector("#header > div:nth-child(2) > a").textContent = "HOME";
    document.querySelector("#header > div:nth-child(3) > a").textContent = "ABOUT";
    document.querySelector("#header > div:nth-child(4) > a").textContent = "ADDITIONAL RESOURCES";
    document.querySelector("#header > div:nth-child(5)").textContent = "LANGUAGE:";

    if (l == "") {
        document.querySelector("#searchTerm0").placeholder = "What would you like to know?";
    } else if (l == "about") {
        document.querySelector("body > div > div.contentWrap > h1:nth-child(4)").textContent = "What is AP WE Service?";
        document.querySelector("body > div > div.contentWrap > h1:nth-child(6)").textContent = "Our Mission";
        document.querySelector("body > div > div.contentWrap > h1:nth-child(8)").textContent = "Meet the Team";

        document.querySelector("body > div > div.contentWrap > div:nth-child(5)").textContent = "AP We service is a program designed by College Board and WE. This program makes learning based on internationally-recognized services with AP class resources. It helps both teachers and students identify opportunities at both the local and global levels that can be used for learning through practical problem-solving. Students get to define what form their service will take, they apply the content and skills they've learned during their AP class to real-world situations that require innovation, creativity, and organization to solve.";
        document.querySelector("body > div > div.contentWrap > div:nth-child(7)").innerHTML = "TúCanSpeak's mission is helping to overcome the language barrier that Spanish-speaking people face. Over 26 million people in the United States have difficulties with the English language. This can cause misunderstandings, frustration, and violence. Our mission is to reduce this number by aiding in the learning of both languages.<br> <br><strong>Public:</strong> People who are trying to learn another language. <br><strong>Goal:</strong> Make learning English or Spanish easier. <br><strong>Method:</strong> Using Chat GPT API Chatbot technology to translate words, sentences, and teach the basics of the languages by practicing conversations.";
    } else if (l == "resources") {
        document.querySelector("body > h1").textContent = "Additional Resources";
        document.querySelector("body > div.pageContainer > div.contentWrap > div").innerHTML = '<strong>FluentU:</strong><br><a target="_blank" href="https://www.fluentu.com/">Language Immersion Online | Learn a Language with Videos | FluentU</a><br>Website and app that uses English speaking videos to build conversational skills. Costs $29.99 per month.<br><br> <strong>BBC Learning English:</strong><br><a target="_blank" href="https://www.bbc.co.uk/learningenglish">BBC Learning English - BBC Learning English - Homepage</a><br>Website that uses new articles and videos to further English language proficiency. Free to use.<br><br> <strong>Duolingo:</strong><br><a target="_blank" href="https://www.duolingo.com/">Duolingo - The world\'s best way to learn a language</a><br>Website and app that uses small language based puzzles to help learn a variety of languages. The website is free to use but full access to all features requires a subscription of $6.99 per month.<br><br> <strong>British Council:</strong><br><a target="_blank" href="https://learnenglish.britishcouncil.org/">Learn English Online | British Council</a><br>Website that uses extensive courses which made by the world\'s best English teachers. General cost is free, but some courses have varying fees.<br><br> <strong>Cambridge English:</strong><br><a target="_blank" href="https://www.cambridgeenglish.org/learning-english/">Learning English | Cambridge English | Learning English | Cambridge English</a><br>A comprehensive collection of resources for both English learners and teachers. Also has English level assessments. Free to use.<br> <strong>Bussu:</strong><br><a target="_blank" href="https://www.busuu.com/en/course/learn-english-online">Learn English Online: Free Courses for All Levels - Busuu</a><br>Follows a study plan for better understanding of a target language. Free to use but may include a paid plan whose prices vary.<br><br> <strong>WordReference:</strong><br><a target="_blank" href="https://forum.wordreference.com/">WordReference Forums</a><br>Its forums allow people to converse with fluent English users. Free to use.<br><br> <strong>Lingua:</strong><br><a target="_blank" href="https://lingua.com/">Lingua.com - Free tools for language learning</a><br>Uses various tools to better English understanding. Cost is free but includes premium content at a price of $9.99 per year.<br><br> <strong>Daily Grammar:</strong><br><a target="_blank" href="https://www.dailygrammar.com/index.html">Daily Grammar - Improve your writing with our free grammar lessons</a><br>Uses informative activities to further English understanding. Free to use.<br><br> <strong>Using English:</strong><br><a target="_blank" href="https://www.usingenglish.com/">UsingEnglish.com: English Language (ESL) Learning Online</a><br>Uses a compilation of resources to teach English, made by students. Free to use.<br>';
    }

    document.querySelector("#footer").style.bottom = "0px";
}

function changeLanguage() {
    if (isEnglish) {
        isEnglish = false;
        document.cookie = "language=Spanish";
        spanish();
    } else {
        isEnglish = true;
        document.cookie = "language=English";
        english();
    }
}