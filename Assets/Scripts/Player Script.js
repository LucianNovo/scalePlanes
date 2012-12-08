#pragma strict
var speed : float=100;
var cooldown : float =0.05;
var currentCooldown : float =0.00;
var bullet : GameObject;
var Explosion : GameObject;
function Start () {

}

function Update () {
	transform.Translate(0,0,speed*Time.deltaTime);
	transform.Rotate(120*Input.GetAxis("Vertical")*Time.deltaTime,0,-120*Input.GetAxis("Horizontal")*Time.deltaTime);
	currentCooldown+=Time.deltaTime;
	if (Input.GetKey("space") && cooldown<=currentCooldown){
		Instantiate (bullet, transform.TransformPoint(0, 0, 16), transform.rotation);
		currentCooldown=0;
	}
}
function OnCollisionEnter(collision : Collision)
{
    if (collision.gameObject.tag == "cube")
    {
    	Instantiate(Explosion, transform.position, transform.rotation);
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "enemy")
    {
    	Instantiate(Explosion, transform.position, transform.rotation);
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "projectile")
    {
    	Instantiate(Explosion, transform.position, transform.rotation);
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "Player")
    {
    	Instantiate(Explosion, transform.position, transform.rotation);
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
}