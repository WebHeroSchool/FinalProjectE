// import classnames from 'classnames';
import styles from './Filters.module.css';

// function FilterComponent({ activeFilter, items, onClickSetActive }) {
//     const filters = [
//       {
//         id: 'incompleted',
//         name: 'Незавершенные',
//         count: items.filter(item => !item.isDone).length
//       },
//       {
//         id: 'completed',
//         name: 'Завершенные',
//         count: items.filter(item => item.isDone).length
//       },
//       {
//         id: 'all',
//         name: 'Все',
//         count: items.length
//       }
//     ];
//     return (
// 	    <ul className={styles['filters-list']}>
//         {filters
//             .filter(item => item)
//           	.map(item => (
//             	<li key={item.id}>
//               		<button
//               			className={classnames({
//                 			[styles.button]: true,
//                 			[styles.active]: (item.id === activeFilter)
//               			})}
//               			onClick={() => onClickSetActive(item)}
// 	              		>
// 	                	{item.name + ' '}
// 	                	<span className={styles.number}>{item.count}</span>
//                 	</button>
//            		</li>
//             ))}
//         </ul>
//   	);
// }

// export default FilterComponent;

const FilterComponent = ({items, activeFilters}) => {
		const allItems = {items};
	    const completedItems = items.filter(item => item.isDone === true);
	    const uncompletedItems = items.filter(item => item.isDone === false);

	    switch (activeFilters) {
	      case 'all':
	        items = allItems;
	        break;
	      case 'completedItems':
	        items = completedItems;
	        break;
	      case 'uncompletedItems':
	        items = uncompletedItems;
	        break;
	      default:
	        items = allItems;
	    };

	    return (
		    <div className={styles.menu}>
	            <button
	                onClick={() => {
	                    this.setState({
	                        activeFilters: 'completedItems',
	                    });
	                }} 
	                className={styles['menu__is-done']}
	            >
	                Завершённые 
	                <span className={styles['menu__is-done_span']}>
	                    {completedItems.length}
	                </span>
	            </button>
	            <button
	                onClick={() => {
	                   this.setState({
	                        activeFilters: 'uncompletedItems',
	                   });
	                }} 
	                className={styles['menu__isnt-done']}
	            >
	                Незавершённые 
	                <span className={styles['menu__isnt-done_span']}>
	                    {uncompletedItems.length}
	                </span>
	            </button>
	            <button
	                onClick={() => {
	                    this.setState({
	                        activeFilters: 'all',
	                    });
	                }} 
	                className={styles.menu__all}
	            >
	                Все
	            </button>
	        </div>
	    )
}

export default FilterComponent;