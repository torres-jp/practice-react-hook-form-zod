"use client";
import { useForm } from "react-hook-form";

function HomePage() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Write your name"
          {...register("name")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Write your Email"
          {...register("email")}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*********"
          {...register("password")}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="*********"
          {...register("confirmPassword")}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="example: 38"
          {...register("age")}
        />

        <label htmlFor="country">Country</label>
        <select id="country" {...register("country")}>
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
          <option value="mexico">Mexico</option>
          <option value="brazil">Brazil</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;

//00:12
