#pragma strict
var speed : float=50;
private var target : GameObject;
target = GameObject.FindWithTag("Player");
private var destination : Vector3=target.transform.position;
private var vectorToDestination : Vector3;
var cooldown : float =0;
private var currentCooldown : float =0.00;
var bullet : GameObject;
var Explosion : GameObject;
function Start () {

}

function Update () {
	target = GameObject.FindWithTag("Player");
	//destination.x+=Time.deltaTime/1000*(target.transform.position.x-destination.x);
	//destination.y+=Time.deltaTime/1000*(target.transform.position.y-destination.y);
	//destination.z+=Time.deltaTime/1000*(target.transform.position.z-destination.z);
	vectorToDestination=(transform.position-destination);
	destination=transform.position-vectorToDestination/vectorToDestination.magnitude*(transform.position-target.transform.position).magnitude;
	destination+=(target.transform.position-destination)*Time.deltaTime*((transform.position-target.transform.position).magnitude)/100;
	transform.LookAt(destination);
	transform.Translate(0,0,speed*Time.deltaTime);
	speed+=20*Time.deltaTime;
}	
function OnCollisionEnter(collision : Collision)
{
    if (collision.gameObject.tag == "projectile")
    {
    	Instantiate(Explosion, transform.position, transform.rotation);
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
}