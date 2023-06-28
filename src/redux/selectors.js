import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.users.isLoggedIn;

export const selectUser = state => state.users.profile;

export const selectIsRefreshing = state => state.users.isRefreshing;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectToken = state => state.users.token;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (contacts !== undefined) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  }
);
