export type FilterItemTypes =
  | 'all'
  | 'outdoor'
  | 'outdoorFood'
  | 'smoke'
  | 'work';

export type FilterItemProps = {
  type: FilterItemTypes;
};
