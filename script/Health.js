#pragma strict


var initialHealth : int = 100;
var currentHealth: int;

function Start () {
	currentHealth = initialHealth;
	}

function Update (){

	if (currentHealth <= 0)
	{
		Die();
	}




}

function Die (){
	Destroy(gameObject);
}





/*var initialHealth: int= 100;
var currentHealth: int;
var healthbar: UnityEngine.UI.Slider;
var attackedImage: UnityEngine.UI.Image;
var imagespeed: float= 5f;
var flashColour: Color = new Color(1f, 0f, 0f, 0.1f);


private var isDead : boolean;
private var attacked: boolean = false;

function Awake ()
{
	currentHealth = initialHealth;
}




function Start () {
	
}

function Update () {
	if (attacked)
	{
		attackedImage.color = flashColour;
	}
	else
	{
		attackedImage.color = Color.Lerp (attackedImage.color, Color.clear, imagespeed * Time.deltaTime);
	}
	attacked = false;
}

function BeAttacked(amount : int) {
	attacked = true;
	currentHealth -= amount;
	healthbar.value = currentHealth;
	if(currentHealth <= 0 && !isDead)
	{
        Death ();
    }
}

function Death(){
	Destroy(gameObject);

}
*/

