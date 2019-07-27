#pragma strict

static var textOn : boolean = false;

static var message : String;

private var timer : float = 0.0;



function Start () {
	timer = 0.0;
	textOn = false;
	GetComponent.<UnityEngine.UI.Text>().text = "";


}

function Update () {
	if(textOn){
       GetComponent.<UnityEngine.UI.Text>().enabled = true;
       GetComponent.<UnityEngine.UI.Text>().text = message;
       timer += Time.deltaTime;
     }
     if(timer >=5){
       textOn = false;
       GetComponent.<UnityEngine.UI.Text>().enabled = false;
       timer = 0.0;
}

	
}
