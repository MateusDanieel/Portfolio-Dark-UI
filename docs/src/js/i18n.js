// ano/idade dinamico
var age = '';

(function() {
    var today = new Date();
    var year = today.getFullYear();
    var yearCopy = document.getElementById("js-year");
    
    age = year - 1997;
    yearCopy.innerHTML = year;
})();

// textos da página
$.i18n().load({
    br: {
        // NAVBAR
        'menu_sobre': 'Sobre',
        'menu_stacks': 'Stacks',
        'menu_portfolio': 'Portfólio',
        'menu_timeline': 'Timeline',
        'menu_contato': 'Contato',
        'menu_i18n': 'EN',

        // HEADER
        'header_funct': 'Front-End Developer',
        'header_intro': 'Desenvolvedor web front-end de São Paulo - SP.',
        'header_bt': 'Saiba Mais',

        // SOBRE
        'sobre_title': 'Mateus Daniel',
        'sobre_sec_title': 'Quem Sou Eu?',
        
        'sobre_intro_um': `Muito prazer, meu nome é Mateus Daniel, tenho ${age} anos, nascido e criado na cidade de São Paulo - SP.`,

        'sobre_intro_dois': 'Sou formado como Técnico em Informática (o curso atualmente é conhecido como Técnico em Desenvolvimento de Sistemas) pela Escola Técnica Estadual de São Paulo - ETEC, desde 2017, com especialização em Desenvolvimento de Aplicativos para Smartphones em 2020.',

        'sobre_intro_tres': 'Apaixonado por desenvolvimento front-end, procuro estudar constantemente para aprimorar meus conhecimentos. Nos últimos anos venho trabalhando na criação e manutenção de layouts para sistemas on-line, criação e manutenção de páginas para a internet em geral (páginas institucionais, landing pages, etc.), e-mails marketing e templates com stack voltado para HTML5, CSS3, JavaScript e Frameworks diversos.',

        'sobre_intro_quatro': 'Atualmente trabalho para a agência Tritone Interactive.',

        // STACKS
        'stacks_title': 'Stacks & Skills',
        'stacks_legenda_title': 'Nível de Conhecimento:',
        'stacks_legenda_level_low': 'Básico',
        'stacks_legenda_level_medium': 'Intermediário',
        'stacks_legenda_level_high': 'Avançado',

        'stacks_html': 'HTML5',
        'stacks_css': 'CSS3',
        'stacks_js': 'JavaScript',
        'stacks_sass_scss': 'Sass/SCSS',
        'stacks_bootstrap': 'Bootstrap',
        'stacks_dart_flutter': 'Dart/Flutter',
        'stacks_package_managers': 'Package Managers',
        'stacks_task_runners': 'Task Runners',
        'stacks_git': 'GIT - Versionamento',
        'stacks_ide': "IDE's/Text Editors",
        'stacks_agile': 'Métodos Ágeis',
        'stacks_xd': 'Adobe XD/Figma',
        'stacks_photoshop': 'Photoshop',
        'stacks_video': 'Edição de Vídeo',
        'stacks_hardware': 'Hardware',
        'stacks_ux_ui_design': 'UX/UI Design',

        // PORTFOLIO
        'portfolio_title': 'Portfólio',

        'portfolio_legenda_one': 
        '* OBS: Por razões contratuais, a grande maioria dos projetos que desenvolvi e/ou participei não foram listados aqui. Pelo mesmo motivo, alguns projetos foram listados sem o código fonte disponível para consulta.',

        'portfolio_legenda_two': 
        '* OBS²: Algumas imagens foram ocultadas para preservar o sigilo de informações ainda não divulgadas ao público pelo cliente.',

        'portfolio_periodo': 'Período:',
        'portfolio_stacks': 'Stacks:',
        'portfolio_demo': 'Demonstração',
        'portfolio_source_code': 'Source Code',

        // TIMELINE
        'timeline_title': 'Timeline - Como me tornei um desenvolvedor?',
        
        'timeline_p_one': 
        'Em 2003 eu tive o meu primeiro contato com um computador, isso aconteceu na casa da minha avó. Eu me lembro bem de ter que esperar junto com os meus tios até meia-noite ou finais de semana para usar a internet, anos depois fui descobrir que isso era por conta da internet discada.',

        'timeline_p_two': 
        'Meu pai e meu irmão se juntaram para comprar o nosso primeiro PC, e até hoje ainda lembro das configurações: um AMD Athlon equivalente ao Pentium III, com 256 MB de memória RAM, essa máquina durou até meados de 2010 ainda.',

        'timeline_p_three': 
        'Empolgado pela aquisição do nosso computador, eu fiz um curso básico de informática em um Telecentro da região. Lá eu tive aulas de digitação e aprendi a utilizar algumas ferramentas básicas, também tive meu primeiro contato com um sistema operacional baseado em Linux.',

        'timeline_p_four': 
        'Apesar de ter um computador desde 2004, só fui ter acesso a internet em casa no ano de 2007 (que coisa, não?).',

        'timeline_p_five': 
        'Junto com meu irmão montamos um computador por conta própria, adquirindo peça por peça e básicamente usando apenas "sucata". Essa máquina ficou para mim usar e nunca vou esquecer ela: um poderosíssimo processador Intel Pentium II, incríveis 128 MB de memória RAM e um HD com maravilhosos 12 GB de memória.',

        'timeline_p_six': 
        'Em 2008, por influência de um colega da escola, comecei a me interessar por criar blogs. Eu procurava falar sobre coisas que eu gostava, sem me importar muito com a quantidade de visualizações. E foi aí que eu tive meu primeiro contato com o HTML e o CSS, porém não tinha a mínima noção do que estava acontecendo, eu só apagava umas coisas aqui, mudava outras de lugar ali até que uma hora funcionava.',
        'timeline_p_seven': 
        'Em 2009, comecei a fazer alguns trabalhos de montagem e manutenção de computadores.',

        'timeline_p_eight': 
        'Em 2010 eu já tinha plena certeza que queria trabalhar com TI, só não sabia em qual segmento. Nesse mesmo ano meu irmão começou a cursar Análise e Desenvolvimento de Sistemas e tenho que admitir que ele teve certa influência na minha escolha (parcialmente, mas teve). Eu ainda continuava com os meus blogs, porém com um foco totalmente diferente, agora voltado em divulgar meus trabalhos com mods/patches para games, e foi ai que eu aprendi básicamente tudo o que eu sei sobre Photoshop até hoje. Esse blog teve uma boa visibilidade, o que me fez entrar para uma equipe de edição na época e receber convites de outras, mas sempre foi por hobby, nunca fomos remunerados por isso.',

        'timeline_p_nine': 
        'Com um pouco mais de conhecimento e sem precisar do auxílio do meu irmão dessa vez, eu montei um PC "Gamer" pra mim. Com um processador/APU AMD A8 3870K que vinha com uma GPU Radeon HD6550D integrada, 8 GB de RAM DDR3 e HD de 500 GB. Ainda tenho e uso esse PC até os dias atuais, porém ele passou por dois pequenos upgrades em 2016 e em 2018. Conseguir montar meu próprio PC foi uma grande conquista pessoal.',

        'timeline_p_ten': 
        'À essa altura da minha vida, no último ano do ensino médio e trabalhando como estagiário em uma loja de roupas infantis, eu já estava decidido que queria trabalhar com TI há alguns anos. E meu primeiro passo foi estipular como meta passar no vestibular da ETEC para o curso Técnico em Informática. Infelizmente nem tudo são flores, prestei o vestibular no final do ano e por pouco não consegui uma das 40 vagas disponíveis.',

        'timeline_p_eleven': 
        'Estudei a primeira metade do ano para prestar o vestibular para o curso Técnico em Informática da ETEC para o 2º semestre, e dessa vez eu consegui passar com certa facilidade. Foi uma enorme vitória pessoal.',

        'timeline_p_twelve': 
        'Após 1 ano e meio de curso, me formei como Técnico em Informática pela ETEC. O curso abrange muitas áreas, e a matéria que despertou meu interesse logo de cara foi Técnicas de Programação para Internet, que nada mais era que uma sequência de aulas sobre Desenvolvimento Web. Nessa matéria finalmente aprendi HTML e CSS de fato, e também um pouco de PHP, JavaScript e jQuery. O meu grupo ficou encarregado de desenvolver um e-commerce para a loja de roupas que eu trabalhava na época como TCC, com stack voltado para HTML, CSS, JS, jQuery e PHP. Eu e mais um dos membros do grupo ficamos responsáveis pelo front-end e pelo web design do sistema, enquanto os outros dois desenvolveram a parte back-end, mas a gente sempre dava pitacos no back e vice-versa. Conseguimos entregar o projeto de maneira satisfatória e apresentar para os professores com sucesso. A partir desse momento eu tive a plena certeza de que tinha me encontrado profissionalmente: "quero me tornar um desenvolvedor front-end!".',

        'timeline_p_thirteen': 
        'Ainda sem poder arriscar a estabilidade do meu emprego como balconista, optei por utilizar meu tempo livre para dedicar a minha carreira de desenvolvedor, me desdobrando para buscar demandas e estudar ao mesmo tempo, mas tudo deu certo. Em Abril de 2018 apareceu minha primeira oportunidade de trabalhar em um grande projeto, e foi aí que eu participei do desenvolvimento do sistema TST ONLINE, junto com 2 dos meus 3 parceiros de TCC. Atuei como o único front-end do projeto, mas recebi ajudas e dicas dos outros desenvolvedores em relação ao design, afinal eu ainda era bem inexperiente. Nesse projeto eu era responsável pela criação do conceito e desenvolvimento de todas as telas do sistema (páginas, formulários, relatórios, entre outras coisas).',

        'timeline_p_fourteen': 
        'Foi ficando difícil conciliar meu emprego com o projeto, o que fez com que eu pedisse demissão no final do ano para me dedicar totalmente como desenvolvedor.',

        'timeline_p_fifteen': 
        'Com a participação no desenvolvimento de um grande sistema no meu portfólio, isso abriu a possibilidade de trabalhar em mais alguns projetos. Foi também um período de muito estudo, networking com outros desenvolvedores e participação em alguns eventos. Finalizei o ano em busca de uma oportunidade para atuar como desenvolvedor no mercado, para adquirir mais experiência, aplicar meus conhecimentos e me consolidar de vez como um desenvolvedor de fato.',

        'timeline_p_sixteen': 
        'Após alguns dias de muitas entrevistas e ligações, enfim eu consegui uma oportunidade para atuar no mercado. Fui contratado como desenvolvedor front-end pela Tritone Interactive, e até o momento tem sido uma experiência de muito aprendizado. Logo de cara eu já tinha gostado do ambiente, e também fui extremamente bem recebido pelos colaboradores da empresa. Em poucas semanas, conheci novas tecnologias que me ajudaram a melhorar e otimizar (e muito!) o meu trabalho.',

        'timeline_p_seventeen': 
        'Em meados de Julho ingressei no curso de especialização em desenvolvimento de aplicativos para smartphone da ETEC, o qual concluí em Dezembro de 2020 mesmo. Lá aprendi um pouco de Flutter e desenvolvi alguns apps nesse período. Sempre gostei e tinha curiosidade de aprender um pouco de mobile, graças a ETEC eu pude ter uma boa introdução para esse mundo.',

        // CONTATO
        'contato_title': 'Contato',
        'contato_intro':'Para me enviar uma mensagem preencha o formulário abaixo. Irei retornar assim que possível! :D',
        'contato_bt_enviar': 'Enviar',
        'contato_msg_sucess': 'Mensagem enviada com sucesso!',
        'contato_msg_error': 'Oops! Não foi possível enviar sua mensagem, tente novamente mais tarde.',

        // PÁGINA PORTFÓLIO
        'pg_portolio_projetos_pessoais': 'Projetos Pessoais',

        //
        'em_breve': 'Em breve.'

    },
    en: {
        // NAVBAR
        'menu_sobre': 'About',
        'menu_stacks': 'Stacks',
        'menu_portfolio': 'Portfolio',
        'menu_timeline': 'Timeline',
        'menu_contato': 'Contact',
        'menu_i18n': 'PT',

        // HEADER
        'header_funct': 'Front-End Developer',
        'header_intro': 'Front-End Web Developer from Sao Paulo - Brazil.',
        'header_bt': 'See More',

        // SOBRE
        'sobre_title': 'Mateus Daniel',
        'sobre_sec_title': 'About Me',
        
        'sobre_intro_um': `Nice to meet you, my name is Mateus Daniel, I'm ${age} years old, born and raised in Sao Paulo - Brazil.`,

        'sobre_intro_dois': "I'm graduated as a Systems Development Technician by the State Technical School of Sao Paulo, since 2017, with a specialization in Smartphone Application Development in 2020.",

        'sobre_intro_tres': 'Passionate about front-end development, I try to study constantly to improve my knowledge. In recent years I have been working on the creation and maintenance of layouts for online systems, pages for the internet in general (institutional pages, landing pages, etc.), marketing emails and templates with a stack focused on HTML5, CSS3, JavaScript and various frameworks.',

        'sobre_intro_quatro': 'I currently work for the Tritone Interactive agency.',

        // STACKS
        'stacks_title': 'Stacks & Skills',
        'stacks_legenda_title': 'Knowledge level:',
        'stacks_legenda_level_low': 'Basic',
        'stacks_legenda_level_medium': 'Intermediary',
        'stacks_legenda_level_high': 'Advanced',

        'stacks_html': 'HTML5',
        'stacks_css': 'CSS3',
        'stacks_js': 'JavaScript',
        'stacks_sass_scss': 'Sass/SCSS',
        'stacks_bootstrap': 'Bootstrap',
        'stacks_dart_flutter': 'Dart/Flutter',
        'stacks_package_managers': 'Package Managers',
        'stacks_task_runners': 'Task Runners',
        'stacks_git': 'GIT - Version Control',
        'stacks_ide': "IDE's/Text Editors",
        'stacks_agile': 'Agile Methodology',
        'stacks_xd': 'Adobe XD/Figma',
        'stacks_photoshop': 'Photoshop',
        'stacks_video': 'Video Editing',
        'stacks_hardware': 'Hardware', 
        'stacks_ux_ui_design': 'UX/UI Design',

        // PORTFOLIO
        'portfolio_title': 'Portfolio',

        'portfolio_legenda_one': 
        '* NOTE: For contractual reasons, the vast majority of projects I developed and/or participated in were not listed here. For the same reason, some projects were listed without the source code available for consultation.',

        'portfolio_legenda_two': 
        '* NOTE²: Some images were hidden to preserve the confidentiality of information not yet disclosed to the public by the client.',

        'portfolio_periodo': 'Time:',
        'portfolio_stacks': 'Stacks:',
        'portfolio_demo': 'Demo',
        'portfolio_source_code': 'Source Code',

        // TIMELINE
        'timeline_title': 'Timeline - How did I become a developer?',
        
        'timeline_p_one': 
        "In 2003 I had my first contact with a computer, it happened at my grandmother's house. I well remember having to wait with my uncles until midnight or weekends to use the internet, years later I found out that this was because of the dial-up internet.",

        'timeline_p_two': 
        'My father and brother got together to buy our first PC, and to this day I still remember the configurations: an AMD Athlon equivalent to the Pentium III, with 256 MB of RAM, this machine lasted until mid-2010 still.',

        'timeline_p_three': 
        'Excited to buy our computer, I took a basic computer course at a Telecentre in the region. There I took typing classes and learned to use some basic tools, I also had my first contact with an operating system based on Linux.',

        'timeline_p_four': 
        'Despite having a computer since 2004, I only had access to the internet at home in 2007.',

        'timeline_p_five': 
        'Together with my brother we built a computer on our own, buying it piece by piece and basically just using "scrap". This machine was left for me to use and I will never forget it: a very powerful Intel Pentium II processor, an incredible 128 MB of RAM and a HD with a wonderful 12 GB of space.',

        'timeline_p_six': 
        "In 2008, influenced by a schoolmate, I started to get interested in creating blogs. I tried to talk about things I liked, not caring much about the amount of views. And that's when I had my first contact with HTML and CSS, but I didn't have the slightest idea of ​​what was going on, I just deleted a few things here, moved others there until one hour it worked.",
        'timeline_p_seven': 
        'In 2009, I started doing some computer assembly and maintenance work.',

        'timeline_p_eight': 
        "In 2010 I was quite sure that I wanted to work with IT, I just didn't know in which segment. That same year my brother started studying Systems Analysis and Development and I have to admit that he had some influence on my choice (partially, but he did). I still continued with my blogs, but with a totally different focus, now focused on promoting my work with mods/patches for games, and that's where I basically learned everything I know about Photoshop so far. This blog had good visibility, which made me join an editing team at the time and receive invitations from others, but it was always a hobby, we were never paid for it.",

        'timeline_p_nine': 
        "With a little more knowledge and without needing my brother's help this time, I built a 'Gamer' PC for myself. With an AMD A8 3870K processor/APU that came with an integrated Radeon HD6550D GPU, 8GB of DDR3 RAM and 500GB HDD. I still own and use this PC to this day, but it underwent two minor upgrades in 2016 and 2018. Being able to build my own PC was a great personal achievement.",

        'timeline_p_ten': 
        "At this point in my life, in my senior year of high school and working as an intern at a children's clothing store, I had already decided that I wanted to work in IT for a few years. And my first step was to set a goal to pass the ETEC entrance exam for the Computer Technician course. Unfortunately, not everything is rosy, I took the entrance exam at the end of the year and almost didn't get one of the 40 vacancies available.",

        'timeline_p_eleven': 
        'I studied the first half of the year to take the entrance exam for the Technician course in Informatics at ETEC for the 2nd semester, and this time I managed to pass with some ease. It was a huge personal victory.',

        'timeline_p_twelve': 
        'After 1 year and a half of course, I graduated as a Computer Technician at ETEC. The course covers many areas, and the subject that piqued my interest right away was Internet Programming Techniques, which was nothing more than a sequence of classes on Web Development. In this course I finally learned HTML and CSS, as well as some PHP, JavaScript and jQuery. My group was in charge of developing an e-commerce for the clothing store where I worked at the time as TCC, with a stack focused on HTML, CSS, JS, jQuery and PHP. One of the group members and I were responsible for the front-end and the web design of the system, while the other two developed the back-end part, but we always worked on the back and vice versa. We were able to deliver the project satisfactorily and successfully present it to the teachers. From that moment on I was completely sure that I had found myself professionally: "I want to become a front-end developer!".',

        'timeline_p_thirteen': 
        "Even without being able to risk the stability of my job as a clerk, I chose to use my free time to dedicate my career as a developer, unfolding myself to seek demands and study at the same time, but everything worked out. In April 2018 my first opportunity to work on a big project appeared, and that's when I participated in the development of the TST ONLINE system, along with 2 of my 3 TCC partners. I acted as the only front-end of the project, but I received help and tips from other developers regarding the design, after all I was still quite inexperienced. In this project I was responsible for creating the concept and developing all the screens of the system (pages, forms, reports, among other things).",

        'timeline_p_fourteen': 
        'It became difficult to reconcile my job with the project, which made me resign at the end of the year to dedicate myself fully as a developer.',

        'timeline_p_fifteen': 
        'By participating in the development of a large system in my portfolio, this opened up the possibility of working on a few more projects. It was also a period of much study, networking with other developers and participation in some events. I ended the year looking for an opportunity to work as a developer in the market, to acquire more experience, apply my knowledge and consolidate myself once and for all as a real developer.',

        'timeline_p_sixteen': 
        "After a few days of many interviews and calls, I finally got an opportunity to work in the market. I was hired as a front-end developer by Tritone Interactive, and so far it has been a very learning experience. Right away I liked the environment, and I was also extremely well received by the company's employees. In a few weeks, I discovered new technologies that helped me improve and optimize (a lot!) my work.",

        'timeline_p_seventeen': 
        "In mid-July I joined ETEC's specialization course in smartphone application development, which I completed in December 2020. There I learned a bit of Flutter and developed some apps during this period. I always liked and was curious to learn a little about mobile, thanks to ETEC I was able to have a good introduction to this world.",

        // PÁGINA PORTFÓLIO
        'pg_portolio_projetos_pessoais': 'Personal Projects',

        // CONTATO
        'contato_title': 'Contact',
        'contato_intro':'To send me a message, fill in the form below. I will return as soon as possible! :D',
        'contato_bt_enviar': 'Send',
        'contato_msg_sucess': 'Message sent successfully!',
        'contato_msg_error': 'Oops! Your message could not be sent, please try again later.',
        
        //
        'em_breve': 'Coming soon.'
    }
});

