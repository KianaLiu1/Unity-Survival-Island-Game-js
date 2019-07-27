#pragma strict

private var updatePeriod = 0.5;
private var nextUpdate : float = 0;
private var frames : float = 0;
private var fps : float = 0;


function Start () {
	
}

function Update () {
	frames++;
      if(Time.time > nextUpdate){
           fps = Mathf.Round(frames / updatePeriod);
           GetComponent.<UnityEngine.UI.Text>().text = "Frames Per Second: " + fps;
           nextUpdate = Time.time + updatePeriod;
           frames = 0;
}
}

@script RequireComponent(GUIText)
