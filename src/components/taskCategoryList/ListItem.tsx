import { Tasks, Category } from '../../types/api';
import { Icon } from '@iconify/react';
function ListItem({
  data,
  category,
}: {
  data: Tasks | Category;
  category?: Category;
}) {
  return (
    <div className="list-item">
      <div className="list-item__info">
        <div className="list-item__header">
          <h2 className="list-item__title">{data.name}</h2>
          {category && (
            <span className="list-item__category">
              <Icon icon="mdi:folder" className="list-item__category-icon" />
              {category.name}
            </span>
          )}
        </div>
        <p className="list-item__description">{data.description}</p>
      </div>
      <div className="list-item__actions">
        <button className="button list-item__button">
          <Icon icon="mdi:edit" className="list-item__button-icon" />
        </button>
        <button className="button list-item__button">
          <Icon icon="mdi:delete" className="list-item__button-icon" />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
