#pragma strict
var speed : float = 800;
function Start () {
	Invoke("Destroy_Bullet", 2.0);
}

function Update () {
	transform.Translate (Vector3.forward *speed* Time.deltaTime);
}
function Destroy_Bullet () {
	Destroy(gameObject);
}
function OnCollisionEnter(collision : Collision)
{
    if (collision.gameObject.tag == "cube")
    {
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "enemy")
    {
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "projectile")
    {
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
    if (collision.gameObject.tag == "Player")
    {
        Destroy(collision.gameObject);
        Destroy(gameObject);
    }
}