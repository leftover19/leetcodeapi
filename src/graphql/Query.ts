const query = `#graphql
query getUserProfile($username : String!) {
    matchedUser(username: $username) {
        profile {
            userAvatar
            username
        }
        submitStats {
            acSubmissionNum {
                difficulty
                count
            }
        }
    }
}`;
export default query;
