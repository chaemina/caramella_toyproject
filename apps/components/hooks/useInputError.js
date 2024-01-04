const useInputError = (setError) => {
  const handleInputError = (fieldName, errorMessage) => {
    setError(
      fieldName,
      {
        message: errorMessage,
      },
      {
        shouldFocus: true,
      }
    );
  };

  return { handleInputError };
};

export default useInputError;
