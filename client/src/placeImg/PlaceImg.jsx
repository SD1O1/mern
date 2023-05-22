export default function PlaceImg({place,index=0,className=null}){
    if(!place.photo?.length){
        return '';
    }
    if (!className) {
        className = 'object-cover';
      }
      return (
        <img className={className} src={http[index]} alt=""/>
      );
}