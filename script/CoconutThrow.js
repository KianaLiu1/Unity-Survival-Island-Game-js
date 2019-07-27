#pragma strict

var throwSound : AudioClip;

var coconutObject : Rigidbody;

var throwForce : float;

static var canThrow : boolean = false;


function Update () {

	if(Input.GetButtonUp("Fire1") && canThrow){

       GetComponent.<AudioSource>().PlayOneShot(throwSound);
       var newCoconut : Rigidbody = Instantiate(coconutObject,
         transform.position, transform.rotation);
       newCoconut.name = "coconut";

       newCoconut.GetComponent.<Rigidbody>().velocity = transform.TransformDirection
        (Vector3(0,0, throwForce));
        Physics.IgnoreCollision(transform.root.GetComponent.<Collider>(),
         newCoconut.GetComponent.<Collider>(), true);
     }
   }

    @script RequireComponent(AudioSource)