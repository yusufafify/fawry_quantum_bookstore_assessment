export const errorFormatter = (error: Error) => {
  return error instanceof Error ? error.message : String(error);
};
