(self.webpackChunkdemo_car=self.webpackChunkdemo_car||[]).push([[4262],{4262:(e,t,o)=>{"use strict";o.r(t),o.d(t,{pwa_camera_modal:()=>n});var s=o(5485);const n=class{constructor(e){(0,s.r)(this,e),this.onPhoto=(0,s.c)(this,"onPhoto",7),this.noDeviceError=(0,s.c)(this,"noDeviceError",7)}async present(){const e=document.createElement("pwa-camera-modal-instance");e.addEventListener("onPhoto",async e=>{this._modal&&this.onPhoto.emit(e.detail)}),e.addEventListener("noDeviceError",async e=>{this.noDeviceError.emit(e)}),document.body.append(e),this._modal=e}async dismiss(){this._modal&&(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null)}render(){return(0,s.h)("div",null)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"}}}}]);