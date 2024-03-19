const query = `#graphql
query getUserProfile($username : String!) {
    matchedUser(username: $username) {
        profile {
            userAvatar
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
