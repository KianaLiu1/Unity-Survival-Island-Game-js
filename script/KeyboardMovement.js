#pragma strict

var speed: float = 10.0;
var horMovement : float;
var verMovement : float;

function Start(){


}

function Update(){


	horMovement = Input.GetAxis("Horizontal");
	if (horMovement) {
		transform.Translate(transform.right * horMovement);
		}

	verMovement = Input.GetAxis("Vertical");
	if (verMovement) {
		transform.Translate(transform.up * verMovement);
		}






}



