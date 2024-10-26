const Price = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white bg-[#979F77] text-center p-3 w-48 mx-auto rounded-md mb-8 md:mb-10">
        Tarifs
      </h1>
      <div className="flex flex-wrap md:flex-nowrap shadow overflow-x-clip bg-transparent border w-[80%] items-center justify-center mx-auto">
        <div className="stat place-items-center border-b ">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center border-b grow">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center grow">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Price;
