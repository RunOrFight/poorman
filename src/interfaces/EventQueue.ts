import { IEvents } from '.';

type TEventsQueueItem = {
  type: keyof IEvents;
  data: IEvents[keyof IEvents];
};

export type TEventsQueue = TEventsQueueItem[];
