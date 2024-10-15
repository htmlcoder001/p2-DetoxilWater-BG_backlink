document.addEventListener('DOMContentLoaded', function () {
    //native js

    setTimeout(function () {
        var romFooter = document.querySelector('.create_rom_footer');

        romFooter.insertAdjacentHTML("afterbegin", '' +
            // '<div class="ev-footer__logo">' +
            // ' <svg class="ev-footer__svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 127 157"> ' +
            // '<path d="M96.7,129.8c-0.4,0.7-0.8,1.1-0.9,1.5c-2,7.4-7.1,9.5-14.2,8.5c-2.9-0.4-6-0.1-9.2-0.1c-0.7,2.4-1.2,4.8-2,7.1c-0.6,1.8-1.2,3.6-2.2,5.1c-2.5,4.3-6.7,4.4-9,0c-1.9-3.7-3-7.8-4.6-12.3c-3.9,0-8.3-0.3-12.6,0.1c-4.8,0.4-7.6-1.4-9.1-5.8c-0.5-1.4-1.3-2.6-2.1-4.1c-5.7,3.7-8.7,9.1-11.1,14.9c-0.7,1.6-1.1,3.3-1.7,4.9c-1.6,4.1-3.9,5.8-7.7,5.7c-4.1-0.1-6.4-2.8-6.8-6.3c-1-7.3-2-14.6-1.8-21.9c0.6-17.7,7.1-33.2,19-46.5c0.8-0.9,1.1-2.4,1.2-3.7C24.2,48,34.9,23.1,58.4,4.5c4.8-3.8,5.6-3.8,10.4,0c20.1,15.7,31,36.7,35.3,61.5c0.5,2.9,0.8,5.9,1,8.9c0.3,3.2,1.3,5.8,3.4,8.3c16,19.1,20.1,41.3,15.7,65.3c-0.8,4.2-3.5,6.8-6.7,7c-4.1,0.2-6.2-1.6-8.3-6c-2.7-5.6-5.7-11-8.8-16.3C99.6,131.9,98.1,131,96.7,129.8zM63.5,12.1c-2.8,2.7-5.5,4.9-7.9,7.4c-26.7,27.9-31.8,73.9-15,108.7c0.4,0.9,1.4,2.1,2.2,2.2c3.7,0.2,7.4,0.1,10.7,0.1c-0.4-13.6-0.8-26.7-1.2-39.8c-0.1-4.2,1.7-7.4,5.7-8.1c4-0.6,8.4-0.6,12.3,0.4c1.9,0.5,4.4,3.5,4.6,5.5c0.4,8,0.1,16-0.1,24c-0.2,5.9-0.7,11.8-1.1,18.1c2.6,0,4.9-0.3,7.1,0.1c4,0.6,5.9-1.2,7.4-4.9c10.7-26,11.3-52.1,1.3-78.4C84,33.4,75.6,21.7,63.5,12.1zM21.2,95.5c-8.1,10.7-13.3,33.8-9.6,43.8c3.3-7.1,7.7-13.2,14.2-17.6c0.6-0.4,1.1-1.7,0.9-2.4C25,111.4,23.1,103.5,21.2,95.5z M116.1,138.2c2.2-14.3-3.1-35.1-10.4-42.3c-1.7,8.2-3.5,16.7-5,23.9C106.2,126.3,111.3,132.4,116.1,138.2zM61.3,91.4c0.5,12.1,1,24.2,1.6,37.1c0.9-1,1.1-1.1,1.2-1.3c0.5-11.3,1.1-22.6,1.6-33.9C65.7,90.2,64,90.5,61.3,91.4z"/> ' +
            // '<path d="M84.2,56.2c0,11.5-9.1,20.6-20.6,20.5c-11.4,0-20.8-9.4-20.8-20.7c0-11.3,9.4-20.7,20.7-20.8C75.1,35.1,84.2,44.3,84.2,56.2zM63.8,44.7c-6.4-0.1-11.2,4.5-11.3,10.9c-0.1,6.7,4.4,11.6,10.9,11.7c6.5,0.1,11.5-4.7,11.7-11C75.1,49.9,70.1,44.8,63.8,44.7z"/> ' +
            // '</svg> ' +
            // '</div> ' +
            '<a class="ev-footer__link" target="_blank" href="privacy.html">empty</a>');

        var colorText = romFooter.getAttribute('data-color_text'),
            colorLink = romFooter.getAttribute('data-color_link'),
            colorLogo = romFooter.getAttribute('data-color_logo'),
            backgroundColor = romFooter.getAttribute('data-background-color'),
            head = document.querySelector('head'),
            romText = document.querySelectorAll('.rom_p'),
            romLink = document.querySelectorAll('.ev-footer__link'),
            romIcon = document.querySelectorAll('.ev-footer__logo svg path');

        for (let i = 0; i < romText.length; i++) {
            romText[i].style.color = colorText;
        }
        ;
        for (let i = 0; i < romLink.length; i++) {
            romLink[i].style.color = colorLink;
        }
        ;
        for (let i = 0; i < romIcon.length; i++) {
            romIcon[i].style.fill = colorLogo;
        }
        ;
        romFooter.style.background = backgroundColor;

        head.insertAdjacentHTML("afterbegin", '<style>.ev-footer, .create_rom_footer{display:flex;align-items:center;padding:15px 0;justify-content:center;flex-direction:column}.ev-footer__logo svg{display:flex;width:45px;height:45px}.ev-footer__logo a{text-decoration:none;font-size:14px;font-family:inherit}.ev-footer__link{display:flex;text-decoration:underline}.ev-footer__link:hover{text-decoration:none}:active,:focus,:hover,:visited,a,a:active,a:focus,a:hover,a:visited{outline:0!important}::-moz-focus-inner{border:0;outline:0}</style>')


        //new
        var windowLang = window.language,
            everadLink = document.querySelector('.ev-footer__link'),
            everadPrivacy = {
                bg: 'Правила за поверителност',
                en: 'Privacy policy',
                hu: 'Adatvédelem',
                de: 'Datenschutzpolitik',
                el: 'Πολιτική απορρήτου',
                ge: 'კონფიდენციალობის პოლიტიკა',
                es: 'Politica de privacidad',
                it: 'Informativa sulla privacy',
                lv: 'Privatumo politika',
                lt: 'Privatumo politika',
                pl: 'Polityka prywatnośći',
                pt: 'Politica de confidencialidade',
                ro: 'Politica de confidențialitate',
                md: 'Politica de confidențialitate',
                sk: 'Zásady ochrany osobných údajov',
                sl: 'Pravilnik o zasebnosti',
                fr: 'Politique de confidentialité',
                cz: 'Ochrana osobních údajů',
                hr: 'Politika povjerljivosti'
            };

        if (everadPrivacy[windowLang]) {
            everadLink.innerHTML = everadPrivacy[windowLang];
        }
        else {
            everadLink.innerHTML = everadPrivacy.en;
        }
    });


});