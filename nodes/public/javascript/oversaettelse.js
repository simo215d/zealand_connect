

 //primære methode som kalder de andre
 document.addEventListener('DOMContentLoaded', () => { 
    let lang = document.documentElement.lang; // skaffer lang
    brugStrings(lang);
});
function brugStrings(lang) {
    var langdata = getLangdata();
    //køre igennem alt i dokumentet, leder efter data-key keys i html
    document.querySelectorAll('html [data-key]').forEach(element => {
        if(lang.includes('da')) {
            //console.log('stopper her')
             return;
        }

        //for hvert data-key værdi, leder den efter det i json navngivet langdata
        let key = element.getAttribute('data-key');

        if (!langdata.languages[lang].strings.hasOwnProperty(key)) {
            return;
        }

        if(key.includes('placeholder')) { // beregnet til input, så placeholder kan vises på dansk og engelsk
            element.placeholder = langdata.languages[lang].strings[key];
            return;
        }

        if(key.includes('input')) { // beregnet til input, så placeholder kan vises på dansk og engelsk
            element.value = langdata.languages[lang].strings[key];
            return;
        }

        if(key.includes('html')) {
            element.innerHTML = langdata.languages[lang].strings[key];
            return;
        }

        if (key.includes('title')) {
            element.textContent = langdata.languages[lang].strings[key][0];
            element.title = langdata.languages[lang].strings[key][1];
            return;
        }

        element.textContent = langdata.languages[lang].strings[key];
    });
}

