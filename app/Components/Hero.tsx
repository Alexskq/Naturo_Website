export const Hero = () => {
  return (
    <div className="card lg:card-side bg-white shadow-xl mt-12 md:mt-20 mb-10 h-[60%] w-[80%] mx-auto">
      <figure className="h-full md:w-[50%] ">
        <img
          src="https://images.unsplash.com/photo-1513097847644-f00cfe868607?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile picture"
        />
      </figure>
      <div className="card-body w-[50%]">
        <h2 className="card-title">New album is released!</h2>
        <p>
          Click the{" "}
          <a href="/naturopathie" className="text-lg text-[#979F77]">
            <strong>Naturopathie</strong>
          </a>{" "}
          button to listen on Spotiwhy app.
        </p>
      </div>
    </div>
  );
};
