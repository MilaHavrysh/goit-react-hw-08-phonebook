import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const visible = items.filter(element =>
      element.name.toLowerCase().includes(filter),
    );
    return visible;
  },
);
