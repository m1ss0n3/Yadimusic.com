var markup = function(id, name, author, image){
    
    return `
    
    
    <div class="card">
        
        <div class="panel">
        
        <div class="title">
            ${name}
        </div>
        
        <div class="author">
            ${author}
        </div>
        
        <div class="control">
            
            <button onclick="mint()" class="prev">
            
            <i class="material-icons">fast_rewind</i>
                
                
            </button>
            
            <button id="playbtn${id}" onclick="play(this, ${id})" class="playbtn">
            
            <i class="material-icons">play_arrow</i>
                
            </button>
            
            <button onclick="maxt()" class="next">
            
             <i class="material-icons">fast_forward</i>
                
            </button>
            
        </div>
            
        </div>
        
        <div class="image">
        
        <img src="${image}"/>
            
        </div>
        
            
        </div>
        
        
        `;
    
};

var aud = new Audio(); 

var lastsong = null;


var i=0,text;
text="     Yadi X Ara Music Player "


    
       function typing(){ document.getElementById("text").innerHTML+=text.charAt(i);
        i++;
        }
        setInterval(typing,300);
    
    

var songs = [
{
    name: "Selamat tinggal",
    artist: "4prili666host",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIYAl_Dzhf-RC-pYT0r0o8FFiWLiH92PuNrg&usqp=CAU",
    song: "https://e.top4top.io/m_1728hmzkr0.mp3",
    isPlay: false
},		
{
    name: "Odading Mang Oleh",
    artist: "Ade londok",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD4an8JkkbObGKS-DSQoplZp8PMz1P-7ttyg&usqp=CAU",
    song: "https://e.top4top.io/m_17231h3ti0.mp3",
    isPlay: false
},
	{
    name: "Benci ku sangka sayang",
    artist: "Sonia",
    poster: "",
    song: "https://f.top4top.io/m_1643h50c30.mp3",
    isPlay: false
},

{
    name: "Ibiza",
    artist: "Tyga",
    poster: "",
    song: "https://h.top4top.io/m_1643fmq9k0.mp3",
    isPlay: false
},	
{
    name: "Seperti Yang Kau Minta",
    artist: "Chrisye",
    poster: "",
    song: "https://b.top4top.io/m_1666ugwu20.mp3",
    isPlay: false
},
{
    name: "Tetap Bersama",
    artist: "Nobitasan",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUkmJ0XppXdUTgajAzpJxup8mHD3AWgEidmg&usqp=CAU	",
	song: "https://g.top4top.io/m_16586whrz0.mp3",
    isPlay: false
},
{
    name: "Bersama kembali",
    artist: "Nobitasan",
    poster: "data:image/jpeg;base64,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",
    song: "https://j.top4top.io/m_1658bs04o0.mp3",
    isPlay: false
},
{
    name: "Kenangan sebuah mimpi",
    artist: "Tinky winky",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_G1nTBhJbYb9re1eMTUHVKkQIB489O8AKJg&usqp=CAU",
    song: "https://l.top4top.io/m_1658ygd1u0.mp3",
    isPlay: false
},
{
    name: "Dj happy",
    artist: "Unknown",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtzTiMRODmP2g72kIgLEvQAE3tp4-wWuwhyA&usqp=CAU",
    song: "https://a.top4top.io/m_1658ykl5m0.mp3",
    isPlay: false
},
{
    name: "Behind",
    artist: "Aoi",
    poster: "",
    song: "https://g.top4top.io/m_1655uv0em0.mp3",
    isPlay: false
},
{
    name: "Nothing's gonna change my love for you",
    artist: "WestLife",
    poster: "",
    song: "https://d.top4top.io/m_1656194n80.mp3",
    isPlay: false
},
{
    name: "Banyu Moto",
    artist: "Nella kharisma ft Dory Harsa",
    poster: "",
    song: "https://e.top4top.io/m_1656nkgqc0.mp3",
    isPlay: false
},
{
    name: "Suci dalam debu",
    artist: "Iklim",
    poster: "",
    song: "https://f.top4top.io/m_1643h50c30.mp3",
    isPlay: false
},
{
    name: "Los dol",
    artist: "Denny Caknan",
    poster: "",
    song: "https://h.top4top.io/m_1645kl13v0.mp3",
    isPlay: false
},
{
    name: "Lilakno lungaku",
    artist: "Losskita",
    poster: "",
    song: "https://b.top4top.io/m_1645l8aue0.mp3",
    isPlay: false
},
{
    name: "Mungkin",
    artist: "Putih abu abu",
    poster: "",
    song: "https://c.top4top.io/m_16492c4080.mp3",
    isPlay: false
},
{
    name: "Best Friends",
    artist: "Rex Orange County",
    poster: "",
    song: "https://c.top4top.io/m_1645uk9l70.mp3",
    isPlay: false
},
{
    name: "Semoga Ya",
    artist: "Nostress",
    poster: "https://resize1.indiatvnews.com/en/resize/oldbucket/360_-/entertainmentbollywood/IndiaTv49e8dd_love-dose-song.jpg",
    song: "https://l.top4top.io/m_16452igpk0.mp3",
    isPlay: false
},
{
    name: "Blue Eyes",
    artist: "Yo Yo Honey Singh",
    poster: "https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/4w3vwD9GWj/size_m.webp",
    song: "https://dl.dropbox.com/s/78kgphpj426rimj/Blue%20Eyes%20YO%20YO%20Honey%20Singh.mp3?dl=0",
    isPlay: false
},
{
    name: "Ku mau dia",
    artist: "Andmesh",
    poster: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKPD941Ko/size_l.webp",
    song: "https://h.top4top.io/m_1649zbsyf0.mp3",
    isPlay: false
},
{
    name: "Lamborghini",
    artist: "The Doorbeen, Ft Ragini",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Lamberghini_song_cover.jpeg/220px-Lamberghini_song_cover.jpeg",
    song: "https://dl.dropbox.com/s/hk7qlpouf49j2pk/Lamberghini%20Full%20The%20Doorbeen%20Feat%20Ragini%20Latest%20Punjabi%20Song%202018%20Speed%20Records.mp3?dl=0",
    isPlay: false
},
{
    name: "Jajal kowe dadi aku",
    artist: "Happy Asmara",
    poster: "https://a10.gaanacdn.com/gn_img/song/Dk9KN2KBx1/9KNerJPdbB/size_m_1573453065.webp",
    song: "https://g.top4top.io/m_16457zso50.mp3",
    isPlay: false
},
{
    name: "Perlahan",
    artist: "Guyon Waton",
    poster: "https://images.indianexpress.com/2020/04/genda-phool-759.jpg",
    song: "https://k.top4top.io/m_16499w4fd0.mp3",
    isPlay: false
},
{
    name: "Love Story",
    artist: "Taylor swift",
    poster: "https://static.toiimg.com/thumb/msid-57204393,imgsize-155220,width-800,height-600,resizemode-75/57204393.jpg",
    song: "https://a.top4top.io/m_1649hpgks0.mp3",
    isPlay: false
},
{
    name: "Selow",
    artist: "Via Vallen",
    poster: "https://www.theindianwire.com/wp-content/uploads/2019/10/Bhoot-Song.jpg",
    song: "https://j.top4top.io/m_1649qr0t40.mp3",
    isPlay: false
},
{
    name: "Dance monkey",
    artist: "Tones and i",
    poster: "https://akm-img-a-in.tosshub.com/sites/ichowk/story/small/202003/ramayana-1-311_032820061047.jpg",
    song: "https://f.top4top.io/m_1649rn7qi0.mp3",
    isPlay: false
},
{
    name: "Bintang Kehidupan ",
    artist: "Nike Ardila",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShNFMnCK33EkEOS5JkL35CsreZOlY-if2vaA&usqp=CAU",
    song: "https://l.top4top.io/m_1643c7i880.mp3",
    isPlay: false
},
{
    name: "Lathi",
    artist: "Weird Genius",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgSk1CQaMO3B7EyTf9tpbGNJBZoXC--QW3yA&usqp=CAU",
    song: "https://j.top4top.io/m_16491a0vc0.mp3",
    isPlay: false
},
{
    name: "Dont watch me cry",
    artist: "Jorja Smith",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnMor4dqvUPeS4ydqW8yvib3pydBNO4yizkw&usqp=CAU",
    song: "https://d.top4top.io/m_1643pu7tq0.mp3",
    isPlay: false
},
{
    name: "Pamer bojo",
    artist: "Didi kempot",
    poster: "https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY120_CR19,0,82,120_AL_.jpg",
    song: "https://g.top4top.io/m_1655sr42d0.mp3",
    isPlay: false
},
{
    name: "Fire Drill",
    artist: "Melanie martinez",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2YyPmUdAD1bRL85Q9IVZrAGJKIt5mvVv_jg&usqp=CAU",
    song: "https://d.top4top.io/m_16438iac90.mp3",
    isPlay: false
},
{
    name: "Cold Water",
    artist: "Justin Bieber",
    poster: "https://pbs.twimg.com/media/Cn_kdiRUIAEeooP?format=jpg&name=small",
    song: "https://dl.dropbox.com/s/r8neonq04xryfeh/Cold%20Water_Major%20Lazer%2CJustin%20Bieber_Friendship%20Day.xoht?dl=0",
    isPlay: false
},
{
    name: "Taki Taki",
    artist: "DJ Snake",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Taki_Taki_%28Official_Single_Cover%29_-_DJ_Snake.png/220px-Taki_Taki_%28Official_Single_Cover%29_-_DJ_Snake.png",
    song: "https://dl.dropbox.com/s/cu7txlhrschudfm/DJ%20Snake%20-%20Taki%20Taki%20ft.%20Selena%20Gomez_%20Ozuna_%20Card%28M4A_128K%29.m4a?dl=0",
    isPlay: false
},
{
    name: "Girls Like You",
    artist: "Maaron 5, Cardi B",
    poster: "https://m.media-amazon.com/images/M/MV5BNWM5OWI2OWUtNjhiOS00MWYxLTlhZmUtMGZjYzBlNDA3M2MyXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_QL50_SY1000_SX1000_AL_.jpg",
    song: "https://dl.dropbox.com/s/yc2k5e8kvtg291q/Girls%20Like%20You_Maroon%205_Girls%20Like%20You.xoht?dl=0",
    isPlay: false
},
{
    name: "Shape Of You",
    artist: "Ed Sheeran",
    poster: "https://m.media-amazon.com/images/I/81PPDaaySeL._SS500_.jpg",
    song: "https://dl.dropbox.com/s/e53xcg3ur11mqlk/Ed%20Sheeran%20-%20Shape%20Of%20You%20%5BOfficial%5D%20%281%29.mp3?dl=0",
    isPlay: false
},
{
    name: "I don't care",
    artist: "Ed Sheeran, Justin Bieber",
    poster: "https://images.popbuzz.com/images/50942?crop=16_9&width=660&relax=1&signature=yOpdfdBOnxJUHVp-gwR_MWqiiag=",
    song: "https://dl.dropbox.com/s/du1uuk9mttlm3tf/I%20Don%27t%20Care_Max%20Martin%2CMax%20Martin%2CMax%20Martin%2CMax%20Martin%2CMax%20Martin_I%20Don%27t%20Care.xoht?dl=0",
    isPlay: false
},
{
    name: "Senorita",
    artist: "Camilla Cabello, Shawn Mendis",
    poster: "https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg?impolicy=website&width=362&height=240",
    song: "https://dl.dropbox.com/s/xa32b56cmhtk7h6/Shawn%20Mendes%20ft.%20Camila%20Cabello%20-%20Se%C3%B1orita%20%281%29.mp3?dl=0",
    isPlay: false
},
{
    name: "Cheap Thrills",
    artist: "Sean Paul",
    poster: "https://wallpapercave.com/wp/wp4523436.jpg",
    song: "https://dl.dropbox.com/s/k53x0acfamfesg7/Sia-Cheap-Thrills-ft.-Sean-Paul.mp3?dl=0",
    isPlay: false
},

{
    name: "Love Me Like You Do",
    artist: "Ellie Goudling",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png",
    song: "https://dl.dropbox.com/s/t2c46404cyrygr1/Ellie%20Goulding%20-%20Love%20Me%20Like%20You%20Do%20.mp3?dl=0",
    isPlay: false
},

{
    name: "Alone",
    artist: "Alan Walker",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Alan_Walker_-_Alone.png/220px-Alan_Walker_-_Alone.png",
    song: "https://dl.dropbox.com/s/9m1mv413y8typji/Alan%20Walker%20-%20Alone.mp3?dl=0",
    isPlay: false
},


{
    name: "Faded",
    artist: "Alan Walker",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Alan_Walker_-_Faded.png/220px-Alan_Walker_-_Faded.png",
    song: "https://dl.dropbox.com/s/4dr5sfmoyi9572k/Alan%20Walker%20-%20Faded.mp3?dl=0 ",
    isPlay: false
},


{
    name: "Thunder",
    artist: "Imagine Dragons",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Imagine_Dragons_Thunder.jpg/220px-Imagine_Dragons_Thunder.jpg",
    song: "https://dl.dropbox.com/s/xvxt4bic6hyu5b2/Imagine%20Dragons%20Thunder.mp3?dl=0",
    isPlay: false
},




{
    name: "Closer",
    artist: "Chainsmoker, Ft. Halsey",
    poster: "https://wallpapercave.com/wp/wp4606687.jpg",
    song: "https://dl.dropbox.com/s/zrll5kci35tyvw1/The%20Chainsmokers%20-%20Closer%20ft%20Halsey.mp3?dl=0",
    isPlay: false
},


{
    name: "Despacito",
    artist: "Daddy Yankee, Louis Foncy",
    poster: "https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY120_CR19,0,82,120_AL_.jpg",
    song: "https://dl.dropbox.com/s/5v7lazyj1x0yz5r/Luis%20Fonsi%20-%20Despacito%20ft%20Daddy%20Yankee.mp3?dl=0",
    isPlay: false
},


{
    name: "Pamer bojo",
    artist: "Didi kempot",
    poster: "https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY120_CR19,0,82,120_AL_.jpg",
    song: "https://g.top4top.io/m_1655sr42d0.mp3",
    isPlay: false
},






];


