"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, mappedCountrys } from "@/schemas/useSchema";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  country: string;
  dateOfBirth: string;
};

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const countryOptions = Object.entries(mappedCountrys).map(([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  ));

  console.log(errors);
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
        {errors.name?.message && (
          <p className="text-red-600">{errors.name?.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Write your Email"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*********"
          {...register("password")}
        />
        {errors.password?.message && (
          <p className="text-red-600">{errors.password?.message}</p>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="*********"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p className="text-red-600">{errors.confirmPassword?.message}</p>
        )}

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="example: 38"
          {...register("age")}
        />
        {errors.age?.message && (
          <p className="text-red-600">{errors.age?.message}</p>
        )}

        <label htmlFor="dateOfBirth">Day of Birth</label>
        <input type="date" id="dateOfBirth" {...register("dateOfBirth")} />
        {errors.dateOfBirth?.message && (
          <p className="text-red-600">{errors.dateOfBirth?.message}</p>
        )}

        <label htmlFor="country">Country</label>
        <select id="country" {...register("country")}>
          {countryOptions}
        </select>
        {errors.country?.message && (
          <p className="text-red-600">{errors.country?.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;

//00:17
