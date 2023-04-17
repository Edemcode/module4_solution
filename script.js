var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Joseph";
names[3]="job";
names[4]="simon";
names[5]="Dennis";
names[6]="Kwame";
names[7]="Kwesi";
names[8]="Lois";
names[9]="Jill";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}