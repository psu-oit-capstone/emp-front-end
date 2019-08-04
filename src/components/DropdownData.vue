<template>
    
</template>

<script>
    export default {
        name: "DropdownData",

        //Dropdown data and so forth
        //Please note that Andorra's flag file name cannot be 'ad.svg' as this will trigger ad-blockers
        countryCodeArray: [
            //A countries
            {name: "Afghanistan +93", country: "Afghanistan",  code: "93", svgimg: "af.svg"}, {name: "Albania +355", country: "Albania",  code: "355", svgimg: "al.svg"},
            {name: "Algeria +213", country: "Algeria",  code: "213", svgimg: "dz.svg"}, {name: "American Samoa +1684", country: "American Samoa",  code: "1684", svgimg: "as.svg"},
            {name: "Andorra +376", country: "Andorra",  code: "376", svgimg: "andorra.svg"}, {name: "Angola +244", country: "Angola",  code: "244", svgimg: "ao.svg"},
            {name: "Anguilla +1264", country: "Anguilla",  code: "1264", svgimg: "ai.svg"}, {name: "Antarctica +672", country: "Antarctica",  code: "672", svgimg: "aq.svg"},
            {name: "Antigua and Barbuda +1268", country: "Antigua and Barbuda",  code: "1268", svgimg: "ag.svg"}, {name: "Argentina +54", country: "Argentina",  code: "54", svgimg: "ar.svg"},
            {name: "Armenia +374", country: "Armenia",  code: "374", svgimg: "am.svg"}, {name: "Aruba +297", country: "Aruba",  code: "297", svgimg: "aw.svg"},
            {name: "Australia +61", country: "Australia",  code: "61", svgimg: "au.svg"}, {name: "Austria +43", country: "Austria",  code: "43", svgimg: "at.svg"},
            {name: "Azerbaijan +994", country: "Azerbaijan",  code: "994", svgimg: "az.svg"},
            //B countries
            {name: "Bahamas +1242", country: "Bahamas",  code: "1242", svgimg: "bs.svg"}, {name: "Bahrain +973", country: "Bahrain",  code: "973", svgimg: "bh.svg"},
            {name: "Bangladesh +880", country: "Bangladesh",  code: "880", svgimg: "bd.svg"}, {name: "Barbados +1246", country: "Barbados",  code: "1246", svgimg: "bb.svg"},
            {name: "Belarus +375", country: "Belarus",  code: "375", svgimg: "by.svg"}, {name: "Belgium +32", country: "Belgium",  code: "32", svgimg: "be.svg"},
            {name: "Belize +501", country: "Belize",  code: "501", svgimg: "bz.svg"}, {name: "Benin +229", country: "Benin",  code: "229", svgimg: "bj.svg"},
            {name: "Bermuda +1441", country: "Bermuda",  code: "1441", svgimg: "bm.svg"}, {name: "Bhutan +975", country: "Bhutan",  code: "975", svgimg: "bt.svg"},
            {name: "Bolivia +591", country: "Bolivia",  code: "591", svgimg: "bo.svg"}, {name: "Bosnia-Herzegovna +387", country: "Bosnia-Herzegovna",  code: "387", svgimg: "ba.svg"},
            {name: "Botswana +267", country: "Botswana",  code: "267", svgimg: "bw.svg"}, {name: "Brazil +55", country: "Brazil",  code: "55", svgimg: "br.svg"},
            {name: "British Virgin Islands +1284", country: "British Virgin Islands",  code: "1284", svgimg: "vg.svg"}, {name: "Brunei Darrusalam +673", country: "Brunei Darrusalam",  code: "673", svgimg: "bn.svg"},
            {name: "Bulgaria +359", country: "Bulgaria",  code: "359", svgimg: "bg.svg"}, {name: "Burkina Faso +226", country: "Burkina Faso",  code: "226", svgimg: "bf.svg"},
            {name: "Burundia +257", country: "Burundia",  code: "257", svgimg: "bi.svg"},
            //C countries
            {name: "Cambodia +855", country: "Cambodia",  code: "855", svgimg: "kh.svg"}, {name: "Cameroon +237", country: "Cameroon",  code: "237", svgimg: "cm.svg"},
            {name: "Canada +1", country: "Canada",  code: "1", svgimg: "ca.svg"}, {name: "Cape Verde +238", country: "Cape Verde",  code: "238", svgimg: "cv.svg"},
            {name: "Cayman Islands +1345", country: "Cayman Islands",  code: "1345", svgimg: "ky.svg"}, {name: "Central African Republic +236", country: "Central African Republic",  code: "236", svgimg: "cf.svg"},
            {name: "Chad +235", country: "Chad",  code: "235", svgimg: "td.svg"}, {name: "Chile +56", country: "Chile",  code: "56", svgimg: "cl.svg"},
            {name: "China +86", country: "China",  code: "86", svgimg: "cn.svg"}, {name: "Cocos (Keeling) Islands +61", country: "Cocos (Keeling) Islands",  code: "61", svgimg: "cc.svg"},
            {name: "Colombia +57", country: "Colombia",  code: "57", svgimg: "co.svg"}, {name: "Comoros +269", country: "Comoros",  code: "269", svgimg: "km.svg"},
            {name: "Costa Rica +506", country: "Costa Rica",  code: "506", svgimg: "cr.svg"}, {name: "Cote D'ivoire +225", country: "Cote D'ivoire",  code: "225", svgimg: "ci.svg"},
            {name: "Croatia +385", country: "Croatia",  code: "385", svgimg: "hr.svg"}, {name: "Cuba +53", country: "Cuba",  code: "53", svgimg: "cu.svg"},
            {name: "Cyprus +357", country: "Cyprus",  code: "357", svgimg: "cy.svg"}, {name: "Czech Republic +420", country: "Czech Republic",  code: "420", svgimg: "cz.svg"},
            {name: "Christmas Island +61", country: "Christmas Island",  code: "61", svgimg: "cx.svg"}, {name: "Cook Island +682", country: "Cook Island",  code: "682", svgimg: "ck.svg"},
            //D countries
            {name: "D.R. Congo +243", country: "D.R. Congo",  code: "243", svgimg: "cd.svg"}, {name: "Denmark +45", country: "Denmark",  code: "45", svgimg: "dk.svg"},
            {name: "Djibouti +253", country: "Djibouti",  code: "253", svgimg: "dj.svg"}, {name: "Dominica +1767", country: "Dominica",  code: "1767", svgimg: "dm.svg"},
            {name: "Dominican Republic +1809", country: "Dominican Republic",  code: "1809", svgimg: "do.svg"},
            //E countries
            {name: "East Timor +670", country: "East Timor",  code: "670", svgimg: "tl.svg"}, {name: "Ecuador +593", country: "Ecuador",  code: "593", svgimg: "ec.svg"},
            {name: "Egypt +20", country: "Egypt",  code: "20", svgimg: "eg.svg"}, {name: "El Salvador +503", country: "El Salvador",  code: "503", svgimg: "sv.svg"},
            {name: "Equatorial Guinea +240", country: "Equatorial Guinea",  code: "240", svgimg: "gq.svg"}, {name: "Eritrea +291", country: "Eritrea",  code: "291", svgimg: "er.svg"},
            {name: "Estonia +372", country: "Estonia",  code: "372", svgimg: "ee.svg"}, {name: "Ethiopia +251", country: "Ethiopia",  code: "251", svgimg: "et.svg"},
            //F countries
            {name: "Falkland Islands +500", country: "Falkland Islands",  code: "500", svgimg: "fk.svg"}, {name: "Faore Islands +298", country: "Faore Islands",  code: "298", svgimg: "fo.svg"},
            {name: "Fiji +679", country: "Fiji",  code: "679", svgimg: "fj.svg"}, {name: "Finland +358", country: "Finland",  code: "358", svgimg: "fi.svg"},
            {name: "France +33", country: "France",  code: "33", svgimg: "fr.svg"}, {name: "French Guiana +594", country: "French Guiana",  code: "594", svgimg: "gf.svg"},
            {name: "French Polynesia +689", country: "French Polynesia",  code: "689", svgimg: "pf.svg"},
            //G countries
            {name: "Gabon +241", country: "Gabon",  code: "241", svgimg: "ga.svg"}, {name: "Gambia +220", country: "Gambia",  code: "220", svgimg: "gm.svg"},
            {name: "Georgia +995", country: "Georgia",  code: "995", svgimg: "ge.svg"}, {name: "Germany +49", country: "Germany",  code: "49", svgimg: "de.svg"},
            {name: "Ghana +233", country: "Ghana",  code: "233", svgimg: "gh.svg"}, {name: "Gibraltar +350", country: "Gibraltar",  code: "350", svgimg: "gi.svg"},
            {name: "Greece +30", country: "Greece",  code: "30", svgimg: "gr.svg"}, {name: "Greenland +299", country: "Greenland",  code: "299", svgimg: "gl.svg"},
            {name: "Grenada +1473", country: "Grenada",  code: "1473", svgimg: "gd.svg"},  {name: "Guam +1671", country: "Guam",  code: "1671", svgimg: "gu.svg"},
            {name: "Guadeloupe +1671", country: "Guadeloupe",  code: "1671", svgimg: "gp.svg"}, {name: "Guatemala +502", country: "Guatemala",  code: "502", svgimg: "gt.svg"},
            {name: "Guernsey +441481", country: "Guernsey",  code: "441481", svgimg: "gg.svg"}, {name: "Guinea +224", country: "Guinea",  code: "224", svgimg: "gn.svg"},
            {name: "Guinea-Bissau +245", country: "Guinea-Bissau",  code: "245", svgimg: "gw.svg"}, {name: "Guyana +592", country: "Guyana",  code: "592", svgimg: "gy.svg"},
            //H countries
            {name: "Haiti +504", country: "Haiti",  code: "509", svgimg: "ht.svg"}, {name: "Honduras +504", country: "Honduras",  code: "504", svgimg: "hn.svg"},
            {name: "Hong Kong +852", country: "Hong Kong",  code: "852", svgimg: "hk.svg"}, {name: "Hungary +36", country: "Hungary",  code: "36", svgimg: "hu.svg"},
            //I countries
            {name: "Iceland +354", country: "Iceland",  code: "354", svgimg: "is.svg"}, {name: "India +91", country: "India",  code: "91", svgimg: "in.svg"},
            {name: "Indonesia +62", country: "Indonesia",  code: "62", svgimg: "id.svg"}, {name: "Iran +98", country: "Iran",  code: "98", svgimg: "ir.svg"},
            {name: "Iraq +964", country: "Iraq",  code: "964", svgimg: "iq.svg"}, {name: "Ireland +353", country: "Ireland",  code: "353", svgimg: "ie.svg"},
            {name: "Israel +972", country: "Israel",  code: "972", svgimg: "il.svg"}, {name: "Italy +39", country: "Italy",  code: "39", svgimg: "it.svg"},
            //J countries
            {name: "Jamaica +1876", country: "Jamaica",  code: "1876", svgimg: "jm.svg"}, {name: "Japan +81", country: "Japan",  code: "81", svgimg: "jp.svg"},
            {name: "Jordan +962", country: "Jordan",  code: "962", svgimg: "jo.svg"},
            //K countries
            {name: "Kazakhstan +7", country: "Kazakhstan",  code: "7", svgimg: "kz.svg"}, {name: "Kenya +254", country: "Kenya",  code: "254", svgimg: "ke.svg"},
            {name: "Kiribati +686", country: "Kiribati",  code: "686", svgimg: "ki.svg"}, {name: "Kosovo +383", country: "Kosovo",  code: "383", svgimg: "xk.svg"},
            {name: "Kuwait +965", country: "Kuwait",  code: "965", svgimg: "kw.svg"}, {name: "Kyrgyzstan +996", country: "Kyrgyzstan",  code: "996", svgimg: "kg.svg"},
            //L countries
            {name: "Laos +856", country: "Laos",  code: "856", svgimg: "la.svg"}, {name: "Latvia +371", country: "Latvia",  code: "371", svgimg: "lv.svg"},
            {name: "Lebanon +961", country: "Lebanon",  code: "961", svgimg: "lb.svg"}, {name: "Lesotho +266", country: "Lesotho",  code: "266", svgimg: "ls.svg"},
            {name: "Liberia +231", country: "Liberia",  code: "231", svgimg: "lr.svg"}, {name: "Libya +218", country: "Libya",  code: "218", svgimg: "ly.svg"},
            {name: "Liechtenstein +423", country: "Liechtenstein",  code: "423", svgimg: "li.svg"}, {name: "Lithuania +370", country: "Lithuania",  code: "370", svgimg: "lt.svg"},
            {name: "Luxembourg +352", country: "Luxembourg",  code: "352", svgimg: "lu.svg"},
            //M countries
            {name: "Macau +853", country: "Macau",  code: "853", svgimg: "mo.svg"}, {name: "Macedonia +389", country: "Macedonia",  code: "389", svgimg: "mk.svg"},
            {name: "Madagascar +261", country: "Madagascar",  code: "261", svgimg: "mg.svg"}, {name: "Malawi +265", country: "Malawi",  code: "265", svgimg: "mw.svg"},
            {name: "Malaysia +60", country: "Malaysia",  code: "60", svgimg: "my.svg"}, {name: "Maldives +960", country: "Maldives",  code: "960", svgimg: "mv.svg"},
            {name: "Mali +223", country: "Mali",  code: "223", svgimg: "ml.svg"}, {name: "Malta +356", country: "Malta",  code: "356", svgimg: "mt.svg"},
            {name: "Marshall Islands +692", country: "Marshall Islands",  code: "692", svgimg: "mh.svg"}, {name: "Martinique +596", country: "Martinique",  code: "596", svgimg: "mq.svg"},
            {name: "Mauritania +222", country: "Mauritania",  code: "222", svgimg: "mr.svg"}, {name: "Mauritius +230", country: "Mauritius",  code: "230", svgimg: "mu.svg"},
            {name: "Mexico +52", country: "Mexico",  code: "52", svgimg: "mx.svg"}, {name: "Micronesia +691", country: "Micronesia",  code: "691", svgimg: "fm.svg"},
            {name: "Moldova +373", country: "Moldova",  code: "373", svgimg: "md.svg"}, {name: "Monaco +377", country: "Monaco",  code: "377", svgimg: "mc.svg"},
            {name: "Mongolia +976", country: "Mongolia",  code: "976", svgimg: "mn.svg"}, {name: "Montenegro +382", country: "Montenegro",  code: "382", svgimg: "me.svg"},
            {name: "Morocco +1664", country: "Morocco",  code: "1664", svgimg: "ms.svg"}, {name: "Mozambique +258", country: "Mozambique",  code: "258", svgimg: "mz.svg"},
            {name: "Myanmar +95", country: "Myanmar",  code: "95", svgimg: "mm.svg"},
            //N countries
            {name: "Namibia +264", country: "Namibia",  code: "264", svgimg: "na.svg"}, {name: "Nauru +674", country: "Nauru",  code: "674", svgimg: "nr.svg"},
            {name: "Nepal +977", country: "Nepal",  code: "977", svgimg: "np.svg"}, {name: "Netherlands +31", country: "Netherlands",  code: "31", svgimg: "nl.svg"},
            {name: "Netherlands Antilles +599", country: "Netherlands Antilles",  code: "599", svgimg: "an.svg"}, {name: "New Caledonia +687", country: "New Caledonia",  code: "687", svgimg: "nc.svg"},
            {name: "New Zealand +64", country: "New Zealand",  code: "64", svgimg: "nz.svg"}, {name: "Nicaragua +505", country: "Nicaragua",  code: "505", svgimg: "ni.svg"},
            {name: "Niger +227", country: "Niger",  code: "227", svgimg: "ne.svg"}, {name: "North Korea +850", country: "North Korea",  code: "850", svgimg: "kp.svg"},
            {name: "Norway +47", country: "Norway",  code: "47", svgimg: "no.svg"},
            //O countries
            {name: "Oman +968", country: "Oman",  code: "968", svgimg: "om.svg"},
            //P countries
            {name: "Pakistan +92", country: "Pakistan",  code: "92", svgimg: "pk.svg"}, {name: "Palau +680", country: "Palau",  code: "680", svgimg: "pw.svg"},
            {name: "Palestine +970", country: "Palestine",  code: "970", svgimg: "ps.svg"}, {name: "Panama +507", country: "Panama",  code: "507", svgimg: "pa.svg"},
            {name: "Papua New Guinea +675", country: "Papua New Guinea",  code: "675", svgimg: "pg.svg"}, {name: "Paraguay +595", country: "Paraguay",  code: "595", svgimg: "py.svg"},
            {name: "Peru +51", country: "Peru",  code: "51", svgimg: "pe.svg"}, {name: "Philippines +63", country: "Philippines",  code: "63", svgimg: "ph.svg"},
            {name: "Poland +48", country: "Poland",  code: "48", svgimg: "pl.svg"}, {name: "Portugal +351", country: "Portugal",  code: "351", svgimg: "pt.svg"},
            {name: "Puerto Rico +1787", country: "Puerto Rico",  code: "1787", svgimg: "pr.svg"},
            //Q countries
            {name: "Qatar +974", country: "Qatar",  code: "974", svgimg: "qa.svg"},
            //R countries
            {name: "Rep. of the Congo +242", country: "Rep. of the Congo",  code: "242", svgimg: "cg.svg"}, {name: "Reunion +262", country: "Reunion",  code: "262", svgimg: "re.svg"},
            {name: "Romania +40", country: "Romania",  code: "40", svgimg: "ro.svg"}, {name: "Russia +7", country: "Russia",  code: "7", svgimg: "ru.svg"},
            {name: "Rwanda +250", country: "Rwanda",  code: "250", svgimg: "rw.svg"},
            //S countries
            {name: "Saint Helena +290", country: "Saint Helena",  code: "290", svgimg: "sh.svg"}, {name: "Saint Kitts and Nevis +1869", country: "Saint Kitts and Nevis",  code: "1869", svgimg: "kn.svg"},
            {name: "Saint Lucia +1758", country: "Saint Lucia",  code: "1758", svgimg: "lc.svg"}, {name: "Saint Pierre and Miquelon +508", country: "Saint Pierre and Miquelon",  code: "508", svgimg: "pm.svg"},
            {name: "Saint Vincent & the Grenadines +1784", country: "Saint Vincent & the Grenadines",  code: "1784", svgimg: "vc.svg"}, {name: "Samoa +685", country: "Samoa",  code: "685", svgimg: "ws.svg"},
            {name: "San Marino +378", country: "San Marino",  code: "378", svgimg: "sm.svg"}, {name: "Sao Tome and Principe +239", country: "Sao Tome and Principe",  code: "239", svgimg: "st.svg"},
            {name: "Saudi Arabia +966", country: "Saudi Arabia",  code: "966", svgimg: "sa.svg"}, {name: "Senegal +221", country: "Senegal",  code: "221", svgimg: "sn.svg"},
            {name: "Serbia +381", country: "Serbia",  code: "381", svgimg: "rs.svg"}, {name: "Seychelles +248", country: "Seychelles",  code: "248", svgimg: "sc.svg"},
            {name: "Sierra Leone +232", country: "Sierra Leone",  code: "232", svgimg: "sl.svg"}, {name: "Singapore +65", country: "Singapore",  code: "65", svgimg: "sg.svg"},
            {name: "Slovakia +421", country: "Slovakia",  code: "421", svgimg: "sk.svg"}, {name: "Slovenia +386", country: "Slovenia",  code: "386", svgimg: "si.svg"},
            {name: "Solomon Islands +677", country: "Solomon Islands",  code: "677", svgimg: "sb.svg"}, {name: "Somalia +252", country: "Somalia",  code: "252", svgimg: "so.svg"},
            {name: "South Africa +27", country: "South Africa",  code: "27", svgimg: "za.svg"}, {name: "South Korea +82", country: "South Korea",  code: "82", svgimg: "kr.svg"},
            {name: "South Sudan +211", country: "South Sudan",  code: "211", svgimg: "ss.svg"}, {name: "Spain +34", country: "Spain",  code: "34", svgimg: "es.svg"},
            {name: "Sri Lanka +94", country: "Sri Lanka",  code: "94", svgimg: "lk.svg"}, {name: "Sudan +249", country: "Sudan",  code: "249", svgimg: "sd.svg"},
            {name: "Suriname +597", country: "Suriname",  code: "597", svgimg: "sr.svg"}, {name: "Swaziland +268", country: "Swaziland",  code: "268", svgimg: "sz.svg"},
            {name: "Sweden +46", country: "Sweden",  code: "46", svgimg: "se.svg"}, {name: "Switzerland +41", country: "Switzerland",  code: "41", svgimg: "ch.svg"},
            {name: "Syria +963", country: "Syria",  code: "963", svgimg: "sy.svg"},
            //T countries
            {name: "Taiwan +886", country: "Taiwan",  code: "886", svgimg: "tw.svg"}, {name: "Tajikistan +992", country: "Tajikistan",  code: "992", svgimg: "tj.svg"},
            {name: "Tanzania +255", country: "Tanzania",  code: "255", svgimg: "tz.svg"}, {name: "Thailand +66", country: "Thailand",  code: "66", svgimg: "th.svg"},
            {name: "Togo +228", country: "Togo",  code: "228", svgimg: "tg.svg"}, {name: "Tonga +690", country: "Tonga",  code: "690", svgimg: "tk.svg"},
            {name: "Trinidad and Tobago +1868", country: "Trinidad and Tobago",  code: "1868", svgimg: "tt.svg"}, {name: "Tunisia +216", country: "Tunisia",  code: "216", svgimg: "tn.svg"},
            {name: "Turkey +90", country: "Turkey",  code: "90", svgimg: "tr.svg"}, {name: "Turkmenistan +993", country: "Turkmenistan",  code: "993", svgimg: "tm.svg"},
            {name: "Turks and Caicos Islands +1649", country: "Turks and Caicos Islands",  code: "1649", svgimg: "tc.svg"}, {name: "Tuvalu +688", country: "Tuvalu",  code: "688", svgimg: "tv.svg"},
            //U countries
            {name: "Uganda +256", country: "Uganda",  code: "256", svgimg: "ug.svg"}, {name: "Ukraine +380", country: "Ukraine",  code: "380", svgimg: "ua.svg"},
            {name: "United Arab Emirates +971", country: "United Arab Emirates",  code: "971", svgimg: "ae.svg"}, {name: "United Kingdom +44", country: "United Kingdom",  code: "44", svgimg: "gb.svg"},
            {name: "USA +1", country: "USA",  code: "1", svgimg: "us.svg"}, {name: "Uruguay +598", country: "Uruguay",  code: "598", svgimg: "uy.svg"},
            {name: "USSR +7", country: "USSR",  code: "7", svgimg: "su.svg"}, {name: "Uzbekistan +998", country: "Uzbekistan",  code: "998", svgimg: "uz.svg"},
            //V countries
            {name: "Vatican City +379", country: "Vatican City",  code: "379", svgimg: "va.svg"}, {name: "Venezuela +58", country: "Venezuela",  code: "58", svgimg: "ve.svg"},
            {name: "Vietnam +84", country: "Vietnam",  code: "84", svgimg: "vn.svg"},
            //W countries
            {name: "Wallis and Futuna +687", country: "Wallis and Futuna",  code: "681", svgimg: "wf.svg"},
            //Y countries
            {name: "Yemen +967", country: "Yemen",  code: "967", svgimg: "ye.svg"},
            //Z countries
            {name: "Zambia +260", country: "Zambia",  code: "260", svgimg: "zm.svg"}, {name: "Zimbabwe +263", country: "Zimbabwe",  code: "263", svgimg: "zw.svg"},
        ],
        selectedCountryCode: {
            name: "USA +1", code: "1", svgimg: "us.svg",
        },
        countryArray: [
            //A countries
            {name: "Afghanistan", country: "Afghanistan",  code: "93", svgimg: "af.svg"}, {name: "Albania", country: "Albania",  code: "355", svgimg: "al.svg"},
            {name: "Algeria", country: "Algeria",  code: "213", svgimg: "dz.svg"}, {name: "American Samoa", country: "American Samoa",  code: "1684", svgimg: "as.svg"},
            {name: "Andorra", country: "Andorra",  code: "376", svgimg: "andorra.svg"}, {name: "Angola", country: "Angola",  code: "244", svgimg: "ao.svg"},
            {name: "Anguilla", country: "Anguilla",  code: "1264", svgimg: "ai.svg"}, {name: "Antarctica", country: "Antarctica",  code: "672", svgimg: "aq.svg"},
            {name: "Antigua and Barbuda", country: "Antigua and Barbuda",  code: "1268", svgimg: "ag.svg"}, {name: "Argentina", country: "Argentina",  code: "54", svgimg: "ar.svg"},
            {name: "Armenia", country: "Armenia",  code: "374", svgimg: "am.svg"}, {name: "Aruba", country: "Aruba",  code: "297", svgimg: "aw.svg"},
            {name: "Australia", country: "Australia",  code: "61", svgimg: "au.svg"}, {name: "Austria", country: "Austria",  code: "43", svgimg: "at.svg"},
            {name: "Azerbaijan", country: "Azerbaijan",  code: "994", svgimg: "az.svg"},
            //B countries
            {name: "Bahamas", country: "Bahamas",  code: "1242", svgimg: "bs.svg"}, {name: "Bahrain", country: "Bahrain",  code: "973", svgimg: "bh.svg"},
            {name: "Bangladesh", country: "Bangladesh",  code: "880", svgimg: "bd.svg"}, {name: "Barbados", country: "Barbados",  code: "1246", svgimg: "bb.svg"},
            {name: "Belarus", country: "Belarus",  code: "375", svgimg: "by.svg"}, {name: "Belgium", country: "Belgium",  code: "32", svgimg: "be.svg"},
            {name: "Belize", country: "Belize",  code: "501", svgimg: "bz.svg"}, {name: "Benin", country: "Benin",  code: "229", svgimg: "bj.svg"},
            {name: "Bermuda", country: "Bermuda",  code: "1441", svgimg: "bm.svg"}, {name: "Bhutan", country: "Bhutan",  code: "975", svgimg: "bt.svg"},
            {name: "Bolivia", country: "Bolivia",  code: "591", svgimg: "bo.svg"}, {name: "Bosnia-Herzegovna", country: "Bosnia-Herzegovna",  code: "387", svgimg: "ba.svg"},
            {name: "Botswana", country: "Botswana",  code: "267", svgimg: "bw.svg"}, {name: "Brazil", country: "Brazil",  code: "55", svgimg: "br.svg"},
            {name: "British Virgin Islands", country: "British Virgin Islands",  code: "1284", svgimg: "vg.svg"}, {name: "Brunei Darrusalam", country: "Brunei Darrusalam",  code: "673", svgimg: "bn.svg"},
            {name: "Bulgaria", country: "Bulgaria",  code: "359", svgimg: "bg.svg"}, {name: "Burkina Faso", country: "Burkina Faso",  code: "226", svgimg: "bf.svg"},
            {name: "Burundia", country: "Burundia",  code: "257", svgimg: "bi.svg"},
            //C countries
            {name: "Cambodia", country: "Cambodia",  code: "855", svgimg: "kh.svg"}, {name: "Cameroon", country: "Cameroon",  code: "237", svgimg: "cm.svg"},
            {name: "Canada", country: "Canada",  code: "1", svgimg: "ca.svg"}, {name: "Cape Verde", country: "Cape Verde",  code: "238", svgimg: "cv.svg"},
            {name: "Cayman Islands", country: "Cayman Islands",  code: "1345", svgimg: "ky.svg"}, {name: "Central African Republic", country: "Central African Republic",  code: "236", svgimg: "cf.svg"},
            {name: "Chad", country: "Chad",  code: "235", svgimg: "td.svg"}, {name: "Chile", country: "Chile",  code: "56", svgimg: "cl.svg"},
            {name: "China", country: "China",  code: "86", svgimg: "cn.svg"}, {name: "Cocos (Keeling) Islands", country: "Cocos (Keeling) Islands",  code: "61", svgimg: "cc.svg"},
            {name: "Colombia", country: "Colombia",  code: "57", svgimg: "co.svg"}, {name: "Comoros", country: "Comoros",  code: "269", svgimg: "km.svg"},
            {name: "Costa Rica", country: "Costa Rica",  code: "506", svgimg: "cr.svg"}, {name: "Cote D'ivoire", country: "Cote D'ivoire",  code: "225", svgimg: "ci.svg"},
            {name: "Croatia", country: "Croatia",  code: "385", svgimg: "hr.svg"}, {name: "Cuba", country: "Cuba",  code: "53", svgimg: "cu.svg"},
            {name: "Cyprus", country: "Cyprus",  code: "357", svgimg: "cy.svg"}, {name: "Czech Republic", country: "Czech Republic",  code: "420", svgimg: "cz.svg"},
            {name: "Christmas Island", country: "Christmas Island",  code: "61", svgimg: "cx.svg"}, {name: "Cook Island", country: "Cook Island",  code: "682", svgimg: "ck.svg"},
            //D countries
            {name: "D.R. Congo", country: "D.R. Congo",  code: "243", svgimg: "cd.svg"}, {name: "Denmark", country: "Denmark",  code: "45", svgimg: "dk.svg"},
            {name: "Djibouti", country: "Djibouti",  code: "253", svgimg: "dj.svg"}, {name: "Dominica", country: "Dominica",  code: "1767", svgimg: "dm.svg"},
            {name: "Dominican Republic", country: "Dominican Republic",  code: "1809", svgimg: "do.svg"},
            //E countries
            {name: "East Timor", country: "East Timor",  code: "670", svgimg: "tl.svg"}, {name: "Ecuador", country: "Ecuador",  code: "593", svgimg: "ec.svg"},
            {name: "Egypt", country: "Egypt",  code: "20", svgimg: "eg.svg"}, {name: "El Salvador", country: "El Salvador",  code: "503", svgimg: "sv.svg"},
            {name: "Equatorial Guinea", country: "Equatorial Guinea",  code: "240", svgimg: "gq.svg"}, {name: "Eritrea", country: "Eritrea",  code: "291", svgimg: "er.svg"},
            {name: "Estonia", country: "Estonia",  code: "372", svgimg: "ee.svg"}, {name: "Ethiopia", country: "Ethiopia",  code: "251", svgimg: "et.svg"},
            //F countries
            {name: "Falkland Islands", country: "Falkland Islands",  code: "500", svgimg: "fk.svg"}, {name: "Faore Islands", country: "Faore Islands",  code: "298", svgimg: "fo.svg"},
            {name: "Fiji", country: "Fiji",  code: "679", svgimg: "fj.svg"}, {name: "Finland", country: "Finland",  code: "358", svgimg: "fi.svg"},
            {name: "France", country: "France",  code: "33", svgimg: "fr.svg"}, {name: "French Guiana", country: "French Guiana",  code: "594", svgimg: "gf.svg"},
            {name: "French Polynesia", country: "French Polynesia",  code: "689", svgimg: "pf.svg"},
            //G countries
            {name: "Gabon", country: "Gabon",  code: "241", svgimg: "ga.svg"}, {name: "Gambia", country: "Gambia",  code: "220", svgimg: "gm.svg"},
            {name: "Georgia", country: "Georgia",  code: "995", svgimg: "ge.svg"}, {name: "Germany", country: "Germany",  code: "49", svgimg: "de.svg"},
            {name: "Ghana", country: "Ghana",  code: "233", svgimg: "gh.svg"}, {name: "Gibraltar", country: "Gibraltar",  code: "350", svgimg: "gi.svg"},
            {name: "Greece", country: "Greece",  code: "30", svgimg: "gr.svg"}, {name: "Greenland", country: "Greenland",  code: "299", svgimg: "gl.svg"},
            {name: "Grenada", country: "Grenada",  code: "1473", svgimg: "gd.svg"},  {name: "Guam", country: "Guam",  code: "1671", svgimg: "gu.svg"},
            {name: "Guadeloupe", country: "Guadeloupe",  code: "1671", svgimg: "gp.svg"}, {name: "Guatemala", country: "Guatemala",  code: "502", svgimg: "gt.svg"},
            {name: "Guernsey", country: "Guernsey",  code: "441481", svgimg: "gg.svg"}, {name: "Guinea", country: "Guinea",  code: "224", svgimg: "gn.svg"},
            {name: "Guinea-Bissau", country: "Guinea-Bissau",  code: "245", svgimg: "gw.svg"}, {name: "Guyana", country: "Guyana",  code: "592", svgimg: "gy.svg"},
            //H countries
            {name: "Haiti", country: "Haiti",  code: "509", svgimg: "ht.svg"}, {name: "Honduras", country: "Honduras",  code: "504", svgimg: "hn.svg"},
            {name: "Hong Kong", country: "Hong Kong",  code: "852", svgimg: "hk.svg"}, {name: "Hungary", country: "Hungary",  code: "36", svgimg: "hu.svg"},
            //I countries
            {name: "Iceland", country: "Iceland",  code: "354", svgimg: "is.svg"}, {name: "India", country: "India",  code: "91", svgimg: "in.svg"},
            {name: "Indonesia", country: "Indonesia",  code: "62", svgimg: "id.svg"}, {name: "Iran", country: "Iran",  code: "98", svgimg: "ir.svg"},
            {name: "Iraq", country: "Iraq",  code: "964", svgimg: "iq.svg"}, {name: "Ireland", country: "Ireland",  code: "353", svgimg: "ie.svg"},
            {name: "Israel", country: "Israel",  code: "972", svgimg: "il.svg"}, {name: "Italy", country: "Italy",  code: "39", svgimg: "it.svg"},
            //J countries
            {name: "Jamaica", country: "Jamaica",  code: "1876", svgimg: "jm.svg"}, {name: "Japan", country: "Japan",  code: "81", svgimg: "jp.svg"},
            {name: "Jordan", country: "Jordan",  code: "962", svgimg: "jo.svg"},
            //K countries
            {name: "Kazakhstan", country: "Kazakhstan",  code: "7", svgimg: "kz.svg"}, {name: "Kenya", country: "Kenya",  code: "254", svgimg: "ke.svg"},
            {name: "Kiribati", country: "Kiribati",  code: "686", svgimg: "ki.svg"}, {name: "Kosovo", country: "Kosovo",  code: "383", svgimg: "xk.svg"},
            {name: "Kuwait", country: "Kuwait",  code: "965", svgimg: "kw.svg"}, {name: "Kyrgyzstan", country: "Kyrgyzstan",  code: "996", svgimg: "kg.svg"},
            //L countries
            {name: "Laos", country: "Laos",  code: "856", svgimg: "la.svg"}, {name: "Latvia", country: "Latvia",  code: "371", svgimg: "lv.svg"},
            {name: "Lebanon", country: "Lebanon",  code: "961", svgimg: "lb.svg"}, {name: "Lesotho", country: "Lesotho",  code: "266", svgimg: "ls.svg"},
            {name: "Liberia", country: "Liberia",  code: "231", svgimg: "lr.svg"}, {name: "Libya", country: "Libya",  code: "218", svgimg: "ly.svg"},
            {name: "Liechtenstein", country: "Liechtenstein",  code: "423", svgimg: "li.svg"}, {name: "Lithuania", country: "Lithuania",  code: "370", svgimg: "lt.svg"},
            {name: "Luxembourg", country: "Luxembourg",  code: "352", svgimg: "lu.svg"},
            //M countries
            {name: "Macau", country: "Macau",  code: "853", svgimg: "mo.svg"}, {name: "Macedonia", country: "Macedonia",  code: "389", svgimg: "mk.svg"},
            {name: "Madagascar", country: "Madagascar",  code: "261", svgimg: "mg.svg"}, {name: "Malawi", country: "Malawi",  code: "265", svgimg: "mw.svg"},
            {name: "Malaysia", country: "Malaysia",  code: "60", svgimg: "my.svg"}, {name: "Maldives", country: "Maldives",  code: "960", svgimg: "mv.svg"},
            {name: "Mali", country: "Mali",  code: "223", svgimg: "ml.svg"}, {name: "Malta", country: "Malta",  code: "356", svgimg: "mt.svg"},
            {name: "Marshall Islands", country: "Marshall Islands",  code: "692", svgimg: "mh.svg"}, {name: "Martinique", country: "Martinique",  code: "596", svgimg: "mq.svg"},
            {name: "Mauritania", country: "Mauritania",  code: "222", svgimg: "mr.svg"}, {name: "Mauritius", country: "Mauritius",  code: "230", svgimg: "mu.svg"},
            {name: "Mexico", country: "Mexico",  code: "52", svgimg: "mx.svg"}, {name: "Micronesia", country: "Micronesia",  code: "691", svgimg: "fm.svg"},
            {name: "Moldova", country: "Moldova",  code: "373", svgimg: "md.svg"}, {name: "Monaco", country: "Monaco",  code: "377", svgimg: "mc.svg"},
            {name: "Mongolia", country: "Mongolia",  code: "976", svgimg: "mn.svg"}, {name: "Montenegro", country: "Montenegro",  code: "382", svgimg: "me.svg"},
            {name: "Morocco", country: "Morocco",  code: "1664", svgimg: "ms.svg"}, {name: "Mozambique", country: "Mozambique",  code: "258", svgimg: "mz.svg"},
            {name: "Myanmar", country: "Myanmar",  code: "95", svgimg: "mm.svg"},
            //N countries
            {name: "Namibia", country: "Namibia",  code: "264", svgimg: "na.svg"}, {name: "Nauru", country: "Nauru",  code: "674", svgimg: "nr.svg"},
            {name: "Nepal", country: "Nepal",  code: "977", svgimg: "np.svg"}, {name: "Netherlands", country: "Netherlands",  code: "31", svgimg: "nl.svg"},
            {name: "Netherlands Antilles", country: "Netherlands Antilles",  code: "599", svgimg: "an.svg"}, {name: "New Caledonia", country: "New Caledonia",  code: "687", svgimg: "nc.svg"},
            {name: "New Zealand", country: "New Zealand",  code: "64", svgimg: "nz.svg"}, {name: "Nicaragua", country: "Nicaragua",  code: "505", svgimg: "ni.svg"},
            {name: "Niger", country: "Niger",  code: "227", svgimg: "ne.svg"}, {name: "North Korea", country: "North Korea",  code: "850", svgimg: "kp.svg"},
            {name: "Norway", country: "Norway",  code: "47", svgimg: "no.svg"},
            //O countries
            {name: "Oman", country: "Oman",  code: "968", svgimg: "om.svg"},
            //P countries
            {name: "Pakistan", country: "Pakistan",  code: "92", svgimg: "pk.svg"}, {name: "Palau", country: "Palau",  code: "680", svgimg: "pw.svg"},
            {name: "Palestine", country: "Palestine",  code: "970", svgimg: "ps.svg"}, {name: "Panama", country: "Panama",  code: "507", svgimg: "pa.svg"},
            {name: "Papua New Guinea", country: "Papua New Guinea",  code: "675", svgimg: "pg.svg"}, {name: "Paraguay", country: "Paraguay",  code: "595", svgimg: "py.svg"},
            {name: "Peru", country: "Peru",  code: "51", svgimg: "pe.svg"}, {name: "Philippines", country: "Philippines",  code: "63", svgimg: "ph.svg"},
            {name: "Poland", country: "Poland",  code: "48", svgimg: "pl.svg"}, {name: "Portugal", country: "Portugal",  code: "351", svgimg: "pt.svg"},
            {name: "Puerto Rico", country: "Puerto Rico",  code: "1787", svgimg: "pr.svg"},
            //Q countries
            {name: "Qatar", country: "Qatar",  code: "974", svgimg: "qa.svg"},
            //R countries
            {name: "Rep. of the Congo", country: "Rep. of the Congo",  code: "242", svgimg: "cg.svg"}, {name: "Reunion", country: "Reunion",  code: "262", svgimg: "re.svg"},
            {name: "Romania", country: "Romania",  code: "40", svgimg: "ro.svg"}, {name: "Russia", country: "Russia",  code: "7", svgimg: "ru.svg"},
            {name: "Rwanda", country: "Rwanda",  code: "250", svgimg: "rw.svg"},
            //S countries
            {name: "Saint Helena", country: "Saint Helena",  code: "290", svgimg: "sh.svg"}, {name: "Saint Kitts and Nevis", country: "Saint Kitts and Nevis",  code: "1869", svgimg: "kn.svg"},
            {name: "Saint Lucia", country: "Saint Lucia",  code: "1758", svgimg: "lc.svg"}, {name: "Saint Pierre and Miquelon", country: "Saint Pierre and Miquelon",  code: "508", svgimg: "pm.svg"},
            {name: "Saint Vincent & the Grenadines", country: "Saint Vincent & the Grenadines",  code: "1784", svgimg: "vc.svg"}, {name: "Samoa", country: "Samoa",  code: "685", svgimg: "ws.svg"},
            {name: "San Marino", country: "San Marino",  code: "378", svgimg: "sm.svg"}, {name: "Sao Tome and Principe", country: "Sao Tome and Principe",  code: "239", svgimg: "st.svg"},
            {name: "Saudi Arabia", country: "Saudi Arabia",  code: "966", svgimg: "sa.svg"}, {name: "Senegal", country: "Senegal",  code: "221", svgimg: "sn.svg"},
            {name: "Serbia", country: "Serbia",  code: "381", svgimg: "rs.svg"}, {name: "Seychelles", country: "Seychelles",  code: "248", svgimg: "sc.svg"},
            {name: "Sierra Leone", country: "Sierra Leone",  code: "232", svgimg: "sl.svg"}, {name: "Singapore", country: "Singapore",  code: "65", svgimg: "sg.svg"},
            {name: "Slovakia", country: "Slovakia",  code: "421", svgimg: "sk.svg"}, {name: "Slovenia", country: "Slovenia",  code: "386", svgimg: "si.svg"},
            {name: "Solomon Islands", country: "Solomon Islands",  code: "677", svgimg: "sb.svg"}, {name: "Somalia", country: "Somalia",  code: "252", svgimg: "so.svg"},
            {name: "South Africa", country: "South Africa",  code: "27", svgimg: "za.svg"}, {name: "South Korea", country: "South Korea",  code: "82", svgimg: "kr.svg"},
            {name: "South Sudan", country: "South Sudan",  code: "211", svgimg: "ss.svg"}, {name: "Spain", country: "Spain",  code: "34", svgimg: "es.svg"},
            {name: "Sri Lanka", country: "Sri Lanka",  code: "94", svgimg: "lk.svg"}, {name: "Sudan", country: "Sudan",  code: "249", svgimg: "sd.svg"},
            {name: "Suriname", country: "Suriname",  code: "597", svgimg: "sr.svg"}, {name: "Swaziland", country: "Swaziland",  code: "268", svgimg: "sz.svg"},
            {name: "Sweden", country: "Sweden",  code: "46", svgimg: "se.svg"}, {name: "Switzerland", country: "Switzerland",  code: "41", svgimg: "ch.svg"},
            {name: "Syria", country: "Syria",  code: "963", svgimg: "sy.svg"},
            //T countries
            {name: "Taiwan", country: "Taiwan",  code: "886", svgimg: "tw.svg"}, {name: "Tajikistan", country: "Tajikistan",  code: "992", svgimg: "tj.svg"},
            {name: "Tanzania", country: "Tanzania",  code: "255", svgimg: "tz.svg"}, {name: "Thailand", country: "Thailand",  code: "66", svgimg: "th.svg"},
            {name: "Togo", country: "Togo",  code: "228", svgimg: "tg.svg"}, {name: "Tonga", country: "Tonga",  code: "690", svgimg: "tk.svg"},
            {name: "Trinidad and Tobago", country: "Trinidad and Tobago",  code: "1868", svgimg: "tt.svg"}, {name: "Tunisia", country: "Tunisia",  code: "216", svgimg: "tn.svg"},
            {name: "Turkey", country: "Turkey",  code: "90", svgimg: "tr.svg"}, {name: "Turkmenistan", country: "Turkmenistan",  code: "993", svgimg: "tm.svg"},
            {name: "Turks and Caicos Islands", country: "Turks and Caicos Islands",  code: "1649", svgimg: "tc.svg"}, {name: "Tuvalu", country: "Tuvalu",  code: "688", svgimg: "tv.svg"},
            //U countries
            {name: "Uganda", country: "Uganda",  code: "256", svgimg: "ug.svg"}, {name: "Ukraine", country: "Ukraine",  code: "380", svgimg: "ua.svg"},
            {name: "United Arab Emirates", country: "United Arab Emirates",  code: "971", svgimg: "ae.svg"}, {name: "United Kingdom", country: "United Kingdom",  code: "44", svgimg: "gb.svg"},
            {name: "USA", country: "USA",  code: "1", svgimg: "us.svg"}, {name: "Uruguay", country: "Uruguay",  code: "598", svgimg: "uy.svg"},
            {name: "USSR", country: "USSR",  code: "7", svgimg: "su.svg"}, {name: "Uzbekistan", country: "Uzbekistan",  code: "998", svgimg: "uz.svg"},
            //V countries
            {name: "Vatican City", country: "Vatican City",  code: "379", svgimg: "va.svg"}, {name: "Venezuela", country: "Venezuela",  code: "58", svgimg: "ve.svg"},
            {name: "Vietnam", country: "Vietnam",  code: "84", svgimg: "vn.svg"},
            //W countries
            {name: "Wallis and Futuna", country: "Wallis and Futuna",  code: "681", svgimg: "wf.svg"},
            //Y countries
            {name: "Yemen", country: "Yemen",  code: "967", svgimg: "ye.svg"},
            //Z countries
            {name: "Zambia", country: "Zambia",  code: "260", svgimg: "zm.svg"}, {name: "Zimbabwe", country: "Zimbabwe",  code: "263", svgimg: "zw.svg"},
        ],
        selectedCountry: {
            name: "USA", code: "1", svgimg: "us.svg",
        },
        stateArray: [
            {name: "Not Applicable"}, {name: "Alabama"}, {name: "Alaska"}, {name: "Alberta"}, {name: "American Samoa"}, {name: "Arizona"}, {name: "Arkansas"},
            {name: "Armed Forces (AA)"}, {name: "Armed Forces (AE)"}, {name: "Armed Forces (AP)"},  {name: "British Columbia"},
            {name: "California"}, {name: "Canal Zone"}, {name: "Colorado"}, {name: "Connecticut"}, {name: "Delaware"}, {name: "District of Columbia"}, {name: "Federated States of Micronesia"},
            {name: "Florida"}, {name: "Foreign State"}, {name: "Georgia"}, {name: "Guam"}, {name: "Hawaii"}, {name: "Idaho"},
            {name: "Illinois"}, {name: "Indiana"}, {name: "Iowa"}, {name: "Kansas"},
            {name: "Kentucky"}, {name: "Louisiana"}, {name: "Maine"}, {name: "Manitoba"}, {name: "Marshall Islands"}, {name: "Maryland"},
            {name: "Massachusetts"}, {name: "Michigan"}, {name: "Minnesota"}, {name: "Mississippi"},
            {name: "Missouri"}, {name: "Montana"}, {name: "Nebraska"}, {name: "Nevada"}, {name: "New Brunswick"},
            {name: "New Hampshire"}, {name: "New Jersey"}, {name: "New Mexico"}, {name: "New York"}, {name: "Newfoundland"},
            {name: "North Carolina"}, {name: "North Dakota"}, {name: "Northern Marianna Islands"}, {name: "Northwest Territories"},
            {name: "Nova Scotia"}, {name: "Ohio"}, {name: "Oklahoma"}, {name: "Oregon"}, {name: "Palau"}, {name: "Pennsylvania"},
            {name: "Prince Edward Island"}, {name: "Puerto Rico"}, {name: "Quebec"}, {name: "Rhode Island"}, {name: "Saskatchewan"}, {name: "South Carolina"},
            {name: "South Dakota"}, {name: "Tennessee"}, {name: "Texas"}, {name: "Trust Territories"}, {name: "Utah"},
            {name: "Vermont"}, {name: "Virgin Islands"}, {name: "Virginia"}, {name: "Washington"}, {name: "West Virginia"},
            {name: "Wisconsin"}, {name: "Wyoming"}, {name: "Yukon Territory"},
        ],
        selectedState: {
            name: 'State Select'
        },
        relationshipArray: [
            {name: "Not Applicable"}, {name: "Agent"},  {name: "Friend"},{name: "Guardian/Parent"},
            {name: "Other Relative"}, {name: "Other Representative"}, {name: "Spouse/Significant Other"}, {name: "Unknown"},
        ],
        selectedRel: {
            name: 'Select Relation'
        }
    }
</script>

<style scoped>

</style>