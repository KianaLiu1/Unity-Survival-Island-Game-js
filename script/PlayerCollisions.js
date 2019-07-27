#pragma strict

private var doorIsOpen : boolean = false;

private var doorTimer : float = 0.0;

private var currentDoor : GameObject;

var doorOpenTime : float = 3.0;

var doorOpenSound : AudioClip;

var doorShutSound : AudioClip;

var batteryCollect : AudioClip;

private var haveMatches : boolean = false;

var matchGUI : GameObject;





function Start () {
	
}

function Update(){

      if(doorIsOpen){
         doorTimer += Time.deltaTime;
      if(doorTimer > 3){
          Door(doorShutSound, false, "Take_002", currentDoor);

         doorTimer = 0.0;
      }
}
var hit : RaycastHit;
         if(Physics.Raycast (transform.position,
                          transform.forward, hit, 5)) {
         	if(hit.collider.gameObject.tag=="outpostDoor"
                          && doorIsOpen == false 
                          && BatteryCollect.charge >= 4){
            currentDoor = hit.collider.gameObject;
            Door(doorOpenSound, true, "Take_001", currentDoor);
            GameObject.Find("Battery GUI").GetComponent(UnityEngine.UI.RawImage).enabled=false;

         }
         	else if(hit.collider.gameObject.tag=="outpostDoor" &&
     doorIsOpen == false && BatteryCollect.charge < 4){
     GameObject.Find("Battery GUI").
     GetComponent(UnityEngine.UI.RawImage).enabled=true;
     TextHints.message = "The door seems to need more power..";
   	 TextHints.textOn = true;
   	 GameObject.Find("TextHint GUI").transform.position.y = 50;

}

}

	
     }

function OnControllerColliderHit(hit: ControllerColliderHit){
	if(hit.collider.gameObject == GameObject.Find("campfire")){
		 if(haveMatches){
            haveMatches = true;
            lightFire();
         }
         else{
    		TextHints.message = "I'll need some matches to light this camp fire..";
   			TextHints.textOn = true; 
            GameObject.Find("TextHint GUI").transform.position.y = 50;

         }

   }
     var crosshairObj : GameObject = GameObject.Find("Crosshair");
   var crosshair : UnityEngine.UI.RawImage = crosshairObj.GetComponent(UnityEngine.UI.RawImage);


     if(hit.collider == GameObject.Find("mat").GetComponent.<Collider>()){
       CoconutThrow.canThrow=true;
       crosshair.enabled = true;
       TextHints.textOn=true;
       TextHints.message = "Knock down all 3 to win a battery!";
       GameObject.Find("TextHint GUI").transform.position.y = 50;
} else{
       CoconutThrow.canThrow=false;
       crosshair.enabled = false;

} }


function OpenDoor(){
      GetComponent.<AudioSource>().PlayOneShot(doorOpenSound);
      doorIsOpen = true;
      var myOutpost : GameObject = GameObject.Find("outpost");
      myOutpost.GetComponent.<Animation>().Play("Take_001");
}

function shutDoor(){
   GetComponent.<AudioSource>().PlayOneShot(doorShutSound);
   doorIsOpen = false;
   var myOutpost : GameObject = GameObject.Find("outpost");
   myOutpost.GetComponent.<Animation>().Play("Take_002");
   }


function Door(aClip : AudioClip, openCheck : boolean, animName :
     String, thisDoor : GameObject){
     GetComponent.<AudioSource>().PlayOneShot(aClip);
     doorIsOpen = openCheck;
     thisDoor.transform.parent.GetComponent.<Animation>().Play(animName);

}


function OnTriggerEnter(collisionInfo : Collider){

	if(collisionInfo.gameObject.tag == "battery"){
       BatteryCollect.charge++;
       GetComponent.<AudioSource>().PlayOneShot(batteryCollect);
       Destroy(collisionInfo.gameObject);
}
	if(collisionInfo.gameObject.name == "matchbox"){
         Destroy(collisionInfo.gameObject);
         haveMatches=true;
         GetComponent.<AudioSource>().PlayOneShot(batteryCollect);
         var matchGUIobj = Instantiate(matchGUI, Vector3(0.15,0.1,0),
   transform.rotation);
            matchGUIobj.name = "matchGUI";
           
      }

  
   }


function lightFire(){
      var campfire : GameObject = GameObject.Find("campfire");
      var campSound : AudioSource = campfire.GetComponent(AudioSource);
         campSound.Play();
      var flames : GameObject = GameObject.Find("FireSystem");
      var flameEmitter : ParticleEmitter = flames.GetComponent(ParticleEmitter);
         flameEmitter.emit = true;
      var smoke : GameObject = GameObject.Find("SmokeSystem");
      var smokeEmitter : ParticleEmitter = smoke.GetComponent(ParticleEmitter);
         smokeEmitter.emit = true;
         Destroy(GameObject.Find("matchGUI"));

         TextHints.message = "You Lit the Fire, you'll survive, well done!";
         TextHints.textOn=true;

         yield new WaitForSeconds(5);
         Application.LoadLevel("Village");
   }





  @script RequireComponent(AudioSource)
