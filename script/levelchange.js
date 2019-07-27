#pragma strict
 
function Start () {
 
}
 
function Update () {
 
}
 
function OnGUI () {

	//make a background box
	GUI.Box (Rect (450,320,400,350), "");
   
	//Make the first button. If it is pressed, Application.Loadlevel (1) will be executed 
	if (GUI.Button (Rect (530,400,250,50), "Level 1")) {
	Application.LoadLevel("Island level");
	}
 
	//Make the second button.
	if (GUI.Button (Rect (530,550,250,50), "Level 2")) {
	Application.LoadLevel("Village");
 
	}
 
 
 
 
}
 
