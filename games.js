const six_plus = [
    "gang beasts",   "https://www.youtube.com/watch?v=Vz0BriND6pE&t=27s",        "much",
    "Towerfall",   "https://youtu.be/T7Lyf1fkoHY?si=CfaIq0VSwmjFKowk",         "",
    "super smash bros ultimate", "https://youtu.be/7Xepdym7bFQ?si=--oF6usvgXDIAzge&t=16", "",
    "boomerang fu",     "https://youtu.be/-h3O0YST4ZU?si=bnHdtqn0E3zM91tR&t=26",     "",
    "brawlhalla",   "https://youtu.be/6EldwmVrElA?si=agG70oDc3Y6fG9yH&t=17",    "much", 
    "unspottable",  "https://youtu.be/5Xd4OzUpdhM?si=iT5uxzhtsrbSdWH8&t=376",   "",
    "PICO PARK Classic Edition", "https://youtu.be/-iBBkVgPA2c?si=gKTqa3fLoIf8pa3U&t=50",    "",
    "pico park",   "https://youtu.be/jtNGxbm85u8?si=jLdqYSBaoE6Ajmkm&t=31",    "",   
    "PICO PARK 2",  "https://youtu.be/lN_DlZq7GnQ?si=zZ67RfDZhDCHhzAU",         "",  
    "astro duel ii",  "https://youtu.be/2rejbEAr96c?si=sxol-0JQTLWLEi04&t=136",   "",
    "eFootball™", "", "much",
]; 


let sixLen = six_plus.length;

let sixdisplay = "<div>";
for (let i = 1; i < sixLen/3+1; i++) {
    sixdisplay += "<a href=\"" + six_plus[3*i-2] + "\">" +   "<img class=\"" + six_plus[3*i-1] + "\"" + "src=\"6/" + six_plus[3*i-3] + ".png\"></a>"
}

sixdisplay += "</div>";

document.getElementById("sixp").innerHTML = sixdisplay;



const four_plus = [
    "castle crashers",       "https://youtu.be/2NBOxQ93YBg?si=YF3uYpPPGSTEcxsO&t=248",   "",     
    "grabity",        "https://youtu.be/nb_uMp38ebA?si=2_MUVyOYvYgYcGsL&t=16",    "",     
    "overcooked 2",      "https://youtu.be/9LpXVOO4-a8?si=3fC_LQ3GzLzxmXMF&t=598",   "",     
    "Spacelines From The Far Out",   "https://youtu.be/sHGYqri4Qcs?si=GrMj-QSJi1K51TVV&t=29",    "much",  
    "moving out",       "https://youtu.be/f_IuHhgUlt4?si=-oDon-A857jwSPX3&t=16",    "",   
    "moving out 2",      "https://youtu.be/EdDrzJP3dKM?si=wn5A1dKF9DY7yeWw&t=6",     "",
    "expendabros",       "https://youtu.be/JX2SNrLsE28?si=E5yReRgczZNiaHwc&t=9",     "",  
    "heave ho",       "https://youtu.be/tl07NG4ZY5c?si=-UfN_cdL1wlR1yXV&t=55",    "",   
    "mario party superstar",     "https://youtu.be/2jEq0F656aY?si=RAjSzzgplq_7PXKb&t=3",     "much",   
    "super mario party jamboree",     "https://youtu.be/ynP20RtOYvU?si=47h6jEMKJaT97fMB&t=38",    "",
    "octodad",     "https://youtu.be/Djmp1oupoOQ?si=aweL2rgTjQyiPNA-&t=138",   "", 
    "rocket league",       "https://youtu.be/JL5MBZvdGfQ?si=8AtXJTaIox3CplLp&t=13",    "much", 
    "super mario bros wonder",     "https://youtu.be/A-4ddow_RGs?si=mXemLMNA_d0jf9FY&t=311",   "much",   
    "trash patrol",       "https://youtu.be/QFA74asrQBg?si=FDN_vsKU_OAz7DPJ&t=14",    "",
    "Tricky towers",       "https://youtu.be/wLRIhNFUE9c?si=kq6--eA2AM7SzQiz&t=47",    "", 
    "ultimate chicken horse",      "https://youtu.be/PeL1uJwjyY0?si=fa6sEOUu4r0BONrW&t=159",   "", 
    "minecraft ps3",    "https://youtu.be/AXhHFmk3WVs?si=pAGLtdW_HuVbamjS&t=3690",  "", 
    "brotato",      "https://youtu.be/SN15PnaPYVc?si=DBLIJr6TVAUPOumX&t=15",    "",  
    "Super Crazy Rhythm Castle",     "https://youtu.be/ZQlXH4WbhMA?si=hLd4Kwf-75XogfPN&t=33",    "", 

    
    



]; 

let fourLen = four_plus.length;

let fourdisplay = "<div>";
for (let i = 1; i < fourLen/3 +1; i++) {
    fourdisplay +=  "<a href=\"" + four_plus[3*i-2] + "\">" +    "<img class=\"" + four_plus[3*i-1] + "\" " + "src=\"4/" + four_plus[3*i-3] + ".png\"><a>"
}

fourdisplay += "</div>";

document.getElementById("fourp").innerHTML = fourdisplay;        




const two_plus = [
    "it takes two",      "https://youtu.be/i7ISeIm6l3E?si=pPHe1PTeLG9XcdjS&t=394",               "",
    "keepers of the trees",     "https://youtu.be/VIpUR_xzUZs?si=jnqrUR25E2XXMAbn",              "",    
    "Keep Talking and Nobody Explodes", "", "", 
    "biped", "", "",    
    "kirby and the forgotten land", "", "",
    "Escape Academy", "", "", 
    "tounche",        "https://youtu.be/HbzLDm_be_o?si=6SC2E0G0neTCfmq4&t=21",                "",     
    "wizard of legend", "", "", 
    "portal 2", "", "",    
    "cat quest ii",      "https://youtu.be/qCP-DWXK2qE?si=bZLKWpJoC6Wh_92X&t=13",                "",  
    "come with me",      "https://youtu.be/3bztdbNp7Hw?si=yhdU7HkmCITChjFR&t=498",               "",

    "lego star wars the skywalker saga",   "https://youtu.be/U-zxyUUzzrA?si=h_dycV6hL3rRdBFR&t=42", "much", 
    "DNF duel",       "https://youtu.be/5XVVgGtsh00?si=_NCLPv4mv4A5PaKE&t=219 ",              "much",   
    "Degrees of Separation",    "", "",
    "pikuniku", "", "",
    "crumble", "", "",
    "Mini Thief", "", "", 
    "rugrats adventure in gameland",   "https://youtu.be/yOmyZPtWvoY?si=6wmLbRqCBy-G2BNx&t=30", "",     
    "chess ultra",       "https://youtu.be/cCRTRsQ2W1U?si=culFlJH-GbbwVIzp&t=59", "",



];
let twoLen = two_plus.length;

let twodisplay = "<div>";
for (let i = 1; i < twoLen/3 + 1; i++) {
    twodisplay +=  "<a href=\"" + two_plus[3*i-2] + "\">" +    "<img class=\"" + two_plus[3*i-1] + "\" " + "src=\"2/" + two_plus[3*i-3] + ".png\"><a>"
}

twodisplay += "</div>";

document.getElementById("twop").innerHTML = twodisplay;        


