console.log("script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
   if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
   }
   else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'
    },350);
  
}
 })