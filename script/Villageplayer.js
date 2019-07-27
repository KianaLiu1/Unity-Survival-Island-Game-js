#pragma strict

private var haveMatches : boolean = false;


var batteryCollect : AudioClip;



function Start () {
	
}

function Update () {
	
         }




function OnControllerColliderHit(hit: ControllerColliderHit){
	if(hit.collider.gameObject == GameObject.Find("furnace")){
		 if(haveMatches){
            haveMatches = true;
            lightFire();
          
         }

         else{
    		TextHints.message = "Matches are on the second floor..";
   			TextHints.textOn = true; 
            GameObject.Find("TextHint GUI").transform.position.y = 50;

         }

}

	if(hit.collider == GameObject.Find("platform.001").GetComponent.<Collider>()){

		var theLight : GameObject = GameObject.Find("light");
      theLight.GetComponent.<Animation>().Play("light_shake");


                    } }

function OnTriggerEnter(collisionInfo : Collider){

	
	if(collisionInfo.gameObject.name == "matchbox"){
         Destroy(collisionInfo.gameObject);
         haveMatches=true;
         GetComponent.<AudioSource>().PlayOneShot(batteryCollect);

           
      }


  
   }






   function lightFire(){
      var campfire : GameObject = GameObject.Find("furnace");
      var campSound : AudioSource = campfire.GetComponent(AudioSource);
         campSound.Play();
      var flames : GameObject = GameObject.Find("FireSystem");
      var flameEmitter : ParticleEmitter = flames.GetComponent(ParticleEmitter);
         flameEmitter.emit = true;
      
         TextHints.message = "Congratulations! Now you can happily live here and creat a new life!";
         TextHints.textOn=true;
         yield new WaitForSeconds(5);
         Application.LoadLevel("Menu");

   }






  @script RequireComponent(AudioSource)

