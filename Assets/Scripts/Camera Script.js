#pragma strict
private var target : GameObject;
target = GameObject.FindWithTag("Player");
var distance : float =20;
var springiness : float =10;
var distanceToTarget: float;
function Start () {

}

function Update () {
transform.LookAt(target.transform);
distanceToTarget=(transform.position-target.transform.position).magnitude-distance;
transform.Translate(0,0,distanceToTarget*springiness*Time.deltaTime);
transform.rotation = Quaternion.Slerp(transform.rotation, target.transform.rotation, Time.deltaTime*360);





}