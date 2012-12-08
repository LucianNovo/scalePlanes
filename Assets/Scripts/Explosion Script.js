#pragma strict
var i : int=0;
var ExplosionPart : GameObject;
function Start () {
	Invoke("Destroy_Explosion", 0.2);
}

function Update () {
i=1;
	while(i<=Time.deltaTime*1000)
		{
			var randomNumberX = Random.Range(-180, 180);
    		var randomNumberY = Random.Range(-180, 180);
    		var randomNumberZ = Random.Range(-180, 180);

        	var bullet = Instantiate(ExplosionPart, transform.position, transform.rotation);
    		bullet.transform.Rotate(randomNumberX, randomNumberY, randomNumberZ);
    		i++;
		}
}
function Destroy_Explosion () {
	Destroy(gameObject);
}