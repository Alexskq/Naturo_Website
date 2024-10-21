import { House } from "lucide-react";
import Link from "next/link";

const Naturopathie = () => {
  return (
    <div className="flex flex-col h-screen w-[80%] justify-start items-center mx-auto">
      <div className="flex flex-col">
        <p className="text-xl mt-10 font-bold text-[#979F77] self-start ml-5 flex justify-center items-center gap-2">
          <House size={20} strokeWidth={2} />
          <Link href="/">Accueil</Link>
        </p>
        <div className="artboard artboard-horizontal phone-1 bg-slate-500 my-4 h-72 relative mt-10">
          812×375
          <div className="bg-green-500 h-[200px] w-[80%] relative mx-auto top-[250px] opacity-50 flex justify-center items-center">
            <h1 className="text-red-500 text-4xl font-bold">La Naturopathie</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 pb-40">
        <h2 className="text-lg font-semibold mb-3"> Titre de l&apos;article</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          incidunt similique itaque esse aliquam architecto! Atque, deserunt
          quis perspiciatis error aliquam, facilis reprehenderit officia
          voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
          Fugit possimus debitis voluptate aspernatur adipisci. Tenetur nostrum
          ut velit libero in cumque sequi, dolorem omnis, doloremque eos
          laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptas omnis similique, mollitia nostrum adipisci laudantium
          laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
          blanditiis, dolores, unde quo? In, veritatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          incidunt similique itaque esse aliquam architecto! Atque, deserunt
          quis perspiciatis error aliquam, facilis reprehenderit officia
          voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
          Fugit possimus debitis voluptate aspernatur adipisci. Tenetur nostrum
          ut velit libero in cumque sequi, dolorem omnis, doloremque eos
          laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptas omnis similique, mollitia nostrum adipisci laudantium
          laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
          blanditiis, dolores, unde quo? In, veritatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          incidunt similique itaque esse aliquam architecto! Atque, deserunt
          quis perspiciatis error aliquam, facilis reprehenderit officia
          voluptatum tempore ipsam voluptas deleniti? Excepturi. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Fuga, sunt pariatur!
          Fugit possimus debitis voluptate aspernatur adipisci. Tenetur nostrum
          ut velit libero in cumque sequi, dolorem omnis, doloremque eos
          laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptas omnis similique, mollitia nostrum adipisci laudantium
          laboriosam ad amet doloribus repudiandae ullam nam doloremque ipsum
          blanditiis, dolores, unde quo? In, veritatis.
        </p>
      </div>

      {/* <p>Contenu de la page La Naturopathie...</p> */}
    </div>
  );
};

export default Naturopathie;
