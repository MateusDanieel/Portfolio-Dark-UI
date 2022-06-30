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
    },
    en: {
        // NAVBAR
        'menu_sobre': 'About',
        'menu_stacks': 'Stacks',
        'menu_portfolio': 'Portfolio',
        'menu_timeline': 'Timeline',
        'menu_contato': 'Contact',

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
    }
});

function changeLocale(locale) {

    $.i18n({
        locale: locale
    });

    $('[data-i18n]').i18n();

}

$(function() {

    $('button').on('click', function() {

        var locale = $(this).data('locale');
        var lang = document.querySelector('html');

        locale == 'br' ? 
        lang.setAttribute('lang', 'pt-br') : 
        lang.setAttribute('lang', 'en-US');

        changeLocale(locale);
    });

});

changeLocale('br');