# LeetCode User Profile API

This project is a minimalistic Express.js server that fetches user profile details from LeetCode using GraphQL. The server exposes an endpoint where you can provide a username, and it will return the corresponding user's details.

## How it Works
Go to this url, you will see the stats of particular user.
`https://leetcodeapi.leftover.life/:username`

### Technologies Used

- Express.js: A Node.js web application framework.
- GraphQL: A query language for APIs.

### Fetching User Data

1. When a GET request is made to `/:username/`, the server extracts the username from the request parameters.
2. It then constructs a GraphQL query using the provided username.
3. The server sends a POST request to the LeetCode GraphQL API with the constructed query.
4. The API responds with the user's profile data in JSON format.
5. The server sends the user's profile data back as a JSON response to the client.

### Changing Query
Query is written as an ad-hoc solution to my other project. 
To modify the GraphQL query, you can edit the `graphql/Query.ts` file. This file contains the GraphQL query used to fetch user profile details. Change the query according to your requirements, keeping in mind the structure of the LeetCode GraphQL API.
For reference, I have provided a sampleQuery.txt file. Hope this would be useful.

## Running the Project
1. Clone the project `git clone git@github.com:leftover19/leetcodeapi.git `
2. I prefer `bun install` but if you are using windows.... switch to linux?
3. `bun run start`
