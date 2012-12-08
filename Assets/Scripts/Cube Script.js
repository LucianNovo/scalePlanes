#pragma strict
public var otherClip: AudioClip;
var Explosion : GameObject;


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