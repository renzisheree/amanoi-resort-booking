interface NearbyResort {
  id: number;
  path: string;
  location: string;
  name: string;
}

interface NearbyResortProps {
  nearbyResortItem: NearbyResort;
}

const NearbyResortCard: React.FC<NearbyResortProps> = ({
  nearbyResortItem,
}) => {
  return (
    <div className="text-center">
      <img src={nearbyResortItem.path} className="w-[700px]" alt="" />

      <h2 className="italic">{nearbyResortItem.location}</h2>

      <h3 className="font-bold italic">{nearbyResortItem.name}</h3>
    </div>
  );
};

export default NearbyResortCard;
