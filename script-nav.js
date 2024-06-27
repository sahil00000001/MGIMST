var menu=function(){
	var t=15,z=50,s=6,a;
	function dd(n){this.n=n; this.h=[]; this.c=[]}
	dd.prototype.init=function(p,c){
		a=c; var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;
		for(i;i<l;i++){
			var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
			h.onmouseover=new Function(this.n+'.st('+i+',true)');
			h.onmouseout=new Function(this.n+'.st('+i+')');
		}
	}
	dd.prototype.st=function(x,f){
		var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
		clearInterval(c.t); c.style.overflow='hidden';
		if(f){
			p.className+=' '+a;
			if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
			if(c.mh==c.offsetHeight){c.style.overflow='visible'}
			else{c.style.zIndex=z; z++; c.t=setInterval(function(){sl(c,1)},t)}
		}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
	}
	function sl(c,f){
		var h=c.offsetHeight;
		if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
			if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
			clearInterval(c.t); return
		}
		var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
		c.style.opacity=o; c.style.filter='alpha(opacity='+(o*100)+')';
		c.style.height=h+(d*f)+'px'
	}
	return{dd:dd}
}();
document.addEventListener('DOMContentLoaded', (event) => {
	// Function to prevent default action for specific URLs
	function preventNavigation(event) {
		// List of URLs to prevent navigation for
		const urlsToPrevent = [
			'mechanical-engineering.html',	
			'electronics-engineering.html',
			'electronic-communication.html',
			'electrical-engineering.html',
			'computer-engineering.html',
			'civil-engineering.html',
			'chemical-engineering.html',
			'automobile-engineering.html',
      'diploma-Electrical and Electronics Engineering.html',
      'bachelor-Electrical and Electronics Engineering.html',
      'master-Electrical and Electronics Engineering.html'

		];
		
		// Get the href attribute of the clicked link
		const linkHref = event.target.getAttribute('href');
		
		// Check if the href is in the list of URLs to prevent
		if (urlsToPrevent.includes(linkHref)) {
			// Prevent the default navigation action
			event.preventDefault();
		}
	}

	// Add click event listener to all links in the navigation menu
	const menu = document.getElementById('menu');
	const links = menu.getElementsByTagName('a');
	for (let link of links) {
		link.addEventListener('click', preventNavigation);
	}
});
function Admission(){
  closeAllDropdowns();
	document
	  .getElementsByClassName("Admission-content")[0]
	  .classList.toggle("d-none");
  }
  //close sidenav

  function openNav() {
    document.getElementById("mySidenav").style.width = "80vw";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function closeAllDropdowns(x) {
   
    if(x!="aboutUs")
      {
          document.getElementsByClassName("about-us-content")[0].classList.add("d-none");
      }
       
    if(x!="department")
      {
        document.getElementsByClassName("department-content")[0].classList.add("d-none");
        
      }
    if(x!="Programme")
      {
        document.getElementsByClassName("Programe-content")[0].classList.add("d-none");
      }
        
  }

  function aboutUs() {
    closeAllDropdowns("aboutUs");
    document.getElementsByClassName("about-us-content")[0].classList.toggle("d-none");
  }

  function department() {
    closeAllDropdowns("department");
    document.getElementsByClassName("department-content")[0].classList.toggle("d-none");
  }

  function Programme() {
    closeAllDropdowns("Programme");
    document.getElementsByClassName("Programe-content")[0].classList.toggle("d-none");
  }

  function engineering() {
    
    document.getElementsByClassName("Engineering-content")[0].classList.toggle("d-none");
  }

  function management() {
    
    document.getElementsByClassName("management-content")[0].classList.toggle("d-none");
  }

  function ComputerApplication() {
    
    document.getElementsByClassName("ComputerApplication-content")[0].classList.toggle("d-none");
  }

  function Science() {
    
    document.getElementsByClassName("Science-content")[0].classList.toggle("d-none");
  }

  function Commerce() {
    
    document.getElementsByClassName("Commerce-content")[0].classList.toggle("d-none");
  }

  function Arts() {
    
    document.getElementsByClassName("Arts-content")[0].classList.toggle("d-none");
  }

  function PostGraduateDiploma() {
    
    document.getElementsByClassName("PostGraduateDiploma-content")[0].classList.toggle("d-none");
  }

  function engineeringDiploma() {
    
    document.getElementsByClassName("dip-1")[0].classList.toggle("d-none");
  }

  function engineeringbachelors() {
    
    document.getElementsByClassName("dip-2")[0].classList.toggle("d-none");
  }

  function engineeringMasters() {
    
    document.getElementsByClassName("dip-3")[0].classList.toggle("d-none");
  }

  function automobile() {
    
    document.getElementsByClassName("eng-1")[0].classList.toggle("d-none");
  }

  function chemical() {
    
    document.getElementsByClassName("eng-2")[0].classList.toggle("d-none");
  }

  function civil() {
    
    document.getElementsByClassName("eng-3")[0].classList.toggle("d-none");
  }

  function computer() {
    
    document.getElementsByClassName("eng-4")[0].classList.toggle("d-none");
  }

  function electrical() {
    
    document.getElementsByClassName("eng-5")[0].classList.toggle("d-none");
  }

  function electronicsAndComm() {
    
    document.getElementsByClassName("eng-6")[0].classList.toggle("d-none");
  }

  function electronics() {
    
    document.getElementsByClassName("eng-7")[0].classList.toggle("d-none");
  }

  function information() {
    
    document.getElementsByClassName("eng-8")[0].classList.toggle("d-none");
  }

  function mechanical() {
    
    document.getElementsByClassName("eng-9")[0].classList.toggle("d-none");
  }

  function instrumentation() {
    
    document.getElementsByClassName("eng-10")[0].classList.toggle("d-none");
  }

  function metallurgical() {
    
    document.getElementsByClassName("eng-11")[0].classList.toggle("d-none");
  }

  function mining() {
    
    document.getElementsByClassName("eng-12")[0].classList.toggle("d-none");
  }

  function specialisation() {
    
    document.getElementsByClassName("eng-13")[0].classList.toggle("d-none");
  }
  function specialization() {
    
    document.getElementsByClassName("eng-13")[0].classList.toggle("d-none");
  }

