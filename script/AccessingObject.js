#pragma strict
var ball : Rigidbody;
var throwForce : float;

function Start () {
	
}

function Update () {
Instantiate();

}

function OnTriggerEnter (collisionInfo : Collider){
	if(collisionInfo.gameObject.name == "spice_bag"){
         Destroy(collisionInfo.gameObject);}
}

function Instantiate (){

	if(Input.GetButtonUp("Fire1")){
       var newBall : Rigidbody = Instantiate(ball,
         transform.position, transform.rotation);
       newBall.name = "Ball";

       newBall.GetComponent.<Rigidbody>().velocity = transform.TransformDirection
        (Vector3(0,0, throwForce));
        Physics.IgnoreCollision(transform.root.GetComponent.<Collider>(),
         newBall.GetComponent.<Collider>());
}}