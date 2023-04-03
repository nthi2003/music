const darkmodemodel = function num(){
    const e = document.body; 
    e.classList.toggle('dark-mode');
};
const header = document.querySelector('.header');

const bg = function background()
{
          
header.classList.toggle('dark-mode-header');
};
const menuApp = document.querySelector(".menu-app");
const menulist = function menulist(){
menuApp.classList.toggle("dark-mode-menu");
};
const bodyContent = document.querySelector(".body-content");
const content = function content(){
 bodyContent.classList.toggle("dark-mode-content");
};
      
const darkmodemodeToge = document.querySelector("#dark-mode-toggle")
darkmodemodeToge.addEventListener("click" ,darkmodemodel);
darkmodemodeToge.addEventListener("click" ,bg);
darkmodemodeToge.addEventListener("click" ,menulist);
darkmodemodeToge.addEventListener("click" ,content);


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $(".playlist");
const lyrics = $(".lyrics");
const musicapp ={ 
songs: [
 {
   name: "Lemon",
   singer: "Kenshi Yonezu",
   lyricsong :[   "夢ならばどれほどよかったでしょう",    "未だにあなたのことを夢にみる",    "忘れた物を取りに帰るように",    "古びた思い出の埃を払う",    "戻らない幸せがあることを",    "最後にあなたが教えてくれた",    "言えずに隠してた昏い過去も",    "あなたがいなきゃ永遠に昏いまま",    "きっともうこれ以上傷つくことなど",    "ありはしないとわかっている",    "あの日の悲しみさえ あの日の苦しみさえ",    "そのすべてを愛してた あなたとともに",    "胸に残り離れない 苦いレモンの匂い",    "雨が降り止むまでは帰れない",    "今でもあなたはわたしの光",    "暗闇であなたの背をなぞった",    "その輪郭を鮮明に覚えている",    "受け止めきれないものと出会うたび",    "溢れてやまないのは涙だけ",    "何をしていたの 何を見ていたの",    "わたしの知らない横顔で",    "どこかであなたが今",    "わたしと同じ様な",    "涙にくれ淋しさの中にいるなら",    "わたしのことなどどうか忘れてください",    "そんなことを心から願うほどに",    "今でもあなたはわたしの光",    "自分が思うより 恋をしていたあなたに",    "あれから思うように 息ができない",    "あんなに側にいたのに まるで嘘みたい",    "とても忘れられない それだけが確か",    "あの日の悲しみさえ あの日の苦しみさえ",    "そのすべてを愛してた あなたとともに",    "胸に残り離れない苦いレモンの匂い",    "雨が降り止むまでは帰れない",    "切り分けた果実の片方の様に",    "今でもあなたはわたしの光"],

   path: "https://mp3.vlcmusic.com/download.php?track_id=34737&format=320",
   image: ""
 },
 {
   name: "Tu Phir Se Aana",
   singer: "Raftaar x Salim Merchant x Karma",
   path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
   image:
     "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
 },
 {
   name: "Naachne Ka Shaunq",
   singer: "Raftaar x Brobha V",
   path:
     "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
   image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
 },

 {
   name: "Feeling You",
   singer: "Raftaar x Harjas",
   path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
   image:
     "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
 },
   {
     name: "Lemon",
     singer: "Kenshi Yonezu",
     path: "https://mp3.vlcmusic.com/download.php?track_id=34737&format=320",
     image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
   },
   {
     name: "Tu Phir Se Aana",
     singer: "Raftaar x Salim Merchant x Karma",
     path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
     image:
       "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
   },
   {
     name: "Naachne Ka Shaunq",
     singer: "Raftaar x Brobha V",
     path:
       "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
     image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
   },
   {
     name: "Mantoiyat",
     singer: "Raftaar x Nawazuddin Siddiqui",
     path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
     image:
       "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
   },
   {
     name: "Aage Chal",
     singer: "Raftaar",
     path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
     image:
       "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
   },
  
   {
     name: "Feeling You",
     singer: "Raftaar x Harjas",
     path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
     image:
       "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
   }




],

render:function(){
    const htmls = this.songs.map(song =>{
    
       return `

       <div class="song">
       <div class="product-image"  style="background-image: url('${song.image}')">   
       </div>
       <div class="product-info">
       <h3 class="title">${song.name}</h3>
       <p class="author">${song.singer}</p>
       </div>
   </div>

                 `
                 
    })
    $('.ls-music').innerHTML = htmls.join('');


},

scrollToActiveSong: function () {
 setTimeout(() => {
   $(".song.active").scrollIntoView({
     behavior: "smooth",
     block: "nearest"
   });
 }, 300);
},
loadCurrentSong: function () {
 heading.textContent = this.currentSong.name;
 cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
 audio.src = this.currentSong.path;
},
start:function(){

  this.render();
}

}
musicapp.start();
