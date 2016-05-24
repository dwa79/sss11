function mean(){
	document.getElementById("comment").innerHTML="";
	document.getElementById("helptext").innerHTML="Program Status:";
	document.getElementById("msg2").innerHTML="";
	document.getElementById("msg3").innerHTML="";
	document.getElementById("msg4").innerHTML="";
	var numerator=document.getElementsByName('n');
	var denominator=document.getElementsByName('d');
	var percentage=document.getElementsByName('t');
	var err=0;
	var i;
	var err="";
	var result=0;
	var num=0;
	var sum=0;
	sub=0;
	for(i=0;i<numerator.length;i++){
		if(isNaN(Number(numerator[i].value))||isNaN(Number(denominator[i].value))||Number(numerator[i].value)<0||Number(denominator[i].value)<0){
			err=1;
		}
		else if(Number(numerator[i].value)>Number(denominator[i].value)){
			err=2;
		}
		else if(numerator[i].value==''||denominator[i].value==''){
			continue;
		}
		else{
			sum=sum+Number(numerator[i].value)/Number(denominator[i].value);
			sub=Number(numerator[i].value)/Number(denominator[i].value);
			percentage[i].innerHTML=parseFloat(sub*100).toFixed(2) + "%";
			num++;


		}
	}
	result=parseFloat(sum/num).toFixed(3);
	if (isNaN(result)){
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="You have not entered anything yet or you did not entered numbers.";
	}
	else if(err==0){
		document.getElementById("tot").innerHTML=result*100 + "/100";
		document.getElementById("msg").innerHTML="Successfully calculated.";
		if(result*100>90){
			document.getElementById("comment").innerHTML="The robot says: It looks like you have a wonderful academic standing, keep up the good work!";
		}else if(result*100>80){
			document.getElementById("comment").innerHTML="The robot says: Your performance is not bad this time, push yourself harder!";
		}else if(result*100>70){
			document.getElementById("comment").innerHTML="The robot says: Your grade seems to be around average, have to spend more time on study next time!";
		}else if(result*100>60){
			document.getElementById("comment").innerHTML="The robot says: Hmm, I suppose you should try to catch up with others in the class.";
		}else if(result*100>50){
			document.getElementById("comment").innerHTML="The robot says: Alert! You are sitting at a dangerous position now, struggle with your study or you may fail.";
		}else if(result*100>40){
			document.getElementById("comment").innerHTML="The robot says: Alright, poor academic performance, go to do your work and still you can make some progress.";
		}else{
			document.getElementById("comment").innerHTML="The robot says: Focus on the basics of the course materials, or you can consider transfering to another program (just kidding).";
		}
	}
	else if(err==1){
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="Could not calculate your mean grade, your should enter numbers bigger than or equal to 0.";
	}
	else{
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="Could not calculate your mean grade, please check if the numerator exceeds the denominator.";
	}
}

function average(){
	document.getElementById("comment").innerHTML="";
	document.getElementById("helptext").innerHTML="Program Status:";
	document.getElementById("msg2").innerHTML="";
	document.getElementById("msg3").innerHTML="";
	document.getElementById("msg4").innerHTML="";
	var numerator=document.getElementsByName('n');
	var denominator=document.getElementsByName('d');
	var percentage=document.getElementsByName('t');
	var err=0;
	var i;
	var err="";
	var result2=0;
	var sum=0;
	var num=0;
	var ntot=0;
	var dtot=0;
	for(i=0;i<numerator.length;i++){
		if(isNaN(Number(numerator[i].value))||isNaN(Number(denominator[i].value))||Number(numerator[i].value)<0||Number(denominator[i].value)<0){
			err=1;
		}
		else if(Number(numerator[i].value)>Number(denominator[i].value)){
			err=2;
		}
		else if(numerator[i].value==''||denominator[i].value==''){
			continue;
		}
		else{
			ntot=ntot+Number(numerator[i].value);
			dtot=dtot+Number(denominator[i].value);
			sum=sum+Number(numerator[i].value)/Number(denominator[i].value);
			sub=Number(numerator[i].value)/Number(denominator[i].value);
			percentage[i].innerHTML=parseFloat(sub*100).toFixed(2) + "%";
			num++;


		}
	}
	result2=parseFloat(ntot/dtot).toFixed(3);
	if (isNaN(result2)){
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="You have not entered anything yet or you did not entered numbers.";
	}
	else if(err==0){
		document.getElementById("tot").innerHTML=result2*100 + "/100";
		document.getElementById("msg").innerHTML="Successfully calculated.";
		if(result2*100>90){
			document.getElementById("comment").innerHTML="The robot says: It looks like you have a wonderful academic standing, keep up the good work!";
		}else if(result2*100>80){
			document.getElementById("comment").innerHTML="The robot says: Your performance is not bad this time, push yourself harder!";
		}else if(result2*100>70){
			document.getElementById("comment").innerHTML="The robot says: Your grade seems to be around average, have to spend more time on study next time!";
		}else if(result2*100>60){
			document.getElementById("comment").innerHTML="The robot says: Hmm, I suppose you should try to catch up with others in the class.";
		}else if(result2*100>50){
			document.getElementById("comment").innerHTML="The robot says: Alert! You are sitting at a dangerous position now, struggle with your study or you may fail.";
		}else if(result2*100>40){
			document.getElementById("comment").innerHTML="The robot says: Alright, poor academic performance, go to do your work and still you can make some progress.";
		}else{
			document.getElementById("comment").innerHTML="The robot says: Focus on the basics of the course materials, or you can consider transfering to another program (just kidding).";
		}
	}
	else if(err==1){
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="Could not calculate your mean grade, your should enter numbers bigger than or equal to 0.";
	}
	else{
		document.getElementById("tot").innerHTML="N/A";
		document.getElementById("msg").innerHTML="Could not calculate your mean grade, please check if the numerator exceeds the denominator.";
	}
}

function help(){
	document.getElementById("comment").innerHTML="";
	document.getElementById("helptext").innerHTML="Help text:";
	document.getElementById("msg").innerHTML="Mean of grades:";
	document.getElementById("msg2").innerHTML="The sum of all grades divided by the total number of grades.";
	document.getElementById("msg3").innerHTML="Average grades:";
	document.getElementById("msg4").innerHTML="The sum of all grade values divided by the sum of maximums from all aggregated items.";
}

function about(){
	var pn=window.prompt("Developer Info: \nName: Di Wang(Eddie)\nCurrently studying at: Simon Fraser University\nEmail: dwa79@sfu.ca\nStudent Number: 301257741\nTel: 778-892-3858(Canada)\n\nFeel free to contact me if you have further questions!\n\nPlease enter your name in the below box:", "example: Eddie");
	if(pn==null){
		document.getElementById("demons").innerHTML="You haven't input your name tho :-(";
	}else{
		document.getElementById("demons").innerHTML="Greetings " + pn + "!" + " How are you doing today?";
	}
}

function sfu(){
	window.open("http://www.sfu.ca");
}

function sfuconnect(){
	window.open("https://cas.sfu.ca/cas/login?app=SFU+Connect&allow=sfu,zimbra&service=https%3A%2F%2Fconnect.sfu.ca%2Fzimbra%2Fpublic%2Fpreauth.jsp");
}

function canvas(){
	window.open("https://canvas.sfu.ca/");
}

function refresh(){
	location.reload();
}