const six_plus = [
    "gb",   "https://www.youtube.com/watch?v=Vz0BriND6pE&t=27s",        "some",     //  gang beasts
    "tf",   "https://youtu.be/T7Lyf1fkoHY?si=CfaIq0VSwmjFKowk",         "much",     //  tower fall
    "ssbu", "https://youtu.be/7Xepdym7bFQ?si=--oF6usvgXDIAzge&t=16",    "much",     //  Super Smash Bros Ultimate
    "br",   "https://youtu.be/-h3O0YST4ZU?si=fpqr1JzAUb92JUbG&t=26",    "little",   //  Boomerang Fu
    "uns",  "https://youtu.be/5Xd4OzUpdhM?si=iT5uxzhtsrbSdWH8&t=376",   "little",   //  Unspottable
    "ppce", "https://youtu.be/-iBBkVgPA2c?si=gKTqa3fLoIf8pa3U&t=50",    "none",     //  Pico Park: Classic edition
    "pp",   "https://youtu.be/jtNGxbm85u8?si=jLdqYSBaoE6Ajmkm&t=31",    "little",   //  Pico Park
    "pp2",  "https://youtu.be/lN_DlZq7GnQ?si=zZ67RfDZhDCHhzAU",         "none",     //  Pico Park 2
    "ad2",  "https://youtu.be/2rejbEAr96c?si=sxol-0JQTLWLEi04&t=136",   "none",     //  Astro duel 2
    "bh",   "https://youtu.be/up6Y7mqr4ZE?si=DgMASePk2GI81H9A",         "none"      //  Brawlhalla
]; 


let sixLen = six_plus.length;

let sixdisplay = "<div>";
for (let i = 1; i < sixLen/3+1; i++) {
    sixdisplay += "<a href=\"" + six_plus[3*i-2] + "\">" +   "<img class=\"" + six_plus[3*i-1] + "\"" + "src=\"" + six_plus[3*i-3] + ".png\"></a>"
}

sixdisplay += "</div>";

document.getElementById("sixp").innerHTML = sixdisplay;



const four_plus = [
    "cc",       "https://youtu.be/2NBOxQ93YBg?si=YF3uYpPPGSTEcxsO&t=248",   "none",     //  Castle Crashers
    "eb",       "https://youtu.be/JX2SNrLsE28?si=E5yReRgczZNiaHwc&t=9",     "none",     //  EXPENDABROS
    "hh",       "https://youtu.be/tl07NG4ZY5c?si=-UfN_cdL1wlR1yXV&t=55",    "little",   //  Heave Ho
    "g",        "https://youtu.be/nb_uMp38ebA?si=2_MUVyOYvYgYcGsL&t=16",    "none",     //  Grabity
    "mo",       "https://youtu.be/f_IuHhgUlt4?si=-oDon-A857jwSPX3&t=16",    "none",     //  Moving Out
    "mo2",      "https://youtu.be/EdDrzJP3dKM?si=wn5A1dKF9DY7yeWw&t=6",     "little",   //  Moving out 2
    "mpss",     "https://youtu.be/2jEq0F656aY?si=RAjSzzgplq_7PXKb&t=3",     "little",   //  Mario Party Superstar
    "smpj",     "https://youtu.be/ynP20RtOYvU?si=47h6jEMKJaT97fMB&t=38",    "some",     //  Super Mario Party. Jamporie
    "oc2",      "https://youtu.be/9LpXVOO4-a8?si=3fC_LQ3GzLzxmXMF&t=598",   "some",     //  Overcooked 2
    "slftfo",   "https://youtu.be/sHGYqri4Qcs?si=GrMj-QSJi1K51TVV&t=29",    "none",     //  Spacelines from The Farout 
    "oddc",     "https://youtu.be/Djmp1oupoOQ?si=aweL2rgTjQyiPNA-&t=138",   "little",   //  Octodad Dadliest Catch
    "rl",       "https://youtu.be/JL5MBZvdGfQ?si=8AtXJTaIox3CplLp&t=13",    "none",     //  Rocket league
    "smbw",     "https://youtu.be/A-4ddow_RGs?si=mXemLMNA_d0jf9FY&t=311",   "none",     //  Super Mario Bros. Wonder
    "tp",       "https://youtu.be/QFA74asrQBg?si=FDN_vsKU_OAz7DPJ&t=14",    "none",     //  Trash Patrol
    "tt",       "https://youtu.be/wLRIhNFUE9c?si=kq6--eA2AM7SzQiz&t=47",    "some",     //  Tricky Towers
    "uch",      "https://youtu.be/PeL1uJwjyY0?si=fa6sEOUu4r0BONrW&t=159",   "little",   //  Ultimate Chicken Horse
    "mcps3",    "https://youtu.be/AXhHFmk3WVs?si=pAGLtdW_HuVbamjS&t=3690",  "none",     //  Minecraft Playstation 3
    
    "bto",      "https://youtu.be/SN15PnaPYVc?si=DBLIJr6TVAUPOumX&t=15",    "none",     //  Brotato      
    "scrc",     "https://youtu.be/ZQlXH4WbhMA?si=hLd4Kwf-75XogfPN&t=33",    "none",     //  Super Crazy Rhythm Castle

    
    



]; 

