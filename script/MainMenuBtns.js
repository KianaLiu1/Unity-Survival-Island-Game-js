#pragma strict

var levelToLoad : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var beep : AudioClip;

function Start () {
	
}

function Update () {
	
}


function OnMouseEnter(){
     GetComponent.<UnityEngine.UI.RawImage>().texture = rollOverTexture;
}

function OnMouseExit(){
     GetComponent.<UnityEngine.UI.RawImage>().texture = normalTexture;
}

function OnMouseUp(){
     GetComponent.<AudioSource>().PlayOneShot(beep);
     yield new WaitForSeconds(0.35);
     Application.LoadLevel(levelToLoad);
}


@script RequireComponent(AudioSource)