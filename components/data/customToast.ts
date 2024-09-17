export const customMessage = (type: "Success" | "Error", title: string) => {
  return {
    title: type,
    description: title,
    className: `${
      type === "Error"
        ? "text-red-700 bg-red-200"
        : "text-green-700 bg-green-200"
    }`,
  };
};
