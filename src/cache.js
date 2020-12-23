// import React from "react";
// import { InMemoryCache, ApolloClient, makeVar } from '@apollo/client';


// // Create the initial value
// const todosInitialValue: Todos = [
//   {
//     id: 0,
//     completed: false,
//     text: "Use Apollo Client 3"
//   }
// ]

// // Create the todos var and initialize it with the initial value
// export const todosVar = makeVar<Todos>(
//   todosInitialValue
// );

// export const cache: InMemoryCache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         todos: {
//           read () {
//             return todosVar();
//           }
//         }
//       }
//     }
//   }
// });