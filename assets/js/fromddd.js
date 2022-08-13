console.log("我本人林育廷只負責把網站放上去，不保證其內容之正確性、公正性並不負相關責任")
console.log("關於林育廷之相關紀載不保證其可靠性")
console.log("有問題找日凱(propanal93@gmail.com)")
console.log("rickroll(),rickroll(false),rickroll('wah')")
wah="wah"
function rickroll(dddr=true){
    if(dddr==true){
    location.replace("https://www.youtube.com/watch?v=sVCV7TtlpSk")
    }
    else if(dddr==false){
        document.getElementById("wrapper").innerHTML= `<iframe width="1519" height="545" src="https://www.youtube.com/embed/8KU5Bp0QSE4" title="火鍋端統神" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(dddr=="wah"){
        document.getElementById("wrapper").innerHTML= `<iframe width="885" height="498" src="https://www.youtube.com/embed/x6vTNT9XEN0" title="【Ninomae Ina'nis】Ina休假一個禮拜? 不擔心 我們來回顧Wah【HololiveEN】【Vtuber】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
   
}
// 雖然應該沒有人會翻到這，不過這免強是彩蛋吧? WAH!