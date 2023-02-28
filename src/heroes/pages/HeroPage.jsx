import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../ui/components/Footer";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {id} = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const heroImageUrl = `../../../public/assets/heroes/${id}.jpg`;

  if(!hero) {
    <Navigate to={"/marvel"} />
  }

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeIn" src={heroImageUrl} alt={hero.superhero} />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b>{hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b>{hero.publisher}</li>
          <li className="list-group-item"> <b>First appareance:</b>{hero.first_appearance}</li>
        </ul>

        <h5 className="">Characters</h5>
        <p>{hero.characters}</p>

        <button onClick={handleReturn} className="btn btn-primary">Back</button>
      </div>

      <Footer />
    </div>
  )
}
