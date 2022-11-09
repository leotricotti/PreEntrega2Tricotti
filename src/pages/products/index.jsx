import { Card } from '../../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom';

export const Products = () => {
  const{categoryId}=useParams()
  return (
    <div>
      <Card categoryId={categoryId} />
    </div>
  )   
}