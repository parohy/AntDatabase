export const NAVBAR_SCROLL_EVENT = 'navbar_scroll_event';

export const onScrollEvent = (id, offset) => (
  {
    type: NAVBAR_SCROLL_EVENT,
    payload: { id, offset }
  }
);
