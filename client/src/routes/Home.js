import React from 'react';
import { Query, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

// import Header from './components/Header';

const getAllUsersQuery = gql`
  {
    getAllUsers {
      username
      email
    }
  }
`;

const Home = () => (
  // <Query
  //   query={gql`
  //     {
  //       getAllUsers {
  //         username
  //         email
  //       }
  //     }
  //   `}
  // >
  //   {({ loading, error, data }) => {
  //     if (loading) return <p>Loading...</p>;
  //     if (error) return <p>Error :(</p>;
  //     console.log(data);

  //     return data.getAllUsers.map(({ username, email }) => (
  //       <div key={username}>
  //         <p>{`${username}: ${email}`}</p>
  //       </div>
  //     ));
  //   }}
  // </Query>
  <Query query={getAllUsersQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error' ${error.message}`;

      return (
        <div>
          {data.getAllUsers.map(user => (
            <h1 key={user.username}>{`${user.username}: ${user.email}`}</h1>
          ))}
        </div>
      );
      // return data.getAllUsers.map(({ username, email }) => (
      //   <div key={username}>
      //     <p>{`${username}: ${email}`}</p>
      //   </div>
      // ));
    }}
  </Query>
);

export default graphql(getAllUsersQuery)(Home);
