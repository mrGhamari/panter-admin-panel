export function useRules() {
  function required(val: string) {
    if (!val) return 'Required';
    else return true;
  }

  function password(val: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const checked = regex.test(val);
    return checked
      ? true
      : 'Minimum eight characters, at least one letter and one number';
  }

  return {
    required,
    password,
  };
}
