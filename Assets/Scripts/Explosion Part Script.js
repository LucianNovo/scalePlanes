#pragma strict
var speed : float = 200;
function Start () {
	Invoke("Destroy_Bullet", 0.5);
	speed=speed*Random.RandomRange(0.5,2);
}

function Update () {
	transform.Translate (Vector3.forward *speed* Time.deltaTime);
}
function Destroy_Bullet () {
	Destroy(gameObject);
}