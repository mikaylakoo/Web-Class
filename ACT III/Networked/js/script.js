

$('#menu').mouseover(function() {
  $('#text1').css("visibility","visible");
});

$('#menu').mouseout(function() {
  $('#text1').css("visibility","hidden");
});

$('#menu').mouseover(function() {
  $('#text2').css("visibility","visible");
});

$('#menu').mouseout(function() {
  $('#text2').css("visibility","hidden");
});

$('#menu').mouseover(function() {
  $('#text3').css("visibility","visible");
});

$('#menu').mouseout(function() {
  $('#text3').css("visibility","hidden");
});


function initMap() {
  var center = {lat: 41, lng: 17.340509};
  var locations = [
   

  //Brazil
    ['<h2> Brazil National Football Team</h2>'+
    '<h3> Brazil is the most successful national team in the FIFA World Cup, the main football international competition, being crowned winner five times: 1958, 1962, 1970, 1994 and 2002. Their clapping chant is three lines means, I am Brazilian, with a lot of pride, with a lot of love. </h3>'+
    '<audio autoplay>'+
    // '<div style = float:left> <img src="https://media0.giphy.com/media/ibnu3jYhGcaly/giphy.gif"></div>' +
    '<source src="audio/Brazil.mp3"'+
    '</audio autoplay>', -21.4880902,-56.1940229],

  //Aussie
    ['<h2> Australia Socceroos </h2>'+
    '<h3> National Australia soccer team, Australia is the only national team to have been a champion of two confederations, having won the OFC Nations Cup four times between 1980 and 2004, as well as the AFC Asian Cup at the 2015 event on home soil. The team has represented Australia at the FIFA World Cup tournament on five occasions. </h3>'+
    '<audio autoplay>'+
    '<source src="audio/Austrailia.mp3"'+
    '</audio autoplay>', -30.680833, 121.0754823],

 //Spain
    ['<h2> Spain National Football Team</h2>'+
    '<h3> Spain is one of the eight national teams to have been crowned worldwide champions, having participated in a total of 15 of 21 FIFA World Cups and qualifying consistently since 1978. Spain has also won three continental titles, having appeared at 10 of 15 UEFA European Championships. They are nicknamed La Roja (The Red One), La Furia Roja (The Red Fury). </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Spain.mp3"'+
    '</audio autoplay>', 38.267058, -0.6642143],


     //England Arsenal
    ['<h2> Arsenal England</h2>'+
    '<h3> Arsenal Football Club is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Arsenal-England.mp3"'+
    '</audio autoplay>', 51.5465063, 0.1444663],


     //New Zealand All Blacks
    ['<h2> New Zealand All Blacks Haka</h2>'+
    '<h3> The New Zealand national rugby union team, commonly known as the All Blacks, represents New Zealand in mens rugby union, which is considered to be the countrys national sport. The team won the Rugby World Cups in 2011 and 2015, as well as the inaugural tournament in 1987.They have a 77% winning record in test match rugby, and are the only international men side with a winning record against every opponent. Whilst the other entries on this list are sung and chanted by spectators, the Haka is performed by the New Zealand players. The various hakas, originally performed by the Maori people of New Zealand hundreds of years ago, one specific haka has become renowned around the world due to its performance by the New Zealand rugby team for over 125 years.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/NewZealand.mp3"'+
    '</audio autoplay>', -41.2758256, 174.7760331],


     //Korea Soccer
    ['<h2> South Korea National Soccer, Red Devils</h2>'+
    '<h3> Since the 1960s, South Korea has emerged as a major football power in Asia and is historically the most successful Asian football team, having participated in nine consecutive and ten overall FIFA World Cup tournaments, the most for any Asian country.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Korea.mp3"'+
    '</audio autoplay>', 37.568222, 126.897361],

     //Manchester
    ['<h2> Manchester United Football Club </h2>'+
    '<h3> Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football; nicknamed "the Red Devils". Manchester United have won more trophies than any other club in English football, with a record 20 League titles, 12 FA Cups, five League Cups and a record 21 FA Community Shields. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Manchester-England.mp3"'+
    '</audio autoplay>', 53.4591658, -2.2908599],

     //Liverpool
    ['<h2> Liverpool Football Club</h2>'+
    '<h3> Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football. The club has won six European Cups, more than any other English club, three UEFA Cups and four UEFA Super Cups. Red has been the main shirt colour ever since 1896. The club anthem is You will Never Walk Alone. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Liverpool-England.mp3"'+
    '</audio autoplay>', 53.4319622, -2.970507,],

     //LAFC
    ['<h2> Los Angeles Football Club</h2>'+
    '<h3> An American professional soccer franchise based in Los Angeles, California, that competes in Major League Soccer (MLS) as a member of the Western Conference.Their main rival is the LA Galaxy, who play in the Los Angeles suburb of Carson. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/LAFC-US.mp3"'+
    '</audio autoplay>', 34.0127708,-118.2840845],


     //Iran
    ['<h2> Iran National Football Team, Team Melli</h2>'+
    '<h3> Represents Iran in international football and is controlled by the Iran Football Federation. From 2014-2018, the mens national football team of Iran remained the high rank team in Asia, representing the longest continuous period of time a team has been top of the continent in the rankings. The most common one used is "Team Melli", which literally means "The National Team" in Persian language. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Iran.mp3"'+
    '</audio autoplay>', 35.724463, 51.2756365],

     //Italy
    ['<h2> Italy National Football Team, gli Azzurri</h2>'+
    '<h3> The Italy national football team, Italy is one of the most successful national teams in the history of the World Cup, having won four titles (1934, 1938, 1982, 2006) and appearing in two other finals (1970, 1994), reaching a third place (1990) and a fourth place (1978). The team is known as gli Azzurri (the Blues). Savoy blue is the common colour of the national teams representing Italy, as it is the traditional paint of the royal House of Savoy, which reigned over the Kingdom of Italy from 1860 to 1946. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Italy.mp3"'+
    '</audio autoplay>', 41.934077, 12.454725],


    //Russia
    ['<h2> Russia National Football Team, </h2>'+
    '<h3> The Russia national football team, represents Russia in international football and is controlled by the Russian Football Union. Although a member of FIFA since 1912 (as the Soviet Union before 1990), Russia first entered the FIFA World Cup in 1958. They qualified for the tournament 11 times in total, with their best result being their fourth-place finish in 1966. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Russia.mp3"'+
    '</audio autoplay>', 55.715762, 37.551527],


     //Celtic
    ['<h2> Celtic Football Club,   </h2>'+
    '<h3> A Scottish professional football club based in Glasgow, which plays in the Scottish Premiership. Celtic are one of the most successful football clubs in the world and are one of only five clubs to have won over 100 trophies in their history. The club has won the Scottish league championship 50 times, most recently in 2018–19. Celtic have a long-standing fierce rivalry with Rangers, and the clubs are known as the Old Firm, seen by some as the worlds biggest football derby. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Celtics.mp3"'+
    '</audio autoplay>', 55.849696, -4.2077314],

     //Japan
    ['<h2> Japan National Team Cheer </h2>'+
    '<h3> Represents Japan in international football and is controlled by the Japan Football Association (JFA), the governing body for football in Japan.Japans major chant takes from the Spanish word for "vamos," meaning lets go or come on. "Nippon" is the Japanese way of referring to their own country. Put the two together and add some "Oooooooo" and you got "Vamos Nippon" </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Japan.mp3"'+
    '</audio autoplay>', 35.9031054, 139.7154089],

    //Argentina
    ['<h2> Argentina</h2>'+
    '<h3> Also known as the La Albiceleste, has appeared in five World Cup finals. Argentina, Brazil and France are the only national teams that have won the three most important mens titles recognized by FIFA: the World Cup, the Confederations Cup, and the Olympic tournament. Argentina is known for having rivalries with Brazil, Uruguay, England, and Germany due to particular occurrences with one another throughout football history. Their chant "Vamos vamos Argentina" has the benefit of being repeating, loud, and also mildly obscene. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Argentina.mp3"'+
    '</audio autoplay>', -34.5453062, -58.4519636],

    //France
    ['<h2> France</h2>'+
    '<h3> Represents France in international football and is controlled by the French Football Federation, also known as FFF, or in French: Fédération française de football. France was the second national team that has won the three most important mens titles recognized by FIFA: the World Cup, the Confederations Cup, and the Olympic tournament after victory in the Confederations Cup in 2001. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/France.mp3"'+
    '</audio autoplay>', 48.9244592, 2.3579758],

    //Algeria
    ['<h2> Algeria National Soccer Team</h2>'+
    '<h3> Algeria joined FIFA on 1 January 1964, a year and a half after gaining independence. The North African team has qualified for four World Cups in 1982, 1986, 2010 and 2014. Algeria has won the African Cup of Nations twice, once in 1990, when they hosted the tournament, and again in 2019. At the 2014 World Cup. "One-two-three" goes the Algerian chant, references Algerias momentous 3-2 victory over the colonialist French at the Mediterranean Games in 1975. T </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Algeria.mp3"'+
    '</audio autoplay>', 36.7599253, 2.9932764],

    //Vietam
    ['<h2> Vietnam National Soccer Team</h2>'+
    '<h3> Represents Vietnam in international football and is controlled by the Vietnam Football Federation. Vietnamese supporters are dubbed to be some of the best and most passionate fans, renowned for large celebrations over the teams achievements, regardless if it is a senior or youth side. Park Hang-seo, former assistant of Guus Hiddink during the 2002 FIFA World Cup, was appointed as new coach of Vietnam in 2017 and the national team is marking the "beginning of the new dawn" with the successful result of the 2018 AFC U-23 championship.</h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Vietnam.mp3"'+
    '</audio autoplay>', 21.0204472, 105.761776],

    //China
    ['<h2> China Olympic Team </h2>'+
    '<h3> Originally having participated in Olympics as the delegation of the Republic of China (ROC) from 1924 (Summer Olympics) to 1976 (Winter Olympics), China competed at the Olympic Games under the name of the Peoples Republic of China (PRC) for the first time in 1952. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/China.mp3"'+
    '</audio autoplay>', 39.9929431, 116.3943225],

    //North Korea
    ['<h2> North Korea Olympic Cheer</h2>'+
    '<h3> The Democratic Peoples Republic of Korea (commonly known as North Korea) first participated at the Olympic Games in 1964. The National Olympic Committee for North Korea is the Olympic Committee of the Democratic Peoples Republic of Korea. North Korean athletes have won a total of 56 medals, two of which were won at the Winter Games. Government funding plays a major role in Koreas success. Elite athletes often enjoy highly developed facilities and luxurious lifestyles, compared with their peers.</h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/NorthKorea.mp3"'+
    '</audio autoplay>', 39.0495476, 125.773135],

    //Pakistan
    ['<h2> Pakistan Soccer Cheer</h2>'+
    '<h3> Represents Pakistan association football in FIFA-authorised events and is controlled by the Pakistan Football Federation.Pakistan contest the South Asian Football Federation Championship and South Asian Games, which alternate biennially. Pakistan won the Colombo Cup in 1952. Pakistan has great record in South Asian Games, won four gold medals. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Pakistan.mp3"'+
    '</audio autoplay>', 31.5107984, 74.3290185],


    //Canada Toronto Maple Leafs
    ['<h2> Toronto Maple Leafs</h2>'+
    '<h3> Officially the Toronto Maple Leaf Hockey Club and often simply referred to as the Leafs, are a professional ice hockey team based in Toronto, Ontario. The club has won thirteen Stanley Cup championships, second only to the 24 championships of the Montreal Canadiens.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/MapleLeafs.mp3"'+
    '</audio autoplay>', 43.6434661, -79.3812876],

    //Toronto Raptops
    ['<h2> Toronto Raptors</h2>'+
    '<h3> A Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association (NBA) as a member of the leagues Eastern Conference Atlantic Division. In the 2019 playoffs, the Raptors won their first Eastern Conference title and advanced to their first NBA Finals, where they won their first NBA championship.</h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Raptors.mp3"'+
    '</audio autoplay>', 43.6434661, -79.4212876],

    //Toronto Blue Jays
    ['<h2> Toronto Blue Jays</h2>'+
    '<h3> A Canadian professional baseball team based in Toronto, Ontario. The Blue Jays compete in Major League Baseball (MLB). The "Blue Jays" name originates from the bird of the same name. From 1985 to 1993, they were an AL East powerhouse, winning five division championships in nine seasons, including three consecutive from 1991 to 1993.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/BlueJays.mp3"'+
    '</audio autoplay>', 43.6417798, -79.3913324],

    //New York Yankee
    ['<h2> New York Yankees</h2>'+
    '<h3> An American professional baseball team based in the New York City borough of the Bronx. They compete in Major League Baseball (MLB), and are arguably the most successful professional sports team in the United States; they have won 19 American League East Division titles, 40 American League pennants, and 27 World Series championships, all of which are MLB records.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/NewYork.mp3"'+
    '</audio autoplay>', 40.8296426, -73.9283632],

     //Iceland
    ['<h2> Iceland Soccer, Strákarnir okkar (Our Boys) </h2>'+
    '<h3> Represents Iceland in international football, the team has enjoyed success in the second half of the 2010s. In the qualifying rounds for the 2014 FIFA World Cup, they became the smallest nation by population to ever clinch a FIFA World Cup berth when they qualified. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Iceland.mp3"'+
    '</audio autoplay>', 64.1434266, -21.8812204],

         //Phillipines
    ['<h2> Philillipines National Soccer Team </h2>'+
    '<h3> Part of the national association football team of the Philippines and represents the country in international football. It is one of the oldest national teams in Asia and has been playing at the international level as early as 1913. So far, the national team has qualified for the AFC Asian Cup only once, in 2019. The national teams best finish in a major tournament was at the 2014 AFC Challenge Cup where they finished second. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/phillippines.mp3"'+
    '</audio autoplay>', 14.7948971, 120.880657],

             //Malaysia
    ['<h2> Malaysia National Football Team </h2>'+
    '<h3> The Malaysia national football team is recognised by FIFA as the successor of the defunct Malaya national football team and is nicknamed Harimau Malaya in reference to the Malayan tiger. It is one of the successful teams in Southeast Asia along with Singapore, Thailand and Vietnam, winning bronze at the Asian Games in 1974 as well winning the ASEAN Football Championship in 2010 and other competitions while improving at the same time. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Malaysia.mp3"'+
    '</audio autoplay>', 3.0546349, 101.6891513],

    //Hongkong
    ['<h2> Hong Kong National Soccer Team </h2>'+
    '<h3> Represents Hong Kong in international football and is controlled by the Hong Kong Football Association, the governing body for football in Hong Kong. Hong Kong FA became a member of FIFA and the Asian Football Confederation since 1954. Since then Hong Kong played their first FIFA-recognized international match against other countries.  </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/HongKong.mp3"'+
    '</audio autoplay>', 22.2730071, 114.1886196],

    //South Africa
    ['<h2> South Africa National Football Team</h2>'+
    '<h3> Represents South Africa and is controlled by the South African Football Association, the governing body for football in South Africa. South Africa became the first African nation to host the FIFA World Cup when it was granted host status for the 2010 edition. The teams greatest achievement was winning the Africa Cup of Nations at home in 1996. </h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/SouthAfrica.mp3"'+
    '</audio autoplay>', -26.2347569, 27.9804667],

   //Nigeria
    ['<h2> Nigeria National Football Team, Super Eagles </h2>'+
    '<h3> They are three-time Africa Cup of Nations winners, with their most recent title in 2013. The Super Eagles are considered the greatest African football team of all time due to their numerous achievements and records. In April 1994, the Super Eagles were ranked 5th in the FIFA rankings, the highest FIFA ranking position ever achieved by an African football team.</h3>'+
    '<audio autoplay>'+
    // '<img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/05/21/spain-world-cup-roster.jpg?itok=X4YPnoTo"'+
    '<source src="audio/Nigeria.mp3"'+
    '</audio autoplay>', 9.037949, 7.4512303],


  ];
  


  
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2.6,
    center: center,
    styles: [{"featureType": "all", "elementType": "all", "stylers": [ { "visibility": "on" }, { "hue": "#00ffca" } ] }, { "featureType": "all", "elementType": "geometry", "stylers": [ { "hue": "#ff0031" } ] }, { "featureType": "all", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "saturation": "100" }, { "lightness": "-2" }, { "color": "#6100ff" } ] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" }, { "hue": "#00b2ff" } ] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "gamma": 0.01 }, { "lightness": 20 }, { "weight": "1.39" }, { "color": "#ffffff" } ] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "weight": "0.96" }, { "saturation": "9" }, { "visibility": "on" }, { "color": "#000000" } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#f7f6ed" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "hue": "#2000ff" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "gamma": "0.08" }, { "lightness": "20" }, { "color": "#ffffff" } ] }, { "featureType": "administrative.province", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#e0ff8b" } ] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffec12" }, { "saturation": "22" } ] }, { "featureType": "administrative.province", "elementType": "labels", "stylers": [ { "visibility": "on" }, { "hue": "#00c2ff" } ] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [ { "hue": "#fffb00" }, { "visibility": "on" }, { "saturation": "0" } ] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "hue": "#ff0000" } ] }, { "featureType": "administrative.locality", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "hue": "#c2ff00" } ] }, { "featureType": "administrative.land_parcel", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "hue": "#fff300" } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "lightness": 30 }, { "saturation": "9" }, { "color": "#b067f7" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "saturation": 20 } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "lightness": 20 }, { "saturation": -20 } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 10 }, { "saturation": -30 } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#193a55" } ] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "saturation": 25 }, { "lightness": 25 }, { "weight": "0.01" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "lightness": -20 }]}]

  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}





  




