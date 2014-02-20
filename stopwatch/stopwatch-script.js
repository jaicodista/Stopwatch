//stopwatch-script.js written by Jaikumar
//Logic for Stopwatch
	var psec=0;
	var sec=0;
	var min=0;
	var hour=0;
	var timer_enabled=0;
	var t;
	
	
	//timer
	function start(){
		document.getElementById('psec').value=(psec<=9)?("0"+psec) : psec;
		document.getElementById('sec').value=(sec<=9)?("0"+sec) : sec;
		document.getElementById('min').value=(min<=9)?("0"+min) : min;
		document.getElementById('hour').value=(hour<=9)?("0"+hour) : hour;
		psec=psec+1;	
		
		if(psec>9){
			sec=sec+1;
			psec=0;
			if(sec>59){
				min=min+1;
				sec=0;
				if(min>59){
					min=0;
					hour=hour+1;
					if(hour>23){
						alert("You have reached the maximum time. Please reload the page!");
					}
				
				}
			}
		}
		
		t=setTimeout("start()",100);
	
	}
	
	//to handle start button
	function startTimer(){
		if(timer_enabled==0){
			start();
			timer_enabled=1;
		}
	}
	
	//to handle stop button
	function stopTimer(){
		clearTimeout(t);
		timer_enabled=0;
		
	}
	
	//to handle reset button
	function reset(){
		clearTimeout(t);
		document.getElementById('psec').value="00";
		document.getElementById('sec').value="00";
		document.getElementById('min').value="00";
		document.getElementById('hour').value="00";
		psec=0;
		sec = 0;  
		mins = 0; 
		hour = 0;
		timer_enabled=0;	
	}
	

