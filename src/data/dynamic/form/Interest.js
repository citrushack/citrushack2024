export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to Citrushack. Thank you for taking interest in Citrushack, we appreciate your efforts to help support Citrushack. Citrushack is the biggest hackathon at UCR spanning 36h on April 5th 2024.",
      "This is simply an interest form, once applications are released, you will be notified immediately and will be required to register again. We hope to see you there!",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
};
