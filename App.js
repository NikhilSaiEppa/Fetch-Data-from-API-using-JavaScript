const total='total'
fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => {
        console.log(data)
		const tableBody = document.querySelector("#users-table tbody");
		data.forEach(user => {
            console.log(user.id)
			const tr = document.createElement("tr");
            const action = `
                <div><button onclick="viewPosts(${user.id})">View Posts (10)</button></div>
                <div><button onclick="displayComments(${user.id})">Comments (50)</button></div>
                <div><button onclick="CompletedTodoes(${user.id},${total})">Total ToDoes (20)</button></div>
                <div><button onclick="CompletedTodoes(${user.id},true)">Completed_ToDoes (11)</button></div>
                <div><button onclick="CompletedTodoes(${user.id},false)">Pending_ToDoes (9)</button></div>
                <div><button onclick="displayAlbums(${user.id})">Albums (10)</button></div>
            `;
			tr.innerHTML = `
				<td>${user.id}</td>
				<td>${user.name}</td>
				<td>
					<p>Username: ${user.username}</p>
					<p>Email: ${user.email}</p>
					<p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
					<p>Location: (${user.address.geo.lat}, ${user.address.geo.lng})</p>
					<p>Phone: ${user.phone}</p>
					<p>Website: ${user.website}</p>
				</td>
                <td>${action}</td>
			`;
			tableBody.appendChild(tr);
		});
	})
	.catch(error => console.log(error));


