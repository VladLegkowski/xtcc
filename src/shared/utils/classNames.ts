function classNames(
  ...args: Array<
    string | string[] | { [key: string]: string | number | boolean }
  >
): string {
  const objClasses =
    typeof args === 'object'
      ? Object.keys(args).filter((key) => args[key])
      : [];
  const allClasses = [...args, ...objClasses].filter(Boolean);
  return allClasses.join(' ');
}

export { classNames };
