const header=document.querySelector('.header')
const main=document.querySelector('.main')
const footer=document.querySelector('.footer')
const links=document.querySelectorAll('.nav_link')

let color='';
let navColor='';

if(localStorage.getItem('bg-color')!==null){
	color=localStorage.getItem('bg-color')
	console.log(color)
	header.style.background=color
	footer.style.background=color
}
if(localStorage.getItem('link-color')!==null){
	navColor=localStorage.getItem('link-color')
	links.forEach((el)=>{
		el.style.color=navColor
	})

}



function choiceDark(){
	header.style.background='black'
	header.style.transition='0.5s ease-out 0.2s'
	main.style.background='#808080'
	main.style.transition='0.5s ease-out 0.2s'
	footer.style.background='black'
footer.style.transition='0.5s ease-out 0.2s'
links.forEach((el)=>{
	el.style.color='#DDA0DD'
	el.style.transition='0.5s ease-out 0.2s'
	
})
localStorage.setItem('bg-color','black')
localStorage.setItem('link-color','#DDA0DD')
}



function choiceLight(){
	header.style.background='#DDA0DD'
	header.style.transition='0.5s ease-out 0.2s'
	main.style.background='white'
	main.style.transition='0.5s ease-out 0.2s'
	footer.style.background='#DDA0DD'
footer.style.transition='0.5s ease-out 0.2s'
links.forEach((el)=>{
	el.style.color='black'
	el.style.transition='0.5s ease-out 0.2s'
})

localStorage.setItem('bg-color','#DDA0DD')
localStorage.setItem('link-color','black')

}
