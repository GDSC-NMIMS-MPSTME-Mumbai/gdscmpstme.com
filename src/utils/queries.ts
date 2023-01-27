const GetMembersQuery = `
  query GetMembers {
    members(sort: "id") {
      data {
        id
        attributes {
          name
          designation
          department
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GetMembersQuery };
