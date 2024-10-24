import { Menu } from "../Components/Menu";

const Naturopathie = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-start items-center mx-auto">
      <Menu />
      <div className="flex flex-col mt-10 items-center">
        {/* <p className="text-lg my-6 font-bold text-[#979F77] self-start flex justify-center items-center gap-2">
          <House size={20} strokeWidth={2} />
          <Link href="/">Accueil</Link>
        </p> */}
        {/* <div className="artboard artboard-horizontal phone-1 bg-slate-500 my-4 h-72 relative mt-10"> */}

        <div
          className=" bg-[url('/oil.jpg')] bg-no-repeat bg-cover bg-center  w-[95vw] h-[400px] md:max-w-[95%]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/oil.jpg')",
          }}
        ></div>
        <div className="bg-black/85 h-[100px] w-[80%] relative top-[-50px] mx-auto opacity-50 flex justify-center items-center md:max-w-[60%]">
          <h1 className="text-white text-4xl font-bold">La Naturopathie</h1>
        </div>
      </div>
      <div className="flex flex-col items-center pb-40">
        <h2 className="text-lg font-semibold mb-3"> Titre de l&apos;article</h2>
        <div className="flex flex-col justify-center items-center mx-5 text-justify md:mx-20 md:max-w-[60%]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            incidunt similique itaque esse aliquam architecto! Atque, deserunt
            quis perspiciatis error aliquam, facilis reprehenderit officia
            voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
            Fugit possimus debitis voluptate aspernatur adipisci. Tenetur
            nostrum ut velit libero in cumque sequi, dolorem omnis, doloremque
            eos laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptas omnis similique, mollitia nostrum adipisci laudantium
            laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
            blanditiis, dolores, unde quo? In, veritatis.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            incidunt similique itaque esse aliquam architecto! Atque, deserunt
            quis perspiciatis error aliquam, facilis reprehenderit officia
            voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
            Fugit possimus debitis voluptate aspernatur adipisci. Tenetur
            nostrum ut velit libero in cumque sequi, dolorem omnis, doloremque
            eos laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptas omnis similique, mollitia nostrum adipisci laudantium
            laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
            blanditiis, dolores, unde quo? In, veritatis.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            incidunt similique itaque esse aliquam architecto! Atque, deserunt
            quis perspiciatis error aliquam, facilis reprehenderit officia
            voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
            Fugit possimus debitis voluptate aspernatur adipisci. Tenetur
            nostrum ut velit libero in cumque sequi, dolorem omnis, doloremque
            eos laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptas omnis similique, mollitia nostrum adipisci laudantium
            laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
            blanditiis, dolores, unde quo? In, veritatis.
          </p>
        </div>
      </div>

      {/* <p>Contenu de la page La Naturopathie...</p> */}
    </div>
  );
};

export default Naturopathie;
