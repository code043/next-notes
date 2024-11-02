function page() {
  return (
    <section>
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />

          <input type="password" placeholder="Password..." />
          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  );
}

export default page;
