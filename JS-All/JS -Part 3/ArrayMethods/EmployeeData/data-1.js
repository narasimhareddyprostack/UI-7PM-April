let users=[{"id":1,"name":"Ernesta","email":"epena0@nba.com","gender":"Female"},
{"id":2,"name":"Letty","email":"lleppingwell1@ucoz.ru","gender":"Female"},
{"id":3,"name":"Trixie","email":"tcowie2@stumbleupon.com","gender":"Female"},
{"id":4,"name":"Elton","email":"eallmark3@hibu.com","gender":"Male"},
{"id":5,"name":"Jacky","email":"jperritt4@scribd.com","gender":"Female"},
{"id":6,"name":"Aron","email":"ahalleybone5@hp.com","gender":"Male"},
{"id":7,"name":"Horacio","email":"hutley6@ow.ly","gender":"Male"},
{"id":8,"name":"Martica","email":"mkilfeather7@so-net.ne.jp","gender":"Female"},
{"id":9,"name":"Devina","email":"dgiddings8@dion.ne.jp","gender":"Female"},
{"id":10,"name":"Mabel","email":"mrhymes9@bbc.co.uk","gender":"Female"},
{"id":11,"name":"Urbanus","email":"ustevena@vimeo.com","gender":"Male"},
{"id":12,"name":"Cherye","email":"ctroddb@hc360.com","gender":"Female"},
{"id":13,"name":"Thibaud","email":"tocurriganc@networksolutions.com","gender":"Male"},
{"id":14,"name":"Laureen","email":"lkinghd@nymag.com","gender":"Female"},
{"id":15,"name":"Lindi","email":"lemere@newsvine.com","gender":"Female"},
{"id":16,"name":"Moshe","email":"myurocjkinf@sohu.com","gender":"Male"},
{"id":17,"name":"Babs","email":"bwilliscroftg@godaddy.com","gender":"Female"},
{"id":18,"name":"Floria","email":"fpoundsfordh@rediff.com","gender":"Genderqueer"},
{"id":19,"name":"Robbi","email":"rfarlandi@goo.ne.jp","gender":"Female"},
{"id":20,"name":"Caitrin","email":"cjohnssonj@feedburner.com","gender":"Non-binary"},
{"id":21,"name":"Camellia","email":"ckynochk@constantcontact.com","gender":"Female"},
{"id":22,"name":"Micaela","email":"mlerhinanl@zimbio.com","gender":"Female"},
{"id":23,"name":"Valenka","email":"vkiddm@reuters.com","gender":"Female"},
{"id":24,"name":"Mikol","email":"mriponn@godaddy.com","gender":"Male"},
{"id":25,"name":"Duky","email":"dpapao@hc360.com","gender":"Agender"},
{"id":26,"name":"Jonis","email":"jormesherp@ca.gov","gender":"Female"},
{"id":27,"name":"Elwood","email":"ebrandassiq@paginegialle.it","gender":"Male"},
{"id":28,"name":"Adelaida","email":"aduckerr@marketwatch.com","gender":"Female"},
{"id":29,"name":"Sayer","email":"spoynters@freewebs.com","gender":"Male"},
{"id":30,"name":"Cathlene","email":"cglasscottt@moonfruit.com","gender":"Female"},
{"id":31,"name":"Zebedee","email":"zdaviotu@loc.gov","gender":"Male"},
{"id":32,"name":"Marne","email":"mcatterollv@shutterfly.com","gender":"Female"},
{"id":33,"name":"Taite","email":"tmcanew@disqus.com","gender":"Male"},
{"id":34,"name":"Gonzalo","email":"glansburyx@furl.net","gender":"Male"},
{"id":35,"name":"Emanuel","email":"ewedgwoody@buzzfeed.com","gender":"Male"},
{"id":36,"name":"Maury","email":"mcraykz@ftc.gov","gender":"Male"},
{"id":37,"name":"Maybelle","email":"mantonat10@cdc.gov","gender":"Female"},
{"id":38,"name":"Rowney","email":"roneile11@digg.com","gender":"Male"},
{"id":39,"name":"Rosalyn","email":"rdunbar12@infoseek.co.jp","gender":"Female"},
{"id":40,"name":"Teriann","email":"trobben13@4shared.com","gender":"Female"},
{"id":41,"name":"Hubey","email":"hlavigne14@symantec.com","gender":"Male"},
{"id":42,"name":"Donielle","email":"dcauthra15@who.int","gender":"Female"},
{"id":43,"name":"Erny","email":"erawll16@elpais.com","gender":"Male"},
{"id":44,"name":"Obadiah","email":"orecher17@aboutads.info","gender":"Male"},
{"id":45,"name":"Josh","email":"joulet18@wiley.com","gender":"Male"},
{"id":46,"name":"Tamiko","email":"tmorman19@blogs.com","gender":"Female"},
{"id":47,"name":"Eada","email":"edoick1a@mit.edu","gender":"Female"},
{"id":48,"name":"Hale","email":"hconn1b@wufoo.com","gender":"Male"},
{"id":49,"name":"Marty","email":"msevitt1c@cbc.ca","gender":"Male"},
{"id":50,"name":"Lu","email":"lguiu1d@privacy.gov.au","gender":"Female"}]


let display_Data = ()=>{
       let rows=""
       for(user of users){
        rows=rows+`<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.gender}</td>
                    </tr>`
       }
       document.getElementById('table_Data').innerHTML=rows
}
/* function display_Data(){
       // alert('Test Case 123')
       let rows=""
       for(user of users){
        rows=rows+`<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.gender}</td>
                    </tr>`
       }
       document.getElementById('table_Data').innerHTML=rows
       //document.getElementById('table_Data').innerHTML="GM"
} */