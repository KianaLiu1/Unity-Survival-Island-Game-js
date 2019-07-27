#pragma strict

static var charge : int = 0;

var charge1tex : Texture2D;

var charge2tex : Texture2D;

var charge3tex : Texture2D;

var charge4tex : Texture2D;

var charge0tex : Texture2D;






function Start () {

	GetComponent.<UnityEngine.UI.RawImage>().enabled = false;
    charge = 0;

}

function Update () {

	if(charge == 1){
     GetComponent.<UnityEngine.UI.RawImage>().texture = charge1tex;
     GetComponent.<UnityEngine.UI.RawImage>().enabled = true;
}

	else if(charge == 2){
       GetComponent.<UnityEngine.UI.RawImage>().texture = charge2tex;

     }
     else if(charge == 3){
       GetComponent.<UnityEngine.UI.RawImage>().texture = charge3tex;

     }
     else if(charge >= 4){
       GetComponent.<UnityEngine.UI.RawImage>().texture = charge4tex;

}

	else{
     GetComponent.<UnityEngine.UI.RawImage>().texture = charge0tex;

}






}