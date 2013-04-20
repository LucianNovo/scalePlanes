#pragma strict
var cube : GameObject;
private var target : GameObject;
target = GameObject.FindWithTag("Player");
var Space_Enemy1 : GameObject;
var Space_Enemy2 : GameObject;
var i : int;
function Start () {
	i=0;
	while(i<1000)
	{
		Instantiate(cube,Vector3((Random.value-0.5)*1000,(Random.value-0.5)*1000,(Random.value-0.5)*1000),transform.rotation);
		i++;
	}
}

function Update () {
		
		if(Random.value<=Time.deltaTime/10)
		{
			if(target!=null){
				Instantiate(Space_Enemy1, Vector3((Random.value-0.5)*1000,(Random.value-0.5)*1000,(Random.value-0.5)*1000),transform.rotation);
			}
		}
		if(Time.realtimeSinceStartup>=25 && Random.value<=Time.deltaTime/25)
		{
			if(target!=null){
				Instantiate(Space_Enemy2, Vector3((Random.value-0.5)*1000,(Random.value-0.5)*1000,(Random.value-0.5)*1000),transform.rotation);
			}
		}
}