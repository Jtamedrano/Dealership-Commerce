import { Divider } from "@material-ui/core";

type TmergeSortByKey<T> = (arr: T[], key: keyof T) => T[];

/**
 * Sort and Array with a specific dictionary item in mind.
 */
export const mergeSortByKey: TmergeSortByKey<{
  [key: string]: string | number;
}> = (arr, key) => {
  return arr;
};