function getLangdata() {
    var temp = {"languages":{
        "en": {
            "strings": {
                // Mixed elements
                "studerende": "Students",
                "virksomhed": "Business",
                "labelPaakraevet": "Required",
                "labelValgfri": "Optional",
                "labelFirmanavn": "Company Name",
                "labelLogo": "Company Logo",
                "labelAdresse": "Address",
                "labelHjemmeside": "Website",
                "labelDirektoer": "CEO",
                "labelLand": "Country",
                "labelVaelgFil": "Select File",
                "labeladgangskode": "Password",
                "opretBruger": "Sign Up",
                "inputNulstilAdgangskode": "Reset Password",
                "inputGemAendringer": "Save Changes",
                "placeholderadgangskode": "Password",
                "labelgentagAdgangskode": "Repeat Password",
                "placeholdergentagAdgangskode": "Repeat Password",
                "husk-email": "Remember Email",
                "cookie": "Cookies must be enabled in your browser",
                "placeholdernavn": "Name",
                "placeholderefternavn": "Last name",
                "labelcvr": "CVR-Number",
                "placeholdercpr": "CPR-Number",
                "placeholdercvr": "CVR-Number",
                "labelBy": "City",
                "placeholderBy": "City",
                "labelPostnummer": "City code",
                "placeholderPostnummer": "City code",
                "labelGentagEmail": "Repeat Email",
                "placeholderGentagEmail": "Repeat Email",
                "labelTelefonnummer": "Cell phone number",
                "placeholderTelefonnummer": "Cell phone number",
                "opretBruger": "Create User",
                "sletBruger": "Delete User",
                "opret": "Create",
                "slet": "Delete",
                "eller": "Or",
                "uddannelser": "Educations",
                "opretGoogle": "Sign up with Google",
                "administrationsøkonom": "Administration Economist",
                "autoteknolog": "Auto technologist",
                "Byggetekniker": "Construction technician",
                "Datamatiker": "Computer scientist",
                "ElInstallatør": "Electrician",
                "Finansøkonom": "Financial economist",
                "Handelsøkonom": "Business economist",
                "Jordbrugsteknolog":"Agricultural technologist",
                "Laborant": "Laboratory Technician",
                "Logistikøkonom": "Logistics economist",
                "Markedsføringsøkonom": "Marketing economist",
                "Multimediedesigner": "Multimedia designer",
                "Procesteknolog": "Process technologist",
                "Produktionsteknolog": "Production technologist",
                "Serviceøkonom": "Service economist",
                "VVSInstallatør": "Plumbing installer",
                "dokumenter": "Documents",
                "stilling": "Position",
                "Efternavn": "Last Name",
                "placeholderEfternavn": "Last name",
                "Fornavn": "First name",
                "placeholderFornavn": "First name",
                "kontaktperson": "Contact person",
                "beskrivelse": "Description",
                "CVR": "CVR-Number",
                "land": "Country",
                "adresse": "Address",
                "postnummerogby": "Zip code and city",
                "email": "Corporation email",
                "navn": "Corporation name",
                "oplysninger": "Corporation informations",
                "telefon": "Cel phone number",
                "direktoer": "Director",
                "adminFunktion": "Administrative functions",
                "opretUddannelse": "Create education",
                "sletUddannelse": "Delete education",
                "uddannelse": "Education",

                // Frontpage
                "Arbejdstid_og_laeringsmaal": "Working time and learning objective",
                "Arbejdstid_og_laeringsmaal_body_html": "The intern must work 37 hours per week, incl. the work on an internship report in which the student will be examined after the internship. If the working time is outside normal working days, this must be agreed and stated in the internship agreement.<br><br>" +
                "The student’s tasks must be relevant and meet the learning objectives within the study programme in question. The tasks, which must be approved by the internship coordinator at Zealand, may be helpful in the daily work, in the conduction of analyses, development tasks etc.",
                
                "Loen": "Salary",
                "Loen_body_html": "The internship is unpaid – however, the internship is paid for students attending the Commerce Management study programme (Danish: handelsøkonom).<br><br>" +
                "The student may receive a gratuity from the company upon completion of the internship. Such gratuity is not considered as salary but as an appreciation of the student’s effort and work during the internship.",
                
                "Forsikring": "Insurance",
                "Forsikring_body": "According to the Danish Workers’ Compensation Act (Danish: arbejdsskadesikringsloven) section 48 and 49, the internship company is obliged to insure the student during the internship period, as long as the internship takes place in Denmark.",

                "Praktikaftale": "Internship agreement",
                "Praktikaftale_body_html": "Zealand’s internship agreement is digital.<br><br>" +
                "The agreement is completed by the student, containing information on the student and the internship company. The internship coordinator at Zealand approves the internship agreement before it is sent to the company and the student for approval. For further questions regarding internships, please contact your internship coordinator.",
                
                "Praktikperiode": "Internship period",
                "Praktikperiode_body_html": "Overview of internship periods for the study programmes" + '<img src="/images/praktikperioder.jpg">',

                "For_virksomheden": "For companies",
                "For_virksomheden_body_html": "As part of the study programmes at Zealand, our students must do an internship. As a company, you have the opportunity to get an unpaid intern for 3 months. However, some study programmes have other internship agreements as regards duration, or the internship may be paid (read more under Salary).<br><br>" +
                "An internship serves multiple purposes and is very rewarding for the company as well as for the student. Our students are ready to contribute with their broad theoretical knowledge. In the company, the students have the opportunity to put their skills in practice and thus get valuable specific experience in return.<br><br>" + 
                "The objective of the internship is to combine theories and tools from the study programme with the specific and practical challenges which companies meet every day.<br><br>" +
                "The company appoints a contact person for the intern. This person is in contact with the student on a daily basis and offers the opportunity to guide and help the student during the internship. Moreover, the contact person will have to complete a digital evaluation of the student and the cooperation with Zealand upon completion of the internship.",
                
                "For_studerende": "For students",
                "For_studerende_body": "As a student at Zealand, an internship is a mandatory part of your study programme. The duration of the internship period depends on the study programme the student is following (see the schedule under Internship period).",

                "ZealandConnect_body": "Create an advertisement on ZealandConnect and find your next intern. In this advertisement, you describe what you can offer the student during the internship. If you want to search for an intern on your own, you can also screen the students’ resumes (CVs) and contact them if their skills meet your needs.",

                "forside_slogan": "ZealandConnect - create your future",
                "forside_slogan_body": "With ZealandConnect you can easily find your future internship or workplace as you will find all vacancies here.",

                "student_quick_access_headline" : "For students",
                "student_quick_access_btn": "Find your next job or internship here. You can also increase your chances by creating a resume (CV).",
                "student_quick_access_internship_headline": "Browse posts",
                "student_quick_access_internship_btn": "Browse a list of posts published by companies.",
                "student_quick_access_CV_headline": "Create CV",
                "student_quick_access_CV_btn": "Create a CV or edit an existing CV.",
                "company_quick_access_headline" : "For companies",
                "company_quick_access_btn": "Make your company visible to students by creating internship advertisements or job vacancies. You can also search for a student on your own by screening the available resumes (CVs).",
                "company_quick_access_CV_headline": "Browse CV list",
                "company_quick_access_CV_btn": "Find a suitable intern for your company.",
                "company_quick_access_post_headline": "Create post",
                "company_quick_access_post_btn": "Make your company visible to students by creating internship advertisements or job vacancies.",

                // Log ind som studerende
                "Log_paa_med_din_organizationskonto": "Log in to your account",
                "Log_paa": "Log in",
                "login_help": "Use your EASJ email to log in",
                "forgot_password": 'Forgot your password? Send a text message with the word "kodeord" to 50 76 27 10.',
                "email_placeholder": "someone@example.com",
                "password_placeholder": "Password",

                // Navbar
                "aKontakt": "Contact",
                "aAlleCVer": "All resumes",
                "aAllePraktikopslag": "All company posts",
                "aLavPraktikopslag": "Create Internship post",
                "aVirksomheder": "Companies",
                "aOpslag": "Posts",
                "aFaktaOmPraktik": "About internship",
                "aAdministratorfunktioner": "Administrator functions",
                "aPraktikForloebet": "Internship Course",
                "aArbejdstidOgLæringsmål": "Working hours and Learning Objectives",
                "aLoen": "Salary",
                "aSamarbajdeOgSparring": "Cooperation and Sparring",
                "aForsikring": "Insurance",
                "aKontaktperson": "Contact",
                "aPraktikkontrakten": "Internship Contract",
                "aEvtProblemer": "Issues",
                "aForStuderende": "For Students",
                "aLogin": "Login",
                "aLogud": "Log out",
                "aProfil": "Profile",
                "aMitCV": "My resume",
                "aMinePraktikOpslag": "My internship posts",
                "aOpretBruger": "Create user",

                // search-cv
                "CV'er": "CV's",
                "Uddannelser_html": 'Education <img src="images/chevron-right.svg" width="12" height="12">',
                "Land_html": 'Country <img src="images/chevron-right.svg" width="12" height="12">',
                "Indland": "Domestic",
                "Udland": "Abroad",
                "resultater": "results",
                "Sortering": "Sort by",
                "Senest_opdateret": "Recently updated",
                "Raekkefoelge": "Order",
                "Faldende": "Descending",
                "Stigende": "Ascending",

                //Pagination
                "Forrige": "Previous",
                "Naeste": "Next",

                //Uddannelser
                "Datamatiker": "Computer Scientist",
                "Handelsøkonom": "Commerce Management",
                "Finansøkonom": "Financial Management",
                "International Handel og Markedsføring": "International Sales and Marketing",
                //Innovation og Entrepreneurship
                "Bygningskontruktør": "Constructing Architect",
                "Byggetekniker": "Building Technician",
                "Installatør, stærkstrøm": "Electrician",

                // search-praktik
                "Opslag": "Posts",
                "Opslagstype_html": 'Post type <img src="images/chevron-right.svg" width="12" height="12">',
                "Praktik": "Internship",
                "Studiejob": "Student job",
                //Uddannelser_html,
                //Land_html,
                //Indland,
                //Udland,
                "By_html": 'City <img src="images/chevron-right.svg" width="12" height="12">',
                "Indtast_postnummer": "Enter postcode",
                "Soeg": "Search",
                "Ryd": "Clear",
                //resultater,
                //Sortering,
                //Senest_opdateret,
                //Raekkefoelge
                //Faldende,
                //Stigende

                //search-praktik-card
                "Uddannelse_kolon": "Education:",
                "Ansoegningsfrist_kolon": "Application deadline:",
                "Praktikstart_kolon": "Internship start:", 

                //Opslagstyper
                "Praktik": "Internship",
                "Studiejob": "Student job",

                //cv
                "Navn_kolon": "Name:",
                "Tlf_kolon": "Phone:",
                "Hjemmeside_kolon": "Website:",
                "Rediger_CV": "Edit CV",
                "Overskrift": "Headline",
                "Om_mig": "About me",
                "Erfaring": "Experience",
                "Uddannelse": "Education",
                "Speciale": "Speciality",
                "Tidligere_uddannelse": "Past education",
                "Udlandsophold_og_frivilligt_arbejde": "Study abroad and volunteer work",
                "Fritidsinteresser": "Hobbies",
                "It_kompetencer": "IT skills",
                "Sprog": "Language",
                "Ikke_angivet": "Not specified",

                //internship_post
                "Rediger_opslag": "Edit post",
                "Indryk_opslag": "Create post",
                "Annonce_overskrift": "Post headline",
                "Annonce_overskrift_error": "You must specify a post headline",
                "Opslagstype": "Post type",
                "Vaelg_en_opslagstype": "Choose a post type",
                //Praktik
                //Studiejob
                "Opslagstype_error": "You must specify a post type",
                //Uddannelse
                "Vaelg_en_uddannelse": "Select an education",
                "Vaelg_en_uddannelse_error": "You must specify an education",
                "Vaelg_en_uddannelse_note": "The selected education has paid internship",
                "Land": "Country",
                "Vaelg_et_land": "Select a country",
                "Danmark": "Denmark",
                "Tyskland": "Germany",
                "Sverige": "Sweden",
                "Udlandet": "Other",
                "Adresse": "Address",
                "Adresse_error": "You must specify an address",
                "Email_adresse": "E-mail address",
                "Email_adresse_error": "An email must have one @ character",
                "Navn_paa_kontaktperson": "Name of contact person",
                "Navn_paa_kontaktperson_error": "You must specify a contact person",
                "Link_til_hjemmeside": "Link to website",
                "Link_til_hjemmeside_error": "A valid link must be specified, e.g. http://www.zealandconnect.dk",
                "Ansoegningsfrist": "Application deadline",
                "Ansoegningsfrist_error": "You must specify an application deadline",
                "Dato_error": "The selected date has already passed",
                "Ansoegningsfrist_note": "Hide post after application deadline?",
                "Praktikstart": "Internship start",
                "Praktikstart_error": "You must specify a date for internship start",
                //Dato_error
                "Vedhaeft_fil": "Attach file",
                "Nuvaerende_Vedhaeftet_fil": "Currently attached file",
                "Vaelg_fil": "Choose file",
                "Vaelg_fil_error": "The chosen file must have a size less than 10MB",
                "Opslagstekst": "Post text",
                "Du_har_angivet_for_mange_tegn": "You have used too many characters",
                "Gem": "Save",
                "Slet_dette_opslag": "Delete this post",

                //intership_post_view
                //Uddannelse_kolon
                "Land_kolon": "Country:",
                "By_kolon": "City:",
                "Postnummer_kolon": "Postcode:",
                "Kontaktperson_kolon": "Contact person:",
                "CVR_nummer_kolon": "CVR number:",
                //Hjemmeside_kolon
                "Vedhaeftet_fil_kolon": "Attached file:",
                "Rediger_oplag": "Edit post",
                "Annoncetekst_kolon": "Post text:",

                //mit-cv
                //Overskrift
                "Overskrift_placeholder": "What you're looking for e.g. job or internship",
                "Skal_udfyldes": "Required field",
                //Vaelg_en_uddannelse
                //Vaelg_en_uddannelse_error
                //Email_adresse
                //Email_adresse_error
                //Sprog
                "Sprog_error": "You must specify language here",
                //Speciale
                "Telefon": "Telephone",
                "Telefon_error": "You must specify a telephone number with 8 digits, not beginning with 0",
                "hjemmeside_error": "You must specify a proper website link",
                "Link_til_CV_paa_Youtube": "Link to CV on Youtube",
                //Om_mig
                "Om_mig_placeholder": "This text is shown when companies search resumes",
                //It_kompetencer
                "Valgfri_placeholder": "Optional",
                //Udlandsophold_og_frivilligt_arbejde
                "Erhvervserfaring": "Work experience",
                "Erhvervserfaring_placeholder": "Previous or current work experience",
                "Tidligere_udannelse": "Previous education",
                "Tidligere_udannelse_placeholder": "Describe previous or current education",
                //Skal_udfyldes
                "Hjemmeside": "Website",
                //Fritidsinteresser
                "Tilgængelighed": "Accessibility",
                "Offentlig": "Public",
                "Privat": "Private",
                "Tilgængelighed_error": "You must specify if your resume is public or private",
                //Gem

                //studentprofil
                "Profil": "Profile",
                //Navn_kolon
                "Mail_kolon": "Mail:",
                //Tlf_kolon
                "Rediger_profil": "Edit profile",

                //virksomhedprofil
                "Virksomhed": "Company",
                //Navn_kolon
                //Mail_kolon
                //Tlf_kolon
                "Adresse_kolon": "Address:",
                //Hjemmeside_kolon
                "Direktoer_kolon": "President:"
                //Land_kolon
                //Postnummer_kolon
                //By_kolon
                //Rediger_profil
            }
        }
    }
    }
    return temp;
}