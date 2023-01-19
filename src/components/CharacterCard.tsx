type CharacterProps = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
  episode?: string[];
};

export const CharacterCard = ({
  data: { name, id, status, species, gender, image },
}: {
  data: CharacterProps;
}) => {
  return (
    <div>
      {name}
      {id}
      {status}
      {species}
      {gender}
      <img src={image} alt={name} />
    </div>
  );
};
