export type Override<TBase, TOverride> = Omit<TBase, keyof TOverride> &
  TOverride;

export type TypeOfConst<Const> = Const[keyof Const];
