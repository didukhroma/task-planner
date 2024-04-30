import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleClick = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleClick(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleClick(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleClick(statusFilters.completed)}
      >
        {" "}
        Completed
      </Button>
    </div>
  );
};
