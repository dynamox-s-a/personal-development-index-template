import React, { useState } from "react";

interface Props {
  onSubmit: (values: { name: string; email: string }) => void;
}

const SimpleForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form data-testid="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          aria-label="name"
          type="text"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          aria-label="email"
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type="submit" aria-label="submit-btn">Submit</button>
    </form>
  );
};

export default SimpleForm;
