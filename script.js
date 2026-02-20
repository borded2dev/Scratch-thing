function getProfile(){
	console.log("Button clicked");
	const username  = document.getElementById("usernameInput").value;
	fetch(`https://api.scratch.mit.edu/users/${username}`)
		.then(res => res.json())
		.then(data => {
			document.getElementById("profileCard").innerHTML = `Username: ${data.username} <br>
         ID: ${data.id}`;
		});
}
