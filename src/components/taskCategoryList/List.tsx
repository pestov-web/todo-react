import { Task, Category } from '../../types/api';
import ListItem from './ListItem';
import ListSkeleton from './ListSkeleton';

function List({
  data,
  categories,
  loading,
}: {
  data: Task[] | Category[];
  categories?: Category[];
  loading: boolean;
}) {
  if (loading) return <ListSkeleton />;

  return (
    <>
      <ul className="list">
        {data.map((item) => {
          const category = categories?.find(
            (cat) => cat.id === (item as Task).categoryId
          );
          return (
            <li key={item.id} className="list__item">
              <ListItem data={item} category={category} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
