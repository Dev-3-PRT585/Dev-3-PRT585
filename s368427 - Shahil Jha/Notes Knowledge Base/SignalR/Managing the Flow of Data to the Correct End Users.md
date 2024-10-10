- **User Groups**: SignalR has built-in support for user groups. You can assign users to groups based on roles or permissions, such as "Campaign Owners" or "Admins." This ensures that updates are only sent to the relevant users.
	- **Level Access Controls:** Groups may be done implemented using the draft _Level Access Controls_ we have right now:
		1. _Super Admin_
		2. _Senior Level_
		3. _Standard Customer Service_
		4. _Basic User_
		5. _View Only_
	- **Client Database:** We can also take the Client database as a basis for the grouping 
	- External and internal user
	
- **Client-Specific Connections**: Each client can have a unique connection ID, and when there are updates for a specific client’s campaigns, SignalR can broadcast only to the associated connection IDs. This along with the _User Group_ may allow for targeted data contorl.

- **Authentication and Authorization**: You should use a token-based authentication (e.g., JWT) in your SignalR hubs to ensure that only authorized users receive data. The .NET 8 backend can verify each connection’s identity and ensure that data is delivered to the right user.

- **Real-Time Updates for Specific Campaigns**: We can structure the system so that users connected to a specific campaign receive only updates relevant to that campaign. When a change happens (e.g., a new ad creative is uploaded), the corresponding users will get a real-time update.

### Dataflow
- **Client-Side (Vue.js)**:
    - Users interact with the dashboard (view, edit, monitor campaigns).
    - SignalR client connects to the SignalR Hub for real-time updates.
    - Users receive campaign data and notifications via SignalR when there's an update.
- **Backend API (.NET 8)**:
    - Manages business logic for updating and retrieving campaign data.
    - SignalR Hub is responsible for managing client connections and sending updates.
    - Changes made by users to the campaign (e.g., updating a budget) are processed by the backend, which then notifies the SignalR Hub to broadcast the update.
- **Database**:
    - Stores campaign data, user details, and logs of changes.
    - Updates trigger backend processes that inform SignalR of changes to broadcast.
- **Real-Time Updates**:
    - SignalR pushes updates directly to the connected clients based on user group memberships and client connection IDs.