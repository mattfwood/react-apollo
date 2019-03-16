import React from 'react';
import { ApolloContext } from './ApolloContext';

export function useApolloClient() {
  // @ts-ignore
  if (!React.useContext) {
    throw new Error('The useApolloClient needs React version 16.8 or higher');
  }
  // @ts-ignore
  return React.useContext(ApolloContext);
}