window.onscroll = function (){
    
    var nav = document.getElementById("nav");
    var textb = document.getElementById("text");
    
      textb.style.transform = "translate(0, -"+window.scrollY/2+"px)"
    
    if(window.scrollY >= 145){
    
    nav.style.background = "#07CFD4";
    
  
    
    }else {
    
    nav.style.background = "transparent";
        
    }
    
}



window.onload = function (){
    
    var container = document.getElementById("container");
    
    for(var i=0; i<=songs.length - 1; i++){
    
    container.innerHTML += markup(i, songs[i].name, songs[i].artist, songs[i].poster);
    
    }
    var pre = document.getElementById("pre");
   
   pre.style.display = "none";
   
   
}


function opensearch(){

   document.getElementById("sbar").style.right = "0";
   
   scrollTo(0, 145);
    
}

function openm(){
    
    document.getElementById("drop").style.left = "0";
    
}

function closem(){
    
    document.getElementById("drop").style.left = "-300px";
    
}

function closesearch(){

   document.getElementById("sbar").style.right = "-100%";
   
   document.getElementById("inp").value = "";
   
  var cardc = document.getElementsByClassName("card");
  
  for(var i = 0; i<=cardc.length-1; i++){
      
      cardc[i].style.display = "";
      
  }
    
}