let fourLen = four_plus.length;

let fourdisplay = "<div>";
for (let i = 1; i < fourLen/3 +1; i++) {
    fourdisplay +=  "<a href=\"" + four_plus[3*i-2] + "\">" +    "<img class=\"" + four_plus[3*i-1] + "\" " + "src=\"" + four_plus[3*i-3] + ".png\"><a>"
}

fourdisplay += "</div>";

document.getElementById("fourp").innerHTML = fourdisplay;        




const two_plus = [
    "it2",      "https://youtu.be/i7ISeIm6l3E?si=pPHe1PTeLG9XcdjS&t=394",               "none",     //  It Takes 2
    "usf4",     "https://youtu.be/Wxvv80CVlVk?si=mpujiEs4nBK1TJF3&t=40",                "none",     //  Ultra Street Fighter IV
    "dd",       "https://youtu.be/5XVVgGtsh00?si=_NCLPv4mv4A5PaKE&t=219 ",              "none",     //  DNF Duel
    "dst",      "https://www.youtube.com/live/l_zMeMwW41U?si=4jnfvVYXd3bCB9WR&t=768",   "none",     //  Don't Starve Together
    "cu",       "https://youtu.be/cCRTRsQ2W1U?si=culFlJH-GbbwVIzp&t=59",                "none",     //  Chess Ultra
    "cwm",      "https://youtu.be/3bztdbNp7Hw?si=yhdU7HkmCITChjFR&t=498",               "none",     //  Come With Me

    "kott",     "https://youtu.be/VIpUR_xzUZs?si=jnqrUR25E2XXMAbn",                     "none",     //  Keepers of the Tree
    "lswtss",   "https://youtu.be/U-zxyUUzzrA?si=h_dycV6hL3rRdBFR&t=42",                "none",     //  LEGO Star Wars: The Skywalker Saga
    "rraigl",   "https://youtu.be/yOmyZPtWvoY?si=6wmLbRqCBy-G2BNx&t=30",                "none",     //  Rugrats: Adventures in Gameland
    "cq2",      "https://youtu.be/qCP-DWXK2qE?si=bZLKWpJoC6Wh_92X&t=13",                "none",     //  Cat Quest II
    "t",        "https://youtu.be/HbzLDm_be_o?si=6SC2E0G0neTCfmq4&t=21",                "none",     //  Tunche



];
let twoLen = two_plus.length;

let twodisplay = "<div>";
for (let i = 1; i < twoLen/3 + 1; i++) {
    twodisplay +=  "<a href=\"" + two_plus[3*i-2] + "\">" +    "<img class=\"" + two_plus[3*i-1] + "\" " + "src=\"" + two_plus[3*i-3] + ".png\"><a>"
}

twodisplay += "</div>";

document.getElementById("twop").innerHTML = twodisplay;        


