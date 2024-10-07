export const Hero = () => {
  return (
    <div className="card lg:card-side bg-white shadow-xl m-5 h-[80%] w-[70%] mx-auto">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1513097847644-f00cfe868607?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile picture"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};
