function HomePage() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your Email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*********"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="*********"
        />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" placeholder="example: 38" />

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
          <option value="mexico">Mexico</option>
          <option value="brazil">Brazil</option>
        </select>
        <div className="bg-sky-400 px-4 py-2 text-center text-black text-2xl hover:bg-sky-500 gap-2">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;

//00:06