function search(){
    var m = document.getElementsByClassName("card");
    var inp = document.getElementById("inp").value.toUpperCase();
for (var i = 0; i <= m.length-1; i++){
    if(m[i].innerHTML.toUpperCase().indexOf(inp) != -1 ){
        m[i].style.display = "";
    }else {
         m[i].style.display = "none";
    }
  }
}


function mint(){
var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
    aud.currentTime = aud.currentTime-10;
    }
}


function maxt(){
var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
    aud.currentTime = aud.currentTime+10;
    }
}






function play(e, i){


    
    if(songs[i].isPlay == false){
    
    var loadmusic = document.getElementById("loadmusic");
    
    loadmusic.style.transform = "scaleY(1)";
    
    
    aud.addEventListener('loadeddata', function() {
    
    loadmusic.style.transform = "scaleY(0)";
       
    }, false);
    
    
    if(lastsong == null){
        
        e.innerHTML = "<i class='material-icons'>pause</i>";
        
        aud.src = songs[i].song;
        
        aud.play();
        
        songs[i].isPlay = true;
        
        lastsong = i;
        
        }else {
            
            songs[lastsong].isPlay = false;
            
            document.getElementById("playbtn"+lastsong).innerHTML = "<i class='material-icons'>play_arrow</i>";
            
            e.innerHTML = "<i class='material-icons'>pause</i>";
        
        aud.src = songs[i].song;
        
        aud.play();
        
        songs[i].isPlay = true;
        
        lastsong = i;
            
        }
        
        
        
    }else {
    
    var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2; 
    
    if (isPlaying) {  
        
        e.innerHTML = "<i class='material-icons'>play_arrow</i>";
        
        songs[i].isPlay = false;
        
        aud.pause();
        
        lastsong = null;
        
        }
    }
}

alert("Welcome");