AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema:{
      playing:{
          default:false,
          type:"boolean",
        }
    },

    init:function(){
        this.videoel = this.el.getAttribute("material").src;
        this.onclick = this.onclick.bind(this)
    },

    play:function(){
        window.addEventListener("click",this.onclick())
    },

    onclick:function(e){
        if(!this.videoel){
            return ;
        }
        var play = this.el.getAttribute("play-on-click").play
        this.el.object3D.visible = true
        if(!play){
            this.el.setAttribute("play-on-click",{play:true})
            this.videoel.play()
        }
        else{
            this.el.setAttribute("play-on-click",{play:false})  
            this.videoel.pause()
        }
    },
});