function changeLocale(locale) {

    $.i18n({
        locale: locale
    });

    $('[data-i18n]').i18n();

}

$(function () {

    var lang = document.querySelector('html');
    var inputEmail = document.querySelector('.sec-contato input[type=email]');
    var textarea = document.querySelector('.sec-contato textarea');
    var btMenu = document.getElementById('bt-transl');

    btMenu.setAttribute('data-locale', 'br');
    
    $('.lang__bt').on('click', function() {
        var locale = $(this).data('locale');
        
        if(locale == 'br') {
            lang.setAttribute('lang', 'pt-br');
            inputEmail.setAttribute('placeholder', 'Seu e-mail');
            textarea.setAttribute('placeholder', 'Escreva sua mensagem ...');
            btMenu.setAttribute('data-locale', 'en');
        } else {
            lang.setAttribute('lang', 'en-US');
            inputEmail.setAttribute('placeholder', 'Your email');
            textarea.setAttribute('placeholder', 'Your message ...');
            btMenu.setAttribute('data-locale', 'br');
        }

        changeLocale(locale);
    });

    
    $(btMenu).on('click', function() {
        
        if(lang.getAttribute('lang') != 'pt-br') {
            lang.setAttribute('lang', 'pt-br');
            btMenu.setAttribute('data-locale', 'en');
            inputEmail.setAttribute('placeholder', 'Seu e-mail');
            textarea.setAttribute('placeholder', 'Escreva sua mensagem ...');
            
            changeLocale('br');
        } else {
            lang.setAttribute('lang', 'en-US');
            btMenu.setAttribute('data-locale', 'br');
            inputEmail.setAttribute('placeholder', 'Your email');
            textarea.setAttribute('placeholder', 'Your message ...');

            changeLocale('en');
        }
    });
    

});

changeLocale('br');