import React from "react";
import { InMemoryCache, ApolloClient, makeVar } from '@apollo/client';

export const cartItemsVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: { // Type policy map
    Product: {
      fields: { // Field policy map for the Product type
        isInCart: { // Field policy for the isInCart field
          read(_, { variables }) { // The read function for the isInCart field
            return localStorage.getItem('CART').includes(
              variables.productId
            );
          }
        }
      }
    }
  }
});