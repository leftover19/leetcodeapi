export default async function fetchData( query: string, username: string) {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Referer : 'https://leetcode.com/',
            },
            body: JSON.stringify({
                query,
                variables: { username }
            })
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}
