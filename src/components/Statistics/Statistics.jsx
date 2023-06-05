import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(item => {
            return (
                <li
                className={css.item}
                key={item.id}
                style={{
                    backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                    ).toString(16)}`,
                }}
                >
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}</span>
                </li>
            );
            })}
        </ul>
        </section>
    );
    };
    Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ),
    };
export default Statistics;